"use client";

import { motion } from "framer-motion";

interface FactsSlideProps {
  title: string;
  bullets: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.3 },
  },
};

const bulletVariant = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function FactsSlide({ title, bullets }: FactsSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl rounded-2xl p-12"
        style={{
          background: "rgba(15, 15, 35, 0.85)",
          border: "1px solid rgba(99,102,241,0.25)",
          boxShadow: "0 0 60px rgba(99,102,241,0.08)",
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title */}
        <motion.h2
          variants={titleVariant}
          className="font-bold mb-10"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            color: "#e2e8f0",
          }}
        >
          {title}
        </motion.h2>

        {/* Bullets */}
        <div className="flex flex-col gap-6">
          {bullets.map((bullet, i) => (
            <motion.div
              key={i}
              variants={bulletVariant}
              className="flex items-start gap-4"
            >
              {/* Indigo accent dot */}
              <span
                className="mt-2 shrink-0 rounded-full"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)",
                  boxShadow: "0 0 8px rgba(99,102,241,0.6)",
                }}
              />
              <p
                style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
