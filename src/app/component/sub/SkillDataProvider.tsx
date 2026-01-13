"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const animationDelay = 0.1
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay, duration: 0.5 }}
            className="relative group cursor-pointer"
        >
            {/* Glassmorphic container with gradient border */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 hover:rotate-3">
                {/* Gradient border glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>

                {/* Image container */}
                <div className="relative transition-transform duration-300 group-hover:scale-105">
                    <Image
                        src={src}
                        width={width}
                        height={height}
                        alt='skill image'
                        className="drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default SkillDataProvider