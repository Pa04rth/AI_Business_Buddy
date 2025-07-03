
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Announcement Banner */}
        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
            <span className="text-2xl">🚀</span>
            <span className="text-white font-medium">New: Advanced AI Writing Assistant</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            AI-Powered Content
            <br />
            <span className="gradient-text">Creation at Scale</span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-writeforge-gray max-w-4xl mx-auto leading-relaxed">
            Transform your content strategy with our AI writing assistant. Create blog posts,
            social media content, and marketing copy 10x faster with human-like quality.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="bg-white text-black hover:bg-writeforge-gray-light hover-glow text-lg px-8 py-4">
            Start Free Trial
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-white hover:text-writeforge-orange border border-white/20 hover:border-writeforge-orange text-lg px-8 py-4"
          >
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-writeforge-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-writeforge-orange/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Hero;
