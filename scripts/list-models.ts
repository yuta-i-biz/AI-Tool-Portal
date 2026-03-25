import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";

async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  try {
    // There is no direct listModels in the simple SDK, but we can try a known good model
    const models = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-2.0-flash-exp", "gemini-pro"];
    for (const m of models) {
      console.log(`Testing model: ${m}...`);
      const model = genAI.getGenerativeModel({ model: m });
      try {
        const result = await model.generateContent("test");
        console.log(`✅ ${m} is working!`);
        break;
      } catch (e: any) {
        console.log(`❌ ${m} failed: ${e.message}`);
      }
    }
  } catch (e) {
    console.error("Fatal Error:", e);
  }
}

listModels();
