import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4">Featured Case Studies</h2>
          </div>
          <span className="text-[11px] text-muted">{projects.length.toString().padStart(2, '0')} Projects</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between bg-card-alt rounded-2xl overflow-hidden border border-card-border hover:border-accent transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="inline-block text-[9px] text-accent font-mono uppercase tracking-[1px] border border-accent/30 bg-accent/5 px-2 py-0.5 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-[20px] font-medium mb-3 group-hover:text-accent transition-colors underline decoration-transparent group-hover:decoration-accent decoration-2 underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-[1.6]">
                    {project.description}
                  </p>
                </div>
                
                <Link 
                  to={`/case-study/${project.id}`}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.5px] text-foreground hover:text-accent transition-colors mt-2"
                >
                  Read Case Study
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button
            onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop, behavior: 'smooth' })}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-card-border text-foreground text-[13px] font-semibold uppercase tracking-[0.5px] rounded-[30px] hover:bg-card-alt transition-colors"
          >
            All Projects Shown
          </button>
        </div>
      </div>
    </section>
  );
}
