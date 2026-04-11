import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/5 py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
           <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full group-hover:opacity-80 transition-opacity overflow-hidden flex-shrink-0">
              <Image src="/logo.jpeg" alt="Ayrton Creative Logo" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="font-heading text-2xl tracking-wide uppercase text-brand-white pt-1">Ayrton Creative</span>
          </Link>
          <p className="font-body text-brand-white/50 text-sm max-w-xs leading-relaxed">
            Premium Animation & VFX Studio specializing in high-conversion 3D and motion design for innovative brands.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl tracking-widest text-brand-white/50">Company</h4>
          <Link href="/work" className="font-body text-brand-white hover:text-brand-teal transition-colors">Work</Link>
          <Link href="/services" className="font-body text-brand-white hover:text-brand-teal transition-colors">Services</Link>
          <Link href="/about" className="font-body text-brand-white hover:text-brand-teal transition-colors">About</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl tracking-widest text-brand-white/50">Connect</h4>
          <a href="#" className="font-body text-brand-white hover:text-brand-teal transition-colors flex items-center gap-1 group">Instagram <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
          <a href="#" className="font-body text-brand-white hover:text-brand-teal transition-colors flex items-center gap-1 group">LinkedIn <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
          <a href="#" className="font-body text-brand-white hover:text-brand-teal transition-colors flex items-center gap-1 group">Behance <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-xl tracking-widest text-brand-white/50">Ready?</h4>
          <p className="font-body text-sm text-brand-white/70">Bring your ideas to life.</p>
          <Link href="/contact" className="text-brand-teal font-heading text-2xl uppercase hover:text-brand-white transition-colors mt-2 underline decoration-brand-teal underline-offset-4">
            Start a project
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between font-body text-xs text-brand-white/30">
        <p>© {new Date().getFullYear()} Ayrton Creative. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-brand-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
