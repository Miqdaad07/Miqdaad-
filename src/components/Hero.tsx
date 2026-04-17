import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import myDp from './My dp.jpeg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-12 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-[#121212] to-[#0a0a0a]">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3">
              <span className="font-mono text-[12px] text-accent uppercase tracking-wider">Available for work</span>
            </div>
            <h1 className="text-[48px] md:text-[64px] font-medium tracking-tight leading-[1.1] mb-4">
              Hi, I'm <span className="text-accent">MIQDAAD</span>
            </h1>
            <p className="text-[15px] md:text-[18px] text-muted mb-6 max-w-lg leading-[1.5]">
              Electrical Engineer <span className="text-card-border mx-2">|</span> Software Engineer <span className="text-card-border mx-2">|</span> Problem Solver
            </p>
            <p className="text-[15px] text-muted mb-8 max-w-xl leading-[1.5]">
              I bridge the gap between complex technical systems and scalable software solutions. Designing robust electrical infrastructure and crafting high-performance digital systems.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-black text-[13px] font-semibold uppercase tracking-[0.5px] rounded-[30px] hover:opacity-80 transition-opacity"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-card-border text-foreground text-[13px] font-semibold uppercase tracking-[0.5px] rounded-[30px] hover:bg-card-alt transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block max-w-[450px] ml-auto"
          >
            <div className="aspect-square rounded-full bg-card border border-card-border relative overflow-hidden shadow-2xl shadow-black/50">
              {/* Profile picture */}
              <img 
                src={myDp} 
                alt="MIQDAAD" 
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-8 -left-8 bg-card border border-card-border p-4 rounded-2xl shadow-xl backdrop-blur-sm z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                  <span className="font-bold text-xl">5+</span>
                </div>
                <div>
                  <p className="text-sm font-bold">Years of</p>
                  <p className="text-xs text-muted">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
