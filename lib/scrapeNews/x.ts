/* 
Scraping 10 shoes from X based on the following metrics
views
comments
likes
reports
from 2 accounts -> 5 from Sneaker News, and 5 Complex Sneakers
*/

import { ApifyClient } from 'apify-client';
import { writeFile } from 'fs/promises';

// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: process.env.APIFY_KEY!,
});

// Prepare Actor input
const sneakerNews = {
    "maxItems": 500,
    "queryType": "Latest",
    "lang": "en",
    "from": "SneakerNews",
    "filter:blue_verified": false,
    "filter:nativeretweets": false,
    "include:nativeretweets": false,
    "filter:replies": false,
    "filter:quote": false,
    "filter:has_engagement": false,
    "min_retweets": 0,
    "min_faves": 0,
    "min_replies": 0,
    "-min_retweets": 0,
    "-min_faves": 0,
    "-min_replies": 0,
    "filter:media": false,
    "filter:twimg": false,
    "filter:images": false,
    "filter:videos": false,
    "filter:native_video": false,
    "filter:vine": false,
    "filter:consumer_video": false,
    "filter:pro_video": false,
    "filter:spaces": false,
    "filter:links": false,
    "filter:mentions": false,
    "filter:news": false,
    "filter:safe": false,
    "filter:hashtags": false
};

const complexSneakers = {
    "maxItems": 500,
    "queryType": "Latest",
    "lang": "en",
    "from": "ComplexSneakers",
    "filter:blue_verified": false,
    "filter:nativeretweets": false,
    "include:nativeretweets": false,
    "filter:replies": false,
    "filter:quote": false,
    "filter:has_engagement": false,
    "min_retweets": 0,
    "min_faves": 0,
    "min_replies": 0,
    "-min_retweets": 0,
    "-min_faves": 0,
    "-min_replies": 0,
    "filter:media": false,
    "filter:twimg": false,
    "filter:images": false,
    "filter:videos": false,
    "filter:native_video": false,
    "filter:vine": false,
    "filter:consumer_video": false,
    "filter:pro_video": false,
    "filter:spaces": false,
    "filter:links": false,
    "filter:mentions": false,
    "filter:news": false,
    "filter:safe": false,
    "filter:hashtags": false
};

const websites = [sneakerNews, complexSneakers];

(async () => {
    console.time('⏱ Execution Time');

  // Start all scrapes in parallel
    const runs = await Promise.all(
    websites.map(site => client.actor("CJdippxWmn9uRfooo").call(site))
  );

  // Fetch results from all datasets
    const datasets = await Promise.all(
    runs.map(run => client.dataset(run.defaultDatasetId).listItems())
  );

  // Combine and process all results
    const allResults: Record<string, any> = {};
    datasets.forEach((dataset, i) => {
        dataset.items.forEach((item, index) => {
        const author = item.author as any;

        allResults[`${websites[i].from} - Item ${index + 1}`] = {
        text: item.text,
        url: item.url,
        likes: item.likeCount,
        replies: item.replyCount,
        views: item.viewCount,
        bookmark: item.bookmark,
        retweet: item.retweetCount,
        date: item.createdAt,
        author: author?.name,
        authorUsername: author?.userName,
        followers: author?.followers,
        };
    });
    });

  await writeFile('results.txt', JSON.stringify(allResults, null, 2), 'utf-8');
  console.log('✅ Done');
  console.timeEnd('⏱ Execution Time');
})();

/* 
Every 40 items cost me $0.01; 1 Cent.
*/