import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../hooks/useMousePosition';

export default function CustomCursor() {
    const { x, y } = useMousePosition();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mouseover', handleMouseOver);
        return () => window.removeEventListener('mouseover', handleMouseOver);
    }, []);

    // Hide on mobile or touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-purple pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                animate={{
                    x: x - 16,
                    y: y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: x === 0 && y === 0 ? 0 : 1, // hide initially
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-blue pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: x - 4,
                    y: y - 4,
                    scale: isHovering ? 0 : 1,
                    opacity: x === 0 && y === 0 ? 0 : 1,
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
            />
        </>
    );
}
