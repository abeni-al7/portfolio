import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScrollTo } from '../hooks/useScrollTo';
import { Download } from 'lucide-react';
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
    <motion.section
      id="hero"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="text-center z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-8 group"
        >
          <img
            src={Profile}
            alt="Abenezer Alebachew"
            className="rounded-full w-full h-full object-cover border-4 border-neon-blue shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full bg-neon-glow blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-heading bg-gradient-to-r from-white via-neon-blue to-white bg-clip-text text-transparent bg-300% animate-gradient"
        >
          Abenezer Alebachew Endalew
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-8 mb-10"
        >
          <span className="text-xl md:text-3xl text-gray-300 font-light">
            I am a <span className="text-neon-blue font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={() => scrollTo('portfolio')}
            className="w-full sm:w-auto px-8 py-4 bg-neon-blue text-dark-bg rounded-full font-bold hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <a
            href="/Abenezer-Alebachew-Endalew-Software-Engineer.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 bg-dark-card/50 backdrop-blur-sm border border-neon-blue/50 text-white rounded-full font-semibold hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            Download CV
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
