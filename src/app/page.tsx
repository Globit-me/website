import BenefitsSection from "@/components/benefits/BenefitsSection";
import Hero from "@/components/hero/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import SectionFAQs from "@/components/SectionFAQs";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return( 
  <main className="max-w-6xl mx-auto ">
    <Hero  />
    <ImageCarousel />
    <BenefitsSection />
    <SectionFAQs />
    <SpeedInsights />
  </main>);
}
