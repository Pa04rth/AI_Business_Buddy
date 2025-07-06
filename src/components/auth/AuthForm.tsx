
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
          <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-writeforge-orange to-writeforge-orange-light mb-4 animate-pulse">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Welcome to{" "}
                <span className="gradient-text">AI Business Buddy</span>
              </h2>
              <p className="text-writeforge-gray-light text-lg leading-relaxed">
                Join the future of business-student collaboration
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setMode("login")}
                className="w-full bg-gradient-to-r from-writeforge-orange to-writeforge-orange-light text-white hover:from-writeforge-orange-light hover:to-writeforge-orange py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-writeforge-orange/25 transition-all duration-300 hover:scale-105 hover-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign In to Your Account
              </Button>

              <Button
                onClick={() => setMode("signup")}
                variant="outline"
                className="w-full border-2 border-writeforge-orange/30 text-white hover:bg-writeforge-orange/10 hover:border-writeforge-orange hover:text-writeforge-orange-light py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Create New Account
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-writeforge-gray/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-r from-transparent via-writeforge-dark-card to-transparent text-writeforge-gray">
                  Join thousands of innovators
                </span>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={onClose}
                className="text-writeforge-gray hover:text-writeforge-orange-light text-sm transition-colors duration-300 underline decoration-writeforge-orange/30 hover:decoration-writeforge-orange"
              >
                Maybe Later
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="glass-effect rounded-2xl p-8 border border-writeforge-orange/20 shadow-2xl backdrop-blur-xl">
      {renderContent()}
    </div>
  );
};

export default AuthForm;
