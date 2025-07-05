import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lightbulb, Users, Target, Rocket, Globe, Shield } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: Lightbulb,
      title: "AI Auto-Scoping Assistant",
      description:
        "Convert vague ideas into structured, scoping-ready project outlines with timelines and estimates.",
    },
    {
      icon: Users,
      title: "Skill-to-Project Recommender",
      description:
        "Let AI recommend projects to students based on their skills, GitHub activity, and learning goals.",
    },
    {
      icon: Target,
      title: "AI Progress Evaluator",
      description:
        "Students receive intelligent feedback on their submissions and code from our Gemini-based evaluator.",
    },
    {
      icon: Rocket,
      title: "24x7 AI Support Assistant",
      description:
        "Businesses can chat with our AI to get ideas, support, and suggestions even while students work.",
    },
    {
      icon: Globe,
      title: "Smart Budgeting & Quotes",
      description:
        "Auto-generate accurate quotes and monitor project budgets using intelligent price prediction.",
    },
    {
      icon: Shield,
      title: "Student Portfolios & Leaderboards",
      description:
        "Students build public portfolios with badges, project scores, and real-world accomplishments.",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Student Developers" },
    { number: "150+", label: "Businesses Served" },
    { number: "95%", label: "Success Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            className="mb-8 animate-fade-in"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              About <span className="gradient-text">AI_Business_Buddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-writeforge-gray max-w-4xl mx-auto leading-relaxed">
              We are building an AI-powered bridge that connects local
              entrepreneurs and visionaries with talented student developers.
              Our mission is to help businesses go digital affordably, while
              enabling students to work on real-world projects and build their
              portfolios.
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-writeforge-gray text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
              Everything you need to bridge the gap between businesses and
              student talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group glass-effect rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-writeforge-gray leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Background Elements */}
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl"></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-effect rounded-3xl p-12 text-center border border-blue-500/20 hover:border-purple-500/30 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-writeforge-gray leading-relaxed mb-8">
                We believe in creating win-win opportunities where businesses
                get affordable, high-quality digital solutions while students
                gain real-world experience and build impressive portfolios.
                Through AI-powered matching and project management, we're making
                digital transformation accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    For Businesses
                  </div>
                  <div className="text-writeforge-gray">
                    Affordable digital solutions
                  </div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-blue-500/50 to-purple-500/50"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    For Students
                  </div>
                  <div className="text-writeforge-gray">
                    Real-world experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-writeforge-gray text-lg mb-4">
              Built with ❤️ by
            </p>
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Parth
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
