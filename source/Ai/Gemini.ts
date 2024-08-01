import { GoogleGenerativeAI } from "@google/generative-ai";

// Import Credentials
import { Token } from "../config/credentials";

const APIKey = Token.GEMINI_TOKEN; // API Key from .env file

const genAI = new GoogleGenerativeAI(APIKey);

const Model = genAI.getGenerativeModel({model: "gemini-1.5-flash" })

const prompt = "Write a javascript Array of topics for linkedin post ideas for a software developer, i need just 5 topics in simple array format, not objects or anything fancy, just simple array of strings"

Model.generateContent(prompt).then((response) => {
    console.log(response.response.text())
})