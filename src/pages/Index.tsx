import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LiveProjects from "@/components/LiveProjects";
import AIPoweredFeatures from "@/components/AIPoweredFeatures";
import Features from "@/components/Features";
import SuccessStories from "@/components/SuccessStories";
import AboutUs from "@/components/AboutUs";

import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <LiveProjects />
      <AIPoweredFeatures />
      <Features />
      <SuccessStories />
      <AboutUs />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
