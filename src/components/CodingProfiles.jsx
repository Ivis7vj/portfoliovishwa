import { motion } from 'framer-motion';
import { Code, Terminal, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className, size = 14 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className, size = 14 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CodingProfiles() {
  const profiles = [
    {
      name: 'LeetCode',
      solved: '50+',
      label: 'Problems Solved',
      rank: 'Top 35%',
      description: 'Active problem solver focusing on Arrays, Strings, Searching, and foundational Data Structures and Algorithms.',
      icon: Code,
      accent: true,
      color: '#FFD700',
      link: 'https://leetcode.com/u/vishwa_k/', // Placeholder or user link
    },
    {
      name: 'SkillRack',
      solved: '700+',
      label: 'Problems Solved',
      rank: 'Gold Badge',
      description: 'Consistent solver in daily challenges, code-marathons, and technical assessments covering core logic and logic-building puzzles.',
      icon: Terminal,
      accent: false,
      color: '#FFFFFF',
      link: 'https://www.skillrack.com/',
    }
  ];

  return (
    <section id="coding-profiles" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">ALGORITHMS</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Coding Profiles</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Profiles Cards Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {profiles.map((profile, index) => {
              const IconComponent = profile.icon;
              return (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
                  className="glass-card glass-panel rounded-3xl p-6 flex flex-col justify-between border border-white/5 relative group transition-all duration-300"
                >
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                          profile.accent
                            ? 'bg-accent/10 border-accent/20 text-accent group-hover:bg-accent/25'
                            : 'bg-white/5 border-white/10 text-white group-hover:bg-white/15'
                        }`}>
                          <IconComponent size={16} />
                        </div>
                        <span className="font-semibold text-white tracking-wide text-base">{profile.name}</span>
                      </div>
                      <span className="text-[9px] tracking-widest font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                        {profile.rank}
                      </span>
                    </div>

                    {/* Stats Show */}
                    <div className="my-6">
                      <h4 className={`text-4xl md:text-5xl font-serif font-extrabold tracking-tight ${
                        profile.accent ? 'text-accent' : 'text-white'
                      }`}>
                        {profile.solved}
                      </h4>
                      <p className="text-[10px] tracking-[0.25em] font-mono text-gray-500 uppercase mt-1">
                        {profile.label}
                      </p>
                    </div>

                    <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed mb-6">
                      {profile.description}
                    </p>
                  </div>

                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-xs tracking-wider text-gray-400 hover:text-white pt-4 border-t border-white/5 uppercase transition-colors duration-300 font-sans"
                  >
                    <span>View Profile Dashboard</span>
                    <ExternalLink size={12} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Social / Direct Action Links Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 glass-card glass-panel rounded-3xl p-6 border border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white tracking-wide">Developer Indexes</h3>
              <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed">
                Connect with my primary developer directories, technical repositories, professional background, and code dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-8">
              <a
                href="https://leetcode.com/u/vishwa_k/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.01] hover:bg-accent/5 border border-white/5 hover:border-accent/20 transition-all duration-300 text-xs font-mono tracking-widest text-gray-300 hover:text-white uppercase"
              >
                <div className="flex items-center space-x-2.5">
                  <Code size={14} className="text-accent" />
                  <span>LeetCode Profile</span>
                </div>
                <ExternalLink size={12} className="text-gray-600 group-hover:text-accent" />
              </a>

              <a
                href="https://www.skillrack.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 text-xs font-mono tracking-widest text-gray-300 hover:text-white uppercase"
              >
                <div className="flex items-center space-x-2.5">
                  <Terminal size={14} className="text-white" />
                  <span>SkillRack Profile</span>
                </div>
                <ExternalLink size={12} className="text-gray-600 group-hover:text-white" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.01] hover:bg-accent/5 border border-white/5 hover:border-accent/20 transition-all duration-300 text-xs font-mono tracking-widest text-gray-300 hover:text-white uppercase"
              >
                <div className="flex items-center space-x-2.5">
                  <GithubIcon size={14} className="text-accent" />
                  <span>GitHub Repositories</span>
                </div>
                <ExternalLink size={12} className="text-gray-600 group-hover:text-accent" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.01] hover:bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300 text-xs font-mono tracking-widest text-gray-300 hover:text-white uppercase"
              >
                <div className="flex items-center space-x-2.5">
                  <LinkedinIcon size={14} className="text-white" />
                  <span>LinkedIn Network</span>
                </div>
                <ExternalLink size={12} className="text-gray-600 group-hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
