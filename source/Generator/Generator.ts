// Import Ai Generator Model
import GeminiGenerateContent from "../Ai/Gemini"

export default async function GenerateTopic(): Promise<string | string[]> {
    const prompt = `Write a javascript Array of topics for linkedin post ideas for a software developer, i need just 2 topics in simple array format, not objects or anything fancy, just simple array of strings, i just only array no text or markdown or anything else, just array of strings, You must pick the topics from MERN stack, MongoDB, Nodejs, Docker, Express, React, Redux,, Javascript, Typescript or all relevant topic that match with them or similar to them, you can also include some general topics like software development, software engineering etc this all must be unique`

    const response = String(await GeminiGenerateContent(prompt))
    return JSON.parse(response); // Return the topics

}


export async function GenerateContentTags(topic: string): Promise<string| string[]> {
    const prompt = `Write a javascript Array of tags for linkedin post ideas for a software developer, i need just 3 tags in simple array format, in simple one line text, not dot or not objects or anything fancy, just simple array of strings, i just only array no text or markdown or anything else, just array of strings, You must pick the tags from ${topic} stack, MongoDB, Nodejs, Docker, Express, React, Redux,, Javascript, Typescript or all relevant topic that match with them or similar to them, you can also include some general tags like software development, software engineering etc in utf-8 format only & don't include non-alphanumeric or prohibited unicode characters don't give me tags with spaces or special characters, just simple tags in utf-8 format`

    const response = String(await GeminiGenerateContent(prompt));
    return JSON.parse(response); // Return the tags
}

export async function GenerateFullPost(): Promise<string | object[]> {
    const fullPostDetails: object[] = []

    // Generate Topics
    const topics = await GenerateTopic();


    // Generate Content for each topic
    for (const singleTopic of topics) {
            const prompt = `Write a linkedin post for about ${singleTopic}`
            const tags = await GenerateContentTags(singleTopic);
            const response = await GeminiGenerateContent(prompt);
            fullPostDetails.push({
                topic: singleTopic,
                content: response,
                tags: tags
            })
    }

    // Return the full post details
    return fullPostDetails

}