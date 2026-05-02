"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle2, AlertCircle, Loader2, Sparkles } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      type: "Contact Form"
    };

    setStatus("loading");

    try {
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
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-100 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                <Sparkles size={12} />
                <span>Open for collaboration</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-[1.1] mb-6">
                <span className="text-green-600 italic block mb-4">Let&apos;s build</span>
                Ready to start your<br />
                <span className="text-green-600 italic">next project?</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                From student concepts to enterprise-grade AI, we engineer solutions that scale. Drop us a line.
              </p>
            </motion.div>

            <div className="space-y-8">
              <a href="mailto:connect@bgthub.com" className="flex items-center gap-5 group cursor-pointer no-underline">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-green-600 group-hover:bg-green-50 transition-all duration-300 shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Email us</p>
                  <p className="text-slate-900 font-bold text-lg">connect@bgthub.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-green-600 group-hover:bg-green-50 transition-all duration-300 shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">Our Hub</p>
                  <p className="text-slate-900 font-bold text-lg">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-10 rounded-[3rem] relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul S."
                      className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white/80 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@email.com"
                      className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white/80 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
                    />
                  </div>

                  {/* Project Type Dropdown */}
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="projectType" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Project Type</label>
                    <div className="relative group">
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:bg-white/80 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium appearance-none cursor-pointer shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="web">Website Development</option>
                        <option value="mobile">App Development</option>
                        <option value="ai">AI Solutions</option>
                        <option value="student">Student / College Project</option>
                        <option value="mentorship">Academy Mentorship</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-green-500 transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Vision */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Vision</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe what you're looking to build..."
                    className="w-full bg-white/50 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:bg-white/80 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all font-medium resize-none shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`
                    w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden shadow-xl
                    ${status === "idle" ? "bg-slate-900 text-white hover:bg-green-600 hover:-translate-y-1" : ""}
                    ${status === "loading" ? "bg-slate-100 text-slate-400 cursor-wait shadow-none" : ""}
                    ${status === "success" ? "bg-emerald-500 text-white" : ""}
                    ${status === "error" ? "bg-rose-500 text-white" : ""}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Send Message <Send size={14} />
                      </motion.div>
                    )}
                    {status === "loading" && (
                      <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        Success <CheckCircle2 size={16} />
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div key="error" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        Error <AlertCircle size={16} />
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