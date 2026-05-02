import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Rocket, 
  Users, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  BarChart3,
  TrendingUp,
  Handshake
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Tech Partner for Startups India | BG THUB",
  description: "Your dedicated technology partner for startups in India. We provide end-to-end engineering, product strategy, and technical leadership to help founders scale.",
  keywords: ["tech partner for startups India", "startup technology partner", "fractional CTO services", "startup engineering team", "BG THUB"]
};

export default function ForStartupsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
              <Handshake className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Tech Partner for Startups India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white mb-8">
              We Are Your <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic">Embedded Tech Team</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              Don&apos;t just hire a vendor. Partner with an engineering team that thinks like founders and builds for scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-50 transition-all hover:text-emerald-900 shadow-xl shadow-emerald-500/20 flex items-center gap-2 group"
              >
                Hire Your Tech Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#offerings" 
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Our Partnership Models
              </Link>
            </div>
          </div>
        </section>

        {/* --- CORE OFFERINGS --- */}
        <section className="py-24 bg-white" id="offerings">
           <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Beyond Just Code</h2>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg">
                       As a technology partner, we take ownership of your product roadmap. We don&apos;t just follow instructions; we provide strategic technical leadership to help you hit your business milestones.
                    </p>
                    
                    <div className="space-y-6">
                       {[
                         { title: "Fractional CTO Services", desc: "Expert technical leadership and architecture planning without the full-time cost." },
                         { title: "Product Strategy", desc: "We help you define features that users want and investors love." },
                         { title: "Engineering On-Demand", desc: "A high-performance team that scales up or down based on your funding and needs." }
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-emerald-200 transition-all">
                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-sm">
                               <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                               <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                               <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Rapid Scale", desc: "Built to handle 10k to 1M users seamlessly.", icon: <TrendingUp className="w-6 h-6 text-emerald-500" /> },
                      { title: "Lean MVP", desc: "Get to market fast and iterate based on data.", icon: <Zap className="w-6 h-6 text-amber-500" /> },
                      { title: "Investor Ready", desc: "Clean code and documentation that passes due diligence.", icon: <ShieldCheck className="w-6 h-6 text-blue-500" /> },
                      { title: "Dedicated Support", desc: "24/7 monitoring and feature scaling support.", icon: <Users className="w-6 h-6 text-purple-500" /> }
                    ].map((card, i) => (
                      <div key={i} className={`p-8 rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-100/50 flex flex-col items-center text-center ${i % 2 !== 0 ? 'translate-y-8' : ''}`}>
                         <div className="mb-6 p-4 rounded-2xl bg-slate-50">{card.icon}</div>
                         <h3 className="font-black text-slate-900 mb-2">{card.title}</h3>
                         <p className="text-slate-500 text-xs font-medium leading-relaxed">{card.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-emerald-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to Meet Your <br />
                <span className="italic">Technical Co-Founders?</span>
              </h2>
              <p className="text-emerald-100 text-lg font-medium mb-12 max-w-xl mx-auto">
                Join the founders who trust BG THUB to power their technology and drive their growth.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex px-10 py-5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
              >
                Let&apos;s Build Together <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
