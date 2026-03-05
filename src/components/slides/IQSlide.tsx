"use client";

import { motion } from "framer-motion";

interface IQSlideProps {
  leftNumber: string;
  leftLabel: string;
  rightNumber: string;
  rightLabel: string;
  sub: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function IQSlide({
  leftNumber,
  leftLabel,
  rightNumber,
  rightLabel,
  sub,
}: IQSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 65%)",
        }}
      />

      <motion.div
        className="z-10 w-full max-w-5xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Numbers row */}
        <motion.div
          variants={item}
          className="flex items-end justify-center gap-16 mb-4"
        >
          {/* Left number */}
          <div className="flex flex-col items-center">
            <span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(4rem, 10vw, 7rem)",
                color: "#64748b",
              }}
            >
              {leftNumber}
            </span>
            <span
              className="mt-2 text-sm font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#475569" }}
            >
              {leftLabel}
            </span>
          </div>

          {/* VS */}
          <div className="flex flex-col items-center pb-8">
            <span
              className="font-black text-2xl"
              style={{ color: "#334155" }}
            >
              vs
            </span>
          </div>

          {/* Right number */}
          <div className="flex flex-col items-center">
            <motion.span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(4rem, 10vw, 7rem)",
                background:
                  "linear-gradient(135deg, #6366f1, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(99,102,241,0.35))",
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 30px rgba(99,102,241,0.3))",
                  "drop-shadow(0 0 50px rgba(99,102,241,0.5))",
                  "drop-shadow(0 0 30px rgba(99,102,241,0.3))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {rightNumber}
            </motion.span>
            <span
              className="mt-2 text-sm font-semibold tracking-[0.15em] uppercase"
              style={{ color: "#6366f1" }}
            >
              {rightLabel}
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-20 h-0.5 rounded-full mx-auto mb-8"
          style={{ background: "linear-gradient(90deg, #6366f1, #00d4ff)" }}
        />

        {/* Sub text */}
        <motion.p
          variants={item}
          className="text-center max-w-2xl mx-auto leading-relaxed"
          style={{
            fontSize: "clamp(0.95rem, 1.7vw, 1.2rem)",
            color: "#64748b",
          }}
        >
          {sub}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
