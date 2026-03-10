import { GoogleGenerativeAI } from "@google/generative-ai";
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = gemini.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function askGemini(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}
