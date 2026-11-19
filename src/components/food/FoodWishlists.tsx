"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { foodWishlistCategories, foodDatesList } from "@/data/content";
import { Utensils, Plus, Check, MapPin, Calendar, Heart } from "lucide-react";

const CRAVINGS_STORAGE_KEY = "shuttu_custom_cravings_v1";

export default function FoodWishlists() {
  const [customCravings, setCustomCravings] = useState<string[]>([]);
  const [newCraving, setNewCraving] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CRAVINGS_STORAGE_KEY);
      if (saved) {
        setCustomCravings(JSON.parse(saved));
      }
    } catch {
      // safe fallback
    }
  }, []);

  const addCraving = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCraving.trim()) return;

    const updated = [newCraving.trim(), ...customCravings];
    setCustomCravings(updated);
    setNewCraving("");
    setShowInput(false);

    try {
      localStorage.setItem(CRAVINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  const removeCraving = (index: number) => {
    const updated = customCravings.filter((_, i) => i !== index);
    setCustomCravings(updated);
    try {
      localStorage.setItem(CRAVINGS_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // safe fallback
    }
  };

  return (
    <div className="space-y-8">
      {/* Wishlist Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {foodWishlistCategories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-pink-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{cat.emoji}</span>
                <h4 className="font-serif text-lg font-bold text-rose-950">{cat.category}</h4>
              </div>

              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 bg-pink-50/50 p-2.5 rounded-xl border border-pink-100/60"
                  >
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Shuttu's Spontaneous Craving Board */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">📝</span>
            <h4 className="font-serif text-xl font-bold text-rose-950">
              Shuttu&apos;s Live Craving Pad
            </h4>
          </div>
          <button
            onClick={() => setShowInput(!showInput)}
            className="px-3 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold hover:bg-pink-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Craving</span>
          </button>
        </div>
        <p className="text-xs text-stone-500 mb-4">
          Cravings added here stay saved so I know what to treat you to next!
        </p>

        {/* Input Form */}
        {showInput && (
          <form onSubmit={addCraving} className="flex gap-2 mb-4">
            <input
              type="text"
              value={newCraving}
              onChange={(e) => setNewCraving(e.target.value)}
              placeholder="e.g. Spicy garlic noodles, dark chocolate mousse..."
              className="flex-1 px-4 py-2 text-sm rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-pink-50/40"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-2 bg-rose-500 text-white rounded-xl text-xs font-semibold hover:bg-rose-600 transition-colors cursor-pointer"
            >
              Save Craving 🍓
            </button>
          </form>
        )}

        {/* Cravings Chips */}
        {customCravings.length === 0 ? (
          <p className="text-xs text-stone-400 italic py-2">
            No spontaneous cravings logged yet. Click &ldquo;Add Craving&rdquo; to add your favorites!
          </p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {customCravings.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 border border-pink-200 text-xs font-medium text-pink-900"
              >
                <span>🍓 {item}</span>
                <button
                  onClick={() => removeCraving(index)}
                  className="text-pink-400 hover:text-rose-600 ml-1 cursor-pointer font-bold"
                  title="Remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Future Food Dates Section */}
      <div className="bg-gradient-to-br from-rose-50/80 via-white to-pink-50/80 rounded-3xl p-6 sm:p-8 border border-pink-200 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🥂</span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
            Our Future Food Dates & Spots
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-stone-600 mb-6">
          Dates already reserved on our imaginary calendar—just waiting for us to experience them!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {foodDatesList.map((foodDate, idx) => (
            <div
              key={idx}
              className="bg-white/90 p-5 rounded-2xl border border-pink-100 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-rose-500 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{foodDate.place}</span>
                  </span>
                  <span>Date #{idx + 1}</span>
                </div>
                <h5 className="font-serif text-base font-bold text-stone-900 mb-2">
                  {foodDate.title}
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  {foodDate.highlight}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-pink-50 flex items-center justify-between text-[11px] text-pink-600">
                <span className="italic">Reserved for Sru & her boy</span>
                <Heart className="w-3.5 h-3.5 fill-pink-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

