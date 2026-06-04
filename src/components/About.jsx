import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, Compass } from 'lucide-react';

export default function About() {
  const educationTimeline = [
    {
      institution: 'Sri Eshwar College of Engineering',
      degree: 'B.E Computer Science and Business Systems',
      period: '2024 – 2028',
      scoreType: 'CGPA',
      scoreValue: '7.5',
      description: 'Currently pursuing an engineering degree that bridges advanced computer science engineering with fundamental business system modules.',
      icon: GraduationCap,
      accent: true,
    },
    {
      institution: 'Ramakrishna Matric Higher Secondary School',
      degree: 'Higher Secondary Certificate (HSC)',
      period: 'Graduated',
      scoreType: 'Score',
      scoreValue: '90.8%',
      description: 'Completed secondary education with focused coursework in Mathematics, Physics, and Computer Science.',
      icon: BookOpen,
      accent: false,
    },
    {
      institution: 'Thanthai Roever Matric School',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      period: 'Graduated',
      scoreType: 'Score',
      scoreValue: '68.4%',
      description: 'Acquired core academic foundations during secondary school curriculum.',
      icon: Compass,
      accent: false,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5">
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">BIOGRAPHY</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">About Me</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="p-6 md:p-8 rounded-3xl glass-card glass-panel border border-white/5 space-y-6">
              <h3 className="text-xl font-semibold text-white tracking-wide">
                Bridging Code and Creative Direction
              </h3>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                I am a Computer Science and Business Systems student at Sri Eshwar College of Engineering with a passion for software development, AI-powered applications, and digital creativity.
              </p>
              <p className="text-gray-400 font-sans leading-relaxed text-sm md:text-base">
                I enjoy solving real-world problems through technology and have experience building full-stack applications, recommendation systems, and social impact projects. Alongside development, I work with video editing, color grading, and graphic design.
              </p>

              {/* Highlighting creative-developer combo */}
              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-white/5">
                <div className="space-y-1">
                  <p className="text-accent text-lg font-bold">Full-Stack</p>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">Software Architect</p>
                </div>
                <div className="space-y-1">
                  <p className="text-white text-lg font-bold">DaVinci Resolve</p>
                  <p className="text-xs text-gray-500 font-sans uppercase tracking-wider">Cinematic Editor</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <h3 className="text-lg font-medium tracking-[0.2em] uppercase text-gray-400 font-mono pl-4 border-l border-accent">
              EDUCATION TIMELINE
            </h3>

            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 ml-4">
              {educationTimeline.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="relative group">
                    {/* Bullet marker */}
                    <div className={`absolute -left-[35px] md:-left-[43px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      item.accent 
                        ? 'bg-accent/10 border-accent text-accent shadow-[0_0_12px_rgba(255,215,0,0.2)]' 
                        : 'bg-[#0f0f0f] border-white/10 text-gray-400 group-hover:border-white/30'
                    }`}>
                      <IconComponent size={12} />
                    </div>

                    {/* Timeline card */}
                    <div className={`glass-card glass-panel rounded-2xl p-5 md:p-6 transition-all duration-300 border ${
                      item.accent ? 'border-accent/15' : 'border-white/5'
                    }`}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-white text-base md:text-lg group-hover:text-accent transition-colors duration-300">
                            {item.institution}
                          </h4>
                          <p className="text-xs text-gray-400 font-sans mt-0.5">
                            {item.degree}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] tracking-wider font-mono text-gray-500 px-2 py-0.5 rounded-full bg-white/5">
                            {item.period}
                          </span>
                          <span className={`text-[10px] tracking-widest font-mono font-bold px-2 py-0.5 rounded-full ${
                            item.accent ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-white/10 text-white'
                          }`}>
                            {item.scoreType}: {item.scoreValue}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
