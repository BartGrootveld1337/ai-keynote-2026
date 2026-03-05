"use client";

import { motion, AnimatePresence } from "framer-motion";

interface KeyboardHelpProps {
  visible: boolean;
  onClose: () => void;
}

const shortcuts = [
  { key: "← →", desc: "Vorige / volgende slide" },
  { key: "Spatie", desc: "Volgende slide" },
  { key: "N", desc: "Speaker notes aan/uit" },
  { key: "O", desc: "Slide overzicht" },
  { key: "F", desc: "Volledig scherm" },
  { key: "?", desc: "Deze help" },
  { key: "ESC", desc: "Overzicht / help sluiten" },
];

export default function KeyboardHelp({ visible, onClose }: KeyboardHelpProps) {
  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="help-backdrop"
            className="fixed inset-0 z-50"
            style={{ background: "rgba(0,0,0,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key="help-panel"
            className="fixed z-50 rounded-2xl p-8"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(8, 10, 28, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(99,102,241,0.3)",
              boxShadow: "0 0 60px rgba(99,102,241,0.15)",
              minWidth: "340px",
            }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h3
              className="font-bold mb-6 tracking-wide"
              style={{ color: "#e2e8f0", fontSize: "1rem" }}
            >
              ⌨️ Sneltoetsen
            </h3>

            <div className="flex flex-col gap-3">
              {shortcuts.map(({ key, desc }) => (
                <div key={key} className="flex items-center gap-4">
                  <kbd
                    className="shrink-0 rounded-md px-2.5 py-1 text-xs font-mono font-semibold"
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      border: "1px solid rgba(99,102,241,0.35)",
                      color: "#818cf8",
                      minWidth: "64px",
                      textAlign: "center",
                    }}
                  >
                    {key}
                  </kbd>
                  <span style={{ color: "#94a3b8", fontSize: "0.875rem" }}>{desc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-xl py-2 text-sm font-semibold transition-all"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#818cf8",
              }}
            >
              Sluiten
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
