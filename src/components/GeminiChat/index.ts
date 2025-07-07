import React from "react";
import { GeminiChat as GeminiChatComponent } from "@google/gemini-chat-react";
import "@google/gemini-chat-react/dist/index.css";
import { useGeminiChat } from "../../hooks/useGeminiChat";
import { useChat } from "../../hooks/useChat";
import { useChatConfig } from "../../hooks/useChatConfig";
export default function GeminiChat() {
  const { chatId, chatTitle, chatDescription } = useChatConfig();
  const { chat, setChat } = useChat();
  const { geminiChat, setGeminiChat } = useGeminiChat();
  if (!geminiChat) {
    return null;
  }

  return;
  <GeminiChatComponent
    chatId={chatId}
    chatTitle={chatTitle}
    chatDescription={chatDescription}
    chat={chat}
    setChat={setChat}
    geminiChat={geminiChat}
    setGeminiChat={setGeminiChat}
  />;
}
