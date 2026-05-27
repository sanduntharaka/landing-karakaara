'use client';

import { motion } from 'framer-motion';
import s from './Features.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const FEATURES = [
  {
    title: 'Tradition First',
    desc: 'Proposals crafted following Sri Lankan customs, horoscope compatibility, and family values — because what matters is what has always mattered.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 4C17 4 8 9 8 18c0 5 4 9 9 9s9-4 9-9C26 9 17 4 17 4z" fill="#8B2635" opacity="0.12" stroke="#8B2635" strokeWidth="1.4"/>
        <path d="M12.5 18.5l3 3 6-7" stroke="#D1A46E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Diaspora Friendly',
    desc: 'Connect across borders. Whether you\'re in Colombo or London, find matches who share your Sri Lankan roots and values.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="17" r="13" fill="#D1A46E" opacity="0.1" stroke="#D1A46E" strokeWidth="1.4"/>
        <path d="M7 17 Q11 8 17 17 Q23 26 27 17" stroke="#8B2635" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M7 20.5 L27 20.5 M7 13.5 L27 13.5" stroke="#D1A46E" strokeWidth="0.8" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Privacy Protected',
    desc: 'Your details are shared with care. Control exactly who sees your information, ensuring your journey stays private until you\'re ready.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="7" y="5" width="20" height="24" rx="3" fill="#8B2635" opacity="0.1" stroke="#8B2635" strokeWidth="1.4"/>
        <circle cx="17" cy="17" r="4" fill="#D1A46E" opacity="0.25"/>
        <path d="M14.5 17l2 2 4-4" stroke="#D1A46E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 24l6-4 6 4" stroke="#8B2635" strokeWidth="1" opacity="0.4" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Modern Platform',
    desc: 'Available on iOS, Android, and Web — seamlessly bridging traditional matchmaking with the digital age, wherever you are.',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <rect x="3" y="7" width="28" height="20" rx="3" fill="#D1A46E" opacity="0.1" stroke="#D1A46E" strokeWidth="1.4"/>
        <rect x="9" y="3" width="6" height="28" rx="2" fill="#8B2635" opacity="0.08" transform="rotate(-4 9 3)"/>
        <path d="M9 13 L25 13 M9 17.5 L21 17.5 M9 22 L16 22" stroke="#8B2635" strokeWidth="1.5" opacity="0.6" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className={`${s.features} section`} id="features" aria-labelledby="feat-h">
      <div className="container">
        <motion.header
          className="section-hdr"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge">Our Promise</span>
          <h2 className="section-title" id="feat-h">Built for Sri Lankan Hearts</h2>
          <p className="section-sub">A platform that honors your traditions while embracing modern convenience</p>
        </motion.header>

        <motion.div
          className={s.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {FEATURES.map((f) => (
            <motion.div key={f.title} className={s.card} variants={item}>
              <div className={s.icon} aria-hidden>{f.icon}</div>
              <h3 className={s.title}>{f.title}</h3>
              <p className={s.desc}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
