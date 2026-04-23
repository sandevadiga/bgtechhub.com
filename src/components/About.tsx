"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; // Import a close icon

// --- Components remain high-performance as before ---
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
  {
    id: 1,
    title: "Innovation First",
    desc: "Cutting-edge tech that keeps you ahead.",
    details: "We leverage the latest frameworks like Next.js 14, AI integration, and high-performance cloud architectures to ensure your product isn't just modern, but future-proof.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
  },
  {
    id: 2,
    title: "Fast Execution",
    desc: "MVP to launch in record time.",
    details: "Our agile workflow is optimized for speed without sacrificing quality. We focus on core features to get your MVP to market in as little as 4-6 weeks.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: 3,
    title: "Full Support",
    desc: "End-to-end post-launch growth.",
    details: "Building the app is just the beginning. We provide continuous monitoring, feature scaling, and technical mentorship to ensure long-term stability.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
];

export default function About() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Selected Pillar Data
  const activePillar = pillars.find(p => p.id === selectedId);

  const textReveal: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-y-16">

          {/* HEADING SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl"
          >
            <motion.div variants={textReveal} className="inline-block px-3 py-1 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-700">About</span>
            </motion.div>
            <motion.h2 variants={textReveal} className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-slate-900 mb-4">
              Turning Ideas Into <span className="text-emerald-600 italic">Impact</span>
            </motion.h2>
            <motion.p variants={textReveal} className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
              BG THUB is a digital foundry designed to empower startups. We engineer the future of your brand with precision and speed.
            </motion.p>
          </motion.div>

          {/* PILLARS GRID */}
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
                onClick={() => setSelectedId(pillar.id)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg group-hover:bg-emerald-500 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={pillar.icon} />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
                  <span className="mt-4 text-[10px] font-bold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">Click to learn more →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- MODAL WINDOW --- */}
      <AnimatePresence>
        {selectedId && activePillar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Decorative background for modal */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />

              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={activePillar.icon} />
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">{activePillar.title}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-6">{activePillar.desc}</p>

                <div className="w-full h-px bg-slate-100 mb-6" />

                <p className="text-slate-600 leading-relaxed text-sm">
                  {activePillar.details}
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedId(null)}
                  className="mt-8 w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-600 transition-colors"
                >
                  Close Details
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}