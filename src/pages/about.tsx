"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gray-950 text-white min-h-screen py-16 px-6 sm:px-12">
      <Navigation />
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We are building an{" "}
          <span className="text-blue-400 font-semibold">AI-powered bridge</span>{" "}
          that connects local entrepreneurs and visionaries with talented
          student developers. Our mission is to help businesses go digital
          affordably, while enabling students to work on real-world projects and
          build their portfolios.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Feature
            title="AI Auto-Scoping Assistant"
            desc="Convert vague ideas into structured, scoping-ready project outlines with timelines and estimates."
          />
          <Feature
            title="Skill-to-Project Recommender"
            desc="Let AI recommend projects to students based on their skills, GitHub activity, and learning goals."
          />
          <Feature
            title="AI Progress Evaluator"
            desc="Students receive intelligent feedback on their submissions and code from our Gemini-based evaluator."
          />
          <Feature
            title="24x7 AI Support Assistant"
            desc="Businesses can chat with our AI to get ideas, support, and suggestions even while students work."
          />
          <Feature
            title="Smart Budgeting & Quotes"
            desc="Auto-generate accurate quotes and monitor project budgets using intelligent price prediction."
          />
          <Feature
            title="Student Portfolios & Leaderboards"
            desc="Students build public portfolios with badges, project scores, and real-world accomplishments."
          />
          <Feature
            title="Talent Marketplace"
            desc="Businesses can rehire or recommend students directly from the dashboard after successful projects."
          />
          <Feature
            title="AI Marketing Toolkit"
            desc="Launch finished projects with auto-generated posters, captions, and social content to go live fast."
          />
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-gray-400 text-md">Built with ❤️ by Parth</p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      className="bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow hover:shadow-lg transition"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
