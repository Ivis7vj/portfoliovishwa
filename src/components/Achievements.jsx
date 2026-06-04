import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Terminal, Award, Briefcase, Zap } from 'lucide-react';

function AnimatedCounter({ value, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!inView) return;
    let startTime;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(easeProgress * numericValue);
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const stats = [
    {
      value: '50+',
      label: 'LeetCode Problems',
      icon: Code2,
      description: 'Strengthening logical and algorithmic foundations daily.',
      accent: true,
    },
    {
      value: '700+',
      label: 'SkillRack Problems',
      icon: Terminal,
      description: 'Continuous assessment in daily logic and code challenges.',
      accent: false,
    },
    {
      value: '2+',
      label: 'Major Projects',
      icon: Briefcase,
      description: 'Full-stack applications tackling real-world requirements.',
      accent: true,
    },
    {
      value: '6+',
      label: 'Certificates',
      icon: Award,
      description: 'Academics, AI prompts, and sustainability credentials.',
      accent: false,
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-white/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/5 relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Header intro */}
            <div className="lg:max-w-xs space-y-4 text-left">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/25 flex items-center justify-center text-accent">
                <Zap size={14} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                Key Metrics
              </h3>
              <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
                A quantitative summary of my academic achievements, coding assessments, and project cycles.
              </p>
            </div>

            {/* Stats grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-left space-y-3"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                      stat.accent 
                        ? 'bg-accent/10 border-accent/20 text-accent' 
                        : 'bg-white/5 border-white/10 text-white'
                    }`}>
                      <IconComponent size={14} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-3xl md:text-4xl font-serif font-extrabold tracking-tight text-white">
                        <AnimatedCounter value={stat.value} />
                      </h4>
                      <p className="text-[10px] tracking-[0.2em] font-mono text-gray-400 uppercase font-semibold">
                        {stat.label}
                      </p>
                    </div>
                    <p className="text-[10px] text-gray-500 font-sans leading-normal">
                      {stat.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
