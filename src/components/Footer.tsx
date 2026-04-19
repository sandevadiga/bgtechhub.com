"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t border-slate-200">
      {/* INNER CONTAINER: Narrowed to max-w-5xl */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">

          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">
              BG <span className="text-green-600">THUB</span>
            </span>
            <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
              Building the next generation of digital products. From idea to
              impact — we make it happen with cutting-edge tech.
            </p>

            <div className="flex gap-3">
              {['𝕏', 'in', 'ig', 'gh'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all border border-slate-200 shadow-sm"
                >
                  <span className="font-bold text-xs uppercase">{social}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-8">Services</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#services" className="hover:text-green-600 transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-green-600 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-green-600 transition-colors">AI Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-8">Products</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="https://ridexe.com/" className="hover:text-green-600 transition-colors">RideXe</a></li>
              <li><a href="https://protask.in/" className="hover:text-green-600 transition-colors">PROtask</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#about" className="hover:text-green-600 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-green-600 transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-green-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} BG THUB. All rights reserved.
          </p>

          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-green-700/60 px-5 py-2 rounded-full border border-green-200 bg-green-50">
            From Idea to Impact
          </div>
        </div>
      </div>
    </footer>
  );
}