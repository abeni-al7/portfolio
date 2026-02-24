import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Echemonic Systems',
    role: 'Software Engineer',
    responsibilities: [
      'Refactored a microservice utilizing Clean Architecture and Domain-Driven Design principles, making the code much more readable and easy to test.',
      'Utilized RabbitMQ to orchestrate service communication and implemented dead letter queues and manual acknowledgement to ensure communication reliability across distributed systems.',
      'Implemented a continuos integration (CI) pipeline for running unit tests and checking code linting and formatting before a merge to the staging branch reducing manual effort in code reviews and testing.',
      'Created and maintained an API documentation using Swagger as a standalone container for easier understanding of API endpoints and how to use them.',
    ],
    techStack: [
      'Python',
      'Flask',
      'RabbitMQ',
      'Swagger',
      'GitHub Actions',
      'Docker',
      'MySQL',
      'Microservices',
    ]
  },
  {
    company: 'Eskalate',
    role: 'Software Engineer',
    responsibilities: [
      'Delivered a production-grade Task Management API with Clean Architecture, secure authentication, and RBAC for scalable enterprise use.',
      'Led a team of 5 backend developers to build the backend of an AI-powered blog platform, enhancing user experience by delivering real-time AI suggestions and content improvements.',
      'Directed a 15-member cross-functional team (web, mobile, and backend) to develop an AI-driven social media content generator and auto-poster, reducing manual effort in creating videos, images, and captions.',
      'Engineered FastAPI + Celery pipelines with LangChain & Gemini, automating media workflows and cutting content turnaround time by 4% through the use of background processes.',
    ],
    techStack: [
      'Go',
      'Gin',
      'Python',
      'FastAPI',
      'Celery',
      'Docker',
      'PostgreSQL',
      'MongoDB',
    ]
  },
  {
    company: 'GumiApps',
    role: 'Backend Software Engineer',
    responsibilities: [
      'Helped build a Saas platform that is aimed to be used by pharmacies',
      'Implemented a user registration and secure authentication system for the Saas',
      'Implemented business management system with permission-based access based on role',
      'Implemented a customer relations management system with gift card feature',
      'Implemented item filtering in the inventory system and utilized Postgres full-text search feature to implement search for the inventory',
    ],
    techStack: [
      'Python',
      'Django',
      'Django Rest Framework',
      'PostgreSQL',
      'Docker',
      'CPanel',
      'Github Actions',
    ],
  },
  {
    company: 'Peniel International Church',
    role: 'Web Developer (Freelance / Contract)',
    responsibilities: [
      'Customized and launched a responsive fundraising website using React.js, Tailwind, and Framer Motion.',
      'Enhanced donor experience with a mobile-friendly interface and integrated Chapa for secure donations from 30+ countries.',
      'Boosted online contributions by 40%, achieving 35% of the fundraising goal within the first month.',
    ],
    techStack: [
      'TypeScript',
      'React.js',
      'Node.js',
      'Framer',
      'TailwindCSS',
      'Chapa (Payment Gateway)',
    ]
  },
];

const ProfessionalExperience = () => {
  return (
    <section id="experience" className="py-28">
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
              Career Path
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tightest text-warm-50 max-w-3xl">
            Where I've
            <br />
            <span className="text-accent italic">made an impact</span>
          </h2>
        </motion.div>

        {/* Experience cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-warm-900/30 border border-warm-800/50 rounded-xl p-6 md:p-8 hover:border-accent/20 hover:bg-warm-900/50 transition-all duration-500">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2.5 bg-accent/10 rounded-lg border border-accent/20">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-warm-50 group-hover:text-accent transition-colors duration-300">
                        {exp.company}
                      </h3>
                      <p className="font-sans text-lg text-warm-400 italic">
                        {exp.role}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-warm-600 tracking-wider">
                    {String(index + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Responsibilities */}
                <div className="ml-0 md:ml-14 space-y-3 mb-6">
                  {exp.responsibilities?.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <ChevronRight className="w-4 h-4 text-accent/40 mt-1 flex-shrink-0 group-hover/item:text-accent transition-colors" />
                      <p className="text-warm-400 text-[15px] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="ml-0 md:ml-14 pt-5 border-t border-warm-800/50">
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-warm-950/80 border border-warm-800/60 rounded-md text-xs font-mono text-warm-400 group-hover:text-accent/80 group-hover:border-accent/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;