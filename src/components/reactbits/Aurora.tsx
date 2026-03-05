"use client";

import { motion } from "framer-motion";

interface AuroraProps {
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

/**
 * Aurora — inspired by React Bits aurora background.
 * Soft animated gradient blobs that shift slowly like a northern lights effect.
 * Designed to sit as an absolute background behind slide content.
 */
export default function Aurora({ className = "", intensity = "subtle" }: AuroraProps) {
  const opacityMap = {
    subtle: { blob1: 0.12, blob2: 0.09, blob3: 0.07 },
    medium: { blob1: 0.22, blob2: 0.16, blob3: 0.12 },
    strong: { blob1: 0.35, blob2: 0.25, blob3: 0.18 },
  };
  const op = opacityMap[intensity];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Blob 1 — indigo, top-left drift */}
      <motion.div
        style={{
          position: "absolute",
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(99,102,241,${op.blob1}) 0%, transparent 70%)`,
          top: "-10%",
          left: "-10%",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 40, -20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 — violet, center drift */}
      <motion.div
        style={{
          position: "absolute",
          width: "60%",
          height: "60%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(139,92,246,${op.blob2}) 0%, transparent 70%)`,
          top: "20%",
          left: "30%",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Blob 3 — cyan, bottom-right */}
      <motion.div
        style={{
          position: "absolute",
          width: "55%",
          height: "55%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, rgba(0,212,255,${op.blob3}) 0%, transparent 70%)`,
          bottom: "-10%",
          right: "-10%",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, -50, 25, 0],
          scale: [1, 1.06, 0.97, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
      />
    </div>
  );
}
