'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { handleLogin } from '@/lib/config';
import s from './Nav.module.css';

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <motion.nav
      className={s.nav}
      animate={scrolled ? 'scrolled' : 'top'}
      variants={{
        top:     { backgroundColor: 'rgba(243,233,228,0)', boxShadow: 'none', backdropFilter: 'blur(0px)' },
        scrolled:{ backgroundColor: 'rgba(243,233,228,0.88)', boxShadow: '0 1px 0 rgba(209,164,110,.3), 0 2px 8px rgba(45,27,14,.07)', backdropFilter: 'blur(16px)' },
      }}
      transition={{ duration: 0.3 }}
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
          <button className={s.btnLogin} onClick={handleLogin} aria-label="Sign in">Sign In</button>
          <button className={s.btnStart} onClick={handleLogin} aria-label="Get started">Get Started</button>
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={s.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {[['features','Features'],['how-it-works','How It Works'],['about','About']].map(([id, label]) => (
              <Link key={id} href={`/#${id}`} className={s.mobileLink} onClick={(e) => handleAnchor(e as React.MouseEvent<HTMLAnchorElement>, id)}>
                {label}
              </Link>
            ))}
            <div className={s.mobileActions}>
              <button className={s.btnLogin} onClick={handleLogin}>Sign In</button>
              <button className={s.btnStart} onClick={handleLogin}>Get Started</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
