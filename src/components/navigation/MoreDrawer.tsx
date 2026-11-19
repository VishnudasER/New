"use client";

import Link from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Smile, UtensilsCrossed, Compass, Music, Heart, LogOut, Gift } from "lucide-react";

interface MoreDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSurprise: () => void;
}

const moreLinks = [
  {
    href: "/minions",
    title: "Minion Surprise Zone",
    subtitle: "Goofy laughs & banana cheer 💛",
    icon: Smile,
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    href: "/food",
    title: "The Food Love Corner",
    subtitle: "Cravings wishlist & virtual treats 🍓",
    icon: UtensilsCrossed,
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    href: "/adventures",
    title: "Our Adventure Universe",
    subtitle: "Trekking dreams & starlit summits 🏔️",
    icon: Compass,
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    href: "/music",
    title: "Music For Your Soul",
    subtitle: "Arz Kiya Hai & soothing relaxation 🎵",
    icon: Music,
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    href: "/mood",
    title: "Daily Mood Check-in",
    subtitle: "Tell me how you feel today 💗",
    icon: Heart,
    badgeColor: "bg-pink-100 text-pink-700",
  },
];

export default function MoreDrawer({ isOpen, onClose, onOpenSurprise }: MoreDrawerProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-pink-950/40 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-lg bg-gradient-to-b from-white to-[#FFF5F8] rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border-t sm:border border-pink-200 z-10 max-h-[85vh] overflow-y-auto"
          >
            {/* Grab Bar on Mobile */}
            <div className="w-12 h-1.5 bg-pink-200 rounded-full mx-auto mb-4 sm:hidden" />

            <div className="flex items-center justify-between mb-4 pb-2 border-b border-pink-100">
              <div className="flex items-center gap-2">
                <span className="text-xl">✨</span>
                <h3 className="font-serif text-lg font-semibold text-rose-950">
                  More Corners For Shuttu
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-pink-400 hover:text-pink-600 rounded-full hover:bg-pink-100/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Surprise Trigger */}
            <button
              onClick={() => {
                onClose();
                onOpenSurprise();
              }}
              className="w-full mb-4 p-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 text-white flex items-center justify-between shadow-md shadow-pink-500/20 active:scale-98 transition-transform"
            >
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-medium text-sm">Something Special For You 🎁</p>
                  <p className="text-xs text-pink-100">Click to reveal a sweet surprise</p>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-pink-200 animate-pulse" />
            </button>

            {/* Menu Links */}
            <div className="space-y-2 mb-6">
              {moreLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavigate(link.href)}
                    className={`w-full flex items-center gap-3.5 p-3 rounded-2xl transition-all text-left ${
                      isActive
                        ? "bg-pink-100/80 border border-pink-300 text-rose-950 shadow-xs"
                        : "bg-white/80 hover:bg-pink-50/80 border border-pink-100/60 text-stone-700"
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl ${link.badgeColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-stone-900">{link.title}</p>
                      <p className="text-xs text-pink-700/80 truncate">{link.subtitle}</p>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Logout button */}
            <div className="pt-2 border-t border-pink-100 flex items-center justify-between text-xs text-pink-600">
              <span className="font-serif italic">Made with endless love ❤️</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

