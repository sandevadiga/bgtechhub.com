"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaXTwitter
} from 'react-icons/fa6';
import SocialFlipFootButton from "./ui/social-flip-footer";

const serviceDetails = [
  { name: "Web Development", href: "/web-development" },
  { name: "App Development", href: "/app-development" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "MVP Development", href: "/mvp-development" },
  { name: "For Startups", href: "/for-startups" },
  { name: "For Students", href: "/for-students" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: serviceDetails,
    Products: [
      { name: "RideXe", href: "https://ridexe.com/" },
      { name: "PROtask", href: "https://protask.in/" },
      { name: "LogiGrowth", href: "/work/logigrowth" }
    ],
    Company: [
      { name: "About Us", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Our Work", href: "/#work" },
      { name: "Academy", href: "/for-students" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const SocialIcon = ({ href, icon, label, brandStyles }: { href: string; icon: React.ReactNode; label: string; brandStyles: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-11 h-11 flex items-center justify-center rounded-full text-white transition-all duration-500 hover:-translate-y-1.5 shadow-md hover:shadow-xl ${brandStyles}`}
    >
      {icon}
    </a>
  );

  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

          {/* Brand & Authentic Color Socials */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <Link href="/" className="block w-fit group">
                <img
                  src="/assets/images/bg_thub_logo1.png"
                  alt="BG THUB Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <p className="text-slate-500 max-w-sm leading-relaxed font-medium text-base">
                Building the next generation of digital products from Bengaluru. Websites, apps, and AI solutions — from idea to impact.
              </p>

              <SocialFlipFootButton />

            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] mb-8">
                  {title}
                </h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-slate-500 hover:text-green-600 transition-colors font-semibold text-sm"
                      >
                        {link.name}
                        <ArrowUpRight
                          size={12}
                          className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 text-slate-600 text-[10px] font-black uppercase tracking-widest">
            <p>© {currentYear} BG THUB. ALL RIGHTS RESERVED.</p>
            <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 px-6 py-3 rounded-full border border-emerald-100 bg-white leading-none">
              From Idea to Impact
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}