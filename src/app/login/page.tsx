"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, Lock, Eye, EyeOff, Sparkles, KeyRound, HelpCircle } from "lucide-react";
import FloatingElements from "@/components/common/FloatingElements";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setErrorMessage("Please enter the secret password, baby.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/");
        router.refresh();
      } else {
        setErrorMessage(data.message || "Incorrect password. Try again, sweetheart!");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FFF5F7] via-[#FDF2F8] to-[#F5F3FF] relative overflow-hidden">
      <FloatingElements count={12} />

      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pink-200/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full max-w-md bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-pink-500/15 border border-pink-200/90 z-10"
      >
        {/* Header Icon */}
        <div className="flex justify-center mb-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 flex items-center justify-center text-white shadow-lg shadow-pink-500/25"
          >
            <KeyRound className="w-8 h-8" />
          </motion.div>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Private Sanctuary</span>
          </div>

          <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            A Secret Garden For Shuttu 🗝️
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans leading-relaxed">
            Enter our secret password to unlock your personal universe of love, comfort, and care.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-rose-900 uppercase tracking-wider mb-2">
              Secret Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secret word..."
                className="w-full px-4 py-3.5 pr-11 rounded-2xl bg-pink-50/60 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 text-stone-800 placeholder-stone-400 text-sm transition-all"
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-pink-600 transition-colors p-1"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-rose-600 font-medium bg-rose-50 p-2.5 rounded-xl border border-rose-200 text-center"
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-medium text-sm shadow-md shadow-pink-500/25 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Unlocking your world...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-white" />
                <span>Open Sesame, My Love 🌸</span>
              </span>
            )}
          </motion.button>
        </form>

        {/* Hint toggle */}
        <div className="mt-6 pt-5 border-t border-pink-100 text-center">
          <button
            type="button"
            onClick={() => setShowHint(!showHint)}
            className="inline-flex items-center gap-1.5 text-xs text-pink-600 hover:text-pink-800 transition-colors font-medium cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{showHint ? "Hide Password Hint" : "Need a hint?"}</span>
          </button>

          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-2 p-3 rounded-xl bg-pink-50 border border-pink-200 text-xs text-stone-700 leading-relaxed font-serif italic"
            >
              💡 Hint: The sweet nickname your boyfriend calls you all the time (6 letters, starts
              with &apos;s&apos;). Default: <code className="font-mono font-bold text-rose-600">shuttu</code>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

