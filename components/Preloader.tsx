"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    // Smoothly scroll to top on reload so reveal looks good
    window.scrollTo(0, 0);

    // Simulate loading progress
    const duration = 1.5; // total time for progress bar in seconds
    const interval = 20; // update frequency in ms
    const steps = (duration * 1000) / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Add easing to progress bar for more realistic feel
      const progressFactor = currentStep / steps;
      // easeOutExpo like formula
      const easedProgress = progressFactor === 1 ? 1 : 1 - Math.pow(2, -10 * progressFactor);
      
      const currentProgress = Math.min(Math.round(easedProgress * 100), 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setProgress(100);
        
        const tl = gsap.timeline({
          onComplete: () => {
            document.body.style.overflow = "";
            if (preloaderRef.current) {
              preloaderRef.current.style.display = "none";
            }
          },
        });
        
        // Progress reaches 100, fade it out
        tl.to(progressRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: "power2.inOut",
        })
        // Animate text
        .fromTo(textRef.current, 
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
          "-=0.2"
        )
        // Reveal website
        .to(preloaderRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          delay: 0.6,
        });
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center text-brand-white origin-top"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1c23] to-brand-black opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div ref={textRef} className="absolute opacity-0 font-heading text-4xl md:text-6xl font-black tracking-widest text-brand-white flex items-center gap-2 whitespace-nowrap">
          AYRTONCREATIVE<span className="text-brand-teal">.</span>
        </div>
        
        <div ref={progressRef} className="flex flex-col items-center">
          <div className="text-6xl md:text-8xl font-heading font-black tabular-nums tracking-tighter flex items-end">
            {progress}
            <span className="text-brand-teal text-3xl md:text-5xl mb-1 md:mb-2 ml-1">%</span>
          </div>
          
          <div className="w-48 md:w-64 h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-teal transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
