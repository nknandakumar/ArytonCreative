import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import { Layers, Zap, Video, Move3d, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  { icon: Move3d, title: "3D Animation", desc: "High-end product films and abstract 3D visualizers that show every detail in perfect lighting." },
  { icon: Zap, title: "VFX & Compositing", desc: "Seamless integration of CG elements into live-action footage for cinematic impact." },
  { icon: Video, title: "Motion Graphics", desc: "Dynamic UI animations, kinetic typography, and 2D/3D hybrid motion design." },
  { icon: Layers, title: "Art Direction", desc: "Comprehensive visual strategy, styleframes, and look development for campaigns." }
];

const steps = [
  { num: "01", title: "Discovery & Brief", desc: "We dive deep into your brand, objectives, and references to align on vision." },
  { num: "02", title: "Styleframes & Previtz", desc: "Developing the look and feel through static frames and rough motion blocking." },
  { num: "03", title: "Production & Rendering", desc: "The heavy lifting. Animating, simulations, lighting, and rendering the final frames." },
  { num: "04", title: "Compositing & Delivery", desc: "Adding the final polish, color grading, sound design, and delivering assets." }
];

export default function Services() {
  return (
    <div className="flex flex-col flex-grow">
      {/* SERVICES OVERVIEW */}
      <section className="pt-32 pb-24 px-6 bg-brand-black border-b border-white/5">
        <RevealContainer className="max-w-7xl mx-auto">
          <TextReveal>
            <h1 className="font-heading text-6xl md:text-8xl text-brand-white uppercase mb-8">What We <span className="text-brand-teal">Do</span></h1>
          </TextReveal>
          <TextReveal delay={0.1}>
            <p className="font-body text-xl text-brand-white/70 max-w-2xl leading-relaxed">
              We operate at the intersection of design, technology, and storytelling. Our specialized services are tailored to elevate brands through uncompromising visual fidelity.
            </p>
          </TextReveal>
        </RevealContainer>
      </section>

      {/* 4 SERVICE CARDS */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, i) => (
            <RevealItem key={i} delay={i * 0.1}>
              <div className="p-10 rounded-2xl bg-[#0a0c12] border border-white/5 hover:border-brand-teal/50 transition-colors group h-full">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-teal/20 transition-colors">
                  <svc.icon size={32} className="text-brand-teal" />
                </div>
                <h3 className="font-heading text-3xl text-brand-white uppercase mb-4">{svc.title}</h3>
                <p className="font-body text-brand-white/60 leading-relaxed">{svc.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealContainer>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-24 px-6 bg-brand-teal text-brand-black">
        <RevealContainer className="max-w-7xl mx-auto">
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-7xl mb-16 uppercase">Our Process</h2>
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <RevealItem key={i} delay={i * 0.1}>
                <div className="relative">
                  <span className="font-heading text-8xl text-brand-black/10 absolute -top-10 -left-4 font-bold">{step.num}</span>
                  <div className="relative z-10 pt-4 border-t-2 border-brand-black">
                    <h4 className="font-heading text-2xl uppercase mb-3">{step.title}</h4>
                    <p className="font-body font-medium opacity-80 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealContainer>
      </section>

      {/* START A PROJECT CTA */}
       <section className="py-32 px-6 bg-brand-black text-center flex flex-col items-center border-t border-brand-teal/20 mx-auto w-full">
        <RevealContainer>
          <TextReveal>
            <h2 className="font-heading text-5xl md:text-7xl text-brand-white mb-6 uppercase">Let's Create <span className="text-brand-teal">Magic</span></h2>
          </TextReveal>
          <RevealItem delay={0.2}>
            <Link 
              href="/contact" 
              className="mt-8 inline-block bg-brand-teal text-brand-black font-heading text-2xl uppercase px-12 py-5 rounded hover:bg-brand-red hover:text-brand-white transition-all shadow-[0_0_30px_rgba(0,212,168,0.2)]"
            >
              Start a Project
            </Link>
          </RevealItem>
        </RevealContainer>
      </section>
    </div>
  );
}
