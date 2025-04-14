import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import VERSEWISE from '../assets/My_AI_Spiritual_ChatBOT.png';

const projects = [
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
    title: 'Online Learning Platform',
    description: 'A comprehensive e-learning platform with course content upload and download functionality for teachers and students.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    tech: ['Flask', 'Bootstrap', 'Postgres SQL', 'SQLAlchemy'],
    github: 'https://github.com/abeni-al7/Online_learning_platform',
    demo: 'https://youtu.be/DKJSzZnA6ac?si=ldqeN9x5f3oBBp34',
  },
  {
    title: 'TutorConnect Mobile App',
    description: 'A mobile application connecting students with qualified tutors.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    tech: ['Flutter', 'Firebase', 'Dart'],
    github: 'https://github.com/abeni-al7/tutor_connect',
    demo: 'https://youtu.be/V-dnAzBMw_U?si=bcsfPQBmPznxNEs_',
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
    <section id="portfolio" className="min-h-screen py-20 flex flex-col justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-dark-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-neon-glow transition-all duration-300 group h-full flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-dark-bg bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-card rounded-full text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-colors duration-300"
                  title="View Source Code"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-dark-card rounded-full text-neon-blue hover:bg-neon-blue hover:text-dark-bg transition-colors duration-300"
                  title="View Demo"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-neon-blue">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-bg rounded-full text-sm text-neon-blue border border-neon-blue"
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