import React, { useRef, useEffect } from "react";
import { X, Send } from "lucide-react";

interface ChatPanelProps {
  onClose: () => void;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ onClose }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on open
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
        {/* Example user message */}
        <div className="bg-blue-600 px-3 py-2 rounded-lg self-end max-w-[80%] ml-auto">
          Hello! What can you do?
        </div>

        {/* Example AI message */}
        <div className="bg-zinc-800 px-3 py-2 rounded-lg self-start max-w-[80%] mr-auto">
          I can help you understand how to use this platform, find a project, or
          post one!
        </div>

        <div ref={messagesEndRef} />
      </div>

      {/* Input Section */}
      <div className="border-t border-zinc-800 bg-zinc-950 p-3 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none"
        />
        <button className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
