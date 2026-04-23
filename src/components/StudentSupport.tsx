"use client";

import React, { cloneElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Lightbulb,
  Code2,
  Rocket,
  GraduationCap,
  X,
  CheckCircle2,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react";

// --- DATA CONFIGURATION ---

const studentFeatures = [
  {
    id: "mentorship",
    title: "1-on-1 Mentorship",
    description: "Guidance from industry experts who have shipped global products.",
    details: "Get matched with a dedicated mentor who reviews your code, helps with architecture decisions, and provides career coaching based on real-world engineering standards.",
    icon: <Users />,
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    outcomes: ["Weekly Code Reviews", "Career Roadmap", "Technical Interview Prep"]
  },
  {
    id: "validation",
    title: "Idea Validation",
    description: "Stress-test your concept to ensure it's market-ready and scalable.",
    details: "Don't just build; build what matters. We use market research frameworks to help you pivot or polish your idea before writing a single line of production code.",
    icon: <Lightbulb />,
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    outcomes: ["User Persona Mapping", "Market Analysis", "MVP Scoping"]
  },
  {
    id: "support",
    title: "Technical Support",
    description: "Full-stack help, from system architecture to final deployment.",
    details: "Deep dive into DevOps, database optimization, and scalable frontend architecture. Our lab provides the tools and environments needed for high-load testing.",
    icon: <Code2 />,
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    outcomes: ["Cloud Deployment", "API Optimization", "CI/CD Setup"]
  },
  {
    id: "portfolio",
    title: "Portfolio Ready",
    description: "Graduate with a live, high-traffic product in your portfolio.",
    details: "Transform your GitHub into a showcase of real utility. We help you launch your product on platforms like Product Hunt and ensure it handles live users.",
    icon: <Rocket />,
    color: "from-purple-500 to-pink-500",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    outcomes: ["Live Product Launch", "Documentation", "Project Case Study"]
  },
];

const faqs = [
  {
    question: "How do I apply for the mentorship program?",
    answer: "Applying is simple. Just fill out our contact form with your project idea or portfolio link, and our team will reach out for an initial technical interview."
  },
  {
    question: "Is this program open to beginners?",
    answer: "We look for a basic understanding of development, but we prioritize problem-solving mindset and passion. Our mentorship scales to your specific skill level."
  },
  {
    question: "What technologies do you focus on?",
    answer: "We specialize in modern stacks like React, Next.js, and Node.js. However, we also support mobile development with React Native and cloud architecture."
  },
  {
    question: "Will I own the IP of the project I build?",
    answer: "Yes. Any application or code you develop during your time in the program remains 100% your intellectual property."
  }
];

// --- MAIN COMPONENT ---

export default function StudentSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeFeature = studentFeatures.find((f) => f.id === selectedId);

  return (
    <section className="relative py-28 bg-[#fdfdfd] overflow-hidden" id="academy">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* CENTERED HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
            <GraduationCap className="text-emerald-600 w-4 h-4" />
            <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-[9px]"> Academy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Empowering the <span className="text-emerald-600 italic">Next Gen</span> of Innovators
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
            Move beyond theory. Build production-grade applications that solve real-world problems and launch your career with confidence.
          </p>
        </motion.div>

        {/* 2-COLUMN GRID CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {studentFeatures.map((feature, idx) => (
            <motion.div
              key={feature.id}
              layoutId={`card-${feature.id}`}
              onClick={() => setSelectedId(feature.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer relative p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-emerald-500/10 transition-all overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                {cloneElement(feature.icon as React.ReactElement<any>, { size: 120 })}
              </div>

              <div className="relative z-10">
                <div className="relative w-16 h-16 mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform`} />
                  <div className={`relative w-full h-full rounded-2xl ${feature.bg} border border-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <div className={`${feature.iconColor}`}>
                      {cloneElement(feature.icon as React.ReactElement<{ className?: string }>, {
                        className: "w-6 h-6 stroke-[2.5px]",
                      })}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">{feature.description}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">
                  <span>Explore Details</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">FAQ Questions</h3>
            <p className="text-slate-50 font-medium text-slate-500">Everything you need to know about our program.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="group border border-slate-100 rounded-3xl bg-white transition-all hover:border-emerald-500/20">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-emerald-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${openFaq === idx ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'}`}>
                    {openFaq === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedId && activeFeature && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className={`w-full md:w-1/3 bg-gradient-to-br ${activeFeature.color} p-12 flex flex-col justify-center items-center text-white text-center`}>
                <div className="p-6 bg-white/20 backdrop-blur-lg rounded-[2rem] mb-6 border border-white/30">
                  {cloneElement(activeFeature.icon as React.ReactElement<any>, { className: "w-12 h-12 stroke-[2px]" })}
                </div>
                <h4 className="font-black uppercase tracking-[0.3em] text-[10px] opacity-90">Academy Module</h4>
              </div>

              <div className="w-full md:w-2/3 p-10 md:p-14 bg-white">
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">{activeFeature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-medium">{activeFeature.details}</p>
                <div className="space-y-3 mb-10">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Outcomes</p>
                  {activeFeature.outcomes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                      <CheckCircle2 size={18} className="text-emerald-500" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedId(null)}
                  className="w-full py-4 bg-slate-950 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:bg-emerald-600 transition-colors"
                >
                  Close Exploration
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}