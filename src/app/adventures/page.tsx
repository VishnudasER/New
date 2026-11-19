"use client";

import AppShell from "@/components/layout/AppShell";
import AdventureUniverse from "@/components/adventures/AdventureUniverse";
import { Compass, Sparkles } from "lucide-react";

export default function AdventuresPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-teal-600" />
            <span>Wanderlust & Summits</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-2">
            Our Little Adventure Universe 🏔️
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-1">
            &ldquo;For the girl who loves mountain trails, crisp alpine air, and starry summit nights.&rdquo;
          </p>

          <p className="text-xs text-stone-500 font-sans">
            Snow treks, alpine meadows, cozy forest cabins, and our future travel bucket list.
          </p>
        </div>

        {/* Adventure Universe Interactive Component */}
        <AdventureUniverse />
      </div>
    </AppShell>
  );
}

