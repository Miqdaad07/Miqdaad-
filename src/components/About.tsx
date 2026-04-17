import { motion } from 'motion/react';
import { Zap, Code, PenTool, Cpu } from 'lucide-react';

export default function About() {
  const skills = [
    { name: 'Electrical Design', icon: <Zap size={20} /> },
    { name: 'AutoCAD & Revit', icon: <PenTool size={20} /> },
    { name: 'Software Engineering', icon: <Code size={20} /> },
    { name: 'System Architecture', icon: <Cpu size={20} /> },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-mono text-[12px] text-accent uppercase tracking-wider mb-4">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-[24px] font-medium mb-6">Engineering meets Software</h3>
            <div className="space-y-6 text-[15px] text-muted leading-[1.5]">
              <p>
                As a dual-disciplinary professional, I bring a unique perspective to every project. My background in Electrical Engineering ensures that I understand complex systems, safety protocols, and logical structures.
              </p>
              <p>
                Simultaneously, my expertise in Software Engineering allows me to build robust, scalable, and efficient digital solutions. Whether I'm designing a power distribution network for a commercial building or developing a complex backend system, my goal remains the same: creating efficient, elegant, and functional solutions.
              </p>
              <p>
                I specialize in bridging the gap between physical infrastructure and digital systems, making me uniquely positioned for IoT projects, smart grid technologies, and industrial automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-[24px] font-medium mb-6">Core Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-alt border border-card-border hover:border-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <span className="text-[14px] font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-xl bg-card-alt border border-card-border">
              <h4 className="font-mono text-[12px] mb-2 text-accent uppercase tracking-wider">Highlight</h4>
              <p className="text-[13px] text-muted leading-[1.5]">
                Extensive experience in both residential and commercial electrical installations, ensuring compliance with NEC standards while optimizing for energy efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
