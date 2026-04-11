"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BrandMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current || !trackRef.current) return;

    // A simple infinite GSAP scroll for the marquee
    const tl = gsap.to(trackRef.current, {
      xPercent: -50, // scroll half of the duplicated content
      ease: "none",
      duration: 15,
      repeat: -1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  const brands = ["Nike", "Apple", "Spotify", "Netflix", "Sony", "Red Bull", "Porsche"];

  return (
    <div className="w-full overflow-hidden bg-brand-teal py-4 border-y border-brand-black/10" ref={marqueeRef}>
      <div className="flex w-max" ref={trackRef}>
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center px-12">
            <span className="font-heading text-4xl uppercase text-brand-black tracking-widest whitespace-nowrap">
              {brand}
            </span>
            <span className="mx-12 text-brand-black text-2xl font-bold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
