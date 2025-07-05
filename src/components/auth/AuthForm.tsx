import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

type AuthMode = "select" | "login" | "signup";

interface AuthFormProps {
  onClose: () => void;
}

const AuthForm = ({ onClose }: AuthFormProps) => {
  const [mode, setMode] = useState<AuthMode>("select");

  const renderContent = () => {
    switch (mode) {
      case "login":
        return <LoginForm onBack={() => setMode("select")} onClose={onClose} />;
      case "signup":
        return (
          <SignUpForm onBack={() => setMode("select")} onClose={onClose} />
        );
      default:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome to AI Business Buddy
              </h2>
              <p className="text-gray-400 mb-8">
                Choose how you'd like to get started
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setMode("login")}
                className="w-full bg-white text-black hover:bg-gray-100 py-3 text-lg font-semibold"
              >
                Login to Existing Account
              </Button>

              <Button
                onClick={() => setMode("signup")}
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-black py-3 text-lg font-semibold"
              >
                Create New Account
              </Button>
            </div>

            <div className="text-center">
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4 border border-gray-700">
        {renderContent()}
      </div>
    </div>
  );
};

export default AuthForm;
