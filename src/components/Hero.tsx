"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring } from 'framer-motion';
import { Star, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

// --- Rose Orbit Animation Component ---
const RoseOrbit = () => {
  const containerRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particlesRef = useRef<SVGCircleElement[]>([]);

  const config = {
    particleCount: 72,
    trailSpan: 0.42,
    durationMs: 5200,
    rotationDurationMs: 28000,
    pulseDurationMs: 4600,
    orbitRadius: 7,
    detailAmplitude: 2.7,
    petalCount: 7,
    curveScale: 3.9,
  };

  useEffect(() => {
    let animationFrame: number;
    const startedAt = performance.now();

    const getPoint = (progress: number, detailScale: number) => {
      const t = progress * Math.PI * 2;
      const k = config.petalCount;
      const r = config.orbitRadius - config.detailAmplitude * detailScale * Math.cos(k * t);
      return {
        x: 50 + Math.cos(t) * r * config.curveScale,
        y: 50 + Math.sin(t) * r * config.curveScale,
      };
    };

    const render = (now: number) => {
      const time = now - startedAt;
      const progress = (time % config.durationMs) / config.durationMs;
      const detailScale = 0.52 + ((Math.sin(((time % config.pulseDurationMs) / config.pulseDurationMs) * Math.PI * 2 + 0.55) + 1) / 2) * 0.48;
      const rotation = -((time % config.rotationDurationMs) / config.rotationDurationMs) * 360;

      if (containerRef.current) containerRef.current.setAttribute('transform', `rotate(${rotation} 50 50)`);

      const steps = 120;
      let d = "";
      for (let i = 0; i <= steps; i++) {
        const p = getPoint(i / steps, detailScale);
        d += `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
      }
      if (pathRef.current) pathRef.current.setAttribute('d', d);

      particlesRef.current.forEach((node, index) => {
        const tailOffset = index / (config.particleCount - 1);
        const pProgress = ((progress - tailOffset * config.trailSpan % 1) + 1) % 1;
        const point = getPoint(pProgress, detailScale);
        const fade = Math.pow(1 - tailOffset, 0.56);

        node.setAttribute('cx', point.x.toFixed(2));
        node.setAttribute('cy', point.y.toFixed(2));
        node.setAttribute('r', (0.9 + fade * 2.7).toFixed(2));
        node.setAttribute('opacity', (0.04 + fade * 0.96).toFixed(3));
      });

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30">
      <svg viewBox="0 0 100 100" className="w-[85vmin] h-[85vmin] overflow-visible text-[#00C752]">
        <g ref={containerRef}>
          <path ref={pathRef} fill="none" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round" opacity="0.1" />
          {Array.from({ length: config.particleCount }).map((_, i) => (
            <circle key={i} ref={(el) => { if (el) particlesRef.current[i] = el; }} fill="currentColor" />
          ))}
        </g>
      </svg>
    </div>
  );
};

// --- Animations for staggered text ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function CountUp({ target, suffix = "" }: { target: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) animate(motionValue, target, { duration: 2, ease: "circOut" });
  }, [isInView, target, motionValue]);

  useEffect(() => springValue.on("change", (latest) => setDisplay(Math.floor(latest).toLocaleString())), [springValue]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white text-slate-900 pt-28 pb-16">

      <RoseOrbit />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center"
      >
        {/* Availability Badge */}
        <motion.button
          variants={fadeInUp}
          onClick={() => router.push('/work/booking')}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm mb-6 group cursor-pointer"
        >
          <Star size={14} className="text-[#00C752] fill-[#00C752]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Only 2 open slots available!</span>
          <div className="ml-1 p-1 rounded-full bg-slate-100 group-hover:bg-[#00C752] transition-colors">
            <ArrowRight size={10} className="text-slate-400 group-hover:text-white" />
          </div>
        </motion.button>

        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
          Building <span className="bg-gradient-to-r from-[#00C752] to-cyan-500 bg-clip-text text-transparent inline-block">Ideas</span>
          <br />
          <span className="italic font-serif font-light text-slate-400 text-4xl md:text-7xl">Into Reality</span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="max-w-xl text-base md:text-lg text-slate-500 font-medium mb-10">
          Transforming concepts into high-performance digital solutions, intuitive web platforms, and AI-powered systems.
        </motion.p>

        {/* Action Button */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center w-full mb-20">
          <motion.button
            onClick={() => router.push('/work/booking')}
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 pl-2 pr-6 py-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-all cursor-pointer shadow-lg shadow-slate-200/50"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white z-10">
                <span className="font-black text-xs tracking-tighter">BG</span>
              </div>
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0, x: -10 },
                  hover: { width: "auto", opacity: 1, x: 0 }
                }}
                className="overflow-hidden flex items-center whitespace-nowrap"
              >
                <span className="text-slate-300 font-black text-xs mx-2">+</span>
                <div className="bg-[#00C752] text-white h-10 w-10 px-4 rounded-full flex items-center justify-center">
                  <span className="font-black text-[8px] uppercase tracking-[0.2em]">You</span>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-600 group-hover:text-slate-900 font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap transition-colors">
                Book a 30 min call
              </span>
              <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#00C752] transition-all border border-slate-100 group-hover:border-transparent">
                <ArrowRight size={12} className="text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div variants={fadeInUp} className="w-full grid grid-cols-1 sm:grid-cols-3 border border-slate-200 bg-white/70 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60">
          {[
            { label: "Projects Delivered", val: 50, suf: "+" },
            { label: "Own Products", val: 2, suf: "+" },
            { label: "Client Satisfaction", val: 100, suf: "%" }
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center p-10 ${i !== 2 ? 'border-b sm:border-b-0 sm:border-r border-slate-100' : ''}`}>
              <span className="text-5xl font-black text-slate-900 mb-2">
                <CountUp target={stat.val} suffix={stat.suf} />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00C752]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}