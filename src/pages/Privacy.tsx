import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Lock, Eye, Bell, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy | Dawodu Miqdaad';
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-background via-bg-alt to-bg-deep relative overflow-hidden text-left">
      {/* Subtle background grids */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(var(--accent) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/"
            className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[2px] text-muted hover:text-accent transition-colors p-2"
          >
            <ArrowLeft size={14} /> Back to homepage
          </Link>
        </motion.div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-[9px] uppercase tracking-wider">
            <Lock size={10} /> Policy System v1.1
          </div>
          <h1 className="text-[34px] md:text-[50px] font-display font-bold tracking-tight text-foreground leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-muted font-mono uppercase tracking-wide">
            Last Updated: June 2, 2026
          </p>
          <div className="h-[1px] w-full bg-card-border/45 mt-8" />
        </motion.div>

        {/* Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12 text-muted leading-relaxed text-[15px]"
        >
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Shield size={18} className="text-accent" /> 1. Overview & Commitment
            </h2>
            <p>
              At Miqdaad Labs, your privacy is paramount. We build high-performance web solutions on foundations of security and respect for user data. This Privacy Policy details how we handle information collected when you access our platforms, communicate with our systems, or engage our web development services.
            </p>
            <p>
              We firmly commit to never selling, renting, or trading your personal data. All information collection is scoped strictly to servicing your product inquiries, maintaining stable system connections, and improving your interactions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Eye size={18} className="text-accent" /> 2. Data We Collect
            </h2>
            <p>
              We gather basic, non-intrusive data to ensure a smooth user experience. This classification falls into two primary categories:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-card border border-card-border/60">
                <h3 className="text-[14px] font-mono uppercase font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Personal Information
                </h3>
                <p className="text-[13px] leading-relaxed text-muted/80">
                  Voluntarily submitted information through our Contact or Inquiry forms, which may include your full name, email address, corporate association, and direct project requirements.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-card-border/60">
                <h3 className="text-[14px] font-mono uppercase font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Dynamic System Metrics
                </h3>
                <p className="text-[13px] leading-relaxed text-muted/80">
                  Anonymized system metadata automatically retrieved from requests, such as device footprints, country-level locations, browser engine types, and user activity flows on our interactive elements.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Globe size={18} className="text-accent" /> 3. Processing Purposes
            </h2>
            <p>
              Collected intelligence is strictly used to design and deploy bespoke digital applications:
            </p>
            <ul className="list-none space-y-2.5 pl-1 text-[14px]">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span>To respond to direct project briefs and negotiate full-stack development agreements.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span>To monitor web performance metrics, preventing system strain and improving local load speeds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">✓</span>
                <span>To ensure robust application security, guarding inputs from malicious payloads and automated bot intrusions.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Lock size={18} className="text-accent" /> 4. Security Frameworks
            </h2>
            <p>
              We implement industry-grade protective mechanisms, including solid end-to-end Transport Layer Security (TLS/SSL) for all browser calls, isolated microservices, and continuous edge-monitoring. Unfortunately, no network interface can declare itself 100% immune to breaches, but we execute maximum diligence to secure your files.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Bell size={18} className="text-accent" /> 5. Your Rights & Options
            </h2>
            <p>
              You maintain sovereign authority over your digital presence. At any interval, you may trigger request queries to:
            </p>
            <ul className="list-none space-y-2.5 pl-1 text-[14px]">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span>Retrieve a transparent record of all information our database holds on your identity.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span>Instruct the complete purge/deletion of all your communication logs from our active servers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">→</span>
                <span>Revoke permissions for localized session cookies.</span>
              </li>
            </ul>
          </section>

          {/* Contact Details inside policy */}
          <div className="p-6 md:p-8 rounded-3xl bg-card border border-card-border/80 space-y-4 mt-8">
            <h3 className="text-[16px] font-display font-bold text-foreground">Privacy Queries</h3>
            <p className="text-[13px] text-muted/80 leading-relaxed">
              For security compliance files or instructions on complete data purges, open a secure request channel directed to our main intake endpoint:
            </p>
            <p className="font-mono text-xs text-accent">
              dawodumiqdaad88@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
