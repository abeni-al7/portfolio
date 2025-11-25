import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import VERSEWISE from '../assets/My_AI_Spiritual_ChatBOT.png';
import WEDAJ from '../assets/wedaj.png'
import SOCIAL from '../assets/social.png'

const projects = [
  {
    title: 'Wedaj',
    description: 'An AI powered voice companion providing emotional support and spiritual advices in Amharic',
    image: WEDAJ,
    tech: ['Python', 'FastAPI', 'Gemini API', 'Celery'],
    github: 'https://github.com/abeni-al7/spirit_voice_api',
    demo: 'https://wedaj.me/',
  },
  {
    title: 'SocialSpark',
    description: 'An AI content generation platform supporting business owners produce video and image ads for different social platforms with automatic posting',
    image: SOCIAL,
    tech: ['Python', 'FastAPI', 'Gemini API', 'Celery'],
    github: 'https://github.com/abeni-al7/g6-socialspark',
    demo: 'https://socialsparkweb.vercel.app/',
  },
  {
    title: 'VERSEWise',
    description: 'A RAG-based biblical chatbot providing intelligent responses and scripture references which was built in a team as part of a hackaton and being maintained as an open-source project.',
    image: VERSEWISE,
    tech: ['Python', 'Flask', 'RabbitMQ', 'Docker', 'Relational DB'],
    github: 'https://github.com/VerseWise',
    demo: 'https://versewise.io/',
  },
  {
    title: 'Peniel International Church Website',
    description: 'A modern church website with payment integration to accept donations.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    tech: ['React.js', 'Tailwind CSS', 'Chapa', 'Framer Motion'],
    github: 'https://github.com/abeni-al7/peniel_website',
    demo: 'https://penieladdis.org/',
  },
  {
    title: 'Aben Shell',
    description: 'A Linux Command-line Interpreter (Shell) written in C programming language.',
    image: 'https://media.istockphoto.com/id/2177959161/photo/programmer-coding-java-script-html-code-on-notebook-screen-at-home-work-from-home-working.jpg?s=1024x1024&w=is&k=20&c=ApfeH2V66_9XtRd3vmsAkC3MBFZ0A5S2Dzzr-H2NwFU=',
    tech: ['C', 'Linux'],
    github: 'https://github.com/abeni-al7/aben_shell',
    demo: 'https://github.com/abeni-al7/aben_shell',
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="min-h-screen py-20 flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-neon-blue mx-auto rounded-full shadow-[0_0_10px_#00f3ff]"></div>
      </motion.div>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-dark-card/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-500 group h-full flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
              
              {/* Overlay with buttons */}
              <div className="absolute inset-0 bg-dark-bg/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-neon-blue hover:text-dark-bg hover:border-neon-blue transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                  title="View Source Code"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-neon-blue hover:text-dark-bg hover:border-neon-blue transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
                  title="View Demo"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col relative">
              {/* Decorative gradient line */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300 font-heading">
                  {project.title}
                </h3>
                <Code2 className="w-5 h-5 text-gray-500 group-hover:text-neon-blue transition-colors duration-300" />
              </div>
              
              <p className="text-gray-400 mb-6 flex-1 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-neon-blue/5 rounded-full text-xs font-medium text-neon-blue border border-neon-blue/20 group-hover:border-neon-blue/40 group-hover:bg-neon-blue/10 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;