"use client"

import { motion } from 'framer-motion';
import styles from './animations.module.css';

export function AnimatedBackground() {
  return (
    <div className={styles.container}>
      {/* Esferas flutuantes */}
      <motion.div
        className={styles.sphere1}
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <motion.div
        className={styles.sphere2}
        animate={{ 
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div
        className={styles.sphere3}
        animate={{ 
          y: [0, 25, 0],
          x: [0, 15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Linhas animadas conectando elementos */}
      <svg className={styles.lines} viewBox="0 0 1200 800">
        <motion.path
          d="M 100,200 Q 600,400 1100,200"
          stroke="rgba(59, 130, 246, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          animate={{ strokeDashoffset: [-1000, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.path
          d="M 100,600 Q 600,400 1100,600"
          stroke="rgba(99, 102, 241, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1000"
          animate={{ strokeDashoffset: [1000, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
