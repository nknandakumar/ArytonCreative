"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Copy } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/5 pt-20 pb-10 px-6 mt-auto overflow-hidden">
      {/* Abstract Background Element (Large Star/Burst) */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[60%] opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0V100M0 50H100" stroke="white" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.1"/>
              <path d="M50 10L52 48L90 50L52 52L50 90L48 52L10 50L48 48L50 10Z" fill="white"/>
          </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        {/* Left Column - Large Heading */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <h2 className="font-heading text-5xl md:text-6xl text-brand-white uppercase leading-[0.9] tracking-tight">
            DEFINING THE <br /> <span className="text-white/20">LIVERY GAME?</span>
          </h2>
          <div className="space-y-2">
            <p className="font-body text-brand-white/50 text-sm max-w-xs leading-relaxed">
              Join the community and push the boundaries of design with Ayrton Creative.
            </p>
          </div>
        </div>
        
        {/* Center Column - Quick Links */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-heading text-2xl tracking-wide uppercase text-brand-white">Quick Links</h4>
          <div className="flex flex-col gap-3 font-body text-sm text-brand-white/70">
            <Link href="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <Link href="/work" className="hover:text-brand-teal transition-colors">Selected Work</Link>
            <Link href="/services" className="hover:text-brand-teal transition-colors">Services</Link>
            <Link href="/about" className="hover:text-brand-teal transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-brand-teal transition-colors">Contact</Link>
          </div>
        </div>

        {/* Right Column - Contact info */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="font-heading text-2xl tracking-wide uppercase text-brand-white">Contact</h4>
          <div className="space-y-4">
              <div className="font-body text-sm text-brand-white/50 leading-relaxed uppercase tracking-widest space-y-1">
                  <p>Ayrton Creative Studio</p>
                  <p>International Design Agency</p>
                  <p>ayrtoncreative@gmail.com</p>
              </div>

              {/* Email Button Pill */}
              <button 
                onClick={() => navigator.clipboard.writeText('ayrtoncreative@gmail.com')}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:border-brand-teal transition-all text-sm font-body text-brand-white"
              >
                  ayrtoncreative@gmail.com
                  <Copy size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-32 relative z-10">
        {/* Back to top button */}
        <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-brand-white hover:border-brand-teal hover:text-brand-teal transition-all mb-8"
        >
            <ArrowUp size={20} />
        </button>

        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            {/* Logo & Year */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image src="/logo.jpeg" alt="Ayrton Creative Logo" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-heading text-3xl tracking-wide uppercase text-brand-white pt-1">Ayrton</span>
                </div>
                <p className="font-body text-xs text-brand-white/30 tracking-widest uppercase">
                    {new Date().getFullYear()} — Premium Motion Studio
                </p>
            </div>

            {/* Socials & Policies */}
            <div className="flex flex-col md:items-end gap-6 text-brand-white/50 text-xs font-body uppercase tracking-wider">
                <div className="flex flex-wrap gap-6">
                    <Link href="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-brand-white transition-colors">Terms of Service</Link>
                    
                    {/* Social Icon Circles */}
                    <div className="flex gap-3 ml-4">
                        <a href="https://www.instagram.com/ayrtoncreative" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://tiktok.com/@ayrtoncreative" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
                        </a>
                        <a href="https://www.youtube.com/@AyrtonCreative" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-teal hover:text-white transition-all">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.75 3.02-5.75 3.02z"/></svg>
                        </a>
                    </div>
                </div>
                <p className="text-white/20">MADE BY MRBOOST</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
