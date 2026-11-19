"use client";

import { motion } from "framer-motion";

interface MinionIllustrationProps {
  className?: string;
  isDancing?: boolean;
  holdingItem?: "banana" | "heart" | "flower" | "none";
}

export default function MinionIllustration({
  className = "w-44 h-56",
  isDancing = false,
  holdingItem = "banana",
}: MinionIllustrationProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <motion.svg
        viewBox="0 0 200 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
        animate={
          isDancing
            ? {
                rotate: [-4, 4, -4],
                y: [0, -8, 0],
                transition: { repeat: Infinity, duration: 1.2, ease: "easeInOut" },
              }
            : {
                y: [0, -4, 0],
                transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              }
        }
      >
        {/* Soft shadow under feet */}
        <ellipse cx="100" cy="246" rx="48" ry="10" fill="#E2E8F0" opacity="0.6" />

        {/* Feet / Black Shoes */}
        <motion.path
          d="M68 234C68 234 60 236 60 244C60 248 84 248 84 244C84 238 78 234 78 234Z"
          fill="#1E293B"
        />
        <motion.path
          d="M122 234C122 234 116 236 116 244C116 248 140 248 140 244C140 238 132 234 132 234Z"
          fill="#1E293B"
        />

        {/* Legs (Denim) */}
        <rect x="70" y="210" width="16" height="26" rx="4" fill="#1E40AF" />
        <rect x="114" y="210" width="16" height="26" rx="4" fill="#1E40AF" />

        {/* Main Body (Capsule shape - Bright Warm Minion Yellow) */}
        <rect x="44" y="36" width="112" height="180" rx="56" fill="#FACC15" />
        <rect x="44" y="36" width="112" height="180" rx="56" fill="url(#yellowGlow)" />

        {/* Cute Little Sprout Hair */}
        <path
          d="M96 36C96 26 90 20 86 18"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M100 36C100 24 100 16 100 14"
          stroke="#1E293B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M104 36C104 26 110 20 114 18"
          stroke="#1E293B"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Goggle Strap (Black Band) */}
        <rect x="44" y="86" width="112" height="14" fill="#334155" />

        {/* Left Arm & Glove */}
        <motion.path
          d="M46 140C32 155 30 180 34 195"
          stroke="#FACC15"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="34" cy="196" r="9" fill="#1E293B" />

        {/* Right Arm waving or holding item */}
        {holdingItem === "none" ? (
          <motion.path
            d="M154 140C168 155 170 180 166 195"
            stroke="#FACC15"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <motion.path
            d="M154 140C170 145 176 170 160 178"
            stroke="#FACC15"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
          />
        )}
        <circle cx="160" cy="180" r="9" fill="#1E293B" />

        {/* Overalls / Dungarees (Denim Blue) */}
        <path
          d="M44 165C44 196 68 220 100 220C132 220 156 196 156 165H44Z"
          fill="#1E40AF"
        />
        <rect x="68" y="148" width="64" height="28" fill="#1E40AF" />

        {/* Dungaree Straps */}
        <path d="M46 142L72 154" stroke="#1E3A8A" strokeWidth="10" strokeLinecap="round" />
        <path d="M154 142L128 154" stroke="#1E3A8A" strokeWidth="10" strokeLinecap="round" />
        <circle cx="70" cy="154" r="3" fill="#0F172A" />
        <circle cx="130" cy="154" r="3" fill="#0F172A" />

        {/* Front Pocket with cute heart or G emblem */}
        <rect x="85" y="170" width="30" height="24" rx="4" fill="#1D4ED8" />
        <path
          d="M100 185C100 185 93 180 93 176C93 174 95 172 97.5 172C99 172 100 173.5 100 173.5C100 173.5 101 172 102.5 172C105 172 107 174 107 176C107 180 100 185 100 185Z"
          fill="#F472B6"
        />

        {/* Goggles (Silver Rings) */}
        <circle cx="82" cy="93" r="22" fill="#94A3B8" />
        <circle cx="82" cy="93" r="18" fill="#CBD5E1" />
        <circle cx="82" cy="93" r="15" fill="#FFFFFF" />

        <circle cx="118" cy="93" r="22" fill="#94A3B8" />
        <circle cx="118" cy="93" r="18" fill="#CBD5E1" />
        <circle cx="118" cy="93" r="15" fill="#FFFFFF" />

        {/* Eyes (Warm Brown Iris with Blinking animation) */}
        <motion.g
          animate={{
            scaleY: [1, 1, 0.1, 1, 1],
            transition: { repeat: Infinity, duration: 4, times: [0, 0.45, 0.5, 0.55, 1] },
          }}
          style={{ originY: "93px" }}
        >
          {/* Left Eye */}
          <circle cx="84" cy="93" r="8" fill="#854D0E" />
          <circle cx="84" cy="93" r="4.5" fill="#1E293B" />
          <circle cx="82" cy="90" r="2.5" fill="#FFFFFF" />

          {/* Right Eye */}
          <circle cx="116" cy="93" r="8" fill="#854D0E" />
          <circle cx="116" cy="93" r="4.5" fill="#1E293B" />
          <circle cx="114" cy="90" r="2.5" fill="#FFFFFF" />
        </motion.g>

        {/* Rosy Cheeks */}
        <ellipse cx="64" cy="118" rx="8" ry="4" fill="#FB7185" opacity="0.6" />
        <ellipse cx="136" cy="118" rx="8" ry="4" fill="#FB7185" opacity="0.6" />

        {/* Goofy Happy Smile */}
        <path
          d="M86 122C86 132 114 132 114 122"
          stroke="#78350F"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Tiny tooth peaking out */}
        <rect x="96" y="122" width="6" height="4" rx="1" fill="#FFFFFF" />

        {/* Held items */}
        {holdingItem === "banana" && (
          <g transform="translate(142, 162) rotate(-25)">
            <path
              d="M10 32C18 30 28 20 30 5C24 9 14 18 8 28Z"
              fill="#FDE047"
              stroke="#CA8A04"
              strokeWidth="1.5"
            />
            <path d="M30 5L32 2" stroke="#65A30D" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M10 32L8 34" stroke="#854D0E" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {holdingItem === "heart" && (
          <g transform="translate(146, 160) scale(1.1)">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="#F43F5E"
            />
          </g>
        )}

        {holdingItem === "flower" && (
          <g transform="translate(148, 155)">
            <path d="M12 14L12 30" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" />
            <circle cx="12" cy="10" r="5" fill="#F472B6" />
            <circle cx="7" cy="10" r="4" fill="#FBCFE8" />
            <circle cx="17" cy="10" r="4" fill="#FBCFE8" />
            <circle cx="12" cy="5" r="4" fill="#FBCFE8" />
            <circle cx="12" cy="15" r="4" fill="#FBCFE8" />
            <circle cx="12" cy="10" r="3" fill="#FACC15" />
          </g>
        )}

        {/* Gradients */}
        <defs>
          <linearGradient id="yellowGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#CA8A04" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}

