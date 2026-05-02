"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface WhyDetail {
  id: string;
  num: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  highlights: { label: string; value: string }[];
  points: string[];
  caseStudy: { title: string; desc: string };
}

// --- Optimized Animated Icon Components ---
// We use group-hover/card to reference the outermost hover state
const FastExecutionIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-full h-full text-amber-500 group-hover/card:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  </div>
);

const StartupMindsetIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-full h-full text-blue-500 group-hover/card:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.59 8.31m6 6.06a14.95 14.95 0 01-12.12 6.16m12.12-6.16a14.95 14.95 0 00-6.06-12.12" />
    </svg>
  </div>
);

const AffordableIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-full h-full text-emerald-500 group-hover/card:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
);

const ExperienceIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg className="w-full h-full text-purple-500 group-hover/card:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
    </svg>
  </div>
);

// ... Data remains the same ...
const whyDetails: WhyDetail[] = [
  {
    id: "fast-execution",
    num: "01",
    icon: <FastExecutionIcon />,
    title: "Fast Execution",
    tagline: "Speed is our superpower — without compromising quality.",
    description: "In the startup world, timing is everything. We use agile sprints and battle-tested architectures to ship your product in record time.",
    highlights: [
      { label: "Average MVP", value: "4–6 weeks" },
      { label: "Sprint Cycle", value: "1–2 weeks" },
      { label: "Response", value: "< 24h" },
    ],
    points: ["Agile sprints", "Pre-built components", "CI/CD pipelines", "Daily standups"],
    caseStudy: { title: "RideXe — 5 Weeks", desc: "Concept to fully functional travel app in record time." },
  },
  {
    id: "startup-mindset",
    num: "02",
    icon: <StartupMindsetIcon />,
    title: "Startup Mindset",
    tagline: "We think like founders, not just developers.",
    description: "We don't just write code — we think about your business. We understand the startup journey firsthand.",
    highlights: [
      { label: "Products Built", value: "2+" },
      { label: "Projects", value: "50+" },
      { label: "Success Rate", value: "95%" },
    ],
    points: ["Product strategy", "Feature prioritization", "Lean MVP approach", "Scalable architecture"],
    caseStudy: { title: "PROtask", desc: "Internal tool turned public platform used by students." },
  },
  {
    id: "affordable-solutions",
    num: "03",
    icon: <AffordableIcon />,
    title: "Affordable",
    tagline: "Premium quality at startup-friendly prices.",
    description: "Great technology shouldn't be reserved for massive budgets. We offer flexible, transparent pricing.",
    highlights: [
      { label: "Starting From", value: "₹5,000" },
      { label: "Payment", value: "Flexible" },
      { label: "Student Disc.", value: "60%" },
    ],
    points: ["Milestone pricing", "No hidden costs", "Student rates", "Flexible plans"],
    caseStudy: { title: "Student Impact", desc: "20+ portfolio-ready projects delivered for students." },
  },
  {
    id: "real-world-exp",
    num: "04",
    icon: <ExperienceIcon />,
    title: "Experience",
    tagline: "Built by makers who've shipped real products.",
    description: "Our team doesn't just know theory. We've been in the trenches building and launching products used by real users.",
    highlights: [
      { label: "Launched", value: "2+" },
      { label: "Delivered", value: "50+" },
      { label: "Tech Stack", value: "15+" },
    ],
    points: ["Production-grade code", "Performance optimization", "App Store experts", "Post-launch support"],
    caseStudy: { title: "100% Delivery", desc: "Across 50+ projects, we maintain a flawless delivery rate." },
  },
];

const FeatureCard = ({ item, onClick }: { item: WhyDetail; onClick: () => void }) => (
  <motion.button
    layoutId={`card-${item.id}`}
    whileHover={{ y: -8 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    // Added group/card here for specific icon child referencing
    className="group/card relative flex flex-col items-start text-left p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm transition-all duration-300 overflow-hidden w-full h-full cursor-pointer hover:border-emerald-400 hover:shadow-2xl"
  >
    {/* <div className="absolute top-4 right-8 text-7xl font-black text-green-600 italic pointer-events-none group-hover/card:text-emerald-500/5 transition-colors">
      {item.num}
    </div> */}

    {/* Animated Icon Box */}
    <div className="h-16 w-16 mb-6 flex items-center justify-center bg-slate-900 rounded-2xl p-4 group-hover/card:bg-emerald-500 transition-all duration-500 shadow-lg overflow-hidden">
      <div className="w-full h-full transition-transform duration-500 group-hover/card:scale-110">
        {item.icon}
      </div>
    </div>

    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover/card:text-emerald-700 transition-colors">
      {item.title}
    </h3>
    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
      {item.tagline}
    </p>
    <div className="mt-auto flex items-center gap-2 text-emerald-700 font-bold text-[10px] tracking-widest uppercase">
      <span>View Analysis</span>
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-emerald-50 group-hover/card:bg-emerald-500 group-hover/card:text-white transition-all">→</span>
    </div>
  </motion.button>
);

export default function WhyUs() {
  const [activeWhy, setActiveWhy] = useState<WhyDetail | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeWhy ? "hidden" : "unset";
  }, [activeWhy]);

  return (
    <section id="why" className="relative py-24 bg-[#f8fafc] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block"
          >
            The BG THUB Edge
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">
            Why Partner <span className="text-emerald-700 italic">With Us?</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            We move at startup speed to turn your vision into production-ready reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyDetails.map((item) => (
            <FeatureCard key={item.id} item={item} onClick={() => setActiveWhy(item)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeWhy && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveWhy(null)}
          >
            <motion.div
              layoutId={`card-${activeWhy.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <button
                className="absolute top-8 right-8 w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all z-50 border border-slate-100"
                onClick={() => setActiveWhy(null)}
              >✕</button>

              <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl p-4 text-white shadow-xl flex items-center justify-center">
                    {/* Inline fix for Modal icon colors since it doesn't have the group/card context */}
                    <div className="w-full h-full text-white [&_svg]:text-white">
                      {activeWhy.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 mb-1">{activeWhy.title}</h2>
                    <p className="text-emerald-700 font-bold italic">{activeWhy.tagline}</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">{activeWhy.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-10">
                  {activeWhy.highlights.map((h, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl text-center border border-slate-100">
                      <div className="text-[9px] text-slate-400 uppercase tracking-widest mb-1 font-bold">{h.label}</div>
                      <div className="text-lg font-black text-slate-900">{h.value}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-10">
                  {activeWhy.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-500 font-medium">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 mb-10">
                  <h4 className="text-emerald-700 font-black text-xs uppercase tracking-widest mb-2">Success Story: {activeWhy.caseStudy.title}</h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{activeWhy.caseStudy.desc}</p>
                </div>

                <button
                  className="w-full py-4 bg-slate-900 hover:bg-emerald-600 text-white font-black rounded-xl transition-all uppercase tracking-[0.2em] text-[10px] shadow-lg"
                  onClick={() => setActiveWhy(null)}
                >
                  Close Analysis
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}