import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import BrandMarquee from "@/components/BrandMarquee";
import Link from "next/link";
import { Star } from "lucide-react";
import { TimelineSection } from "@/components/sections/about/TimelineSection";

export default function About() {
  return (
    <div className="flex flex-col flex-grow">
      {/* PORTRAIT + STORY */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealItem>
            <div className="h-96 w-full rounded-2xl overflow-hidden relative transition-all duration-700">
              <img src="https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775920402/11b37d168578505.Y3JvcCwxMjAwLDkzOCwwLDEzMA_nop3ve.png" alt="Ayrton Creative Studio" className="w-full h-full object-cover object-center" />
            </div>
          </RevealItem>
          <div>
            <TextReveal delay={0.1}>
              <h1 className="font-heading text-5xl md:text-7xl text-brand-white uppercase mb-8">
                Driven by <br/><span className="text-brand-red">Curiosity</span>
              </h1>
            </TextReveal>
            <RevealItem delay={0.2}>
              <div className="font-body text-brand-white/70 space-y-6 text-lg leading-relaxed">
                <p>
                  Ayrton Creative was founded with a singular vision: to push the boundaries of what's possible in digital storytelling. We don't just render pixels; we craft experiences that leave a lasting imprint.
                </p>
                <p>
                  From our humble beginnings in a small studio to partnering with global tech giants, our core ethos remains the same—never compromise on fidelity.
                </p>
              </div>
            </RevealItem>
          </div>
        </RevealContainer>
      </section>

      <TimelineSection />



      {/* TESTIMONIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { tag: "Incredible Detail", text: "The attention to detail Ayrton brings is unparalleled. They spotted issues before we even realized they existed.", author: "Sarah Jenkins, VP Marketing" },
            { tag: "Flawless Execution", text: "Delivered on time, on budget, and exceeding every single expectation we had.", author: "David Cho, Creative Director" }
          ].map((t, i) => (
             <RevealItem key={i} delay={i * 0.1}>
               <div className="p-10 bg-white/5 rounded-2xl border border-white/10">
                 <div className="flex gap-1 text-brand-teal mb-6">
                   {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                 </div>
                 <p className="font-heading text-2xl uppercase text-brand-white mb-8">"{t.text}"</p>
                 <p className="font-body text-brand-white/50">{t.author}</p>
               </div>
             </RevealItem>
          ))}
        </RevealContainer>
      </section>

      {/* AVAILABILITY CTA */}
      <section className="py-24 px-6 text-center bg-brand-red flex flex-col items-center justify-center">
        <RevealContainer>
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-7xl text-brand-white mb-6 uppercase">Currently booking for Q3</h2>
          </TextReveal>
          <RevealItem delay={0.1}>
            <Link 
              href="/contact" 
              className="mt-4 inline-block bg-brand-black text-brand-white font-heading text-2xl uppercase px-10 py-4 rounded hover:bg-white hover:text-brand-black transition-colors"
            >
              Check Availability
            </Link>
          </RevealItem>
        </RevealContainer>
      </section>
    </div>
  );
}
