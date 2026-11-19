"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MountainIllustration from "@/components/illustrations/MountainIllustration";
import { adventureBucketList, AdventureItem } from "@/data/content";
import { Compass, MapPin, Sparkles, Heart, CheckCircle2, Calendar } from "lucide-react";

const ADVENTURE_STORAGE_KEY = "shuttu_adventure_wishlist_favorites_v1";

export default function AdventureUniverse() {
  const [activeTab, setActiveTab] = useState<"all" | "trek" | "destination" | "date">("all");
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem(ADVENTURE_STORAGE_KEY);
      if (saved) {
        setFavorites(JSON.parse(saved));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const toggleFavorite = (id: string) => {
    const updated = { ...favorites, [id]: !favorites[id] };
    setFavorites(updated);
    try {
      localStorage.setItem(ADVENTURE_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  const filteredItems = adventureBucketList.filter(
    (item) => activeTab === "all" || item.type === activeTab
  );

  return (
    <div className="space-y-8">
      {/* Mountain Illustration Banner with Message */}
      <div className="relative rounded-3xl overflow-hidden shadow-md border border-pink-100">
        <MountainIllustration className="w-full h-56 sm:h-72" />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/70 via-pink-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-pink-100 text-xs font-medium w-fit mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Our Endless Horizon</span>
          </span>
          <h3 className="font-serif text-xl sm:text-3xl font-bold leading-tight max-w-xl">
            &ldquo;There&apos;s a whole world waiting for us, and I can&apos;t wait to explore little pieces of it with you.&rdquo;
          </h3>
          <p className="text-xs sm:text-sm text-pink-200 mt-2 font-sans">
            Every mountain pass, every forest trail, every starlit tent—ready when you are.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {[
          { key: "all", label: "All Adventures" },
          { key: "trek", label: "Dream Treks 🏔️" },
          { key: "destination", label: "Destinations ✈️" },
          { key: "date", label: "Wilderness Dates 🏕️" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === tab.key
                ? "bg-rose-500 text-white shadow-sm shadow-rose-500/25"
                : "bg-white/80 hover:bg-pink-100/60 text-stone-700 border border-pink-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Adventure Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredItems.map((item) => {
          const isLoved = !!favorites[item.id];
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-pink-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-semibold">
                    <Compass className="w-3.5 h-3.5 text-teal-600" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Heart / Want to go toggle */}
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="p-1.5 rounded-full hover:bg-pink-50 transition-colors cursor-pointer"
                    title={isLoved ? "Marked as Must Go!" : "Click to mark as dream pick"}
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        isLoved ? "fill-rose-500 text-rose-500" : "text-stone-300 hover:text-rose-400"
                      }`}
                    />
                  </button>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-rose-950 mb-1">
                  {item.title}
                </h4>

                <div className="flex items-center gap-1 text-xs text-stone-500 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                  {item.highlight}
                </p>
              </div>

              <div className="pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-pink-500" />
                  <span>Best Season: {item.dreamSeason}</span>
                </span>
                {isLoved && (
                  <span className="text-rose-600 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" />
                    <span>High Priority</span>
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

