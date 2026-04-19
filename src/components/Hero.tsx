"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment } from '@react-three/drei';

// --- Components remain high-performance as before ---
function AnimatedShape() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 120, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0.2}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  );
}

function CountUp({ target, duration = 2, suffix = "" }: { target: number, duration?: number, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (isInView) animate(motionValue, target, { duration: duration, ease: "circOut" });
  }, [isInView, target, motionValue, duration]);
  useEffect(() => springValue.on("change", (latest) => setDisplay(Math.floor(latest).toLocaleString())), [springValue]);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Hero() {
  const infinityFloat = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const pulseGlow = {
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.02, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  const textParagraph = "We design, develop, and launch apps, websites, and AI solutions for startups and businesses.";

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-28 pb-16">

      {/* --- VIDEO BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-60 scale-105" // Slight scale to hide edges
        >
          {/* Use the public path relative to your project root */}
          <source src="/assets/images/Firefly A futuristic 3D infinity loop rotating slowly, made of digital particles and glowing lines, .mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)] z-10" />
      </div>

      {/* --- SECONDARY 3D LAYER (Fades in over video) --- */}
      <div className="absolute inset-0 z-[5] pointer-events-none opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedShape />
        </Canvas>
      </div>

      <div className="relative z-20 max-w-5xl px-6 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          variants={pulseGlow}
          animate="animate"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 shadow-2xl"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-300">
            From Idea to Impact
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={infinityFloat}
          animate="animate"
          className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white"
        >
          <span className="block drop-shadow-2xl">Building</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block py-1">
            Ideas
          </span>
          <span className="italic font-serif font-light text-slate-400 text-4xl md:text-6xl block mt-2">
            Into Reality
          </span>
        </motion.h1>

        {/* Paragraph */}
        <p className="max-w-xl text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-10 drop-shadow-md">
          {textParagraph.split(" ").map((word, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-4 bg-emerald-500 text-slate-950 text-sm font-black rounded-xl flex items-center gap-2.5 transition-all"
          >
            Get Started
            <motion.svg animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Stats Grid */}
        <motion.div
          animate={{ boxShadow: ["0px 0px 0px rgba(16,185,129,0)", "0px 10px 40px rgba(16,185,129,0.2)", "0px 0px 0px rgba(16,185,129,0)"] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 border border-white/10 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
          {[
            { label: "Projects Delivered", val: 50, suf: "+" },
            { label: "Own Products", val: 2, suf: "+" },
            { label: "Client Satisfaction", val: 100, suf: "%" }
          ].map((stat, i) => (
            <div key={i} className={`flex flex-col items-center p-10 ${i !== 2 ? 'border-b sm:border-b-0 sm:border-r border-white/10' : ''}`}>
              <span className="text-5xl font-black text-white mb-2">
                <CountUp target={stat.val} suffix={stat.suf} />
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}