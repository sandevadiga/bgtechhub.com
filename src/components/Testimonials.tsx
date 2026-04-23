"use client";

import { motion, type Easing } from "framer-motion";
import React from "react";
import { Quote, Star } from "lucide-react";
import { MaskedAvatars } from "./MaskedAvatars"; // Adjust path as needed

const reviews = [
  {
    name: "Arjun Kapoor",
    role: "Startup Founder",
    avatar: "https://i.pravatar.cc/150?u=ak",
    text: "BG THUB took our rough idea and turned it into a polished product in just 6 weeks. Their team is communicative and genuinely invested in your success."
  },
  {
    name: "Priya Sharma",
    role: "Final Year Student",
    avatar: "https://i.pravatar.cc/150?u=ps",
    text: "As a final year student, I didn't know where to start. BG THUB mentored me through every step and helped me launch my first real app."
  },
  {
    name: "Rohit Nair",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?u=rn",
    text: "We needed an AI-powered solution on a tight budget. BG THUB delivered something beyond what we expected — clean, scalable, and exactly on time."
  }
];

export default function Testimonials() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" as Easing }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div {...fadeInUp}>
            <span className="text-green-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
              What People <span className="text-green-600 italic">Say.</span>
            </h2>
            <div className="h-1.5 w-16 bg-green-500 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:border-green-500/30 shadow-xl shadow-slate-200/50"
            >
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-green-500/10 transition-colors">
                <Quote size={40} strokeWidth={3} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-green-500 text-green-500" />
                ))}
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow italic">
                &ldquo;{item.text}&rdquo;
              </p>

              <div className="flex items-center gap-2 pt-6 border-t border-slate-100">
                {/* Integrated Animated Avatars here. 
                   We pass a single-item array to the component to use its 
                   hover/ring animation logic for the individual profile.
                */}
                <MaskedAvatars
                  avatars={[{ avatar: item.avatar, name: item.name }]}
                  size={50}
                  column={0} // No overlap needed for single avatar
                  movement={0.5}
                  ringed={true}
                  className="scale-90"
                />

                <div className="ml-2">
                  <h5 className="text-lg font-bold text-slate-900 leading-none mb-1 group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h5>
                  <p className="text-slate-400 font-medium text-[10px] uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}