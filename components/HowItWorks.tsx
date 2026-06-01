"use client";

import { motion } from "framer-motion";
import s from "./HowItWorks.module.css";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const STEPS = [
  {
    num: "1",
    title: "Create Your Profile",
    desc: "Share your story - your background, values, family, and what you're looking for in a life partner.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle
          cx="22"
          cy="16"
          r="8"
          stroke="#8B2635"
          strokeWidth="1.5"
          fill="#8B2635"
          fillOpacity="0.08"
        />
        <path
          d="M8 40c0-7.7 6.3-14 14-14s14 6.3 14 14"
          stroke="#D1A46E"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "2",
    title: "Browse Proposals",
    desc: "Explore detailed marriage proposals from verified members across Sri Lanka and the global diaspora.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle
          cx="19"
          cy="19"
          r="11"
          stroke="#8B2635"
          strokeWidth="1.5"
          fill="#D1A46E"
          fillOpacity="0.1"
        />
        <path
          d="M28 28 L38 38"
          stroke="#D1A46E"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    hasLine: true,
  },
  {
    num: "3",
    title: "Connect & Meet",
    desc: "When hearts align, express your interest and begin the journey toward a blessed, traditional union.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path
          d="M22 38C22 38 8 28 8 17c0-5 4-9 9-9 2.5 0 4.5 2 5 2s2.5-2 5-2c5 0 9 4 9 9 0 11-14 21-14 21z"
          fill="#8B2635"
          fillOpacity="0.12"
          stroke="#8B2635"
          strokeWidth="1.5"
        />
      </svg>
    ),
    hasLine: false,
  },
];

export default function HowItWorks() {
  return (
    <section
      className={`${s.hiw} section`}
      id="how-it-works"
      aria-labelledby="hiw-h"
    >
      <div className="container">
        <motion.header
          className="section-hdr"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, ease: EASE }}
        >
          <span className="badge">Simple Steps</span>
          <h2 className="section-title" id="hiw-h">
            Your Journey Begins Here
          </h2>
          <p className="section-sub">
            Finding your life partner has never been this meaningful
          </p>
        </motion.header>

        <div className={s.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className={s.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.12 }}
            >
              <div className={s.numWrap}>
                <div className={s.num}>{step.num}</div>
                {step.hasLine && <div className={s.line} aria-hidden />}
              </div>
              <div className={s.body}>
                <div className={s.icon} aria-hidden>
                  {step.icon}
                </div>
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
