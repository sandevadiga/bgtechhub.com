"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "Arjun Kapoor",
    role: "Startup Founder",
    text: "BG THUB took our rough idea and turned it into a polished product in just 6 weeks. Their team is communicative and genuinely invested in your success."
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Final Year Student",
    text: "As a final year student, I didn't know where to start. BG THUB mentored me through every step and helped me launch my first real app."
  },
  {
    id: 3,
    name: "Rohit Nair",
    role: "Product Manager",
    text: "We needed an AI-powered solution on a tight budget. BG THUB delivered something beyond what we expected — clean, scalable, and exactly on time."
  },
  {
    id: 4,
    name: "Siddharth Malhotra",
    role: "Tech Lead",
    text: "The speed of execution was impressive. They don't just write code; they suggest features that actually improve the user experience."
  },
  {
    id: 5,
    name: "Ananya Iyer",
    role: "UX Designer",
    text: "Collaborating with BG THUB was seamless. They understood our design language and translated it into a pixel-perfect functional application."
  },
];

const getInitials = (name: string) => {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
};

export default function Testimonials() {
  const [items, setItems] = useState(initialReviews);

  const handleNext = () => {
    setItems((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems((prev) => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, -1);
      return [last, ...rest];
    });
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Client <span className="text-green-600">Impact.</span>
            </h2>
            <p className="text-slate-600 font-black tracking-[0.3em] uppercase text-[9px]">
              Continuous rotation of success stories
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-8 z-40 p-4 rounded-full bg-white border border-slate-100 shadow-2xl text-slate-400 hover:text-green-600 transition-all active:scale-90 hidden lg:flex"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Card Viewport */}
          <div className="w-full overflow-hidden px-2">
            <motion.div layout className="flex gap-6 justify-center">
              <AnimatePresence mode="popLayout" initial={false}>
                {items.slice(0, 3).map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -100 }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    className="w-[300px] md:w-[360px] flex-shrink-0 group/card relative flex flex-col bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-emerald-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/5"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="fill-emerald-500 text-emerald-500" />
                        ))}
                      </div>
                      <Quote size={28} className="text-slate-100 group-hover/card:text-emerald-50 transition-colors" fill="currentColor" />
                    </div>

                    <blockquote className="flex-grow">
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold italic">
                        “{item.text}”
                      </p>
                    </blockquote>

                    {/* Profile Section */}
                    <div className="mt-12 flex items-center gap-4">
                      {/* Avatar Container */}
                      <div className="relative w-20 h-20 flex-shrink-0 group/avatar flex items-center justify-center">

                        {/* Arched Name - Larger and bolder */}
                        <div className="absolute inset-x-0 -top-6 h-16 w-full opacity-0 group-hover/avatar:opacity-100 transition-all duration-500 pointer-events-none z-20">
                          <svg viewBox="0 0 120 60" className="w-full h-full">
                            <path
                              id={`curve-large-${item.id}`}
                              d="M 10,50 A 50,50 0 0,1 110,50"
                              fill="transparent"
                            />
                            <text className="text-[13px] font-black fill-emerald-600 uppercase tracking-tighter">
                              <textPath xlinkHref={`#curve-large-${item.id}`} startOffset="50%" textAnchor="middle">
                                {item.name}
                              </textPath>
                            </text>
                          </svg>
                        </div>

                        {/* Initials Circle - Moves UP on hover */}
                        <div
                          className="relative z-10 w-14 h-14 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover/card:bg-emerald-600 group-hover/card:border-emerald-600 transition-all duration-500 shadow-sm group-hover/avatar:-translate-y-3"
                        >
                          <span className="font-black text-base text-emerald-800 group-hover/card:text-white transition-colors duration-500">
                            {getInitials(item.name)}
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-slate-900 font-black text-sm leading-tight truncate">
                          {item.name}
                        </h3>
                        <p className="text-slate-600 font-black text-[9px] uppercase tracking-widest mt-1">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-4 md:-right-8 z-40 p-4 rounded-full bg-white border border-slate-100 shadow-2xl text-slate-400 hover:text-green-600 transition-all active:scale-90 hidden lg:flex"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}