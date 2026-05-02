"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
   Sparkles,
   PenTool,
   Timer,
   Bell,
   Rocket,
   Zap
} from 'lucide-react';

export default function BlogPage() {
   return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 overflow-x-hidden">
         <Navbar />

         <main className="pt-32 pb-24 relative">
            {/* Background Decorations */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none">
               <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-[120px] opacity-60" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60" />
            </div>

            <section className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">

               {/* Badge */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-white border border-slate-200 shadow-sm"
               >
                  <Timer className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Coming Soon</span>
               </motion.div>

               {/* Title Section */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-6 mb-12"
               >
                  <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] text-slate-900">
                     Our Blog is <br />
                     <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent italic">Under Construction</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-lg text-slate-500 font-medium leading-relaxed">
                     We're curating a collection of deep-dives into AI engineering, startup growth strategies,
                     and modern product development. Something big is brewing.
                  </p>
               </motion.div>

               {/* Visual Elements Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-20">
                  {[
                     { icon: <PenTool />, title: "Tech Insights", desc: "Deep dives into modern tech stacks." },
                     { icon: <Zap />, title: "AI Integration", desc: "Practical AI guides for products." },
                     { icon: <Rocket />, title: "Startup Tips", desc: "Scale your MVP the right way." }
                  ].map((item, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                        className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 text-left group hover:border-emerald-200 transition-all"
                     >
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 group-hover:bg-emerald-50 transition-all">
                           {item.icon}
                        </div>
                        <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                     </motion.div>
                  ))}
               </div>



               {/* Floating Icon Decorations */}
               <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-[10%] top-[20%] text-emerald-200 hidden lg:block"
               >
                  <Sparkles size={48} strokeWidth={1} />
               </motion.div>
               <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute right-[10%] bottom-[20%] text-blue-200 hidden lg:block"
               >
                  <Rocket size={56} strokeWidth={1} />
               </motion.div>

            </section>
         </main>

         <Footer />
      </div>
   );
}
