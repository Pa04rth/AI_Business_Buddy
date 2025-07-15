import React, { useRef, useEffect, useState } from "react";
import { X, Send } from "lucide-react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/main";
import { auth } from "@/main";

interface ChatPanelProps {
  onClose: () => void;
}

interface Message {
  id: string;
  prompt?: string;
  response?: string;
  role: "user" | "model";
  createdAt: any;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const getCurrentUserId = (): string => {
    const userId = auth?.currentUser?.uid || "demo";
    console.log("📧 Current User ID:", userId);
    return userId;
  };

  useEffect(() => {
    console.log("🔄 ChatPanel mounted, setting up Firestore listener");

    const userId = getCurrentUserId();
    const chatPath = `chats/${userId}/messages`;
    console.log("📁 Chat collection path:", chatPath);

    const chatRef = collection(db, chatPath);
    const q = query(chatRef, orderBy("createdAt"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        console.log(
          "📨 Firestore snapshot received, changes:",
          snapshot.docChanges().length
        );

        const newMessages: Message[] = [];
        snapshot.docChanges().forEach((change) => {
          const data = change.doc.data();

          console.log("📄 Document change:", {
            type: change.type,
            docId: change.doc.id,
            data: data,
            keys: Object.keys(data),
          });

          // Check for any field names that might have dots
          const fieldNames = Object.keys(data);
          const problematicFields = fieldNames.filter(
            (name) =>
              name.startsWith(".") || name.endsWith(".") || name.includes("..")
          );

          if (problematicFields.length > 0) {
            console.error(
              "⚠️ PROBLEMATIC FIELD NAMES DETECTED:",
              problematicFields
            );
          }

          if (data.role === "user" || data.role === "model") {
            const message = {
              id: change.doc.id,
              ...data,
            } as Message;

            console.log("✅ Valid message added:", message);
            newMessages.push(message);
          } else {
            console.log("❌ Invalid message role:", data.role);
          }
        });

        setMessages((prev) => {
          console.log(
            "🔄 Updating messages state. Previous count:",
            prev.length
          );

          const all = [...prev, ...newMessages];
          const seen = new Set();
          const filtered = all.filter((msg) => {
            if (seen.has(msg.id)) return false;
            seen.add(msg.id);
            return true;
          });

          console.log("📊 Final message count:", filtered.length);
          return filtered;
        });
      },
      (error) => {
        console.error("🚨 Firestore listener error:", error);
      }
    );

    return () => {
      console.log("🧹 Cleaning up Firestore listener");
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed) {
      console.log("❌ Empty message, not sending");
      return;
    }

    const userId = getCurrentUserId();
    const chatPath = `chats/${userId}/messages`;
    console.log("📤 Sending message to:", chatPath);

    const chatRef = collection(db, chatPath);

    // Document structure that will be sent
    const messageDoc = {
      prompt: trimmed,
      role: "user",
      createdAt: serverTimestamp(),
      response: "",
    };

    console.log("📝 Message document structure:", messageDoc);
    console.log("📝 Field names:", Object.keys(messageDoc));

    try {
      console.log("⏳ Adding document to Firestore...");

      const docRef = await addDoc(chatRef, messageDoc);

      console.log("✅ Document added successfully with ID:", docRef.id);
      setInput("");
    } catch (error) {
      console.error("🚨 Error sending message:", error);
      console.error("🚨 Error details:", {
        message: error.message,
        code: error.code,
        stack: error.stack,
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Log current state for debugging
  console.log("🎯 Current component state:", {
    messageCount: messages.length,
    inputValue: input,
    authUser: auth?.currentUser?.uid,
  });

  return (
    <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-50 bg-zinc-900 shadow-lg flex flex-col border-l border-zinc-800 transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-950">
        <h2 className="text-lg font-semibold text-white">
          AI Business Buddy 🤖
        </h2>
        <button
          onClick={onClose}
          className="text-zinc-400 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm text-white">
        {messages.length === 0 && (
          <div className="text-center text-zinc-400 py-8">
            Start a conversation with your AI Business Buddy!
            <br />
            <small>Check console for debug info</small>
          </div>
        )}
        {messages.map((msg) => {
          // Log each message being rendered
          console.log("🖼️ Rendering message:", {
            id: msg.id,
            role: msg.role,
            hasPrompt: !!msg.prompt,
            hasResponse: !!msg.response,
            prompt: msg.prompt,
            response: msg.response,
          });

          return (
            <div
              key={msg.id}
              className={`px-3 py-2 rounded-lg max-w-[80%] ${
                msg.role === "user"
                  ? "bg-blue-600 self-end ml-auto"
                  : "bg-zinc-800 self-start mr-auto"
              }`}
            >
              {msg.role === "user" ? msg.prompt : msg.response}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="border-t border-zinc-800 bg-zinc-950 p-3 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={!input.trim()}
          className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-700 disabled:cursor-not-allowed transition"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Debug Info (only in development) */}
      {process.env.NODE_ENV === "development" && (
        <div className="bg-red-900 text-white text-xs p-2 border-t border-red-800">
          <strong>DEBUG:</strong> Messages: {messages.length} | User:{" "}
          {auth?.currentUser?.uid || "demo"} | Input: {input.length} chars
        </div>
      )}
    </div>
  );
};

export default ChatPanel;
