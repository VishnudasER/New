"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { painLevelsData, medicalDisclaimer, PainLevelOption } from "@/data/content";
import { AlertCircle, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export default function PainSelector() {
  const [selectedLevel, setSelectedLevel] = useState<string>("mild");

  const currentData: PainLevelOption = painLevelsData[selectedLevel] || painLevelsData.mild;

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">🌸</span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
          How are your cramps feeling right now?
        </h3>
      </div>
      <p className="text-sm text-stone-600 mb-6">
        Select what your body is experiencing so I can show you tailored comfort tips.
      </p>

      {/* Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
        {Object.entries(painLevelsData).map(([key, option]) => {
          const isSelected = selectedLevel === key;
          return (
            <motion.button
              key={key}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedLevel(key)}
              className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-b from-rose-500 to-pink-500 text-white shadow-md shadow-pink-500/20 ring-2 ring-rose-400 ring-offset-2"
                  : "bg-pink-50/70 hover:bg-pink-100/60 text-stone-700 border border-pink-200/60"
              }`}
            >
              <span className="text-2xl mb-1">{option.emoji}</span>
              <span className="text-xs font-semibold leading-tight">{option.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Supportive Response Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLevel}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl p-5 sm:p-6 bg-gradient-to-br from-pink-50/80 via-white to-rose-50/50 border border-pink-200/80"
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">{currentData.emoji}</span>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-rose-900">
                {currentData.headline}
              </h4>
              <p className="text-sm text-stone-600 mt-0.5">{currentData.description}</p>
            </div>
          </div>

          {/* Suggestions List */}
          <div className="mt-4 pt-4 border-t border-pink-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-pink-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Recommended Comfort Steps</span>
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentData.comfortTips.map((tip, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 border border-pink-100 text-xs sm:text-sm text-stone-700 leading-snug"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Caring Medical Guidance Note for Severe Pain */}
          {currentData.requiresMedicalNote && (
            <div className="mt-5 p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-950 mb-1">
                  Important Note From Your Boy ❤️
                </p>
                <p className="leading-relaxed">{medicalDisclaimer}</p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

