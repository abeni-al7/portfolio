import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = useScrollTo();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-warm-950 pt-20 pb-10 overflow-hidden border-t border-warm-800/30">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-heading font-bold text-xl text-warm-100">
              Abeni<span className="text-accent">.</span>
            </h3>
            <p className="text-warm-500 text-center md:text-left max-w-xs leading-relaxed text-sm">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-warm-300">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-start space-y-2">
              <button onClick={() => scrollTo('hero')} className="text-warm-500 hover:text-accent transition-colors duration-300 text-sm">
                Home
              </button>
              <button onClick={() => scrollTo('portfolio')} className="text-warm-500 hover:text-accent transition-colors duration-300 text-sm">
                Projects
              </button>
              <button onClick={() => scrollTo('experience')} className="text-warm-500 hover:text-accent transition-colors duration-300 text-sm">
                Experience
              </button>
              <button onClick={() => scrollTo('contact')} className="text-warm-500 hover:text-accent transition-colors duration-300 text-sm">
                Contact
              </button>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-warm-300">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/abeni-al7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-warm-800 rounded-lg text-warm-500 hover:text-accent hover:border-accent/40 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/abenezer-alebachew"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-warm-800 rounded-lg text-warm-500 hover:text-accent hover:border-accent/40 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:abenezeralebachew3@gmail.com"
                className="p-2.5 border border-warm-800 rounded-lg text-warm-500 hover:text-accent hover:border-accent/40 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-600 text-xs font-mono text-center md:text-left">
            &copy; {currentYear} Abenezer Alebachew Endalew
          </p>

          <p className="text-warm-700 text-xs font-mono">
            Crafted with care &middot; React + Tailwind
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 border border-warm-800 rounded-lg text-warm-500 hover:text-accent hover:border-accent/40 transition-all duration-300 group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;