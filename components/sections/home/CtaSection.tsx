import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function CtaSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden h-[100vh] flex items-center justify-center border-t border-brand-teal/20">
      <div className="absolute inset-0 bg-brand-teal/5" />
      <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-teal/10 blur-[120px] rounded-full" />
      
      <RevealContainer className="relative z-10 text-center flex flex-col items-center">
        <TextReveal>
          <h2 className="font-heading text-6xl md:text-7xl text-brand-white mb-6 uppercase">Ready to <span className="text-brand-teal">Elevate?</span></h2>
        </TextReveal>
        <TextReveal delay={0.1}>
          <p className="font-body text-brand-white/70 max-w-md mx-auto mb-10 text-lg">
            Let's craft visual experiences that command attention. Our books are open for Q3 2026.
          </p>
        </TextReveal>
        <RevealItem delay={0.2}>
          <Link 
            href="/contact" 
            className="bg-brand-teal text-brand-black font-heading text-2xl uppercase px-12 py-5 rounded hover:bg-brand-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,212,168,0.3)] font-bold"
          >
            Start a Project
          </Link>
        </RevealItem>
      </RevealContainer>
    </section>
  );
}
