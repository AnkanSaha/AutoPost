/* eslint-disable @typescript-eslint/no-explicit-any */
import {Token} from '../config/credentials';
import { post } from 'axios';

export default async function DevToPoster(fullPostDetails: any) {
    console.log("FullPostDetails on DevTo", fullPostDetails);
    for(let i = 0; i < fullPostDetails.length; i++) {
        await post("https://dev.to/api/articles", {
            article: {
                "title": fullPostDetails[i].topic,
                "body_markdown": fullPostDetails[i].content,
                "published": true,
                "tags": fullPostDetails[i].tags,
            }
        }, {
            headers: {
                "Content-Type": "application/json",
                "api-key": Token.DEV_TO_API_KEY
            }
        });
    }
}