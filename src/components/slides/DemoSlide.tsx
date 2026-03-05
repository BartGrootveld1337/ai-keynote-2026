"use client";

import { motion } from "framer-motion";

interface DemoSlideProps {
  label: string;
  title: string;
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function DemoSlide({ label, title, sub }: DemoSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-8 rounded-3xl pointer-events-none"
        style={{
          border: "1px solid rgba(0,212,255,0.2)",
          boxShadow:
            "0 0 60px rgba(0,212,255,0.06), inset 0 0 60px rgba(0,212,255,0.03)",
        }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(0,212,255,0.06), inset 0 0 60px rgba(0,212,255,0.03)",
            "0 0 100px rgba(0,212,255,0.12), inset 0 0 80px rgba(0,212,255,0.06)",
            "0 0 60px rgba(0,212,255,0.06), inset 0 0 60px rgba(0,212,255,0.03)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner decorations */}
      {["top-10 left-10", "top-10 right-10", "bottom-10 left-10", "bottom-10 right-10"].map(
        (pos, i) => (
          <div
            key={i}
            className={`absolute ${pos} w-6 h-6 pointer-events-none`}
            style={{
              borderColor: "rgba(0,212,255,0.4)",
              borderStyle: "solid",
              borderWidth: 0,
              ...(i === 0 && { borderTopWidth: 2, borderLeftWidth: 2 }),
              ...(i === 1 && { borderTopWidth: 2, borderRightWidth: 2 }),
              ...(i === 2 && { borderBottomWidth: 2, borderLeftWidth: 2 }),
              ...(i === 3 && { borderBottomWidth: 2, borderRightWidth: 2 }),
            }}
          />
        )
      )}

      <motion.div
        className="flex flex-col items-center text-center z-10 max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* LIVE DEMO badge */}
        <motion.div variants={item} className="mb-8 relative">
          <motion.span
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold tracking-[0.2em] uppercase"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(99,102,241,0.15))",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00d4ff",
            }}
            animate={{
              borderColor: [
                "rgba(0,212,255,0.4)",
                "rgba(0,212,255,0.8)",
                "rgba(0,212,255,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Pulsing dot */}
            <motion.span
              className="w-2 h-2 rounded-full"
              style={{ background: "#00d4ff" }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            {label}
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={item}
          className="font-black mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#f1f5f9",
            lineHeight: 1.15,
          }}
        >
          {title}
        </motion.h2>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-16 h-0.5 rounded-full mb-6"
          style={{ background: "linear-gradient(90deg, #6366f1, #00d4ff)" }}
        />

        {/* Sub */}
        <motion.p
          variants={item}
          className="leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
            color: "#64748b",
          }}
        >
          {sub}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
