"use client"

import React from 'react';
import {
    Link as LinkIcon,
    MoveLeft,
    MoveRight,
    MessageCircle,
    ArrowUpRight,
    UserCircle2,
    Home,
    Search,
    Ticket,
    Tv2
} from 'lucide-react';
import {
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaFacebook as Facebook
} from 'react-icons/fa6';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

import SocialFlipButton from "@/components/ui/social-flip-button";

const RidexeLandingPage = () => {

    const router = useRouter();

    const handleBookingClick = () => {
        // Navigates to the route matching your file structure
        router.push('/work/booking');
    };
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl">R</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">Ridexe</span>
                </div>

                <div className="hidden md:flex items-center bg-gray-50/80 backdrop-blur-md rounded-full px-8 py-3 shadow-sm border border-gray-100 gap-8">
                    {['About', 'Services', 'Our Work', 'Academy', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-sm font-semibold text-gray-600 hover:text-emerald-600 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    onClick={handleBookingClick}
                    className="group relative bg-[#0f0f0f] text-white px-8 py-4 rounded-full flex items-center gap-4 transition-all duration-500 hover:shadow-[0_15px_30px_-10px_rgba(0,199,82,0.3)] hover:-translate-y-0.5 active:scale-95"
                >
                    {/* Button Text */}
                    <span className="font-bold text-sm uppercase tracking-[0.15em] relative z-10">
                        Book a call
                    </span>

                    {/* Icon Container */}
                    <span className="relative z-10 bg-white/5 border border-white/10 rounded-full p-2 group-hover:bg-[#00C752] group-hover:border-[#00C752] transition-all duration-500 ease-out">
                        <ArrowUpRight
                            size={16}
                            className="group-hover:rotate-45 transition-transform duration-500"
                        />
                    </span>

                    {/* Subtle Background Glow on Hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00C752]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 pt-12 md:pt-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Our Work
                            </span>
                            <span className="text-gray-300 font-light">/</span>
                            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Ridexe
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">
                                One App.<br />
                                <span className="text-emerald-600 italic">Every Ride.</span><br />
                                Every Journey.
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                                Compare taxi prices, discover live events, plan trips with AI,
                                and explore cities — all in one smart travel app.
                            </p>
                        </div>

                        {/* Speaker/CEO Section */}
                        <div className="space-y-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">A conversation with:</p>
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-[2px]">
                                    <div className="w-full h-full bg-slate-200 rounded-[14px] flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-[#1e293b] flex items-end justify-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-500 mb-[-4px]" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900">Pavan Kumar</h4>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <SocialFlipButton />
                        </div>
                    </div>

                    {/* Right Mobile Profile Section */}
                    <div className="flex-1 w-full lg:max-w-[400px] flex justify-center lg:justify-end">
                        <div className="relative w-[320px] h-[640px] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(16,185,129,0.15)] overflow-hidden border-[10px] border-slate-900">

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
                    <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-12">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">About</p>
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                Ridexe <LinkIcon size={16} className="text-gray-300" />
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Ridexe is India's premier smart mobility aggregator, centralizing transport comparison,
                                local events, and AI-driven trip planning into one seamless ecosystem.
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">HQ</p>
                            <p className="text-sm text-slate-900 font-semibold">Hyderabad, India</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Industry</p>
                            <p className="text-sm text-slate-900 font-semibold">Travel Tech & Smart Mobility</p>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Scrolling Content */}
                    <div className="lg:w-2/4 space-y-16">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                "One App. Every Ride. Every Journey: Setting the New Standard for Indian Smart Travel"
                            </h2>
                            <div className="w-full h-px bg-gray-100" />

                            {/* The Challenge */}
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold">The Challenge</h3>
                                <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                                    <p>
                                        The travel industry in India was fragmented, forcing users to jump between multiple apps to compare cab prices, check schedules, and discover local events. RideXe was envisioned to solve this "app fatigue."
                                    </p>
                                    <p>
                                        The goal was to build a smart, all-in-one travel ecosystem. A platform that doesn't just compare taxi fares in real-time, but also integrates AI-driven trip planning, live event discovery, and immersive travel vlogs—all delivered through a premium, glassmorphic interface that feels as smooth as the journey itself.
                                    </p>
                                </div>
                            </div>

                            {/* How It Works - New Section */}
                            <div className="max-w-5xl mx-auto space-y-12 px-4">
                                {/* Header */}
                                <div className="text-center">
                                    <h3 className="text-3xl font-bold text-black">How It Works</h3>
                                    <p className="text-gray-500 mt-2">Your journey, simplified in four easy steps.</p>
                                </div>

                                {/* Two-Column Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { title: "Enter Destination", desc: "Enter destination and choose vehicle type." },
                                        { title: "Compare Prices", desc: "RideXe compares prices and availability instantly." },
                                        { title: "AI Suggestions", desc: "AI suggests events, places, and travel plans." },
                                        { title: "Book & Explore", desc: "Book your ride and explore with confidence." }
                                    ].map((step, index) => (
                                        <div
                                            key={index}
                                            className="group flex flex-col justify-center space-y-4 p-10 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-black tracking-[0.2em] text-blue-600 uppercase">
                                                    Step 0{index + 1}
                                                </span>
                                                {/* Optional: Add a subtle icon or circle here for extra flair */}
                                                <div className="h-1 w-12 bg-gray-100 group-hover:bg-blue-100 transition-colors duration-300 rounded-full" />
                                            </div>

                                            <h4 className="text-2xl font-bold text-gray-900">{step.title}</h4>
                                            <p className="text-gray-500 leading-relaxed text-base">
                                                {step.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>

                    {/* RIGHT COLUMN: Fixed Services */}
                    <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-12">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Services Offered</p>
                            <ul className="space-y-4 text-sm font-semibold text-slate-900 mb-10">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Web Development
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    App Development
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Landing Page
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    UI/UX Design
                                </li>
                            </ul>

                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Connect</p>
                            <div className="flex items-center gap-4 text-slate-400 bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-10">
                                <Twitter size={16} className="cursor-pointer hover:text-sky-500 transition-colors" />
                                <Linkedin size={16} className="cursor-pointer hover:text-emerald-700 transition-colors" />
                                <Facebook size={16} className="cursor-pointer hover:text-emerald-800 transition-colors" />
                            </div>

                            {/* RideXe Featured Project */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Featured Platform</p>

                                <a
                                    href="https://ridexe.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border-2 border-slate-900 text-slate-900 font-black text-sm uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 active:scale-95"
                                >
                                    View Website
                                    <ArrowUpRight size={16} />
                                </a>
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