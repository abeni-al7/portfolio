import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MessageCircle, Send, Twitter } from 'lucide-react';

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
      platform: 'X',
      link: 'https://x.com/abeni_al7',
      icon: Twitter,
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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-heading bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
          Let's Connect
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
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
                className="flex flex-col items-center gap-3 p-6 bg-dark-card/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 bg-dark-bg rounded-full group-hover:bg-neon-blue/10 transition-colors">
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-neon-blue transition-colors" />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{contact.platform}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-300"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-dark-card/30 rounded-full border border-gray-800 hover:border-neon-blue/30 transition-colors">
            <Mail className="w-5 h-5 text-neon-blue" />
            <a href="mailto:abenezeralebachew3@gmail.com" className="hover:text-neon-blue transition-colors">
              abenezeralebachew3@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-dark-card/30 rounded-full border border-gray-800 hover:border-neon-blue/30 transition-colors">
            <MessageCircle className="w-5 h-5 text-neon-blue" />
            <a href="tel:+251929341497" className="hover:text-neon-blue transition-colors">
              +251 929 341 497
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 font-light"
        >
          <p className="mb-2 text-lg">Looking forward to creating something amazing together!</p>
          <p className="text-sm opacity-60">Available for freelance projects and full-time opportunities.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;