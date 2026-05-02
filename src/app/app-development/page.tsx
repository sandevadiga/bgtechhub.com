import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  Smartphone, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Rocket,
  CheckCircle2,
  Sparkles,
  Layers,
  Touchpad
} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "Mobile App Development Company India | BG THUB",
  description: "Top mobile app development company in India. We build high-performance iOS, Android, and cross-platform apps for startups and enterprises.",
  keywords: ["mobile app development company India", "iOS app development", "Android app development", "cross-platform apps", "React Native development", "BG THUB"]
};

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Mobile App Development Company India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-white mb-8">
              iOS &amp; Android <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent italic">App Development</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium mb-12 leading-relaxed">
              We build high-performance, intuitive mobile applications that live in your users&apos; pockets and drive massive engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2 group"
              >
                Launch Your App <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Explore Expertise
              </Link>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION --- */}
        <section className="py-24 bg-white" id="services">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Mobile Stack</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">We use the most reliable technologies to ensure your app is fast, secure, and future-proof.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Native Development",
                  desc: "Optimized performance using Swift for iOS and Kotlin for Android for high-end applications.",
                  icon: <Smartphone className="w-6 h-6" />,
                  color: "bg-blue-600"
                },
                {
                  title: "Cross-Platform",
                  desc: "Single codebase for both iOS and Android using React Native or Flutter without compromising quality.",
                  icon: <Layers className="w-6 h-6" />,
                  color: "bg-emerald-600"
                },
                {
                  title: "UI/UX Design",
                  desc: "Intuitive, user-first mobile interfaces that ensure high retention and ease of use.",
                  icon: <Touchpad className="w-6 h-6" />,
                  color: "bg-rose-600"
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
        <section className="py-24 bg-slate-50 overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative mx-auto w-[280px] h-[560px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-3xl z-20" />
                   <div className="h-full bg-white p-6 flex flex-col justify-center items-center text-center">
                      <Rocket className="w-16 h-16 text-emerald-600 mb-6 animate-bounce" />
                      <h4 className="text-2xl font-black text-slate-900 mb-2">High Impact</h4>
                      <p className="text-slate-500 text-xs">Apps built to win.</p>
                   </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                  Built for the <br />
                  <span className="text-emerald-600 italic">Modern User</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Offline First", desc: "Robust applications that work seamlessly even with poor connectivity." },
                    { title: "Cloud Integration", desc: "Scalable backend infrastructures using Firebase, AWS, or Azure." },
                    { title: "Real-time Features", desc: "Instant messaging, push notifications, and live tracking capabilities." },
                    { title: "End-to-End Testing", desc: "Rigorous testing across hundreds of devices to ensure stability." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Turning Your App Vision <br />
                <span className="text-emerald-400 italic">Into Downloadable Reality</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium mb-12 max-w-xl mx-auto">
                Join the startups that trust BG THUB to build and scale their mobile products.
              </p>
              <Link 
                href="#contact" 
                className="inline-flex px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-3 group"
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
