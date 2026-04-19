"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceDetail } from "@/types";

const serviceDetails: ServiceDetail[] = [
  {
    id: "app-dev",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Neon Glow Layer */}
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/40 blur-2xl rounded-full transition-all duration-500 scale-0 group-hover:scale-150" />
        <svg className="relative w-full h-full text-blue-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.5" />
          <path strokeLinecap="round" d="M12 18h.01" strokeWidth="2" />
          <path strokeLinecap="round" strokeDasharray="2 4" d="M9 7h6" strokeWidth="1.5" />
        </svg>
      </div>
    ),
    title: "App Development",
    tagline: "From concept to Play Store — build apps users love.",
    description: "High-quality native and cross-platform mobile applications. Polished, scalable, and performant.",
    features: ["Native Android & iOS", "React Native & Flutter", "UI/UX Prototypes", "Backend API Integration"],
    process: [], timeline: "4 – 12 weeks", priceRange: "₹25k – ₹2L+",
  },
  {
    id: "web-dev",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/40 blur-2xl rounded-full transition-all duration-500 scale-0 group-hover:scale-150" />
        <svg className="relative w-full h-full text-cyan-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </div>
    ),
    title: "Web Engineering",
    tagline: "Beautiful, fast, and responsive websites.",
    description: "Modern, high-performance websites using Next.js. From landing pages to complex SaaS platforms.",
    features: ["Next.js & React", "SEO Optimization", "Responsive UX", "E-commerce Solutions"],
    process: [], timeline: "2 – 8 weeks", priceRange: "₹10k – ₹1.5L+",
  },
  {
    id: "ai-solutions",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/40 blur-2xl rounded-full transition-all duration-500 scale-0 group-hover:scale-150" />
        <svg className="relative w-full h-full text-purple-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      </div>
    ),
    title: "AI Solutions",
    tagline: "Smart features that give you an unfair advantage.",
    description: "Integrate LLMs and Automation. Custom chatbots and workflow pipelines using cutting-edge AI.",
    features: ["Custom Chatbots", "NLP Processing", "OpenAI & Gemini", "Automated Workflows"],
    process: [], timeline: "3 – 10 weeks", priceRange: "₹30k – ₹3L+",
  },
  {
    id: "student-support",
    icon: (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/40 blur-2xl rounded-full transition-all duration-500 scale-0 group-hover:scale-150" />
        <svg className="relative w-full h-full text-emerald-400 group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      </div>
    ),
    title: "Mentor Support",
    tagline: "Turn projects into real-world products.",
    description: "Mentorship for final year projects and hackathons. We help you understand the architecture.",
    features: ["Code Mentorship", "Tech Stack Guidance", "Architecture Review", "Documentation"],
    process: [], timeline: "4 – 16 weeks", priceRange: "₹5k – ₹50k",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const textVariant = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  async function handleBookingSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBookingStatus("loading");
    setTimeout(() => {
      setBookingStatus("success");
      setTimeout(() => {
        setActiveService(null);
        setBookingStatus("idle");
        document.body.style.overflow = "";
      }, 1500);
    }, 1200);
  }

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-[#f8fafc]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={textVariant} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/50 border border-emerald-200">
            <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-700">Expertise</span>
          </motion.div>

          <motion.h2 variants={textVariant} className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">
            Our Core <span className="text-emerald-600 italic">Capabilities</span>
          </motion.h2>

          <motion.p variants={textVariant} className="max-w-xl text-base text-slate-500 font-medium leading-relaxed">
            We engineer high-performance digital solutions tailored for growth and precision.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {serviceDetails.map((svc) => (
            <motion.div
              key={svc.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => {
                setActiveService(svc);
                document.body.style.overflow = "hidden";
              }}
              className="group relative p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Icon Container with Pop Effect */}
              <motion.div
                whileHover={{ scale: 1.2, y: -8, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white p-4 shadow-xl group-hover:bg-emerald-500 transition-all duration-500 ease-out"
              >
                {svc.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3 tracking-tight group-hover:text-emerald-600 transition-colors">
                {svc.title}
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-6">
                {svc.tagline}
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-slate-50">
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-600">View Details</span>
                <div className="h-px flex-1 bg-slate-100" />
                <motion.div
                  className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setActiveService(null); document.body.style.overflow = ""; }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="flex gap-5 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white p-3 shadow-lg">
                      {activeService.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">{activeService.title}</h2>
                      <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest mt-1">{activeService.timeline}</p>
                    </div>
                  </div>
                  <button onClick={() => { setActiveService(null); document.body.style.overflow = ""; }} className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Core Features</h4>
                      <div className="space-y-3">
                        {activeService.features.map((f, i) => (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="flex items-center gap-3 text-slate-600"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span className="text-xs font-semibold">{f}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 mb-1">Pricing Guide</p>
                      <p className="text-emerald-600 font-black text-lg">{activeService.priceRange}</p>
                    </div>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-4 p-8 rounded-3xl bg-slate-50 border border-slate-100">
                    <h4 className="text-sm font-black text-slate-900 mb-2">Request Architecture Call</h4>
                    <input type="text" placeholder="Your Name" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    <input type="email" placeholder="Business Email" required className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all" />
                    <textarea placeholder="Tell us about your project..." rows={3} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-emerald-500/20 outline-none resize-none transition-all" />
                    <button
                      type="submit"
                      disabled={bookingStatus !== "idle"}
                      className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg transition-all ${bookingStatus === "success"
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-900 text-white hover:bg-emerald-600 active:scale-95"
                        }`}
                    >
                      {bookingStatus === "loading" ? "Initializing..." : bookingStatus === "success" ? "Proposal Sent!" : "Submit Inquiry"}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}