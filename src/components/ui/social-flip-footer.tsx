"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

const SocialFlipFootButton = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group relative h-11 w-44"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                className="relative h-full w-full"
                animate={{ rotateX: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/10 bg-[#0a0a0a] text-white transition-colors duration-500 hover:border-emerald-500/30"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <span className="text-[14px] font-black uppercase tracking-[0.2em]">
                        Contact
                    </span>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 flex items-center justify-center rounded-xl bg-[#00C752] text-white"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateX(180deg)",
                    }}
                >
                    <div className="flex items-center gap-4">
                        {/* Twitter / X */}
                        <a
                            href="https://x.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <FaTwitter
                                className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:rotate-12"
                                size={14}
                            />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/company/yourcompany"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <FaLinkedinIn
                                className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                                size={14}
                            />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/bg_thub?igsh=MTFubGljazc3ejJwMA%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <FaInstagram
                                className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:rotate-12"
                                size={14}
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <FaGithub
                                className="cursor-pointer transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                                size={14}
                            />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SocialFlipFootButton;
