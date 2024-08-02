/* eslint-disable @typescript-eslint/no-explicit-any */
import {Token} from '../config/credentials';

export default async function DevToPoster(fullPostDetails: any) {
    for(let i = 0; i < fullPostDetails.length; i++) {
        fetch("https://dev.to/api/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": Token.DEV_TO_API_KEY
            },
            body: JSON.stringify({
                article: {
                    "title": fullPostDetails[i].topic,
                    "body_markdown": fullPostDetails[i].content,
                    "published": true,
                    "tags": fullPostDetails[i].tags,
                }
            })
        }).then((response) => {
            response.json().then((data) => {
                console.log(data)
            })
        })
    }
}