
const Footer = () => {
  return (
    <footer className="py-16 border-t border-writeforge-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-writeforge-orange rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">W</span>
              </div>
              <span className="text-white font-semibold text-xl">WriteForge</span>
            </div>
            <p className="text-writeforge-gray text-sm leading-relaxed">
              AI-powered content creation platform helping businesses scale their content strategy with human-like quality.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-writeforge-gray hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-writeforge-dark-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-writeforge-gray text-sm">
              © 2024 WriteForge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-writeforge-gray hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-writeforge-gray hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-writeforge-gray hover:text-white transition-colors text-sm">
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
