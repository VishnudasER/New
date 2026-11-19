"use client";

import AppShell from "@/components/layout/AppShell";
import MinionZone from "@/components/minions/MinionZone";
import { Smile, Sparkles } from "lucide-react";

export default function MinionsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-200 text-yellow-900 text-xs font-bold uppercase tracking-wider mb-2">
            <span>🍌</span>
            <span>Shuttu&apos;s Special Zone</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-950 mb-2">
            Minion Surprise Zone 💛
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-yellow-800 leading-relaxed mb-1">
            &ldquo;Because no matter how tough the day is, goofy yellow smiles and banana cheer make
            everything better!&rdquo;
          </p>

          <p className="text-xs text-stone-500 font-sans">
            Feed Stuart bananas, get silly compliments, and giggle your heart out!
          </p>
        </div>

        {/* Minion Interactive Zone */}
        <MinionZone />
      </div>
    </AppShell>
  );
}

