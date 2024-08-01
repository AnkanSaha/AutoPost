import { config } from "dotenv";
config(); // read .env file

// Import Types
import { TokenInterface, GeneralInterface } from "../Interface/credentials.interface";

export const Token: TokenInterface = {
    GEMINI_TOKEN: String(process.env.GEMINI_API_KEY),
    DEV_TO_API_KEY: String(process.env.DEV_TO_API_KEY),
}

export const General: GeneralInterface = {
    PORT: Number(process.env.PORT) || 4567,
}