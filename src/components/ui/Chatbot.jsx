import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa';
import { PORTFOLIO_DATA } from '../../constants';

// Special AI Core Animated Icon
const AICoreIcon = () => (
    <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8">
        {/* Outer Orbit */}
        <div className="absolute inset-0 border border-t-[#06B6D4] border-r-transparent border-b-[#8B5CF6] border-l-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
        {/* Inner Orbit */}
        <div className="absolute inset-1 border border-t-transparent border-r-[#8B5CF6] border-b-transparent border-l-[#06B6D4] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
        {/* Magical Core */}
        <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#ffffff] animate-pulse"></div>
    </div>
);

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            sender: 'bot',
            text: <p>Hi there! I'm <strong>{PORTFOLIO_DATA.name.split(' ')[0]}'s Deep AI</strong>. Want a quick summary of his entire portfolio or details on his skills?</p>
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text = input) => {
        if (!text.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text }]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const response = generateResponse(text.toLowerCase());
            setMessages(prev => [...prev, { sender: 'bot', text: response }]);
            setIsTyping(false);
        }, 1200);
    };

    // Advanced Trained "AI" Brain Logic
    const generateResponse = (query) => {
        // Full Details / Summary
        if (query.includes('summary') || query.includes('everything') || query.includes('all details') || query.includes('who is')) {
            return (
                <div className="flex flex-col gap-2">
                    <p className="border-b border-white/10 pb-1 mb-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Executive Summary</p>
                    <p>🎓 <strong>Education:</strong> {PORTFOLIO_DATA.education.degree} at {PORTFOLIO_DATA.education.university} ({PORTFOLIO_DATA.education.cgpa} CGPA).</p>
                    <p>💻 <strong>Core Skills:</strong> Full Stack (React/Node) & AI (Python/TensorFlow).</p>
                    <p>🏆 <strong>Achievements:</strong> Solved 200+ DSA problems and engineered complex distributed architectures.</p>
                    <p>🚀 <strong>Status:</strong> Actively seeking Software Engineering & AI roles!</p>
                </div>
            );
        }

        // Education
        if (query.includes('education') || query.includes('college') || query.includes('degree') || query.includes('university') || query.includes('cgpa')) {
            return (
                <p>Abhiudaya is pursuing his <strong>{PORTFOLIO_DATA.education.degree}</strong> at <strong>{PORTFOLIO_DATA.education.university}</strong> and maintains a stellar CGPA of <strong>{PORTFOLIO_DATA.education.cgpa}</strong>.</p>
            );
        }

        // Achievements
        if (query.includes('achieve') || query.includes('accomplishment') || query.includes('dsa')) {
            return (
                <ul className="list-disc pl-4 space-y-1">
                    {PORTFOLIO_DATA.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                </ul>
            );
        }

        // Skills
        if (query.includes('skill') || query.includes('tech') || query.includes('stack')) {
            const topSkills = PORTFOLIO_DATA.skills.flatMap(g => g.items.map(i => i.name)).slice(0, 7).join(', ');
            return <p>He dominates modern stacks! His main weapons are <strong>{topSkills}</strong>, alongside deep knowledge in AI, Databases, and Cloud deployments.</p>;
        }

        // Projects
        if (query.includes('project') || query.includes('work') || query.includes('experience')) {
            return (
                <div className="space-y-3">
                    <p>His top structural builds include:</p>
                    {PORTFOLIO_DATA.projects.map((p, i) => (
                        <div key={i} className="bg-black/20 p-2 rounded-lg border border-white/5">
                            <strong className="text-accent-blue">{p.title}:</strong> {p.stack.slice(0, 3).join(', ')}...
                        </div>
                    ))}
                </div>
            );
        }

        // Contact
        if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('reach')) {
            return <p>You can offer him a role instantly at <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-accent-purple font-bold underline">{PORTFOLIO_DATA.contact.email}</a> or via his LinkedIn.</p>;
        }

        if (query.includes('hi') || query.includes('hello')) return <p>Greetings! Ask me for the <strong>summary</strong> of Abhi's profile, his <strong>skills</strong>, or <strong>achievements</strong>.</p>;

        return <p>I'm focused on Abhi's professional portfolio. Try asking for his <strong>"summary"</strong>, <strong>"education details"</strong>, or his <strong>"achievements"</strong>.</p>;
    };

    const suggestions = ["Give me a full summary", "What are his achievements?", "Education details?"];

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="w-[320px] sm:w-[380px] h-[520px] mb-4 glass rounded-3xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden bg-[#0A0A0A]/90 backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border-b border-white/10 flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                {/* UNIQUE SPECIAL ICON WRAPPER */}
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center shadow-lg relative border border-white/10">
                                    <AICoreIcon />
                                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Deep AI Engine</h3>
                                    <p className="text-green-400 text-xs flex items-center gap-1 font-mono">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> SYSTEM ACTIVE
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full cursor-pointer">
                                <FaTimes />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 hidden-scrollbar relative flex flex-col">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] rounded-2xl p-3.5 text-sm shadow-md leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-gradient-to-br from-accent-purple to-accent-blue text-white rounded-tr-sm font-medium'
                                            : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                    <div className="bg-white/5 text-accent-blue rounded-2xl rounded-tl-sm p-4 w-16 flex justify-between items-center h-10 border border-white/5">
                                        <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                        <span className="w-1.5 h-1.5 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions */}
                        {messages.length === 1 && !isTyping && (
                            <div className="px-4 pb-3 flex flex-wrap gap-2 shrink-0">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(s)}
                                        className="text-xs text-white/80 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-full px-3 py-1.5 transition-all text-left cursor-pointer shadow-sm"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-3 bg-white/5 border-t border-white/10 shrink-0">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Execute query..."
                                    className="w-full bg-black/60 border border-white/10 text-white text-sm rounded-full pl-5 pr-12 py-3 focus:outline-none focus:border-accent-purple/50 transition-colors shadow-inner"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={!input.trim()}
                                    className="absolute right-1.5 w-[36px] h-[36px] flex items-center justify-center bg-gradient-to-br from-accent-purple to-accent-blue rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all cursor-pointer"
                                >
                                    <FaPaperPlane className="text-xs ml-[-2px]" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer border border-white/10 ${isOpen ? 'bg-black/60' : 'bg-black/60'}`}
            >
                {isOpen ? (
                    <FaTimes className="text-white text-xl" />
                ) : (
                    // Float Button Special Icon
                    <div className="relative w-full h-full flex items-center justify-center hover:rotate-180 transition-transform duration-700">
                        <AICoreIcon />
                    </div>
                )}
            </motion.button>
        </div>
    );
}
