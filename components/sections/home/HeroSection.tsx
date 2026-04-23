import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function HeroSection() {
  return (
    <section className="relative h-screen md:min-h-screen md:h-auto flex flex-col items-center justify-center md:justify-start overflow-hidden md:overflow-visible md:pt-40 md:pb-0">
      {/* Background Video for Mobile / Block Video for Desktop */}
      <div className="absolute inset-0 md:relative md:inset-auto w-full md:h-[100vh] md:-mt-[1px] z-0 md:order-last overflow-hidden">
        <video
          src="https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-100"
        />
        {/* Gradient Overlay for Text Readability - Mobile Only */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/40 via-transparent to-brand-black/95 pointer-events-none md:hidden" />
        
        {/* Fades for Desktop Video Block (All 4 Edges for seamless join) */}
        <div className="hidden md:block absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-[#08090d] to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#08090d] to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#08090d] to-transparent pointer-events-none z-10" />
        <div className="hidden md:block absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#08090d] to-transparent pointer-events-none z-10" />
      </div>
      
      <RevealContainer className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-16 md:py-0 flex flex-col md:flex-row justify-between items-start md:items-stretch h-full md:h-auto w-full pointer-events-none md:pointer-events-auto md:gap-12 lg:gap-16">
        
        {/* Vertical Line on Desktop */}
        <div className="hidden md:block ml-1 absolute left-1/2 -top-[5.5rem] bottom-0 w-[2px] bg-white/20 -translate-x-1/2 pointer-events-none" />

        {/* Top Row / Left Column: Heading */}
        <div className="w-full md:w-1/2 flex justify-start items-start mt-12 md:mt-0 pointer-events-auto md:pr-4 lg:pr-8 md:pb-12">
          <TextReveal className="w-full order-1 md:order-none">
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

        {/* Bottom Row / Right Column: Subtext & CTA */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-none mb-8 md:mb-0 pointer-events-auto md:pt-0 md:pl-4 lg:pl-8 md:pb-12">
          <TextReveal delay={0.2} className="w-full">
            <p className="font-body text-brand-white/80 text-sm md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed font-medium text-left">
              Your livery is the first thing the crowd sees. Your brand is the last thing they forget. <span className="text-brand-teal font-bold decoration-brand-teal/30 underline-offset-8">We design both.</span>
            </p>
          </TextReveal>
          
          <RevealItem delay={0.4} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
              <Link 
                href="/work" 
                className="w-full sm:w-auto bg-transparent border border-white/20 text-brand-white font-heading text-sm uppercase px-4 md:px-6 py-2 md:py-3 rounded-sm hover:border-brand-teal hover:text-brand-teal transition-all hover:scale-105 text-center font-bold tracking-tight"
              >
                See Our Work
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-brand-teal text-brand-black border border-brand-teal font-heading text-lg md:text-sm uppercase px-8 md:px-6 py-3 md:py-3 rounded-sm hover:bg-brand-white hover:border-brand-white transition-all hover:scale-105 text-center font-bold tracking-tight shadow-[0_0_20px_rgba(0,212,168,0.2)]"
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
