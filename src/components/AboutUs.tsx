
import { Target, Users, Zap, Heart } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Bridging the gap between ambitious businesses and talented students'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive ecosystem where everyone wins and grows together'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Leveraging AI to create smarter, more efficient collaboration'
    },
    {
      icon: Heart,
      title: 'Impact Oriented',
      description: 'Creating real opportunities and launching careers while solving business challenges'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Us
          </h2>
          <p className="text-xl text-writeforge-gray max-w-4xl mx-auto">
            We're building the future of work by connecting businesses with the next generation of developers, 
            creating opportunities that benefit everyone in the ecosystem.
          </p>
        </div>

        {/* Story Section */}
        <div className="glass-effect rounded-2xl p-8 mb-16 border border-writeforge-dark-border animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Our Story
              </h3>
              <p className="text-writeforge-gray leading-relaxed mb-6">
                Born from the frustration of seeing talented students struggle to find real-world experience 
                while businesses pay premium prices for development work, AI Business Buddy emerged as the 
                solution that makes sense for everyone.
              </p>
              <p className="text-writeforge-gray leading-relaxed">
                Our AI-powered platform doesn't just connect people – it creates meaningful partnerships 
                that launch careers, build successful products, and foster innovation across industries.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-writeforge-orange/20 to-writeforge-orange-light/20 rounded-full mb-6">
                <span className="text-6xl">🚀</span>
              </div>
              <p className="text-writeforge-gray italic">
                "Empowering the next generation while solving today's challenges"
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="glass-effect rounded-2xl p-6 border border-writeforge-dark-border hover:border-writeforge-orange/30 transition-all duration-300 hover-glow animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-writeforge-orange/20 to-writeforge-orange-light/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-writeforge-orange" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {value.title}
              </h4>
              <p className="text-writeforge-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-writeforge-orange mb-2">500+</div>
            <p className="text-writeforge-gray">Projects Completed</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-writeforge-orange mb-2">1,200+</div>
            <p className="text-writeforge-gray">Student Developers</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-4xl font-bold text-writeforge-orange mb-2">98%</div>
            <p className="text-writeforge-gray">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
