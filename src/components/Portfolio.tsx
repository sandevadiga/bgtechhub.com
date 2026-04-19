"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Zap,
  Clock,
  PieChart,
  TrendingUp,
  Bot,
  Target,
  GraduationCap,
  Users,
  ShoppingCart,
  BarChart3,
  Cpu,
  School
} from "lucide-react";

const projects = [
  {
    id: 1,
    category: "Mobile App",
    title: "RideXe",
    subtitle: "Travel Platform",
    description: "A comprehensive travel booking and ride-sharing mobile application with real-time tracking.",
    logo: "/assets/images/ridexe1.png",
    isImage: true
  },
  {
    id: 2,
    category: "Productivity",
    title: "PROtask",
    subtitle: "Task Manager",
    description: "An intuitive task management tool designed to boost team productivity and workflow.",
    logo: "/assets/images/protask.png",
    isImage: true
  },
  {
    id: 3,
    category: "Web App",
    title: "E-Commerce",
    subtitle: "Shopping Platform",
    description: "A fast, scalable e-commerce solution with seamless checkout and inventory management.",
    icon: <ShoppingCart className="w-10 h-10 text-orange-500" />,
    bgColor: "bg-orange-50",
    techBadge: { icon: <Zap className="w-3 h-3" />, label: "Next.js + Stripe" },
    impactBadge: { icon: <Clock className="w-3.5 h-3.5" />, label: "5W Launch" }
  },
  {
    id: 4,
    category: "Dashboard",
    title: "InsightX",
    subtitle: "Analytics Dashboard",
    description: "Interactive data visualization dashboard for real-time business metrics tracking.",
    icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
    bgColor: "bg-blue-50",
    techBadge: { icon: <PieChart className="w-3 h-3" />, label: "React + D3.js" },
    impactBadge: { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "98% Uptime" }
  },
  {
    id: 5,
    category: "AI Solution",
    title: "NeuroBot",
    subtitle: "Chatbot Integration",
    description: "Custom intelligent conversational agent to automate customer support and queries.",
    icon: <Cpu className="w-10 h-10 text-purple-500" />,
    bgColor: "bg-purple-50",
    techBadge: { icon: <Bot className="w-3 h-3" />, label: "OpenAI + Python" },
    impactBadge: { icon: <Target className="w-3.5 h-3.5" />, label: "125k+ Queries" }
  },
  {
    id: 6,
    category: "Student Project",
    title: "Campus Connect",
    subtitle: "Community App",
    description: "A centralized hub for students to collaborate and share academic resources.",
    icon: <School className="w-10 h-10 text-green-500" />,
    bgColor: "bg-green-50",
    techBadge: { icon: <GraduationCap className="w-3 h-3" />, label: "Kotlin + Firebase" },
    impactBadge: { icon: <Users className="w-3.5 h-3.5" />, label: "20+ Portfolios" }
  }
];

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-green-600" />
              <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-[9px]">Portfolio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Our Latest <span className="text-green-600 italic">Projects</span>
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto leading-relaxed">
              From automated AI agents to scalable community platforms—explore the 6 core projects currently driving impact.
            </p>
          </motion.div>
        </div>

        {/* The Grid */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={{
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } }
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10"
            >
              <div className="flex items-start justify-between mb-8">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-20 h-20 rounded-2xl border border-slate-100 p-4 flex items-center justify-center shadow-sm group-hover:bg-white transition-colors duration-500 ${project.bgColor || 'bg-slate-50'}`}
                >
                  {project.isImage ? (
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                    <div className="group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </div>
                  )}
                </motion.div>

                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-3 py-1 bg-slate-50 rounded-full group-hover:text-green-600 group-hover:bg-green-50 transition-all">
                  {project.category}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-xs font-bold text-green-600/70 mb-3 italic">
                  {project.subtitle}
                </h4>

                {/* Badges Section */}
                {(project.techBadge || project.impactBadge) && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techBadge && (
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-slate-50 border border-slate-100 rounded-md text-[10px] font-medium text-slate-600">
                        {project.techBadge.icon}
                        {project.techBadge.label}
                      </div>
                    )}
                    {project.impactBadge && (
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-100 rounded-md text-[10px] font-bold text-green-700">
                        {project.impactBadge.icon}
                        {project.impactBadge.label}
                      </div>
                    )}
                  </div>
                )}

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  View Project
                </span>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Button */}
        <motion.div className="mt-16 text-center" {...fadeInUp}>
          <a
            href="#all-projects"
            className="inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-green-500/50 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all group shadow-sm"
          >
            <span className="uppercase tracking-widest text-[10px]">See Full Archive</span>
            <ExternalLink className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}