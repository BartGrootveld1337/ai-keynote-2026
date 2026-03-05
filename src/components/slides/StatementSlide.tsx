"use client";

import { motion } from "framer-motion";

interface StatementSlideProps {
  number: string;
  label: string;
  sub: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function StatementSlide({ number, label, sub }: StatementSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="flex flex-col items-center text-center z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Giant number */}
        <motion.div variants={item} className="relative">
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: "clamp(8rem, 20vw, 16rem)",
              background:
                "linear-gradient(135deg, #00d4ff 0%, #6366f1 60%, #8b5cf6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 60px rgba(0,212,255,0.25))",
            }}
          >
            {number}
          </span>
        </motion.div>

        {/* Label */}
        <motion.p
          variants={item}
          className="font-semibold tracking-[0.3em] uppercase mt-2 mb-8"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.75rem)",
            color: "#94a3b8",
          }}
        >
          {label}
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-20 h-0.5 rounded-full mb-8"
          style={{ background: "linear-gradient(90deg, #6366f1, #00d4ff)" }}
        />

        {/* Sub text */}
        <motion.p
          variants={item}
          className="max-w-2xl text-center leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            color: "#64748b",
          }}
        >
          {sub}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
