
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-writeforge-orange/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Announcement Banner */}
        <div className="inline-flex items-center space-x-2 bg-writeforge-dark-card/50 backdrop-blur-sm border border-writeforge-dark-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-writeforge-orange" />
          <span className="text-sm text-writeforge-gray">New: Advanced AI Writing Assistant</span>
          <ChevronRight className="w-4 h-4 text-writeforge-gray" />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
          AI-Powered Content<br />
          <span className="gradient-text">Creation at Scale</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-writeforge-gray max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
          Transform your content strategy with our AI writing assistant. Create blog posts,
          social media content, and marketing copy 10x faster with human-like quality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-writeforge-gray-light px-8 py-4 text-lg hover-glow"
          >
            Start Free Trial
          </Button>
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-writeforge-gray hover:text-white hover:bg-white/10 px-8 py-4 text-lg"
          >
            Watch Demo
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 animate-scale-in">
          <div className="relative max-w-5xl mx-auto">
            <div className="glass-effect rounded-2xl p-8 border-2 border-writeforge-dark-border">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-writeforge-orange/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-writeforge-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Tracker</h3>
                    <p className="text-writeforge-gray text-sm">Your projects • CRM • Issues</p>
                  </div>
                </div>
                <div className="text-writeforge-gray text-sm">Inbox</div>
              </div>
              
              {/* Mock content area */}
              <div className="h-64 bg-writeforge-dark/50 rounded-lg border border-writeforge-dark-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-writeforge-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-writeforge-orange" />
                  </div>
                  <p className="text-writeforge-gray">AI-Powered Content Dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
