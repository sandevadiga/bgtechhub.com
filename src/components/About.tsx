"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring, useScroll, useTransform, Variants } from 'framer-motion';

function CountUp({ target, duration = 2, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) animate(motionValue, target, { duration, ease: "circOut" });
  }, [isInView, target, motionValue, duration]);

  useEffect(() => {
    return springValue.on("change", (latest) => setDisplay(Math.floor(latest).toLocaleString()));
  }, [springValue]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const pillars = [
  { id: 1, title: "Innovation First", desc: "Cutting-edge tech that keeps you ahead.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { id: 2, title: "Fast Execution", desc: "MVP to launch in record time.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { id: 3, title: "Full Support", desc: "End-to-end post-launch growth.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Animation Variants
  const textReveal: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const cardVariant: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28" id="about">

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] opacity-70" />
        <motion.div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            y: gridY,
            backgroundImage: `radial-gradient(#cbd5e1 0.5px, transparent 0.5px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-y-16">

          {/* HEADING SECTION WITH STAGGERED REVEAL */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl"
          >
            <motion.div
              variants={textReveal}
              className="inline-block px-3 py-1 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-700">The Tech Powerhouse</span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h2
                variants={textReveal}
                className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-slate-900"
              >
                Turning Ideas Into <span className="text-emerald-600 italic">Impact</span>
              </motion.h2>
            </div>

            <motion.p
              variants={textReveal}
              className="text-sm md:text-base text-slate-500 font-medium leading-relaxed"
            >
              BG THUB is a digital foundry designed to empower startups. We engineer the future of your brand with precision and speed.
            </motion.p>
          </motion.div>

          {/* STATS BAR WITH POP-IN ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full max-w-xl grid grid-cols-2 border border-slate-200 bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            {[
              { val: 150, lab: "Projects", suf: "+" },
              { val: 98, lab: "Success", suf: "%" }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center py-8 ${i === 0 ? 'border-r border-slate-100' : ''}`}>
                <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-1">
                  <CountUp target={stat.val} suffix={stat.suf} />
                </span>
                <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-emerald-600">{stat.lab}</span>
              </div>
            ))}
          </motion.div>

          {/* PILLARS GRID WITH HOVER EFFECTS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
          >
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-colors duration-300"
              >
                {/* Background Accent on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/50 group-hover:to-white transition-all rounded-2xl -z-10" />

                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg group-hover:bg-emerald-500 group-hover:shadow-emerald-200 transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={pillar.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}