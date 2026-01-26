"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ReactNode } from "react"

interface ScrollAnimationProps {
    children: ReactNode
    direction?: "up" | "down" | "left" | "right"
    delay?: number
}

export function ScrollAnimation({
    children,
    direction = "up",
    delay = 0,
}: ScrollAnimationProps) {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const variants = {
        up: {
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
        },
        down: {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
        },
        left: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
        },
        right: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants[direction]}
            transition={{ duration: 0.8, delay }}
        >
            {children}
        </motion.div>
    )
}
