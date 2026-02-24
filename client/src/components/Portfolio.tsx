import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
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
    featured: true,
  },
  {
    title: 'SocialSpark',
    description: 'An AI content generation platform supporting business owners produce video and image ads for different social platforms with automatic posting',
    image: SOCIAL,
    tech: ['Python', 'FastAPI', 'Gemini API', 'Celery'],
    github: 'https://github.com/abeni-al7/g6-socialspark',
    demo: 'https://socialsparkweb.vercel.app/',
    featured: true,
  },
  {
    title: 'VERSEWise',
    description: 'A RAG-based biblical chatbot providing intelligent responses and scripture references which was built in a team as part of a hackaton and being maintained as an open-source project.',
    image: VERSEWISE,
    tech: ['Python', 'Flask', 'RabbitMQ', 'Docker', 'Relational DB'],
    github: 'https://github.com/VerseWise',
    demo: 'https://versewise.io/',
    featured: true,
  },
  {
    title: 'Peniel International Church Website',
    description: 'A modern church website with payment integration to accept donations.',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    tech: ['React.js', 'Tailwind CSS', 'Chapa', 'Framer Motion'],
    github: 'https://github.com/abeni-al7/peniel_website',
    demo: 'https://penieladdis.org/',
    featured: false,
  },
  {
    title: 'Aben Shell',
    description: 'A Linux Command-line Interpreter (Shell) written in C programming language.',
    image: 'https://media.istockphoto.com/id/2177959161/photo/programmer-coding-java-script-html-code-on-notebook-screen-at-home-work-from-home-working.jpg?s=1024x1024&w=is&k=20&c=ApfeH2V66_9XtRd3vmsAkC3MBFZ0A5S2Dzzr-H2NwFU=',
    tech: ['C', 'Linux'],
    github: 'https://github.com/abeni-al7/aben_shell',
    demo: 'https://github.com/abeni-al7/aben_shell',
    featured: false,
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-divider"></span>
            <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Selected Work
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tightest text-warm-50 max-w-2xl">
            Projects that
            <br />
            <span className="text-accent italic">define my craft</span>
          </h2>
        </motion.div>

        {/* Featured projects — large editorial cards */}
        <div ref={ref} className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Warm overlay on hover */}
                  <div className="absolute inset-0 bg-warm-950/40 group-hover:bg-warm-950/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-950/80 via-transparent to-transparent"></div>
                </div>
                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-xl"></div>
              </div>

              {/* Content */}
              <div className={`space-y-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent/70">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-warm-800"></div>
                </div>

                <h3 className="font-heading font-bold text-3xl md:text-4xl text-warm-50 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-warm-400 text-lg leading-relaxed font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-warm-900/80 border border-warm-800 rounded-md text-xs font-mono text-warm-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-heading font-semibold text-sm uppercase tracking-wider text-accent hover:text-accent-light transition-colors group/link"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-warm-500 hover:text-warm-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-heading text-sm uppercase tracking-wider">Source</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other projects — compact grid */}
        {otherProjects.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-10"
            >
              <h3 className="font-heading font-bold text-xl text-warm-300">
                More Projects
              </h3>
              <div className="h-px flex-1 bg-warm-800"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group bg-warm-900/40 border border-warm-800/60 rounded-xl p-6 hover:border-accent/30 hover:bg-warm-900/60 transition-all duration-400"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-heading font-bold text-xl text-warm-100 group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-warm-600 hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono text-warm-500 bg-warm-950/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;