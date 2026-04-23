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
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
                <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">

                    <div className="flex-1 flex justify-start items-center">
                        <Link href="/">
                            <img src="/assets/images/logo.png" alt="Logo" className="h-8 md:h-9 w-auto cursor-pointer" />
                        </Link>
                    </div>


                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center bg-gray-50/50 rounded-full px-6 py-2 border border-gray-100 gap-6">
                        {['About', 'Services', 'Our Work', 'Academy', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Action Button - Reduced padding/text size */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleBookingClick}
                            className="group relative bg-[#0f0f0f] text-white px-5 py-2.5 rounded-full hidden sm:flex items-center gap-3 transition-all duration-500 hover:shadow-[0_10px_20px_-5px_rgba(0,199,82,0.3)] hover:-translate-y-0.5 active:scale-95"
                        >
                            <span className="font-bold text-[10px] uppercase tracking-[0.15em] relative z-10">
                                Book a call
                            </span>
                            <span className="relative z-10 bg-white/5 border border-white/10 rounded-full p-1.5 group-hover:bg-[#00C752] transition-all duration-500">
                                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
                            </span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-gray-600"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
                        {['About', 'Services', 'Our Work', 'Academy', 'Contact'].map((item) => (
                            <a key={item} href="#" className="text-sm font-bold text-gray-700 hover:text-emerald-600">
                                {item}
                            </a>
                        ))}
                        <button className="bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs uppercase">
                            Book a call
                        </button>
                    </div>
                )}
            </nav>

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
                                <span className="text-emerald-600 italic">Every Ride.</span><br />
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

                    {/* Right Mobile Profile Section */}
                    <div className="flex-1 w-full lg:max-w-[400px] flex justify-center lg:justify-end mt-16">
                        <div className="relative w-[320px] h-[540px] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] overflow-hidden border-[10px] border-slate-900">

                            {/* Top Notch Area */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-2xl z-20" />

                            <div className="h-full flex flex-col pt-12 px-6 bg-[#FCFFFC]">
                                {/* RideXe Logo */}
                                <div className="mb-8">
                                    <span className="text-emerald-900 font-black tracking-tighter text-xl">RIDEXE</span>
                                </div>

                                {/* Profile Avatar Section */}
                                <div className="flex flex-col items-center justify-center space-y-4 mb-8">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full border-2 border-emerald-400 p-1 flex items-center justify-center">
                                            <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                                                <UserCircle2 className="w-20 h-20 text-slate-300" strokeWidth={1} />
                                            </div>
                                        </div>
                                        {/* Active Badge */}
                                        <div className="absolute bottom-2 right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="text-xl font-bold text-slate-900">Santhosh Devadiga</h3>
                                        <p className="text-slate-400 text-sm font-medium">+91 98765 43210</p>
                                    </div>
                                </div>

                                {/* Stats Card */}
                                <div className="bg-[#F4FAF6] rounded-3xl p-6 flex items-center justify-between border border-emerald-100/50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                                            <div className="w-6 h-3 bg-emerald-500 rounded-sm relative">
                                                <div className="absolute -left-1 top-0.5 w-1 h-2 bg-emerald-600 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-emerald-800/50">Total Rides</p>
                                            <p className="text-2xl font-black text-slate-900 leading-none">142</p>
                                        </div>
                                    </div>
                                    <div className="bg-emerald-200/50 px-3 py-1.5 rounded-full">
                                        <span className="text-[10px] font-black text-emerald-700 uppercase">Prime</span>
                                    </div>
                                </div>

                                {/* Bottom Nav Mockup */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-slate-50 px-4 flex justify-around items-center">
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <Home size={20} />
                                        <span className="text-[8px] font-bold uppercase">Home</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <Search size={20} />
                                        <span className="text-[8px] font-bold uppercase">Assist</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <Ticket size={20} />
                                        <span className="text-[8px] font-bold uppercase">Events</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-slate-300">
                                        <Tv2 size={20} />
                                        <span className="text-[8px] font-bold uppercase">Vlogs</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 text-emerald-500">
                                        <div className="bg-emerald-50 p-2 rounded-xl">
                                            <UserCircle2 size={20} />
                                        </div>
                                        <span className="text-[8px] font-bold uppercase">Profile</span>
                                    </div>
                                </div>

                                {/* Screen Indicator */}
                                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-200 rounded-full" />
                            </div>
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
                                        {['Web Development', 'Landing Page', 'UI/UX'].map((service) => (
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