"use client";

import { motion } from "framer-motion";
import { Aurora, BlurText, SplitText } from "@/components/reactbits";

interface TitleSlideProps {
  title: string;
  subtitle: string;
  meta: string;
  footer?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TitleSlide({ title, subtitle, meta, footer }: TitleSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Aurora animated background */}
      <Aurora intensity="subtle" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Decorative top line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #6366f1, #00d4ff, #6366f1, transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />

      <motion.div
        className="flex flex-col items-center text-center max-w-5xl z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pre-label */}
        <motion.div variants={item} className="mb-6">
          <span
            className="text-sm font-medium tracking-[0.25em] uppercase px-4 py-2 rounded-full border"
            style={{
              color: "#00d4ff",
              borderColor: "rgba(0,212,255,0.3)",
              background: "rgba(0,212,255,0.05)",
            }}
          >
            NLdigital Ondernemersdag · 15 april 2026
          </span>
        </motion.div>

        {/* Main title — BlurText animation */}
        <div className="mb-6">
          <BlurText
            text={title}
            delay={0.3}
            stepDelay={0.07}
            as="h1"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #f1f5f9 0%, #6366f1 50%, #00d4ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          />
        </div>

        {/* Divider */}
        <motion.div
          variants={item}
          className="w-16 h-1 rounded-full mb-8"
          style={{ background: "linear-gradient(90deg, #6366f1, #00d4ff)" }}
        />

        {/* Subtitle — SplitText animation */}
        <div className="mb-10 max-w-2xl">
          <SplitText
            text={subtitle}
            delay={0.7}
            stepDelay={0.04}
            mode="words"
            as="p"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              lineHeight: 1.7,
              color: "#94a3b8",
            }}
          />
        </div>

        {/* Meta / name */}
        {!footer && (
          <motion.p
            variants={item}
            className="text-base font-medium tracking-wide"
            style={{ color: "#64748b" }}
          >
            {meta}
          </motion.p>
        )}

        {/* Footer for closing slide */}
        {footer && (
          <motion.div variants={item} className="mt-4 text-center">
            <p className="text-base font-medium mb-2" style={{ color: "#64748b" }}>
              {meta}
            </p>
            <p
              className="text-base font-medium tracking-wide"
              style={{ color: "#6366f1" }}
            >
              {footer}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom accent */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />
    </motion.div>
  );
}
