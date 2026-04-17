import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Smart Home Energy Dashboard',
      category: 'Software Engineering',
      description: 'A full-stack application for monitoring and managing residential energy consumption in real-time.',
      image: 'https://picsum.photos/seed/dashboard/800/600',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Commercial Plaza MEP Layout',
      category: 'Electrical Design',
      description: 'Complete electrical power distribution and lighting design for a 50,000 sq ft commercial plaza.',
      image: 'https://picsum.photos/seed/blueprint/800/600',
      tags: ['AutoCAD', 'Revit', 'Lighting Design'],
    },
    {
      title: 'Industrial IoT Control System',
      category: 'Software & IoT',
      description: 'A distributed system for factory workers to monitor machine health and control automated processes via a real-time web interface.',
      image: 'https://picsum.photos/seed/app/800/600',
      tags: ['TypeScript', 'MQTT', 'Docker'],
    },
    {
      title: 'Residential Solar Integration',
      category: 'Electrical Design',
      description: 'System design and single-line diagrams for a 15kW grid-tied solar installation with battery backup.',
      image: 'https://picsum.photos/seed/solar/800/600',
      tags: ['Solar', 'Power Systems', 'Drafting'],
    },
  ];

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
          <span className="text-[11px] text-muted">04 Projects</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
              <a href="#" className="text-[10px] text-foreground underline hover:text-accent transition-colors mt-4">
                Read Case Study
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-card-border text-foreground text-[13px] font-semibold uppercase tracking-[0.5px] rounded-[30px] hover:bg-card-alt transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
