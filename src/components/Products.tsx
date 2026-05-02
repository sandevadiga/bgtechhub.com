"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: "ridexe-unique-01",
    name: "RideXe",
    logo: "/assets/images/ridexe1.png",
    slug: "ridexe", // This matches your folder name
  },
  {
    id: "protask-unique-02",
    name: "PROtask",
    logo: "/assets/images/protask.png",
    slug: "protask", // Assuming you'll have a folder for this too

  },

  {
    id: "logi growth-unique-03",
    name: "LogiGrowth",
    logo: "/assets/images/logigrowth1.png",
    slug: "logigrowth", // Assuming you'll have a folder for this too

  }
];

export default function Products() {
  return (
    <section className="relative py-24 bg-white overflow-hidden" id="work">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* CENTERED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-[9px]">Our Work</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
            Our <span className="text-emerald-700 italic font-serif">Projects</span>
          </h2>
        </motion.div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((p, index) => (
            // Wrap the card in a Link component
            <Link key={p.id} href={`/work/${p.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative p-8 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-emerald-500/20"
              >
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-3xl p-4 shadow-sm border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                    <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4">{p.name}</h3>
                  <div className="inline-flex items-center gap-2 text-[10px] font-black text-emerald-700 uppercase tracking-[0.3em] group-hover:text-emerald-600 transition-colors">
                    Visit Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}