import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function AboutSection() {
  return (
    <section className="py-32 px-6 max-w-5xl mx-auto w-full text-left flex flex-col items-center">
      <RevealContainer>
        <TextReveal>
          <p className="font-body text-left text-brand-white/90 text-xl md:text-4xl mb-12 leading-tight tracking-tight">
            Ayrton Creative is a multidisciplinary design studio built on one obsession — making motorsport look as fast as it feels. Based in Marbella, Spain, we specialise in livery design, 3D visualisation, and team branding across F1, WRC, GT, and beyond. Every project is crafted with the precision of the sport it represents.
          </p> 
        </TextReveal>
        <RevealItem delay={0.4}>
          <Link 
            href="/about" 
            className="group inline-flex items-center gap-2 text-lg md:text-2xl uppercase hover:text-brand-teal transition-colors underline decoration-brand-red underline-offset-8"
          >
            Learn About Us <ArrowRight  className="text-brand-red -rotate-45 group-hover:rotate-0 group-hover:translate-x-1 transition-all duration-300 md:size-10 "  />
          </Link>
        </RevealItem>
      </RevealContainer>
    </section>
  );
}
