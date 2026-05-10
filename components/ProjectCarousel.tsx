"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { TextReveal } from "./animations/Reveal";

interface ProjectCarouselProps {
  title: string;
  images: string[];
}

export function ProjectCarousel({ title, images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      <div className="w-full flex-1 flex flex-col justify-start">
        {/* Mobile Title */}
        <div className="w-full mb-6 md:hidden text-left pl-2">
          <TextReveal>
            <h2 className="font-heading text-3xl text-brand-white uppercase tracking-wider leading-tight">
              {title}
            </h2>
          </TextReveal>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-12 w-full h-full">

          {/* Main Image */}
          <div
            className="relative w-full flex-1 md:w-auto overflow-hidden order-1 cursor-pointer touch-pan-y rounded-xl"
            style={{ aspectRatio: "4/5", minHeight: 0 }}
            onClick={() => setIsZoomed(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Single img — GPU-composited crossfade, no layout shift */}
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain object-center md:object-left"
              style={{
                willChange: "opacity",
                animation: "fadeIn 0.4s ease-in-out",
              }}
              draggable={false}
            />
          </div>

          {/* Mobile Controls */}
          <div className="w-full md:hidden order-2">
            <div className="flex items-center justify-between mt-4 px-2">
              <button onClick={prevSlide} className="p-3 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white touch-manipulation">
                <ChevronLeft size={24} />
              </button>
              <div className="flex justify-center items-center gap-1.5 mx-2 w-full pointer-events-none">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 rounded-full h-1.5 shrink-0 ${
                      idx === currentIndex ? "w-6 bg-brand-teal" : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextSlide} className="p-3 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white touch-manipulation">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Desktop Details (Right side) */}
          <div className="hidden md:flex flex-col justify-start w-[30%] lg:w-[55%] min-w-[400px] order-3">
            {/* Project Name */}
            <TextReveal delay={0.2}>
              <h2 className="font-heading text-3xl text-brand-white uppercase tracking-tight leading-[1.1] mb-8">
                {title}
              </h2>
            </TextReveal>

            {/* Thumbnails Grid */}
            <div className="flex flex-wrap gap-4 mb-10 w-full max-w-[500px]">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-16 h-12 lg:w-20 lg:h-16 shrink-0 rounded-xl overflow-hidden border transition-all duration-300 ${
                    idx === currentIndex
                      ? "border-brand-teal scale-105 shadow-md"
                      : "border-white/10 hover:border-white/40 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="px-6 py-2 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white flex items-center justify-center transition-colors hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextSlide}
                className="px-6 py-2 border border-white/20 rounded-xl hover:bg-white/10 text-brand-white flex items-center justify-center transition-colors hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center cursor-zoom-out p-4 md:p-10"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-brand-teal transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
          >
            <X size={40} />
          </button>
          <img
            src={images[currentIndex]}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
}
