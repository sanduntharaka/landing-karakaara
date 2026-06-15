'use client';

import { APP_URLS, handleLogin, showToast } from '@/lib/config';
import s from './CtaSection.module.css';

function handleAndroid() {
  window.open(APP_URLS.playStore, '_blank', 'noopener,noreferrer');
}

function handleIOS() {
  if (APP_URLS.appStore.includes('0000000000')) {
    showToast('iOS app coming soon! Try the web app in the meantime.');
  } else {
    window.open(APP_URLS.appStore, '_blank', 'noopener,noreferrer');
  }
}

export default function CtaSection() {
  return (
    <section className={s.cta} id="download" aria-labelledby="cta-h">
      <div className={s.pattern} aria-hidden />
      <div className={s.glow} aria-hidden />
      <div className="container">
        <div className={s.content}>
          <div className={s.lotus} aria-hidden>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <ellipse cx="22" cy="17" rx="4.5" ry="11" fill="#F3E9E4" opacity="0.4"/>
              <ellipse cx="22" cy="17" rx="4.5" ry="11" fill="#F3E9E4" opacity="0.3" transform="rotate(-42 22 22)"/>
              <ellipse cx="22" cy="17" rx="4.5" ry="11" fill="#F3E9E4" opacity="0.3" transform="rotate(42 22 22)"/>
              <ellipse cx="22" cy="17" rx="4.5" ry="11" fill="#F3E9E4" opacity="0.2" transform="rotate(-78 22 22)"/>
              <ellipse cx="22" cy="17" rx="4.5" ry="11" fill="#F3E9E4" opacity="0.2" transform="rotate(78 22 22)"/>
              <circle cx="22" cy="22" r="5.5" fill="#F3E9E4" opacity="0.55"/>
              <circle cx="22" cy="22" r="2.5" fill="#D1A46E"/>
            </svg>
          </div>

          <span className="badge-light">Begin Today</span>
          <h2 className={s.title} id="cta-h">Your Perfect Match Awaits</h2>
          <p className={s.sub}>Join thousands of Sri Lankans who have found their life partners through Karakaara.</p>

          <div className={s.btns}>
            <button className={s.btnPrimary} onClick={handleLogin}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 6h6M7 10h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Open Web App
            </button>

            <button className={s.btnGhost} onClick={handleAndroid}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6.5 2.5 L3 7 L17 7 L13.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 7 L3.8 15a2 2 0 002 1.8h8.4a2 2 0 002-1.8L17 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                <path d="M8 10v4M12 10v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              Google Play
              <span className={s.soon}>Soon</span>
            </button>

            <button className={s.btnGhost} onClick={handleIOS}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M13.5 1.8c.6.8 1 1.9.8 3-1 .1-2.1-.5-2.7-1.4-.6-.8-1-1.9-.8-2.9 1 0 2.1.5 2.7 1.3z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M15.5 12.8c-.4.9-.6 1.4-1.1 2.2-.8 1.2-1.9 2.7-3.2 2.7-1.2 0-1.5-.8-3-.8-1.6 0-1.9.8-3.1.8-1.3 0-2.4-1.4-3.1-2.6-2.1-3.2-2.3-6.9-.9-8.8.8-1.2 2.2-2 3.5-2 1.4 0 2.3.8 3.5.8 1.2 0 1.8-.8 3.5-.8 1.2 0 2.4.6 3.2 1.7-2.8 1.7-2.3 6 .7 7.8z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              App Store
              <span className={s.soon}>Soon</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
