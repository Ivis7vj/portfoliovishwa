import { motion } from 'framer-motion';
import { ArrowUpRight, Film, Heart, Tv } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'rollit',
      title: 'ROLLIT',
      category: 'AI Movie Recommendation Platform',
      description: 'An intelligent recommendation engine analyzing a user\'s preferences across genres, mood profiles, thematic structures, and visual elements to discover matching films.',
      features: [
        'Advanced Search & Sync',
        'AI-Based Recommendations',
        'Visual Tone & Mood Analysis',
        'Detailed Genre Matrixing',
        'TMDB API Integrations',
        'Cinematic Interface Design'
      ],
      tech: ['Python', 'React', 'HTML', 'Tailwind CSS'],
      icon: Film,
      badge: 'AI Powered',
      color: '#FFD700',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 'caretails',
      title: 'CareTails',
      category: 'Street Animal Rescue Platform',
      description: 'A mobile utility tailored to assist rescue efforts for injured street animals by providing seamless geo-location coordinates, emergency notifications, and media-rich incident tracking.',
      features: [
        'Instant Crisis Dispatch',
        'Image Upload & Storage',
        'Live Location Coordinates',
        'Broadcast Rescue Alerts',
        'First Aid Guides Integration'
      ],
      tech: ['Flutter', 'Firebase', 'Location Services'],
      icon: Heart,
      badge: 'Social Impact',
      color: '#FFFFFF',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 'seriee',
      title: 'SERIEE',
      category: 'Android Series Review & Tracking App',
      description: 'A Letterboxd-style TV series review and tracking app for Android. Rate episodes, log seasons, track watch history, and review shows with native performance and a beautiful OLED black theme.',
      features: [
        'Diary & Watch Habits Calendar',
        'Detailed Episode Ratings',
        'Custom Artwork & Posters',
        'Ad-Free & Privacy First',
        'TMDB Comprehensive Database',
        'Open Source Architecture'
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android SDK', 'TMDB API'],
      icon: Tv,
      badge: 'Open Source',
      color: '#FFD700',
      demoLink: 'https://seriee.is-great.org/',
      githubLink: 'https://github.com/vishwesh-shetty/letterboard',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      {/* Background gradients */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">PORTFOLIO</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        {/* Project Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-white/5 relative group overflow-hidden"
              >
                {/* Decorative glow backing */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none transition-all duration-500 group-hover:scale-125"
                  style={{ backgroundColor: project.color }}
                />

                <div>
                  {/* Top Badge & Platform Category */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">
                      {project.category}
                    </span>
                    <span className={`text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      project.id === 'rollit' || project.id === 'seriee'
                        ? 'bg-accent/10 text-accent border border-accent/20' 
                        : 'bg-white/10 text-white border border-white/15'
                    }`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white group-hover:text-accent transition-colors duration-300">
                        <IconComponent size={16} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features Bullet List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] tracking-[0.2em] font-mono text-gray-500 uppercase">
                      KEY MODULES & FEATURES
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-2 text-xs text-gray-400 font-sans">
                          <span className="w-1 h-1 rounded-full bg-accent/60" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech Pills & Action Buttons Footer */}
                <div className="space-y-6 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-[10px] tracking-wider font-mono text-gray-400 px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end items-center min-h-[32px]">
                    {project.id === 'seriee' && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-1.5 text-[10px] font-semibold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 bg-accent hover:bg-accent-hover text-black shadow-lg shadow-accent/10"
                      >
                        <span>Launch App</span>
                        <ArrowUpRight size={12} className="text-black" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
