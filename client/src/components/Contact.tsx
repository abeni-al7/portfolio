import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contacts = [
    {
      platform: 'GitHub',
      link: 'https://github.com/abeni-al7',
      icon: Github,
    },
    {
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/abenezer-alebachew',
      icon: Linkedin,
    },
    {
      platform: 'Telegram',
      link: 'https://t.me/abeni_al7',
      icon: Send,
    },
    {
      platform: 'WhatsApp',
      link: 'https://wa.me/251929341497',
      icon: MessageCircle,
    },
    {
      platform: 'Email',
      link: 'mailto:abenezeralebachew3@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
          Let's Talk
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.platform}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center gap-2 p-4 bg-dark-card rounded-xl hover:shadow-lg hover:shadow-neon-glow transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-neon-blue" />
                <span className="text-sm text-gray-400">{contact.platform}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-400"
        >
          <div>
            <p className="font-semibold">Email:</p>
            <a href="mailto:abenezeralebachew3@gmail.com" className="text-neon-blue">
              abenezeralebachew3@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <a href="tel:+251929341497" className="text-neon-blue">
              +251929341497
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400"
        >
          <p className="mb-4">Looking forward to hearing from you!</p>
          <p>Available for freelance projects and full-time opportunities.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;