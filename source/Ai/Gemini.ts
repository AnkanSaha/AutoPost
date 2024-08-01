import { GoogleGenerativeAI } from "@google/generative-ai";

// Import Credentials
import { Token } from "../config/credentials";

const APIKey = Token.GEMINI_TOKEN; // API Key from .env file

const genAI = new GoogleGenerativeAI(APIKey);

const Model = genAI.getGenerativeModel({model: "gemini-1.5-flash" })

const prompt = "Write a javascript Array of topics for linkedin post ideas for a software developer, i need just 5 topics in simple array format, not objects or anything fancy, just simple array of strings"


/**
 * Generates content based on the provided prompt.
 * @param prompt - The prompt to generate content from.
 * @returns A promise that resolves to the generated content as a string or an array of strings.
 */
export default async function GenerateContent(prompt: string): Promise<string | string[]> {
    const response = await Model.generateContent(prompt);
    return response.response.text();
}