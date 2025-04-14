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

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <img
            src={Profile}
            alt="Abenezer Alebachew"
            className="rounded-full w-full h-full object-cover border-4 border-neon-blue animate-glow"
          />
          <div className="absolute inset-0 rounded-full bg-neon-glow blur-md -z-10"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent"
        >
          Abenezer Alebachew Endalew
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Software Engineer | FullStack Developer | Django | MERN | Flask
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <button
            onClick={() => scrollTo('portfolio')}
            className="w-full sm:w-auto px-8 py-3 bg-neon-blue text-dark-bg rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300"
          >
            View My Work
          </button>
          <a
            href="/Abenezer-Alebachew-Endalew-Software-Engineer.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 bg-dark-card border-2 border-neon-blue text-neon-blue rounded-full font-semibold hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3 border-2 border-neon-blue text-neon-blue rounded-full font-semibold hover:bg-neon-blue hover:text-dark-bg transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;