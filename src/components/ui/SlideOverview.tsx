"use client";

import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/lib/slides";

interface SlideOverviewProps {
  visible: boolean;
  current: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}

const slideTypeEmoji: Record<string, string> = {
  black: "⬛",
  title: "🏷️",
  statement: "💬",
  "three-columns": "📊",
  split: "↔️",
  grid: "🔢",
  list: "📋",
  demo: "🎬",
  horizon: "🌅",
  iq: "🧠",
  facts: "📈",
};

function getSlideLabel(index: number) {
  const slide = slides[index];
  const emoji = slideTypeEmoji[slide.type] ?? "▪️";

  const title =
    slide.title ??
    slide.horizonTitle ??
    slide.demoTitle ??
    slide.sub ??
    slide.type;

  return { emoji, title };
}

export default function SlideOverview({
  visible,
  current,
  onSelect,
  onClose,
}: SlideOverviewProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="overview"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
          style={{
            background: "rgba(2, 4, 18, 0.96)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-10 py-6 shrink-0"
            style={{ borderBottom: "1px solid rgba(99,102,241,0.15)" }}
          >
            <h2
              className="font-bold tracking-wide"
              style={{ color: "#e2e8f0", fontSize: "1.1rem" }}
            >
              Slide Overzicht
            </h2>
            <button
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-sm font-semibold transition-all"
              style={{
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#818cf8",
              }}
            >
              ✕ Sluiten
            </button>
          </div>

          {/* Grid */}
          <div className="flex-1 p-10">
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              }}
            >
              {slides.map((_, i) => {
                const { emoji, title } = getSlideLabel(i);
                const isActive = i === current;
                return (
                  <motion.button
                    key={i}
                    onClick={() => {
                      onSelect(i);
                    }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl p-5 text-left flex flex-col gap-2 transition-all"
                    style={{
                      background: isActive
                        ? "rgba(99,102,241,0.18)"
                        : "rgba(255,255,255,0.04)",
                      border: isActive
                        ? "1px solid rgba(99,102,241,0.55)"
                        : "1px solid rgba(255,255,255,0.07)",
                      boxShadow: isActive
                        ? "0 0 20px rgba(99,102,241,0.2)"
                        : "none",
                    }}
                  >
                    {/* Slide number */}
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: isActive ? "#818cf8" : "#475569" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Emoji */}
                    <span style={{ fontSize: "1.75rem" }}>{emoji}</span>

                    {/* Title */}
                    <p
                      className="text-xs leading-snug"
                      style={{
                        color: isActive ? "#e2e8f0" : "#64748b",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {title}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
