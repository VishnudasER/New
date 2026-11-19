"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  type: "heart" | "star" | "petal";
  color: string;
}

export default function FloatingElements({ count = 15 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const colors = ["#F472B6", "#FB7185", "#C084FC", "#FBCFE8", "#FED7AA"];
    const types: ("heart" | "star" | "petal")[] = ["heart", "star", "petal", "heart"];

    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen width
      size: Math.random() * 14 + 10, // 10px to 24px
      duration: Math.random() * 14 + 16, // 16s to 30s for slow gentle drift
      delay: Math.random() * 8,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(items);
  }, [count]);

  if (reducedMotion || particles.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            x: [`${p.x}vw`, `${p.x + (p.id % 2 === 0 ? 4 : -4)}vw`, `${p.x}vw`],
            opacity: [0, 0.6, 0.7, 0.4, 0],
            rotate: [0, p.id % 2 === 0 ? 45 : -45, p.id % 2 === 0 ? 90 : -90],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ width: p.size, height: p.size }}
        >
          {p.type === "heart" && (
            <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full drop-shadow-sm">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {p.type === "star" && (
            <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full drop-shadow-sm">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
          {p.type === "petal" && (
            <svg viewBox="0 0 24 24" fill={p.color} className="w-full h-full drop-shadow-sm">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5V13H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 10 8.5 10H10V7.5C10 6.67 10.67 6 11.5 6s1.5.67 1.5 1.5V10h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H13v3.5z" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

