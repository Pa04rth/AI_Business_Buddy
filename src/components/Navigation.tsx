
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`bg-writeforge-orange rounded-full flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'w-6 h-6' : 'w-8 h-8'
            }`}>
              <span className={`text-black font-bold transition-all duration-300 ${
                scrolled ? 'text-sm' : 'text-lg'
              }`}>W</span>
            </div>
            <span className={`text-white font-semibold transition-all duration-300 ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}>WriteForge</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-writeforge-gray hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-writeforge-gray hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-writeforge-gray hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-writeforge-gray hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {!scrolled ? (
              <>
                <Button 
                  variant="ghost" 
                  className="text-writeforge-gray hover:text-white hover:bg-white/10"
                >
                  Login
                </Button>
                <Button 
                  className="bg-white text-black hover:bg-writeforge-gray-light hover-glow"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button 
                className="bg-white text-black hover:bg-writeforge-gray-light hover-glow px-6 py-2"
              >
                Get Started
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
