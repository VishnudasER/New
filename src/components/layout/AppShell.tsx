"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import BottomNav from "@/components/navigation/BottomNav";
import MoreDrawer from "@/components/navigation/MoreDrawer";
import SurpriseModal from "@/components/common/SurpriseModal";
import FloatingElements from "@/components/common/FloatingElements";
import OpeningExperience from "@/components/welcome/OpeningExperience";

interface AppShellProps {
  children: React.ReactNode;
}

const WELCOME_SEEN_KEY = "shuttu_welcome_seen_session";

export default function AppShell({ children }: AppShellProps) {
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const hasSeen = sessionStorage.getItem(WELCOME_SEEN_KEY);
      if (!hasSeen) {
        setShowWelcome(true);
      }
    } catch {
      // safe fallback
    }
  }, []);

  const handleCloseWelcome = () => {
    setShowWelcome(false);
    try {
      sessionStorage.setItem(WELCOME_SEEN_KEY, "true");
    } catch {
      // safe fallback
    }
  };

  const handleOpenWelcome = () => {
    setShowWelcome(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8FA] text-[#4A2835] relative">
      {/* Gentle Floating Hearts & Stars */}
      <FloatingElements count={14} />

      {/* Opening Screen (shown on first visit or triggered via button) */}
      {showWelcome && <OpeningExperience onOpen={handleCloseWelcome} />}

      {/* Top Navbar */}
      <Navbar
        onOpenSurprise={() => setIsSurpriseOpen(true)}
        onOpenWelcome={handleOpenWelcome}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-28 sm:pb-16 relative z-10">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav onOpenMore={() => setIsMoreOpen(true)} />

      {/* Mobile More Drawer */}
      <MoreDrawer
        isOpen={isMoreOpen}
        onClose={() => setIsMoreOpen(false)}
        onOpenSurprise={() => setIsSurpriseOpen(true)}
      />

      {/* Secret Surprise Modal */}
      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
      />
    </div>
  );
}

