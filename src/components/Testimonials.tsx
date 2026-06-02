import { motion } from 'motion/react';
import { Quote, Star, ArrowUpRight } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Miqdaad built a highly secure, integrated global donation portal and a custom-engineered Zakat calculator. The speed is spectacular, and his layout has significantly improved our donor onboarding and administration.",
      author: "Dr. Abdullahi Shuaib",
      role: "Founder, Abdullahi Shuaib Foundation",
      project: "Abdullahi Shuaib Foundation (ASF)",
      rating: 5
    },
    {
      quote: "The spiritually calming emerald design aligns perfectly with our brand. Miqdaad hand-coded a modern academy ecosystem that streamlined our course directories and triggered immediate global student enrollments.",
      author: "Ustaadh Abu Bakr",
      role: "Founder, Halqatu-Najaah Academy",
      project: "Halqatu-Najaah Online Qur’an Academy",
      rating: 5
    },
    {
      quote: "He delivered a majestic, editorial digital experience that commands absolute trust. The layout grids and dark glassmorphic panels perfectly represent our private wealth advisory division.",
      author: "Marcus Sterling",
      role: "Managing Director, Sterling Advisory",
      project: "Aure Wealth Advisory Platform",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Dynamic background light flares */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
            <Quote size={12} className="text-accent" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">Social Proof</span>
          </div>
          <h2 className="text-[32px] md:text-[45px] font-display font-extrabold text-foreground leading-tight">
            Trusted By Elite <br />
            <span className="text-accent bg-clip-text bg-gradient-to-r from-accent to-accent-hover dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-accent dark:to-emerald-400">
              Founders & Builders
            </span>
          </h2>
          <p className="text-muted text-[13px] md:text-[14px] leading-relaxed font-light">
            I prioritize engineering mastery and visual luxury. Read how I help my partners project authority and generate concrete business growth.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-card border border-card-border/70 hover:border-accent/30 transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Star rating list */}
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-[13px] md:text-[14px] text-muted font-light leading-relaxed relative z-10">
                  “{item.quote}”
                </p>
              </div>

              {/* Author footer inside card */}
              <div className="mt-8 pt-6 border-t border-card-border/60 flex flex-col gap-1.5">
                <h4 className="text-[14px] font-display font-bold text-foreground tracking-tight">
                  {item.author}
                </h4>
                <p className="text-[11px] text-muted/65 leading-none">
                  {item.role}
                </p>
                <div className="inline-flex items-center gap-1.5 font-mono text-[9px] text-accent mt-1 uppercase tracking-wider bg-accent/5 self-start px-2 py-0.5 rounded border border-accent/10">
                  <span>{item.project}</span>
                  <ArrowUpRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
