import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollTo } from '../hooks/useScrollTo';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', target: 'hero' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'portfolio' },
    { name: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(target);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-warm-950/90 backdrop-blur-xl py-3 border-b border-warm-800/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="cursor-pointer"
          onClick={() => handleNavClick('hero')}
        >
          <span className="text-xl font-heading font-bold tracking-tight text-warm-100">
            Abeni<span className="text-accent">.</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
              onClick={() => handleNavClick(link.target)}
              className="px-4 py-2 text-sm font-heading font-medium text-warm-400 hover:text-accent transition-colors duration-300 relative group tracking-wide uppercase"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-accent transition-all duration-300 group-hover:w-3/4"></span>
            </motion.button>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-4 pl-4 border-l border-warm-800"
          >
            <a
              href="/Abenezer-Alebachew-Endalew-Software-Engineer.pdf"
              download
              className="px-5 py-2 text-sm font-heading font-semibold text-warm-950 bg-accent hover:bg-accent-light rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] tracking-wide uppercase"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-warm-300 hover:text-accent transition-colors p-2"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-warm-900/98 backdrop-blur-2xl border-t border-warm-800/50 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.target)}
                  className="text-left text-warm-300 hover:text-accent font-heading font-medium py-3 px-2 transition-colors border-b border-warm-800/30 last:border-0 uppercase text-sm tracking-wider"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="/Abenezer-Alebachew-Endalew-Software-Engineer.pdf"
                download
                className="mt-4 px-5 py-3 text-sm font-heading font-semibold text-warm-950 bg-accent rounded-full text-center tracking-wide uppercase"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
