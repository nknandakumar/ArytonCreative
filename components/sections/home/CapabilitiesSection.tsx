import { ArrowRight } from "lucide-react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function CapabilitiesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-b border-white/5">
      <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-6xl mb-8 text-brand-white">
              World Class <br/><span className="text-brand-red">Capabilities</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body text-brand-white/70 max-w-md mb-10 leading-relaxed text-lg">
              We blend technical precision with artistic vision to deliver assets that capture attention and drive conversions.
            </p>
          </TextReveal>
          <div className="flex gap-12">
             <RevealItem delay={0.2} className="flex flex-col gap-2">
               <span className="font-heading text-5xl text-brand-teal">80<span className="text-2xl text-brand-teal/50">+</span></span>
               <span className="font-body text-sm text-brand-white/50 uppercase tracking-widest">Global Clients</span>
             </RevealItem>
             <RevealItem delay={0.3} className="flex flex-col gap-2">
               <span className="font-heading text-5xl text-brand-teal">15<span className="text-2xl text-brand-teal/50">M</span></span>
               <span className="font-body text-sm text-brand-white/50 uppercase tracking-widest">Views Gen</span>
             </RevealItem>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          {['3D Animation', 'VFX & Compositing', 'Motion Graphics', 'Art Direction'].map((disc, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className="p-6 border border-white/10 rounded-xl hover:border-brand-teal hover:bg-brand-teal/5 transition-colors flex justify-between items-center group cursor-pointer">
                <span className="font-heading text-2xl tracking-wide uppercase text-brand-white/90 group-hover:text-brand-teal transition-colors">{disc}</span>
                <ArrowRight size={20} className="text-white/20 group-hover:text-brand-teal -rotate-45 transition-colors group-hover:rotate-0" />
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealContainer>
    </section>
  );
}
