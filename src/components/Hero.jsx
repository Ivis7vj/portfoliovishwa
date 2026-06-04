import { motion } from 'framer-motion';
import { ChevronDown, Code, Film, Cpu, Palette } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden z-10"
    >
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left space-y-8 z-10"
        >
          {/* Tag badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-gray-400 font-medium">AVAILABLE FOR PROJECTS</span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.p
              variants={itemVariants}
              className="text-accent text-sm md:text-base font-medium tracking-[0.3em] uppercase"
            >
              PREMIUM DEVELOPER PORTFOLIO
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Hi, I'm <span className="text-gradient-gold">Vishwa K</span>
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.h2
            variants={itemVariants}
            className="text-lg md:text-2xl font-light text-gray-300 font-sans tracking-wide leading-relaxed"
          >
            Computer Science and Business Systems Student, <span className="text-white font-medium">Full Stack Developer</span>, AI Enthusiast, and <span className="text-accent">Creative Editor</span>.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-gray-400 font-sans max-w-xl leading-relaxed"
          >
            I build intelligent applications, modern web experiences, and impactful digital solutions while combining technology with creativity.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-accent hover:bg-accent-hover text-black transition-colors duration-300 shadow-[0_8px_20px_-6px_rgba(255,215,0,0.4)]"
            >
              View Projects
            </button>
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/10 hover:border-white/30 text-white bg-white/[0.01] hover:bg-white/[0.05] transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>

        {/* Cinematic Illustration / Widget Elements */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] md:min-h-[450px]">
          {/* Main glowing element (cinematic center) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border border-white/5 bg-gradient-to-tr from-white/[0.01] to-white/[0.03] backdrop-blur-3xl flex items-center justify-center shadow-inner"
          >
            {/* Golden circular outlines */}
            <div className="absolute inset-4 rounded-full border border-white/5" />
            <div className="absolute inset-10 rounded-full border border-accent/10 border-dashed animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-20 rounded-full border border-white/[0.02]" />

            {/* Glowing V.K logo inside center */}
            <span className="font-serif text-6xl font-extrabold tracking-widest text-white/90">
              V<span className="text-accent font-sans">.</span>K
            </span>

            {/* Glowing spot */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-accent/40 blur-sm animate-ping" />
          </motion.div>

          {/* Floating widget 1: Software Engineer */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-4 md:left-8 px-4 py-2.5 rounded-2xl glass-card glass-panel flex items-center space-x-3"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Code size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">DEVELOPER</p>
              <p className="text-xs font-semibold text-white">Full-Stack React/Python</p>
            </div>
          </motion.div>

          {/* Floating widget 2: Creative Editor */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-8 right-4 md:right-8 px-4 py-2.5 rounded-2xl glass-card glass-panel flex items-center space-x-3"
          >
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white">
              <Film size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">VIDEO EDITOR</p>
              <p className="text-xs font-semibold text-white">DaVinci Resolve & Grade</p>
            </div>
          </motion.div>

          {/* Floating widget 3: AI Enthusiast */}
          <motion.div
            animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[60%] -left-6 px-3 py-2 rounded-2xl glass-card glass-panel flex items-center space-x-2"
          >
            <Cpu size={14} className="text-accent" />
            <span className="text-[10px] tracking-wider font-mono text-gray-300">AI Recommendation</span>
          </motion.div>

          {/* Floating widget 4: Designer */}
          <motion.div
            animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-12 right-0 px-3 py-2 rounded-2xl glass-card glass-panel flex items-center space-x-2"
          >
            <Palette size={14} className="text-white" />
            <span className="text-[10px] tracking-wider font-mono text-gray-300">Photoshop Design</span>
          </motion.div>
        </div>
      </div>

      {/* Down arrow indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-10" onClick={() => handleScrollTo('about')}>
        <span className="text-[9px] tracking-[0.3em] uppercase text-gray-500 font-mono">DISCOVER</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-accent"
        >
          <ChevronDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
