"use client";

import { motion } from "framer-motion";

interface ListItem {
  emoji: string;
  text: string;
}

interface ListSlideProps {
  title: string;
  items: ListItem[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const headingVariant = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const listItem = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ListSlide({ title, items }: ListSlideProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center px-16 py-12 relative"
      style={{ background: "#050510" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="w-full max-w-3xl z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Title */}
        <motion.h2
          variants={headingVariant}
          className="font-bold mb-10"
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            color: "#f1f5f9",
          }}
        >
          {title}
        </motion.h2>

        {/* List */}
        <ul className="space-y-5">
          {items.map((li, i) => (
            <motion.li
              key={i}
              variants={listItem}
              className="flex items-start gap-5 group"
            >
              {/* Emoji badge */}
              <span
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-2xl"
                style={{
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                }}
              >
                {li.emoji}
              </span>

              {/* Text */}
              <div className="flex-1 py-2">
                <p
                  className="leading-snug"
                  style={{
                    fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
                    color: "#94a3b8",
                  }}
                >
                  {/* Bold part before em-dash */}
                  {li.text.includes("—") ? (
                    <>
                      <strong style={{ color: "#e2e8f0" }}>
                        {li.text.split("—")[0].trim()}
                      </strong>
                      <span style={{ color: "#475569" }}> — </span>
                      <span>{li.text.split("—").slice(1).join("—").trim()}</span>
                    </>
                  ) : (
                    li.text
                  )}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
