"use client"
// src/components/chatbox.tsx
import { useState } from "react";
import { useRef } from "react";


export default function ChatBox() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [messages, setMessages] = useState<{sender: "user" | "luxy"; text: string}[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current;
    setInput(e.target.value);

    if(el){
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }

  const handleSubmit = async () => {
  if (!input.trim()) return;

  // Add the user's message
  setMessages((prev) => [...prev, { sender: "user", text: input }]);
  setInput("");

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input }),
  });

  const reader = res.body?.getReader();
  const decoder = new TextDecoder();

  if (!reader) {
    return;
  }

  let aiResponse = "";

  setMessages((prev) => [...prev, { sender: "luxy", text: "" }]);

  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }

    const chunk = decoder.decode(value);
    const lines = chunk.split("\n");

    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const content = line.replace("data: ", "").replace(/^\s+|\n+$/g, "");
        if (content === "[END]") {
          return;
        }

        aiResponse += content + " ";

        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];

          if (last.sender === "luxy") {
            updated[updated.length - 1] = {
              ...last,
              text: aiResponse,
            };
          }

          return updated;
        });
      }
    }
  }
};


  return (
    <div className="h-[400px] w-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-2 border rounded-lg bg-white">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 ${
                msg.sender === "user" ? "text-right" : "text-left font-semibold"
              }`}
            >
              <div
                className={`inline-block px-3 py-2 rounded-md max-w-[70%] break-words ${
                  msg.sender === "user"
                    ? "bg-gray-200 text-black"
                    : "bg-blue-100 text-black"
                }`}

              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="flex items-end gap-2 mt-2">
        <textarea
          ref={textareaRef}
          rows={1}
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); 
              handleSubmit();     
            }
          }}
          placeholder="Ask Luxy about your business!"
          className="flex-1 overflow-hidden resize-none p-2 border rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-black text-black rounded"
        >
          Submit
        </button>
      </div>
    </div>

  );
}