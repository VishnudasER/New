"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { secretSurprises, SurpriseGift } from "@/data/content";
import { Sparkles, Heart, Gift, X, RefreshCw } from "lucide-react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurpriseModal({ isOpen, onClose }: SurpriseModalProps) {
  const [currentSurprise, setCurrentSurprise] = useState<SurpriseGift>(secretSurprises[0]);
  const [isRevealed, setIsRevealed] = useState(false);

  // Trigger confetti and pick random surprise
  const triggerNewSurprise = () => {
    const randomIndex = Math.floor(Math.random() * secretSurprises.length);
    setCurrentSurprise(secretSurprises[randomIndex]);
    setIsRevealed(true);

    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F472B6", "#FB7185", "#F43F5E", "#C084FC", "#FED7AA"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleOpen = () => {
    triggerNewSurprise();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-pink-950/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-white via-[#FFF5F8] to-[#FFF0F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-200/80 z-10 overflow-hidden text-center"
          >
            {/* Decorative background glow */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-pink-300/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-purple-300/30 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-pink-400 hover:text-pink-600 hover:bg-pink-100/60 rounded-full transition-colors"
              aria-label="Close surprise"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Surprise Icon Header */}
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center shadow-lg shadow-pink-500/25 text-white"
              >
                <Gift className="w-8 h-8" />
              </motion.div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-rose-950 mb-1">
              A Special Surprise For Shuttu 🎁
            </h3>
            <p className="text-sm text-pink-700/80 mb-6 font-sans">
              Handpicked from my heart, just to make your eyes sparkle.
            </p>

            {/* Surprise Card Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSurprise.id}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-pink-100 shadow-sm relative mb-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  <span>{currentSurprise.emoji}</span>
                  <span>{currentSurprise.badge}</span>
                </div>

                {/* Surprise Text */}
                <p className="font-serif text-lg sm:text-xl text-[#3A1825] leading-relaxed italic">
                  &ldquo;{currentSurprise.text}&rdquo;
                </p>

                {/* Small floating hearts decoration */}
                <div className="flex justify-center items-center gap-2 mt-4 text-pink-400">
                  <Heart className="w-3.5 h-3.5 fill-pink-300" />
                  <span className="text-xs font-sans text-pink-500/80">Always thinking of you</span>
                  <Heart className="w-3.5 h-3.5 fill-pink-300" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={triggerNewSurprise}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-medium shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Another Surprise, Please!</span>
              </motion.button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-pink-50 text-pink-800 font-medium border border-pink-200 transition-colors text-sm cursor-pointer"
              >
                Close & Keep in Heart 💗
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

