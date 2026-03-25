import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { generateText } from '../src/lib/gemini';

async function generateToolReview(toolName: string, category: string) {
  console.log(`🌟 Generating AI Review for: ${toolName} (${category})...`);

  const prompt = `
    Act as a Senior AI Solutions Consultant & Professional Affiliate Marketer.
    Create a high-conversion tool review entry for "${toolName}" in the category of "${category}".
    
    Target Audience: Small business owners and solo entrepreneurs looking to increase ROI using AI.
    Language: Japanese.

    Output in JSON format with the following structure:
    {
      "id": "lowercase-id",
      "name": "Tool Name",
      "category": "Category Name",
      "description": "Benefit-driven description (approx 100-150 chars)",
      "pricing": "Pricing info or Reward structure in Japanese",
      "url": "Official URL",
      "affiliate_url": "Affiliate/Official URL",
      "marunage_cta": "A persuasive CTA to upsell 'Marunage CMO' consulting",
      "recipe": {
        "title": "A concrete use-case recipe title",
        "description": "How this tool transforms the business",
        "prompt": "A powerful, copy-pasteable Gemini/GPT prompt for this tool"
      },
      "meta": {
        "seoScore": 95,
        "keywords": ["keyword1", "keyword2"]
      }
    }

    Rules:
    1. PROMPT: The "recipe.prompt" must be a HIGH-VALUE, actual prompt that users can use immediately.
    2. MARUNAGE CTA: Connect the tool's usage to the benefits of "Marunage CMO" service.
    3. JSON only.
  `;

  try {
    const response = await generateText(prompt);
    const jsonStart = response.indexOf('{');
    const jsonEnd = response.lastIndexOf('}') + 1;
    const toolData = JSON.parse(response.substring(jsonStart, jsonEnd));
    
    toolData.meta.lastUpdated = new Date().toISOString();

    const dataPath = path.join(__dirname, '../src/data/tools.json');
    const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    // Check if tool already exists
    const index = existingData.findIndex((t: any) => t.id === toolData.id);
    if (index !== -1) {
      existingData[index] = toolData;
      console.log(`Updated existing tool: ${toolData.name}`);
    } else {
      existingData.push(toolData);
      console.log(`Added new tool: ${toolData.name}`);
    }

    fs.writeFileSync(dataPath, JSON.stringify(existingData, null, 2));
    console.log(`✅ ${toolName} review saved to tools.json`);
  } catch (error) {
    console.error("Failed to generate tool review:", error);
  }
}

// Get arguments from command line
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: npx ts-node scripts/generate-tool-reviews.ts <ToolName> <Category>");
  process.exit(1);
}

generateToolReview(args[0], args[1]);
