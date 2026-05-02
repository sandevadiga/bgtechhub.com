"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetail {
  id: string;
  image: string;
  bgImage: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: string[];
  timeline: string;
  priceRange: string;
  accentColor: string;
  accentSolid: string;
  shadowClass: string;
}

const serviceDetails: ServiceDetail[] = [
  {
    id: "web-dev",
    accentColor: "from-blue-600 to-sky-400",
    accentSolid: "#2563eb",
    shadowClass: "group-hover:shadow-blue-500/30",
    image: "/assets/images/web_dev.jpg",
    bgImage: "/assets/images/bg_web_development.png",
    title: "Web Development",
    tagline: "High-performance, responsive web architectures.",
    description: "Modern, scalable websites using Next.js. From high-converting landing pages to complex SaaS platforms.",
    features: ["Next.js & React", "SEO Optimization", "Responsive UX", "Headless CMS"],
    process: [], timeline: "2 – 8 weeks", priceRange: "₹15k – ₹1.5L+",
  },
  {
    id: "app-dev",
    accentColor: "from-indigo-600 to-purple-500",
    accentSolid: "#4f46e5",
    shadowClass: "group-hover:shadow-indigo-500/30",
    image: "/assets/images/app1_dev.png",
    bgImage: "/assets/images/bg_app_development.png",
    title: "App Development",
    tagline: "Native and cross-platform mobile experiences.",
    description: "We build intuitive mobile apps for iOS and Android that focus on performance and user retention.",
    features: ["React Native & Flutter", "Native Performance", "Store Optimization", "Real-time Sync"],
    process: [], timeline: "6 – 14 weeks", priceRange: "₹30k – ₹2.5L+",
  },
  {
    id: "ai-apps",
    accentColor: "from-teal-500 to-emerald-400",
    accentSolid: "#14b8a6",
    shadowClass: "group-hover:shadow-teal-500/30",
    image: "/assets/images/ai_app.jpg",
    bgImage: "/assets/images/bg_ai_applications.png",
    title: "AI Applications",
    tagline: "Integrate intelligence into your workflows.",
    description: "Leveraging LLMs and Machine Learning to automate complex tasks and provide smart user insights.",
    features: ["Custom Chatbots", "OpenAI/Gemini Integration", "Predictive Analytics", "NLP Pipelines"],
    process: [], timeline: "4 – 12 weeks", priceRange: "₹40k – ₹3L+",
  },
  {
    id: "data-products",
    accentColor: "from-orange-500 to-amber-400",
    accentSolid: "#f97316",
    shadowClass: "group-hover:shadow-orange-500/30",
    image: "/assets/images/data_driven1.jpeg",
    bgImage: "/assets/images/bg_data_products.png",
    title: "Data Driven Products",
    tagline: "Turn your raw data into actionable assets.",
    description: "We build dashboards and analytics engines that help you make decisions based on real-time evidence.",
    features: ["Interactive Dashboards", "Data Visualization", "ETL Pipelines", "Business Intelligence"],
    process: [], timeline: "4 – 10 weeks", priceRange: "₹25k – ₹1.8L",
  },
  {
    id: "ui-ux",
    accentColor: "from-rose-500 to-pink-400",
    accentSolid: "#f43f5e",
    shadowClass: "group-hover:shadow-rose-500/30",
    image: "/assets/images/ui_ux.jpeg",
    bgImage: "/assets/images/bg_ui_ux_design.png",
    title: "UI/UX Design",
    tagline: "User-centric designs that convert.",
    description: "Creating visually stunning and highly functional interfaces focused on the end-user journey.",
    features: ["User Research", "Wireframing", "High-Fidelity Prototypes", "Design Systems"],
    process: [], timeline: "2 – 6 weeks", priceRange: "₹10k – ₹80k",
  },
  {
    id: "logo-design",
    accentColor: "from-amber-600 to-yellow-400",
    accentSolid: "#d97706",
    shadowClass: "group-hover:shadow-amber-500/30",
    image: "/assets/images/logo-designing.png",
    bgImage: "/assets/images/bg_logo_design.png",
    title: "Logo Designing",
    tagline: "Crafting memorable brand identities.",
    description: "Minimalist and impactful logos that define your brand and stand the test of time.",
    features: ["Vector Files", "Brand Guidelines", "Typography Selection", "Social Media Kits"],
    process: [], timeline: "1 – 3 weeks", priceRange: "₹5k – ₹25k",
  },
  {
    id: "mvp-prototyping",
    accentColor: "from-fuchsia-600 to-purple-500",
    accentSolid: "#c026d3",
    shadowClass: "group-hover:shadow-fuchsia-500/30",
    image: "/assets/images/rapid_mvp.png",
    bgImage: "/assets/images/rapid_mvp.png",
    title: "Rapid Prototyping & MVPs",
    tagline: "Go from idea to market in record time.",
    description: "Validation-first development to help startups launch their Minimum Viable Product quickly.",
    features: ["Lean Development", "Core Feature Focus", "Speed-to-Market", "Scalable Foundations"],
    process: [], timeline: "3 – 6 weeks", priceRange: "₹20k – ₹1L",
  },
  {
    id: "digital-marketing",
    accentColor: "from-green-600 to-lime-400",
    accentSolid: "#16a34a",
    shadowClass: "group-hover:shadow-green-500/30",
    image: "/assets/images/digital_marketing.jpg",
    bgImage: "/assets/images/digital_marketing.jpg",
    title: "Digital Marketing & SEO",
    tagline: "Drive traffic and dominate search rankings.",
    description: "Strategic marketing campaigns and technical SEO to ensure your product gets the attention it deserves.",
    features: ["Keyword Research", "On-Page/Off-Page SEO", "Content Strategy", "Ad Campaign Management"],
    process: [], timeline: "Ongoing", priceRange: "₹8k – ₹50k/mo",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);
  const [bookingStatus, setBookingStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const closeModal = () => {
    setActiveService(null);
    document.body.style.overflow = "auto";
  };

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingStatus("loading");
    const formData = new FormData(e.currentTarget);
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
        setTimeout(() => { closeModal(); setBookingStatus("idle"); }, 2000);
      } else {
        setBookingStatus("error");
        setTimeout(() => setBookingStatus("idle"), 3000);
      }
    } catch (error) {
      setBookingStatus("error");
      setTimeout(() => setBookingStatus("idle"), 3000);
    }
  };

  return (
    <section id="services" className="relative py-32 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-white">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Our Services
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            <span>Services built for the</span> <br />
            <span className="text-emerald-500 italic">India opportunity</span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every service is positioned for the current market. India's digital economy is moving fast — our delivery is faster.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => { setActiveService(svc); document.body.style.overflow = "hidden"; }}
              className="group cursor-pointer"
            >
              <div
                className={`relative h-[320px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl ${svc.shadowClass}`}
              >
                {/* Background Image */}
                <img
                  src={svc.bgImage}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30 transition-opacity duration-500 group-hover:from-slate-950 group-hover:via-slate-950/80 group-hover:to-slate-950/40" />

                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at center bottom, ${svc.accentSolid}, transparent 70%)` }}
                />

                {/* Centered Service Thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
                      style={{ background: svc.accentSolid }}
                    />
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-white/40">
                      <img
                        src={svc.image}
                        alt={svc.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Text Area */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <h3 className="text-lg font-black text-white mb-1.5 tracking-tight transition-colors duration-300 group-hover:text-emerald-400">
                    {svc.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 font-medium group-hover:text-slate-300 transition-colors duration-300">
                    {svc.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">Explore</span>
                    <svg className="w-3 h-3 text-emerald-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Updated size to max-w-4xl for better focus */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeModal} className="fixed inset-0 bg-slate-950/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[85vh] z-10"
            >
              {/* Left Details Sidebar */}
              <div className="w-full md:w-[45%] bg-slate-900 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${activeService.accentColor} opacity-20`} />
                <div className="relative z-10">
                  <button onClick={closeModal} className="mb-8 text-slate-400 hover:text-white transition-colors text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <span>✕</span> Close Project
                  </button>
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-16 h-16 mb-6 rounded-xl object-cover shadow-lg border border-white/20"
                  />
                  <h2 className="text-3xl font-black mb-4 leading-tight tracking-tighter">{activeService.title}</h2>
                  <p className="text-slate-400 text-xs mb-6 leading-relaxed font-medium">{activeService.description}</p>
                  <div className="space-y-3">
                    {activeService.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-200">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeService.accentColor}`} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                  <span className="text-[9px] uppercase tracking-widest text-emerald-500 font-black">Estimated Value</span>
                  <div className="text-xl font-black mt-1">{activeService.priceRange}</div>
                </div>
              </div>

              {/* Right Form Area */}
              <div className="w-full md:w-[55%] p-8 md:p-12 bg-white overflow-y-auto">
                <div className="max-w-sm mx-auto">
                  <h4 className="text-xl font-black text-slate-900 mb-1">Initialize Project</h4>
                  <p className="text-slate-500 text-[12px] mb-8 font-medium">Briefly explain your vision and we'll reach out.</p>

                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Full Name</label>
                      <input name="customerName" type="text" placeholder="John Doe" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Email Address</label>
                      <input name="email" type="email" placeholder="john@company.com" required className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Budget Allocation</label>
                      <select name="budgetTier" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none appearance-none font-medium">
                        <option>Select Tier...</option>
                        <option>Seed (₹20k-₹50k)</option>
                        <option>Scale (₹50k-₹2L)</option>
                        <option>Enterprise (₹2L+)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-wider">Context</label>
                      <textarea name="context" rows={2} placeholder="Project scope..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-xs focus:bg-white focus:border-emerald-500 outline-none resize-none transition-all font-medium" />
                    </div>
                    <button type="submit" disabled={bookingStatus !== "idle"} className={`w-full py-4 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${bookingStatus === 'success' ? 'bg-emerald-600' : 'bg-slate-900 hover:bg-emerald-500'} text-white shadow-lg`}>
                      {bookingStatus === 'loading' ? 'Encrypting...' : bookingStatus === 'success' ? 'Received' : 'Submit Application'}
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