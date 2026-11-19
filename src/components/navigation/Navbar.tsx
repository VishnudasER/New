"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Gift, LogOut, Sparkles, Heart } from "lucide-react";

interface NavbarProps {
  onOpenSurprise: () => void;
  onOpenWelcome?: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/comfort", label: "Comfort 🌸" },
  { href: "/letters", label: "Letters 💌" },
  { href: "/hugs", label: "Hugs 🫂" },
  { href: "/minions", label: "Minions 💛" },
  { href: "/food", label: "Food 🍓" },
  { href: "/adventures", label: "Adventures 🏔️" },
  { href: "/music", label: "Music 🎵" },
  { href: "/mood", label: "Mood 💗" },
];

export default function Navbar({ onOpenSurprise, onOpenWelcome }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md border-b border-pink-100/80 transition-all select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 flex items-center justify-center text-white shadow-sm shadow-pink-400/40"
          >
            <Heart className="w-4.5 h-4.5 fill-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              For Shuttu, With Love
            </span>
            <span className="text-[10px] text-pink-700/70 uppercase tracking-widest hidden sm:block">
              A private world for Sru
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? "text-rose-700 bg-pink-100/90 font-semibold"
                    : "text-stone-600 hover:text-rose-600 hover:bg-pink-50/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Header Controls */}
        <div className="flex items-center gap-2">
          {/* Welcome Screen trigger button */}
          {onOpenWelcome && (
            <button
              onClick={onOpenWelcome}
              title="Show Opening Screen"
              className="p-2 text-pink-500 hover:text-pink-700 hover:bg-pink-100/50 rounded-full transition-colors cursor-pointer text-xs flex items-center gap-1"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden md:inline font-sans text-xs">Intro</span>
            </button>
          )}

          {/* Secret Surprise Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenSurprise}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-semibold shadow-sm shadow-pink-500/25 flex items-center gap-1.5 cursor-pointer"
          >
            <Gift className="w-3.5 h-3.5 animate-bounce" />
            <span className="hidden xs:inline">Special</span> Surprise 🎁
          </motion.button>

          {/* Desktop Logout Button */}
          <button
            onClick={handleLogout}
            title="Log Out"
            className="hidden sm:flex p-2 text-stone-400 hover:text-rose-600 hover:bg-pink-50 rounded-full transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

