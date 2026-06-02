import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service | Dawodu Miqdaad';
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
            <BookOpen size={10} /> Regulatory Agreement v1.1
          </div>
          <h1 className="text-[34px] md:text-[50px] font-display font-bold tracking-tight text-foreground leading-[1.1]">
            Terms of Service
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
              <HeartHandshake size={18} className="text-accent" /> 1. Agreement to Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the services of Miqdaad Labs ("Company", "we", "us", or "our"), you ("Client", "User") agree to be bound unconditionally by these Terms of Service. If you disagree with any portion of these provisions, you must terminate access to our systems and web pages immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <Cpu size={18} className="text-accent" /> 2. Scope of Services
            </h2>
            <p>
              Miqdaad Labs specializes in premium web development, custom applications, branding assets, search engine optimization, and system integration. 
            </p>
            <p>
              All service delivery schedules, deliverables, fee frameworks, and maintenance clauses are defined separately in specific Service Level Agreements (SLA) or custom client project proposal documents. These formal custom contracts supersede any general website literature.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <BookOpen size={18} className="text-accent" /> 3. Intellectual Property
            </h2>
            <p>
              Unless explicitly specified, all digital assets published on this website including typography combinations, responsive interfaces, custom code layouts, graphic tokens, and copy systems are the proprietary creative property of Miqdaad Labs or its licensors. 
            </p>
            <p>
              You receive a limited, non-exclusive, non-transferable license to access this platform for review and communication. Code scraping, visual impersonation, or branding duplication is strictly prohibited and subject to rapid enforcement.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <ShieldAlert size={18} className="text-accent" /> 4. Acceptable Conduct
            </h2>
            <p>
              You agree to utilize this platform solely for lawful purposes. You are strictly forbidden from:
            </p>
            <ul className="list-none space-y-2.5 pl-1 text-[14px]">
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">!</span>
                <span>Transmitting automated scripts, viruses, coordinate mapping attacks, or denial-of-service queries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">!</span>
                <span>Using automated web-scrapers, text miners, or AI training scripts against this site's codebase without written consent.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-accent font-bold mt-0.5">!</span>
                <span>Falsifying client information or project scopes in contact channels.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <ShieldAlert size={18} className="text-accent" /> 5. Limitation of Liability
            </h2>
            <p>
              All software components and interactive configurations on this site are supplied "As Is" and "As Available" without guarantees of uninterrupted operation. Miqdaad Labs disclaims all warranties, express or implied, including fitness for a specific target scale. In no direct or indirect occurrence shall the firm be held liable for storage losses, data leaks, or server interrupts arising from standard site usage.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-[20px] md:text-[22px] font-display font-bold text-foreground flex items-center gap-2.5">
              <BookOpen size={18} className="text-accent" /> 6. Amendments
            </h2>
            <p>
              We reserve sovereign authority to adjust, rewrite, or update these terms at any given point without individual user alerts. Review this interface periodically to coordinate with the latest terms system. Your ongoing access verifies acceptance of active frameworks.
            </p>
          </section>

          {/* SLA Inquiries card */}
          <div className="p-6 md:p-8 rounded-3xl bg-card border border-card-border/80 space-y-4 mt-8">
            <h3 className="text-[16px] font-display font-bold text-foreground">SLA & Contract Inquiries</h3>
            <p className="text-[13px] text-muted/80 leading-relaxed">
              If you have contract-specific queries, licensing clearance requests, or require adjustments to your existing project Service Level Agreement, reach out directly to:
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
