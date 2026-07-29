import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { PORTFOLIO_DATA } from '../../constants';

// R3F Component to manage global events and animations
function InteractiveSphere({ allSkills }) {
    const groupRef = useRef();
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [fastMode, setFastMode] = useState(false);
    const { camera } = useThree();

    useEffect(() => {
        const handleWheel = (e) => {
            if (groupRef.current) groupRef.current.rotation.y += e.deltaY * 0.003;
        };
        const handleMouseDown = () => setFastMode(true);
        const handleMouseUp = () => setFastMode(false);

        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        let speed = 0.001;
        if (hoveredIcon) speed = 0.0001; // Deep slow down on hover
        if (fastMode) speed = 0.02; // Accelerate on click

        groupRef.current.rotation.y += speed;
        groupRef.current.rotation.x += speed * 0.4;

        // Cinematic parallax follow
        const targetX = (state.pointer.x * 0.3);
        const targetY = (state.pointer.y * 0.3);

        groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.02;
        groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.02;

        // Gentle organic breathing/floating
        groupRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.002;
    });

    const radius = 3.6; // Massive sphere core
    const iconsData = useMemo(() => {
        return allSkills.map((skill, i) => {
            const phi = Math.acos(1 - 2 * (i + 0.5) / allSkills.length);
            const theta = Math.PI * (1 + Math.sqrt(5)) * i;
            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);
            return { skill, position: [x, y, z] };
        });
    }, [allSkills]);

    return (
        <group ref={groupRef}>
            {/* The Awwwards Premium Wireframe Core */}
            <mesh>
                <icosahedronGeometry args={[radius * 0.85, 3]} />
                <meshStandardMaterial
                    color="#4F46E5" // Deep indigo base
                    wireframe={true}
                    emissive="#3B82F6"
                    emissiveIntensity={1.5}
                    transparent
                    opacity={0.15}
                />
            </mesh>

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={3} color="#8B5CF6" />
            <pointLight position={[-10, 0, -10]} intensity={2.5} color="#06B6D4" />
            <pointLight position={[0, -10, 0]} intensity={2} color="#FFFFFF" />

            {iconsData.map((data, i) => (
                <group key={i} position={data.position}>
                    <Html center zIndexRange={[100, 0]}>
                        <TechNode
                            skill={data.skill}
                            isHovered={hoveredIcon === data.skill.name}
                            onHover={() => setHoveredIcon(data.skill.name)}
                            onBlur={() => setHoveredIcon(null)}
                        />
                    </Html>
                </group>
            ))}
        </group>
    );
}

function TechNode({ skill, isHovered, onHover, onBlur }) {
    return (
        <div
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-out group
            ${isHovered ? 'scale-150 z-50' : 'scale-[0.8] sm:scale-100 z-10 opacity-80 hover:opacity-100'}`}
            onPointerEnter={onHover}
            onPointerLeave={onBlur}
        >
            {/* Pulsing Cinematic Backglow mapped to the native brand color */}
            {isHovered && <div className="absolute inset-0 filter blur-[35px] opacity-80 rounded-full animate-pulse z-0" style={{ backgroundColor: skill.color || '#06B6D4' }} />}

            {/* Luxurious Glass Icon Base */}
            <div className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full glass border flex items-center justify-center p-3 transition-all duration-500 
                ${isHovered
                    ? 'bg-white/10 backdrop-blur-2xl'
                    : 'border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-lg'}`}
                style={{
                    borderColor: isHovered ? `${skill.color || '#06b6d4'}90` : 'rgba(255,255,255,0.1)',
                    boxShadow: isHovered ? `0 0 35px ${skill.color || '#06b6d4'}70` : ''
                }}
            >
                {skill.icon ? (
                    <skill.icon
                        className={`text-2xl sm:text-3xl transition-all duration-500 filter ${isHovered ? 'brightness-125' : 'brightness-90'} drop-shadow-md`}
                        style={{ color: skill.color || '#ffffff' }}
                    />
                ) : (
                    <span className="font-bold transition-colors" style={{ color: skill.color || '#ffffff' }}>{skill.name.substring(0, 3)}</span>
                )}
            </div>

            {/* Framer Motion Tooltip for Premium Display */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute top-[85px] left-1/2 -translate-x-1/2 w-56 p-5 rounded-2xl glass bg-black/80 backdrop-blur-2xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.9)] z-50 pointer-events-none"
                    >
                        {/* Triangular pointer */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[12px] border-b-white/20"></div>
                        <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[11px] border-b-black/80"></div>

                        <h4 className="text-xl font-bold mb-2 tracking-tight" style={{ color: skill.color || '#fff', textShadow: `0 0 12px ${skill.color || '#ffffff'}60` }}>{skill.name}</h4>
                        <span className="text-[10px] text-white/90 font-mono tracking-widest uppercase mb-3 px-2 py-1 inline-block rounded" style={{ backgroundColor: `${skill.color || '#06b6d4'}30`, border: `1px solid ${skill.color || '#06b6d4'}50` }}>
                            {skill.level}
                        </span>
                        <p className="text-xs text-gray-300 leading-relaxed font-light mt-1 w-full text-balance">
                            {skill.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function Skills() {
    const allSkills = useMemo(() => {
        return PORTFOLIO_DATA.skills.flatMap(group => group.items);
    }, []);

    return (
        <section id="skills" className="py-20 relative overflow-hidden hidden-scrollbar h-screen min-h-[900px] flex flex-col justify-center">

            {/* Background ambient radial for depth */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-blue/5 via-transparent to-transparent blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center w-full h-full">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center shrink-0 w-full mb-4"
                >
                    <p className="text-white text-xs sm:text-sm font-mono tracking-[0.4em] uppercase mb-4 opacity-50">TECH STACK</p>
                    <h2 className="text-6xl md:text-[80px] font-extrabold mb-2 font-sans tracking-tighter flex gap-4 justify-center items-center">
                        <span className="text-white">My</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Skills</span>
                    </h2>
                </motion.div>

                {/* 3D R3F WebGL Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="flex-1 w-full h-full relative cursor-grab active:cursor-grabbing"
                >
                    <Suspense fallback={
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-accent-purple/50 font-mono tracking-widest text-sm animate-pulse">
                            <div className="w-12 h-12 border-t-2 border-l-2 border-accent-purple rounded-full animate-spin"></div>
                            [ INITIALIZING QUANTUM ENGINE ]
                        </div>
                    }>
                        <Canvas camera={{ position: [0, 0, 9], fov: 45 }} className="w-full h-full">
                            <InteractiveSphere allSkills={allSkills} />
                        </Canvas>
                    </Suspense>
                </motion.div>
            </div>
        </section>
    );
}
