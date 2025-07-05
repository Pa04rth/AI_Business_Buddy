
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import HowItWorks from '@/components/HowItWorks';
import LiveProjects from '@/components/LiveProjects';
import AIPoweredFeatures from '@/components/AIPoweredFeatures';
import Features from '@/components/Features';
import SuccessStories from '@/components/SuccessStories';
import AboutUs from '@/components/AboutUs';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <LiveProjects />
      <AIPoweredFeatures />
      <Features />
      <SuccessStories />
      <AboutUs />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
