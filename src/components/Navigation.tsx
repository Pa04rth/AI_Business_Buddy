import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../main';
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [authMethod, setAuthMethod] = useState<'popup'>('popup');
  const navigate = useNavigate();
  const authAttemptRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Auth state changed:', currentUser ? `User: ${currentUser.email}` : 'No user');
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, [navigate]);

  // Popup-only Google Sign-in
  const handleGoogleSignIn = async () => {
    // Prevent multiple simultaneous attempts
    if (authAttemptRef.current) {
      console.log('Authentication already in progress');
      return;
    }

    authAttemptRef.current = true;
    setIsLoading(true);

    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({
      prompt: 'select_account',
      display: 'popup'
    });

    try {
      console.log('Attempting popup authentication...');
      
      const result = await signInWithPopup(auth, provider);
      console.log('Popup authentication successful:', result.user.email);
      navigate('/dashboard');
      
    } catch (error: any) {
      console.error('Popup authentication failed:', error);
      
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('Popup was closed by user. Try the redirect method if popup doesn\'t work.');
      } else if (error.code === 'auth/popup-blocked') {
        console.log('Popup was blocked. Please allow popups or use the redirect method.');
      } else {
        console.error('Other authentication error:', error);
      }
    } finally {
      authAttemptRef.current = false;
      setIsLoading(false);
    }
  };

  // Manual redirect method only
  const handleRedirectSignIn = async () => {
    if (authAttemptRef.current) {
      console.log('Authentication already in progress');
      return;
    }
    
    authAttemptRef.current = true;
    setIsLoading(true);
    
    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    
    try {
      console.log('Starting redirect authentication...');
      await signInWithRedirect(auth, provider);
      // Note: After redirect, the page will reload and getRedirectResult will handle the result
    } catch (error) {
      console.error('Redirect authentication failed:', error);
      setIsLoading(false);
      authAttemptRef.current = false;
    }
  };

  // Test authentication state
  const testAuthState = () => {
    console.log('Current auth state:', {
      user: user ? user.email : 'No user',
      isLoading,
      authMethod,
      currentPath: window.location.pathname
    });
  };

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Reset authentication method
  const resetAuthMethod = () => {
    setAuthMethod('popup');
    console.log('Reset to popup method');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-500 ${
          scrolled 
            ? 'mt-4 mx-auto max-w bg-black/95 backdrop-blur-md border border-white/10 rounded-full px-6 py-3' 
            : 'bg-transparent py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src="../logo.png" className='h-10 w-10' />
              <span className={`text-white font-semibold transition-all duration-300 ${
                scrolled ? 'text-sm' : 'text-xl'
              }`}>AI_Business_Buddy</span>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Navigation Links - Visible when scrolled */}
              {scrolled && (
                <div className="hidden md:flex items-center space-x-8 text-sm text-white/80">
                  <a href="/home" className="hover:text-white transition-colors">Home</a>
                  <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
                  <a href="/projects" className="hover:text-white transition-colors">Projects</a>
                  <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
                  <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                </div>
              )}

              {/* Auth Buttons */}
              {user ? (
                // Buttons when user is logged in
                <>
                  <Button
                    variant="ghost"
                    className="text-writeforge-gray hover:text-white hover:bg-white/10"
                    onClick={() => navigate('/')} 
                  >
                    Home
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-writeforge-gray hover:text-white hover:bg-white/10"
                    onClick={() => navigate('/dashboard')} 
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-writeforge-gray hover:text-white hover:bg-white/10"
                    onClick={() => navigate('/faq')} 
                  >
                    FAQ
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-writeforge-gray hover:text-white hover:bg-white/10"
                    onClick={() => navigate('/contact')} 
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
                <div className="flex items-center space-x-2">
                  <Button 
                    className="bg-white text-black hover:bg-writeforge-gray-light hover-glow px-4 py-1.5 text-sm rounded-full"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing in...' : 'Get Started'}
                  </Button>
                  {/* Debug buttons */}
                  <div className="flex space-x-1">
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={handleRedirectSignIn}
                      disabled={isLoading}
                      className="text-xs"
                    >
                      Redirect
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={testAuthState}
                      className="text-xs"
                    >
                      Test
                    </Button>
                    <Button 
                      variant="outline"
                      size="sm"
                      onClick={resetAuthMethod}
                      className="text-xs"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              ) : (
                // Login/Sign Up buttons when not logged in and not scrolled
                <div className="flex items-center space-x-8">
                  <div className="hidden md:flex items-center space-x-8 text-base">
                    <a href="/home" className="hover:text-white transition-colors">Home</a>
                    <a href="/dashboard" className="text-writeforge-gray hover:text-white transition-colors">Dashboard</a>
                    <a href="/projects" className="text-writeforge-gray hover:text-white transition-colors">Projects</a>
                    <a href="/faq" className="text-writeforge-gray hover:text-white transition-colors">FAQ</a>
                    <a href="/contact" className="text-writeforge-gray hover:text-white transition-colors">Contact</a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="ghost"
                      className="text-writeforge-gray hover:text-white hover:bg-white/10"
                      onClick={handleGoogleSignIn}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Login'}
                    </Button>
                    <Button
                      className="bg-white text-black hover:bg-writeforge-gray-light hover-glow"
                      onClick={handleGoogleSignIn}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Signing in...' : 'Sign Up'}
                    </Button>
                    {/* Debug buttons */}
                    <div className="flex space-x-1">
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={handleRedirectSignIn}
                        disabled={isLoading}
                        className="text-xs"
                      >
                        Redirect
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={testAuthState}
                        className="text-xs"
                      >
                        Test
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;