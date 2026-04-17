import { motion } from 'motion/react';
import { Lightbulb, Terminal, Database, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Electrical Design & Installation',
      description: 'Comprehensive MEP layouts, power distribution, and lighting design for residential and commercial spaces. Ensuring safety and compliance.',
      icon: <Lightbulb size={32} />,
    },
    {
      title: 'Full-Stack Development',
      description: 'Building robust and scalable web applications using modern technologies. From database design to high-performance frontends.',
      icon: <Terminal size={32} />,
    },
    {
      title: 'System Architecture',
      description: 'Designing complex, distributed systems that are reliable, maintainable, and efficient. Specializing in IoT and industrial automation.',
      icon: <Database size={32} />,
    },
    {
      title: 'Technical Consultation',
      description: 'Expert advice on bridging hardware and software. Ideal for smart grid technologies, IoT products, and technical systems.',
      icon: <Users size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4">Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-card-alt border border-transparent hover:border-accent transition-colors"
            >
              <h4 className="text-[14px] font-medium mb-1 text-foreground">{service.title}</h4>
              <span className="text-[11px] text-muted">{service.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
