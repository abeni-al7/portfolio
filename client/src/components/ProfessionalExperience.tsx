import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Eskalate',
    role: 'Software Engineer Intern',
    responsibilities: [
      'Delivered a production-grade Task Management API with Clean Architecture, secure authentication, and RBAC for scalable enterprise use.',
      'Led a team of 5 backend developers to build the backend of an AI-powered blog platform, enhancing user experience by delivering real-time AI suggestions and content improvements.',
      'Directed a 15-member cross-functional team (web, mobile, and backend) to develop an AI-driven social media content generator and auto-poster, reducing manual effort in creating videos, images, and captions.',
      '•Engineered FastAPI + Celery pipelines with LangChain & Gemini, automating media workflows and cutting content turnaround time by 4% through the use of background processes.',
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
    role: 'Backend Development Intern',
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
    <section id="experience" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue/20 via-neon-blue/50 to-neon-blue/20 transform -translate-x-1/2 hidden md:block"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dark-bg border-2 border-neon-blue rounded-full transform -translate-x-1/2 mt-6 z-10 hidden md:block shadow-[0_0_10px_#00f3ff]"></div>

              {/* Content Card */}
              <div className="flex-1 md:w-1/2">
                <div className="bg-dark-card/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] group">
                  <h3 className="text-2xl font-bold text-neon-blue mb-1">{exp.company}</h3>
                  <p className="text-lg text-white font-medium mb-4">{exp.role}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities?.map((item, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-neon-blue/50 rounded-full flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-bg/50 rounded-full text-xs text-neon-blue border border-neon-blue/30 group-hover:border-neon-blue/70 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Empty space for the other side of timeline */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;