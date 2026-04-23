"use client"

import {
    Link as LinkIcon,
    ArrowUpRight,
    LayoutDashboard,
    ClipboardList,
    Users,
    User,
    LogOut,
    MoreHorizontal
} from 'lucide-react';
import {
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaFacebook as Facebook
} from 'react-icons/fa6';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import SocialFlipButton from '@/components/ui/social-flip-button';

const ProtaskLandingPage = () => {
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
                    <div className="w-10 h-10 bg-[#00C752] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl">P</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">Protask</span>
                </div>

                <div className="hidden md:flex items-center bg-gray-50/80 backdrop-blur-md rounded-full px-8 py-3 shadow-sm border border-gray-100 gap-8">
                    {['Product', 'Features', 'Industries', 'Pricing'].map((item) => (
                        <a key={item} href="#" className="text-sm font-semibold text-gray-600 hover:text-[#00C752] transition-colors">
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
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-emerald-50 text-[#00C752] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                our Work
                            </span>
                            <span className="text-gray-300 font-light">/</span>
                            <span className="bg-[#00C752] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Protask
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tighter text-slate-900">
                                Smarter Task &
                                <span className="text-slate-400">Task</span><br />
                                <span className="text-[#00C752] italic font-serif">Distribution.</span><br />
                            </h1>
                            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                                Real-time technician tracking, automated task assignment, and
                                comprehensive workflow overviews for modern teams.
                            </p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="pt-6">
                                <SocialFlipButton />
                            </div>

                        </div>
                    </div>

                    {/* Right Dashboard Section (Replacing Mobile) */}
                    <div className="flex-1 w-full relative">
                        {/* Decorative Background Glow */}
                        <div className="absolute -inset-4 bg-[#00C752]/10 blur-3xl rounded-full" />

                        <div className="relative bg-white rounded-[32px] shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden flex flex-col h-[500px]">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                </div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">ProTask — Dashboard</span>
                                <MoreHorizontal size={16} className="text-slate-300" />
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                {/* Sidebar Mockup */}
                                <div className="w-48 border-r border-slate-50 p-4 space-y-2 hidden md:block">
                                    <div className="flex items-center gap-3 px-4 py-2 bg-[#00C752] text-white rounded-xl shadow-lg shadow-[#00C752]/20">
                                        <LayoutDashboard size={18} />
                                        <span className="text-sm font-bold">Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                                        <ClipboardList size={18} />
                                        <span className="text-sm font-bold">Tasks</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                                        <Users size={18} />
                                        <span className="text-sm font-bold">Technicians</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-colors">
                                        <User size={18} />
                                        <span className="text-sm font-bold">Profile</span>
                                    </div>
                                    <div className="pt-20 flex items-center gap-3 px-4 py-2 text-slate-400">
                                        <LogOut size={18} />
                                        <span className="text-sm font-bold">Logout</span>
                                    </div>
                                </div>

                                {/* Dashboard Content */}
                                <div className="flex-1 bg-[#F8FAFC] p-6 overflow-y-auto">
                                    <h3 className="text-xl font-black text-slate-900 mb-6">Dashboard</h3>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        {[
                                            { label: "Pending Tasks", val: "9" },
                                            { label: "Available Techs", val: "6" },
                                            { label: "Unassigned", val: "10" },
                                            { label: "Total Tasks", val: "29" }
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-[#4F75A2] p-4 rounded-2xl text-white shadow-sm">
                                                <p className="text-[10px] font-bold opacity-70 uppercase mb-1">{stat.label}</p>
                                                <p className="text-3xl font-black">{stat.val}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Overview Chart Mockup */}
                                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-sm font-bold text-slate-900">Overview</span>
                                            <div className="flex gap-1">
                                                <span className="px-2 py-1 bg-slate-100 text-[10px] font-bold rounded-md">Weekly</span>
                                                <span className="px-2 py-1 bg-[#00C752] text-white text-[10px] font-bold rounded-md">Monthly</span>
                                            </div>
                                        </div>
                                        <div className="flex items-end justify-between gap-2 h-24 px-2">
                                            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                                <div key={i} className="flex gap-1 items-end w-full">
                                                    <div className="w-full bg-[#4F75A2] rounded-t-sm" style={{ height: `${h}%` }} />
                                                    <div className="w-full bg-[#94B3D8] rounded-t-sm" style={{ height: `${h - 20}%` }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>



            <section className="max-w-7xl mx-auto px-8 py-20 border-t border-gray-100">
                {/* Using items-start is crucial for sticky to work */}
                <div className="flex flex-col lg:flex-row gap-16 items-start relative">

                    {/* LEFT COLUMN: Fixed About */}
                    <div className="lg:w-1/4 lg:sticky lg:top-32 space-y-12">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">About</p>
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                Protask <LinkIcon size={16} className="text-gray-300" />
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Protask is India's premier smart mobility aggregator, centralizing transport comparison,
                                local events, and AI-driven trip planning into one seamless ecosystem.
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">HQ</p>
                            <p className="text-sm text-slate-900 font-semibold">Bangalore India</p>
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
                                Smarter Task &
                                Workflow Management
                            </h2>
                            <div className="w-full h-px bg-gray-100" />

                            {/* The Challenge */}
                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-slate-900">The Challenge</h3>
                                <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                                    <p>
                                        Field service management is often plagued by fragmented communication, where managers lose track of technician locations and task statuses. **PROtask** was engineered to eliminate this operational "blind spot" by centralizing workforce coordination into a single, high-velocity dashboard.
                                    </p>
                                    <p>
                                        The goal was to build a robust, real-time ecosystem that doesn't just list tasks, but intelligently manages them. We focused on creating a platform that integrates live technician availability, automated job unassignment logic, and performance overview analytics—all delivered through a premium, glassmorphic interface that maintains clarity even during peak service hours.
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

                            {/* Brand Link Section */}
                            <div className="space-y-4">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Launch</p>
                                <a
                                    href="https://protask.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between w-full px-5 py-4 bg-slate-900 text-white rounded-2xl font-bold group hover:bg-[#00C752] transition-all duration-300 shadow-lg shadow-slate-200"
                                >
                                    <span>protask.in</span>
                                    <div className="bg-white/10 rounded-lg p-1 group-hover:bg-black/20 transition-colors">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </a>
                            </div>

                            <div className="mt-12 space-y-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Connect</p>
                                    <div className="flex items-center gap-4 text-slate-400 bg-gray-50 p-4 rounded-2xl border border-gray-100 mb-6">
                                        <Twitter size={16} className="cursor-pointer hover:text-sky-500 transition-colors" />
                                        <Linkedin size={16} className="cursor-pointer hover:text-emerald-700 transition-colors" />
                                        <Facebook size={16} className="cursor-pointer hover:text-emerald-800 transition-colors" />
                                    </div>
                                </div>

                                {/* Explicit View Website Button */}
                                <a
                                    href="https://protask.in"
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

export default ProtaskLandingPage;