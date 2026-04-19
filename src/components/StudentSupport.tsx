"use client";

import React, { cloneElement } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Code2,
  Rocket,
  GraduationCap
} from "lucide-react";

const studentFeatures = [
  {
    title: "1-on-1 Mentorship",
    description: "Guidance from industry experts who have shipped global products.",
    icon: <Users />,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Idea Validation",
    description: "Stress-test your concept to ensure it's market-ready and scalable.",
    icon: <Lightbulb />,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "Technical Support",
    description: "Full-stack help, from system architecture to final deployment.",
    icon: <Code2 />,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Portfolio Ready",
    description: "Graduate with a live, high-traffic product in your portfolio.",
    icon: <Rocket />,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600"
  },
];

export default function StudentSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
              <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-[10px]">
                The Academy
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter mb-6 leading-[1.1]">
              Empowering the <br />
              <span className="text-green-600 italic">Next Generation</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
              Move beyond theory. Build production-grade applications that solve real-world problems and launch your career.
            </p>

            <div className="flex items-center gap-4 text-sm font-bold text-slate-800 uppercase tracking-widest">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <GraduationCap className="text-green-600 w-5 h-5" />
              </div>
              <span>Student Focused Program</span>
            </div>
          </motion.div>

          {/* Right Side: Features Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {studentFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-200 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/5 transition-all group"
              >
                <div className="relative w-14 h-14 mb-6">
                  {/* Rotating Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300`} />

                  {/* Icon Container */}
                  <div className={`relative w-full h-full rounded-2xl ${feature.bg} border border-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {/* The Icon Fix: Using direct text color instead of bg-clip-text */}
                    <div className={`${feature.iconColor}`}>
                      {cloneElement(feature.icon as React.ReactElement, {
                        className: `w-6 h-6 stroke-[2.5px]`,
                      })}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}