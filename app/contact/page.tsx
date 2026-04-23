"use client";

import { useState } from "react";
import { RevealContainer, RevealItem, TextReveal } from "@/components/animations/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto w-full min-h-screen">
      <RevealContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* HERO HEADLINE & SOCIAL LINKS */}
        <div>
          <TextReveal>
            <h1 className="font-heading text-6xl md:text-8xl text-brand-white uppercase leading-[0.9] mb-8">
              Let's <br/><span className="text-brand-teal">Talk</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.1}>
             <p className="font-body text-xl text-brand-white/70 max-w-md mb-12">
               Fill out the brief form, and our producer will get back to you within 24 hours to schedule a discovery call.
             </p>
          </TextReveal>
          <RevealItem delay={0.2}>
             <div className="flex flex-col gap-6 font-heading text-2xl uppercase tracking-wide">
               <a href="mailto:ayrtoncreative@gmail.com" className="text-brand-white hover:text-brand-teal transition-colors lowercase flex items-center gap-2">
                 ayrtoncreative@gmail.com <ArrowUpRight size={24} />
               </a>
               <div className="h-[1px] w-full max-w-xs bg-white/10" />
               <a href="https://www.instagram.com/ayrtoncreative" className="text-brand-white hover:text-brand-teal transition-colors flex items-center gap-2">
                 Instagram <ArrowUpRight size={24} />
               </a>
               <a href="https://www.behance.net/ayrtondossantos" className="text-brand-white hover:text-brand-teal transition-colors flex items-center gap-2">
                 Behance <ArrowUpRight size={24} />
               </a>
             </div>
          </RevealItem>
        </div>

        {/* BRIEF FORM */}
        <div>
          <RevealItem delay={0.3}>
            <div className="bg-[#0a0c12] p-8 md:p-12 border border-white/5 rounded-2xl">
              {submitted ? (
                <div className="text-center py-16">
                  <h3 className="font-heading text-4xl text-brand-teal uppercase mb-4">Request Received</h3>
                  <p className="font-body text-brand-white/70">Thank you for reaching out. We will review your brief and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-lg uppercase tracking-widest text-brand-white/50">Name / Company</label>
                    <input required type="text" className="bg-transparent border-b border-white/20 pb-2 text-brand-white font-body focus:outline-none focus:border-brand-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-lg uppercase tracking-widest text-brand-white/50">Email</label>
                    <input required type="email" className="bg-transparent border-b border-white/20 pb-2 text-brand-white font-body focus:outline-none focus:border-brand-teal transition-colors" />
                  </div>
                  
                  {/* SERVICE SELECTOR */}
                  <div className="flex flex-col gap-3">
                    <label className="font-heading text-lg uppercase tracking-widest text-brand-white/50 mb-2">Service Needed</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["3D Animation", "VFX", "Motion Graphics", "Full Production"].map((s, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                          <input type="radio" name="service" className="hidden peer" defaultChecked={i===0} />
                          <div className="w-5 h-5 rounded-full border border-white/30 peer-checked:border-brand-teal peer-checked:bg-brand-teal transition-all flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-brand-black opacity-0 peer-checked:opacity-100" />
                          </div>
                          <span className="font-body text-brand-white/80 group-hover:text-brand-white transition-colors">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* BUDGET + TIMELINE */}
                   <div className="flex flex-col gap-2">
                    <label className="font-heading text-lg uppercase tracking-widest text-brand-white/50">Estimated Budget</label>
                    <select className="bg-brand-black border border-white/20 p-3 rounded text-brand-white font-body focus:outline-none focus:border-brand-teal transition-colors appearance-none">
                      <option>&lt; $5k</option>
                      <option>$5k - $15k</option>
                      <option>$15k - $30k</option>
                      <option>$30k+</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-heading text-lg uppercase tracking-widest text-brand-white/50">Project Details & Timeline</label>
                    <textarea rows={4} className="bg-transparent border-b border-white/20 pb-2 text-brand-white font-body focus:outline-none focus:border-brand-teal transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="bg-brand-teal font-bold text-brand-black font-heading text-2xl uppercase py-4 rounded hover:bg-brand-white transition-colors mt-4">
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </RevealItem>
        </div>

      </RevealContainer>
    </div>
  );
}
