import 'dotenv/config';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getModelName, ModelType } from "./config/models";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generateText(prompt: string, modelType: ModelType = "fast") {
  const modelName = getModelName(modelType);
  const model = genAI.getGenerativeModel({ model: modelName });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
