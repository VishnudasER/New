"use client";

import AppShell from "@/components/layout/AppShell";
import MusicPlayer from "@/components/music/MusicPlayer";
import { Music, Sparkles } from "lucide-react";

export default function MusicPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Music className="w-3.5 h-3.5 text-purple-600" />
            <span>Harmonies & Peace</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-2">
            A Little Music For Your Heart 🎵
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-1">
            &ldquo;From our most cherished song to peaceful ambient rainfall for sweet dreams and deep
            comfort.&rdquo;
          </p>

          <p className="text-xs text-stone-500 font-sans">
            Stream official authorized tracks or play relaxing ambient rain and ocean waves directly
            in your browser.
          </p>
        </div>

        {/* Music Player & Ambient Synthesizer Component */}
        <MusicPlayer />
      </div>
    </AppShell>
  );
}

