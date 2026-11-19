"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import FoodWishlists from "@/components/food/FoodWishlists";
import FoodTreatModal from "@/components/food/FoodTreatModal";
import { Utensils, Heart, Sparkles, Gift } from "lucide-react";

export default function FoodPage() {
  const [isTreatModalOpen, setIsTreatModalOpen] = useState(false);

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-pink-50 rounded-3xl p-6 sm:p-10 border border-pink-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>🍓</span>
              <span>Foodie Paradise</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-2">
              Things That Make My Shuttu Happy.
            </h1>

            <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-4">
              &ldquo;Life is too short for boring meals. Everything you crave, love, and deserve to
              feast on!&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-stone-600 font-sans">
              From comforting hot soups during cramps to decadent strawberry desserts and midnight
              crunch—your food dreams are completely prioritized here.
            </p>
          </div>

          {/* Virtual Food Treat Surprise Button */}
          <div className="shrink-0 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsTreatModalOpen(true)}
              className="p-5 rounded-3xl bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-600 text-white shadow-lg shadow-rose-500/25 flex flex-col items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
                <span>🍽️</span>
              </div>
              <span className="font-serif font-bold text-sm">
                If I could bring you anything right now...
              </span>
              <span className="text-[11px] text-pink-100 font-sans flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Click to reveal a virtual treat!</span>
              </span>
            </motion.button>
          </div>
        </div>

        {/* Wishlists, Cravings Pad, and Food Dates */}
        <FoodWishlists />

        {/* Modal for virtual food treat */}
        <FoodTreatModal
          isOpen={isTreatModalOpen}
          onClose={() => setIsTreatModalOpen(false)}
        />
      </div>
    </AppShell>
  );
}

