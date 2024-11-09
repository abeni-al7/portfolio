import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-card/50 backdrop-blur-sm border-t border-neon-blue/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Branding & Copyright */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-neon-blue bg-clip-text text-transparent">
                            Abenezer Alebachew Endalew
                        </h3>
                        <p className="text-gray-400 text-sm">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
                        <nav className="flex flex-col items-center md:items-start space-y-2">
                            <a href="#portfolio" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                                Portfolio
                            </a>
                            <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                                Contact
                            </a>
                            <a
                                href="/Abenezer_Alebachew_CV.pdf"
                                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                                download
                            >
                                Download CV
                            </a>
                        </nav>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Connect</h4>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://github.com/abeni-al7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abenezer-alebachew"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="mailto:abenezeralebachew3@gmail.com"
                                className="text-gray-400 hover:text-neon-blue transition-colors duration-300 group"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm mt-auto">
                            Built with React.js + Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;