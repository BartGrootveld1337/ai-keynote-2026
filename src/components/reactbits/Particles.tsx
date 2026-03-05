"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  count?: number;
  colors?: string[];
  speed?: number;
  maxRadius?: number;
  connectDistance?: number;
  opacity?: number;
}

/**
 * Particles — inspired by React Bits particles background.
 * Canvas-based floating particle network. Suitable for slide backgrounds.
 */
export default function Particles({
  className = "",
  count = 100,
  colors = ["#6366f1", "#8b5cf6", "#00d4ff", "#a5b4fc"],
  speed = 0.35,
  maxRadius = 2.5,
  connectDistance = 130,
  opacity = 0.75,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
      color: string;
    }

    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: Math.random() * maxRadius + 0.5,
      alpha: Math.random() * 0.55 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let rafId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectDistance) {
            const lineAlpha = 0.07 * (1 - dist / connectDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const hex = Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fillStyle = `${p.color}${hex}`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [count, colors, speed, maxRadius, connectDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
