import Image from "next/image";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer} role="contentinfo">
      <div className="container">
        <div className={s.main}>
          <div className={s.brand}>
            <a href="/" className={s.logoWrap}>
              <Image
                src="/assets/images/horizontal.png"
                alt="Karakaara"
                width={180}
                height={45}
              />
            </a>
            <p className={s.tagline}>Where Hearts Meet Tradition</p>
            <p className={s.desc}>
              Sri Lanka&apos;s premier matrimony platform - connecting hearts
              through tradition, culture, and the timeless pursuit of
              partnership.
            </p>
          </div>

          <nav className={s.nav} aria-label="Footer navigation">
            <div className={s.col}>
              <span className={s.colHdr}>Platform</span>
              <a href="#features" className={s.link}>
                Features
              </a>
              <a href="#how-it-works" className={s.link}>
                How It Works
              </a>
              <a href="#download" className={s.link}>
                Download
              </a>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Company</span>
              <a href="#about" className={s.link}>
                About
              </a>
              <a href="mailto:contact@karakaara.lk" className={s.link}>
                Contact
              </a>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Legal</span>
              <a href="/privacy" className={s.link}>
                Privacy Policy
              </a>
              <a href="/terms" className={s.link}>
                Terms of Service
              </a>
            </div>
          </nav>
        </div>

        <div className={s.bottom}>
          <p>
            © 2026 Karakaara &nbsp;·&nbsp; Lankovate &nbsp;·&nbsp; All rights
            reserved.
          </p>
          <p className={s.love}>Made with ♥ for Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
