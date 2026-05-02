import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Search, 
  Smartphone, 
  Cpu, 
  Globe,
  Rocket,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

// Using a Client Component wrapper for animations
import ClientOnlyAnimations from '@/components/ClientOnlyAnimations';

export const metadata = {
  title: "Custom Website Development Services in Bengaluru | BG THUB",
  description: "High-performance, scalable custom website development services. Expert Next.js development agency in Bengaluru for startups and businesses.",
  keywords: ["custom website development services", "Next.js development agency Bengaluru", "web development company India", "scalable web applications", "BG THUB"]
};

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">Next.js Development Agency Bengaluru</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">
              Custom Website <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">Development Services</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              We build lightning-fast, SEO-optimized, and highly scalable web solutions that turn your visitors into loyal customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/10 flex items-center gap-2 group"
              >
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all flex items-center gap-2"
              >
                View Our Stack
              </Link>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-24 bg-white" id="services">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Web Expertise</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">From corporate sites to complex SaaS platforms, we deliver technical excellence at every layer.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Websites",
                  desc: "Professional, high-converting websites designed to establish authority and drive leads.",
                  icon: <Globe className="w-6 h-6" />,
                  color: "bg-blue-500"
                },
                {
                  title: "SaaS Platforms",
                  desc: "Scalable cloud-based applications with complex logic, user roles, and real-time data.",
                  icon: <Cpu className="w-6 h-6" />,
                  color: "bg-emerald-500"
                },
                {
                  title: "E-commerce Solutions",
                  desc: "Secure, high-performance online stores optimized for conversion and sales growth.",
                  icon: <Layout className="w-6 h-6" />,
                  color: "bg-purple-500"
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

        {/* --- BENEFITS SECTION --- */}
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[150px]" />
          </div>
          
          <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                  Why Choose <br />
                  <span className="text-emerald-400 italic">BG THUB?</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "SEO-First Architecture", desc: "We build for search engines from day one, ensuring your site ranks high and reaches your audience." },
                    { title: "Lightning Fast Performance", desc: "Sub-2 second load times using Next.js and optimized asset delivery for the best UX." },
                    { title: "Scalable & Secure", desc: "Modern tech stacks that grow with your business and keep your data safe." },
                    { title: "Conversion Optimized", desc: "Every button, link, and pixel is placed strategically to drive user actions." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white mb-1">{benefit.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 backdrop-blur-3xl flex items-center justify-center p-12">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                      <Zap className="w-8 h-8 text-amber-400 mb-4" />
                      <span className="text-2xl font-black text-white">99/100</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Speed Score</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center translate-y-8">
                      <Search className="w-8 h-8 text-blue-400 mb-4" />
                      <span className="text-2xl font-black text-white">Top 3</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Search Ranking</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                      <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
                      <span className="text-2xl font-black text-white">100%</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">Mobile Optimized</span>
                    </div>
                    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center translate-y-8">
                      <Rocket className="w-8 h-8 text-emerald-400 mb-4" />
                      <span className="text-2xl font-black text-white">6 Weeks</span>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">MVP Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROCESS SECTION --- */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">How We Build</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">A transparent, data-driven workflow designed for speed and quality.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your business goals and user needs." },
                { step: "02", title: "Strategy", desc: "Mapping out the architecture and UX wireframes." },
                { step: "03", title: "Develop", desc: "Agile engineering using Next.js and modern stack." },
                { step: "04", title: "Launch", desc: "Rigorous testing and deployment to cloud." }
              ].map((step, i) => (
                <div key={i} className="relative group">
                  <span className="text-7xl font-black text-slate-50 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity absolute -top-8 -left-4">{step.step}</span>
                  <div className="relative z-10">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-emerald-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-700 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to build something <br />
                <span className="italic">extraordinary?</span>
              </h2>
              <p className="text-emerald-100 text-lg font-medium mb-12 max-w-xl mx-auto">
                Join the startups and businesses that trust BG THUB for their high-performance web solutions.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex px-10 py-5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
              >
                Book Your Free Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
