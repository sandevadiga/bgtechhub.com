import React from 'react';
import {
    Link as LinkIcon,
    MoveLeft,
    MoveRight,
    MessageCircle,
    ArrowUpRight
} from 'lucide-react';
import {
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaFacebook as Facebook
} from 'react-icons/fa6';

const RidexeLandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
            {/* Navigation */}
            <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                        <span className="text-white font-bold text-2xl">R</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">Ridexe</span>
                </div>

                <div className="hidden md:flex items-center bg-gray-50/80 backdrop-blur-md rounded-full px-8 py-3 shadow-sm border border-gray-100 gap-8">
                    {['Services', 'Our Work', 'Achievements', 'FAQs', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <button className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full flex items-center gap-3 hover:bg-black transition-all group shadow-lg shadow-black/10">
                    <span className="font-medium">Book a Call</span>
                    <span className="bg-white/10 rounded-full p-1 group-hover:bg-blue-600 transition-colors">
                        <ArrowUpRight size={14} />
                    </span>
                </button>
            </nav>

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-8 pt-12 md:pt-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <div className="flex items-center gap-2 text-sm">
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Our Work
                            </span>
                            <span className="text-gray-300 font-light">/</span>
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[10px]">
                                Ridexe
                            </span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-slate-900">
                                One App.<br />
                                <span className="text-blue-600 italic">Every Ride.</span><br />
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
                                        {/* Avatar Placeholder */}
                                        <div className="w-full h-full bg-[#1e293b] flex items-end justify-center">
                                            <div className="w-8 h-8 rounded-full bg-slate-500 mb-[-4px]" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl text-slate-900">Narasimha Reddy</h4>
                                    <p className="text-blue-600 font-medium text-sm">CEO, TFS</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Sharing & Navigation Bar */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <div className="flex items-center gap-4 border-r pr-6 border-gray-100">
                                <LinkIcon size={20} className="text-slate-400 cursor-pointer hover:text-blue-600 transition-colors" />
                                <div className="flex items-center gap-3">
                                    <MoveLeft size={22} className="text-slate-300 cursor-pointer hover:text-slate-900 transition-colors" />
                                    <MoveRight size={22} className="text-slate-900 cursor-pointer hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                            <div className="flex items-center gap-5 text-slate-400">
                                <Twitter size={20} className="cursor-pointer hover:text-sky-500 transition-colors" />
                                <Linkedin size={20} className="cursor-pointer hover:text-blue-700 transition-colors" />
                                <MessageCircle size={20} className="cursor-pointer hover:text-emerald-500 transition-colors" />
                                <Facebook size={20} className="cursor-pointer hover:text-blue-800 transition-colors" />
                                <span className="font-black text-xl cursor-pointer hover:text-orange-600 transition-colors">r/</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Banner Section */}
                    <div className="flex-1 w-full lg:max-w-[580px]">
                        <div className="relative group w-full aspect-[16/9] rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-[#801b2a] flex items-center p-8 md:p-12 text-white">
                                <div className="z-10 relative">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <span key={i} className="text-white/20 text-xl font-light">«</span>
                                        ))}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                        1<sup className="text-xl">st</sup> Indian<br />
                                        Aggregator (DSA)
                                    </h2>
                                    <div className="flex items-center gap-4">
                                        <button className="bg-white text-[#801b2a] px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-100 transition-all active:scale-95">
                                            Join Now
                                        </button>
                                        <p className="text-[10px] md:text-xs opacity-70 font-medium leading-relaxed uppercase tracking-wider">
                                            Financial Services<br />with Subscription
                                        </p>
                                    </div>
                                </div>

                                {/* Brand Cutout Area */}
                                <div className="absolute right-0 top-0 h-full w-[38%] bg-gray-50 rounded-l-[110px] flex flex-col items-center justify-center">
                                    <div className="text-[#801b2a] text-center">
                                        <div className="flex justify-center mb-1">
                                            <div className="w-12 h-12 border-4 border-[#801b2a] flex items-center justify-center font-black text-2xl">
                                                T
                                            </div>
                                        </div>
                                        <div className="font-black text-5xl tracking-tighter mb-1">TFS</div>
                                        <div className="text-[8px] font-bold tracking-[0.2em] uppercase leading-tight opacity-80">
                                            Thoshika Financial<br />Services Pvt Ltd
                                        </div>
                                    </div>

                                    {/* Visual accents */}
                                    <div className="absolute top-8 right-8 flex flex-col gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#801b2a]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#801b2a]/30" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#801b2a]/30" />
                                    </div>

                                    <div className="absolute bottom-8 flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-[#801b2a]/10" />
                                        <div className="w-2 h-2 rounded-full bg-[#801b2a]/40" />
                                        <div className="w-2 h-2 rounded-full bg-[#801b2a]" />
                                    </div>
                                </div>

                                {/* Grid Overlay Pattern */}
                                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                    <div className="grid grid-cols-4 gap-2">
                                        {[...Array(12)].map((_, i) => (
                                            <div key={i} className="w-1 h-1 bg-white rounded-full" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default RidexeLandingPage;