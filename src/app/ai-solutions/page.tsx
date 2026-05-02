import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Cpu, 
  Brain, 
  Zap, 
  ShieldCheck, 
  Rocket,
  CheckCircle2,
  Sparkles,
  Bot,
  Database,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "AI Development Services India | BG THUB",
  description: "Advanced AI development services in India. We specialize in AI integration for startups, LLM implementation, and custom AI-powered solutions.",
  keywords: ["AI development services India", "AI integration for startups", "LLM development", "machine learning solutions", "BG THUB"]
};

export default function AISolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px] animate-pulse" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">AI Integration for Startups</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">
              Intelligence <br />
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent italic">Redefined with AI</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              We help startups and enterprises leverage the power of Artificial Intelligence to automate, optimize, and dominate their niche.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10 flex items-center gap-2 group"
              >
                Integrate AI Today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-2"
              >
                Our AI Stack
              </Link>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-24 bg-white" id="services">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">AI Development Services</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">From LLM fine-tuning to predictive analytics, we bring the future to your business.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "LLM & Chatbots",
                  desc: "Custom AI agents and chatbots built on GPT-4, Claude, or open-source models for 24/7 automation.",
                  icon: <Bot className="w-6 h-6" />,
                  color: "bg-emerald-600"
                },
                {
                  title: "Predictive Analytics",
                  desc: "Turn your data into insights. We build models that predict trends, behavior, and opportunities.",
                  icon: <BarChart3 className="w-6 h-6" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Computer Vision",
                  desc: "Advanced image and video analysis for security, inventory, or product identification.",
                  icon: <Database className="w-6 h-6" />,
                  color: "bg-purple-600"
                }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:shadow-emerald-500/5 group">
                  <div className={`w-12 h-12 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                  Data-Driven <br />
                  <span className="text-emerald-400 italic">Evolution</span>
                </h2>
                <div className="space-y-12">
                  {[
                    { step: "01", title: "Data Audit", desc: "We analyze your existing data to identify AI opportunities." },
                    { step: "02", title: "Model Selection", desc: "Choosing the right AI framework or model for your specific use case." },
                    { step: "03", title: "Seamless Integration", desc: "Connecting AI to your existing apps and workflows with zero downtime." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-6 relative group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">{step.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Brain className="w-48 h-48 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-6">AI Impact at Scale</h3>
                  <p className="text-slate-400 mb-8 font-medium">BG THUB specializes in making AI practical. We don&apos;t just build research models; we build revenue-generating products.</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="block text-3xl font-black text-emerald-400">40%</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500">Effort Reduction</span>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="block text-3xl font-black text-blue-400">24/7</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500">AI Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-emerald-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-blue-700 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to Automate <br />
                <span className="italic">Your Future?</span>
              </h2>
              <p className="text-emerald-100 text-lg font-medium mb-12 max-w-xl mx-auto">
                Integrate cutting-edge AI into your business with India&apos;s leading AI development team.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex px-10 py-5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
              >
                Get an AI Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
