// Import Ai Generator Model
import GeminiGenerateContent from "../Ai/Gemini"
const topicAreas: string[] = ["MERN stack", "MongoDB", "Nodejs", "Docker", "Express", "React", "Redux", "Javascript", "Typescript", "software development", "software engineering", "software developer", "Automation", "Testing", "Quality Assurance", "DevOps", "Cloud Computing", "AWS", "Azure", "Google Cloud", "Kubernetes", "Microservices", "APIs", "RESTful APIs", "GraphQL", "Web Development", "Frontend Development", "Backend Development", "Fullstack Development", "Mobile Development", "Desktop Development", "Game Development", "Machine Learning", "Artificial Intelligence", "Data Science", "Big Data", "Data Engineering", "Data Analysis", "Data Visualization", "Business Intelligence", "Cybersecurity", "Ethical Hacking", "Penetration Testing", "Network Security", "Blockchain", "Cryptocurrency", "DeFi", "NFTs", "Web3", "Decentralized Applications", "Smart Contracts", "Solidity", "Ethereum", "Bitcoin", "Altcoins", "Trading", "Investing", "Personal Finance", "Financial Independence", "Retirement Planning", "Wealth Management", "Stock Market", "Real Estate", "Entrepreneurship", "Startups", "Venture Capital", "Angel Investing", "Private Equity", "Growth Hacking", "Digital Marketing", "Content Marketing", "Social Media Marketing", "Search Engine Optimization", "Email Marketing", "Influencer Marketing", "Affiliate Marketing", "Ecommerce", "Dropshipping", "Freelancing", "Remote Work", "Productivity", "Time Management", "Goal Setting", "Habits", "Mindset", "Mental Health", "Self-Care", "Wellness", "Fitness", "Nutrition", "Yoga", "Meditation", "Spirituality", "Astrology", "Tarot", "Psychology", "Philosophy", "History", "Literature", "Music", "Art", "Film", "Photography", "Fashion", "Design", "Architecture", "Travel", "Food", "Cooking", "Baking", "Mixology", "Coffee", "Tea", "Wine", "Beer", "Cocktails", "Spirits", "Craft Beer", "Whiskey", "Bourbon", "Scotch", "Rum", "Gin", "Vodka", "Tequila", "Mezcal", "Sake", "Cognac", "Brandy", "Liqueurs", "Cordials", "Aperitifs", "Digestifs", "Wine Pairing", "Cocktail Pairing", "Food Pairing", "Travel Pairing", "Coffee Pairing", "Tea Pairing"]

export default async function GenerateTopic(topic: string): Promise<string | string[]> {
    const prompt = `Write a javascript Array of topics for linkedin post ideas for a software developer, i need just 2 topics in simple array format, not objects or anything fancy, just simple array of strings, i just only array no text or markdown or anything else, just array of strings, You must pick the topics from ${topic} & all relevant topic that match with them or similar to them`

    const response = String(await GeminiGenerateContent(prompt))
    return JSON.parse(response); // Return the topics

}


export async function GenerateContentTags(topic: string): Promise<string| string[]> {
    const prompt = `Write a javascript Array of tags for linkedin post ideas for a software developer, i need just 3 tags in simple array format, in simple one line text, not dot or not objects or anything fancy, just simple array of strings, i just only array no text or markdown or anything else, just array of strings, You must pick the tags from ${topic} & all relevant topic that match with them or similar to them, you can also include some general tags like software development, software engineering etc in utf-8 format only & don't include non-alphanumeric or prohibited unicode characters don't give me tags with spaces or special characters, just simple tags in utf-8 format`

    const response = String(await GeminiGenerateContent(prompt));
    return JSON.parse(response); // Return the tags
}

export async function GenerateFullPost(): Promise<string | object[]> {
    const fullPostDetails: object[] = []
    const SelectedSingleTopic: string = topicAreas[Math.floor(Math.random() * topicAreas.length)]

    // Generate Topics
    const topics = await GenerateTopic(SelectedSingleTopic);


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