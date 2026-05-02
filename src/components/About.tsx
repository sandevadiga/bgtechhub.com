"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, animate, useInView, useSpring, useScroll, useTransform, Variants, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Zap, Rocket, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    id: 1,
    title: "Build Your MVP in 6 Weeks",
    desc: "From idea to launch-ready product in just 6 weeks. We specialize in rapid MVP development services for startups that need to validate fast and iterate faster.",
    details: "Our MVP development process uses Next.js, React Native, and AI integration to build scalable products from day one. We focus on core features, lean architecture, and fast deployment — so you hit the market before your competitors.",
    icon: <Zap className="w-5 h-5" />,
    color: {
      bg: "bg-gradient-to-br from-amber-400 to-orange-500",
      shadow: "shadow-amber-200/60",
      accent: "text-amber-600",
    }
  },
  {
    id: 2,
    title: "Founder-Lead Engineering",
    desc: "We've shipped products — RideXe, PROtask, LogiGrowth. As a tech partner for startups in India, we understand what it takes to build, launch, and scale.",
    details: "We don't just write code — we think like founders. Our team brings product strategy, technical architecture, and growth engineering together. That's why startups across Bengaluru and India trust BG THUB as their long-term technology partner.",
    icon: <Rocket className="w-5 h-5" />,
    color: {
      bg: "bg-gradient-to-br from-violet-400 to-purple-600",
      shadow: "shadow-violet-200/60",
      accent: "text-violet-600",
    }
  },
  {
    id: 3,
    title: "Transparent Pricing",
    desc: "Startup-friendly pricing with zero hidden costs. We scope, quote, and deliver — so you always know the cost of development upfront.",
    details: "Whether you need custom development, mobile app development, or AI development services, we provide clear cost breakdowns before we write a single line of code. No surprises, just honest engineering.",
    icon: <ShieldCheck className="w-5 h-5" />,
    color: {
      bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      shadow: "shadow-cyan-200/60",
      accent: "text-cyan-600",
    }
  },
  {
    id: 4,
    title: "Your Long-term Tech Partner",
    desc: "Post-launch growth, monitoring, and scaling. Building the product is just the beginning — we stay with you as your dedicated tech partner.",
    details: "From continuous deployment pipelines to AI-powered analytics and feature scaling, we provide end-to-end support. BG THUB isn't a vendor — we're your embedded engineering team for the long haul.",
    icon: <HeartHandshake className="w-5 h-5" />,
    color: {
      bg: "bg-gradient-to-br from-rose-400 to-pink-600",
      shadow: "shadow-rose-200/60",
      accent: "text-rose-600",
    }
  },
];

export default function About() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const activePillar = pillars.find(p => p.id === selectedId);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#f8fafc] py-20 sm:py-28" id="about">

      {/* --- DECORATIVE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <motion.div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            y: gridY,
            backgroundImage: `radial-gradient(#cbd5e1 0.5px, transparent 0.5px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

        {/* --- CENTERED TOP SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-700">
              MVP, App & AI Development • Bengaluru
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1] text-slate-900 max-w-4xl">
            Websites, Apps &amp; AI Solutions{" "}
            <br />
            <span className='text-emerald-700 italic'>That Scale</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 font-medium max-w-2xl">
            BG THUB builds scalable websites, apps, and AI solutions for startups. Fast MVP delivery. Based in Bengaluru.
          </p>
        </motion.div>

        {/* --- 2-COLUMN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Information Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              BG THUB is a <span className="text-slate-900 font-bold underline decoration-emerald-400 decoration-2">full-service digital product development company in Bengaluru</span>, India&apos;s tech capital. Founded by experienced engineers and product thinkers, we focus on building <span className="text-slate-800 font-semibold">scalable, high-performance solutions</span> that drive real business outcomes.
            </p>

            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              We specialize in end-to-end product development including <span className="text-slate-800 font-semibold">custom website development</span>, <span className="text-slate-800 font-semibold">mobile app development</span>, <span className="text-emerald-700 font-bold">AI solutions</span>, UI/UX design, logo and brand identity design, and data-driven product development. Our expertise also includes <span className="text-slate-800 font-semibold">rapid prototyping, MVP development</span>, and <span className="text-emerald-700 font-bold">digital marketing &amp; SEO</span> — helping businesses grow both technically and digitally.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket className="w-12 h-12 text-emerald-700" />
              </div>
              <p className="text-slate-500 font-medium leading-relaxed relative z-10">
                As a trusted <span className="text-slate-800 font-semibold">tech partner for startups and businesses</span>, we transform ideas into industry-ready products — from concept and design to development, launch, and growth. Our goal is to deliver not just software, but <span className="text-emerald-700 font-black">complete digital solutions that scale</span> with your business.
              </p>
            </div>

            <Link
              href="/work/booking"
              className="inline-flex items-center gap-1.5 mt-2 px-4 py-2.5 bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors shadow-lg shadow-emerald-500/20 w-fit"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/30 border border-emerald-200/50 w-fit">
              <Sparkles className="w-3 h-3 text-emerald-700" />
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-700">
                MVP, App & AI Development • Bengaluru
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedId(pillar.id)}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer p-6 rounded-[2rem] bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-300 transition-all duration-300"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.color.bg} text-white shadow-lg ${pillar.color.shadow}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                  {pillar.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-emerald-700 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- MODAL WINDOW --- */}
      <AnimatePresence>
        {selectedId && activePillar && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] p-8 shadow-2xl z-10 overflow-hidden"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>

              <div className="flex flex-col items-start">
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${activePillar.color.bg} text-white shadow-xl`}>
                  {activePillar.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{activePillar.title}</h3>
                <p className={`${activePillar.color.accent} font-bold text-sm mb-6`}>{activePillar.desc}</p>

                <div className="w-full h-px bg-slate-100 mb-6" />

                <p className="text-slate-600 leading-relaxed text-base">
                  {activePillar.details}
                </p>

                <button
                  onClick={() => setSelectedId(null)}
                  className="mt-8 w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}