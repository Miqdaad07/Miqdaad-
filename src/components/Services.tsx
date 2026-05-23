import { motion } from 'motion/react';
import { Code2, Compass, Cpu, Palette, RefreshCw, Layers, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Bespoke Web Development',
      description: 'Fully customized high-performance websites and dynamic web applications. Developed with React, Next.js, and clean Tailwind architectures to ensure flawless responsive rendering and instantaneous speeds.',
      icon: <Code2 size={24} className="text-accent" />,
      tag: 'Next.js & React'
    },
    {
      title: 'High-Converting Landing Pages',
      description: 'Pixel-perfect digital funnels engineered to convert clicks into clients. Designed with deep psychology triggers, micro-animations, clear CTAs, and outstanding performance optimization for fast loading.',
      icon: <Layers size={24} className="text-accent" />,
      tag: 'Conversion-Focused'
    },
    {
      title: 'Premium UI/UX Art Direction',
      description: 'Bespoke aesthetic systems, wireframes, and high-fidelity interactive designs. We create elite, modern digital interfaces that convey luxury, project immense authority, and elevate your brand image.',
      icon: <Palette size={24} className="text-accent" />,
      tag: 'High-Fidelity Design'
    },
    {
      title: 'Modern Website Redesign',
      description: 'Transform legacy, slow, or template-based websites into cutting-edge, high-conversion engines. We rewrite core layers from scratch to supercharge loading times and align your aesthetic with modern agencies.',
      icon: <RefreshCw size={24} className="text-accent" />,
      tag: 'System Upgrade'
    },
    {
      title: 'Premium E-Commerce Engines',
      description: 'Scalable digital storefronts and marketplaces with high-security checkout terminals, multi-vendor support, automated catalog management, and customized payment gateways (Stripe, PayPal).',
      icon: <ShoppingBag size={24} className="text-accent" />,
      tag: 'Shop & Marketplace'
    },
    {
      title: 'Bespoke Website Maintenance',
      description: '24/7 technical monitoring, lightning-fast regular updates, edge server management, database backup scheduling, speed optimization, and rigorous security patches so you focus on scaling.',
      icon: <ShieldCheck size={24} className="text-accent" />,
      tag: 'Continuous Coverage'
    },
  ];

  return (
    <section id="services" className="py-28 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background abstract overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent mb-4">
            <Cpu size={12} className="animate-pulse" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">What We Offer</span>
          </div>
          <h2 className="text-[32px] md:text-[45px] font-display font-extrabold tracking-tight text-white leading-tight">
            Elite Capabilities <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
              For Forward-Thinking Brands
            </span>
          </h2>
          <p className="text-muted text-[14px] md:text-[15px] mt-4 leading-relaxed font-light">
            We don't use generic page templates or slow, bloated builders. Every layer is carefully written from scratch, ensuring peak technical performance and a completely unique aesthetic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between h-[340px] relative overflow-hidden group cursor-default"
            >
              {/* Card top half */}
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-[18px] md:text-[20px] font-display font-bold text-white group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-[13px] leading-[1.6] font-light">
                  {service.description}
                </p>
              </div>

              {/* Card footer metadata */}
              <div className="flex items-center justify-between pt-4 border-t border-card-border/60">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent font-semibold">
                  {service.tag}
                </span>
                <span className="text-muted/40 font-mono text-[11px] group-hover:text-accent transition-colors">
                  // 0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
