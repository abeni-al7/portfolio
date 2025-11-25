import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import VERSEWISE from '../assets/My_AI_Spiritual_ChatBOT.png';

const projects = [
  {
    title: 'Wedaj',
    description: 'An AI powered voice companion providing emotional support and spiritual advices in Amharic',
    image: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/6bea24519e30294398cd5a1ef1d9f345?response-content-disposition=inline%3B%20filename%3D%22image_large%22%3B%20filename%2A%3Dutf-8%27%27image_large&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICoGV5Hsroar%2BbcRgtSsRoOic5t9GZgTq8bwmHgXLNSoAiEAsLISNpHAPo2KcDKH0zWv8u4ps4PyDaWSuAAB7zKaKX4qkgUIbBAAGgw3Mzk5MzkxNzM4MTkiDEL%2BUiLcwGPOr92LaCrvBKranFU8L%2BYUZZddMS4ZQ3xLQi%2BiKfQe%2BDITzpwBu6z2ssHwKRxyfZnmJpU7QhjmkoGX65Ob91HBJS0x94DEyb8b%2FrNVAviDmASzkRM6X%2BWkizgaiBp609iauxkM75yftfs5LoDZR9b33VPO0CGf%2F0EvAXLGdqLajcMCQQnZyyU75mR1lfEVfpyKvYu4ZeRu1IIO9A7PYG5%2BJQ86slF%2BlEFfD%2F6TECl0zmCu4nAg6M7Bb94hYa2FBXV1ZJ6asp4KJrzwXzjuh9wMhrC6jYTEVsZduUjlpcnI3Mlw2z8MYisP9Sqd582nYq5KO6%2Fh8CJI0YFfju98%2FBdcBhhmOkEJCi69babW3r23gE8yftNHJs2ZirADnXUgt3Q20tCiLBzf5yz7UW7pgyxeVscmuEdo8smGPGlBPCPfXc%2BcwoPpwPhLRg7rD2K3diaFWinvSZS47eTl7KfOSNmhS0h%2FBC8DPKbffGdgbDPio%2BVXBBCuIJXR0wPVyzpJgaS3LQ10K36L70DUkdzddQLRDgpPdIuphjAK8o94PDx9IxVkrIfc4fo%2FLyXjB%2BHv9su1VWTskRkD%2BWV%2FMxTv1zOm3Y%2FyMGdDziDNue5VY4MnrpuyP9pf8YaKbOsrxYGonmKFLnvw%2FFwZwsb0En8JVijrdz8IRC%2BnUVw%2F%2BawpTu5AE4ScqcC8AbQB5%2BlbKwzBLdmcr5Jdtt%2FgmUkDlyhHh9d15r44wjVSWnQakiZGx9%2BRJkwDDj7RWM878g3%2BcuCPie8dg1l3s26IvZnYC8rfY2zUo%2FOmafgUFzwplW%2F3SF92%2FqAleeE4TEQMeOsd%2FRumWDPcT1X%2Bq8eKMKKYlskGOpkBIZoyNy%2FAcVC7JDt89XmPWUIGwkABj5k%2BCKlfKbIrPVpEofwcjeDnQ%2B7vUJFDKKkLhHkA4qwtVLUV%2FBJKvc5l2n8BFrV7uBAcLGHY9bCGa87D4DbQltIk2lMr9TlFD4y%2F%2B5K17B8Jsb6v%2FRSCXkJuaLSAqKX70tvne5cSkU6nQWnX3KuFWqmcUNR077eGqsw27A0aXKg5mooV&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251125T113210Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW54753DALR%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=dfdcec108c0d71b8f761b5596791e09208c09ef8390b41381f365a8a209db451',
    tech: ['Python', 'FastAPI', 'Gemini API', 'Celery'],
    github: 'https://github.com/abeni-al7/spirit_voice_api',
    demo: 'https://wedaj.me/',
  },
  {
    title: 'SocialSpark',
    description: 'An AI content generation platform supporting business owners produce video and image ads for different social platforms with automatic posting',
    image: 'https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/011fc14f03a3b78cf3cc522c3e047028?response-content-disposition=inline%3B%20filename%3D%22image_large%22%3B%20filename%2A%3Dutf-8%27%27image_large&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG181edGfzwZRFgj1JvgAUxeFxKboe5hWuKf%2BOluSokJAiEAhnYWFSQEGqurASQ78o%2BuOOvlylqy6fgQCzFwLbVHkLUqkgUIbRAAGgw3Mzk5MzkxNzM4MTkiDGMlJAo%2B3A1mvG35nCrvBIs80tOgO807PgraCD3Z6KvJTWuRC6UQWHMDlxNiVMnrKUbybV7WxmhGSCWtg1tjlGJwLht8ghcNlx87gV49ElWETyBSu4RymD7F1TJgu2G0A27jteiRoiBR%2BSK%2B8x%2Fr0%2B8Crg57K%2F2JZZhA4npp%2FFKpgO5odkLVp1ILNUa%2FcZSD74g%2FhND2oQHkqWTSL3YYbrDOhlxH%2BgcOYh%2BgL9%2BItdLgB2NxaA0bYh2B2DnGc10McLCNOmcEWP2IX6OG32jRal%2Flx6NbxScJLg3jdY61I0L2jXRpUL5yaTdnvs9ILFYOgA4l%2BJXyNDZEpuDOHt5RxcgDQWrFPVvnoMK3Qot%2BvNDi6LNAdrbScrARErfjo7DUDJt6Oafo3ZcgUS9jkz4PCP5r%2BuI0g3HSXpE%2BAzT5rKGP%2FT9CZgYJ%2B%2BWCcFPFfpQ0c7dvg4V6W81bgl7EpbxtzTbsVDKtgAsOI0%2Bk6INPE1%2FhEXIf9uepX2F9hyMH7%2FGhO5B8t2d6cgXs0sQOvfQOgZI2YW%2FGe1oEQ5B7fSlw9Q%2BCy3QG0l4%2FJJhRaZ0H3iwAHWRv6jFiMRqebxjHRGzV8RTOUQGbAAvPBl3ksA9F1lymjhMxNRnJ5riHetcp760RdjIYNKiA9qbwbpF734oCzC6Jw2Lp0uPYYS7%2B7Qe%2B%2FBtaxzsQRKoAb9Dr2693f4G9zfRSUQnU%2FUp26yn3VoNzq4vZIHOy7nnk4z2Xgl0mpfB06IZBqFjuve4RWIODgn4Kk%2B%2BUHD9kg50NJF%2B%2BoAsVeSf2ZuM1cJRFhywG0cK9V6sSIOIzDk7UWsIJmU8c4OntHXNJ92u%2Fdk62uYCWk%2FTWMKyolskGOpkBqbJl9K8Ws3jVB1avI%2FZantdzVlzk6Z2pm9Vj0RsnmymWzhKlAy27eQwZIrDK3E9OEl7Ycrw%2BWZS8A2FcvU5WoqOCJ7ZKTrNsCKDQgoihnsWhW0yLtvQ9dF5ZvmFpsHfnUXrL2FwL0Z4zq5tmUuuTh3pO0khIJIHn5MBJNMDDH1cMw2VyBYeYvjnCf1UblCdG1YijRambQqUY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251125T113548Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1799&X-Amz-Credential=ASIA2YR6PYW5WJOO64LS%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=883d9b17471e44e7368033df492d1d9ba9e8bae73ddc576c91fc45602bf19607',
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