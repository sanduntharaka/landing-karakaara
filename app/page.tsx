import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import OrnDivider from "@/components/OrnDivider";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ProposalDemo from "@/components/ProposalDemo";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LoveParticles from "@/components/LoveParticles";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <ProposalDemo />
        <Features />
        <OrnDivider />
        <HowItWorks />
        <OrnDivider />
        <Pricing />
        <OrnDivider />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
      <ScrollReveal />
      <LoveParticles />
    </>
  );
}
