"use client";

import { motion } from "framer-motion";
import React from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Arjun Kapoor",
    role: "Founder, LogiStart",
    initials: "AK",
    gradient: "from-green-500 to-emerald-600",
    text: "BG THUB took our rough idea and turned it into a polished product in just 6 weeks. Their team is incredibly fast, communicative, and genuinely invested in your success."
  },
  {
    name: "Priya Sharma",
    role: "CS Student, NMIT Bangalore",
    initials: "PS",
    gradient: "from-emerald-400 to-green-500",
    text: "As a final year student, I didn't know where to start. BG THUB mentored me through every step and helped me launch my first real app. Couldn't have done it without them."
  },
  {
    name: "Rohit Nair",
    role: "Co-founder, BuildWave",
    initials: "RN",
    gradient: "from-green-600 to-teal-500",
    text: "We needed an AI-powered solution on a tight budget. BG THUB delivered something beyond what we expected — clean, scalable, and exactly on time. Highly recommend."
  }
];

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Glow - Switched to a lighter green tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div {...fadeInUp}>
            <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
              What People <span className="text-green-600 italic">Say.</span>
            </h2>
            <div className="h-1.5 w-16 bg-green-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-green-500/30 shadow-xl shadow-slate-200/50"
            >
              {/* Floating Quote Icon - Lightened for light theme */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-green-500/10 transition-colors">
                <Quote size={40} strokeWidth={3} />
              </div>

              {/* Star Ratings */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-green-500 text-green-500" />
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow relative z-10 italic">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 group-hover:border-green-500/20 transition-colors relative z-10">
                {/* Profile Avatar Box */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center font-black text-white text-sm shadow-md group-hover:scale-110 transition-transform duration-500`}>
                  {item.initials}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-slate-900 leading-none mb-1 group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h5>
                  <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Interaction Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Metrics */}
        <motion.div
          {...fadeInUp}
          className="mt-16 pt-8 border-t border-slate-200 flex justify-center items-center gap-8 opacity-70"
        >
          <div className="text-center">
            <p className="text-2xl font-black text-slate-900">98%</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Client Retention</p>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div className="text-center">
            <p className="text-2xl font-black text-slate-900">4.9/5</p>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}