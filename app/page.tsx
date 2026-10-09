import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBand from "@/components/StatsBand";
import Features from "@/components/Features";
import OrnDivider from "@/components/OrnDivider";
import HowItWorks from "@/components/HowItWorks";
import WhoCanPost from "@/components/WhoCanPost";
import Pricing from "@/components/Pricing";
import AdListing from "@/components/AdListing";
import Testimonials from "@/components/Testimonials";
import Faq, { FAQS } from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import LoveParticles from "@/components/LoveParticles";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <AdListing />
        <Features />
        <OrnDivider />
        <HowItWorks />
        <WhoCanPost />
        <OrnDivider />
        <Pricing />
        <OrnDivider />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <ScrollReveal />
      <LoveParticles />
    </>
  );
}
