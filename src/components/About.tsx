import { motion } from 'motion/react';
import { Target, Zap, Shield, HeartHandshake, Award, Cpu } from 'lucide-react';

export default function About() {
  const values = [
    { 
      title: 'Performance First', 
      desc: 'We write lightweight, zero-bloat modular code. Your site loads instantaneously, directly improving SEO rankings and conversion rates.', 
      icon: <Zap size={20} className="text-accent" /> 
    },
    { 
      title: 'Bulletproof Security', 
      desc: 'Employing advanced serverless deployment, modern TLS standards, secure API proxies, and strict database isolation practices.', 
      icon: <Shield size={20} className="text-accent" /> 
    },
    { 
      title: 'Immersive Aesthetics', 
      desc: 'We merge high-fidelity luxury digital designs with interactive micro-details to make your brand unforgettable.', 
      icon: <Award size={20} className="text-accent" /> 
    },
    { 
      title: 'Bespoke Engineering', 
      desc: 'No heavy themes or drag-and-drop constraints. Every asset is customized to match your business goals precisely.', 
      icon: <Cpu size={20} className="text-accent" /> 
    },
  ];

  return (
    <section id="about" className="py-28 px-4 md:px-8 bg-[#040805] relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent mb-4">
            <Target size={12} className="animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">About Miqdaad Labs</span>
          </div>
          <h2 className="text-[32px] md:text-[45px] font-display font-extrabold tracking-tight text-white leading-tight">
            The Digital Sandbox <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              For Groundbreaking Audits & Builds
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Mission & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="p-6 md:p-8 rounded-2xl bg-card border border-accent/15 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors" />
              <h3 className="text-[20px] md:text-[22px] font-display font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-[14px] md:text-[15px] text-muted leading-relaxed font-light">
                At Miqdaad Labs, we believe that your website should not just be an "online business card." It is your most powerful marketing officer, your sales coordinator, and your brand's ultimate digital authority representation.
              </p>
              <p className="text-[14px] md:text-[15px] text-muted leading-relaxed font-light mt-4">
                We craft beautiful, lightning-speed digital systems for commercial businesses, luxury brands, and specialized foundations. By bridging strict technical engineering with premium visual designs, we help our clients dominate their markets and trigger high-volume conversions.
              </p>
            </div>

            {/* Quote Badge */}
            <div className="flex gap-4 p-5 rounded-2xl bg-card border border-card-border/60 relative overflow-hidden">
              <HeartHandshake className="text-accent/60 flex-shrink-0 animate-pulse" size={24} />
              <div>
                <p className="text-[13px] md:text-[14px] font-medium text-white italic leading-relaxed">
                  "We don't build generic web pages. We program highly structured digital assets that load instantaneously and drive continuous growth."
                </p>
                <p className="text-[10px] font-mono text-accent/80 uppercase tracking-widest mt-2.5">- Miqdaad Labs Team</p>
              </div>
            </div>
          </motion.div>

          {/* Right Block - Core Values / Trust Factors */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="text-[20px] md:text-[22px] font-display font-bold text-white text-left pl-1">
              Why Global Brands Choose Us
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl bg-card-alt border border-card-border hover:border-accent/30 transition-all duration-300 flex flex-col justify-between h-[190px] text-left hover:shadow-[0_4px_20px_rgba(5,219,105,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      {val.icon}
                    </div>
                    <span className="text-[14px] md:text-[15px] font-display font-bold text-white">{val.title}</span>
                  </div>
                  <p className="text-[12px] text-muted leading-relaxed font-light mt-4">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
