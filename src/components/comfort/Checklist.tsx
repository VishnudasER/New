"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { comfortChecklistDefault } from "@/data/content";
import { Check, Sparkles, RotateCcw, Heart } from "lucide-react";

const STORAGE_KEY = "shuttu_comfort_checklist_v1";

export default function Checklist() {
  const [items, setItems] = useState(comfortChecklistDefault);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const toggleItem = (id: string) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setItems(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // safe fallback
    }

    // Check if newly all completed
    const allDone = updated.every((i) => i.done);
    if (allDone) {
      try {
        confetti({
          particleCount: 50,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#F472B6", "#FB7185", "#C084FC"],
        });
      } catch {
        // safe fallback
      }
    }
  };

  const handleReset = () => {
    const resetItems = comfortChecklistDefault.map((item) => ({ ...item, done: false }));
    setItems(resetItems);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resetItems));
    } catch {
      // safe fallback
    }
  };

  const completedCount = items.filter((i) => i.done).length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  if (!mounted) {
    return (
      <div className="bg-white/80 rounded-3xl p-6 sm:p-8 border border-pink-100 min-h-[300px] flex items-center justify-center">
        <span className="text-pink-400">Loading your checklist...</span>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
            Self-Care Checklist
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-pink-600 hover:text-pink-800 transition-colors p-1.5 rounded-lg hover:bg-pink-50 cursor-pointer"
          title="Reset for a new day"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      <p className="text-sm text-stone-600 mb-4">
        Gentle checkpoints to keep your body cared for today. No pressure, just tender love.
      </p>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs font-semibold text-rose-800 mb-1.5">
          <span>{completedCount} of {items.length} caring moments</span>
          <span>{progressPercent}% pampered</span>
        </div>
        <div className="w-full h-3 bg-pink-100 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="space-y-2.5">
        {items.map((item) => (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleItem(item.id)}
            className={`w-full flex items-center gap-3.5 p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
              item.done
                ? "bg-pink-100/70 border-pink-300 text-rose-950"
                : "bg-white hover:bg-pink-50/60 border-pink-100 text-stone-700"
            }`}
          >
            {/* Custom Checkbox */}
            <div
              className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 transition-colors border ${
                item.done
                  ? "bg-rose-500 border-rose-500 text-white shadow-xs"
                  : "bg-white border-pink-300 text-transparent"
              }`}
            >
              <Check className="w-4 h-4 stroke-[3px]" />
            </div>

            <span
              className={`text-sm sm:text-base font-medium flex-1 ${
                item.done ? "line-through text-pink-900/60" : "text-stone-800"
              }`}
            >
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Celebration when all checked */}
      <AnimatePresence>
        {completedCount === items.length && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white text-center shadow-md shadow-pink-500/20"
          >
            <Sparkles className="w-6 h-6 mx-auto mb-1 animate-spin" />
            <p className="font-serif font-bold text-base">You did it, my precious girl! 💖</p>
            <p className="text-xs text-pink-100 mt-0.5">
              You took such great care of yourself today. I am so proud of you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

