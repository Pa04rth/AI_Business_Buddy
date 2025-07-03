
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals',
      price: isYearly ? 199 : 29,
      period: isYearly ? '/yr' : '/mo',
      features: [
        '50,000 AI words per month',
        '20+ content templates',
        'Basic SEO optimization',
        'Email support',
        'Brand voice training'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      price: isYearly ? 499 : 79,
      period: isYearly ? '/yr' : '/mo',
      features: [
        '200,000 AI words per month',
        '50+ content templates',
        'Advanced SEO tools',
        'Priority support',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: isYearly ? 999 : 149,
      period: isYearly ? '/yr' : '/mo',
      features: [
        'Unlimited AI words',
        'All content templates',
        'Advanced integrations',
        'Dedicated support',
        'Custom AI training',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-xl text-writeforge-gray mb-8">
            Choose the perfect plan for your content creation needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-writeforge-dark-card rounded-full p-1 border border-writeforge-dark-border">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly 
                  ? 'bg-writeforge-orange text-black' 
                  : 'text-writeforge-gray hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isYearly 
                  ? 'bg-writeforge-orange text-black' 
                  : 'text-writeforge-gray hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative glass-effect rounded-2xl p-8 transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-2 border-writeforge-orange hover-glow' 
                  : 'border border-writeforge-dark-border hover:border-writeforge-orange/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-writeforge-orange text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-writeforge-gray mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-writeforge-gray ml-1">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-writeforge-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular
                    ? 'bg-writeforge-orange hover:bg-writeforge-orange-light text-black'
                    : 'bg-white hover:bg-writeforge-gray-light text-black'
                } hover-glow`}
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
