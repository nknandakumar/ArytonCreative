"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    year: "2020",
    title: "The Inception",
    desc: "Started as a solo freelance operation focusing on indie game trailers.",
  },
  {
    year: "2022",
    title: "Scaling Up",
    desc: "Expanded the team to 5 artists and acquired our first major brand client.",
  },
  {
    year: "2024",
    title: "Global Reach",
    desc: "Opened a second hub and produced the viral 'Echo Core' campaign.",
  },
  {
    year: "2026",
    title: "New Horizons",
    desc: "Pushing into real-time rendering and immersive spatial experiences.",
  },
];

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    // Animate the fill line with scroll
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: container,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Animate each dot + content entry
      dotRefs.current.forEach((dot, i) => {
        const content = contentRefs.current[i];
        if (!dot || !content) return;

        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          content,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6 bg-[#0a0c12] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <p className="font-body text-[10px] uppercase tracking-[0.35em] text-brand-white/40 mb-4">
            ( History )
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-brand-white uppercase leading-[0.9] tracking-tight">
            Our <span className="text-brand-teal">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Background track line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-white/10" />

          {/* Animated fill line */}
          <div
            ref={lineRef}
            className="absolute left-[7px] top-0 bottom-0 w-[2px] origin-top"
            style={{
              background:
                "linear-gradient(to bottom, #00d4a8, #00d4a8aa, transparent)",
              transform: "scaleY(0)",
            }}
          />

          {/* Entries */}
          <div className="space-y-16 md:space-y-20">
            {journeyData.map((item, i) => (
              <div key={i} className="relative flex gap-8 md:gap-14 pl-10">
                {/* Dot on line */}
                <div
                  ref={(el) => { dotRefs.current[i] = el; }}
                  className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-brand-teal bg-[#0a0c12] flex items-center justify-center z-10"
                  style={{ transform: "scale(0)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                </div>

                {/* Content */}
                <div
                  ref={(el) => { contentRefs.current[i] = el; }}
                  className="flex-1 pb-2"
                  style={{ opacity: 0 }}
                >
                  {/* Year badge */}
                  <span className="inline-block font-heading text-sm uppercase tracking-[0.25em] text-brand-teal border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 rounded-full mb-4">
                    {item.year}
                  </span>

                  <h3 className="font-heading text-3xl md:text-4xl text-brand-white uppercase tracking-tight leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-brand-white/50 text-base md:text-lg leading-relaxed max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
