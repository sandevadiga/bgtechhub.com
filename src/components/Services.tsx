"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Types
interface ServiceDetail {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: string[];
  timeline: string;
  priceRange: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "app-dev",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.5" />
        <path strokeLinecap="round" d="M12 18h.01" strokeWidth="2" />
        <path strokeLinecap="round" strokeDasharray="2 4" d="M9 7h6" strokeWidth="1.5" />
      </svg>
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
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
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
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "AI Solutions",
    tagline: "Smart features that give you an unfair advantage.",
    description: "Integrate LLMs and Automation. Custom chatbots and workflow pipelines using cutting-edge AI.",
    features: ["Custom Chatbots", "NLP Processing", "OpenAI & Gemini", "Automated Workflows"],
    process: [], timeline: "3 – 10 weeks", priceRange: "₹30k – ₹3L+",
  },
  {
    id: "mentor-support",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingStatus("loading");

    const formData = new FormData(e.currentTarget);

    // Constructing the payload for your MongoDB API
    const payload = {
      serviceId: activeService?.id,
      serviceTitle: activeService?.title,
      customerName: formData.get("customerName"),
      email: formData.get("email"),
      budgetTier: formData.get("budgetTier"),
      context: formData.get("context"),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setBookingStatus("success");
        setTimeout(() => {
          closeModal();
          setBookingStatus("idle");
        }, 2000);
      } else {
        setBookingStatus("error");
        setTimeout(() => setBookingStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setBookingStatus("error");
      setTimeout(() => setBookingStatus("idle"), 3000);
    }
  };

  const closeModal = () => {
    setActiveService(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="services" className="relative py-24 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100"
          >
            Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Engineering <span className="text-emerald-500 italic">Excellence</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {serviceDetails.map((svc) => (
            <motion.div
              key={svc.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              onClick={() => { setActiveService(svc); document.body.style.overflow = "hidden"; }}
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white p-3.5 mb-8 group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-500 shadow-lg">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{svc.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8 line-clamp-2">{svc.tagline}</p>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-emerald-600">
                View Details <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-10 pt-24 md:pt-32 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 80 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 80 }}
              className="relative w-full max-w-5xl bg-white rounded-[3.5rem] shadow-4xl overflow-hidden flex flex-col md:flex-row min-h-[650px] mb-12"
            >
              {/* Left Branding Column */}
              <div className="w-full md:w-2/5 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full -mr-40 -mt-40" />
                <div className="relative z-10">
                  <button onClick={closeModal} className="mb-12 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <span>✕</span> Close
                  </button>
                  <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 p-5 mb-8 backdrop-blur-sm">
                    <div className="text-emerald-400">{activeService.icon}</div>
                  </div>
                  <h2 className="text-4xl font-black tracking-tighter mb-6">{activeService.title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10">{activeService.description}</p>
                  <div className="space-y-4">
                    {activeService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-12 pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-500 mb-2">Investment Guide</p>
                  <p className="text-3xl font-black text-white tracking-tight">{activeService.priceRange}</p>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="w-full md:w-3/5 p-12 md:p-16 bg-white">
                <div className="max-w-md mx-auto">
                  <h4 className="text-3xl font-black text-slate-900 mb-2">Book This Service</h4>
                  <p className="text-slate-500 text-sm mb-12 font-medium">We'll analyze your requirements and return with a technical proposal within 24 hours.</p>

                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-8">
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                      <input
                        name="customerName" // Name matching payload key
                        type="text"
                        placeholder="e.g. Ravi Kumar"
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Business Email</label>
                      <input
                        name="email" // Name matching payload key
                        type="email"
                        placeholder="you@company.com"
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">
                        Budget Tier
                      </label>
                      <div className="relative">
                        <select
                          name="budgetTier"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none cursor-pointer appearance-none focus:border-emerald-500 focus:bg-white transition-all pr-12"
                        >
                          <option value="">Select budget range</option>
                          <option value="Startup Tier (₹50k - ₹1.5L)">Startup Tier (₹50k - ₹1.5L)</option>
                          <option value="Enterprise Tier (₹1.5L - ₹5L)">Enterprise Tier (₹1.5L - ₹5L)</option>
                          <option value="Custom Build (₹5L+)">Custom Build (₹5L+)</option>
                        </select>

                        {/* Dropdown Icon */}
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Project Context</label>
                      <textarea name="context" rows={4} placeholder="Describe the core features..." className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:bg-white focus:border-emerald-500 outline-none resize-none transition-all" />
                    </div>
                    <button
                      type="submit"
                      disabled={bookingStatus !== "idle"}
                      className={`relative mt-4 w-full py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] transition-all flex items-center justify-center gap-3 overflow-hidden shadow-2xl ${bookingStatus === "success"
                        ? "bg-emerald-600 text-white"
                        : bookingStatus === "error"
                          ? "bg-red-500 text-white"
                          : "bg-slate-900 text-white hover:bg-emerald-500 shadow-emerald-500/10"
                        }`}
                    >
                      {bookingStatus === "loading" && (
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      )}
                      {bookingStatus === "loading" ? "Initializing..." : bookingStatus === "success" ? "Proposal Sent!" : bookingStatus === "error" ? "Try Again" : "Submit Inquiry"}
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