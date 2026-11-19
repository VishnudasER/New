"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import LetterModal from "@/components/letters/LetterModal";
import { loveLetters, LoveLetter } from "@/data/content";
import { Mail, Heart, Sparkles, Lock } from "lucide-react";

export default function LettersPage() {
  const [selectedLetter, setSelectedLetter] = useState<LoveLetter | null>(null);

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Hero Banner */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-pink-500" />
            <span>Digital Envelopes</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-rose-950 mb-3">
            Letters I Wish I Could Hand You.
          </h1>

          <p className="font-serif italic text-base sm:text-lg text-rose-800 leading-relaxed mb-2">
            &ldquo;Folded with love, sealed with a kiss, and saved forever for whenever your heart
            needs to hear them.&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-stone-500 font-sans">
            Click on any envelope below to unfold your personalized letter.
          </p>
        </div>

        {/* 7 Interactive Envelope Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveLetters.map((letter, idx) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedLetter(letter)}
                className="w-full text-left group relative bg-white/90 backdrop-blur-md rounded-3xl p-6 border-2 border-pink-200/80 shadow-xs hover:shadow-lg hover:border-rose-300 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Envelope flap visual top line */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-100 to-rose-200 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                    <span>{letter.icon}</span>
                  </div>

                  {/* Wax Seal Badge */}
                  <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center text-white text-[10px] font-serif font-bold shadow-xs">
                    <span>S</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500 block mb-1">
                    Letter #{idx + 1}
                  </span>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-rose-600 transition-colors mb-2 leading-tight">
                    {letter.envelopeTitle}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4 line-clamp-2">
                    {letter.preview}
                  </p>
                </div>

                <div className="pt-3 border-t border-pink-100/70 flex items-center justify-between text-xs font-semibold text-rose-600 group-hover:text-rose-700">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-rose-500" />
                    <span>Open Envelope</span>
                  </span>
                  <span className="text-[11px] font-sans text-stone-400 group-hover:text-rose-500">
                    Click to unfold →
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal for Unfolded Letter */}
        <LetterModal
          letter={selectedLetter}
          onClose={() => setSelectedLetter(null)}
        />
      </div>
    </AppShell>
  );
}

