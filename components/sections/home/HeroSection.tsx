import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black/40 via-transparent to-brand-black/95 pointer-events-none" />
      
      <RevealContainer className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:pb-24 flex flex-col justify-between items-start h-full w-full">
        {/* Top Row: Heading on the Left */}
        <div className="w-full flex justify-start items-start mt-12 md:mt-12">
          <TextReveal className="w-full order-1 md:order-2 md:max-w-4xl">
            <h1 
              style={{ fontFamily: 'var(--font-inter)' }} 
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl mb-6 text-brand-white uppercase text-left tracking-tighter leading-[0.9]"
            >
              We Design the <br className="hidden md:block" />
              Liveries That <br className="hidden md:block" />
              <span className="text-brand-teal">Define the Race.</span>
            </h1>
          </TextReveal>
        </div>

        {/* Bottom Row: Subtext & CTA on the Right */}
        <div className="w-full flex flex-col order-2 md:order-1 md:items-end mb-8 md:mb-16">
          <TextReveal delay={0.2} className="w-full md:max-w-xl">
            <p className="font-body text-brand-white/80 text-sm md:text-xl md:mx-0 mb-8 md:mb-12 leading-relaxed font-medium text-left md:text-right">
              Your livery is the first thing the crowd sees. Your brand is the last thing they forget. <span className="text-brand-teal font-bold  decoration-brand-teal/30 underline-offset-8">We design both.</span>
            </p>
          </TextReveal>
          
          <RevealItem delay={0.4} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-start md:justify-end gap-4 sm:gap-6 w-full">
              <Link 
                href="/work" 
                className="w-full sm:w-auto bg-brand-white text-brand-black font-heading text-sm md:text-lg uppercase px-4 md:px-8 py-2 md:py-4 rounded-sm hover:bg-brand-teal transition-all hover:scale-105 text-center font-bold tracking-tight"
              >
                See Our Work
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-transparent border border-white/20 text-brand-white font-heading text-lg md:text-xl uppercase px-8 md:px-12 py-3 md:py-5 rounded-sm hover:border-brand-teal hover:text-brand-teal transition-all hover:scale-105 text-center font-bold tracking-tight"
              >
                Start a Project
              </Link>
            </div>
          </RevealItem>
        </div>
      </RevealContainer>
    </section>
  );
}
