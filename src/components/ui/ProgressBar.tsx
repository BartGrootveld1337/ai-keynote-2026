"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-50"
      style={{ background: "rgba(255,255,255,0.05)" }}
    >
      <motion.div
        className="h-full"
        style={{
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #00d4ff)",
          boxShadow: "0 0 8px rgba(99,102,241,0.6)",
        }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </div>
  );
}
