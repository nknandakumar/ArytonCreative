"use client";

import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/animations/Reveal";

const steps = [
  {
    num: "01",
    title: "Discovery & Brief",
    desc: "We dive deep into your brand, objectives, and references to align on vision.",
  },
  {
    num: "02",
    title: "Styleframes & Previtz",
    desc: "Developing the look and feel through static frames and rough motion blocking.",
  },
  {
    num: "03",
    title: "Production & Rendering",
    desc: "The heavy lifting. Animating, simulations, lighting, and rendering the final frames.",
  },
  {
    num: "04",
    title: "Compositing & Delivery",
    desc: "Adding the final polish, color grading, sound design, and delivering assets.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.max(
        0,
        Math.min(
          1,
          (scrollTop - sectionTop + windowHeight) / (sectionHeight + windowHeight)
        )
      );

      const stepIndex = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1
      );
      setActiveIndex(stepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-brand-black text-brand-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-start">

          {/* ── Left: Sticky heading + progress ── */}
          <div className="relative sticky top-24 h-fit pt-16 pb-8">
            {/* Label */}
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-brand-white/40 mb-8">
              ( Process )
            </p>

            {/* Heading */}
            <TextReveal>
              <h2 className="font-heading text-5xl lg:text-7xl text-brand-white uppercase tracking-tight leading-[0.9]">
                Our <br />
                <span className="text-brand-teal">Process</span>
              </h2>
            </TextReveal>

            {/* Subtext */}
            <p className="font-body mt-5 text-sm text-brand-white/50 max-w-xs leading-relaxed">
              A clear, milestone-driven process that keeps you in the loop and moves fast.
            </p>

            {/* Progress indicator — desktop only */}
            <div className="hidden md:block mt-12 space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className={`flex items-center gap-3 transition-all duration-500 ${
                    index <= activeIndex ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {/* Dot / bar indicator */}
                  <div
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "w-8 bg-brand-teal"
                        : index < activeIndex
                        ? "w-3 bg-brand-teal/60"
                        : "w-3 bg-white/20"
                    }`}
                  />
                  <span
                    className={`font-body text-xs uppercase tracking-widest transition-colors duration-300 ${
                      index === activeIndex ? "text-brand-teal" : "text-brand-white/50"
                    }`}
                  >
                    {step.num}
                  </span>
                  {index === activeIndex && (
                    <span className="font-body text-xs text-brand-white/40 tracking-wider">
                      — {step.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Scrollable stacked cards ── */}
          <div className="relative space-y-[2px] py-16">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`
                  border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 sm:p-12
                  transition-all duration-500
                  ${index === 0 ? "rounded-t-2xl" : ""}
                  ${index === steps.length - 1 ? "rounded-b-2xl" : ""}
                  ${index <= activeIndex ? "bg-white/[0.05]" : ""}
                `}
              >
                {/* Step number */}
                <div className="font-body text-sm font-semibold tracking-[0.25em] text-brand-white/40 uppercase flex items-center gap-2">
                  Step {step.num}
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal" />
                </div>

                {/* Title + desc */}
                <div className="mt-8">
                  <h3 className="font-heading text-4xl sm:text-5xl text-brand-white uppercase tracking-tight leading-[0.95]">
                    {step.title}
                  </h3>
                  <p className="font-body mt-4 text-lg leading-relaxed text-brand-white/50 max-w-lg">
                    {step.desc}
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
