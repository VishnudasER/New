"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Heart } from "lucide-react";

type BreathPhase = "inhale" | "hold" | "exhale" | "rest";

export default function BreathingExercise() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<BreathPhase>("inhale");
  const [counter, setCounter] = useState(4);

  useEffect(() => {
    if (!isActive) {
      setPhase("inhale");
      setCounter(4);
      return;
    }

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev > 1) return prev - 1;

        // Transition phases
        if (phase === "inhale") {
          setPhase("hold");
          return 4;
        } else if (phase === "hold") {
          setPhase("exhale");
          return 4;
        } else if (phase === "exhale") {
          setPhase("rest");
          return 2;
        } else {
          setPhase("inhale");
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, phase]);

  const phaseInstruction = {
    inhale: "Breathe in gently through your nose...",
    hold: "Hold gently, softening your belly...",
    exhale: "Release slowly through your mouth...",
    rest: "Rest and feel the tension leave...",
  };

  const circleScale = {
    inhale: 1.25,
    hold: 1.25,
    exhale: 0.85,
    rest: 0.85,
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm text-center">
      <div className="flex items-center justify-center gap-2 mb-1">
        <span className="text-xl">🫧</span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
          Soothing Pelvic & Cramp Relaxation
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-stone-600 mb-6 max-w-md mx-auto">
        Deep abdominal breathing relaxes tight pelvic muscles and activates your body&apos;s natural
        calm. Follow the rhythm below.
      </p>

      {/* Breathing Bubble Area */}
      <div className="relative w-56 h-56 mx-auto flex items-center justify-center mb-6">
        {/* Outer glowing ripple */}
        <motion.div
          animate={
            isActive
              ? {
                  scale: circleScale[phase],
                  opacity: [0.3, 0.6, 0.3],
                }
              : { scale: 1, opacity: 0.3 }
          }
          transition={{ duration: phase === "rest" ? 2 : 4, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-300 blur-xl -z-10"
        />

        {/* Central interactive circle */}
        <motion.div
          animate={
            isActive
              ? { scale: circleScale[phase] }
              : { scale: 1 }
          }
          transition={{ duration: phase === "rest" ? 2 : 4, ease: "easeInOut" }}
          className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-100 via-white to-rose-100 border-2 border-pink-300/80 shadow-inner flex flex-col items-center justify-center p-4 text-center select-none"
        >
          <span className="text-xs uppercase tracking-widest font-semibold text-rose-500 mb-0.5">
            {isActive ? phase : "Ready"}
          </span>
          <span className="font-serif text-3xl font-bold text-rose-950">
            {isActive ? counter : "4"}
          </span>
          <span className="text-[11px] text-pink-700/80 font-medium mt-0.5">
            {isActive ? "seconds" : "breathe"}
          </span>
        </motion.div>
      </div>

      {/* Instruction text */}
      <p className="font-serif italic text-base sm:text-lg text-rose-900 mb-6 min-h-[30px]">
        {isActive ? phaseInstruction[phase] : "Press start to begin a peaceful relaxation session."}
      </p>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsActive(!isActive)}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm shadow-md shadow-pink-500/20 flex items-center gap-2 cursor-pointer"
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
          <span>{isActive ? "Pause" : "Start Breathing"}</span>
        </motion.button>

        {isActive && (
          <button
            onClick={() => {
              setIsActive(false);
              setPhase("inhale");
              setCounter(4);
            }}
            className="p-2.5 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

