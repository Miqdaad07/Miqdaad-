import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Play, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '99%', label: 'Page Speed Index', desc: 'Average Lighthouse Score' },
    { value: '250k+', label: 'User Transactions', desc: 'Processed by our apps' },
    { value: '1.5M+', label: 'Funding Secured', desc: 'By our client websites' },
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-32 pb-16 px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-[#020503] via-[#050c07] to-[#010402]"
    >
      {/* Neo-emerald subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#05db69 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Cyber Glimmer Background Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Dynamic Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
              <Sparkles size={14} className="animate-spin duration-3000" />
              <span className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-semibold">
                Premium Web Development Boutique
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[38px] md:text-[60px] font-display font-extrabold tracking-tight leading-[1.05] text-white">
              We Build Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-emerald-500 drop-shadow-[0_2px_15px_rgba(5,219,105,0.2)]">
                Websites That Grow
              </span> <br />
              Businesses.
            </h1>

            {/* Subheadline Decoupled description */}
            <p className="text-[15px] md:text-[17.5px] text-muted max-w-xl leading-[1.6] font-light">
              Miqdaad Labs crafts bespoke digital solutions, optimized for speed, aesthetics, and conversions. From high-growth landing pages and complex e-commerce to custom Islamic web apps.
            </p>

            {/* Highlighted Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Business Sites', 'Landing Pages', 'E-Commerce', 'Islamic Apps', 'SaaS Engines'].map((val) => (
                <span 
                  key={val} 
                  className="font-mono text-[11px] px-3 py-1 bg-card-alt/80 border border-card-border rounded-lg text-muted/90 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {val}
                </span>
              ))}
            </div>

            {/* High Impact Conversion triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-black text-[13px] font-bold uppercase tracking-[1px] rounded-full hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_5px_20px_rgba(5,219,105,0.3)] hover:shadow-[0_5px_30px_rgba(5,219,105,0.5)] cursor-pointer"
              >
                Book a Project
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-card-border text-foreground text-[13px] font-bold uppercase tracking-[1px] rounded-full hover:bg-card-alt hover:border-accent/40 transition-colors cursor-pointer"
              >
                View Our Work
              </a>
            </div>

            {/* Trust badge indicator */}
            <div className="flex items-center gap-4 pt-6 text-[12px] text-muted font-mono">
              <span className="flex items-center gap-1 text-accent">
                <HeartHandshake size={14} /> Custom Architecture
              </span>
              <span className="text-card-border">|</span>
              <span className="flex items-center gap-1">
                <Code size={14} /> Zero Bloatware
              </span>
            </div>
          </motion.div>

          {/* Right Column Custom Simulated Sandbox Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Outer glow aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-emerald-600 rounded-3xl blur-md opacity-25" />
              
              {/* Dev Mockup IDE Window */}
              <div className="relative rounded-2xl bg-card border border-accent/25 overflow-hidden shadow-2xl glass-panel">
                
                {/* Simulated IDE Bar */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-card-border bg-[#050906]/85">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/80 inline-block" />
                  </div>
                  <div className="font-mono text-[9px] text-[#55695e] uppercase tracking-[0.1em]">
                    m-labs-compiler.js
                  </div>
                  <div className="w-6" /> {/* Spacer */}
                </div>

                {/* Dashboard Code / Live Monitor */}
                <div className="p-6 font-mono text-[11px] space-y-4 text-emerald-100/90 leading-normal overflow-hidden">
                  <div className="flex items-center gap-2 text-muted">
                    <span className="text-accent">&gt;</span>
                    <span>yarn init miqdaad-labs-engine</span>
                  </div>
                  
                  {/* JSON Config mockup */}
                  <div className="text-muted/65">
                    <span className="text-[#bfdbfe]">const</span> <span className="text-[#a7f3d0]">agencySpecs</span> = &#123;
                    <div className="pl-4">
                      <span>architecture: </span><span className="text-accent">"Edge-Rendered SSR"</span>,
                      <br />
                      <span>designPhilosophy: </span><span className="text-emerald-300">"Pure Luxury & Speed"</span>,
                      <br />
                      <span>standardCoreVitals: </span><span className="text-[#f9a8d4]">"100/100"</span>
                    </div>
                    &#125;;
                  </div>

                  {/* Core Web Vitals dynamic performance panel */}
                  <div className="p-3 bg-card-alt/80 border border-card-border rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-muted font-bold tracking-wide">LIGHTHOUSE STATUS</span>
                      <span className="text-accent flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" /> PASSING 
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                      <div className="bg-[#040805] p-1.5 rounded border border-accent/25">
                        <div className="text-[14px] font-bold text-accent">100</div>
                        <div className="text-[8px] text-muted">PERF</div>
                      </div>
                      <div className="bg-[#040805] p-1.5 rounded border border-accent/25">
                        <div className="text-[14px] font-bold text-emerald-400">100</div>
                        <div className="text-[8px] text-muted">A11Y</div>
                      </div>
                      <div className="bg-[#040805] p-1.5 rounded border border-accent/25">
                        <div className="text-[14px] font-bold text-emerald-400">100</div>
                        <div className="text-[8px] text-muted">SEO</div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated compiler line */}
                  <div className="flex items-center justify-between text-muted/80 text-[10px] pt-1">
                    <span className="flex items-center gap-1.5 text-accent font-semibold">
                      <Cpu size={12} className="animate-spin" /> Bundle Compiled in 4ms
                    </span>
                    <span className="text-emerald-500/80">Edge-Live</span>
                  </div>
                </div>

              </div>

              {/* Floating Element: Booking Success Widget */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card-alt border border-accent/30 p-3.5 rounded-xl shadow-xl backdrop-blur-md z-20 pointer-events-auto"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                    <Play size={14} className="fill-accent text-accent" />
                  </div>
                  <div>
                    <p className="text-[12px] font-bold">Launch Rate Max</p>
                    <p className="text-[9px] text-[#55695e] font-mono">+12.4% Conversions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Counter Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-card-border/60"
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="text-left space-y-1 p-4 rounded-2xl bg-[#040805]/40 border border-card-border/40 hover:border-accent/15 transition-colors group cursor-default"
            >
              <div className="text-[32px] md:text-[38px] font-display font-extrabold text-white group-hover:text-accent transition-colors flex items-baseline gap-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[12px] font-display font-bold text-foreground">
                {stat.label}
              </div>
              <div className="text-[11px] text-muted">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
