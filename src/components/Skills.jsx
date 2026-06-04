import { motion } from 'framer-motion';
import { Code, Box, Film, UserCheck, Star } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      accent: true,
      skills: [
        { name: 'Python', level: 'Intermediate' },
        { name: 'React', level: 'Intermediate' },
        { name: 'HTML & CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
      ],
    },
    {
      title: 'Tools & Platform',
      icon: Box,
      accent: false,
      skills: [
        { name: 'GitHub', level: 'Advanced' },
        { name: 'Photoshop', level: 'Advanced' },
        { name: 'Firebase', level: 'Intermediate' },
        { name: 'VS Code', level: 'Advanced' },
      ],
    },
    {
      title: 'Post-Production',
      icon: Film,
      accent: true,
      skills: [
        { name: 'DaVinci Resolve 20', level: 'Expert' },
        { name: 'Premiere Pro', level: 'Advanced' },
        { name: 'DI Colour Grading', level: 'Expert' },
        { name: 'Video Editing', level: 'Expert' },
        { name: 'Graphic Design', level: 'Advanced' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: UserCheck,
      accent: false,
      skills: [
        { name: 'Problem Solving', level: 'Expert' },
        { name: 'Creativity', level: 'Expert' },
        { name: 'Teamwork', level: 'Advanced' },
        { name: 'Communication', level: 'Advanced' },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">EXPERTISE</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Skills & Toolkit</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card glass-panel glass-card-hover rounded-3xl p-6 flex flex-col justify-between border border-white/5 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle top color stripe for accents */}
                {category.accent && (
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                )}

                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                      category.accent 
                        ? 'bg-accent/10 border-accent/25 text-accent group-hover:bg-accent/20' 
                        : 'bg-white/5 border-white/10 text-white group-hover:bg-white/10'
                    }`}>
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-base font-semibold tracking-wide text-white uppercase font-sans">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, sIndex) => (
                      <div key={sIndex} className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-300 font-sans">{skill.name}</span>
                          <span className="text-[9px] tracking-widest font-mono text-gray-500 uppercase">{skill.level}</span>
                        </div>
                        {/* Custom status indicator for aesthetic level */}
                        <div className="w-full h-[2px] bg-white/[0.04] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width: 
                                skill.level === 'Expert' ? '100%' :
                                skill.level === 'Advanced' ? '80%' : '60%'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * sIndex }}
                            className={`h-full ${category.accent ? 'bg-accent/75' : 'bg-white/40'}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Aesthetic footer marker */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center space-x-1.5 text-[9px] font-mono tracking-widest text-gray-500 uppercase">
                  <Star size={10} className={category.accent ? 'text-accent' : 'text-gray-500'} />
                  <span>CORE COMPETENCY</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
