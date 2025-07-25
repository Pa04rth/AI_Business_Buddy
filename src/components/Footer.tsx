const Footer = () => {
  return (
    <footer className="py-16 border-t border-writeforge-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="./logo.png" alt="Logo" className="w-8 h-8" />

              <span className="text-white font-semibold text-xl">
                AI_Business_Buddy
              </span>
            </div>
            <p className="text-writeforge-gray text-sm leading-relaxed">
              AI-powered bridge to Student Innovation
            </p>
          </div>

          {/* Navigate Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contribute Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contribute</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Pa04rth/AI_Business_Buddy"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pa04rth/AI_Business_Buddy"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pa04rth/AI_Business_Buddy/#readme"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Readme
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Developer Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:parthsohaney04@gmail.com"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/parthsohaney/"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/ParthSohaney04"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://parth-me.vercel.app/"
                  className="text-writeforge-gray hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-writeforge-dark-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-writeforge-gray text-sm">
              © 2025 AI_Business_Buddy - Parth . All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-writeforge-gray hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-writeforge-gray hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-writeforge-gray hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
