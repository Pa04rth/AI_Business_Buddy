import React from "react";
import { MessageSquare } from "lucide-react";

interface ChatToggleButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({
  onClick,
  isOpen,
}) => {
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-5 right-5 z-50 rounded-full p-4 shadow-lg transition-all duration-300 
                 ${
                   isOpen
                     ? "bg-red-500 hover:bg-red-600"
                     : "bg-blue-600 hover:bg-blue-700"
                 } 
                 text-white`}
      title={isOpen ? "Close Chat" : "Chat with AI"}
    >
      <MessageSquare className="w-6 h-6" />
    </button>
  );
};

export default ChatToggleButton;
