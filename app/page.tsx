import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import OrnDivider from "@/components/OrnDivider";
import HowItWorks from "@/components/HowItWorks";
import ProposalDemo from "@/components/ProposalDemo";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

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
        <OrnDivider />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
