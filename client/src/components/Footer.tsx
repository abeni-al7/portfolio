import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollTo = useScrollTo();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-bg pt-20 pb-10 overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
              Abeni.Codes
            </h3>
            <p className="text-gray-400 text-center md:text-left max-w-xs leading-relaxed">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-semibold text-white font-heading">Quick Links</h4>
            <nav className="flex flex-col items-center md:items-start space-y-2">
              <button onClick={() => scrollTo('hero')} className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Home
              </button>
              <button onClick={() => scrollTo('portfolio')} className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Portfolio
              </button>
              <button onClick={() => scrollTo('experience')} className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Experience
              </button>
              <button onClick={() => scrollTo('contact')} className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Contact
              </button>
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="text-lg font-semibold text-white font-heading">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/abeni-al7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-gray-800 rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abenezer-alebachew"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-card border border-gray-800 rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abenezeralebachew3@gmail.com"
                className="p-3 bg-dark-card border border-gray-800 rounded-full text-gray-400 hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Abenezer Alebachew Endalew. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>using React & Tailwind</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 bg-dark-card border border-neon-blue/30 rounded-full text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 group"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;