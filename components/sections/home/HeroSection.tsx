import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775984286/SnapInsta.to_AQN4hH4OMIfs7Lky14Bw-oi03HzFd4RGeTEIEoRMZ3hKclJPx-fldNwZV4_XkjWHRhxpY9TVMkvVBLiphD4pNVuwhWqNtB_DUAm3pkE_nmyla9.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/30 to-brand-black/95 pointer-events-none" />
      
      <RevealContainer className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <TextReveal>
          <h1 className="[font-family:var(--font-inter)] font-heading text-3xl md:text-6xl mb-6 text-brand-white uppercase">
            We Design the Liveries <br className="hidden md:block" />
            <span className="text-brand-teal">That Define the Race.</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="font-body text-brand-white/80 text-sm md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Your livery is the first thing the crowd sees. Your brand is the last thing they forget. We design both.
          </p>
        </TextReveal>
        <RevealItem delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full px-4">
            <Link 
              href="/work" 
              className="w-full sm:w-auto bg-brand-white text-brand-black font-heading text-lg md:text-xl uppercase md:px-8 px-4 py-2 md:py-4 rounded hover:bg-brand-teal transition-all hover:scale-105 text-center"
            >
              See Our Work
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-transparent border border-white/20 text-brand-white font-heading text-lg md:text-xl uppercase md:px-8 px-4 py-2 md:py-4 rounded hover:border-brand-teal hover:text-brand-teal transition-all hover:scale-105 text-center"
            >
              Start a Project
            </Link>
          </div>
        </RevealItem>
      </RevealContainer>
    </section>
  );
}
