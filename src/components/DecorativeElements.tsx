"use client"

import { motion } from 'framer-motion';
import styles from './decorativeElements.module.css';

interface DecorativeElementsProps {
  variant?: 'waves' | 'balls' | 'mixed';
  position?: 'top' | 'bottom' | 'both';
}

export function DecorativeElements({ 
  variant = 'mixed', 
  position = 'top' 
}: DecorativeElementsProps) {
  
  return (
    <>
      {(position === 'top' || position === 'both') && (
        <div className={styles.decorativeTop}>
          {(variant === 'waves' || variant === 'mixed') && (
            <svg className={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <motion.path
                d="M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z"
                fill="url(#gradient1)"
                initial={{ d: "M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z" }}
                animate={{
                  d: [
                    "M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z",
                    "M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z",
                    "M0,60 Q300,10 600,60 T1200,60 L1200,120 L0,120 Z"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
              </defs>
            </svg>
          )}
          
          {(variant === 'balls' || variant === 'mixed') && (
            <div className={styles.ballsContainer}>
              <motion.div
                className={`${styles.ball} ${styles.ballLarge}`}
                animate={{ 
                  y: [0, -40, 0],
                  x: [0, 30, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className={`${styles.ball} ${styles.ballMedium}`}
                animate={{ 
                  y: [0, 30, 0],
                  x: [0, -40, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className={`${styles.ball} ${styles.ballSmall}`}
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 20, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
              />
            </div>
          )}
        </div>
      )}

      {(position === 'bottom' || position === 'both') && (
        <div className={styles.decorativeBottom}>
          {(variant === 'waves' || variant === 'mixed') && (
            <svg className={styles.waveBottom} viewBox="0 0 1200 120" preserveAspectRatio="none">
              <motion.path
                d="M0,60 Q300,110 600,60 T1200,60 L1200,0 L0,0 Z"
                fill="url(#gradient2)"
                initial={{ d: "M0,60 Q300,110 600,60 T1200,60 L1200,0 L0,0 Z" }}
                animate={{
                  d: [
                    "M0,60 Q300,110 600,60 T1200,60 L1200,0 L0,0 Z",
                    "M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z",
                    "M0,60 Q300,110 600,60 T1200,60 L1200,0 L0,0 Z"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      )}
    </>
  );
}
