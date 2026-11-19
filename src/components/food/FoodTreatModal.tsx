"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { virtualFoodTreats, FoodTreat } from "@/data/content";
import { Utensils, X, Sparkles, RefreshCw, Heart } from "lucide-react";

interface FoodTreatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FoodTreatModal({ isOpen, onClose }: FoodTreatModalProps) {
  const [currentTreat, setCurrentTreat] = useState<FoodTreat>(virtualFoodTreats[0]);

  const pickRandomTreat = () => {
    const randomIndex = Math.floor(Math.random() * virtualFoodTreats.length);
    setCurrentTreat(virtualFoodTreats[randomIndex]);

    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F43F5E", "#FB7185", "#FBBF24", "#F472B6"],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-pink-950/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-pink-100 z-10 text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cloche / Treat Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-100 to-pink-200 border-2 border-rose-300 flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner"
            >
              <span>{currentTreat.emoji}</span>
            </motion.div>

            <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-2">
              Virtual Delivery For Shuttu
            </span>

            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              {currentTreat.title}
            </h3>

            <p className="text-sm text-stone-600 mb-4 px-2">{currentTreat.description}</p>

            {/* Boyfriend's Note */}
            <div className="bg-rose-50/80 rounded-2xl p-4 border border-rose-100 mb-6 text-left">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 mb-1">
                <Heart className="w-3.5 h-3.5 fill-rose-500" />
                <span>Boyfriend&apos;s Delivery Note:</span>
              </div>
              <p className="font-serif italic text-sm text-rose-950">&ldquo;{currentTreat.note}&rdquo;</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={pickRandomTreat}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Bring Another Treat!</span>
              </motion.button>

              <button
                onClick={onClose}
                className="px-4 py-2.5 rounded-full border border-stone-200 text-stone-700 text-xs font-medium hover:bg-stone-50 cursor-pointer"
              >
                Thank You, Baby 😋
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

