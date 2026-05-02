"use client"
// UI Icons from Lucide
import {
    ArrowUpRight,
    ClipboardList,
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
    Share2,
    User,
    Users,
    X
} from 'lucide-react';
import Link from 'next/link'; // Standard Next.js navigation
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import SocialFlipButton from '@/components/ui/social-flip-button';
import { useState } from 'react';

import {
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaFacebook as Facebook,
    FaWhatsapp as WhatsApp
} from 'react-icons/fa6';
import Navbar from '@/components/Navbar';

const ProtaskLandingPage = () => {

    const shareLinks = [
        { name: 'X', icon: <Twitter size={18} fill="currentColor" />, url: 'https://twitter.com' },
        { name: 'LinkedIn', icon: <Linkedin size={18} fill="currentColor" />, url: 'https://linkedin.com' },
        { name: 'WhatsApp', icon: <MessageCircle size={18} />, url: 'https://wa.me/yournumber' },
        { name: 'Facebook', icon: <Facebook size={18} fill="currentColor" />, url: 'https://facebook.com' },
        { name: 'Reddit', icon: <Share2 size={18} />, url: 'https://reddit.com' }
    ];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-sm mt-4 mb-10">
                            <span className="bg-emerald-50 text-[#00C752] px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                our Work
                            </span>
                            <span className="text-gray-300 font-light">/</span>
                            <span className="bg-[#00C752] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Protask
                            </span>
                        </div>

                        <div className="flex-1 flex justify-start items-center gap-3">
                            <Link href="/">
                                {/* Changed h-8 to h-12 */}
                                <img src="/assets/images/protask.png" alt="Logo" className="h-20 w-auto cursor-pointer" />
                            </Link>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[0.95] tracking-tighter text-slate-900">
                                <span> Smarter Task </span> <br />
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
                    <div className="flex-1 w-full relative mt-20">
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
                <div className="flex flex-col lg:flex-row gap-12 items-start relative">

                    {/* LEFT COLUMN: Slimmer About (20%) */}
                    <div className="lg:w-[20%] lg:sticky lg:top-32 space-y-6">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">About</p>

                            {/* Horizontal line with little gray color */}
                            <div className="w-50 h-[1.5px] bg-gray-200 mb-6" />

                            <Link href="https://protask.in" target="_blank">
                                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 group cursor-pointer hover:text-[#00C752] transition-colors">
                                    Protask
                                    <LinkIcon
                                        size={18}
                                        className="text-gray-400 group-hover:text-[#00C752] transition-colors"
                                    />
                                </h3>
                            </Link>

                            <p className="text-xs text-gray-500 leading-relaxed">
                                Protask is India's premier smart mobility aggregator, centralizing transport comparison,
                                local events, and AI-driven trip planning into one seamless ecosystem.
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">HQ</p>
                            <p className="text-sm text-slate-900 font-semibold">Bangalore India</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Industry</p>
                            <p className="text-sm text-slate-900 font-semibold leading-tight">IT Industry</p>
                        </div>
                    </div>

                    {/* MIDDLE COLUMN: Expanded Content (60%) */}
                    <div className="lg:w-[60%] space-y-20">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-slate-900">
                                Smarter Task & <br />
                                <span className="text-gray-400">Workflow Management</span>
                            </h2>
                            <div className="w-full h-px bg-gray-100" />

                            {/* The Challenge */}
                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-slate-900">The Challenge</h3>
                                <div className="space-y-2 text-lg text-gray-500 leading-relaxed">
                                    <p>
                                        When we analyzed platforms like Protask, one thing was clear:

                                        Most businesses were struggling with fragmented workflows — multiple tools, scattered communication, and zero real-time visibility.

                                        Teams were managing tasks via emails, spreadsheets, and chats
                                        Deadlines were slipping due to lack of clarity
                                        Collaboration wasn’t structured or scalable
                                        Founders had no single source of truth for execution
                                    </p>

                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-slate-900">How BG Thub Delivered</h3>
                                <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                                    <p>At BG Thub, we didn’t just build a tool — we built a complete execution ecosystem across both web and mobile.</p>
                                    <p>
                                        Our approach was simple but powerful:

                                        Unified Platform
                                        Everything — tasks, communication, files, and tracking — lives in one place
                                        Real-Time Collaboration Engine
                                        Teams can assign, track, and update tasks instantly without switching tools
                                        Scalable Architecture
                                        Designed for startups → enterprises, ensuring performance at scale
                                        Mobile-First Execution
                                        Because modern teams don’t work from desks — they work from anywhere
                                        Customization Layer
                                        Unlike rigid tools, we built flexibility into workflows so businesses don’t need to adapt to software — the software adapts to them
                                    </p>

                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-slate-900"> <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-slate-900">Why BG Thub</h3>

                                </div></h3>
                                <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                                    <p>At BG Thub, we didn’t just build a tool — we built a complete execution ecosystem across both web and mobile.</p>
                                    <p>
                                        Our approach was simple but powerful:

                                        Unified Platform
                                        Everything — tasks, communication, files, and tracking — lives in one place
                                        Real-Time Collaboration Engine
                                        Teams can assign, track, and update tasks instantly without switching tools
                                        Scalable Architecture
                                        Designed for startups → enterprises, ensuring performance at scale
                                        Mobile-First Execution
                                        Because modern teams don’t work from desks — they work from anywhere
                                        Customization Layer
                                        Unlike rigid tools, we built flexibility into workflows so businesses don’t need to adapt to software — the software adapts to them
                                    </p>

                                </div>
                            </div>


                            <div className="space-y-2">
                                <h3 className="text-3xl font-bold text-slate-900"> <div className="space-y-8">
                                    <h3 className="text-3xl font-bold text-slate-900">What This Project Proves</h3>

                                </div></h3>
                                <div className="space-y-6 text-lg text-gray-500 leading-relaxed">
                                    <p>This project is more than just a delivery — it’s proof of capability:</p>
                                    <p>
                                        BG Thub can build SaaS-grade platforms (web + mobile) from scratch
                                        We understand real business problems, not just technical requirements
                                        We can compete with — and improve upon — existing global tools
                                        Most importantly, we can turn an idea into a scalable, revenue-ready product
                                    </p>

                                </div>
                            </div>




                        </div>
                    </div>

                    {/* RIGHT COLUMN: Slimmer Services & CTA (20%) */}
                    <div className="lg:w-[20%] lg:sticky lg:top-32 space-y-8">
                        {/* Services Section */}
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-2">
                                Services Offered
                            </p>
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
            </section>
            <Footer />
        </div>
    );
};

export default ProtaskLandingPage;