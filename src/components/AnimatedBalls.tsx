"use client"

import { motion } from "framer-motion"

export function AnimatedBalls() {
    const balls = [
        { id: 1, size: 80, duration: 20, delay: 0, x: -100, y: -100 },
        { id: 2, size: 60, duration: 25, delay: 2, x: 150, y: -150 },
        { id: 3, size: 100, duration: 22, delay: 4, x: -80, y: 100 },
        { id: 4, size: 70, duration: 28, delay: 1, x: 120, y: 80 },
        { id: 5, size: 50, duration: 24, delay: 3, x: -150, y: 120 },
    ]

    return (
        <div className="absolute inset-0 overflow-hidden">
            {balls.map((ball) => (
                <motion.div
                    key={ball.id}
                    className="absolute rounded-full bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 opacity-20 blur-3xl"
                    style={{
                        width: ball.size,
                        height: ball.size,
                    }}
                    animate={{
                        x: [ball.x, ball.x + 200, ball.x],
                        y: [ball.y, ball.y + 200, ball.y],
                    }}
                    transition={{
                        duration: ball.duration,
                        delay: ball.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}
