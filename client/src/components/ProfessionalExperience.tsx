import { motion } from 'framer-motion';

const experiences = [
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
      'Django',
      'Django Rest Framework',
      'PostgreSQL',
      'Docker',
      'CPanel',
      'Github Actions',
    ],
  },
];

const ProfessionalExperience = () => {
  return (
    <section id="experience" className="py-20">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-dark-card p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-neon-blue">{exp.company}</h3>
            <p className="text-gray-400">{exp.role}</p>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              {exp.responsibilities?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-white">Tech Stack</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.techStack?.map((tech, idx) => (
                  <span
                    key={idx}
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

export default ProfessionalExperience;