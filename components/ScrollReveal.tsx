"use client";

import { useEffect } from "react";

// Fades section headers and [data-stagger] children in as they scroll into view.
// Elements already on screen at load are shown immediately, so nothing flashes.
const SELECTOR = ".section-hdr, [data-reveal], [data-stagger] > *";

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const vh = window.innerHeight;

    els.forEach((el) => {
      const parent = el.parentElement;
      if (parent?.hasAttribute("data-stagger")) {
        const i = Array.prototype.indexOf.call(parent.children, el);
        el.style.setProperty("--reveal-delay", `${i * 90}ms`);
      }
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-shown");
    });
    document.documentElement.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => {
      if (!el.classList.contains("is-shown")) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
