"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/reactbits";

interface GridItem {
  number: string;
  label: string;
  source: string;
}

interface GridSlideProps {
  title: string;
  items: GridItem[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const colors = [
  { text: "#6366f1", glow: "rgba(99,102,241,0.15)", border: "rgba(99,102,241,0.3)" },
  { text: "#00d4ff", glow: "rgba(0,212,255,0.12)", border: "rgba(0,212,255,0.3)" },
  { text: "#8b5cf6", glow: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.3)" },
  { text: "#00d4ff", glow: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.25)" },
];

/**
 * Parse a number string like "78%", "2.5x", "46%" into { value, suffix, prefix }.
 */
function parseNumber(raw: string): { value: number; suffix: string; prefix: string } {
  const prefix = raw.match(/^[^0-9.]*/)?.[0] ?? "";
  const suffix = raw.match(/[^0-9.]+$/)?.[0] ?? "";
  const value = parseFloat(raw.replace(/[^0-9.]/g, "")) || 0;
  return { value, suffix, prefix };
}

export default function GridSlide({ title, items }: GridSlideProps) {
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
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="w-full max-w-5xl z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-center font-bold mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
            color: "#f1f5f9",
          }}
        >
          {title}
        </motion.h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-6">
          {items.map((gridItem, i) => {
            const color = colors[i % colors.length];
            const { value, suffix, prefix } = parseNumber(gridItem.number);

            return (
              <motion.div
                key={i}
                variants={item}
                className="p-8 rounded-2xl border flex flex-col"
                style={{
                  background: color.glow,
                  borderColor: color.border,
                }}
              >
                {/* Animated counter number */}
                <Counter
                  from={0}
                  to={value}
                  duration={1.8}
                  delay={0.3 + i * 0.12}
                  suffix={suffix}
                  prefix={prefix}
                  decimals={value % 1 !== 0 ? 1 : 0}
                  className="font-black leading-none mb-3"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    color: color.text,
                    filter: `drop-shadow(0 0 20px ${color.text}40)`,
                  }}
                />

                {/* Label */}
                <span
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
                    color: "#e2e8f0",
                  }}
                >
                  {gridItem.label}
                </span>

                {/* Source */}
                <span
                  className="text-xs font-medium mt-auto pt-3"
                  style={{
                    color: "#475569",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {gridItem.source}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
