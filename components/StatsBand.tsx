import { APP_URLS } from "@/lib/config";
import s from "./StatsBand.module.css";

export default function StatsBand() {
  return (
    <section className={s.band} aria-label="Platform availability">
      <div className={s.inner}>
        <a
          href={APP_URLS.web}
          className={`${s.item} ${s.itemClickable}`}
          aria-label="Open the web platform"
        >
          <span className={s.num}>Now Live</span>
          <span className={s.label}>Web platform is live</span>
        </a>
        <div className={s.sep} aria-hidden />
        <a
          href={APP_URLS.playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.item} ${s.itemClickable}`}
          aria-label="Get the Android app on Google Play"
        >
          <span className={s.num}>Now Live</span>
          <span className={s.label}>Android app on Google Play</span>
        </a>
      </div>
    </section>
  );
}

/*
'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatItem {
  target: number;
  label: string;
}

const STATS: StatItem[] = [
  { target: 10000, label: 'Registered Members' },
  { target: 5000,  label: 'Active Proposals' },
  { target: 2000,  label: 'Happy Matches' },
];

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    const dur = 1800;
    const start = performance.now();
    function easeOutQuad(t: number) { return t * (2 - t); }
    function tick(now: number) {
      const p = Math.min((now - start) / dur, 1);
      setValue(Math.round(easeOutQuad(p) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

export default function StatsBand() {
  return (
    <section className={s.band} aria-label="Platform statistics">
      <div className={s.inner}>
        {STATS.map((stat, i) => (
          <Fragment key={stat.label}>
            <div className={s.item}>
              <div className={s.numRow}>
                <span className={s.num}><Counter target={stat.target} /></span>
                <span className={s.suffix}>+</span>
              </div>
              <span className={s.label}>{stat.label}</span>
            </div>
            {i < STATS.length - 1 && <div className={s.sep} aria-hidden />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
*/
