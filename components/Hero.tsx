"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { handleLogin } from "@/lib/config";
import s from "./Hero.module.css";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

export default function Hero() {
  return (
    <section className={s.hero} id="home" aria-label="Welcome to Karakaara">
      <div className={s.pattern} aria-hidden />
      <div className={`${s.glow} ${s.glowL}`} aria-hidden />
      <div className={`${s.glow} ${s.glowR}`} aria-hidden />
      <span className={`${s.corner} ${s.tl}`} aria-hidden />
      <span className={`${s.corner} ${s.tr}`} aria-hidden />
      <span className={`${s.corner} ${s.bl}`} aria-hidden />
      <span className={`${s.corner} ${s.br}`} aria-hidden />

      {/* ROW 1 — full-width hero image */}
      <div className={s.row1}>
        <Image
          src="/assets/images/hero_image.png"
          alt="Sri Lankan couple with family"
          className={s.heroImg}
          width={1600}
          height={900}
          priority
        />
      </div>

      {/* ROW 2 — two columns, overlaps Row 1 at its midpoint */}
      <div className={s.row2}>
        <div className={s.row2Inner}>
          {/* Col 1: lotus shape + main.png logo */}
          <div className={s.col1}>
            <motion.div
              className={s.lotus}
              aria-hidden
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <ellipse
                  cx="26"
                  cy="20"
                  rx="5.5"
                  ry="14"
                  fill="#8B2635"
                  opacity="0.65"
                />
                <ellipse
                  cx="26"
                  cy="20"
                  rx="5.5"
                  ry="14"
                  fill="#D1A46E"
                  opacity="0.5"
                  transform="rotate(-42 26 26)"
                />
                <ellipse
                  cx="26"
                  cy="20"
                  rx="5.5"
                  ry="14"
                  fill="#D1A46E"
                  opacity="0.5"
                  transform="rotate(42 26 26)"
                />
                <ellipse
                  cx="26"
                  cy="20"
                  rx="5.5"
                  ry="14"
                  fill="#D1A46E"
                  opacity="0.35"
                  transform="rotate(-78 26 26)"
                />
                <ellipse
                  cx="26"
                  cy="20"
                  rx="5.5"
                  ry="14"
                  fill="#D1A46E"
                  opacity="0.35"
                  transform="rotate(78 26 26)"
                />
                <circle cx="26" cy="26" r="6.5" fill="#8B2635" opacity="0.8" />
                <circle cx="26" cy="26" r="3" fill="#F3E9E4" opacity="0.9" />
                <path
                  d="M26 32.5 L26 46"
                  stroke="#D1A46E"
                  strokeWidth="1.5"
                  opacity="0.45"
                />
                <path
                  d="M21 42 Q26 38.5 31 42"
                  stroke="#D1A46E"
                  strokeWidth="1"
                  opacity="0.4"
                  fill="none"
                />
              </svg>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="show"
            >
              <Image
                src="/assets/images/main.png"
                alt="Karakaara"
                className={s.mainImg}
                width={400}
                height={200}
                priority
              />
            </motion.div>
          </div>

          {/* Col 2: text content */}
          <div className={s.col2}>
            <motion.div
              className={s.eyebrow}
              role="text"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="show"
            >
              ✦ &nbsp; Sri Lankan Matrimony Platform &nbsp; ✦
              <span className={s.eyebrowSi} lang="si">
                ශ්‍රී ලාංකිකයන්ගේ හදවත් එකතුවන එකම වේදිකාව
              </span>
            </motion.div>

            <motion.p
              className={s.tagline}
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="show"
            >
              <em>Where Hearts Meet Tradition</em>
              <span className={s.taglineSi} lang="si">
                සම්ප්‍රදාය හා සදාකාලික බැදීම් හමු වන තැන
              </span>
            </motion.p>

            <motion.p
              className={s.sub}
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              animate="show"
            >
              Sri Lanka&apos;s premier matrimony platform - connecting hearts
              through culture, tradition, and the timeless pursuit of meaningful
              partnership.
              <span className={s.subSi} lang="si">
                ශ්‍රී ලංකාවේ ප්‍රමුඛ විවාහ වේදිකාව - සංස්කෘතිය, සම්ප්‍රදාය හා
                තාක්‍ෂණය එකට මුහු කරමින් ඔබට ගැළපෙනම ජීවිත සහකරු සොයා ගැනීමට
                විශ්වාසනීය පියවරක්.
              </span>
            </motion.p>

            <motion.div
              className={s.actions}
              variants={fadeUp}
              custom={0.5}
              initial="hidden"
              animate="show"
            >
              <button className={s.btnPrimary} onClick={handleLogin}>
                Begin Your Journey
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <a href="#features" className={s.btnOutline}>
                Explore More
              </a>
            </motion.div>

            {/* <motion.div className={s.langs} aria-label="Available in Sinhala and English" variants={fadeUp} custom={0.6} initial="hidden" animate="show">
              <span lang="si">සිංහල</span>
              <span className={s.langSep} aria-hidden>·</span>
              <span>English</span>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
