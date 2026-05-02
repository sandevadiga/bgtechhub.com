"use client"

import React, { useState } from 'react';


import {
    ArrowUpRight,
    ClipboardList,
    Home,
    LayoutDashboard,
    LinkIcon,
    LogOut,
    Link as LucideLinkIcon,
    Menu,
    MessageCircle,
    MoreHorizontal,
    MoveLeft,
    MoveRight,
    MoveLeft as NavLeft,
    MoveRight as NavRight,
    Search,
    Share2,
    Ticket,
    Tv2,
    User,
    UserCircle2,
    Users,
    X
} from 'lucide-react';
import Link from 'next/link';
import {
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaFacebook as Facebook
} from 'react-icons/fa6';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

import SocialFlipButton from "@/components/ui/social-flip-button";
import Navbar from '@/components/Navbar';

const RidexeLandingPage = () => {

    const shareLinks = [
        { name: 'X', icon: <Twitter size={18} fill="currentColor" />, url: 'https://twitter.com' },
        { name: 'LinkedIn', icon: <Linkedin size={18} fill="currentColor" />, url: 'https://linkedin.com' },
        { name: 'WhatsApp', icon: <MessageCircle size={18} />, url: 'https://wa.me/yournumber' },
        { name: 'Facebook', icon: <Facebook size={18} fill="currentColor" />, url: 'https://facebook.com' },
        { name: 'Reddit', icon: <Share2 size={18} />, url: 'https://reddit.com' }
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();


    const handleBookingClick = () => {
        // Navigates to the route matching your file structure
        router.push('/work/booking');
    };
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 pt-12 md:pt-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="border border-emerald-100 bg-transparent text-emerald-700 hover:bg-emerald-200 hover:text-black px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px] transition-colors duration-300 cursor-default">
                                Our Work
                            </span>
                            <span className="text-gray-300 font-light">/</span>
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Ridexe
                            </span>
                        </div>

                        <div className="flex items-center gap-2 group cursor-pointer -mb-2">
                            <div className="w-20 h-20 bg-emerald-600 rounded-xl flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12">
                                <img
                                    src="/assets/images/ridexe1.png"
                                    alt="Ridexe Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight text-slate-900">
                                One App.<br />
                                <span className="text-green-600 italic">Every Ride.</span><br />
                                Every Journey.
                            </p>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                                Compare taxi prices, discover live events, plan trips with AI,
                                and explore cities — all in one smart travel app.
                            </p>
                        </div>

                        {/* Speaker/CEO Section */}

                        <div className="pt-6">
                            <SocialFlipButton />
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 w-full lg:max-w-[600px] flex justify-center lg:justify-end mt-16">
                        <div className="relative w-full rounded-3xl shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] overflow-hidden">
                            <img
                                src="/assets/images/ridexe2.jpeg"
                                alt="Ridexe App Preview"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Content Section - Challenge Details */}
            <section className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-100">
                {/* Using items-start is crucial for sticky to work */}
                <div className="flex flex-col lg:flex-row gap-16 items-start relative">

                    {/* LEFT COLUMN: Fixed About */}
                    <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-6">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                                About
                            </p>

                            <hr className="border-gray-200" />


                            <a
                                href="https://ridexe.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:opacity-80 transition-opacity w-fit"
                            >
                                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                    Ridexe <LinkIcon size={16} className="text-gray-300" />
                                </h3>
                            </a>

                            <p className="text-sm text-gray-500 leading-relaxed">
                                Ridexe is India's premier smart mobility aggregator, centralizing transport comparison,
                                local events, and AI-driven trip planning into one seamless ecosystem.
                            </p>

                            <hr className="border-gray-200" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">HQ</p>
                            <p className="text-sm text-slate-900 font-semibold">Karnataka Bangalore, India</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Industry</p>
                            <p className="text-sm text-slate-900 font-semibold">IT Industry</p>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Scrolling Content */}
                    <div className="lg:w-2/4 space-y-12">
                        <div className="space-y-10">
                            {/* Top Tagline / Eyebrow Header */}
                            <h2 className="text-xs md:text-sm font-semibold uppercase tracking-widest text-gray-400 leading-tight">
                                "One App. Every Ride. Every Journey: Setting the New Standard for Indian Smart Travel"
                            </h2>

                            <div className="w-full h-px bg-gray-100" />

                            {/* The Challenge */}
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">The Challenge</h3>
                                <div className="space-y-2 text-base text-gray-500 leading-relaxed">
                                    <p>Teams were managing tasks via emails, spreadsheets, and chats</p>
                                    <p>Deadlines were slipping due to lack of clarity</p>
                                    <p>Collaboration wasn’t structured or scalable</p>
                                    <p>Founders had no single source of truth for execution</p>
                                </div>
                            </div>

                            {/* How BG Thub Delivered */}
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">How BG Thub Delivered</h3>
                                <div className="space-y-2 text-base text-gray-500 leading-relaxed">
                                    <p><strong>Unified Platform:</strong> Everything — tasks, communication, files, and tracking — lives in one place</p>
                                    <p><strong>Real-Time Collaboration Engine:</strong> Teams can assign, track, and update tasks instantly without switching tools</p>
                                    <p><strong>Scalable Architecture:</strong> Designed for startups → enterprises, ensuring performance at scale</p>
                                    <p><strong>Mobile-First Execution:</strong> Because modern teams don’t work from desks — they work from anywhere</p>
                                    <p><strong>Customization Layer:</strong> Unlike rigid tools, we built flexibility into workflows so software adapts to businesses</p>
                                </div>
                            </div>

                            {/* Why BG Thub */}
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Why BG Thub</h3>
                                <div className="space-y-2 text-base text-gray-500 leading-relaxed">
                                    <p>What sets BG Thub apart is not development — it’s ownership of outcomes</p>
                                    <p>We don’t build “features” → we build business solutions</p>
                                    <p>We focus on ROI, scalability, and long-term impact</p>
                                    <p>We combine product thinking + execution speed</p>
                                </div>
                            </div>

                            {/* What This Project Proves */}
                            <div className="space-y-2">
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">What This Project Proves</h3>
                                <div className="space-y-2 text-base text-gray-500 leading-relaxed">
                                    <p>BG Thub can build SaaS-grade platforms (web + mobile) from scratch</p>
                                    <p>We understand real business problems, not just technical requirements</p>
                                    <p>We can compete with — and improve upon — existing global tools</p>
                                    <p>Most importantly, we can turn an idea into a scalable, revenue-ready product</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Fixed Services */}
                    <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-12">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Services Offered</p>


                            <div className="lg:w-[60%] lg:sticky lg:top-32 space-y-8">
                                {/* Services Section */}
                                <div>

                                    <div className="h-[1px] w-full bg-gray-100 mb-6" />
                                    <ul className="space-y-4 text-[18px] font-semibold text-slate-900">
                                        {['UI/UX', 'Logo Designing', 'Web Development', 'App Development',].map((service) => (
                                            <li key={service} className="hover:text-[#00C752] transition-colors cursor-default">
                                                {service}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Social Media Action Bar */}
                                <div className="flex items-center gap-3 w-fit bg-[#F5F5F5] px-4 py-2.5 rounded-xl border border-gray-200">
                                    {/* Link Icon - Using the alias 'LinkIcon' */}
                                    <a href="#" className="text-black hover:opacity-60 transition-opacity">
                                        <LinkIcon size={18} strokeWidth={2.5} />
                                    </a>

                                    <div className="w-[1px] h-5 bg-gray-300 mx-1" />

                                    {/* Navigation Arrows */}
                                    <div className="flex items-center gap-3">
                                        <MoveLeft size={18} strokeWidth={2.5} className="cursor-pointer text-black hover:-translate-x-1 transition-transform" />
                                        <MoveRight size={18} strokeWidth={2.5} className="cursor-pointer text-black hover:translate-x-1 transition-transform" />
                                    </div>

                                    <div className="w-[1px] h-5 bg-gray-300 mx-1" />

                                    {/* Social Icons with actual links */}
                                    <div className="flex items-center gap-4 px-2">
                                        {shareLinks.map((link) => (
                                            <div key={link.name} className="relative group flex flex-col items-center">
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-black hover:scale-110 transition-transform"
                                                >
                                                    {link.icon}
                                                </a>

                                                {/* Tooltip Box */}
                                                <div className="absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center">
                                                    <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap bg-black shadow-lg rounded-md">
                                                        Share on {link.name}
                                                    </span>
                                                    {/* Little triangle arrow */}
                                                    <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default RidexeLandingPage;