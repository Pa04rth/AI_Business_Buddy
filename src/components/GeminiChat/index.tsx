import React from "react";
import "@google/gemini-chat-react/dist/index.css";
import useGeminiChat from "../../hooks/useGeminiChat";
// import { useChat } from '../../hooks/useChat';
// import { useChatConfig } from '../../hooks/useChatConfig';

export default async function GeminiChat() {
  // const { chatId, chatTitle, chatDescription } = useChatConfig();
  // const { chat, setChat } = useChat();
  const { geminiChat, setGeminiChat } = useGeminiChat();
  if (!geminiChat) {
    return null;
  }

  return;
}
