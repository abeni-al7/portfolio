import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, MessageCircle, Send, Twitter, ArrowUpRight } from 'lucide-react';

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
      handle: '@abeni-al7',
    },
    {
      platform: 'LinkedIn',
      link: 'https://linkedin.com/in/abenezer-alebachew',
      icon: Linkedin,
      handle: 'Abenezer Alebachew',
    },
    {
      platform: 'Telegram',
      link: 'https://t.me/abeni_al7',
      icon: Send,
      handle: '@abeni_al7',
    },
    {
      platform: 'WhatsApp',
      link: 'https://wa.me/251929341497',
      icon: MessageCircle,
      handle: '+251 929 341 497',
    },
    {
      platform: 'X',
      link: 'https://x.com/abeni_al7',
      icon: Twitter,
      handle: '@abeni_al7',
    },
    {
      platform: 'Email',
      link: 'mailto:abenezeralebachew3@gmail.com',
      icon: Mail,
      handle: 'abenezeralebachew3@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="section-divider"></span>
              <span className="font-heading text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Get in Touch
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl md:text-6xl tracking-tightest text-warm-50 leading-[0.95]">
              Let's build
              <br />
              <span className="text-accent italic">something great</span>
            </h2>

            <p className="text-warm-400 text-lg leading-relaxed font-sans max-w-md">
              Available for freelance projects and full-time opportunities.
              I'd love to hear about what you're working on and how I can help.
            </p>

            {/* Direct email CTA */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              href="mailto:abenezeralebachew3@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-warm-950 font-heading font-bold text-sm uppercase tracking-wider rounded-full hover:bg-accent-light hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              Send me an email
            </motion.a>
          </motion.div>

          {/* Right — Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="space-y-3"
          >
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.platform}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                  className="flex items-center justify-between p-4 md:p-5 rounded-xl border border-warm-800/50 bg-warm-900/20 hover:bg-warm-900/50 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-lg bg-warm-800/40 group-hover:bg-accent/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-warm-500 group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <div>
                      <span className="block font-heading font-semibold text-warm-200 text-sm tracking-wide group-hover:text-accent transition-colors">
                        {contact.platform}
                      </span>
                      <span className="block text-warm-500 text-xs font-mono mt-0.5">
                        {contact.handle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-warm-700 group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;