import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame, Shield, Sparkles } from 'lucide-react';

export default function CTA() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-[#020503] relative overflow-hidden">
      
      {/* Decorative center radial background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="p-8 md:p-14 rounded-[32px] bg-card border border-accent/20 relative overflow-hidden group text-center space-y-8">
          
          {/* Cyber accents */}
          <div className="absolute top-0 left-12 w-28 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="absolute bottom-0 right-12 w-28 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />

          {/* Badge icon */}
          <div className="mx-auto w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-pulse">
            <Flame size={20} className="text-accent" />
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-[28px] md:text-[45px] font-display font-extrabold text-white leading-tight">
              Ready to Accelerate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                Digital Dominance?
              </span>
            </h2>
            <p className="text-muted text-[13px] md:text-[14px] leading-relaxed font-light">
              I only accept <span className="text-white font-semibold">a limited number of bespoke collaborations</span> each month to maintain my flawless QA standards and extreme execution speed. Let's talk today.
            </p>
          </div>

          {/* Inline trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted font-mono text-[10px] md:text-[11px] uppercase tracking-wider">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-card-alt border border-card-border rounded-full text-white">
              <Sparkles size={11} className="text-accent" /> Bespoke Hand-Coded
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-card-alt border border-card-border rounded-full text-white">
              <Shield size={11} className="text-accent" /> 100% Secure DNS
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-card-alt border border-card-border rounded-full text-white">
              <Flame size={11} className="text-accent" /> 95+ Core Vitals
            </span>
          </div>

          {/* Primary Action */}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-black font-bold uppercase text-[12px] tracking-[1.5px] rounded-full hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(5,219,105,0.3)] hover:shadow-[0_4px_30px_rgba(5,219,105,0.5)] cursor-pointer"
            >
              Initiate Project Inquiry
              <ArrowRight size={14} className="text-black" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
