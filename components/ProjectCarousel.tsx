"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextReveal } from "./animations/Reveal";

interface ProjectCarouselProps {
  title: string;
  images: string[];
}

export function ProjectCarousel({ title, images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full flex-1 md:min-h-[85vh] flex flex-col justify-start">
      {/* Mobile Title */}
      <div className="w-full mb-4 md:hidden">
        <TextReveal>
          <h2 className="font-heading text-2xl text-brand-white uppercase tracking-wider">
            {title}
          </h2>
        </TextReveal>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12 w-full h-full">
        
        {/* Desktop Thumbnails (Left) */}
        <div className="hidden md:flex flex-col gap-4 w-20 lg:w-28 shrink-0 py-4 order-1 items-center max-h-[85vh] overflow-y-auto no-scrollbar scroll-smooth">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-16 h-12 lg:w-24 lg:h-20 shrink-0 rounded-xl overflow-hidden border transition-all duration-300 ${
                idx === currentIndex ? "border-brand-teal scale-105 shadow-md" : "border-white/10 hover:border-white/40 opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`Thumb ${idx+1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Main Image (Center) */}
        <div className="relative w-full flex-1 aspect-square md:aspect-auto md:h-[85vh] overflow-hidden order-1 md:order-2">
          {images.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center p-2 ${
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={img}
                alt={`${title} - Slide ${idx + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile Controls (Bottom) */}
        <div className="w-full flex md:hidden items-center justify-between mt-2 order-3 px-2">
          <button onClick={prevSlide} className="p-2 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white">
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2 mx-4 overflow-x-auto no-scrollbar">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-sm h-1.5 shrink-0 ${
                  idx === currentIndex ? "w-6 bg-brand-teal" : "w-3 bg-white/30"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="p-2 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop Title (Right) */}
        <div className="hidden md:flex flex-col justify-start pt-10 w-[25%] lg:w-[30%] min-w-[200px] order-4">
          <TextReveal>
            <h2 className="font-heading text-3xl lg:text-5xl text-brand-white uppercase tracking-wider leading-[1.1]">
              {title}
            </h2>
          </TextReveal>
        </div>
      </div>
    </div>
  );
}
