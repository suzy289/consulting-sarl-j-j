import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ValuesSection />
      <ProcessSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
