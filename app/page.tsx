import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { VideoShowcase } from "@/components/VideoShowcase";

const project1Images = [
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899343/Oracle_RedBull_RB21_Peach_Edition1_mxazvi.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899340/Oracle_RedBull_RB21_Peach_Edition_p2_me4kws.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899340/Oracle_RedBull_RB21_Peach_Edition_p3_cljpcs.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899341/Oracle_RedBull_RB21_Peach_Edition_p4_zfceqv.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p5_kibk9k.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p7_kyamnc.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p8_pav33f.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899342/Oracle_RedBull_RB21_Peach_Edition_p9_awjlt6.jpg"
];

const project2Images = [
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo1_fihjup.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo2_drzh61.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo3_pye6vy.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo4_yta8gx.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899338/photo5_adbtsu.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo6_lqlhfq.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo7_txmnt7.jpg",
  "https://res.cloudinary.com/dxr3pcmsa/image/upload/v1775899339/photo8_ud3qzk.jpg"
];

const videoProjects = [
  {
    title: "Aston Martin F1 Concept",
    url: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775900207/Video-820_xjp8hr.mp4"
  },
  {
    title: "Vodafone McLaren MP4-32 (2025)",
    url: "https://res.cloudinary.com/dxr3pcmsa/video/upload/v1775900453/SnapInsta.to_AQM4dkRNhhodz4qBKIa3O2q7BGjpsZ1dqrFqR9_4YNopiy_kyp7oqpX6FOdeWWyusJLZYi7rj9hVAeN26RHYOFMlyLw7xnk4XTYvSAY_aaptdb.mp4"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* FULL-SCREEN HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://aaronskipper.xyz/wp-content/uploads/2024/05/Aaron_Skipper_Design_Creative_Direction_F1_Car_002.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/60 to-brand-black" />
        
        <RevealContainer className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <TextReveal>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-brand-white leading-[0.85] tracking-tight mb-6">
              BEYOND <br />
              <span className="text-brand-teal">IMAGINATION</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-body text-brand-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Premium Animation & VFX Studio specializing in high-conversion 3D and motion design for innovaters.
            </p>
          </TextReveal>
          <RevealItem delay={0.4}>
            <div className="flex items-center justify-center gap-6">
              <Link 
                href="/work" 
                className="bg-brand-white text-brand-black font-heading text-xl uppercase px-8 py-4 rounded hover:bg-brand-teal transition-all hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </RevealItem>
        </RevealContainer>
      </section>



      {/* SHORT ABOUT SECTION */}
      <section className="py-32 px-6 max-w-5xl mx-auto w-full text-left flex flex-col items-center">
        <RevealContainer>
          <TextReveal>
            <p className="font-body text-left text-brand-white/90 text-lg md:text-4xl mb-12 leading-tight tracking-tight">
              Ayrton Creative is a multidisciplinary design studio built on one obsession — making motorsport look as fast as it feels. Based in Marbella, Spain, we specialise in livery design, 3D visualisation, and team branding across F1, WRC, GT, and beyond. Every project is crafted with the precision of the sport it represents.
            </p>
          </TextReveal>
          <RevealItem delay={0.4}>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 text-brand-teal font-heading text-2xl tracking-widest uppercase hover:text-brand-white transition-colors underline decoration-brand-teal underline-offset-8"
            >
              Learn About Us <ArrowRight size={24} />
            </Link>
          </RevealItem>
        </RevealContainer>
      </section>

      
      {/* UNIFIED SELECTED WORK SECTION */}
      <section className="py-32 px-4 md:px-6 lg:px-10 bg-brand-black w-full flex flex-col items-center border-t border-white/5">
        <div className="w-full max-w-[90%] md:max-w-7xl mx-auto mb-20 text-center">
          <RevealContainer>
            <TextReveal>
              <h2 className="font-heading text-5xl md:text-7xl text-brand-white uppercase tracking-wider mb-2">
                Selected <span className="text-brand-white/30">Work</span>
              </h2>
            </TextReveal>
          </RevealContainer>
        </div>

        <div className="w-full max-w-[95%] md:max-w-[85%] mx-auto flex flex-col gap-32 md:gap-40">
          <VideoShowcase videos={videoProjects} />
          
          <div className="flex flex-col w-full gap-32 md:gap-40">
            <ProjectCarousel 
              title="Oracle RedBull RB21 Peach" 
              images={project1Images} 
            />
            <ProjectCarousel 
              title="Gulf Williams F1 Team" 
              images={project2Images} 
            />
          </div>
        </div>
      </section>


      {/* DISCIPLINES x4 + STATS BAR */}
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

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 bg-brand-black flex flex-col items-center text-center">
        <RevealContainer className="max-w-4xl mx-auto flex flex-col items-center">
          <RevealItem>
            <div className="flex gap-1 text-brand-teal mb-8">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </RevealItem>
          <TextReveal delay={0.1}>
            <p className="font-heading text-3xl md:text-5xl text-brand-white leading-tight uppercase tracking-wide mb-12">
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

      {/* COMMISSION CTA */}
      <section className="py-32 px-6 relative overflow-hidden flex items-center justify-center border-t border-brand-teal/20">
        <div className="absolute inset-0 bg-brand-teal/5" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-brand-teal/10 blur-[120px] rounded-full" />
        
        <RevealContainer className="relative z-10 text-center flex flex-col items-center">
          <TextReveal>
            <h2 className="font-heading text-6xl md:text-8xl text-brand-white mb-6 uppercase">Ready to <span className="text-brand-teal">Elevate?</span></h2>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body text-brand-white/70 max-w-md mx-auto mb-10 text-lg">
              Let's craft visual experiences that command attention. Our books are open for Q3 2026.
            </p>
          </TextReveal>
          <RevealItem delay={0.2}>
            <Link 
              href="/contact" 
              className="bg-brand-teal text-brand-black font-heading text-2xl uppercase px-12 py-5 rounded hover:bg-brand-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(0,212,168,0.3)]"
            >
              Start a Project
            </Link>
          </RevealItem>
        </RevealContainer>
      </section>
    </div>
  );
}
