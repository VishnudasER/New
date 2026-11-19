"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import MinionIllustration from "@/components/illustrations/MinionIllustration";
import { minionCompliments, minionJokes } from "@/data/content";
import { Smile, Sparkles, Laugh, Heart } from "lucide-react";

export default function MinionZone() {
  const [compliment, setCompliment] = useState(minionCompliments[0]);
  const [currentJoke, setCurrentJoke] = useState(minionJokes[0]);
  const [bananasFed, setBananasFed] = useState(3);
  const [holdingItem, setHoldingItem] = useState<"banana" | "heart" | "flower">("banana");
  const [isDancing, setIsDancing] = useState(false);

  const getNewCompliment = () => {
    const randomIndex = Math.floor(Math.random() * minionCompliments.length);
    setCompliment(minionCompliments[randomIndex]);
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 2000);
  };

  const getNewJoke = () => {
    const randomIndex = Math.floor(Math.random() * minionJokes.length);
    setCurrentJoke(minionJokes[randomIndex]);
    setIsDancing(true);
    setTimeout(() => setIsDancing(false), 2000);
  };

  const feedBanana = () => {
    setBananasFed((prev) => prev + 1);
    setIsDancing(true);
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#FACC15", "#FEF08A", "#EAB308", "#3B82F6"],
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => setIsDancing(false), 1500);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Playful Minion Stage */}
      <div className="w-full max-w-lg bg-gradient-to-b from-[#FEFCE8] via-[#FEF08A]/30 to-[#EFF6FF] rounded-3xl p-6 sm:p-8 border-2 border-yellow-200/80 shadow-lg shadow-yellow-500/10 mb-8 flex flex-col items-center text-center relative overflow-hidden">
        {/* Playful background decorative shapes */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-300/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl pointer-events-none" />

        {/* Fun Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-200 text-yellow-900 text-xs font-bold uppercase tracking-wider mb-2">
          <span>🍌</span>
          <span>Banana Happiness HQ</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-yellow-950 mb-1">
          Bello, Shuttu! 💛
        </h3>
        <p className="text-xs sm:text-sm text-yellow-800/80 max-w-xs mb-4">
          Guaranteed giggles, goofy cheer, and maximum silliness just for you!
        </p>

        {/* Interactive Character */}
        <div className="relative my-2">
          <MinionIllustration
            className="w-44 h-56 sm:w-48 sm:h-60"
            isDancing={isDancing}
            holdingItem={holdingItem}
          />
        </div>

        {/* Banana Meter & Feeder */}
        <div className="w-full bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-yellow-200 mb-6">
          <div className="flex items-center justify-between text-xs font-bold text-yellow-900 mb-1.5">
            <span>🍌 Bananas Fed to Stuart: {bananasFed}</span>
            <span>Happiness: {Math.min(bananasFed * 15, 100)}% Max!</span>
          </div>
          <div className="w-full h-2.5 bg-yellow-100 rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 rounded-full"
              animate={{ width: `${Math.min(bananasFed * 15, 100)}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={feedBanana}
              className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>🍌 Feed a Banana!</span>
            </motion.button>

            <button
              onClick={() => {
                const nextItem =
                  holdingItem === "banana" ? "heart" : holdingItem === "heart" ? "flower" : "banana";
                setHoldingItem(nextItem);
              }}
              className="px-3 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium text-xs transition-colors cursor-pointer"
            >
              Change Hand Prop ✨
            </button>
          </div>
        </div>

        {/* Compliment Box */}
        <div className="w-full bg-white/90 rounded-2xl p-5 border border-yellow-200 text-left mb-4 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-yellow-700 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Minion Truth Dispatch</span>
            </span>
            <button
              onClick={getNewCompliment}
              className="text-xs text-yellow-700 hover:text-yellow-900 font-semibold hover:underline cursor-pointer"
            >
              Next Compliment 🔄
            </button>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-yellow-950 leading-relaxed">
            &ldquo;{compliment}&rdquo;
          </p>
        </div>

        {/* Make Me Laugh Section */}
        <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50/70 rounded-2xl p-5 border border-blue-200 text-left shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1">
              <Laugh className="w-3.5 h-3.5" />
              <span>Giggle Generator</span>
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={getNewJoke}
              className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold shadow-xs hover:bg-blue-600 cursor-pointer"
            >
              Make Me Laugh! 😆
            </motion.button>
          </div>

          <p className="font-medium text-sm text-stone-800 mb-2">{currentJoke.setup}</p>
          <p className="font-serif italic text-sm text-blue-900 bg-white/70 p-2.5 rounded-xl border border-blue-100">
            👉 {currentJoke.punchline}
          </p>
        </div>
      </div>
    </div>
  );
}

