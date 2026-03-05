"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

interface Column {
  emoji: string;
  year: string;
  title: string;
  body: string;
  highlighted?: boolean;
}

interface ThreeColumnsSlideProps {
  title: string;
  columns: Column[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ThreeColumnsSlide({ title, columns }: ThreeColumnsSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-12 py-12 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="w-full max-w-6xl z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-center font-bold mb-12"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            color: "#f1f5f9",
          }}
        >
          {title}
        </motion.h2>

        {/* Columns */}
        <div className="grid grid-cols-3 gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              variants={item}
              className={clsx(
                "relative flex flex-col items-center text-center p-8 rounded-2xl border transition-all",
                col.highlighted
                  ? "border-indigo-500/50"
                  : "border-white/5"
              )}
              style={{
                background: col.highlighted
                  ? "linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%)"
                  : "rgba(255,255,255,0.02)",
                boxShadow: col.highlighted
                  ? "0 0 40px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
                  : "none",
              }}
            >
              {col.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
                    color: "white",
                  }}
                >
                  Nu
                </div>
              )}

              {/* Emoji */}
              <span className="text-5xl mb-4 block">{col.emoji}</span>

              {/* Year */}
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full"
                style={{
                  color: col.highlighted ? "#a5b4fc" : "#64748b",
                  background: col.highlighted
                    ? "rgba(99,102,241,0.15)"
                    : "rgba(255,255,255,0.04)",
                }}
              >
                {col.year}
              </span>

              {/* Title */}
              <h3
                className="font-bold mb-3"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.4rem)",
                  color: col.highlighted ? "#e2e8f0" : "#94a3b8",
                }}
              >
                {col.title}
              </h3>

              {/* Body */}
              <p
                className="leading-relaxed"
                style={{
                  fontSize: "clamp(0.85rem, 1.3vw, 1rem)",
                  color: col.highlighted ? "#94a3b8" : "#475569",
                }}
              >
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
