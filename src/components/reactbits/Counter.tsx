"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Counter — inspired by React Bits counter animation.
 * Counts up from `from` to `to` with an easing curve when element enters view.
 */
export default function Counter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
  style,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(from);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isInView) return;

    const delayMs = delay * 1000;
    const durationMs = duration * 1000;

    const timeout = setTimeout(() => {
      const animate = (now: number) => {
        if (startTimeRef.current === null) startTimeRef.current = now;
        const elapsed = now - startTimeRef.current;
        const progress = Math.min(elapsed / durationMs, 1);

        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = from + (to - from) * eased;
        setValue(parseFloat(current.toFixed(decimals)));

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startTimeRef.current = null;
    };
  }, [isInView, from, to, duration, delay, decimals]);

  const displayValue = value.toFixed(decimals);

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.4, delay }}
    >
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
