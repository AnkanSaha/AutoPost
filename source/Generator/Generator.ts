// Import Ai Generator Model
import GeminiGenerateContent from "../Ai/Gemini"
import {FunctionBased} from "outers";

export default async function GenerateTopic(): Promise<string | string[]> {
    const prompt = `Write a javascript Array of topics for linkedin post ideas for a software developer, i need just ${FunctionBased.RandomGenerator.Number(1, false)} topics in simple array format, not objects or anything fancy, just simple array of strings, i just only array no text or markdown or anything else, just array of strings, You must pick the topics from MERN stack, MongoDB, Nodejs, Docker, Express, React, Redux,, Javascript, Typescript, Ci/Cd or all relevant topic that match with them or similar to them, you can also include some general topics like software development, software engineering etc`
    console.log("Prompt: ", prompt)
    const response = String(await GeminiGenerateContent(prompt))
    return JSON.parse(response.trim())

}

export async function GenerateFullPost(): Promise<string | object[]> {
    const fullPostDetails: object[] = []

    // Generate Topics
    const topics = await GenerateTopic();
    console.log("Topics All: ", topics.length)

    // Generate Content for each topic
    for (const singleTopic of topics) {
            const prompt = `Write a linkedin post for a software developer about ${singleTopic}`
            const response = await GeminiGenerateContent(prompt);
            fullPostDetails.push({
                topic: singleTopic,
                content: response
            })
    }

    // Return the full post details
    return fullPostDetails

}