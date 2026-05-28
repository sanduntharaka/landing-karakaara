'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { handleLogin } from '@/lib/config';
import s from './Hero.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE, delay } }),
};

export default function Hero() {
  return (
    <section className={s.hero} id="home" aria-label="Welcome to Karakaara">
      <div className={s.texture} aria-hidden />

      <div className={s.inner}>
        <div className={s.content}>
          <motion.div className={s.eyebrow} variants={fadeUp} custom={0.1} initial="hidden" animate="show">
            Private Sri Lankan Matrimony Platform
          </motion.div>

          <motion.div className={s.brand} variants={fadeUp} custom={0.18} initial="hidden" animate="show">
            <Image src="/assets/images/main.png" alt="Karakaara" className={s.mainImg} width={420} height={210} priority />
          </motion.div>

          <motion.h1 className={s.title} variants={fadeUp} custom={0.28} initial="hidden" animate="show">
            Serious marriage proposals, managed with modern trust.
          </motion.h1>

          <motion.p className={s.sub} variants={fadeUp} custom={0.38} initial="hidden" animate="show">
            Karakaara helps families and individuals discover compatible Sri Lankan matches through a secure,
            respectful platform built for tradition, privacy, and confident decisions.
          </motion.p>

          <motion.div className={s.actions} variants={fadeUp} custom={0.48} initial="hidden" animate="show">
            <button className={s.btnPrimary} onClick={handleLogin}>
              Open Web App
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a href="#features" className={s.btnOutline}>View Platform</a>
          </motion.div>

          <motion.div className={s.trust} variants={fadeUp} custom={0.58} initial="hidden" animate="show" aria-label="Platform highlights">
            <span>Verified profiles</span>
            <span>Family-ready proposals</span>
            <span>Privacy controls</span>
          </motion.div>
        </div>

        <motion.div
          className={s.visual}
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
        >
          <div className={s.imagePanel}>
            <Image
              src="/assets/images/hero_image.png"
              alt="Sri Lankan couple and family using Karakaara"
              className={s.heroImg}
              width={640}
              height={360}
              priority
            />
          </div>

          <div className={s.insightCard}>
            <span className={s.cardLabel}>Proposal Quality</span>
            <strong>Profiles built around values, family background, and compatibility.</strong>
          </div>

          <div className={s.metricCard}>
            <strong>10k+</strong>
            <span>registered members</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
