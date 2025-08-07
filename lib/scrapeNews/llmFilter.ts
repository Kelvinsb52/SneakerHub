/* 
An LLM filter that will take in the json scraped results key and text 
predict whether the text is a actual shoe
if it is, then write the key and predicted name of shoe in a .txt
iterate

*/
import { readFile, writeFile, appendFile } from 'fs/promises';
import OpenAI from "openai";

const client = new OpenAI();

function extractJsonBlock(content: string | null): string | null {
  if (!content) return null;
  const match = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  return match ? match[1].trim() : content.trim();
}

async function extractShoeInfo(text: string): Promise<null | { name: string }> {
  const prompt = `
You are a product classifier and extractor for sneaker-related social media posts.

Given the following text from a social media post, return a JSON object.

If the text is about a sneaker or shoe model, return:
{ "isShoe": true, "shoeName": "[Name of the shoe]" }

If it is NOT about a sneaker or shoe, return:
{ "isShoe": false }

Only return the JSON. Here is the text:

"${text}"
`;

  const completion = await client.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4o",
    temperature: 0,
  });

    const raw = completion.choices[0].message.content;
    const cleaned = extractJsonBlock(raw);

    try {
    const parsed = JSON.parse(cleaned!);
    if (parsed.isShoe) {
        return { name: parsed.shoeName };
    }
    } catch (e) {
    console.error("Could not parse JSON from model:", raw);
    }


    return null;
}


async function main() {
  try {
    const fileContent = await readFile('./results.txt', 'utf-8');
    const data: Record<string, any> = JSON.parse(fileContent);

    const filteredResults: any[] = [];

    for (const [key, value] of Object.entries(data)) {
      const text = value.text;
      const result = await extractShoeInfo(text);

      if (result) {
        // Push structured object to array
        filteredResults.push({
          id: key,
          text: value.text,
          likes: value.likes,
          retweets: value.retweet,
          replies: value.replies,
          views: value.views,
          extractedInfo: result,
        });

        console.log(`✅ Saved: ${key}`);
      } else {
        console.log(`❌ Skipped: ${text}`);
      }
    }

    // Write array to JSON file
    await writeFile('./filtered_results.json', JSON.stringify(filteredResults, null, 2), 'utf-8');
    console.log('✅ All results saved to filtered_results.json');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main();