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
              className="group flex flex-col justify-between bg-card-alt rounded-xl p-5 border border-transparent hover:border-accent transition-colors"
            >
              <div className="mb-4">
                <span className="inline-block text-[9px] text-muted border border-card-border px-2 py-0.5 rounded-[10px] mb-3">
                  {project.category}
                </span>
                <h3 className="text-[18px] font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-[12px] text-muted leading-[1.4]">
                  {project.description}
                </p>
              </div>
              <Link 
                to={`/case-study/${project.id}`}
                className="text-[10px] text-foreground underline hover:text-accent transition-colors mt-4 inline-flex items-center gap-1"
              >
                Read Case Study
                <ArrowUpRight size={10} />
              </Link>
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
