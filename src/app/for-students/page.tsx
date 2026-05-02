import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  GraduationCap, 
  Code2, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Terminal,
  Cpu,
  Star,
  Users
} from 'lucide-react';
import Link from 'next/link';

import StudentAcademy from '@/components/StudentSupport';

export const metadata = {
  title: "Industry-Level Projects for Students | BG THUB Academy",
  description: "Gain real-world experience with industry-level projects. BG THUB Academy helps students build high-quality portfolio pieces and master modern tech stacks.",
  keywords: ["industry-level projects for students", "coding for students India", "software development internship Bengaluru", "BG THUB Academy"]
};

export default function ForStudentsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100">
      <Navbar />
      
      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-100/50 border border-blue-200 shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-700">Industry-Level Projects for Students</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 mb-8">
              Build Real Software. <br />
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent italic">Level Up Your Career.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-medium mb-12 leading-relaxed">
              Skip the tutorials. Work on real-world projects that matter. Master the tech stack used by top startups globally.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/academy-apply" 
                className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center gap-2 group"
              >
                Join the Academy <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/#work" 
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-blue-500 transition-all flex items-center gap-2"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </section>

        {/* --- ACADEMY FOCUS --- */}
        <section className="py-24 bg-slate-50" id="projects">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The BG THUB Academy Advantage</h2>
              <p className="text-slate-500 font-medium max-w-xl mx-auto">We bridge the gap between classroom theory and industry reality.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real Production Code",
                  desc: "Learn to build apps that actually go live, handling real users and real edge cases.",
                  icon: <Terminal className="w-6 h-6" />,
                  color: "bg-slate-900"
                },
                {
                  title: "Modern Tech Stack",
                  desc: "Master Next.js, Tailwind CSS, TypeScript, and AI integration — the stack of the future.",
                  icon: <Code2 className="w-6 h-6" />,
                  color: "bg-emerald-600"
                },
                {
                  title: "Mentorship",
                  desc: "Get direct feedback from senior engineers who build production apps daily.",
                  icon: <Users className="w-6 h-6" />,
                  color: "bg-blue-600"
                }
              ].map((service, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl hover:shadow-blue-500/5 group">
                  <div className={`w-12 h-12 rounded-2xl ${service.color} text-white flex items-center justify-center mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY IT MATTERS --- */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-8">
                  From Student to <br />
                  <span className="text-blue-600 italic">Industry-Ready</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Portfolio That Stands Out", desc: "Showcase real projects, not just course certificates." },
                    { title: "Collaborative Learning", desc: "Work in teams using Git, Slack, and agile methodologies." },
                    { title: "AI-Powered Learning", desc: "Learn how to use AI tools to code faster and smarter." },
                    { title: "Direct Placement Path", desc: "Top performers get interviewed for roles at BG THUB and our partners." }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">{benefit.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                 <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                       <Star className="w-48 h-48 text-amber-400" />
                    </div>
                    <div className="relative z-10">
                       <h3 className="text-2xl font-black mb-6">Build the Next RideXe?</h3>
                       <p className="text-slate-400 mb-8 font-medium">We don&apos;t teach you how to code; we teach you how to build products that people use.</p>
                       <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm font-bold text-emerald-400">
                             <Terminal size={16} /> <span>Live Deployment</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm font-bold text-blue-400">
                             <Cpu size={16} /> <span>AI Integration</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm font-bold text-purple-400">
                             <Code2 size={16} /> <span>Clean Architecture</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        <StudentAcademy />

        {/* --- CTA SECTION --- */}
        <section className="py-24 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-blue-600 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-500/40">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
                Ready to Start Your <br />
                <span className="italic">Career Journey?</span>
              </h2>
              <p className="text-blue-100 text-lg font-medium mb-12 max-w-xl mx-auto">
                Join BG THUB Academy and transform from a student to a professional software engineer.
              </p>
              <Link 
                href="/academy-apply" 
                className="inline-flex px-10 py-5 bg-white text-blue-700 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all shadow-xl flex items-center gap-3 group"
              >
                Apply Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
