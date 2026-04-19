"use client";

import { motion } from "framer-motion";

const products = [
  {
    id: "ridexe",
    name: "RideXe",
    badges: ["Travel", "AI", "Community"],
    logo: "/assets/images/ridexe1.png",
    description: "A smart travel comparison and social platform. Compare rides, discover routes, and connect with global travellers.",
    link: "https://ridexe.com/",
    color: "from-blue-500/5 to-transparent",
    hoverBorder: "group-hover:border-blue-400/50",
    accent: "text-blue-600",
    glow: "bg-blue-400/10"
  },
  {
    id: "protask",
    name: "PROtask",
    badges: ["Productivity", "Tasks", "Focus"],
    logo: "/assets/images/protask.png",
    description: "A powerful, minimal task management tool designed for teams and students who value efficiency and focus.",
    link: "https://protask.in/",
    color: "from-emerald-500/5 to-transparent",
    hoverBorder: "group-hover:border-emerald-400/50",
    accent: "text-emerald-600",
    glow: "bg-emerald-400/10"
  }
];

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="products" className="relative py-20 overflow-hidden bg-white">

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div variants={textReveal} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-100/40 border border-emerald-200">
            <span className="h-1 w-1 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-700">Internal Labs</span>
          </motion.div>

          <motion.h2 variants={textReveal} className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Built by <span className="text-emerald-600 italic">BG THUB</span>
          </motion.h2>

          <motion.p variants={textReveal} className="max-w-md text-sm text-slate-500 font-medium leading-relaxed">
            Innovating flagship platforms that redefine travel and productivity for the modern digital era.
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className={`relative h-full flex flex-col items-center p-8 rounded-[2rem] bg-white border border-slate-200 transition-all duration-500 overflow-hidden shadow-sm group-hover:shadow-xl group-hover:shadow-slate-200/40 ${product.hoverBorder}`}>

                {/* Subtle Glow Effect */}
                <div className={`absolute -right-16 -top-16 w-32 h-32 ${product.glow} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                {/* Animated Logo Section */}
                <div className="relative mb-6">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ rotate: -2, scale: 1.05 }}
                    className="w-16 h-16 md:w-36 md:h-36 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center p-6 shadow-sm"
                  >
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Badges - Reduced Font */}
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {product.badges.map((badge) => (
                    <span key={badge} className="px-2 py-0.5 text-[7px] font-bold uppercase tracking-widest bg-slate-50 text-slate-400 border border-slate-200 rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Content - Reduced Font */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  {product.name}
                </h3>

                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-center text-[11px] md:text-xs px-2">
                  {product.description}
                </p>

                {/* Visit Button */}
                <div className="mt-auto relative z-10">
                  <motion.a
                    href={product.link}
                    target="_blank"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-bold uppercase text-[9px] tracking-widest hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-slate-900/5 group/btn"
                  >
                    <span>Visit Platform</span>
                    <svg className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>

                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${product.color} pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}