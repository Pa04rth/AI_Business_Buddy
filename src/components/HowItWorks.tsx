
import { Users, Briefcase, Trophy, Search, Code, Star } from 'lucide-react';

const HowItWorks = () => {
  const businessSteps = [
    {
      icon: Briefcase,
      title: 'Post your requirement',
      description: 'Share your project idea, budget, and timeline with our AI-powered platform'
    },
    {
      icon: Users,
      title: 'Get matched with student builders',
      description: 'Our AI connects you with the perfect student developers for your project'
    },
    {
      icon: Trophy,
      title: 'Receive a working product affordably',
      description: 'Get high-quality solutions at student-friendly prices with full support'
    }
  ];

  const studentSteps = [
    {
      icon: Search,
      title: 'Browse live projects',
      description: 'Explore real business projects that match your skills and interests'
    },
    {
      icon: Code,
      title: 'Accept & build',
      description: 'Take on projects, collaborate with businesses, and create amazing solutions'
    },
    {
      icon: Star,
      title: 'Add to your portfolio and get recognized',
      description: 'Build your reputation, gain experience, and advance your career'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
            A simple process that creates win-win outcomes for businesses and students
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Business Card */}
          <div className="glass-effect rounded-2xl p-8 border border-writeforge-dark-border hover:border-writeforge-orange/30 transition-all duration-300 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-writeforge-orange/20 to-writeforge-orange-light/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-writeforge-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Businesses</h3>
              <p className="text-writeforge-gray">Get affordable, quality solutions</p>
            </div>

            <div className="space-y-6">
              {businessSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-writeforge-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-writeforge-orange" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-writeforge-gray text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Card */}
          <div className="glass-effect rounded-2xl p-8 border border-writeforge-dark-border hover:border-writeforge-orange/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">For Students</h3>
              <p className="text-writeforge-gray">Build experience and earn recognition</p>
            </div>

            <div className="space-y-6">
              {studentSteps.map((step, index) => (
                <div 
                  key={step.title}
                  className="flex items-start space-x-4 animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                    <p className="text-writeforge-gray text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
