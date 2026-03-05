"use client";

import { motion } from "framer-motion";

interface SplitSlideProps {
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  footer?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SplitSlide({
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  footer,
}: SplitSlideProps) {
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
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(99,102,241,0.06) 0%, transparent 70%)",
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

        {/* Split panels */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left panel — bad */}
          <motion.div
            variants={item}
            className="p-8 rounded-2xl border"
            style={{
              background: "rgba(239,68,68,0.04)",
              borderColor: "rgba(239,68,68,0.2)",
            }}
          >
            <h3
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#fca5a5",
              }}
            >
              {leftTitle}
            </h3>
            <ul className="space-y-4">
              {leftItems.map((text, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3"
                  style={{ color: "#64748b" }}
                >
                  <span
                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#ef4444", marginTop: "0.45rem" }}
                  />
                  <span style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right panel — good */}
          <motion.div
            variants={item}
            className="p-8 rounded-2xl border relative"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(0,212,255,0.06) 100%)",
              borderColor: "rgba(99,102,241,0.4)",
              boxShadow: "0 0 40px rgba(99,102,241,0.12)",
            }}
          >
            <h3
              className="font-bold mb-6"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "#a5b4fc",
              }}
            >
              {rightTitle}
            </h3>
            <ul className="space-y-4">
              {rightItems.map((text, i) => (
                <motion.li
                  key={i}
                  variants={item}
                  className="flex items-start gap-3"
                  style={{ color: "#94a3b8" }}
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#6366f1", marginTop: "0.45rem" }}
                  />
                  <span style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer */}
        {footer && (
          <motion.p
            variants={item}
            className="text-center font-medium"
            style={{
              fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              color: "#6366f1",
            }}
          >
            {footer}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}
