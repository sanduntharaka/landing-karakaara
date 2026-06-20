import Image from "next/image";
import Link from "next/link";
import s from "./Footer.module.css";

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={s.icon}>
      <rect x="3" y="5" width="14" height="10" rx="2" fill="none" />
      <path d="m4 6 6 5 6-5" fill="none" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={s.icon}>
      <path
        d="M6.4 3.8 8 7.2 6.7 8.4c.8 1.7 2.2 3.1 4 4l1.2-1.3 3.4 1.6-.6 2.8c-.2.8-.9 1.3-1.7 1.2C7.3 16 3.9 12.6 3.2 7c-.1-.8.4-1.5 1.2-1.7l2-.5Z"
        fill="none"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={s.icon}>
      <path d="M11.4 17v-6h2l.4-2.4h-2.4V7.1c0-.7.2-1.1 1.2-1.1h1.3V3.8c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.1-3.2 3.2v1.8H6.7V11h2.1v6h2.6Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={s.icon}>
      <path d="M4.2 16.5 5 13.7a6.1 6.1 0 1 1 2.4 2.2l-3.2.6Z" fill="none" />
      <path
        d="M8 7.5c.1-.3.3-.4.5-.4h.4c.1 0 .3 0 .4.3l.5 1.1c.1.2.1.4 0 .5l-.4.5c.4.7 1 1.3 1.8 1.7l.5-.6c.1-.1.3-.2.5-.1l1.2.6c.2.1.3.3.3.5 0 .6-.5 1.2-1.1 1.2-2.2-.1-5-2.5-5.2-4.7 0-.2 0-.4.1-.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

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
              <Link href="/#features" className={s.link}>
                Features
              </Link>
              <Link href="/#how-it-works" className={s.link}>
                How It Works
              </Link>
              <Link href="/#download" className={s.link}>
                Download
              </Link>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Company</span>
              <Link href="/#about" className={s.link}>
                About
              </Link>
              <a href="mailto:contact@karakaara.lk" className={s.link}>
                <MailIcon />
                Email
              </a>
              <a href="tel:+94767700657" className={s.link}>
                <PhoneIcon />
                +94 76 770 0657
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61590546328729"
                className={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
                Facebook
              </a>
              <a
                href="https://wa.me/+94767700657"
                className={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
            <div className={s.col}>
              <span className={s.colHdr}>Legal</span>
              <Link href="/privacy" className={s.link}>
                Privacy Policy
              </Link>
              {/* <Link href="/return-policy" className={s.link}>
                Return & Refund Policy
              </Link> */}
              <Link href="/business-terms" className={s.link}>
                Terms & Conditions
              </Link>
              <Link href="/delete-account" className={s.link}>
                Delete Account
              </Link>
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
