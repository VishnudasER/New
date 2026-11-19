"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LoveLetter } from "@/data/content";
import { X, Heart, Sparkles } from "lucide-react";

interface LetterModalProps {
  letter: LoveLetter | null;
  onClose: () => void;
}

export default function LetterModal({ letter, onClose }: LetterModalProps) {
  if (!letter) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-pink-950/45 backdrop-blur-md"
        />

        {/* Parchment Letter Container */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 30, rotateX: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 30 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="relative w-full max-w-xl bg-[#FFFDF9] rounded-3xl p-7 sm:p-10 shadow-2xl border-2 border-[#F3E8D8] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Faux Stamp & Postmark in top right */}
          <div className="absolute top-6 right-14 hidden sm:flex items-center gap-2 pointer-events-none select-none opacity-80">
            <div className="w-12 h-14 border border-rose-300 rounded p-1 flex flex-col items-center justify-center bg-rose-50 text-[10px] text-rose-500 font-serif">
              <span>FOR</span>
              <span className="font-bold text-xs">SRU</span>
              <Heart className="w-3 h-3 fill-rose-400 mt-0.5" />
            </div>
            <div className="w-11 h-11 rounded-full border border-dashed border-rose-300 flex items-center justify-center text-[9px] text-rose-400 font-serif rotate-12">
              <span>FOREVER</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-stone-400 hover:text-rose-600 rounded-full hover:bg-rose-50 transition-colors cursor-pointer"
            aria-label="Close letter"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Wax Seal Emblem Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-700 via-rose-600 to-red-500 flex items-center justify-center text-white shadow-md shadow-rose-700/30 border border-rose-300/40">
              <span className="font-serif font-bold text-lg">S</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-rose-600">
                Personal Love Letter
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                {letter.envelopeTitle}
              </h3>
            </div>
          </div>

          {/* Letter Body - Artisanal Parchment Look */}
          <div className="space-y-4 font-serif text-base sm:text-lg text-stone-800 leading-relaxed border-t border-b border-rose-100/80 py-6 my-4">
            {letter.content.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? "font-medium text-rose-950" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sign-off */}
          <div className="mt-6 flex flex-col items-end text-right">
            <p className="font-serif italic text-base text-rose-900 font-medium">
              {letter.signOff}
            </p>
            <p className="text-xs text-stone-500 mt-1 font-sans">
              Always here for you, in every heartbeat.
            </p>
          </div>

          {/* Bottom Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Fold Letter & Keep in Heart</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

