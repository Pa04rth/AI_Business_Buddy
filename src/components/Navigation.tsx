import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { auth } from "../main";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import AuthForm from "./auth/AuthForm";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(
        "Auth state changed:",
        currentUser ? `User: ${currentUser.email}` : "No user"
      );
      setUser(currentUser);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Function to open auth form
  const handleAuthClick = () => {
    navigate("/auth");
  };

  // Function to close auth form
  const handleCloseAuth = () => {
    setShowAuthForm(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`transition-all duration-500 ${
              scrolled
                ? "mt-4 mx-auto max-w bg-black/95 backdrop-blur-md border border-white/10 rounded-full px-6 py-3"
                : "bg-transparent py-4"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <a href="/" className="flex items-center space-x-2">
                  <img src="../logo.png" className="h-10 w-10" alt="Logo" />
                  <span
                    className={`text-white font-semibold transition-all duration-300 ${
                      scrolled ? "text-sm" : "text-xl"
                    }`}
                  >
                    AI_Business_Buddy
                  </span>
                </a>
              </div>

              <div className="flex items-center space-x-3">
                {/* Navigation Links - Visible when scrolled */}
                {scrolled && (
                  <div className="hidden md:flex items-center space-x-8 text-sm text-white/80">
                    <a
                      href="/home"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="/dashboard"
                      className="hover:text-white transition-colors"
                    >
                      Dashboard
                    </a>
                    <a
                      href="/projects"
                      className="hover:text-white transition-colors"
                    >
                      Projects
                    </a>
                    <a
                      href="/faq"
                      className="hover:text-white transition-colors"
                    >
                      FAQ
                    </a>
                    <a
                      href="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </div>
                )}

                {/* Auth Buttons */}
                {user ? (
                  // Buttons when user is logged in
                  <>
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={() => navigate("/dashboard")}
                    >
                      Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={() => navigate("/projects")}
                    >
                      Projects
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={() => navigate("/faq")}
                    >
                      FAQ
                    </Button>
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={() => navigate("/contact")}
                    >
                      Contact
                    </Button>
                    <Button
                      className="bg-white text-black hover:bg-writeforge-gray-light hover-glow"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : scrolled ? (
                  // Buttons when scrolled and not logged in
                  <div className="flex items-center space-x-2">
                    <Button
                      className="bg-white text-black hover:bg-writeforge-gray-light hover-glow px-4 py-1.5 text-sm rounded-full"
                      onClick={handleAuthClick}
                    >
                      Get Started
                    </Button>
                  </div>
                ) : (
                  // Login/Sign Up buttons when not logged in and not scrolled
                  <div className="flex items-center space-x-8">
                    <div className="hidden md:flex items-center space-x-8 text-base">
                      <a
                        href="/home"
                        className="hover:text-white transition-colors"
                      >
                        Home
                      </a>
                      <a
                        href="/dashboard"
                        className="text-writeforge-gray hover:text-white transition-colors"
                      >
                        Dashboard
                      </a>
                      <a
                        href="/projects"
                        className="text-writeforge-gray hover:text-white transition-colors"
                      >
                        Projects
                      </a>
                      <a
                        href="/faq"
                        className="text-writeforge-gray hover:text-white transition-colors"
                      >
                        FAQ
                      </a>
                      <a
                        href="/contact"
                        className="text-writeforge-gray hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Button
                        variant="ghost"
                        className="text-writeforge-gray hover:text-white hover:bg-white/10"
                        onClick={handleAuthClick}
                      >
                        Login
                      </Button>
                      <Button
                        className="bg-white text-black hover:bg-writeforge-gray-light hover-glow"
                        onClick={handleAuthClick}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Form Modal */}
      {showAuthForm && <AuthForm onClose={handleCloseAuth} />}
    </>
  );
};

export default Navigation;
