import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants";

export default function Timeline() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 sm:ml-6 md:ml-0 md:border-none">
                    {/* Centered Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

                    {PORTFOLIO_DATA.timeline.map((item, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex items-center justify-between mb-12 sm:mb-16 md:mb-24 w-full md:w-[50%] ${isEven ? 'md:ml-0 md:pr-12' : 'md:ml-[50%] md:pl-12'} p-4 md:p-0 pl-10 sm:pl-12`}
                            >
                                {/* Dot */}
                                <div className={`absolute w-6 h-6 rounded-full bg-[#0B0B0B] border-4 border-accent-purple z-10 transform -translate-y-1/2 top-1/2 left-[-11px] sm:left-[-12px] md:left-auto ${isEven ? 'md:-right-3' : 'md:-left-3'}`}>
                                </div>

                                <div className="glass p-6 sm:p-8 rounded-3xl w-full hover:-translate-y-2 transition-transform duration-300">
                                    <span className="text-accent-blue font-mono text-lg mb-2 block">{item.year}</span>
                                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                                        {item.objective}
                                    </h3>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
