import cron from "node-cron"; // Import the node-cron module
import { Console } from "outers"; // Import the Console module
import { GenerateFullPost } from "../Generator/Generator"; // Generate Full Post

// Social Media Post Scheduler
import DevToPoster from "../Poster/DevToPoser";

// Get All Post Data Then Send Post to Social Media
export const PostToSocialMedia = async () => {
    // Get All Post Data
    const FullPostDetails = await GenerateFullPost();
    
    // Send Post to Social Media
    DevToPoster(FullPostDetails); // Send Post to Dev.to
}

export default () => {
  // Schedule the cron job to run every night at 12 AM
  cron.schedule("0 0 7,9,12,14,16,18,20,22,0,2,4,6 * * *", async () => {
    Console.green(
      `Running cron job for Daily Post Generation at ${new Date().toLocaleString()}`
    );
    await PostToSocialMedia();
  });
};
