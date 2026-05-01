"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "OurWork", href: "/#work" },
    { name: "Academy", href: "#academy" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ["about", "services", "work", "academy"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const sectionHrefs = ["about", "services", "work", "academy"];

  // Helper to check if a nav item is active
  const isActive = useCallback(
    (href: string) => {
      // For hash links like /#about or #academy
      const hash = href.replace(/^\//, "").replace(/^#/, "");
      if (sectionHrefs.includes(hash)) {
        return activeSection === hash;
      }
      // For page links like /blog, /contact
      return pathname === href;
    },
    [activeSection, pathname]
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100/50 py-2"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

        {/* Logo Area */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              width={200}
              height={60}
              className="h-11 md:h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - Pill Design */}
        <div className="hidden md:flex items-center bg-white/40 backdrop-blur-md rounded-full px-8 py-2.5 shadow-sm border border-gray-200/50 gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[11px] font-extrabold uppercase tracking-[0.15em] transition-colors pb-1 ${
                  active ? "text-[#00C752]" : "text-slate-600 hover:text-[#00C752]"
                }`}
              >
                {item.name}
                {active && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00C752] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => router.push("/work/booking")}
            className="hidden sm:flex group relative bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full items-center gap-3 transition-all duration-500 hover:shadow-[0_10px_20px_-10px_rgba(0,199,82,0.3)] hover:-translate-y-0.5 active:scale-95"
          >
            <span className="font-bold text-[10px] uppercase tracking-[0.15em] relative z-10">
              Book a call
            </span>
            <span className="relative z-10 bg-white/10 border border-white/10 rounded-full p-1 group-hover:bg-[#00C752] transition-all duration-500">
              <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/90 backdrop-blur-2xl rounded-3xl border border-gray-100 p-6 shadow-2xl flex flex-col gap-4 md:hidden overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-[#00C752] py-2 border-b border-gray-50 last:border-0"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/work/booking");
              }}
              className="mt-4 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest"
            >
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}