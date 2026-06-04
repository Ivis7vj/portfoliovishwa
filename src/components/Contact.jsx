import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden z-10 border-t border-white/5 bg-[#030303]">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-yellow-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-accent text-xs font-semibold tracking-[0.35em] uppercase">CONNECT</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Contact Me</h2>
          <div className="w-12 h-[1px] bg-accent/60 mx-auto mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="p-8 md:p-12 rounded-3xl glass-card glass-panel border border-white/5 space-y-8 flex flex-col justify-between">
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-semibold text-white tracking-wide">Let's build something exceptional</h3>
                <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-lg mx-auto">
                  I am available for full-stack opportunities, creative post-production work, and collaborative software projects. Feel free to get in touch.
                </p>
              </div>

              {/* Contact info links */}
              <div className="space-y-6 my-10 max-w-sm mx-auto w-full">
                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">EMAIL ME</p>
                    <a href="mailto:vishwakofficial@gmail.com" className="text-sm md:text-base font-semibold text-white hover:text-accent transition-colors duration-300">
                      vishwakofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">CALL ME</p>
                    <a href="tel:+916374127852" className="text-sm md:text-base font-semibold text-white hover:text-accent transition-colors duration-300">
                      +91 63741 27852
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">LOCATION</p>
                    <p className="text-sm md:text-base font-semibold text-white">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-center space-x-6">
                <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">CHANNELS:</span>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent/15 border border-white/10 hover:border-accent/20 flex items-center justify-center text-white hover:text-accent transition-all duration-300"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 flex items-center justify-center text-white transition-all duration-300"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
