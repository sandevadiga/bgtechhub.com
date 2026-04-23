"use client";

import { ArrowUpRight } from "lucide-react";
import {
  FaTwitter as Twitter,
  FaLinkedin as Linkedin,
  FaInstagram as Instagram,
  FaGithub as Github
} from "react-icons/fa6";

import { FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];

  const footerLinks = {
    Services: [
      { name: "App Development", href: "#" },
      { name: "Web Development", href: "#" },
      { name: "AI Solutions", href: "#" },
    ],
    Products: [
      { name: "RideXe", href: "https://ridexe.com/" },
      { name: "PROtask", href: "https://protask.in/" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Work", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };
  const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 transition-all duration-500 hover:text-white hover:bg-[#00C752] hover:border-[#00C752] hover:shadow-[0_10px_20px_-5px_rgba(0,199,82,0.4)] hover:-translate-y-1"
    >
      {icon}
    </Link>
  );

  return (
    <footer className="relative bg-[#fafafa] pt-24 pb-12 overflow-hidden border-t border-slate-200">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Brand Section */}
          <div className="md:col-span-12 lg:col-span-5 space-y-8">
            <div className="flex flex-col gap-6">
              {/* Logo Link */}
              <Link href="/" className="block w-fit group">
                <img
                  src="/assets/images/bg_thub_logo1.png"
                  alt="BG THUB Logo"
                  className="h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <p className="text-slate-500 max-w-sm leading-relaxed font-medium text-lg">
                Building the next generation of digital products. From idea to
                impact — we make it happen with cutting-edge tech.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4 pt-2">
                <SocialIcon
                  href="https://instagram.com/your-profile"
                  icon={<FaInstagram size={18} />}
                  label="Instagram"
                />
                <SocialIcon
                  href="https://wa.me/your-number"
                  icon={<FaWhatsapp size={18} />}
                  label="WhatsApp"
                />
                <SocialIcon
                  href="https://linkedin.com/in/your-profile"
                  icon={<FaLinkedinIn size={18} />}
                  label="LinkedIn"
                />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center text-slate-500 hover:text-green-600 transition-colors font-medium"
                      >
                        {link.name}
                        <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200/60 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
            <p>© {currentYear} BG THUB. All rights reserved.</p>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>

          <div className="group relative cursor-default">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-green-700 px-6 py-2.5 rounded-full border border-green-200 bg-white leading-none flex items-center">
              From Idea to Impact
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}