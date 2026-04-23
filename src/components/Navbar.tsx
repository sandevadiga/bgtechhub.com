"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // Import the router
import Link from "next/link"; // Import Link for internal navigation

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about");
  const router = useRouter(); // Initialize router

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "OurWork", href: "#work" },
    { name: "Academy", href: "#academy" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled
        ? "py-3 bg-white/70 backdrop-blur-xl border-b border-black/[0.05]"
        : "py-4 bg-transparent"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Wrapped in Link to return home */}
        <div className="flex-1 flex justify-start items-center gap-3">
          <Link href="/">
            <img src="/assets/images/logo.png" alt="Logo" className="h-8 w-auto cursor-pointer" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${activeLink === item.href
                  ? "text-green-600"
                  : "text-slate-600 hover:text-black"
                  }`}
              >
                {item.name}
                {activeLink === item.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex-1 flex justify-end items-center gap-4">
          <button
            onClick={() => router.push("/work/booking")} // Navigate to page
            className="bg-green-500 hover:bg-green-600 transition-colors text-white px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest cursor-pointer shadow-lg shadow-green-500/20"
          >
            Book a call
          </button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Optional logic update) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[10px] font-bold uppercase tracking-widest text-slate-600"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}