"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SlideCounterProps {
  current: number;
  total: number;
}

export default function SlideCounter({ current, total }: SlideCounterProps) {
  return (
    <div
      className="fixed bottom-6 right-8 z-50 flex items-center gap-1.5"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "0.8rem",
        fontWeight: 500,
        color: "#475569",
        letterSpacing: "0.05em",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2 }}
          style={{ color: "#6366f1" }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
}
