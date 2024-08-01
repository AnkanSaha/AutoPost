import { GoogleGenerativeAI } from "@google/generative-ai";

// Import Credentials
import { Token } from "../config/credentials";

const APIKey = Token.GEMINI_TOKEN; // API Key from .env file

const genAI = new GoogleGenerativeAI(APIKey);
const temperature = [0.1, 0.3, 0.5, 0.7, 0.9];
const maxOutputTokens = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

const Model = genAI.getGenerativeModel({model: "gemini-1.5-flash", generationConfig: {
    temperature: temperature[Math.floor(Math.random() * temperature.length)],
    maxOutputTokens: maxOutputTokens[Math.floor(Math.random() * maxOutputTokens.length)]
} })

/**
 * Generates content based on the provided prompt.
 * @param prompt - The prompt to generate content from.
 * @returns A promise that resolves to the generated content as a string or an array of strings.
 */
export default async function GenerateContent(prompt: string): Promise<string | string[]> {
    const response = await Model.generateContent(prompt);
    return response.response.text();
}