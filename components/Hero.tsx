"use client";

import Image from "next/image";
import { APP_URLS, handleLogin } from "@/lib/config";
import s from "./Hero.module.css";

const TRUST_POINTS = [
  "Verified advertisements",
  "Privacy protected",
  "Sri Lanka and overseas",
  "Family-friendly platform",
];

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
            <div className={s.lotus} aria-hidden>
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
            </div>

            <div className={s.fadeIn}>
              <Image
                src="/assets/images/main.png"
                alt="Karakaara"
                className={s.mainImg}
                width={400}
                height={200}
                priority
              />
            </div>
          </div>

          {/* Col 2: text content */}
          <div className={s.col2}>
            <div className={`${s.eyebrow} ${s.fadeIn}`} role="text">
              ✦ &nbsp; Sri Lankan Matrimonial Advertisements &nbsp; ✦
              <span className={s.eyebrowSi} lang="si">
                ශ්‍රී ලංකාවේ මංගල දැන්වීම් සඳහා විශ්වාසනීය වේදිකාව
              </span>
            </div>

            <h1 className={`${s.tagline} ${s.fadeIn}`}>
              <em>Find the Matrimonial Proposal You&apos;re Looking For</em>
              <span className={s.taglineSi} lang="si">
                ඔබ සොයන මංගල යෝජනාව සොයාගන්න
              </span>
            </h1>

            <p className={`${s.sub} ${s.fadeIn}`}>
              Search, view and respond to matrimonial advertisements from Sri
              Lanka and Sri Lankans overseas - all in one trusted place.
              <span className={s.subSi} lang="si">
                ශ්‍රී ලංකාවේ සහ විදේශගත ශ්‍රී ලාංකිකයන්ගේ මංගල දැන්වීම් එකම
                ස්ථානයකින් සොයන්න, බලන්න සහ සම්බන්ධ වන්න.
              </span>
            </p>

            <div className={`${s.actions} ${s.fadeIn}`}>
              <a className={s.btnPrimary} href={APP_URLS.web} onClick={(e) => { e.preventDefault(); handleLogin(); }}>
                <span className={s.btnLabel}>
                  Post a Matrimonial Advertisement
                  <span className={s.btnLabelSi} lang="si">
                    ඔබගේ මංගල දැන්වීම සාදන්න
                  </span>
                </span>
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
              </a>
              <a href="#browse" className={s.btnOutline}>
                Browse Matrimonial Ads
              </a>
            </div>

            <ul className={`${s.trust} ${s.fadeIn}`} aria-label="Why advertise on Karakaara">
              {TRUST_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

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
