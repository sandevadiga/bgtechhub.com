import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Rocket, 
  Clock, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Layers,
  BarChart3,
  Flame,
  Target
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "MVP Development Services — Build MVP in 6 Weeks | BG THUB",
  description: "Specialized MVP development services for startups. We build and launch your minimum viable product in just 6 weeks with high-quality engineering.",
  keywords: ["MVP development services", "build MVP in 6 weeks", "startup product development", "rapid prototyping", "BG THUB"]
};

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-orange-100/50 border border-orange-200 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600">Build MVP in 6 Weeks</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">
              From Idea to Launch <br />
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent italic">In Just 6 Weeks</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Stop over-engineering and start validating. We help founders build high-quality MVPs that prove their market fit faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10 flex items-center gap-2 group"
              >
                Launch Your MVP <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#process" 
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-orange-500 transition-all flex items-center gap-2"
              >
                Our 6-Week Plan
              </Link>
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-12 bg-white border-y border-slate-100">
           <div className="max-w-6xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { label: "Delivery Time", val: "6 Weeks" },
                   { label: "Success Rate", val: "100%" },
                   { label: "MVP Focus", val: "Core Features" },
                   { label: "Tech Stack", val: "Scalable" }
                 ].map((stat, i) => (
                   <div key={i} className="text-center">
                      <span className="block text-2xl font-black text-slate-900">{stat.val}</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{stat.label}</span>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-white" id="process">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Rapid 6-Week Sprint</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">We use a proven formula to take your product from concept to code in record time.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { week: "Week 01", title: "Discovery & Scoping", desc: "We define the Minimum Viable product. We cut the fluff and focus on what users actually need." },
                { week: "Week 02-03", title: "Design & UX", desc: "Rapid prototyping and pixel-perfect UI design optimized for early user feedback." },
                { week: "Week 04-05", title: "Core Development", desc: "Intense engineering sprint to build the core features and functional backend." },
                { week: "Week 06", title: "Testing & Launch", desc: "Rigorous QA and deployment to production. We help you hit the market ready." }
              ].map((step, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col md:flex-row gap-8 items-center group hover:border-orange-200 transition-all">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xl font-black text-orange-600 shadow-sm">
                    {step.week.replace("Week ", "")}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{step.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY US SECTION --- */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">Why Founders Trust Us</h2>
              <p className="text-slate-400 font-medium max-w-xl mx-auto">We&apos;re not just developers; we&apos;re your technical co-founders for the first 6 weeks.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Founder Mindset",
                  desc: "We look at your product from a business perspective, ensuring every feature adds ROI.",
                  icon: <Target className="w-6 h-6 text-orange-400" />
                },
                {
                  title: "Speed as a Feature",
                  desc: "In the startup world, being first is often better than being perfect. We prioritize velocity.",
                  icon: <Clock className="w-6 h-6 text-emerald-400" />
                },
                {
                  title: "Future Proof",
                  desc: "We build on scalable architectures so your MVP doesn&apos;t need a rewrite when you hit 10k users.",
                  icon: <Rocket className="w-6 h-6 text-blue-400" />
                }
              ].map((benefit, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-orange-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-rose-700 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to Validate <br />
                <span className="italic">Your Big Idea?</span>
              </h2>
              <p className="text-orange-100 text-lg font-medium mb-12 max-w-xl mx-auto">
                Don&apos;t let your idea sit in a drawer. Build and launch it in just 6 weeks with BG THUB.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex px-10 py-5 bg-white text-orange-700 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
              >
                Start Your 6-Week Sprint <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
