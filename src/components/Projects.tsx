import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Code, Sparkles, FolderGit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Web Apps' | 'E-Commerce' | 'Islamic'>('All');

  const filters: { label: string; value: typeof activeFilter }[] = [
    { label: 'All Projects', value: 'All' },
    { label: 'Bespoke Web Apps', value: 'Web Apps' },
    { label: 'E-Commerce Platforms', value: 'E-Commerce' },
    { label: 'Islamic Portals', value: 'Islamic' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Web Apps') {
      return project.category.includes('Application') || project.category.includes('SaaS') || project.category.includes('Platform') || project.category.includes('EdTech');
    }
    if (activeFilter === 'E-Commerce') {
      return project.category.includes('Commerce');
    }
    if (activeFilter === 'Islamic') {
      return project.category.includes('Islamic') || project.category.includes('Qur’an');
    }
    return true;
  });

  return (
    <section id="projects" className="py-28 px-4 md:px-8 bg-gradient-to-b from-black to-[#040805]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
              <FolderGit size={12} className="animate-pulse" />
              <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.15em] font-bold">Case Studies</span>
            </div>
            <h2 className="text-[32px] md:text-[45px] font-display font-extrabold text-white leading-tight">
              Selected Collaborations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">
                & Bespoke Digital Masterpieces
              </span>
            </h2>
          </div>
          
          <span className="font-mono text-[11px] px-3.5 py-1.5 bg-card-alt border border-card-border rounded-xl text-muted/80 self-start md:self-auto">
            // TOTAL METRIC: {projects.length.toString().padStart(2, '0')} REPOS
          </span>
        </motion.div>

        {/* Dynamic Category Filter Row */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-card-border/45">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-[12px] font-medium tracking-[0.5px] transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-accent text-black font-semibold shadow-[0_4px_16px_rgba(5,219,105,0.25)]'
                  : 'bg-[#101813]/40 text-muted hover:text-white border border-card-border/40 hover:border-accent/30'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with entry animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group bg-card rounded-3xl overflow-hidden border border-accent/15 hover:border-accent/40 shadow-[0_10px_35px_-12px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(5,219,105,0.06)] transition-all duration-500 h-full text-left"
              >
                <Link to={`/case-study/${project.id}`} className="flex flex-col h-full justify-between">
                  {/* Visual Image Container with custom scale interaction */}
                  <div className="aspect-[16/10] overflow-hidden relative border-b border-card-border/50 bg-[#020503]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative Glass Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />
                    
                    {/* Live or In Progress tag */}
                    {project.inProgress ? (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-500/25 text-amber-400 font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse mr-0.5"></span> Under active development
                      </div>
                    ) : project.link ? (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-accent/20 text-accent font-mono text-[9px] uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping"></span> Live Deployment
                      </div>
                    ) : null}
                  </div>

                  {/* Info Text Area */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div className="space-y-3.5">
                      {/* Tags block */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-[9px] text-[#05db69] font-mono uppercase tracking-[1.5px] border border-accent/30 bg-accent/5 px-2.5 py-0.5 rounded-md">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-[20px] md:text-[23px] font-display font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-[13px] text-muted/90 leading-[1.6] font-light">
                        {project.description}
                      </p>

                      {/* Tags footer preview */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-muted/65 bg-card-alt px-2 py-0.5 rounded border border-card-border/65">
                            #{tag.toLowerCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Link button */}
                    <div className="pt-6 mt-6 border-t border-card-border/60 flex items-center justify-between">
                      <div 
                        className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-foreground group-hover:text-accent transition-colors"
                      >
                        Bespoke Audit & Case
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent" />
                      </div>
                      <span className="text-[10px] font-mono text-muted/30">ID // {project.id}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
