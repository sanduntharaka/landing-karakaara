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
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const FEATURES = [
  {
    title: 'Structured Proposals',
    desc: 'Profiles are organized around family background, education, profession, values, and partner expectations so decisions are easier to compare.',
    stat: '01',
  },
  {
    title: 'Local and Diaspora Reach',
    desc: 'Support for Sri Lankans at home and overseas, with a platform experience that keeps culture and long-distance discovery practical.',
    stat: '02',
  },
  {
    title: 'Privacy by Design',
    desc: 'Members stay in control of what they share and when, helping marriage conversations begin with confidence and discretion.',
    stat: '03',
  },
  {
    title: 'Built for Action',
    desc: 'Browse, shortlist, express interest, and continue the journey from web and mobile without losing the seriousness of the proposal process.',
    stat: '04',
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
          <span className="badge">Platform</span>
          <h2 className="section-title" id="feat-h">A modern operating layer for matrimony</h2>
          <p className="section-sub">
            Karakaara brings structure, privacy, and clarity to Sri Lankan marriage proposals
            without losing the values families care about.
          </p>
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
              <span className={s.index}>{f.stat}</span>
              <h3 className={s.title}>{f.title}</h3>
              <p className={s.desc}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
