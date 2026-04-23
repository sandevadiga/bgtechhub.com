"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring, type Variants, type Easing } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Star, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

// --- Supporting Components ---
function AnimatedShape() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 120, 200]} scale={2.4}>
        <MeshDistortMaterial color="#00C752" attach="material" distort={0.5} speed={3} roughness={0.2} metalness={0.1} />
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
  const router = useRouter();

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/work/booking');
  };

  const infinityFloat: Variants = {
    animate: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as Easing }
    }
  };

  const pulseGlow: Variants = {
    animate: {
      opacity: [0.7, 1, 0.7],
      scale: [1, 1.02, 1],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as Easing }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-28 pb-16">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-60 scale-105">
          <source src="/assets/images/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/80 z-10" />
      </div>

      <div className="absolute inset-0 z-[5] pointer-events-none opacity-20">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <AnimatedShape />
        </Canvas>
      </div>

      <div className="relative z-20 max-w-5xl px-6 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.button
          onClick={handleBooking}
          variants={pulseGlow}
          animate="animate"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-6 shadow-2xl group cursor-pointer"
        >
          <Star size={14} className="text-[#00C752] fill-[#00C752] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">Only 2 open slots available!</span>
          <div className="ml-1 p-1 rounded-full bg-white/10 group-hover:bg-[#00C752] transition-colors">
            <ArrowRight size={10} className="text-white" />
          </div>
        </motion.button>

        <motion.h1 variants={infinityFloat} animate="animate" className="text-5xl md:text-8xl font-black tracking-tight mb-6 leading-[1.1] text-white">
          Building <span className="bg-gradient-to-r from-[#00C752] to-cyan-400 bg-clip-text text-transparent block py-1">Ideas</span>
          <span className="italic font-serif font-light text-slate-400 text-4xl md:text-6xl block mt-2">Into Reality</span>
        </motion.h1>

        <p className="max-w-xl text-base md:text-lg text-slate-300 font-medium mb-10">
          We design, develop, and launch apps, websites, and AI solutions for startups and businesses.
        </p>

        {/* Main Action Area */}
        <div className="flex items-center justify-center w-full mb-16">
          <motion.button
            onClick={handleBooking}
            whileHover="hover"
            initial="initial"
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 pl-2 pr-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all cursor-pointer shadow-2xl"
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-950 z-10">
                <span className="font-black text-xs tracking-tighter">BG</span>
              </div>
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0, x: -10 },
                  hover: { width: "auto", opacity: 1, x: 0 }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="overflow-hidden flex items-center whitespace-nowrap"
              >
                <span className="text-white font-black text-xs mx-2 opacity-50">+</span>
                <div className="bg-[#00C752] text-white h-10 w-10 px-4 rounded-full flex items-center justify-center border border-white/10">
                  <span className="font-black text-[8px] uppercase tracking-[0.2em]">You</span>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-slate-300 group-hover:text-white font-black uppercase text-[10px] tracking-[0.2em] whitespace-nowrap transition-colors">
                Book a 30 min call
              </span>
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#00C752] transition-all border border-white/5 group-hover:border-transparent">
                <ArrowRight size={12} className="text-white group-hover:text-slate-950 transition-colors" />
              </div>
            </div>
          </motion.button>
        </div>

        {/* Stats Grid */}
        <motion.div
          animate={{ boxShadow: ["0px 0px 0px rgba(0,199,82,0)", "0px 10px 40px rgba(0,199,82,0.2)", "0px 0px 0px rgba(0,199,82,0)"] }}
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
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00C752]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}