import { Star } from "lucide-react";

const SuccessStories = () => {
  const businessTestimonials = [
    {
      name: "Sachet Gupta",
      role: "Founder, Gupta Refractories",
      avatar: "SG",
      quote:
        "The AI matched us with the perfect student developer. Our MVP was delivered on time and under budget!",
      rating: 4.5,
    },
    {
      name: "Jahanvi Sohaney",
      role: "CEO, HealthTech Innovations ",
      avatar: "JS",
      quote:
        "Incredible talent pool. The student we worked with is now our part-time developer. Best investment ever.",
      rating: 4,
    },
    {
      name: "Ekta Sohaney",
      role: "CMO, Food Delivery Co.",
      avatar: "EW",
      quote:
        "The AI chatbot they built transformed our customer service. Professional quality at student prices.",
      rating: 5,
    },
  ];

  const studentTestimonials = [
    {
      name: "Harsh Kumar",
      role: "Computer Science Student",
      avatar: "HK",
      quote:
        "Built 5 real projects and landed my dream internship. The platform changed my career trajectory!",
      rating: 5,
    },
    {
      name: "Nitin Kumar",
      role: "Web Development Bootcamp",
      avatar: "NK",
      quote:
        "From zero experience to building production apps for real businesses. My portfolio is now amazing!",
      rating: 5,
    },
    {
      name: "Diksha Tiwari",
      role: "Engineering Student",
      avatar: "DT",
      quote:
        "The AI code evaluator helped me improve so much. Now I'm confident in my development skills.",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  const TestimonialCard = ({
    testimonial,
    delay,
  }: {
    testimonial: any;
    delay: string;
  }) => (
    <div
      className="glass-effect rounded-2xl p-6 border border-writeforge-dark-border hover:border-writeforge-orange/30 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-writeforge-orange rounded-full flex items-center justify-center">
          <span className="text-black font-bold text-sm">
            {testimonial.avatar}
          </span>
        </div>
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          <p className="text-writeforge-gray text-sm">{testimonial.role}</p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <blockquote className="text-writeforge-gray mt-4 italic leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
            Real results from businesses and students who've transformed their
            goals into reality
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Business Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Business Success
            </h3>
            <div className="space-y-6">
              {businessTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  delay={`${index * 0.1}s`}
                />
              ))}
            </div>
          </div>

          {/* Student Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Student Success
            </h3>
            <div className="space-y-6">
              {studentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  delay={`${(index + 3) * 0.1}s`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
