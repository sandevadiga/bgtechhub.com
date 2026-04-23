"use client"
import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Avatar {
    avatar: string
    name: string
}

export interface MaskedAvatarsProps {
    avatars?: Avatar[]
    size?: number
    border?: number
    column?: number
    movement?: number
    transition?: number
    ringed?: boolean
    offset?: number
    blurOnRest?: boolean
    className?: string
}

const defaultAvatars: Avatar[] = [
    { avatar: "https://i.pravatar.cc/150?u=a", name: "Garou" },
]

export function MaskedAvatars({
    avatars = defaultAvatars,
    size = 70,
    border = 8,
    column = 40,
    movement = 0.72,
    transition = 0.18,
    ringed = true,
    offset = -3,
    blurOnRest = true,
    className
}: MaskedAvatarsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const dynamicSize = `${size}px`
    const circle = (border * 2 + size) / 2
    const radX = circle - column - border
    const maskImage = `radial-gradient(${circle}px ${circle}px at ${radX}px 50%, transparent ${circle - 0.5}px, white ${circle}px)`

    const transitionConfig = {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
    }

    return (
        <div
            className={cn("relative flex items-center", className)}
            style={{
                gap: `10px`,
                "--size": dynamicSize,
            } as React.CSSProperties}
        >
            <div className="relative flex items-center">
                <ul
                    className="m-0 p-0 list-none grid grid-flow-col content-end"
                    style={{
                        height: column || size,
                        gridAutoColumns: column || size,
                        transform: column ? `translateX(${(size - column) * 0.5}px)` : "none",
                    }}
                >
                    {avatars.map((person, index) => {
                        const isHovered = hoveredIndex === index
                        const isPrevHovered = hoveredIndex === index - 1
                        const baseOffset = -size * 1.5
                        const moveOffset = size * movement

                        const maskPosition = isPrevHovered
                            ? `0 ${baseOffset - moveOffset}px`
                            : isHovered
                                ? `0 ${baseOffset + moveOffset}px`
                                : `0 ${baseOffset}px`

                        return (
                            <motion.li
                                key={index}
                                className="relative grid content-end outline-none"
                                style={{
                                    width: dynamicSize,
                                    aspectRatio: "1/3",
                                    zIndex: avatars.length - index,
                                }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {ringed && (
                                    <div
                                        className="absolute left-1/2 text-center uppercase font-mono font-bold text-[8px] text-green-600 pointer-events-none"
                                        style={{
                                            width: size,
                                            height: size,
                                            borderRadius: "50%",
                                            bottom: "15%",
                                            transform: `translate(-50%, ${isHovered ? -movement * 80 : 0}%)`,
                                            transition: `transform ${transition}s ease-out`,
                                        }}
                                    >
                                        {person.name.split("").map((char, i) => (
                                            <span
                                                key={i}
                                                className="absolute"
                                                style={{
                                                    offsetPath: "border-box",
                                                    offsetDistance: `${(offset + i) * 1.2}ch`,
                                                    offsetAnchor: "50% 130%",
                                                    transform: isHovered ? "translate(0, 0)" : "translate(0, 100%)",
                                                    opacity: isHovered ? 1 : 0,
                                                    transition: `all ${transition}s ease-out`,
                                                }}
                                            >
                                                {char}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="avatar-holder absolute inset-0 grid content-end">
                                    <motion.span
                                        className="avatar inline-block w-full aspect-square rounded-full relative overflow-hidden border-2 border-white shadow-sm"
                                        style={{
                                            maskImage: index === 0 || column === 0 ? "none" : maskImage,
                                            WebkitMaskImage: index === 0 || column === 0 ? "none" : maskImage,
                                            maskSize: "100% 400%",
                                            WebkitMaskSize: "100% 400%",
                                            maskRepeat: "no-repeat",
                                        }}
                                        animate={{
                                            maskPosition: index === 0 || column === 0 ? "0 0" : maskPosition,
                                            y: isHovered ? -movement * 100 + "%" : "0%",
                                            scale: isHovered ? 1.1 : 1,
                                        }}
                                        transition={transitionConfig}
                                    >
                                        <img
                                            src={person.avatar}
                                            alt={person.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </motion.span>
                                </div>
                            </motion.li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}