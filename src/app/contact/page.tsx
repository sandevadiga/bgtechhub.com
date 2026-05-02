import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: "Contact BG THUB — Book Your Free Consultation",
  description: "Get in touch with BG THUB for custom web development, mobile apps, and AI solutions. Based in Bengaluru, India.",
  keywords: ["contact BG THUB", "web development Bengaluru", "hire tech partner", "BG THUB contact"]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32">
        <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-20 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">Contact Us</span>
           </div>
           <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 mb-6">
             Let&apos;s Build Something <br />
             <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent italic">Extraordinary</span>
           </h1>
           <p className="max-w-xl mx-auto text-slate-500 font-medium">Have a vision? We have the engineering team to make it a reality.</p>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
