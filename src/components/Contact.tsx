"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, MessageSquare, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      type: "Contact Form"
    };

    setStatus("loading");

    try {
      // Replace with your actual endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/[0.06] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

          {/* Left Column: Context & Info */}
          <div className="lg:col-span-2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
                <Sparkles className="w-3 h-3 text-green-600" />
                <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-[9px]">Available for work</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] mb-6">
                Let&apos;s build <br />
                <span className="text-green-600 italic">your next big idea.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-sm">
                From student concepts to enterprise-grade AI, we engineer solutions that scale. Drop us a line.
              </p>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-green-600 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email us</p>
                  <p className="text-slate-900 font-bold">hello@bgthub.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-green-600 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Our Hub</p>
                  <p className="text-slate-900 font-bold">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Light Theme Form Card */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 p-8 md:p-10 rounded-[2.5rem] relative shadow-xl shadow-slate-200/60"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Rahul S."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-4 focus:ring-green-500/5 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="name@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-4 focus:ring-green-500/5 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Vision</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe what you're looking to build..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-green-500/50 focus:ring-4 focus:ring-green-500/5 transition-all font-medium resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`
                    w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden
                    ${status === "idle" ? "bg-green-500 text-white shadow-lg shadow-green-500/20 hover:bg-green-600 hover:-translate-y-1 active:scale-95" : ""}
                    ${status === "loading" ? "bg-slate-100 text-slate-400 cursor-wait" : ""}
                    ${status === "success" ? "bg-emerald-500 text-white" : ""}
                    ${status === "error" ? "bg-rose-500 text-white" : ""}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Shoot Message <Send size={14} />
                      </motion.div>
                    )}
                    {status === "loading" && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        Message Sent <CheckCircle2 size={16} />
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div key="error" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        Try Again <AlertCircle size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}