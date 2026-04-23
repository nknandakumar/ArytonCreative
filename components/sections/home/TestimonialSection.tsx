import { Star } from "lucide-react";
import { RevealContainer, TextReveal } from "@/components/animations/Reveal";

const reviews = [
  {
    text: "Ayrton Creative elevated our product launch with visuals that literally broke our engagement records. An absolute powerhouse team.",
    author: "Marcus Wren",
    role: "CMO @ TechNova",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    text: "The 3D motion design they delivered for our new F1 car livery reveal was nothing short of breathtaking. A true masterpiece.",
    author: "Elena Rostova",
    role: "Head of Marketing @ Velocity",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
  },
  {
    text: "Professional, visionary, and technically unmatched. Ayrton Creative is our go-to partner for all high-end CG production.",
    author: "David Chen",
    role: "Creative Director @ Apex",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop"
  },
  {
    text: "They didn't just understand our brand; they evolved it. The dynamic lighting and camera work in our latest ad was spectacular.",
    author: "Sarah Jenkins",
    role: "Brand Lead @ Horizon",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2787&auto=format&fit=crop"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-32 bg-brand-black overflow-hidden flex flex-col items-center">
      <div className="w-full text-center mb-16 px-6">
        <RevealContainer>
          <TextReveal>
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-brand-white/40 mb-4">
              ( Social Proof )
            </p>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h2 className="font-heading text-5xl md:text-7xl text-brand-white uppercase tracking-wider">
              Client <span className="text-brand-teal">Reviews</span>
            </h2>
          </TextReveal>
        </RevealContainer>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full flex overflow-hidden group border-y border-white/5 bg-[#08090d]">
        {/* Transparent gradient masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-brand-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-brand-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee whitespace-nowrap w-max group-hover:[animation-play-state:paused]">
          {/* Double the reviews array to ensure seamless looping */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div 
              key={idx} 
              className="w-[350px] md:w-[450px] border-r border-white/5 p-8 md:p-12 flex flex-col gap-6 flex-shrink-0 hover:bg-white/[0.02] transition-colors cursor-default"
            >
              <div className="flex gap-1 text-brand-teal">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="font-body text-lg md:text-xl text-brand-white/90 leading-relaxed whitespace-normal min-h-[140px] md:min-h-[120px]">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden flex-shrink-0 border border-white/10">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div className="text-left flex flex-col justify-center">
                  <h4 className="font-heading text-sm uppercase tracking-wide text-brand-white">{review.author}</h4>
                  <p className="font-body text-xs text-brand-teal mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
