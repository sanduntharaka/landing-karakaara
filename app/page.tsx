import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import StatsBand from '@/components/StatsBand';
import Features from '@/components/Features';
import OrnDivider from '@/components/OrnDivider';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <Features />
        <OrnDivider />
        <HowItWorks />
        <OrnDivider />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
