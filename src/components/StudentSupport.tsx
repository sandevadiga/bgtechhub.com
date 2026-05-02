"use client";

import React, { cloneElement, useState } from "react";
import { useRouter } from "next/navigation";
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
  Minus,
  Sparkles
} from "lucide-react";

// --- DATA CONFIGURATION ---
const studentFeatures = [
  {
    id: "mentorship",
    title: "1-on-1 Mentorship",
    description: "Personalized guidance from senior developers who help you avoid 'tutorial hell'.",
    details: "Get weekly 60-minute deep-dives into your project. We cover system design, architectural patterns, and professional coding standards.",
    icon: <Users />,
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "group-hover:border-blue-200",
    outcomes: ["Personalized Code Reviews", "Weekly text-green-600", "Career Launch Roadmap"]
  },
  {
    id: "validation",
    title: "Idea Validation",
    description: "Stress-test your startup concept before writing a single line of code.",
    details: "We use professional market research frameworks to ensure your MVP solves a real-world problem worth paying for.",
    icon: <Lightbulb />,
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "group-hover:border-amber-200",
    outcomes: ["User Persona Mapping", "Market Feasibility Analysis", "MVP Scoping"]
  },
  {
    id: "support",
    title: "Full Stack Support",
    description: "Enterprise-grade assistance from database schema design to cloud deployment.",
    details: "Deep dive into DevOps, DB optimization, and frontend scaling using React, Next.js, and Node.js best practices.",
    icon: <Code2 />,
    bg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    borderColor: "group-hover:border-indigo-200",
    outcomes: ["Scalable Architecture Design", "API Performance Optimization", "CI/CD Deployment"]
  },
  {
    id: "portfolio",
    title: "Portfolio Ready",
    description: "Launch a production-grade product that makes recruiters stop and stare.",
    details: "Graduate with a live application hosted on your custom domain, featuring professional logging, security, and performance metrics.",
    icon: <Rocket />,
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "group-hover:border-rose-200",
    outcomes: ["Live Production Deployment", "Full IP Ownership", "Verified Case Study"]
  },
];

const faqs = [
  { question: "How do I apply for the mentorship program?", answer: "Fill out our contact form or email hello@bgthub.com. We schedule a 30-minute discovery call to understand your project and goals." },
  { question: "Is this open to complete beginners?", answer: "Yes, with conditions. We recommend self-study resources first; the program works best with basic programming familiarity." },
  { question: "What technologies do you focus on?", answer: "React, Next.js, React Native, Node.js, Python, Firebase, PostgreSQL, and AI APIs (OpenAI, Gemini)." },
  { question: "Will I own the IP of what I build?", answer: "100% yes. Everything you build belongs to you entirely." }
];

export default function StudentAcademy() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeFeature = studentFeatures.find((f) => f.id === selectedId);

  const handleBooking = () => {
    router.push("/work/booking");
  };

  return (
    <section className="relative py-32 bg-[#fafafa] text-slate-900 overflow-hidden" id="academy">
      {/* Hidden SEO Text for Search Crawlers */}
      <div className="sr-only">
        <h1>Software Engineering Mentorship India</h1>
        <p>Build your MVP with senior developer guidance. Student startup incubator and full stack development program for first-time founders in Bengaluru and beyond.</p>
        <h2>Learn React, Next.js, AI Integration, and Cloud Deployment.</h2>
      </div>

      {/* Luxury Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-emerald-100/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8"
          >
            <Sparkles size={14} className="text-emerald-500 fill-emerald-500" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">Student Academy 2026</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Code like a pro, <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent italic">launch like a founder.</span>
          </h2>

          <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed">
            Skip the generic bootcamps. Build a <span className="text-slate-900 font-bold">real-world application</span> with elite guidance that launches your career into the top 1%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: PREMIUM PRICING CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group lg:sticky lg:top-24"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-10 shadow-2xl shadow-slate-200/50">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">The Accelerator</h3>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">₹15k</span>
                    <span className="text-slate-400 font-bold text-lg">/project</span>
                  </div>
                </div>

              </div>

              <div className="space-y-5 mb-12">
                {[
                  "Guided build from Zero to Deploy",
                  "Weekly System Design Syncs",
                  "Async Code Reviews & Support",
                  "Production-Ready Hosting Kit",
                  "Resume & Portfolio Branding",
                  "Lifelong Alumni Network Access"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleBooking}
                className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-200/50 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Book a Call <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: BENTO CURRICULUM & FAQ */}
          <div className="lg:col-span-7 space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {studentFeatures.map((f, idx) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedId(f.id)}
                  className={`group cursor-pointer p-8 bg-white border border-slate-100 rounded-[2.5rem] transition-all hover:shadow-2xl hover:shadow-slate-200/60 ${f.borderColor}`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${f.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                    <div className={`${f.iconColor} transform transition-transform group-hover:rotate-[10deg]`}>
                      {cloneElement(f.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{f.title}</h4>
                  <p className="text-slate-500 text-[13px] font-semibold leading-relaxed line-clamp-3">
                    {f.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* FAQ ACCORDION */}
            <div className="bg-white/40 backdrop-blur-md border border-white rounded-[3rem] p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2 bg-slate-900 rounded-lg text-white">
                  <GraduationCap size={18} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">Curriculum Deep-dive</h4>
              </div>

              <div className="divide-y divide-slate-100">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="group">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left py-6 transition-all"
                    >
                      <span className="text-[15px] font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">{faq.question}</span>
                      <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>
                        {openFaq === idx ? <Minus size={18} className="text-emerald-600" /> : <Plus size={18} className="text-slate-300" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-sm font-medium text-slate-500 leading-relaxed max-w-[90%]">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore More CTA */}
      <div className="flex justify-center mt-16">
        <button
          onClick={() => router.push("/for-students")}
          className="group flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-200/50 active:scale-95"
        >
          Explore More
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* MODAL: FOCUS STATE */}
      <AnimatePresence>
        {selectedId && activeFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-2xl z-20 p-10 md:p-14"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-all"
              >
                <X size={20} />
              </button>

              <div className={`w-16 h-16 rounded-2xl ${activeFeature.bg} flex items-center justify-center mb-8 shadow-inner`}>
                {cloneElement(activeFeature.icon as React.ReactElement<any>, {
                  size: 32,
                  className: activeFeature.iconColor
                })}
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">{activeFeature.title}</h3>
              <p className="text-slate-500 font-semibold text-base mb-10 leading-relaxed">
                {activeFeature.details}
              </p>

              <div className="space-y-3 mb-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Outcomes</span>
                {activeFeature.outcomes.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors group/item">
                    <CheckCircle2 size={18} className={`${activeFeature.iconColor} group-hover/item:scale-110 transition-transform`} />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => { setSelectedId(null); handleBooking(); }}
                className="w-full py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-emerald-600 transition-all shadow-lg active:scale-95"
              >
                Inquire about {activeFeature.title}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}