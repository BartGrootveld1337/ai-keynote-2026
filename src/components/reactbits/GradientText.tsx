"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  angle?: number;
  animate?: boolean;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  style?: React.CSSProperties;
}

/**
 * GradientText — inspired by React Bits gradient-text.
 * Renders text with an animated gradient fill using CSS background-clip.
 * Default gradient: #6366f1 → #8b5cf6 → #00d4ff (brand palette).
 */
export default function GradientText({
  text,
  className = "",
  from = "#6366f1",
  via = "#8b5cf6",
  to = "#00d4ff",
  angle = 135,
  animate: doAnimate = true,
  delay = 0,
  as: Tag = "span",
  style,
}: GradientTextProps) {
  const gradient = `linear-gradient(${angle}deg, ${from}, ${via}, ${to})`;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      style={{ display: "inline-block" }}
    >
      <Tag
        className={className}
        style={{
          background: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          ...(doAnimate
            ? {
                backgroundSize: "200% 200%",
                animation: "gradientShift 4s ease infinite",
              }
            : {}),
          ...style,
        }}
      >
        {text}
      </Tag>

      {doAnimate && (
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      )}
    </motion.div>
  );
}
