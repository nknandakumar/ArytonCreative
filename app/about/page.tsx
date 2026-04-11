import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import BrandMarquee from "@/components/BrandMarquee";
import Link from "next/link";
import { Star } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col flex-grow">
      {/* PORTRAIT + STORY */}
      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealItem>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2574&auto=format&fit=crop" alt="Ayrton Creative Studio" className="w-full h-full object-cover" />
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

      {/* CAREER TIMELINE */}
      <section className="py-24 px-6 bg-[#0a0c12] border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <RevealContainer>
            <TextReveal>
              <h2 className="font-heading text-4xl text-brand-white uppercase mb-12 border-b border-white/10 pb-4">Our Journey</h2>
            </TextReveal>
            <div className="space-y-12 pl-6 md:pl-0">
               {[
                 { year: "2020", title: "The Inception", desc: "Started as a solo freelance operation focusing on indie game trailers." },
                 { year: "2022", title: "Scaling Up", desc: "Expanded the team to 5 artists and acquired our first major brand client." },
                 { year: "2024", title: "Global Reach", desc: "Opened a second hub and produced the viral 'Echo Core' campaign." },
                 { year: "2026", title: "New Horizons", desc: "Pushing into real-time rendering and immersive spatial experiences." },
               ].map((item, i) => (
                 <RevealItem key={i} delay={i * 0.1}>
                   <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative before:absolute before:-left-6 md:before:left-1/2 md:before:-ml-[1px] before:top-2 before:bottom-[-48px] before:w-[2px] before:bg-white/10 last:before:hidden">
                     <div className="md:w-1/2 md:text-right relative">
                       <span className="font-heading text-3xl text-brand-teal absolute -left-12 top-0 bg-brand-black md:bg-transparent md:static">{item.year}</span>
                       <div className="hidden md:block absolute right-[-29px] top-2 w-4 h-4 rounded-full bg-brand-teal border-4 border-[#0a0c12]"></div>
                     </div>
                     <div className="md:w-1/2">
                       <div className="md:hidden absolute -left-[29px] top-2 w-4 h-4 rounded-full bg-brand-teal border-4 border-[#0a0c12]"></div>
                       <h3 className="font-heading text-2xl uppercase text-brand-white mb-2 pt-1 md:pt-0">{item.title}</h3>
                       <p className="font-body text-brand-white/50">{item.desc}</p>
                     </div>
                   </div>
                 </RevealItem>
               ))}
            </div>
          </RevealContainer>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <BrandMarquee />

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
