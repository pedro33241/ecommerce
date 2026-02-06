"use client"

import { motion } from 'framer-motion';
import styles from './floatingBalls.module.css';

interface FloatingBallsProps {
  count?: number;
  size?: 'small' | 'medium' | 'large';
  colors?: string[];
}

export function FloatingBalls({ 
  count = 3, 
  size = 'medium',
  colors = ['rgba(59, 130, 246, 0.3)', 'rgba(147, 197, 253, 0.3)', 'rgba(99, 102, 241, 0.3)']
}: FloatingBallsProps) {
  const balls = Array.from({ length: count }, (_, i) => i);

  const getSizeClasses = () => {
    switch(size) {
      case 'small': return 'w-12 h-12';
      case 'large': return 'w-40 h-40';
      default: return 'w-24 h-24';
    }
  };

  return (
    <div className={styles.container}>
      {balls.map((i) => (
        <motion.div
          key={i}
          className={`${styles.ball} ${getSizeClasses()}`}
          animate={{
            y: [0, -30 - i * 10, 0],
            x: [0, Math.cos(i) * 40, 0],
            scale: [1, 1.1 - i * 0.05, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
          style={{
            background: `radial-gradient(135deg, ${colors[i % colors.length]}, transparent)`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
        />
      ))}
    </div>
  );
}
