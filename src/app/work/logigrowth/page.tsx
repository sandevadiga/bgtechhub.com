"use client";
import React, { useEffect, useRef } from 'react';

const CONFIG = {
    particleCount: 84,
    trailSpan: 0.34,
    durationMs: 4600,
    rotationDurationMs: 28000,
    pulseDurationMs: 4200,
    strokeWidth: 3,
    spiralR: 4,
    spiralr: 1,
    spirald: 3,
    spiralScale: 1.8, // Decreased from 2.2
    spiralBreath: 0.3, // Smoother pulsing
};

const COLORS = {
    path: '#10B981',
    particles: '#059669',
    accent: '#059669',
};

export default function UnderConstruction() {
    const pathRef = useRef<SVGPathElement>(null);
    const groupRef = useRef<SVGGElement>(null);
    const particlesRef = useRef<SVGCircleElement[]>([]);

    useEffect(() => {
        const startedAt = performance.now();
        let frameId: number;

        const getPoint = (progress: number, detailScale: number) => {
            const t = progress * Math.PI * 2;
            const d = CONFIG.spirald + detailScale * 0.25;

            const baseX = (CONFIG.spiralR - CONFIG.spiralr) * Math.cos(t) + d * Math.cos(((CONFIG.spiralR - CONFIG.spiralr) / CONFIG.spiralr) * t);
            const baseY = (CONFIG.spiralR - CONFIG.spiralr) * Math.sin(t) - d * Math.sin(((CONFIG.spiralR - CONFIG.spiralr) / CONFIG.spiralr) * t);

            // Reduced scale factor (from 6.5 to 4.5) to shrink the drawing
            const scale = (CONFIG.spiralScale + detailScale * CONFIG.spiralBreath) * 4.5;

            return {
                x: 50 + baseX * scale,
                y: 50 + baseY * scale,
            };
        };

        const render = (now: number) => {
            const time = now - startedAt;
            const progress = (time % CONFIG.durationMs) / CONFIG.durationMs;
            const pulseProgress = (time % CONFIG.pulseDurationMs) / CONFIG.pulseDurationMs;
            const detailScale = 0.52 + ((Math.sin(pulseProgress * Math.PI * 2 + 0.55) + 1) / 2) * 0.48;
            const rotation = -((time % CONFIG.rotationDurationMs) / CONFIG.rotationDurationMs) * 360;

            if (groupRef.current) {
                groupRef.current.setAttribute('transform', `rotate(${rotation} 50 50)`);
            }

            if (pathRef.current) {
                const steps = 180;
                const d = Array.from({ length: steps + 1 }, (_, i) => {
                    const p = getPoint(i / steps, detailScale);
                    return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`;
                }).join(' ');
                pathRef.current.setAttribute('d', d);
            }

            particlesRef.current.forEach((node, index) => {
                if (!node) return;
                const tailOffset = index / (CONFIG.particleCount - 1);
                const pProgress = (((progress - tailOffset * CONFIG.trailSpan) % 1) + 1) % 1;
                const point = getPoint(pProgress, detailScale);
                const fade = Math.pow(1 - tailOffset, 0.56);

                node.setAttribute('cx', point.x.toFixed(2));
                node.setAttribute('cy', point.y.toFixed(2));
                node.setAttribute('r', (1.0 + fade * 2.0).toFixed(2));
                node.setAttribute('opacity', (0.5 + fade * 0.5).toFixed(3));
            });

            frameId = requestAnimationFrame(render);
        };

        frameId = requestAnimationFrame(render);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-white px-6">

            {/* SHRUNK SPIRAL BACKGROUND */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <svg
                    viewBox="0 0 100 100"
                    // Changed from 100vw to 60vw/vh for a much tighter fit
                    className="w-[50vw] h-[50vw] max-w-[450px] max-h-[450px] opacity-70"
                    style={{ overflow: 'visible' }}
                >
                    <g ref={groupRef}>
                        <path
                            ref={pathRef}
                            stroke={COLORS.path}
                            fill="none"
                            strokeWidth={CONFIG.strokeWidth}
                            strokeLinecap="round"
                            opacity="0.2"
                        />
                        {Array.from({ length: CONFIG.particleCount }).map((_, i) => (
                            <circle
                                key={i}
                                ref={(el) => { if (el) particlesRef.current[i] = el; }}
                                fill={COLORS.particles}
                            />
                        ))}
                    </g>
                </svg>
                {/* Radial Gradient for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_75%)]" />
            </div>

            {/* CONTENT LAYER */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <div className="mb-6 px-4 py-1.5 rounded-full border border-emerald-100 bg-white/90 backdrop-blur-sm shadow-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-emerald-700">
                        Under Construction
                    </span>
                </div>

                <div className="mb-4">
                    <p className="text-gray-400 text-[11px] font-bold tracking-[0.5em] uppercase mb-3">
                        Logigrowth
                    </p>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                        We are creating <br />
                        <span className="text-green-600 italic">something amazing!!</span>
                    </h1>
                </div>

                <p className="text-gray-500 text-sm md:text-base max-w-sm mx-auto leading-relaxed mb-10 font-medium">
                    Our platform is evolving. We’re currently building a premium experience for you.
                </p>

                <button className="bg-gray-950 text-white px-12 py-4 rounded-full text-xs font-bold transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-95">
                    Notify Me
                </button>
            </div>

            <footer className="absolute bottom-10 w-full text-center z-10">
                <p className="text-gray-300 text-[10px] uppercase tracking-[0.4em] font-semibold">
                    &copy; 2026 Logigrowth
                </p>
            </footer>
        </main>
    );
}