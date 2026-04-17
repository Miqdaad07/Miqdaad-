import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ChevronRight, Share2 } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-accent hover:underline inline-flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button 
            onClick={() => {
              window.sessionStorage.setItem('scroll-to-projects', 'true');
              navigate('/');
            }}
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-muted hover:text-accent transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Projects
          </button>
        </motion.div>

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4 block">
              {project.category}
            </span>
            <h1 className="text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-muted text-[16px] md:text-[18px] leading-[1.6] mb-8 max-w-xl">
              {project.fullDescription}
            </p>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-black font-bold uppercase text-[12px] tracking-[2px] rounded-full hover:opacity-80 transition-all hover:scale-105 active:scale-95 mb-12 shadow-xl shadow-accent/20"
              >
                Visit Live Project
                <ExternalLink size={16} />
              </a>
            )}

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-card-border">
              <div>
                <h4 className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[11px] px-3 py-1 bg-card-alt rounded-full text-foreground border border-card-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-mono text-[10px] text-muted uppercase tracking-widest mb-3">Role</h4>
                <p className="text-[13px] font-medium">{project.category}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-card-border"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-16 border-t border-card-border">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <h3 className="text-[24px] font-medium tracking-tight">The Challenge</h3>
            <p className="text-[15px] text-muted leading-[1.7]">
              {project.challenge}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="space-y-6"
          >
            <h3 className="text-[24px] font-medium tracking-tight">The Solution</h3>
            <p className="text-[15px] text-muted leading-[1.7]">
              {project.solution}
            </p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-6"
          >
            <h3 className="text-[24px] font-medium tracking-tight">The Outcome</h3>
            <p className="text-[15px] text-muted leading-[1.7]">
              {project.outcome}
            </p>
          </motion.div>
        </div>

        {/* Next Project Footer */}
        <div className="mt-32 pt-16 border-t border-card-border">
          <Link 
            to={`/case-study/${projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].id}`}
            className="group block text-center"
          >
            <span className="text-[11px] uppercase tracking-[3px] text-muted group-hover:text-accent transition-colors block mb-4">Next Project</span>
            <h2 className="text-[32px] md:text-[54px] font-medium tracking-tighter group-hover:translate-x-4 transition-transform inline-flex items-center gap-6">
              {projects[(projects.findIndex(p => p.id === id) + 1) % projects.length].title}
              <ChevronRight size={40} className="text-accent" />
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
