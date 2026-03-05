"use client";

import { motion } from "framer-motion";

export default function BlackSlide() {
  return (
    <motion.div
      className="w-full h-full"
      style={{ background: "#000000" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
}
