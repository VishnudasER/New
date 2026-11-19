"use client";

import { motion } from "framer-motion";

export default function MountainIllustration({ className = "w-full h-48" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <svg
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDE2E4" />
            <stop offset="50%" stopColor="#F8EDEB" />
            <stop offset="100%" stopColor="#E2ECE9" />
          </linearGradient>
          <linearGradient id="mtnGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8E2DC" />
            <stop offset="100%" stopColor="#FFE5D9" />
          </linearGradient>
          <linearGradient id="mtnGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4ACB7" />
            <stop offset="100%" stopColor="#9D8189" />
          </linearGradient>
          <linearGradient id="mtnGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6D6875" />
            <stop offset="100%" stopColor="#4A4453" />
          </linearGradient>
        </defs>

        {/* Dreamy Sky */}
        <rect width="600" height="240" fill="url(#skyGrad)" />

        {/* Soft Moon / Sun */}
        <circle cx="480" cy="65" r="32" fill="#FFFBEB" opacity="0.9" />
        <circle cx="480" cy="65" r="40" fill="#FEF3C7" opacity="0.3" />

        {/* Twinkling Stars */}
        <circle cx="80" cy="40" r="1.5" fill="#FFE4E6" />
        <circle cx="140" cy="65" r="2" fill="#FFFFFF" />
        <circle cx="240" cy="30" r="1.5" fill="#FFFFFF" />
        <circle cx="360" cy="50" r="2" fill="#FFE4E6" />
        <circle cx="540" cy="35" r="1.5" fill="#FFFFFF" />

        {/* Drifting Clouds */}
        <motion.g
          animate={{ x: [-20, 30, -20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="120" cy="85" rx="55" ry="16" fill="#FFFFFF" opacity="0.6" />
          <ellipse cx="145" cy="78" rx="35" ry="20" fill="#FFFFFF" opacity="0.7" />
          <ellipse cx="95" cy="88" rx="30" ry="14" fill="#FFFFFF" opacity="0.5" />
        </motion.g>

        <motion.g
          animate={{ x: [20, -30, 20] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse cx="400" cy="100" rx="70" ry="18" fill="#FFFFFF" opacity="0.5" />
          <ellipse cx="430" cy="92" rx="45" ry="22" fill="#FFFFFF" opacity="0.6" />
        </motion.g>

        {/* Distant Mountain Peak (Snow capped) */}
        <path d="M120 240L280 90L420 240H120Z" fill="url(#mtnGrad1)" />
        {/* Snow Cap */}
        <path d="M280 90L240 130L260 140L280 130L300 142L320 130L280 90Z" fill="#FFFFFF" opacity="0.9" />

        {/* Middle Mountain Range */}
        <path d="M0 240L140 120L310 240H0Z" fill="url(#mtnGrad2)" opacity="0.75" />
        <path d="M140 120L110 150L130 160L140 152L165 162L175 150L140 120Z" fill="#FFFFFF" opacity="0.85" />

        <path d="M320 240L460 110L600 240H320Z" fill="url(#mtnGrad2)" opacity="0.6" />
        <path d="M460 110L430 142L450 150L460 144L480 152L495 140L460 110Z" fill="#FFFFFF" opacity="0.85" />

        {/* Foreground Mountain & Ridge */}
        <path d="M60 240L220 150L380 240H60Z" fill="url(#mtnGrad3)" />

        {/* Pine Trees Silhouettes on Ridge */}
        <g fill="#2D2833">
          <polygon points="120,240 126,220 132,240" />
          <polygon points="128,240 134,215 140,240" />
          <polygon points="138,240 144,222 150,240" />
          <polygon points="210,240 216,210 222,240" />
          <polygon points="220,240 225,205 230,240" />
          <polygon points="228,240 234,214 240,240" />
          <polygon points="340,240 345,224 350,240" />
        </g>

        {/* Cozy Trekking Tent with warm glow */}
        <g transform="translate(245, 195)">
          {/* Tent shape */}
          <polygon points="0,32 18,6 36,32" fill="#F43F5E" />
          {/* Inner flap opening */}
          <polygon points="10,32 18,12 26,32" fill="#FEF08A" />
          {/* Campfire glow next to tent */}
          <circle cx="48" cy="28" r="8" fill="#F59E0B" opacity="0.5" />
          <circle cx="48" cy="28" r="4" fill="#EF4444" />
          <circle cx="48" cy="27" r="2" fill="#FEF08A" />
        </g>
      </svg>
    </div>
  );
}

