'use client';

import { motion } from 'framer-motion';
import s from './Testimonials.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const TESTIMONIALS = [
  {
    text: 'The profile structure made serious conversations much easier. We could understand values, family expectations, and compatibility before taking the next step.',
    name: 'Nimali and Kamal',
    location: 'Colombo, Sri Lanka',
    initials: 'NK',
  },
  {
    text: 'As Sri Lankans living overseas, we needed a platform that understood our culture but worked like a modern product. Karakaara made the search practical.',
    name: 'Priya and Sanjeewa',
    location: 'Melbourne, Australia',
    initials: 'PS',
  },
  {
    text: 'Privacy mattered to our family. The process felt respectful and focused, with the right information available at the right time.',
    name: 'Dilini and Malith',
    location: 'Kandy, Sri Lanka',
    initials: 'DM',
  },
];

export default function Testimonials() {
  return (
    <section className={`${s.testimonials} section`} id="about" aria-labelledby="testi-h">
      <div className="container">
        <motion.header
          className="section-hdr"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge">Trust</span>
          <h2 className="section-title" id="testi-h">Designed for families, professionals, and diaspora members</h2>
          <p className="section-sub">A calm, private environment for people who treat marriage as an important life decision.</p>
        </motion.header>

        <motion.div
          className={s.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} className={s.card} variants={item}>
              <p className={s.text}>{t.text}</p>
              <div className={s.author}>
                <div className={s.avatar} aria-hidden>{t.initials}</div>
                <div>
                  <div className={s.name}>{t.name}</div>
                  <div className={s.location}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
