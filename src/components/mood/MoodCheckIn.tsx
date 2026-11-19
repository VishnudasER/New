"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { moodOptions, MoodOption } from "@/data/content";
import { Heart, Sparkles, ArrowRight, History } from "lucide-react";

interface MoodLogEntry {
  id: string;
  moodId: string;
  label: string;
  emoji: string;
  timestamp: string;
}

const MOOD_HISTORY_KEY = "shuttu_daily_mood_history_v1";

export default function MoodCheckIn() {
  const [selectedMood, setSelectedMood] = useState<MoodOption>(moodOptions[0]);
  const [moodHistory, setMoodHistory] = useState<MoodLogEntry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(MOOD_HISTORY_KEY);
      if (saved) {
        setMoodHistory(JSON.parse(saved));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const handleSelectMood = (mood: MoodOption) => {
    setSelectedMood(mood);

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const dateString = now.toLocaleDateString([], { month: "short", day: "numeric" });

    const newEntry: MoodLogEntry = {
      id: Date.now().toString(),
      moodId: mood.id,
      label: mood.label,
      emoji: mood.emoji,
      timestamp: `${dateString}, ${timeString}`,
    };

    const updated = [newEntry, ...moodHistory.slice(0, 5)]; // keep last 6 check-ins
    setMoodHistory(updated);

    try {
      localStorage.setItem(MOOD_HISTORY_KEY, JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Mood Selector Card */}
      <div className="w-full max-w-xl bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm mb-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Gentle Check-in</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mb-1">
            How is my Shuttu feeling today?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Whatever you are feeling is completely safe and welcomed here.
          </p>
        </div>

        {/* 8 Mood Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6">
          {moodOptions.map((mood) => {
            const isSelected = selectedMood.id === mood.id;
            return (
              <motion.button
                key={mood.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleSelectMood(mood)}
                className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-b from-rose-500 to-pink-500 text-white shadow-md shadow-pink-500/25 ring-2 ring-rose-400 ring-offset-2"
                    : "bg-pink-50/70 hover:bg-pink-100/70 text-stone-700 border border-pink-100"
                }`}
              >
                <span className="text-3xl mb-1">{mood.emoji}</span>
                <span className="text-xs font-semibold leading-tight">{mood.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Supportive Response Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMood.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-6 bg-gradient-to-br from-pink-50 via-white to-rose-50/60 border border-pink-200/90 shadow-xs"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{selectedMood.emoji}</span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-500">
                  To My Shuttu
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-rose-950">
                  {selectedMood.headline}
                </h4>
              </div>
            </div>

            <p className="font-serif italic text-base text-stone-800 leading-relaxed my-3">
              &ldquo;{selectedMood.response}&rdquo;
            </p>

            {/* Recommended Activity Pill */}
            <div className="mt-4 pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-stone-500 font-medium">Recommended for you right now:</span>
              <Link
                href={selectedMood.suggestedAction.href}
                className="w-full sm:w-auto px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
              >
                <span>{selectedMood.suggestedAction.icon}</span>
                <span>{selectedMood.suggestedAction.label}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mood History Timeline */}
      {moodHistory.length > 0 && (
        <div className="w-full max-w-xl bg-white/70 backdrop-blur-xs rounded-3xl p-6 border border-pink-100 shadow-xs">
          <div className="flex items-center gap-2 mb-3 text-rose-900 font-serif font-bold text-sm">
            <History className="w-4 h-4 text-pink-500" />
            <span>Recent Mood Check-ins</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {moodHistory.map((item) => (
              <div
                key={item.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-100 text-xs text-stone-700"
              >
                <span className="text-base">{item.emoji}</span>
                <span className="font-medium">{item.label}</span>
                <span className="text-[10px] text-stone-400 font-sans">• {item.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

