"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Loader2,
  GraduationCap,
  MapPin,
  School,
  Target,
  Cpu,
  ChevronRight,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function AcademyApplyPage() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    collegeName: "",
    currentStatus: "",
    skillLevel: "",
    reasons: [] as string[],
    preferredDomain: "",
    projectName: "",
    projectDescription: ""
  });

  const reasonsOptions = [
    "Get a job",
    "Build real projects",
    "Switch career",
    "Freelancing",
    "Startup idea",
    "Other"
  ];

  const handleReasonToggle = (reason: string) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.includes(reason)
        ? prev.reasons.filter(r => r !== reason)
        : [...prev.reasons, reason]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/academy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
      } else {
        throw new Error();
      }
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const isNextDisabled = () => {
    if (step === 1) return !formData.fullName || !formData.email || !formData.phoneNumber || !formData.location || !formData.collegeName;
    if (step === 2) return !formData.currentStatus || !formData.skillLevel || !formData.preferredDomain;
    if (step === 3) return formData.reasons.length === 0 || !formData.projectName || !formData.projectDescription;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-slate-900 selection:bg-emerald-100">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles size={12} />
              <span>Academy Admissions 2026</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              Join the <span className="text-emerald-600 italic">Academy</span>
            </h1>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">
              Tell us about yourself and your goals. We'll review your application and get back to you within 48 hours.
            </p>
          </div>

          <div className="relative">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[3rem] border border-emerald-100 shadow-2xl text-center"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 text-emerald-600">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Application Received!</h2>
                <p className="text-slate-500 font-medium mb-10 max-w-sm mx-auto">
                  Thank you for applying to BG THUB Academy. Our team will review your profile and contact you shortly.
                </p>
                <button
                  onClick={() => router.push("/")}
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl"
                >
                  Return Home
                </button>
              </motion.div>
            ) : (
              <div className="bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white shadow-2xl shadow-slate-200/50 p-8 md:p-12">

                {/* Step Indicators */}
                <div className="flex items-center gap-4 mb-12">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${step === s ? "bg-emerald-600 text-white scale-110 shadow-lg shadow-emerald-200" :
                        step > s ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"
                        }`}>
                        {step > s ? <CheckCircle2 size={14} /> : s}
                      </div>
                      {s < 3 && <div className={`w-12 h-0.5 rounded-full ${step > s ? "bg-emerald-200" : "bg-slate-100"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                              Full Name <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                            </label>
                            <input
                              required
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g. Rahul Sharma"
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                              Email Address <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="rahul@example.com"
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                              Phone Number <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                            </label>
                            <input
                              required
                              value={formData.phoneNumber}
                              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                              Location (City, State) <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                            </label>
                            <input
                              required
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              placeholder="Bengaluru, Karnataka"
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                            />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                              College Name <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                            </label>
                            <input
                              required
                              value={formData.collegeName}
                              onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                              placeholder="e.g. RV College of Engineering"
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Current Status <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {["Student", "Graduate", "Working Professional"].map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setFormData({ ...formData, currentStatus: item })}
                                className={`px-4 py-4 rounded-2xl font-bold text-sm border transition-all ${formData.currentStatus === item
                                  ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200"
                                  : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200"
                                  }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Current Skill Level <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {["Beginner", "Intermediate", "Advanced"].map((item) => (
                              <button
                                key={item}
                                type="button"
                                onClick={() => setFormData({ ...formData, skillLevel: item })}
                                className={`px-4 py-4 rounded-2xl font-bold text-sm border transition-all ${formData.skillLevel === item
                                  ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200"
                                  : "bg-white border-slate-100 text-slate-600 hover:border-emerald-200"
                                  }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Preferred Domain <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.preferredDomain}
                              onChange={(e) => setFormData({ ...formData, preferredDomain: e.target.value })}
                              className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 transition-all font-medium appearance-none"
                            >
                              <option value="" disabled>Select a domain...</option>
                              <option value="Web Development">Web Development</option>
                              <option value="App Development">App Development</option>
                              <option value="AI / ML">AI / ML</option>
                              <option value="UI/UX">UI/UX</option>
                              <option value="Full Stack">Full Stack</option>
                              <option value="Other">Other</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                              <ChevronRight className="rotate-90" size={16} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                      >
                        <div className="space-y-4">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Why do you want to join this Program? (Select all that apply) <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {reasonsOptions.map((reason) => (
                              <button
                                key={reason}
                                type="button"
                                onClick={() => handleReasonToggle(reason)}
                                className={`px-5 py-3 rounded-full font-bold text-xs transition-all border ${formData.reasons.includes(reason)
                                  ? "bg-emerald-100 border-emerald-500 text-emerald-700 shadow-sm"
                                  : "bg-white border-slate-100 text-slate-500 hover:border-emerald-200"
                                  }`}
                              >
                                {reason}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Project Idea Name <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <input
                            required
                            value={formData.projectName}
                            onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                            placeholder="e.g. RideXe, Protask, etc."
                            className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 transition-all font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="relative inline-flex text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">
                            Project Idea Description <span className="absolute -top-1 -right-2.5 text-rose-600 text-sm">*</span>
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={formData.projectDescription}
                            onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                            placeholder="Describe your project idea in detail..."
                            className="w-full bg-white border border-slate-100 rounded-2xl px-5 py-4 text-slate-900 focus:outline-none focus:border-emerald-500 transition-all font-medium resize-none"
                          />
                        </div>

                        <div className="p-6 rounded-[2rem] bg-emerald-50/50 border border-emerald-100">
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                              <Target size={20} />
                            </div>
                            <div>
                              <h4 className="text-sm font-black text-slate-900 mb-1">Final Step</h4>
                              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                                By submitting, you agree to our terms. We will review your application and contact you for a technical discussion.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest hover:text-slate-900 transition-colors"
                      >
                        <ArrowLeft size={16} /> Back
                      </button>
                    ) : <div />}

                    {step < 3 ? (
                      <button
                        type="button"
                        disabled={isNextDisabled()}
                        onClick={() => setStep(step + 1)}
                        className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-900"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={status === "loading" || formData.reasons.length === 0}
                        className="flex items-center gap-2 px-10 py-4 bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-emerald-200 disabled:opacity-50"
                      >
                        {status === "loading" ? (
                          <>Submitting <Loader2 className="animate-spin" size={16} /></>
                        ) : (
                          <>Complete Application <Send size={16} /></>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
