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
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const TESTIMONIALS = [
  {
    text: 'Karakaara understood our Sri Lankan values. We found each other within weeks, and our families couldn\'t be happier. The platform made the whole process feel both modern and beautifully traditional.',
    name: 'Nimali & Kamal',
    location: 'Colombo, Sri Lanka',
    initials: 'NK',
  },
  {
    text: 'As part of the diaspora, finding someone who shared our Sri Lankan roots was so important to us. Karakaara made it possible across continents. Our poruwa ceremony was everything we dreamed of.',
    name: 'Priya & Sanjeewa',
    location: 'Melbourne, Australia',
    initials: 'PS',
  },
  {
    text: 'The proposal system is so thoughtful — it captured everything about who we are. My family was involved every step of the way. This is truly a platform built for us.',
    name: 'Dilini & Malith',
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
          <span className="badge">Stories of Joy</span>
          <h2 className="section-title" id="testi-h">Hearts United Through Karakaara</h2>
          <p className="section-sub">Real stories from couples who found their perfect match</p>
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
              <div className={s.quoteMark} aria-hidden>&ldquo;</div>
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
