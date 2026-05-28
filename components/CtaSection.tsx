'use client';

import { motion } from 'framer-motion';
import { handleAndroidStore, handleAppleStore, handleLogin } from '@/lib/config';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
import s from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={s.cta} id="download" aria-labelledby="cta-h">
      <div className={s.pattern} aria-hidden />
      <div className={s.glow} aria-hidden />
      <div className="container">
        <motion.div
          className={s.content}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge-light">Get Started</span>
          <h2 className={s.title} id="cta-h">Start with a serious, private proposal profile.</h2>
          <p className={s.sub}>Open Karakaara on the web today, or join the mobile app waitlist as Android and iOS availability rolls out.</p>

          <div className={s.btns}>
            <button className={s.btnPrimary} onClick={handleLogin}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 6h6M7 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Open Web App
            </button>

            <button className={s.btnGhost} onClick={handleAndroidStore}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6.5 2.5 L3 7 L17 7 L13.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7 L3.8 15a2 2 0 002 1.8h8.4a2 2 0 002-1.8L17 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M8 10v4M12 10v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Google Play
              <span className={s.soon}>Soon</span>
            </button>

            <button className={s.btnGhost} onClick={handleAppleStore}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M13.5 1.8c.6.8 1 1.9.8 3-1 .1-2.1-.5-2.7-1.4-.6-.8-1-1.9-.8-2.9 1 0 2.1.5 2.7 1.3z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M15.5 12.8c-.4.9-.6 1.4-1.1 2.2-.8 1.2-1.9 2.7-3.2 2.7-1.2 0-1.5-.8-3-.8-1.6 0-1.9.8-3.1.8-1.3 0-2.4-1.4-3.1-2.6-2.1-3.2-2.3-6.9-.9-8.8.8-1.2 2.2-2 3.5-2 1.4 0 2.3.8 3.5.8 1.2 0 1.8-.8 3.5-.8 1.2 0 2.4.6 3.2 1.7-2.8 1.7-2.3 6 .7 7.8z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              App Store
              <span className={s.soon}>Soon</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
