import { Star } from "lucide-react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function TestimonialSection() {
  return (
    <section className="py-32 px-6 bg-brand-black flex flex-col items-center text-center">
      <RevealContainer className="max-w-4xl mx-auto flex flex-col items-center">
        <RevealItem>
          <div className="flex gap-1 text-brand-teal mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
          </div>
        </RevealItem>
        <TextReveal delay={0.1}>
          <p className="font-body text-3xl md:text-5xl text-brand-white leading-tight tracking-wide mb-12">
            "Ayrton Creative elevated our product launch with visuals that literally broke our engagement records. An absolute powerhouse team."
          </p>
        </TextReveal>
        <RevealItem delay={0.2}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" alt="Client" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <h4 className="font-heading text-xl uppercase tracking-wide text-brand-white">Marcus Wren</h4>
              <p className="font-body text-sm text-brand-white/50">CMO @ TechNova</p>
            </div>
          </div>
        </RevealItem>
      </RevealContainer>
    </section>
  );
}
