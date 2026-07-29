import React, { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Highly optimized 60fps native canvas starfield & particle engine
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        // Generate deep space universe
        const particles = Array.from({ length: 400 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5 + 0.2, // Tiny specs to medium stars
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            brightness: Math.random(),
            pulseSpeed: Math.random() * 0.02 + 0.005,
            hue: Math.random() > 0.8 ? 220 : 260 // Mostly deep blue, some purple
        }));

        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetMouseX = width / 2;
        let targetMouseY = height / 2;

        const handleMouseMove = (e) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        const render = () => {
            // Very slight trail effect
            ctx.fillStyle = 'rgba(3, 7, 18, 0.2)'; // Tailwind #030712
            ctx.fillRect(0, 0, width, height);

            // Smooth mouse interpolation
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            // Render Cursor Aura/Radial Glow natively on the canvas for supreme performance
            const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 400);
            gradient.addColorStop(0, 'rgba(139, 92, 246, 0.08)'); // Purple glow
            gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.04)'); // Blue aura
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient;
            ctx.globalCompositeOperation = 'screen';
            ctx.fillRect(0, 0, width, height);

            particles.forEach(p => {
                // Drift
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap edges seamlessly
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                // Twinkle
                p.brightness += p.pulseSpeed;
                if (p.brightness > 1 || p.brightness < 0.1) p.pulseSpeed *= -1;

                // Mouse Parallax Repel Logic (gentle push)
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let offsetX = 0;
                let offsetY = 0;
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    offsetX = (dx / dist) * force * 5;
                    offsetY = (dy / dist) * force * 5;
                }

                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${Math.max(0.1, Math.min(1, p.brightness))})`;
                ctx.fill();
            });
            ctx.globalCompositeOperation = 'source-over';

            animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030712] pointer-events-none">

            {/* Native Canvas Handles BG, Stars, and Cursor Ripple accurately at 60fps */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* 1. Immersive Aurora Blobs (CSS optimized via transform scale/translate) */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[60%] rounded-[100%] bg-gradient-to-br from-[#8B5CF6]/20 to-transparent blur-[160px] animate-blob-slow" />
                <div className="absolute top-[10%] right-[-10%] w-[50%] h-[70%] rounded-[100%] bg-gradient-to-bl from-[#3B82F6]/20 to-transparent blur-[180px] animate-blob-slow animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] rounded-[100%] bg-gradient-to-tr from-[#06B6D4]/15 to-transparent blur-[160px] animate-blob-slow animation-delay-4000" />
            </div>

            {/* 2. Layered Premium Noise Filter */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* 3. Deep Geometric Grid (Fades into darkness) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_10%,transparent_100%)] animate-gridMove" />
        </div>
    );
}
