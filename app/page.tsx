import { HeroSection } from "@/components/sections/home/HeroSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { SelectedWorkSection } from "@/components/sections/home/SelectedWorkSection";
import { CapabilitiesSection } from "@/components/sections/home/CapabilitiesSection";
import { TestimonialSection } from "@/components/sections/home/TestimonialSection";
import { CtaSection } from "@/components/sections/home/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <CapabilitiesSection />
      <SelectedWorkSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  );
}
