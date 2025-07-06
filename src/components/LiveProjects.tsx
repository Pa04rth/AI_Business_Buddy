import { Button } from "@/components/ui/button";
import { Clock, DollarSign } from "lucide-react";

const LiveProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website for Local Boutique",
      budget: "$2,500",
      timeline: "4 weeks",
      description:
        "Modern online store with payment integration, inventory management, and responsive design.",
      tags: ["#website", "#ecommerce", "#react"],
      urgency: "High",
    },
    {
      id: 2,
      title: "Mobile App for Fitness Tracking",
      budget: "$3,200",
      timeline: "6 weeks",
      description:
        "iOS/Android app with workout tracking, progress analytics, and social features.",
      tags: ["#mobile", "#app", "#fitness"],
      urgency: "Medium",
    },
    {
      id: 3,
      title: "AI Chatbot for Customer Support",
      budget: "$1,800",
      timeline: "3 weeks",
      description:
        "Intelligent chatbot with natural language processing and integration capabilities.",
      tags: ["#ai", "#chatbot", "#python"],
      urgency: "High",
    },
    {
      id: 4,
      title: "Dashboard for Marketing Analytics",
      budget: "$2,800",
      timeline: "5 weeks",
      description:
        "Data visualization dashboard with real-time metrics and reporting features.",
      tags: ["#dashboard", "#analytics", "#visualization"],
      urgency: "Low",
    },
    {
      id: 5,
      title: "Blockchain DApp for NFT Marketplace",
      budget: "$4,500",
      timeline: "8 weeks",
      description:
        "Decentralized marketplace for NFT trading with smart contract integration.",
      tags: ["#blockchain", "#nft", "#web3"],
      urgency: "Medium",
    },
    {
      id: 6,
      title: "SaaS Platform for Project Management",
      budget: "$5,000",
      timeline: "10 weeks",
      description:
        "Complete project management solution with team collaboration and time tracking.",
      tags: ["#saas", "#management", "#collaboration"],
      urgency: "Low",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "text-red-400 bg-red-400/10";
      case "Medium":
        return "text-yellow-400 bg-yellow-400/10";
      case "Low":
        return "text-green-400 bg-green-400/10";
      default:
        return "text-writeforge-gray bg-writeforge-gray/10";
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Projects
          </h2>
          <p className="text-xl text-writeforge-gray max-w-3xl mx-auto">
            Browse active projects and start building your next success story
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect rounded-2xl p-6 border border-writeforge-dark-border hover:border-writeforge-orange/40 transition-all duration-300 hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getUrgencyColor(
                    project.urgency
                  )}`}
                >
                  {project.urgency} Priority
                </span>
                <div className="flex items-center space-x-2 text-writeforge-gray text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-writeforge-orange transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-writeforge-gray text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-writeforge-orange/10 text-writeforge-orange text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-writeforge-dark-border">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">
                    {project.budget}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="bg-writeforge-orange hover:bg-writeforge-orange-light text-black hover-glow"
                >
                  Apply Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-writeforge-orange text-writeforge-orange hover:bg-writeforge-orange hover:text-black hover-glow"
            onClick={() => (window.location.href = "/projects")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
