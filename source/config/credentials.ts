import { config } from "dotenv";
config(); // read .env file

export const Token = {
    GEMINI_TOKEN: String(process.env.GEMINI_API_KEY),
}