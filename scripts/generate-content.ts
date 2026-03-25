import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from '@google/generative-ai';

// .env ファイルからの読み込みを想定（今回は process.env より取得）
const API_KEY = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

const toolsPath = path.join(process.cwd(), 'src/data/tools.json');

async function generatePremiumContent() {
  if (!API_KEY) {
    console.error('❌ Error: GEMINI_API_KEY is not set.');
    console.log('Please set GEMINI_API_KEY as an environment variable.');
    return;
  }

  console.log('🚀 Starting Premium Content Engine with Gemini...');
  const tools = JSON.parse(fs.readFileSync(toolsPath, 'utf8'));

  for (const tool of tools) {
    console.log(`✨ Refining content for: ${tool.name}...`);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const prompt = `
      あなたは一流のマーケティングコンサルタント兼AIエンジニアです。
      以下のツールについて、日本の「中小企業」が明日から使える具体的な「活用レシピ（プロンプト等）」と、
      そのツールを使うことでどれだけ稼げるか、または効率化できるかの視点で解説を生成してください。

      ツール名: ${tool.name}
      カテゴリ: ${tool.category}
      現在の説明: ${tool.description}

      以下のJSON形式で出力してください：
      {
        "refined_description": "より「稼げる」視点での魅力的な説明文（150字程度）",
        "recipe": {
          "title": "目を引く「〇〇レシピ」というタイトル",
          "description": "このレシピの効能についての解説",
          "prompt": "そのままコピペして使える高精度な日本語プロンプト"
        },
        "meta": {
          "keywords": ["ツール名 使い方", "AI 効率化", "中小企業 AI"]
        }
      }
    `;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // JSONの抽出
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const aiData = JSON.parse(jsonMatch[0]);
        tool.description = aiData.refined_description;
        tool.recipe = aiData.recipe;
        tool.meta.keywords = aiData.meta.keywords;
        tool.meta.lastUpdated = new Date().toISOString();
        console.log(`✅ Success: ${tool.name} updated.`);
      }
    } catch (error) {
      console.error(`❌ Failed to generate content for ${tool.name}:`, error);
    }
  }

  fs.writeFileSync(toolsPath, JSON.stringify(tools, null, 2));
  console.log('🏁 Content Generation Cycle Complete.');
}

generatePremiumContent();
