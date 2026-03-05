"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stepDelay?: number; // delay between each word in ms
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  style?: React.CSSProperties;
}

/**
 * BlurText — inspired by React Bits blur-text animation.
 * Each word blurs in from out-of-focus to sharp, staggered.
 */
export default function BlurText({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
  stepDelay = 0.08,
  as: Tag = "div",
  style,
}: BlurTextProps) {
  const words = text.split(" ");

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 8,
    },
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        delay: delay + i * stepDelay,
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <Tag className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
