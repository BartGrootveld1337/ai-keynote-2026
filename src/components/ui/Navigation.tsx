"use client";

import { motion } from "framer-motion";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
}

export default function Navigation({
  onPrev,
  onNext,
  canPrev,
  canNext,
}: NavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <motion.button
        onClick={onPrev}
        disabled={!canPrev}
        className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
        style={{
          background: canPrev ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${canPrev ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)"}`,
          color: canPrev ? "#a5b4fc" : "#334155",
          cursor: canPrev ? "pointer" : "default",
        }}
        whileHover={canPrev ? { scale: 1.1 } : {}}
        whileTap={canPrev ? { scale: 0.95 } : {}}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 12L6 8L10 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={onNext}
        disabled={!canNext}
        className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
        style={{
          background: canNext
            ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(0,212,255,0.1))"
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${canNext ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.06)"}`,
          color: canNext ? "#a5b4fc" : "#334155",
          cursor: canNext ? "pointer" : "default",
        }}
        whileHover={canNext ? { scale: 1.1 } : {}}
        whileTap={canNext ? { scale: 0.95 } : {}}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
}
