"use client";

import AppShell from "@/components/layout/AppShell";
import HugSimulator from "@/components/hugs/HugSimulator";
import { Heart, Sparkles } from "lucide-react";

export default function HugsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5 fill-pink-500" />
            <span>Virtual Warmth</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-2">
            A Hug From Me.
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-1">
            &ldquo;If I were there right now, I&apos;d pull you close, make sure you&apos;re comfortable,
            and remind you that you&apos;re my favourite person.&rdquo;
          </p>

          <p className="text-xs text-stone-500 font-sans">
            Choose your hug mode or hold the button down for a deep, soothing squeeze.
          </p>
        </div>

        {/* Hug Simulator Component */}
        <HugSimulator />
      </div>
    </AppShell>
  );
}

