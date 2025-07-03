
import { Lightbulb, Zap, Users, Globe, Star, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Lightbulb,
      title: 'AI-Powered Writing',
      description: 'Advanced AI models trained on millions of high-quality content pieces to generate human-like text.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate complete articles, social posts, and marketing copy in seconds, not hours.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time editing, comments, and shared brand guidelines.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Multi-Language',
      description: 'Create content in 50+ languages with native-level fluency and cultural awareness.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your unique brand voice and maintain consistency across all content.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track engagement, conversions, and ROI with detailed analytics and optimization insights.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for Content Creators
          </h2>
          <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
            Everything you need to create, optimize, and scale your content strategy with AI
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass-effect rounded-2xl p-8 hover:border-writeforge-orange/30 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-writeforge-orange/20 to-writeforge-orange-light/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-writeforge-orange" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-writeforge-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
