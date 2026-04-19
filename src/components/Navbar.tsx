"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Students", href: "#student" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled
        ? "py-3 bg-white/70 backdrop-blur-xl border-b border-black/[0.05]"
        : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* LEFT: Logo Section */}
        <div className="flex-1 flex justify-start items-center gap-3">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="p-1  group-hover:border-green-500/30 transition-colors">
              <img
                src="/assets/images/logo.png"
                alt="BG THUB Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* MIDDLE: Nav Links */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${activeLink === item.href
                  ? "text-green-600"
                  : "text-slate-600 hover:text-black"
                  }`}
                onClick={() => setActiveLink(item.href)}
              >
                {item.name}
                {activeLink === item.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-500"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT: Button */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:scale-95"
          >
            <Sparkles size={12} className="hidden sm:block" />
            Get Started
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-800 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-black/[0.05] overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-slate-600 hover:text-green-600 tracking-widest uppercase flex justify-between items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name} <ArrowRight size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}