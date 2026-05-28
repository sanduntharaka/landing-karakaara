'use client';

import { motion } from 'framer-motion';
import s from './HowItWorks.module.css';

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const STEPS = [
  {
    num: '01',
    title: 'Build a credible profile',
    desc: 'Add the details that matter in Sri Lankan matrimony: background, values, education, profession, lifestyle, and partner expectations.',
  },
  {
    num: '02',
    title: 'Review compatible proposals',
    desc: 'Discover profiles in a focused environment designed for serious intent, clearer comparison, and respectful discovery.',
  },
  {
    num: '03',
    title: 'Connect with confidence',
    desc: 'Shortlist, express interest, and move forward only when the match feels right for you and your family.',
  },
];

export default function HowItWorks() {
  return (
    <section className={`${s.hiw} section`} id="how-it-works" aria-labelledby="hiw-h">
      <div className="container">
        <motion.header
          className="section-hdr"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge">Process</span>
          <h2 className="section-title" id="hiw-h">From profile to meaningful conversation</h2>
          <p className="section-sub">A straightforward flow designed for busy professionals, families, and diaspora members.</p>
        </motion.header>

        <div className={s.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
            >
              <span className={s.num}>{step.num}</span>
              <div className={s.body}>
                <h3 className={s.title}>{step.title}</h3>
                <p className={s.desc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
