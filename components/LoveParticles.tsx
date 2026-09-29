"use client";

import { useEffect, useRef } from "react";

// Decorative canvas overlay: hearts and stars drift down the page, the cursor
// leaves a sparkle trail, and click/drag releases bursts of hearts.
// Never intercepts input (pointer-events: none) and is off for reduced motion.

type Shape = "heart" | "star" | "sparkle";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  vr: number;
  shape: Shape;
  color: string;
  alpha: number;
  life: number; // remaining frames; Infinity for ambient particles
  maxLife: number;
  swayPhase: number;
  ambient: boolean;
};

const COLORS = ["#8B2635", "#B8843E", "#D1A46E", "#C2485A", "#E8C38F"];
const MAX_EFFECT_PARTICLES = 220;

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawHeart(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, s * 0.35);
  ctx.bezierCurveTo(-s * 1.1, -s * 0.35, -s * 0.5, -s * 1.1, 0, -s * 0.45);
  ctx.bezierCurveTo(s * 0.5, -s * 1.1, s * 1.1, -s * 0.35, 0, s * 0.35);
  ctx.closePath();
  ctx.fill();
}

function drawStar(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? s : s * 0.45;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function drawSparkle(ctx: CanvasRenderingContext2D, s: number) {
  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.quadraticCurveTo(0, 0, s, 0);
  ctx.quadraticCurveTo(0, 0, 0, s);
  ctx.quadraticCurveTo(0, 0, -s, 0);
  ctx.quadraticCurveTo(0, 0, 0, -s);
  ctx.fill();
}

export default function LoveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    const particles: Particle[] = [];
    const isSmall = window.matchMedia("(max-width: 640px)").matches;
    const ambientCount = isSmall ? 10 : 20;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawnAmbient(startAnywhere: boolean): Particle {
      const shape: Shape = Math.random() < 0.55 ? "heart" : "star";
      return {
        x: Math.random() * w,
        y: startAnywhere ? Math.random() * h : -20,
        vx: 0,
        vy: 0.35 + Math.random() * 0.6,
        size: 5 + Math.random() * 7,
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        shape,
        color: pick(COLORS),
        alpha: 0.18 + Math.random() * 0.22,
        life: Infinity,
        maxLife: Infinity,
        swayPhase: Math.random() * Math.PI * 2,
        ambient: true,
      };
    }

    function spawnEffect(x: number, y: number, shape: Shape, speed: number, size: number, life: number) {
      if (particles.length > MAX_EFFECT_PARTICLES + ambientCount) return;
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (shape === "heart" ? 1.2 : 0.3),
        size,
        rot: (Math.random() - 0.5) * 0.6,
        vr: (Math.random() - 0.5) * 0.08,
        shape,
        color: pick(COLORS),
        alpha: 0.9,
        life,
        maxLife: life,
        swayPhase: Math.random() * Math.PI * 2,
        ambient: false,
      });
    }

    function burst(x: number, y: number, count: number) {
      for (let i = 0; i < count; i++) {
        spawnEffect(x, y, Math.random() < 0.7 ? "heart" : "star", 1.5 + Math.random() * 3.5, 6 + Math.random() * 8, 60 + Math.random() * 40);
      }
    }

    resize();
    for (let i = 0; i < ambientCount; i++) particles.push(spawnAmbient(true));

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    function onPointerDown(e: PointerEvent) {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      burst(e.clientX, e.clientY, isSmall ? 8 : 14);
    }

    function onPointerMove(e: PointerEvent) {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);
      if (dist < (dragging ? 10 : 16)) return;
      lastX = e.clientX;
      lastY = e.clientY;
      if (dragging) {
        // Dragging paints a ribbon of hearts along the path
        spawnEffect(e.clientX, e.clientY, "heart", 0.6 + Math.random(), 6 + Math.random() * 6, 70);
        spawnEffect(e.clientX, e.clientY, "sparkle", 1 + Math.random() * 1.5, 3 + Math.random() * 3, 45);
      } else if (e.pointerType === "mouse") {
        spawnEffect(e.clientX, e.clientY, "sparkle", 0.3 + Math.random() * 0.6, 2.5 + Math.random() * 3, 40);
      }
    }

    function onPointerUp() {
      dragging = false;
    }

    let raf = 0;
    let t = 0;

    function frame() {
      t++;
      ctx!.clearRect(0, 0, w, h);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.ambient) {
          p.y += p.vy;
          p.x += Math.sin(t * 0.012 + p.swayPhase) * 0.4;
          if (p.y > h + 20) particles[i] = spawnAmbient(false);
        } else {
          p.vy += p.shape === "sparkle" ? 0.01 : 0.06; // gentle gravity
          p.vx *= 0.97;
          p.vy *= 0.985;
          p.x += p.vx;
          p.y += p.vy;
          p.life--;
          p.alpha = 0.9 * (p.life / p.maxLife);
          if (p.life <= 0) {
            particles.splice(i, 1);
            continue;
          }
        }
        p.rot += p.vr;

        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate(p.rot);
        ctx!.globalAlpha = p.alpha;
        ctx!.fillStyle = p.color;
        if (!p.ambient) {
          ctx!.shadowColor = p.color;
          ctx!.shadowBlur = 8;
        }
        if (p.shape === "heart") drawHeart(ctx!, p.size);
        else if (p.shape === "star") drawStar(ctx!, p.size);
        else drawSparkle(ctx!, p.size);
        ctx!.restore();
      }

      raf = requestAnimationFrame(frame);
    }

    function onVisibility() {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 99, pointerEvents: "none" }}
    />
  );
}
