import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        {/* Image Profile with Glassmorphism Frame */}
                        <div className="relative w-64 h-80 sm:w-80 sm:h-96 mb-10 sm:mb-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple to-accent-blue rounded-3xl transform rotate-6 opacity-40 shadow-2xl filter blur-sm"></div>
                            <div className="absolute inset-0 glass rounded-3xl p-2 transform -rotate-3 transition-transform hover:rotate-0 duration-700 z-10 bg-white/5 backdrop-blur-md">
                                <img
                                    src="/profile.jpg"
                                    alt={PORTFOLIO_DATA.name}
                                    className="w-full h-full object-cover rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700 shadow-inner"
                                    style={{ objectPosition: "center top" }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="glass p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
                            {/* Decorative blurs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-purple/20 blur-2xl rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-blue/20 blur-2xl rounded-full"></div>

                            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                                <span className="text-3xl text-accent-blue">👋</span>
                                Get to know me!
                            </h3>

                            <p className="text-gray-300 leading-relaxed max-w-xl text-lg font-light mb-8 text-balance">
                                {PORTFOLIO_DATA.about}
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="bg-gradient-to-br from-[#0B0B0B]/80 to-accent-purple/20 p-5 rounded-2xl border border-accent-purple/20 flex flex-col justify-center shadow-inner group transition-all hover:bg-accent-purple/30">
                                    <h4 className="text-accent-purple font-extrabold text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">{PORTFOLIO_DATA.education.cgpa}</h4>
                                    <p className="text-gray-300 text-xs font-mono uppercase tracking-widest">Current CGPA</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#0B0B0B]/80 to-accent-blue/20 p-5 rounded-2xl border border-accent-blue/20 flex flex-col justify-center shadow-inner group transition-all hover:bg-accent-blue/30">
                                    <h4 className="text-accent-blue font-extrabold text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">200+</h4>
                                    <p className="text-gray-300 text-xs font-mono uppercase tracking-widest">DSA Solved</p>
                                </div>
                                <div className="bg-gradient-to-br from-[#0B0B0B]/80 to-[#06B6D4]/20 p-5 rounded-2xl border border-[#06B6D4]/20 flex justify-between items-center shadow-inner group transition-all hover:bg-[#06B6D4]/30 col-span-2">
                                    <div>
                                        <h4 className="text-[#06B6D4] font-bold text-lg mb-1 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse"></span>
                                            AI & Full Stack Specialization
                                        </h4>
                                        <p className="text-gray-300 text-xs font-mono uppercase tracking-widest">MERN + Generative AI Ready</p>
                                    </div>
                                    <div className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_#06b6d4]">🚀</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
