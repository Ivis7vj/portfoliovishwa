import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Code2, Leaf } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'C Programming Training',
      issuer: 'Technical Training Academy',
      date: '2024',
      icon: Code2,
      category: 'Core Programming',
      accent: false,
    },
    {
      title: 'C++ Programming Training',
      issuer: 'Technical Training Academy',
      date: '2024',
      icon: Code2,
      category: 'Core Programming',
      accent: false,
    },
    {
      title: 'Python Programming Beginners Training',
      issuer: 'Technical Training Academy',
      date: '2024',
      icon: Code2,
      category: 'Core Programming',
      accent: true,
    },
    {
      title: 'ChatGPT for Beginners Prompt Engineering',
      issuer: 'OpenAI Developer Group / Academy',
      date: '2025',
      icon: Cpu,
      category: 'Artificial Intelligence',
      accent: true,
    },
    {
      title: 'Generative AI',
      issuer: 'Great Learning',
      date: '2025',
      icon: Award,
      category: 'Artificial Intelligence',
      accent: true,
    },
    {
      title: 'Green Commitment Certificate',
      issuer: 'Environmental Defense / Institutional Council',
      date: '2024',
      icon: Leaf,
      category: 'Sustainability',
      accent: false,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">CREDENTIALS</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Certifications</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card glass-panel glass-card-hover rounded-2xl p-5 md:p-6 flex flex-col justify-between border border-white/5 relative group transition-all duration-300"
              >
                {/* Accent glow on top for AI certificates */}
                {cert.accent && (
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
                )}

                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] tracking-widest font-mono text-gray-500 uppercase px-2 py-0.5 rounded bg-white/5">
                      {cert.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">{cert.date}</span>
                  </div>

                  {/* Title and Icon */}
                  <div className="flex items-start space-x-3.5 pt-2">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors duration-300 ${
                      cert.accent 
                        ? 'bg-accent/5 border-accent/20 text-accent group-hover:bg-accent/10' 
                        : 'bg-white/5 border-white/10 text-gray-400 group-hover:bg-white/10 group-hover:text-white'
                    }`}>
                      <IconComponent size={16} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm md:text-base font-semibold text-white group-hover:text-accent transition-colors duration-300 font-sans leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-400 font-sans">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Badge verification indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-1.5 text-[9px] tracking-widest font-mono text-gray-500 uppercase">
                  <ShieldCheck size={11} className={cert.accent ? 'text-accent' : 'text-gray-500'} />
                  <span>VERIFIED CERTIFICATE</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
