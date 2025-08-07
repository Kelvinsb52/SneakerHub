// src/app/api/chat/route.ts
export const runtime = "nodejs";

import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { PromptTemplate } from "@langchain/core/prompts";
import { NextRequest } from "next/server";

const memory = new BufferMemory({
  returnMessages: true,
  memoryKey: "history",
  inputKey: "input",
});

const prompt = PromptTemplate.fromTemplate(`
You are a helpful AI assistant.
Conversation history:
{history}

Human: {input}
AI:
`);

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      const streamCallback = {
        handleLLMNewToken(token: string) {
          controller.enqueue(encoder.encode(`data: ${token}\n\n`));
        },
        handleLLMEnd() {
          controller.enqueue(encoder.encode("data: [END]\n\n"));
          controller.close();
        },
        handleLLMError(err: Error) {
          controller.enqueue(encoder.encode("data: [ERROR]\n\n"));
          controller.close();
        },
      };

      const chat = new ChatOpenAI({
        temperature: 0.8,
        streaming: true,
        modelName: "gpt-3.5-turbo",
        openAIApiKey: process.env.OPENAI_API_KEY!,
        callbacks: [streamCallback],
      });

      const chain = new ConversationChain({
        llm: chat,
        memory,
        prompt,
      });

      chain.call({ input }).catch((err) => {
        controller.enqueue(encoder.encode(`data: [ERROR: ${err.message}]\n\n`));
        controller.close();
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
