import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ChevronRight, Share2, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Miqdaad Labs`;
    }
  }, [id, project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-[#020503] text-white">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-accent hover:underline inline-flex items-center gap-2 font-mono text-[13px]">
            <ArrowLeft size={16} /> BACK TO BASE SYSTEMS
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gradient-to-b from-[#020503] via-[#050c07] to-[#010402] relative overflow-hidden">
      
      {/* Subtle background grids */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#05db69 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 relative z-50 text-left"
        >
          <Link 
            to="/"
            onClick={() => {
              window.sessionStorage.setItem('scroll-to-projects', 'true');
            }}
            className="inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[2px] text-muted hover:text-accent transition-colors p-2"
          >
            <ArrowLeft size={14} /> Back to collaborations
          </Link>
        </motion.div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-center text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-mono text-[9px] uppercase tracking-wider">
              <Sparkles size={11} className="text-accent animate-pulse" /> {project.category}
            </span>
            
            <h1 className="text-[34px] md:text-[52px] font-display font-extrabold tracking-tight leading-[1.1] text-white">
              {project.title}
            </h1>
            
            <p className="text-muted text-[14px] md:text-[16px] leading-[1.6] font-light max-w-xl">
              {project.fullDescription}
            </p>

            {project.inProgress ? (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1a120b] border border-amber-600/30 text-amber-400 font-bold uppercase text-[11.5px] tracking-[1.5px] rounded-full shadow-[0_4px_16px_rgba(245,158,11,0.06)]">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse mr-0.5"></span>
                Engineering & Assembly Phase
              </div>
            ) : project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-black font-bold uppercase text-[12px] tracking-[1.5px] rounded-full hover:bg-accent/90 transition-all hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(5,219,105,0.25)]"
              >
                Visit Live Project
                <ExternalLink size={15} strokeWidth={2.5} />
              </a>
            ) : null}

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-card-border/60">
              <div>
                <h4 className="font-mono text-[10px] text-muted/60 uppercase tracking-widest mb-3 font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-mono px-2.5 py-0.5 bg-card rounded-md text-foreground border border-card-border/70">
                      #{tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-muted/60 uppercase tracking-widest mb-3 font-bold">Bespoke Scope</h4>
                <p className="text-[13px] font-display font-bold text-white leading-normal">{project.category}</p>
              </div>
            </div>
          </motion.div>

          {/* Large image wrapper mockup frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-accent/20 bg-card"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content Section: Challenge, Solution, Outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 pt-16 border-t border-card-border/60 text-left">
          <motion.div 
             initial={{ opacity: 0, y: 25 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-4 p-5 rounded-2xl bg-[#040805]/60 border border-card-border"
          >
            <h3 className="text-[18px] md:text-[20px] font-display font-bold text-white">The Challenge</h3>
            <p className="text-[13px] md:text-[14px] text-muted leading-[1.6] font-light">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 25 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="space-y-4 p-5 rounded-2xl bg-[#040805]/60 border border-accent/15"
          >
            <h3 className="text-[18px] md:text-[20px] font-display font-bold text-accent">The Solution</h3>
            <p className="text-[13px] md:text-[14px] text-muted leading-[1.6] font-light">
              {project.solution}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 25 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-4 p-5 rounded-2xl bg-[#040805]/60 border border-card-border"
          >
            <h3 className="text-[18px] md:text-[20px] font-display font-bold text-white">The Outcome</h3>
            <p className="text-[13px] md:text-[14px] text-muted leading-[1.6] font-light">
              {project.outcome}
            </p>
          </motion.div>
        </div>

        {/* Next Project Footer */}
        <div className="mt-32 pt-16 border-t border-card-border/45">
          <Link 
            to={`/case-study/${projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].id}`}
            className="group block text-center"
          >
            <span className="text-[11px] uppercase tracking-[3px] text-accent font-mono block mb-3">// NEXT AUDIT</span>
            <h2 className="text-[28px] md:text-[45px] font-display font-extrabold tracking-tight group-hover:translate-x-4 transition-transform inline-flex items-center gap-4 text-white hover:text-accent">
              {projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].title}
              <ChevronRight size={32} className="text-accent animate-pulse" />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
