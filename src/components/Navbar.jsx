import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'coding-profiles', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setScrolled(window.scrollY > 20);

      // Section tracker (Scroll spy)
      const scrollPosition = window.scrollY + 150;
      const sections = NAV_LINKS.map(link => document.getElementById(link.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
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
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-4 bg-[#030303]/80 backdrop-blur-md border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="flex items-center space-x-2 text-xl font-serif tracking-wider font-bold text-white group"
          >
            <span>VISHWA</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">K</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`relative text-xs uppercase tracking-widest transition-colors duration-300 font-sans hover:text-white ${
                  activeSection === link.id ? 'text-accent font-medium' : 'text-gray-400'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1px] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Action button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="group relative flex items-center space-x-1.5 text-xs uppercase tracking-widest border border-white/10 hover:border-accent px-4 py-2 rounded-full glass-panel hover:bg-accent/5 transition-all duration-300 text-white"
            >
              <span>Resume</span>
              <ArrowUpRight size={14} className="text-gray-400 group-hover:text-accent transition-colors duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-accent p-1 transition-colors duration-300"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden bg-[#030303]/95 backdrop-blur-lg border-b border-white/5 py-8 px-6 shadow-2xl flex flex-col space-y-6"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                className={`text-sm uppercase tracking-widest text-left font-sans ${
                  activeSection === link.id ? 'text-accent font-semibold' : 'text-gray-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              className="flex items-center justify-between border border-white/10 px-5 py-3 rounded-xl hover:border-accent text-sm uppercase tracking-widest transition-all duration-300 text-white"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={16} className="text-accent" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
