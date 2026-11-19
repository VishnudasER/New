"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import PainSelector from "@/components/comfort/PainSelector";
import Checklist from "@/components/comfort/Checklist";
import BreathingExercise from "@/components/comfort/BreathingExercise";
import ComfortIllustration from "@/components/illustrations/ComfortIllustration";
import { comfortMessages, medicalDisclaimer } from "@/data/content";
import { Heart, Sparkles, RefreshCw, AlertCircle, ShieldCheck } from "lucide-react";

export default function ComfortPage() {
  const [messageIndex, setMessageIndex] = useState(0);

  const nextMessage = () => {
    setMessageIndex((prev) => (prev + 1) % comfortMessages.length);
  };

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Header Hero Banner */}
        <div className="bg-gradient-to-br from-[#FFF0F5] via-white to-[#FCE7F3] rounded-3xl p-6 sm:p-10 border border-pink-200/80 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span>🌸</span>
              <span>Your Sanctuary of Rest</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-3">
              Take it easy, my love.
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-rose-800/90 leading-relaxed mb-4">
              &ldquo;You deserve all the rest. No deadlines, no expectations—just cozy care.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed max-w-lg">
              During cycle days, your body is working overtime. This corner is built with warmth,
              comfort reminders, and soothing steps so you never feel alone in the discomfort.
            </p>
          </div>

          <div className="shrink-0">
            <ComfortIllustration className="w-40 h-40 sm:w-48 sm:h-48" />
          </div>
        </div>

        {/* Changing Comfort Reminder Bar */}
        <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-2xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md shadow-pink-500/20">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Heart className="w-6 h-6 fill-white shrink-0 hidden sm:block" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-pink-200 block">
                Comfort Whisper
              </span>
              <p className="font-serif italic text-base sm:text-lg">
                &ldquo;{comfortMessages[messageIndex]}&rdquo;
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={nextMessage}
            className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Next Whisper</span>
          </motion.button>
        </div>

        {/* Pain Comfort Selector */}
        <PainSelector />

        {/* Two-Column Grid: Checklist & Breathing Exercise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Checklist />
          <BreathingExercise />
        </div>

        {/* Reassuring Medical Care & Disclaimer */}
        <div className="bg-white/80 rounded-2xl p-5 border border-pink-100 flex items-start gap-3 text-xs sm:text-sm text-stone-600">
          <ShieldCheck className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-stone-800 mb-0.5">A Caring Note on Your Health</p>
            <p className="leading-relaxed">{medicalDisclaimer}</p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

