"use client";

import { motion } from "framer-motion";
import { Particles } from "@/components/reactbits";

interface HorizonSlideProps {
  title: string;
  sub: string;
  small: string;
}

export default function HorizonSlide({ title, sub, small }: HorizonSlideProps) {
  return (
    <motion.div
      className="w-full h-full relative flex flex-col items-center justify-center"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* React Bits Particles background */}
      <Particles
        count={120}
        speed={0.35}
        maxRadius={2}
        connectDistance={120}
        opacity={0.8}
        colors={["#6366f1", "#8b5cf6", "#00d4ff", "#a5b4fc"]}
      />

      {/* Horizon gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(99,102,241,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-16 max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Giant title */}
        <motion.h1
          className="font-black mb-6 leading-none"
          style={{
            fontSize: "clamp(4rem, 14vw, 10rem)",
            background:
              "linear-gradient(135deg, #f1f5f9 0%, #6366f1 40%, #00d4ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 40px rgba(99,102,241,0.3))",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="font-semibold mb-6"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 2rem)",
            color: "#e2e8f0",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {sub}
        </motion.p>

        <motion.div
          className="w-12 h-0.5 rounded-full mb-6"
          style={{ background: "linear-gradient(90deg, #6366f1, #00d4ff)" }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        />

        <motion.p
          className="max-w-xl leading-relaxed"
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "#475569",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          {small}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
