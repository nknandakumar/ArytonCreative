"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#050608] pt-24 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden mt-auto">
      <div className="max-w-[1400px] mx-auto flex flex-col">
        {/* Top 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-8 md:col-span-1 col-span-2">
            <div className="flex flex-col gap-2">
              <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase">/Email</span>
              <a href="mailto:ayrtoncreative@gmail.com" className="font-heading text-xl md:text-2xl text-brand-teal hover:text-white transition-colors">ayrtoncreative@gmail.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase">/Instagram</span>
              <a href="https://instagram.com/ayrtoncreative" className="font-heading text-xl md:text-2xl text-white hover:text-brand-teal transition-colors">@ayrtoncreative</a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase mb-2">/Navigation</span>
            <Link href="/" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Home</Link>
            <Link href="/work" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Selected Work</Link>
            <Link href="/services" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Services</Link>
            <Link href="/about" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">About Us</Link>
            <Link href="/contact" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Contact</Link>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase mb-2">/Company</span>
              <Link href="/about" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">About Us</Link>
              <Link href="/contact" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase mb-2">/Legal</span>
              <Link href="/terms" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Terms of Services</Link>
              <Link href="/privacy" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <span className="font-body text-[10px] text-brand-white/40 tracking-[0.2em] uppercase mb-2">/Follow Us</span>
            <a href="#" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">X/Twitter</a>
            <a href="https://instagram.com/ayrtoncreative" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Instagram</a>
            <a href="#" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">Behance</a>
            <a href="https://tiktok.com/@ayrtoncreative" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">TikTok</a>
            <a href="https://youtube.com/@AyrtonCreative" className="font-body text-sm md:text-base text-brand-white hover:text-brand-teal transition-colors">YouTube</a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8 relative">
          {/* Decorative notch from design */}
          <div className="absolute left-0 top-[-1px] w-32 h-[3px] bg-white/20"></div>
        </div>

        {/* Copyright & Made By */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-body text-[10px] md:text-xs text-brand-white/40 tracking-[0.2em] uppercase mb-12">
          <p>@{new Date().getFullYear()} AYRTON CREATIVE. ALL RIGHTS RESERVED.</p>
          <p>MADE BY <span className="text-white font-bold ml-1">...</span></p>
        </div>

        {/* Huge Outlined Text */}
        <div className="w-full flex justify-center items-center overflow-hidden pb-4">
          {/* Outline text effect: text-transparent with stroke */}
          <h1 
            className="font-heading text-[6.5vw] sm:text-[7.5vw] md:text-[8vw] xl:text-[110px] leading-none uppercase tracking-tighter text-transparent select-none whitespace-nowrap [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.15)]"
          >
            Ayrtoncreative
          </h1>
        </div>
      </div>
    </footer>
  );
}
