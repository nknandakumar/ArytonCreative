import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import { Star } from "lucide-react";
import { HeroMediaSlider } from "@/components/sections/home/HeroMediaSlider";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center md:justify-start overflow-hidden bg-brand-black">
      
      {/* Background Video for Mobile */}
      <div className="absolute inset-0 md:hidden w-full h-full z-0 overflow-hidden">
        <video
          src="https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlay for Text Readability - Mobile Only */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black/40 via-transparent to-brand-black/95 pointer-events-none" />
      </div>
      
      {/* Main Content Wrapper */}
      <RevealContainer className="relative z-10 px-6 sm:px-10 md:px-12 lg:px-20 py-16 md:pt-32 md:pb-10 flex flex-col md:flex-row justify-between items-start md:items-start w-full pointer-events-none md:pointer-events-auto gap-8 md:gap-12">
        
        {/* Top Row / Left Column: Heading & Reviews */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start pointer-events-auto mt-12 md:mt-0">
          <TextReveal className="w-full">
            <h1 
              style={{ fontFamily: 'var(--font-inter)' }} 
              className="font-black text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 text-brand-white uppercase text-left tracking-tighter leading-[0.9]"
            >
              We Design the <br className="hidden md:block" />
              Liveries That <br className="hidden md:block" />
              <span className="text-brand-teal">Define the Race.</span>
            </h1>
          </TextReveal>
          
          {/* Reviews block (Desktop only to match design) */}
          <RevealItem delay={0.1} className="hidden md:flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-brand-black object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-brand-black object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-brand-black object-cover" />
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" className="w-10 h-10 rounded-full border-2 border-brand-black object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-[#ff3333] text-sm font-bold">
                4.9 <div className="flex gap-0.5 ml-1">{[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" className="text-[#ff3333]" />)}</div>
              </div>
              <span className="text-xs text-brand-white/60 font-body">Over 500+ reviews</span>
            </div>
          </RevealItem>
        </div>

        {/* Bottom Row / Right Column: Subtext & CTA */}
        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-none pointer-events-auto md:items-end md:mt-4">
          <TextReveal delay={0.2} className="w-full flex md:justify-end">
            <p className="font-body text-brand-white/80 text-sm md:text-lg lg:text-xl mb-8 md:mb-8 leading-relaxed font-medium text-left md:text-right max-w-md">
              Your livery is the first thing the crowd sees. Your brand is the last thing they forget. <span className="text-brand-teal font-bold decoration-brand-teal/30 underline-offset-8">We design both.</span>
            </p>
          </TextReveal>
          
          <RevealItem delay={0.4} className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-end gap-4 w-full">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto bg-brand-white text-brand-black font-heading text-lg md:text-sm uppercase px-8 md:px-8 py-3 md:py-3.5 rounded hover:bg-brand-teal hover:text-black transition-all hover:scale-105 text-center font-bold tracking-tight shadow-lg"
              >
                Start a Project
              </Link>
              <Link 
                href="/work" 
                className="w-full sm:w-auto bg-transparent border border-white/20 text-brand-white font-heading text-sm uppercase px-4 md:px-6 py-2 md:py-3 rounded hover:border-brand-teal hover:text-brand-teal transition-all hover:scale-105 text-center font-bold tracking-tight"
              >
                See Our Work
              </Link>
            </div>
          </RevealItem>
        </div>
      </RevealContainer>

      <HeroMediaSlider />

    </section>
  );
}
