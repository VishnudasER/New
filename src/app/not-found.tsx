"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Home, Sparkles } from "lucide-react";
import FloatingElements from "@/components/common/FloatingElements";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FFF5F7] via-[#FDF2F8] to-[#F5F3FF] relative overflow-hidden text-center">
      <FloatingElements count={10} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-pink-200 z-10 flex flex-col items-center"
      >
        <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-rose-500 mb-4">
          <Heart className="w-8 h-8 fill-pink-400" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-rose-500 mb-2">
          Page Not Found (404)
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mb-3">
          You wandered into an unknown corner, my love 🌸
        </h1>

        <p className="text-sm text-stone-600 mb-6 font-serif italic leading-relaxed">
          &ldquo;Even if you wander off a page on this little website, you will never, ever get lost in my heart.&rdquo;
        </p>

        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium text-sm shadow-md shadow-pink-500/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Take Me Back Home 🏡</span>
        </Link>
      </motion.div>
    </div>
  );
}

