"use client";

import { useState } from "react";
import Link from "next/link";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const filters = ["All", "3D Animation", "VFX", "Motion Graphics"];

const projects = [
  { id: 1, title: "Neuro Sync", cat: "3D Animation", size: "large", img: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2669&auto=format&fit=crop" },
  { id: 2, title: "Aero Dynamics", cat: "VFX", size: "small", img: "https://images.unsplash.com/photo-1618005122315-4b7ab02613b5?q=80&w=2564&auto=format&fit=crop" },
  { id: 3, title: "Vitality Brand", cat: "Motion Graphics", size: "small", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2535&auto=format&fit=crop" },
  { id: 4, title: "Cyber Protocol", cat: "3D Animation", size: "small", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop" },
  { id: 5, title: "Echo Core", cat: "VFX", size: "large", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(p => activeFilter === "All" || p.cat === activeFilter);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full min-h-screen">
      <RevealContainer className="mb-16">
        <TextReveal>
          <h1 className="font-heading text-6xl md:text-8xl text-brand-white uppercase mb-8">Selected <span className="text-brand-teal">Work</span></h1>
        </TextReveal>
        {/* FILTER BAR */}
        <RevealItem delay={0.1}>
          <div className="flex flex-wrap gap-4 items-center">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "font-heading text-xl uppercase tracking-wide px-6 py-2 rounded-full border transition-all",
                  activeFilter === f 
                    ? "bg-brand-white text-brand-black border-brand-white" 
                    : "bg-transparent text-brand-white/50 border-white/20 hover:border-brand-teal hover:text-brand-white"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </RevealItem>
      </RevealContainer>

      {/* MASONRY GRID (Simulated via tailwind grid sizing) */}
      <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((work, i) => (
          <RevealItem key={work.id} delay={i * 0.1} className={cn(work.size === "large" ? "md:col-span-2 aspect-video" : "col-span-1 aspect-square")}>
            <Link href={`/work/${work.id}`} className="group block h-full w-full relative rounded-2xl overflow-hidden bg-brand-black/50 border border-white/10">
              <img src={work.img} alt={work.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
                <div>
                  <h3 className="font-heading text-4xl text-brand-white uppercase mb-1">{work.title}</h3>
                  <p className="font-body text-brand-teal text-sm tracking-widest uppercase">{work.cat}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight size={24} className="text-brand-black -rotate-45" />
                </div>
              </div>
            </Link>
          </RevealItem>
        ))}
      </RevealContainer>
    </div>
  );
}
