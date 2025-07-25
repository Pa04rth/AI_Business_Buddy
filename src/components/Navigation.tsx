import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { auth } from "../main";
import { signOut, onAuthStateChanged, User } from "firebase/auth";
import AuthForm from "./auth/AuthForm";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

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
                {/* Navigation Links - Always show when not scrolled, or when scrolled */}
                <div className="hidden md:flex items-center space-x-8 text-base text-white/80">
                  <a href="/" className="hover:text-white transition-colors">
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
                  <a href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </div>

                {/* Auth Buttons */}
                {user ? (
                  // Only Sign Out button when user is logged in
                  <Button
                    className="bg-white text-black hover:bg-writeforge-gray-light hover-glow"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                ) : (
                  // Get Started button when scrolled and not logged in
                  <div className="flex items-center space-x-2">
                    <Button
                      className="bg-white text-black hover:bg-writeforge-gray-light hover-glow px-4 py-1.5 text-sm rounded-full"
                      onClick={handleAuthClick}
                    >
                      Get Started
                    </Button>
                  </div>
                )}
                <a
                  href="https://github.com/Pa04rth/AI_Business_Buddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-400"
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                  <AiOutlineClose size={20} className="text-white" />
                ) : (
                  <AiOutlineMenu size={20} className="text-white" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex items-center space-x-2 p-4">
            <img src="../logo.png" className="h-10 w-10" alt="Logo" />
            <span className="text-white font-semibold text-xl">
              AI_Business_Buddy
            </span>
          </div>
          <ul className="p-4 text-white">
            <li className="p-4 border-b border-gray-600">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/projects">Projects</a>
            </li>
            <li className="p-4 border-b border-gray-600">
              <a href="/faq">FAQ</a>
            </li>
            <li className="p-4">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Auth Form Modal */}
      {showAuthForm && <AuthForm onClose={handleCloseAuth} />}
    </>
  );
};

export default Navigation;
