"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function SplashAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: '0px 0px -100px 0px' });

    const splashVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i: number) => ({
            opacity: [0, 1, 0],
            scale: [0, 1, 1.5],
            transition: {
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1,
            },
        }),
    };

    return (
        <div ref={ref} className="flex items-center justify-center py-12 overflow-hidden">
            <div className="relative w-32 h-32">
                {/* Central circle */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 0.85 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                />

                {/* Splash particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500"
                        custom={i}
                        variants={splashVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        style={{
                            left: '50%',
                            top: '50%',
                            marginLeft: '-8px',
                            marginTop: '-8px',
                            rotate: (i * 60) + 'deg',
                            transformOrigin: '0 40px',
                        }}
                    />
                ))}

                {/* Wave effect */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`wave-${i}`}
                        className="absolute inset-0 rounded-full border-2 border-yellow-400"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 2, opacity: 0 } : { scale: 0, opacity: 0 }}
                        transition={{
                            duration: 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                            repeatDelay: 0.5,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
