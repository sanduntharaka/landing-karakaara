'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { APP_URLS } from '@/lib/config';
import s from './Nav.module.css';

export default function Nav() {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside as EventListener);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside as EventListener);
    };
  }, [menuOpen]);

  function handleAnchor(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 68;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  }

  return (
    <nav
      ref={navRef}
      className={`${s.nav} ${scrolled ? s.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={s.container}>
        <Link href="/" className={s.logo} aria-label="Karakaara home">
          <Image src="/assets/images/horizontal.png" alt="Karakaara" className={s.logoImg} width={160} height={40} priority />
        </Link>

        <ul className={s.links} role="list">
          {[['features','Features'],['how-it-works','How It Works'],['about','About']].map(([id, label]) => (
            <li key={id}>
              <Link href={`/#${id}`} className={s.link} onClick={(e) => handleAnchor(e as React.MouseEvent<HTMLAnchorElement>, id)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={s.actions}>
          <a className={s.btnLogin} href={APP_URLS.web} aria-label="Sign in">Sign In</a>
          <a className={s.btnStart} href={APP_URLS.web} aria-label="Get started">Get Started</a>
        </div>

        <button
          className={`${s.hamburger} ${menuOpen ? s.open : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={s.mobileMenu}>
          {[['features','Features'],['how-it-works','How It Works'],['about','About']].map(([id, label]) => (
            <Link key={id} href={`/#${id}`} className={s.mobileLink} onClick={(e) => handleAnchor(e as React.MouseEvent<HTMLAnchorElement>, id)}>
              {label}
            </Link>
          ))}
          <div className={s.mobileActions}>
            <a className={s.btnLogin} href={APP_URLS.web}>Sign In</a>
            <a className={s.btnStart} href={APP_URLS.web}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}
