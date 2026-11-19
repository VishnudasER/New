"use client";

import AppShell from "@/components/layout/AppShell";
import MoodCheckIn from "@/components/mood/MoodCheckIn";
import { Heart, Sparkles } from "lucide-react";

export default function MoodPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Emotional Warmth</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-2">
            Daily Mood Check-In 💗
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-1">
            &ldquo;There is no wrong way to feel. You are loved on high energy days, quiet days, and
            everything in between.&rdquo;
          </p>

          <p className="text-xs text-stone-500 font-sans">
            Tap how you feel right now to receive immediate tailored comforting words and suggestions.
          </p>
        </div>

        {/* Mood Check-In Component */}
        <MoodCheckIn />
      </div>
    </AppShell>
  );
}

