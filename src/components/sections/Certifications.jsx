import React from 'react';
import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../../constants';

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#06B6D4]/5 to-[#0B0B0B] z-0 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#3B82F6]">Certifications</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#06B6D4] mx-auto rounded-full shadow-[0_0_15px_#06b6d4]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PORTFOLIO_DATA.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                            whileHover={{ y: -5 }}
                            className="glass p-8 rounded-3xl border border-white/5 hover:border-[#06B6D4]/50 transition-all duration-300 relative group overflow-hidden bg-white/5"
                        >
                            {/* Decorative Glow */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#06B6D4]/10 rounded-full blur-2xl group-hover:bg-[#06B6D4]/20 transition-all duration-500"></div>

                            <FaAward className="text-4xl text-[#06B6D4] mb-5 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md" />

                            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{cert.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 font-medium">{cert.issuer}</p>

                            <div className="flex justify-between items-center mt-auto">
                                <span className="text-xs text-[#06B6D4] bg-[#06B6D4]/10 px-3 py-1.5 rounded-full border border-[#06B6D4]/20 font-mono tracking-wider">
                                    {cert.date.toUpperCase()}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
