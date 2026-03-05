"use client";

import { motion, AnimatePresence } from "framer-motion";

interface SpeakerNotesProps {
  notes: string;
  visible: boolean;
}

export default function SpeakerNotes({ notes, visible }: SpeakerNotesProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="speaker-notes"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 px-8 py-5"
          style={{
            background: "rgba(2, 4, 18, 0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(99,102,241,0.2)",
            boxShadow: "0 -4px 40px rgba(0,0,0,0.5)",
          }}
        >
          <div className="flex items-start gap-3 max-w-6xl mx-auto">
            {/* Label */}
            <span
              className="shrink-0 text-xs font-semibold tracking-widest uppercase mt-0.5"
              style={{ color: "#6366f1" }}
            >
              NOTES
            </span>
            {/* Text */}
            <p
              className="leading-relaxed"
              style={{
                fontSize: "0.85rem",
                color: "rgba(226,232,240,0.85)",
              }}
            >
              {notes || "— geen speaker notes voor deze slide —"}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
