import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { PORTFOLIO_DATA } from "../../constants";

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {PORTFOLIO_DATA.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                        >
                            <Tilt
                                options={{
                                    max: 15,
                                    scale: 1,
                                    speed: 400,
                                    glare: true,
                                    "max-glare": 0.2,
                                }}
                                className="h-full"
                            >
                                <div className="glass p-6 sm:p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                            {project.stack.map(tech => (
                                                <span key={tech} className="text-xs font-mono text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 relative z-10 mt-auto pt-4 border-t border-white/10">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-center gap-2 flex-1 bg-[#1A1A1A] hover:bg-[#252525] text-white py-3 rounded-xl transition-colors font-medium border border-white/5"
                                        >
                                            <FaGithub size={18} />
                                            <span>Code</span>
                                        </a>
                                        {project.links.demo && project.links.demo !== '#' && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-accent-purple to-accent-blue text-white py-3 rounded-xl hover:opacity-90 transition-opacity font-medium"
                                            >
                                                <FaExternalLinkAlt size={16} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
