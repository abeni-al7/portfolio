import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollTo } from '../hooks/useScrollTo';
import { ArrowDown, MapPin } from 'lucide-react';
import Profile from '../assets/profile_port.jpg';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const scrollTo = useScrollTo();

  const roles = ["Software Engineer", "Backend Engineer", "FullStack Developer", "Python Developer", "Golang Engineer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left content — editorial text */}
          <div className="lg:col-span-7 space-y-5">
            {/* Eyebrow tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="section-divider"></span>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Available for hire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tightest text-warm-50"
            >
              Abenezer Alebachew <span className="text-accent">Endalew</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-10"
            >
              <span className="text-xl md:text-2xl text-warm-400 font-sans italic font-light">
                {displayText}
                <span className="text-accent animate-pulse ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base text-warm-400 max-w-md leading-relaxed font-sans"
            >
              I build resilient backend systems, craft clean APIs, and architect
              distributed services that power real products — from AI companions
              to SaaS platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-warm-500"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-heading tracking-wide">Addis Ababa, Ethiopia</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => scrollTo('portfolio')}
                className="px-7 py-3.5 bg-accent text-warm-950 font-heading font-bold text-sm uppercase tracking-wider rounded-full hover:bg-accent-light hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-400 hover:-translate-y-0.5"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-7 py-3.5 border border-warm-700 text-warm-300 font-heading font-medium text-sm uppercase tracking-wider rounded-full hover:border-accent hover:text-accent transition-all duration-300"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right — Profile image with editorial framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 rounded-2xl -rotate-3"></div>
              <div className="absolute -inset-4 border border-warm-800 rounded-2xl rotate-2"></div>

              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden">
                <img
                  src={Profile}
                  alt="Abenezer Alebachew"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay"></div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 bg-warm-900 border border-warm-700 px-4 py-2 rounded-xl shadow-2xl"
              >
                <span className="font-mono text-xs text-accent">3+ years exp.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollTo('experience')}
          className="flex flex-col items-center gap-2 text-warm-600 hover:text-accent transition-colors group"
        >
          <span className="text-xs font-heading uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
