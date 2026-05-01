"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring, Variants } from 'framer-motion';
import { Star, ArrowRight, TrendingUp, Globe, Zap, Laptop, BarChart3, Clock, Rocket } from "lucide-react";
import { useRouter } from 'next/navigation';

// --- Ticker Data ---
const tickerStats = [
  { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "App Market", value: "$20.89B", suffix: "in 2025" },
  { icon: <Globe className="w-3.5 h-3.5" />, label: "India ranks", value: "#1", suffix: "globally for GenAI" },
  { icon: <Zap className="w-3.5 h-3.5" />, label: "Indian Startups", value: "89%", suffix: "using AI" },
  { icon: <Laptop className="w-3.5 h-3.5" />, label: "Web Dev India", value: "₹10K—₹5L+", suffix: "by complexity" },
  { icon: <BarChart3 className="w-3.5 h-3.5" />, label: "Active Users", value: "800M+", suffix: "and growing" }
];

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
    <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-30 -translate-y-16">
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

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
};

const staggerContainer: Variants = {
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
  const doubleTicker = [...tickerStats, ...tickerStats];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-slate-900 pt-28">
      <RoseOrbit />

      {/* Main Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-20 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center text-center pb-20"
      >
        <motion.button
          variants={fadeInUp}
          onClick={() => router.push('/work/booking')}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-green-200 bg-green-50/80 backdrop-blur-md shadow-sm mb-6 group cursor-pointer"
        >
          <Star size={14} className="text-[#00C752] fill-[#00C752] drop-shadow-[0_0_8px_rgba(0,199,82,0.8)] animate-pulse" />
          {/* INCREASED CONTRAST: text-green-700 to text-emerald-800 */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">Only 2 open slots available!</span>
          <div className="ml-1 p-1 rounded-full bg-white group-hover:bg-[#00C752] transition-colors">
            <ArrowRight size={10} className="text-emerald-600 group-hover:text-white" />
          </div>
        </motion.button>

        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
          Building <span className="bg-gradient-to-r from-[#00C752] to-emerald-700 bg-clip-text text-transparent inline-block">Ideas</span>
          <br />
          {/* INCREASED CONTRAST: slate-400 to slate-600 */}
          <span className="italic font-serif font-light text-slate-600 text-4xl md:text-7xl">Into Reality</span>
        </motion.h1>

        {/* INCREASED CONTRAST: slate-500 to slate-600 */}
        <motion.p variants={fadeInUp} className="max-w-xl text-base md:text-lg text-slate-600 font-medium mb-10">
          Transforming concepts into high-performance digital solutions, intuitive web platforms, and AI-powered systems.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex items-center justify-center w-full mb-20">
          <motion.button
            onClick={() => router.push('/work/booking')}
            aria-label="Book a 30 minute strategy call"
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 pl-2 pr-6 py-2 rounded-full border border-green-200 bg-white hover:bg-green-50 transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
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
                <span className="text-emerald-600 font-black text-xs mx-2">+</span>
                <div className="bg-[#00C752] text-white h-10 w-10 px-4 rounded-full flex items-center justify-center">
                  <span className="font-black text-[8px] uppercase tracking-[0.2em]">You</span>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center gap-3">
              {/* INCREASED CONTRAST: slate-600 to slate-800 */}
              <span className="text-slate-800 group-hover:text-emerald-900 font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap transition-colors">
                Book a 30 min call
              </span>
              <div className="p-2 rounded-full bg-green-50 group-hover:bg-[#00C752] transition-all border border-green-100 group-hover:border-transparent">
                <ArrowRight size={12} className="text-emerald-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 border border-emerald-100 bg-transparent backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-500/10"
        >
          {[
            { label: "Projects Delivered", val: 15, suf: "+", sub: "Websites, apps & AI tools" },
            { label: "Weeks to MVP", val: 6, suf: "+", sub: "Avg. delivery timeline" },
            { label: "Products", val: 3, suf: "+", sub: "Based on project reviews" },
            { label: "Client Satisfaction", val: 100, suf: "%", sub: "Excellence Guaranteed" }
          ].map((stat, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center p-10 sm:p-12 border-emerald-50 transition-all duration-500 hover:bg-emerald-50/50 relative
                ${i % 2 === 0 ? 'border-r' : ''} 
                ${i < 2 ? 'border-b' : ''} 
                md:border-b-0 
                ${i !== 3 ? 'md:border-r' : 'md:border-r-0'}`}
            >
              <span className="text-5xl sm:text-6xl font-black mb-3 bg-gradient-to-br from-[#00C752] to-emerald-800 bg-clip-text text-transparent">
                <CountUp target={stat.val} suffix={stat.suf} />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 mb-1 text-center">
                {stat.label}
              </span>
              <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider text-center group-hover:text-emerald-700 transition-colors duration-300">
                {stat.sub}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* --- REFINED GREEN-ACCENT TICKER --- */}
      <div className="w-full bg-white border-t border-green-50 py-7 overflow-hidden relative z-30">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, ease: "linear", repeat: Infinity }}
        >
          {doubleTicker.map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 px-2 group cursor-default">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 group-hover:bg-[#00C752] group-hover:border-[#00C752] transition-all duration-500 shadow-sm">
                <div className="text-emerald-700 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  {/* INCREASED CONTRAST: emerald-800 instead of 700/50 */}
                  <span className="text-emerald-800 text-[9px] font-black uppercase tracking-[0.15em] leading-none">
                    {item.label}
                  </span>
                  {/* INCREASED CONTRAST: slate-600 instead of 500 */}
                  <span className="text-slate-600 text-[9px] font-medium italic leading-none">
                    {item.suffix}
                  </span>
                </div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-emerald-900 font-black text-base tracking-tight mt-0.5 group-hover:from-[#00C752] group-hover:to-emerald-700 transition-all duration-500">
                  {item.value}
                </span>
              </div>

              <div className="ml-12 w-1.5 h-1.5 rounded-full bg-emerald-100 group-hover:bg-[#00C752] group-hover:shadow-[0_0_8px_#00C752] transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}