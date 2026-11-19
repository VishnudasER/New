"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import HuggingCharacters from "@/components/illustrations/HuggingCharacters";
import { hugTypes, HugType } from "@/data/content";
import { Heart, Sparkles, RefreshCw } from "lucide-react";

const HUG_COUNTER_KEY = "shuttu_hugs_delivered_count";

export default function HugSimulator() {
  const [selectedHugType, setSelectedHugType] = useState<HugType>(hugTypes[0]);
  const [isHugging, setIsHugging] = useState(false);
  const [hugCount, setHugCount] = useState(1);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    try {
      const savedCount = localStorage.getItem(HUG_COUNTER_KEY);
      if (savedCount) {
        setHugCount(parseInt(savedCount, 10) || 1);
      }
    } catch {
      // safe fallback
    }
  }, []);

  const triggerHug = (customMessage?: string) => {
    setIsHugging(true);

    const newCount = hugCount + 1;
    setHugCount(newCount);
    try {
      localStorage.setItem(HUG_COUNTER_KEY, newCount.toString());
    } catch {
      // safe fallback
    }

    try {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#F472B6", "#FB7185", "#F43F5E", "#C084FC"],
      });
    } catch {
      // safe fallback
    }

    // Auto reset after 8 seconds if she doesn't change it
    setTimeout(() => {
      // Keep hugging active until she chooses to release or another hug
    }, 8000);
  };

  // Hold-to-hug mechanics
  const startHold = () => {
    setIsHolding(true);
    setHoldProgress(0);
    const startTime = Date.now();
    const duration = 2000; // 2 seconds

    holdIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setHoldProgress(progress);

      if (progress >= 100) {
        clearInterval(holdIntervalRef.current!);
        setIsHolding(false);
        setHoldProgress(0);
        triggerHug();
      }
    }, 50);
  };

  const endHold = () => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
    }
    setIsHolding(false);
    setHoldProgress(0);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Interactive Characters Stage */}
      <div className="w-full max-w-md bg-gradient-to-b from-white/90 via-[#FFF5F8] to-[#FFF0F5] rounded-3xl p-6 sm:p-8 border border-pink-200/80 shadow-lg shadow-pink-500/10 mb-8 flex flex-col items-center text-center">
        {/* Hug Counter Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-4">
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
          <span>Hugs Delivered Today: {hugCount}</span>
        </div>

        {/* Animated Characters SVG */}
        <HuggingCharacters isHugging={isHugging} className="w-full h-56 sm:h-64 mb-4" />

        {/* Hug Trigger Button */}
        <div className="w-full space-y-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => triggerHug()}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-medium text-base sm:text-lg shadow-md shadow-pink-500/25 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Heart className="w-5 h-5 fill-white" />
            <span>{isHugging ? "Send Another Hug 🫂" : "I Need a Hug 🫂"}</span>
          </motion.button>

          {/* Hold-to-hug button */}
          <div className="relative">
            <button
              onMouseDown={startHold}
              onMouseUp={endHold}
              onTouchStart={startHold}
              onTouchEnd={endHold}
              className="w-full py-3 px-4 rounded-xl bg-pink-50 hover:bg-pink-100/70 border border-pink-200 text-pink-800 text-xs font-medium transition-all relative overflow-hidden select-none cursor-pointer"
            >
              {/* Progress bar inside button */}
              <div
                className="absolute inset-0 bg-pink-300/40 transition-all pointer-events-none"
                style={{ width: `${holdProgress}%` }}
              />
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>
                  {isHolding
                    ? `Holding tight... ${Math.round(holdProgress)}%`
                    : "Hold down for a 2-second deep embrace ⏳"}
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Revealed Warm Message */}
        <AnimatePresence>
          {isHugging && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-5 rounded-2xl bg-white/95 border border-pink-200 text-left shadow-xs w-full"
            >
              <div className="flex items-center gap-2 text-rose-600 text-xs font-semibold uppercase tracking-wider mb-2">
                <span>{selectedHugType.emoji}</span>
                <span>{selectedHugType.title}</span>
              </div>

              <p className="font-serif italic text-base sm:text-lg text-rose-950 leading-relaxed">
                &ldquo;{selectedHugType.message}&rdquo;
              </p>

              <div className="mt-3 pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-pink-600">
                <span className="font-medium">Right here with you, always.</span>
                <button
                  onClick={() => setIsHugging(false)}
                  className="hover:underline text-stone-400 hover:text-stone-600"
                >
                  Release embrace
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hug Modes Selector */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-pink-100 shadow-sm">
        <h3 className="font-serif text-lg font-bold text-rose-950 mb-1">
          Choose Your Hug Type
        </h3>
        <p className="text-xs text-stone-600 mb-4">
          Select what kind of embrace your heart needs today:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {hugTypes.map((hug) => {
            const isSelected = selectedHugType.id === hug.id;
            return (
              <button
                key={hug.id}
                onClick={() => {
                  setSelectedHugType(hug);
                  triggerHug();
                }}
                className={`p-3.5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-pink-100/80 border-pink-300 text-rose-950 shadow-xs"
                    : "bg-white hover:bg-pink-50/60 border-pink-100 text-stone-700"
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">{hug.emoji}</span>
                  <span className="font-medium text-sm text-stone-900">{hug.title}</span>
                </div>
                <p className="text-xs text-stone-500 leading-snug">{hug.tagline}</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

