"use client";

import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stepDelay?: number;
  mode?: "chars" | "words";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  style?: React.CSSProperties;
}

/**
 * SplitText — inspired by React Bits split-text animation.
 * Splits text into characters or words and animates each in sequence.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.45,
  stepDelay = 0.03,
  mode = "words",
  as: Tag = "div",
  style,
}: SplitTextProps) {
  const units = mode === "chars" ? text.split("") : text.split(" ");

  const unitVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: delay + i * stepDelay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <Tag
      className={className}
      style={{ ...style, perspective: "800px" }}
      aria-label={text}
    >
      {units.map((unit, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={unitVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: "inline-block",
            marginRight: mode === "words" ? "0.3em" : "0",
            transformOrigin: "bottom center",
          }}
        >
          {unit === " " ? "\u00A0" : unit}
        </motion.span>
      ))}
    </Tag>
  );
}
