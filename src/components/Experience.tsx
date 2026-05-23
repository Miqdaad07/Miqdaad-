import { motion } from 'motion/react';
import { Compass, Palette, Code2, LineChart, Cpu } from 'lucide-react';

export default function Experience() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Deep System Audit',
      subtitle: 'Mapping Goals & Analytics',
      desc: 'We analyze your current product, user metrics, and business benchmarks. Together, we draft a comprehensive technical roadmap, defining architecture stacks and conversion triggers to hit your exact business goals.',
      icon: <Compass size={18} className="text-accent" />
    },
    {
      num: '02',
      title: 'High-Fidelity Art Direction',
      subtitle: 'Luxury Interactive Prototyping',
      desc: 'We craft bespoke visual identity assets, interactive typography rules, and modern glassmorphic UI systems. We avoid generic templates to project massive market authority and highlight your brand core values.',
      icon: <Palette size={18} className="text-accent" />
    },
    {
      num: '03',
      title: 'Bespoke Hand-Coded Development',
      subtitle: 'React & Next.js Modular Architecture',
      desc: 'We write lightweight, zero-bloat TypeScript and clean Tailwind utility classes. No slow templates or heavy visual page builders. Your system is assembled cleanly to guarantee bulletproof scaling and clean codebases.',
      icon: <Code2 size={18} className="text-accent" />
    },
    {
      num: '04',
      title: 'Core Vitals Optimization',
      subtitle: 'Speed & SEO Acceleration Tuning',
      desc: 'We compress media assets, fine-tune script injection, orchestrate strict lazy loading, and stress-test performance. This ensures perfect 100/100 Lighthouse scores, making your site rank higher and load instantly.',
      icon: <LineChart size={18} className="text-accent" />
    },
    {
      num: '05',
      title: 'Global Edge Deployment',
      subtitle: 'Securing DNS & Launch Support',
      desc: 'We provision serverless CDN routes, configure automated backups, implement secure contact forms, and link client management tools. We launch with complete confidence and provide active support.',
      icon: <Cpu size={18} className="text-accent" />
    },
  ];

  return (
    <section id="process" className="py-28 px-4 md:px-8 bg-[#020503] relative overflow-hidden">
      {/* Decorative vertical background blur */}
      <div className="absolute right-0 top-1/4 w-[1px] h-1/2 bg-accent/30 blur-[2px]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
            <Compass size={12} className="animate-spin duration-[4000ms]" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">The Blueprint</span>
          </div>
          <h2 className="text-[32px] md:text-[45px] font-display font-extrabold text-white leading-tight">
            Our Elite Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              Delivery Framework
            </span>
          </h2>
          <p className="text-muted text-[13px] md:text-[14px] leading-relaxed font-light">
            We follow an engineering-guided methodology to ensure your product has class-leading speed, exceptional visual design, and perfect high-availability delivery.
          </p>
        </div>

        {/* Linear Step Timeline list */}
        <div className="relative border-l border-accent/10 md:border-l-0 md:grid md:grid-cols-5 md:gap-4 md:border-t md:border-accent/10 pt-8 pl-6 md:pl-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pb-10 md:pb-0 text-left space-y-4 md:pt-4"
            >
              {/* Checkpoint indicators both for mobile and desktop */}
              {/* Desktop node */}
              <div className="hidden md:flex absolute top-[-38px] left-[10%] -translate-x-1/2 w-6 h-6 rounded-full bg-[#020503] border border-accent/40 items-center justify-center shadow-[0_0_10px_rgba(5,219,105,0.2)]">
                <span className="w-2 h-2 bg-accent rounded-full" />
              </div>

              {/* Mobile node */}
              <div className="md:hidden absolute top-1.5 left-[-31px] w-5 h-5 rounded-full bg-[#020503] border border-accent/40 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              </div>

              {/* Step number badge */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[14px] px-2.5 py-0.5 bg-accent/15 border border-accent/25 rounded text-accent font-bold">
                  {step.num}
                </span>
                <div className="w-8 h-8 rounded-lg bg-card-alt border border-card-border flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              {/* Step context */}
              <div className="space-y-2">
                <h3 className="text-[16px] md:text-[17px] font-display font-bold text-white tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="font-mono text-[9px] uppercase tracking-wider text-accent">
                  {step.subtitle}
                </p>
                <p className="text-[12px] text-muted leading-relaxed font-light md:max-w-[190px]">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
