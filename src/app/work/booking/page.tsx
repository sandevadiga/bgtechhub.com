"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaCalendarCheck, FaChevronDown, FaChevronLeft,
    FaChevronRight, FaClock, FaGlobe, FaArrowLeft,
    FaArrowRight
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// ─── BookingForm Sub-Component ───────────────────────────────────────────────
function BookingForm({
    setStep,
    options,
    services,
    budgetOptions,
    selectedDate,
    selectedTime
}: {
    setStep: (n: number) => void;
    options: string[];
    services: string[];
    budgetOptions: string[];
    selectedDate: Date;
    selectedTime: string;
}) {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        workEmail: "",
        phoneNumber: "",
        guests: "",
        serviceInterest: "",
        vision: "",
        specificService: "Full-stack Web Dev",
        projectStatus: "Concept / Idea",
    });

    const [selected, setSelected] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [selectedBudget, setSelectedBudget] = useState("");

    const [isHearOpen, setIsHearOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    const hearRef = useRef<HTMLDivElement>(null);
    const servicesRef = useRef<HTMLDivElement>(null);
    const budgetRef = useRef<HTMLDivElement>(null);

    const inp = "w-full text-slate-900 placeholder:text-slate-400";

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (hearRef.current && !hearRef.current.contains(e.target as Node)) setIsHearOpen(false);
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setIsServicesOpen(false);
            if (budgetRef.current && !budgetRef.current.contains(e.target as Node)) setIsBudgetOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        // This formats the date to 'YYYY-MM-DD' or 'Month Day, Year' 
        // to avoid ISO/UTC conversion issues.
        const dateOnly = selectedDate.toLocaleDateString('en-CA'); // Outputs: YYYY-MM-DD



        const payload = {
            // 1. Spread formData first
            ...formData,

            // 2. Explicitly override or add the custom state values
            source: selected,
            serviceInterest: selectedService || formData.serviceInterest,
            budget: selectedBudget, // This ensures the dropdown value is used
            selectedDate: dateOnly,
            selectedTime: selectedTime,
        };

        try {
            const res = await fetch("/api/contact/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStep(3);
            } else {
                const err = await res.json();
                alert(`Error: ${err.details || "Failed to submit"}`);
            }
        } catch (err) {
            console.error("Submission Error:", err);
            alert("Network error. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const dropdownBase = "w-full border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none flex justify-between items-center text-left";
    const dropdownMenu = "absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2 animate-in fade-in zoom-in-95 duration-200";
    const dropdownItem = "w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#00C752] transition-colors";

    return (
        <form className="space-y-12 pb-24" onSubmit={handleSubmit}>
            {/* Personal & Contact Info */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">Full Name *</label>
                    <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className={`${inp} border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none`} placeholder="E.g. Elon Musk" />
                </div>
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">Work Email *</label>
                    <input name="workEmail" value={formData.workEmail} onChange={handleInputChange} required type="email" className={`${inp} border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none`} placeholder="name@company.com" />
                </div>
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">Phone Number *</label>
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required type="tel" className={`${inp} border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none`} placeholder="+91 00000 00000" />
                </div>
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">Add Guests</label>
                    <input name="guests" value={formData.guests} onChange={handleInputChange} className={`${inp} border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none`} placeholder="Optional: colleague@company.com" />
                </div>
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">What kind of service are you looking for?</label>
                    <input name="serviceInterest" value={formData.serviceInterest} onChange={handleInputChange} className={`${inp} border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 transition-all duration-500 outline-none`} placeholder="E.g. Web Dev, AI, Automation..." />
                </div>

                {/* How did you hear */}
                <div className="group space-y-3 relative" ref={hearRef}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">How did you hear about BGTHUB?</label>
                    <div className="relative">
                        <button type="button" onClick={() => setIsHearOpen(!isHearOpen)} className={dropdownBase}>
                            <span className={selected ? "text-slate-900" : "text-slate-400"}>{selected || "Select an option"}</span>
                            <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isHearOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isHearOpen && (
                            <div className={dropdownMenu}>
                                {options.map((o) => <button key={o} type="button" onClick={() => { setSelected(o); setIsHearOpen(false); }} className={dropdownItem}>{o}</button>)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Which services */}
                <div className="group space-y-3 relative" ref={servicesRef}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">Which Services are you interested in</label>
                    <div className="relative">
                        <button type="button" onClick={() => setIsServicesOpen(!isServicesOpen)} className={dropdownBase}>
                            <span className={selectedService ? "text-slate-900 font-medium" : "text-slate-400"}>{selectedService || "Select a service"}</span>
                            <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-[#00C752]' : ''}`} />
                        </button>
                        {isServicesOpen && (
                            <div className="absolute z-50 w-full mt-3 bg-white rounded-[20px] shadow-xl border border-slate-100 overflow-hidden py-3">
                                <div className="max-h-[300px] overflow-y-auto">
                                    {services.map((s) => <button key={s} type="button" onClick={() => { setSelectedService(s); setIsServicesOpen(false); }} className="w-[94%] mx-auto block text-left px-4 py-3 text-[15px] text-slate-600 hover:bg-slate-50 hover:text-[#00C752] rounded-xl transition-all">{s}</button>)}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Budget */}
                <div className="group space-y-3 relative" ref={budgetRef}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] transition-colors ml-1">What's your approximate budget? *</label>
                    <div className="relative">
                        <button type="button" onClick={() => setIsBudgetOpen(!isBudgetOpen)} className={dropdownBase}>
                            <span className={selectedBudget ? "text-slate-900" : "text-slate-400"}>{selectedBudget || "Select budget range"}</span>
                            <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isBudgetOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isBudgetOpen && (
                            <div className={dropdownMenu}>
                                {budgetOptions.map((o) => <button key={o} type="button" onClick={() => { setSelectedBudget(o); setIsBudgetOpen(false); }} className={dropdownItem}>{o}</button>)}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Service Required & Project Status */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 pt-4">
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] ml-1">Service Required *</label>
                    <div className="relative">
                        <select name="specificService" value={formData.specificService} onChange={handleInputChange} className={`${inp} appearance-none border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 cursor-pointer outline-none w-full`}>
                            <option>Full-stack Web Dev</option>
                            <option>Mobile App (React Native)</option>
                            <option>UI/UX Design Strategy</option>
                            <option>Lead Gen &amp; Branding</option>
                        </select>
                        <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300" size={12} />
                    </div>
                </div>
                <div className="group space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] ml-1">Project Status *</label>
                    <div className="relative">
                        <select name="projectStatus" value={formData.projectStatus} onChange={handleInputChange} className={`${inp} appearance-none border-b-2 border-slate-100 focus:border-[#00C752] bg-transparent px-1 py-4 cursor-pointer outline-none w-full`}>
                            <option>Concept / Idea</option>
                            <option>Existing Business (Upgrade)</option>
                            <option>Under Construction</option>
                        </select>
                        <FaChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300" size={12} />
                    </div>
                </div>
            </section>

            {/* Vision */}
            <div className="group space-y-4 pt-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-focus-within:text-[#00C752] ml-1">Describe your vision *</label>
                <textarea name="vision" value={formData.vision} onChange={handleInputChange} required rows={4} className="w-full border-2 border-slate-100 focus:border-[#00C752] rounded-2xl bg-slate-50/50 p-6 transition-all duration-500 outline-none resize-none text-slate-900 placeholder:text-slate-400" placeholder="What are we building? Tell us about your scope, challenges, and objectives..." />
            </div>

            {/* CTA */}
            <div className="pt-12 border-t border-slate-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-start gap-3 max-w-sm">
                        <div className="mt-1 h-2 w-2 rounded-full bg-[#00C752] animate-pulse shrink-0" />
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                            By confirming, you agree to BGTHUB's <span className="text-slate-900 font-bold underline cursor-pointer decoration-2 decoration-[#00C752]/30">Terms</span> and <span className="text-slate-900 font-bold underline cursor-pointer decoration-2 decoration-[#00C752]/30">Privacy Policy</span>.
                        </p>
                    </div>
                    <button type="submit" disabled={isLoading} className="group relative w-full md:w-auto px-10 py-4 bg-[#0a0a0a] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,199,82,0.4)] hover:-translate-y-1 active:scale-95 border border-white/5 disabled:opacity-50 disabled:cursor-not-allowed">
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <span className="relative z-10 flex items-center justify-center gap-4">
                            <span className="group-hover:tracking-[0.3em] transition-all duration-500">{isLoading ? "Processing..." : "Confirm Booking"}</span>
                            <div className="relative flex items-center">
                                <div className="w-0 group-hover:w-6 h-[1px] bg-[#00C752] transition-all duration-500 ease-out" />
                                <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-[#00C752]" />
                            </div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#00C752]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                </div>
            </div>
        </form>
    );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function BookingPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());
    const [selectedTime, setSelectedTime] = useState("");
    const [viewDate, setViewDate] = useState(new Date());

    const [showMonthDropdown, setShowMonthDropdown] = useState(false);
    const [showYearDropdown, setShowYearDropdown] = useState(false);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);

    const inputClasses = "w-full p-4 bg-slate-50/50 backdrop-blur-sm rounded-2xl border border-slate-100 outline-none focus:border-[#00C752] focus:ring-4 ring-[#00C752]/10 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-300";

    const currentMonth = viewDate.getMonth();
    const currentYear = viewDate.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const options = ["Instagram", "LinkedIn", "Website", "Others"];
    const servicesList = [
        "Web Development",
        "Mobile App Development",
        "AI/Automation",
        "UI/UX Design",
        "Maintenance & Support",
        "Blockchain",
        "Others"
    ];
    const budgetOptions = [
        "$500 - $1000",
        "$1000 - $5000",
        "$5000 - $10000",
        "$10000 - $50000",
        "$50000 - $100000",
        "$100000+"
    ];

    const times = Array.from({ length: 8 }, (_, i) => {
        const hour = 10 + Math.floor(i / 2);
        const min = i % 2 === 0 ? "00" : "30";
        return `${hour > 12 ? hour - 12 : hour}:${min}${hour >= 12 ? 'pm' : 'am'}`;
    });

    const handleMonthSelect = (index: number) => {
        setViewDate(new Date(currentYear, index, 1));
        setShowMonthDropdown(false);
    };

    const handleYearSelect = (year: number) => {
        setViewDate(new Date(year, currentMonth, 1));
        setShowYearDropdown(false);
    };


    return (
        <main className="min-h-screen bg-[#050505] flex items-center justify-center p-4 md:p-8 font-sans selection:bg-[#00C752]/30">
            {/* Background Aesthetic Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00C752]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col md:flex-row w-full max-w-6xl overflow-hidden rounded-[40px] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] h-auto md:h-[85vh] border border-white/20"
            >
                {/* LEFT SIDEBAR */}
                <div className="w-full md:w-[32%] border-r border-slate-100 p-10 bg-white flex flex-col shrink-0 overflow-y-auto no-scrollbar">
                    {/* Global Back Button */}
                    <button
                        onClick={() => router.push('/')}
                        className="group mb-12 flex items-center justify-center w-12 h-12 rounded-full border border-slate-100 bg-white text-slate-400 hover:text-slate-950 hover:border-slate-300 hover:shadow-md transition-all duration-300 active:scale-90 shrink-0"
                        title="Exit Booking"
                    >
                        <FaArrowLeft
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform duration-300 ease-out"
                        />
                    </button>

                    {/* Brand Identity Section */}
                    <div className="mb-8">
                        <img
                            src="/assets/images/bg_thub_logo1.png"
                            alt="BG THUB Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-800 leading-tight mb-4 tracking-tight">
                                1:1 Business Consultation Call
                            </h1>
                            <p className="text-slate-700 font-bold text-sm mb-6">
                                *Business Consultations Only
                            </p>
                            <p className="text-slate-500 text-base leading-relaxed font-medium mb-8">
                                To make the most of our conversation, kindly provide additional details about your organization, including your scope of work, specific challenges, and objectives.
                            </p>
                        </div>

                        {/* Meeting Details Section */}
                        <div className="space-y-5 pt-2">
                            <div className="flex items-center gap-4 text-slate-600">
                                <FaClock className="text-slate-400" size={18} />
                                <span className="text-base font-semibold">30m</span>
                            </div>

                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="flex items-center justify-center w-[18px]">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
                                        alt="Google Meet"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <span className="text-base font-semibold">Google Meet</span>
                            </div>

                            <div className="flex items-center gap-4 text-slate-600 group cursor-pointer">
                                <FaGlobe className="text-slate-400" size={18} />
                                <div className="flex items-center gap-2">
                                    <span className="text-base font-semibold">Asia/Kolkata</span>
                                    <FaChevronDown size={10} className="mt-1" />
                                </div>
                            </div>

                            {/* Selected Date/Time (Only shows once selected) */}
                            {selectedTime && (
                                <div className="flex items-center gap-4 text-[#00C752] animate-in fade-in slide-in-from-left-2">
                                    <FaCalendarCheck size={18} />
                                    <span className="text-base font-bold">
                                        {selectedTime} • {viewDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 flex flex-col overflow-y-auto no-scrollbar bg-slate-50/30">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div
                                key="selection"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex flex-col lg:flex-row h-full w-full"
                            >
                                <div className="w-full lg:w-[60%] p-10 border-r border-slate-100/50 bg-white">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex gap-1">
                                            <div className="relative">
                                                <button onClick={() => setShowMonthDropdown(!showMonthDropdown)} className="flex items-center gap-2 font-black text-slate-900 text-sm hover:bg-slate-50 px-4 py-2 rounded-xl transition-all">
                                                    {months[currentMonth]} <FaChevronDown size={8} className="text-[#00C752]" />
                                                </button>
                                                {showMonthDropdown && (
                                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl py-3 z-30 max-h-64 overflow-y-auto no-scrollbar">
                                                        {months.map((m, i) => (
                                                            <button key={m} onClick={() => handleMonthSelect(i)} className="w-full text-left px-5 py-2 text-xs font-bold hover:bg-[#00C752]/5 hover:text-[#00C752] text-slate-700 transition-colors">{m}</button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="relative">
                                                <button onClick={() => setShowYearDropdown(!showYearDropdown)} className="flex items-center gap-2 font-black text-slate-900 text-sm hover:bg-slate-50 px-4 py-2 rounded-xl transition-all">
                                                    {currentYear} <FaChevronDown size={8} className="text-[#00C752]" />
                                                </button>
                                                {showYearDropdown && (
                                                    <div className="absolute top-full left-0 mt-2 w-32 bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl rounded-2xl py-3 z-30">
                                                        {years.map(y => (
                                                            <button key={y} onClick={() => handleYearSelect(y)} className="w-full text-left px-5 py-2 text-xs font-bold hover:bg-[#00C752]/5 hover:text-[#00C752] text-slate-700 transition-colors">{y}</button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button onClick={() => setViewDate(new Date(currentYear, currentMonth - 1))} className="p-3 hover:bg-slate-50 rounded-full border border-slate-50 transition-all active:scale-90"><FaChevronLeft size={10} /></button>
                                            <button onClick={() => setViewDate(new Date(currentYear, currentMonth + 1))} className="p-3 hover:bg-slate-50 rounded-full border border-slate-50 transition-all active:scale-90"><FaChevronRight size={10} /></button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-7 gap-3">
                                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d} className="text-center text-[9px] font-black text-slate-300 uppercase tracking-widest mb-4">{d}</div>)}
                                        {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`e-${i}`} />)}
                                        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => (
                                            <button
                                                key={d}
                                                onClick={() => setSelectedDate(d)}
                                                className={`aspect-square rounded-2xl text-xs font-black transition-all relative group ${selectedDate === d ? 'bg-slate-950 text-white shadow-xl shadow-slate-950/20' : 'hover:bg-slate-50 text-slate-700'}`}
                                            >
                                                {d}
                                                {selectedDate === d && <motion.div layoutId="dot" className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00C752] rounded-full" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full lg:w-[40%] p-10 bg-slate-50/50 overflow-y-auto no-scrollbar">
                                    <h2 className="font-black text-slate-900 text-[10px] uppercase tracking-[0.3em] mb-8">Available Slots</h2>
                                    <div className="grid grid-cols-1 gap-3">
                                        {times.map(t => (
                                            <button
                                                key={t}
                                                onClick={() => { setSelectedTime(t); setStep(2); }}
                                                className="group w-full py-5 rounded-2xl border border-white bg-white/50 backdrop-blur-sm font-black text-slate-700 hover:border-[#00C752] hover:text-[#00C752] hover:bg-white hover:shadow-xl hover:shadow-[#00C752]/5 transition-all duration-300 text-[11px] uppercase tracking-wider flex items-center justify-between px-6"
                                            >
                                                {t}
                                                <FaChevronRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ) : step === 2 ? (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-6 md:p-16 w-full max-w-5xl mx-auto"
                            >
                                {/* Navigation */}
                                <button
                                    onClick={() => setStep(1)}
                                    className="group mb-12 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-slate-950 transition-all"
                                >
                                    <div className="p-3 bg-white border border-slate-100 rounded-full shadow-sm group-hover:shadow-md group-hover:-translate-x-1 transition-all">
                                        <FaChevronLeft size={12} />
                                    </div>
                                    Back to Calendar
                                </button>

                                {/* Header Section */}
                                <div className="mb-16">
                                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter leading-none">
                                        Consultation <span className="text-[#00C752]">Details</span>
                                    </h2>
                                    <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
                                        Secure your strategy session. Tell us about your vision for <span className="text-slate-900 font-bold">RideXe</span>, <span className="text-slate-900 font-bold">PROtask</span>, or your next big breakthrough.
                                    </p>
                                </div>

                                <BookingForm
                                    setStep={setStep}
                                    options={options}
                                    services={servicesList}
                                    budgetOptions={budgetOptions}
                                    selectedDate={new Date(currentYear, currentMonth, selectedDate)}
                                    selectedTime={selectedTime}
                                />
                            </motion.div>
                        ) : (
                            <motion.div key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center p-12">
                                <div className="relative mb-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring' }}
                                        className="w-24 h-24 bg-[#00C752]/10 text-[#00C752] rounded-[32px] flex items-center justify-center relative z-10"
                                    >
                                        <FaCalendarCheck size={44} />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-[#00C752] rounded-[32px] blur-2xl opacity-20 animate-pulse" />
                                </div>
                                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Booking Secured.</h2>
                                <p className="text-slate-500 text-sm max-w-xs font-medium leading-relaxed mb-10">We've sent a calendar invite to your inbox. Let's build something extraordinary.</p>
                                <button
                                    onClick={() => router.push('/')}
                                    className="px-14 py-5 bg-slate-950 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest shadow-2xl hover:bg-[#00C752] transition-all duration-500"
                                >
                                    Return to Home
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </main>
    );
}