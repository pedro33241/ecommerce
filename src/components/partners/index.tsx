"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './partners.module.css';

export function Partners() {
  const partners = [
    { id: 1, src: '/marc1.jpg', alt: 'Parceiro 1' },
    { id: 2, src: '/marc2.jpg', alt: 'Parceiro 2' },
    { id: 3, src: '/marc3.jpg', alt: 'Parceiro 3' },
    { id: 4, src: '/marc4.jpg', alt: 'Parceiro 4' },
  ];

  // Duplicar parceiros para efeito contínuo
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 md:px-8 mt-10 relative overflow-hidden">
      {/* Animação de ondas de fundo */}
      <div className={styles.waveBackground}>
        <svg className={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="rgba(59, 130, 246, 0.1)"></path>
        </svg>
      </div>

      {/* Bolas animadas flutuando */}
      <div className={styles.floatingBalls}>
        <motion.div
          className={styles.ball}
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ left: '5%', top: '10%' }}
        />
        <motion.div
          className={`${styles.ball} ${styles.ballSmall}`}
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          style={{ right: '8%', top: '20%' }}
        />
        <motion.div
          className={styles.ball}
          animate={{ y: [0, 15, 0], x: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          style={{ left: '10%', bottom: '15%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Título com animação */}
        <motion.h2
          className="text-center mb-16 text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Poppins' }}
        >
          Nossos Parceiros
        </motion.h2>

        {/* Container de scroll contínuo */}
        <div className={styles.scrollContainer}>
          <motion.div
            className={styles.scrollContent}
            animate={{ x: [-0, -50 + '%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className={styles.partnerCard}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={220}
                    height={140}
                    className="object-contain"
                    priority={index < 4}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-poppins">
            ↙ Deslize para ver mais parceiros →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
