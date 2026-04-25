import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import Link from "next/link";
import { ProcessSection } from "@/components/sections/services/ProcessSection";


export default function Services() {
  return (
    <div className="flex flex-col flex-grow">
      {/* SERVICES OVERVIEW */}
      <section className="pt-32 pb-24 px-6 bg-brand-black border-b border-white/5">
        <RevealContainer className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <TextReveal>
            <h1 className="font-heading text-6xl md:text-8xl text-brand-white uppercase mb-8">Our Services</h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body text-xl text-brand-white/70 max-w-2xl leading-relaxed mx-auto">
              We operate at the intersection of motorsport culture, design, and storytelling. Our specialized services are tailored to elevate teams through uncompromising visual fidelity.
            </p>
          </TextReveal>
        </RevealContainer>
      </section>

      {/* 2 SERVICE CARDS */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Livery Design',
              type: 'video',
              media: 'https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4',
              desc: 'Custom racing liveries crafted to define your team’s identity on the track.'
            },
            {
              title: 'Logo & Branding',
              type: 'image',
              media: 'https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775920402/11b37d168578505.Y3JvcCwxMjAwLDkzOCwwLDEzMA_nop3ve.png',
              desc: 'Comprehensive brand systems and logos born from speed and precision.'
            }
          ].map((cap, i) => (
            <RevealItem key={i} delay={i * 0.1} className="h-full">
              <div className="group relative p-8 md:p-12 min-h-[450px] md:min-h-[550px] border border-white/10 rounded-3xl hover:border-brand-teal hover:-translate-y-2 transition-all flex flex-col justify-between items-start cursor-pointer shadow-lg overflow-hidden bg-brand-black">
                
                {/* Background Media */}
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  {cap.type === 'video' ? (
                    <video
                      src={cap.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                    />
                  ) : (
                    <img 
                      src={cap.media}
                      alt={cap.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/95 via-brand-black/40 to-brand-black/20 group-hover:from-brand-black/80 transition-all duration-700" />
                </div>

                <div className="relative z-10 mt-auto flex flex-col gap-4">
                  <span className="font-heading font-bold text-4xl md:text-5xl tracking-wide uppercase text-brand-white/90 group-hover:text-brand-white transition-colors leading-tight">
                    {cap.title}
                  </span>
                  <p className="font-body text-brand-white/70 text-lg leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </section>

      {/* PROCESS STEPS */}
      <ProcessSection />

      {/* START A PROJECT CTA */}
       <section className="py-32 px-6 bg-brand-black text-center flex flex-col items-center border-t border-brand-teal/20 mx-auto w-full">
        <RevealContainer>
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-7xl text-brand-white mb-6 uppercase">Let's Create <span className="text-brand-teal">Magic</span></h2>
          </TextReveal>
          <RevealItem delay={0.2}>
            <Link 
              href="/contact" 
              className="mt-8 inline-block bg-brand-teal text-brand-black font-heading text-lg md:text-2xl uppercase px-4 py-3 rounded font-bold hover:bg-brand-red hover:text-brand-white transition-all shadow-[0_0_30px_rgba(0,212,168,0.2)]"
            >
              Start a Project
            </Link>
          </RevealItem>
        </RevealContainer>
      </section>
    </div>
  );
}
