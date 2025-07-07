import { useEffect, useState } from "react";
export default function useGeminiChat() {
  const [geminiChat, setGeminiChat] = useState(null);

  useEffect(() => {
    const loadGeminiChat = async () => {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({
        apiKey: process.env.REACT_APP_GEMINI_API_KEY,
      });
      setGeminiChat(ai);
    };

    loadGeminiChat();
  }, []);

  return { geminiChat, setGeminiChat };
}
