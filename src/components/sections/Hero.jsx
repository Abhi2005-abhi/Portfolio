import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { PORTFOLIO_DATA } from "../../constants";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Animated Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-32 left-1/2 -ml-48 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-accent-blue font-mono text-lg mb-4 tracking-wide">
                            Hello World, I am
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
                            {PORTFOLIO_DATA.name}
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-4xl font-bold text-gray-300 mb-6 h-20"
                    >
                        <TypeAnimation
                            sequence={[
                                "AI & Full Stack Developer",
                                2000,
                                "Machine Learning Enthusiast",
                                2000,
                                "Creative Problem Solver",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-accent-purple"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                            {PORTFOLIO_DATA.tagline}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:scale-105 transition-transform cursor-pointer w-full sm:w-auto text-center shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                        >
                            View My Work
                        </Link>

                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full glass glass-hover text-white font-medium hover:scale-105 transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 group"
                        >
                            <span>Contact Me</span>
                        </a>

                        <a
                            href="/Abhiudaya_Resume.pdf"
                            download="Abhiudaya_Resume.pdf"
                            className="px-8 py-4 rounded-full glass glass-hover text-white font-medium hover:scale-105 hover:border-accent-blue/50 transition-all cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 group"
                        >
                            <FaFileDownload className="group-hover:text-accent-blue transition-colors" />
                            <span>Download Resume</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 flex items-center justify-center gap-6"
                    >
                        <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <FaGithub size={28} />
                        </a>
                        <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <FaLinkedin size={28} />
                        </a>
                        <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-gray-400 hover:text-white hover:scale-110 transition-all">
                            <FaEnvelope size={28} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
