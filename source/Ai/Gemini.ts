import { GoogleGenerativeAI } from "@google/generative-ai";
import { FunctionBased } from "outers";

// Import Credentials
import { Token } from "../config/credentials";

const APIKey = Token.GEMINI_TOKEN; // API Key from .env file

const genAI = new GoogleGenerativeAI(APIKey);
const temperature = [0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7];
const maxOutputTokens = [ 200, 250, 300, 350, 400, 450, 500, 550, 600];

/**
 * Generates content based on the provided prompt.
 * @param prompt - The prompt to generate content from.
 * @returns A promise that resolves to the generated content as a string or an array of strings.
 */
export default async function GenerateContent(prompt: string): Promise<string | string[]> {
    const Model = genAI.getGenerativeModel({model: "gemini-1.5-flash", generationConfig: {
        temperature: temperature[FunctionBased.RandomGenerator.Number(1, true)],
        maxOutputTokens: maxOutputTokens[FunctionBased.RandomGenerator.Number(1, true)],
        responseMimeType: "text/plain"
    } })
    
    const response = await Model.generateContent(prompt);
    return response.response.text();
}