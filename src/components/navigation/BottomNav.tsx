"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Sparkles, Mail, HeartHandshake, Grid } from "lucide-react";

interface BottomNavProps {
  onOpenMore: () => void;
}

export default function BottomNav({ onOpenMore }: BottomNavProps) {
  const pathname = usePathname();

  const mainTabs = [
    { href: "/", label: "Home", icon: Home },
    { href: "/comfort", label: "Comfort", icon: Sparkles },
    { href: "/letters", label: "Letters", icon: Mail },
    { href: "/hugs", label: "Hugs", icon: HeartHandshake },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/85 backdrop-blur-md border-t border-pink-200/70 safe-bottom shadow-lg shadow-pink-900/5 select-none"
      aria-label="Mobile Navigation"
    >
      <div className="flex items-center justify-around px-2 py-2">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl transition-all ${
                isActive ? "text-rose-600 font-semibold" : "text-stone-500 hover:text-rose-500"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute inset-0 bg-pink-100/80 rounded-2xl -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? "stroke-[2.4px]" : "stroke-2"}`} />
              <span className="text-[11px] tracking-tight">{tab.label}</span>
            </Link>
          );
        })}

        {/* More Drawer Trigger */}
        <button
          onClick={onOpenMore}
          className="relative flex flex-col items-center justify-center py-1 px-3 rounded-2xl text-stone-500 hover:text-rose-500 transition-all cursor-pointer"
        >
          <Grid className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] tracking-tight">More</span>
        </button>
      </div>
    </nav>
  );
}

