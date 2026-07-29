import { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../constants";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ type: 'error', message: 'Please fill all fields.' });
            return;
        }
        // Simulate sending
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 text-lg">Have a project in mind or looking for an intern? Let's connect!</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-8"
                    >
                        <div className="glass p-8 rounded-3xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
                            <div className="space-y-6 text-gray-300">
                                <p className="flex flex-col">
                                    <span className="text-accent-purple font-mono text-sm mb-1">Email</span>
                                    <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-lg hover:text-white transition-colors">{PORTFOLIO_DATA.contact.email}</a>
                                </p>
                                <p className="flex flex-col">
                                    <span className="text-accent-blue font-mono text-sm mb-1">Location</span>
                                    <span className="text-lg">{PORTFOLIO_DATA.contact.location}</span>
                                </p>
                                <p className="flex flex-col mt-8">
                                    <span className="text-gray-400 font-mono text-sm mb-3">Socials</span>
                                    <span className="flex gap-4">
                                        <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                                        <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple/50 transition-colors resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            {status && (
                                <p className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                    {status.message}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                <span>Send Message</span>
                                <FaPaperPlane size={14} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
