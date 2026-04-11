import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://aaronskipper.xyz/wp-content/uploads/2024/05/Aaron_Skipper_Design_Creative_Direction_F1_Car_002.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black" />
      
      <RevealContainer className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <TextReveal>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-brand-white leading-[0.85] tracking-tight mb-6">
            BEYOND <br />
            <span className="text-brand-teal">IMAGINATION</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="font-body text-brand-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium Animation & VFX Studio specializing in high-conversion 3D and motion design for innovaters.
          </p>
        </TextReveal>
        <RevealItem delay={0.4}>
          <div className="flex items-center justify-center gap-6">
            <Link 
              href="/work" 
              className="bg-brand-white text-brand-black font-heading text-xl uppercase px-8 py-4 rounded hover:bg-brand-teal transition-all hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </RevealItem>
      </RevealContainer>
    </section>
  );
}
