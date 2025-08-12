import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function runChat(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text; // Note: no parentheses, it's a property
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
export default runChat;
