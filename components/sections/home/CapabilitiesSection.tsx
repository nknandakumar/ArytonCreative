import { ArrowRight } from "lucide-react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";

export function CapabilitiesSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full border-b border-white/5">
      <RevealContainer className="flex flex-col items-center w-full">
        <div className="text-center flex flex-col items-center w-full mb-16">
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-6xl mb-6 text-brand-white uppercase">
              What We <span className="text-brand-red">Do</span>
            </h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body text-brand-white/70 max-w-2xl mx-auto leading-relaxed text-lg text-center">
              We blend technical precision with artistic vision to deliver assets that capture attention and drive conversions.
            </p>
          </TextReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {[
            {
              title: 'Livery Design',
              type: 'video',
              media: 'https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775920807/Video-550_htk03d.mp4'
            },
            {
              title: 'Logo & Branding',
              type: 'image',
              media: 'https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775920402/11b37d168578505.Y3JvcCwxMjAwLDkzOCwwLDEzMA_nop3ve.png'
            }
          ].map((cap, i) => (
            <RevealItem key={i} delay={i * 0.1} className="h-full">
              <div className="group relative p-8 md:p-12 min-h-[350px] md:min-h-[450px] border border-white/10 rounded-3xl hover:border-brand-teal hover:-translate-y-2 transition-all flex flex-col justify-between items-start cursor-pointer shadow-lg overflow-hidden bg-brand-black">
                
                {/* Background Media */}
                <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                  {cap.type === 'video' ? (
                    <video
                      src={cap.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  ) : (
                    <img 
                      src={cap.media}
                      alt={cap.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}
                  {/* Subtle gradient overlay to boost text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-brand-black/20 group-hover:from-brand-black/70 transition-all duration-700" />
                </div>

                <span className="relative z-10 font-heading text-4xl md:text-5xl tracking-tight uppercase text-brand-white/90 group-hover:text-brand-white transition-colors mt-auto leading-tight font-bold">
                  {cap.title}
                </span>
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealContainer>
    </section>
  );
}
