import { Brain, Target, Code, MessageCircle, Calculator, Megaphone, Briefcase, RotateCcw } from 'lucide-react';

const AIPoweredFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Auto-Scoping Assistant',
      description: 'Automatically break down complex projects into manageable tasks with AI-powered analysis',
      color: 'from-purple-500/20 to-blue-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: Target,
      title: 'Skill-to-Project Recommender',
      description: 'Match students with perfect projects based on their skills and learning goals',
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: Code,
      title: 'AI Code Evaluator',
      description: 'Real-time code review and quality assessment with intelligent feedback',
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-400'
    },
    {
      icon: MessageCircle,
      title: 'AI Chat Support for Businesses',
      description: '24/7 intelligent support to help businesses navigate the platform and projects',
      color: 'from-orange-500/20 to-red-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: Calculator,
      title: 'Smart Budget Estimator',
      description: 'AI-powered pricing recommendations based on project complexity and market rates',
      color: 'from-yellow-500/20 to-orange-500/20',
      iconColor: 'text-yellow-400'
    },
    {
      icon: Megaphone,
      title: 'AI Marketing Toolkit',
      description: 'Generate compelling project descriptions and marketing content automatically',
      color: 'from-pink-500/20 to-purple-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: Briefcase,
      title: 'Public Student Portfolios',
      description: 'Showcase student work with AI-generated project summaries and skill highlights',
      color: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-400'
    },
    {
      icon: RotateCcw,
      title: 'Talent Rehire Button',
      description: 'One-click rehiring of successful students for future projects with AI recommendations',
      color: 'from-teal-500/20 to-cyan-500/20',
      iconColor: 'text-teal-400'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI-Powered Features
          </h2>
          <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
            Cutting-edge AI technology that makes collaboration seamless and efficient
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group glass-effect rounded-2xl p-6 border border-writeforge-dark-border hover:border-writeforge-orange/30 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-writeforge-orange transition-colors">
                {feature.title}
              </h3>
              <p className="text-writeforge-gray text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPoweredFeatures;
