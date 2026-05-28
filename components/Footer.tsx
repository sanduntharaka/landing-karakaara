import Image from 'next/image';
import Link from 'next/link';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer} role="contentinfo">
      <div className="container">
        <div className={s.main}>
          <div className={s.brand}>
            <Link href="/" className={s.logoWrap}>
              <Image
                src="/assets/images/horizontal.png"
                alt="Karakaara"
                width={180}
                height={45}
              />
            </Link>
            <p className={s.tagline}>Serious proposals. Modern trust.</p>
            <p className={s.desc}>
              Sri Lanka&apos;s matrimony platform for structured, private, and
              family-ready marriage proposals.
            </p>
          </div>

          <nav className={s.nav} aria-label="Footer navigation">
            <div className={s.col}>
              <span className={s.colHdr}>Platform</span>
              <a href="#features" className={s.link}>Features</a>
              <a href="#how-it-works" className={s.link}>Process</a>
              <a href="#download" className={s.link}>Download</a>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Company</span>
              <a href="#about" className={s.link}>Trust</a>
              <a href="mailto:hello@karakaara.lk" className={s.link}>Contact</a>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Legal</span>
              <a href="/privacy" className={s.link}>Privacy Policy</a>
              <a href="/terms" className={s.link}>Terms of Service</a>
            </div>
          </nav>
        </div>

        <div className={s.bottom}>
          <p>Copyright 2026 Karakaara - Lankovate - All rights reserved.</p>
          <p className={s.love}>Built for Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
