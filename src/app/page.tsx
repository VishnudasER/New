"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AppShell from "@/components/layout/AppShell";
import { siteConfig, timeGreetings, loveLetters } from "@/data/content";
import {
  Sparkles,
  Heart,
  Mail,
  HeartHandshake,
  Smile,
  UtensilsCrossed,
  Compass,
  Music,
  ArrowRight,
  Sun,
  Moon,
  CloudSun,
  Sunset,
} from "lucide-react";

export default function HomePage() {
  const [greetingData, setGreetingData] = useState(timeGreetings.morning);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreetingData(timeGreetings.morning);
    } else if (hour >= 12 && hour < 17) {
      setGreetingData(timeGreetings.afternoon);
    } else if (hour >= 17 && hour < 21) {
      setGreetingData(timeGreetings.evening);
    } else {
      setGreetingData(timeGreetings.night);
    }
  }, []);

  const featureCards = [
    {
      title: "Your Period Comfort Corner",
      category: "Sanctuary",
      subtitle: "Heating pads, cramp selector, soothing checklist & rest guide",
      href: "/comfort",
      icon: Sparkles,
      emoji: "🌸",
      accent: "from-rose-500/10 via-pink-500/10 to-purple-500/10 border-rose-200/80",
      buttonText: "Enter Comfort Corner",
      badge: "Most Important",
    },
    {
      title: "Your Little Love Letters",
      category: "Intimate Notes",
      subtitle: "7 heartfelt letters written straight from my heart to yours",
      href: "/letters",
      icon: Mail,
      emoji: "💌",
      accent: "from-pink-500/10 via-rose-400/10 to-amber-400/10 border-pink-200/80",
      buttonText: "Read Letters",
    },
    {
      title: "A Hug From Me",
      category: "Virtual Warmth",
      subtitle: "Interactive animated hug with tight, gentle, and long embrace modes",
      href: "/hugs",
      icon: HeartHandshake,
      emoji: "🫂",
      accent: "from-purple-500/10 via-pink-400/10 to-rose-400/10 border-purple-200/80",
      buttonText: "Hold Me Now",
    },
    {
      title: "Let's Make You Smile",
      category: "Goofy Fun",
      subtitle: "Minion-powered cheer, silly jokes, and banana happiness",
      href: "/minions",
      icon: Smile,
      emoji: "💛",
      accent: "from-yellow-400/15 via-amber-300/10 to-blue-400/10 border-yellow-200/90",
      buttonText: "Banana Giggles",
    },
    {
      title: "Things That Make You Happy",
      category: "Food Love",
      subtitle: "Virtual treats, cravings board & our future romantic food dates",
      href: "/food",
      icon: UtensilsCrossed,
      emoji: "🍓",
      accent: "from-rose-500/10 via-pink-500/10 to-orange-400/10 border-rose-200/80",
      buttonText: "See Food Delights",
    },
    {
      title: "Our Adventure Universe",
      category: "Travel & Treks",
      subtitle: "Snowy summits, dream hikes, and star-filled tents waiting for us",
      href: "/adventures",
      icon: Compass,
      emoji: "🏔️",
      accent: "from-teal-500/10 via-emerald-400/10 to-cyan-400/10 border-teal-200/80",
      buttonText: "Explore Adventures",
    },
    {
      title: "Music For Your Soul",
      category: "Melodies",
      subtitle: "Arz Kiya Hai spotlight and soothing ambient relaxation sounds",
      href: "/music",
      icon: Music,
      emoji: "🎵",
      accent: "from-indigo-500/10 via-purple-400/10 to-pink-400/10 border-indigo-200/80",
      buttonText: "Listen & Unwind",
    },
    {
      title: "Your Mood Today",
      category: "Gentle Check-in",
      subtitle: "How are you feeling right now? Tailored love for every emotion",
      href: "/mood",
      icon: Heart,
      emoji: "💗",
      accent: "from-pink-500/10 via-rose-300/10 to-fuchsia-400/10 border-pink-200/80",
      buttonText: "Check In With Me",
    },
  ];

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Welcome Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-gradient-to-br from-white via-[#FFF5F8] to-[#FFF0F5] rounded-3xl p-6 sm:p-10 border border-pink-200/90 shadow-md shadow-pink-500/5 overflow-hidden"
        >
          {/* Subtle decorative circles */}
          <div className="absolute -top-16 -right-16 w-44 h-44 bg-pink-200/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-purple-200/40 rounded-full blur-2xl pointer-events-none" />

          {/* Time-based Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-rose-800 text-xs font-semibold mb-4 border border-pink-200/60">
            <span className="text-sm">🌸</span>
            <span>{greetingData.greeting}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
            {siteConfig.mainGreeting}
          </h1>

          <p className="font-serif italic text-base sm:text-xl text-stone-700 max-w-2xl leading-relaxed mb-4">
            &ldquo;{siteConfig.mainSubtitle}&rdquo;
          </p>

          <p className="text-xs sm:text-sm text-pink-700/80 max-w-xl font-sans leading-relaxed">
            {greetingData.subtext}
          </p>

          {/* Quick Comfort Callout */}
          <div className="mt-6 pt-6 border-t border-pink-100 flex flex-wrap items-center justify-between gap-3">
            <p className="font-serif text-xs sm:text-sm text-stone-500 italic">
              ✨ &ldquo;{siteConfig.centralPromise}&rdquo;
            </p>
            <Link
              href="/comfort"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Need Comfort Right Now?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-rose-950 flex items-center gap-2">
              <span>Her Little World</span>
              <Sparkles className="w-5 h-5 text-pink-500" />
            </h2>
            <span className="text-xs text-stone-500 font-sans">
              8 personalized corners for Shuttu
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={card.href}
                    className={`group relative h-full flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br ${card.accent} bg-white/90 backdrop-blur-md border shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div>
                      {/* Top Row with Badge & Emoji */}
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-3xl group-hover:scale-115 transition-transform duration-300">
                          {card.emoji}
                        </span>
                        {card.badge && (
                          <span className="px-2.5 py-0.5 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider">
                            {card.badge}
                          </span>
                        )}
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                        {card.category}
                      </span>

                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors mb-2 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-sans mb-4">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-pink-100/60 flex items-center justify-between text-xs font-semibold text-rose-600 group-hover:text-rose-700">
                      <span>{card.buttonText}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Daily Love Note Highlight */}
        <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-pink-200 text-center">
          <Heart className="w-6 h-6 text-rose-500 mx-auto mb-2 fill-pink-400" />
          <h3 className="font-serif text-lg sm:text-xl font-bold text-rose-950 mb-2">
            A Gentle Hug For Your Day
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-stone-800 max-w-xl mx-auto leading-relaxed">
            &ldquo;You never have to be strong or put together when you are here. This little world
            exists simply so you can breathe, be yourself, and know how deeply you are adored.&rdquo;
          </p>
          <p className="text-xs text-rose-700/80 mt-3 font-sans">
            — Forever your safe haven & biggest admirer ❤️
          </p>
        </div>
      </div>
    </AppShell>
  );
}
