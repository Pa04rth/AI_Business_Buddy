
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-writeforge-orange/5 to-blue-600/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-writeforge-orange/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-writeforge-orange/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-writeforge-orange/20 to-writeforge-orange-light/20 rounded-full mb-8 animate-scale-in">
          <Sparkles className="w-10 h-10 text-writeforge-orange" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Ready to bring your idea to life?
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-writeforge-gray max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Post your project or start building — it's free to begin your journey with AI Business Buddy
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg"
            className="bg-writeforge-orange hover:bg-writeforge-orange-light text-black hover-glow text-lg px-10 py-6 rounded-full group"
          >
            Post a Project
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black hover-glow text-lg px-10 py-6 rounded-full group"
          >
            Join as Student
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <p className="text-writeforge-gray text-sm mb-4">
            Join thousands of successful collaborations
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <span className="text-writeforge-gray text-sm">✓ No setup fees</span>
            <span className="text-writeforge-gray text-sm">✓ AI-powered matching</span>
            <span className="text-writeforge-gray text-sm">✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
