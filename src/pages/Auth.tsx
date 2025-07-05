import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../main";
import { onAuthStateChanged } from "firebase/auth";
import AuthForm from "../components/auth/AuthForm";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, redirect to dashboard
        navigate("/dashboard");
      } else {
        // User is not logged in, show auth form
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleCloseAuth = () => {
    // Navigate back to home page when auth is closed
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Auth Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
          <AuthForm onClose={handleCloseAuth} />
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={handleCloseAuth}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
