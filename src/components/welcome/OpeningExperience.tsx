"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import MinionIllustration from "@/components/illustrations/MinionIllustration";
import { Sparkles, Heart, Mail } from "lucide-react";

interface OpeningExperienceProps {
  onOpen: () => void;
}

export default function OpeningExperience({ onOpen }: OpeningExperienceProps) {
  const handleOpenClick = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 90,
        origin: { y: 0.7 },
        colors: ["#F472B6", "#FB7185", "#F43F5E", "#C084FC", "#FED7AA"],
      });
    } catch {
      // safe fallback
    }
    onOpen();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-[#FFF5F7] via-[#FDF2F8] to-[#F5F3FF] overflow-hidden select-none"
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-200/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      {/* Floating Stars and Hearts Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: Math.random() * 100 + "%",
              x: Math.random() * 100 + "%",
              opacity: 0.3,
              scale: 0.7,
            }}
            animate={{
              y: ["-5%", "105%"],
              opacity: [0, 0.7, 0.7, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 14 + (i % 6) * 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
            className="absolute text-pink-400/60"
          >
            {i % 3 === 0 ? "💗" : i % 3 === 1 ? "✨" : "🌸"}
          </motion.div>
        ))}
      </div>

      {/* Main Center Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-pink-500/15 border border-pink-200/90 text-center flex flex-col items-center"
      >
        {/* Cute Minion-inspired or friendly decorative character */}
        <div className="mb-2 -mt-4">
          <MinionIllustration
            className="w-36 h-48 sm:w-40 sm:h-52"
            isDancing={true}
            holdingItem="heart"
          />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2 mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Exclusively For You</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            Hey, my Shuttu! 💗
          </h1>

          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed px-2">
            I made a little something for you. A tiny corner of the internet where everything is
            about you.
          </p>
        </motion.div>

        {/* Beautiful Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpenClick}
          className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-medium text-base shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 flex items-center justify-center gap-2.5 transition-all cursor-pointer group"
        >
          <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span>Open Your Little World 💌</span>
        </motion.button>

        {/* Gentle note */}
        <p className="text-[11px] text-pink-400 mt-4 flex items-center gap-1 font-serif italic">
          <Heart className="w-3 h-3 fill-pink-300 inline" />
          <span>Handcrafted with endless love by your boy</span>
          <Heart className="w-3 h-3 fill-pink-300 inline" />
        </p>
      </motion.div>
    </motion.div>
  );
}

