// import cron from "node-cron"; // Import the node-cron module
import { Console, Retry } from "outers"; // Import the Console module
import { GenerateFullPost } from "../Generator/Generator"; // Generate Full Post

// Social Media Post Scheduler
import DevToPoster from "../Poster/DevToPoser";

// Get All Post Data Then Send Post to Social Media
export const PostToSocialMedia = async () => {
    // Get All Post Data
    const FullPostDetails = await GenerateFullPost();
    console.log("FullPostDetails", FullPostDetails);
    
    // Send Post to Social Media
    DevToPoster(FullPostDetails); // Send Post to Dev.to
}

export default () => {
  // Schedule the cron job to run every night at 12 AM
    Retry.Hours(async ()=> {
      Console.green(
        `Running cron job for Daily Post Generation at ${new Date().toLocaleString()}`
      );
      await PostToSocialMedia();
    }, 1, true);
  // });
};
