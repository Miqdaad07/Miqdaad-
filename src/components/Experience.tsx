import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'TechNova Solutions',
      period: '2022 - Present',
      description: 'Lead developer for enterprise SaaS products. Developed a scalable core dashboard, improving system performance by 35% and user interaction speed. Established the company\'s internal software architecture guidelines.',
    },
    {
      role: 'Electrical Engineer',
      company: 'PowerGrid Dynamics',
      period: '2019 - 2022',
      description: 'Designed and supervised the installation of power distribution systems for commercial high-rises. Managed a team of 5 junior engineers and technicians.',
    },
    {
      role: 'Freelance Developer & Consultant',
      company: 'Self-Employed',
      period: '2017 - 2019',
      description: 'Provided web development and small-scale electrical consultation for local businesses. Developed a passion for combining technical logic with software engineering.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-card-alt">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4">Experience</h2>
        </motion.div>

        <div className="relative ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l border-card-border pl-5 pb-8 relative last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute w-[7px] h-[7px] bg-accent rounded-full left-[-4px] top-1.5" />
              
              <div className="flex flex-col mb-2 gap-1">
                <h3 className="text-[13px] font-medium">{exp.role}</h3>
                <span className="font-mono text-[11px] text-muted">
                  {exp.period} / {exp.company}
                </span>
              </div>
              <p className="text-[12px] text-muted leading-[1.4] max-w-2xl mt-3">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
