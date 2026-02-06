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

      <div className="max-w-7xl mx-auto relative z-10">
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

      
      </div>
    </section>
  );
}
