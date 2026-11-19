"use client";

import { motion } from "framer-motion";

export default function ComfortIllustration({ className = "w-44 h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        {/* Soft circle background glow */}
        <circle cx="100" cy="100" r="88" fill="#FDF2F8" />
        <circle cx="100" cy="100" r="76" fill="#FCE7F3" opacity="0.6" />

        {/* Hot Water Bottle / Heating Bag */}
        <g transform="translate(42, 60) rotate(-12)">
          {/* Stopper */}
          <rect x="22" y="0" width="16" height="12" rx="3" fill="#FDA4AF" />
          <rect x="25" y="10" width="10" height="8" fill="#F43F5E" />
          {/* Main bag */}
          <rect x="0" y="16" width="60" height="78" rx="16" fill="#FB7185" />
          {/* Diagonal cozy ribbing lines */}
          <line x1="8" y1="34" x2="52" y2="34" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="8" y1="46" x2="52" y2="46" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="8" y1="58" x2="52" y2="58" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="8" y1="70" x2="52" y2="70" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
          {/* Little heart on pouch */}
          <path
            d="M30 54C30 54 24 49 24 45C24 43 25.5 41.5 27.5 41.5C29 41.5 30 43 30 43C30 43 31 41.5 32.5 41.5C34.5 41.5 36 43 36 45C36 49 30 54 30 54Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Steaming Cozy Tea Mug */}
        <g transform="translate(100, 75)">
          {/* Mug handle */}
          <path
            d="M48 24C58 24 60 44 48 48"
            stroke="#C084FC"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Mug body */}
          <rect x="6" y="10" width="46" height="54" rx="8" fill="#E9D5FF" />
          <rect x="6" y="56" width="46" height="8" rx="4" fill="#DDD6FE" />

          {/* Cute Heart on mug */}
          <path
            d="M29 36C29 36 21 30 21 24C21 21 23 19 26 19C28 19 29 21 29 21C29 21 30 19 32 19C35 19 37 21 37 24C37 30 29 36 29 36Z"
            fill="#C084FC"
          />

          {/* Steaming tea vapors */}
          <motion.path
            d="M20 4C18 -2 22 -8 20 -14"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={{
              y: [-2, -8, -2],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M32 6C30 0 34 -6 32 -12"
            stroke="#A855F7"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            animate={{
              y: [-2, -8, -2],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2.6, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Lavender Sprigs & chamomile blossoms */}
        <g transform="translate(75, 142)">
          {/* Stem */}
          <path d="M25 35C25 15 35 0 50 -10" stroke="#86EFAC" strokeWidth="2.5" strokeLinecap="round" />
          {/* Petals */}
          <circle cx="34" cy="18" r="4" fill="#C084FC" />
          <circle cx="42" cy="10" r="4" fill="#E9D5FF" />
          <circle cx="48" cy="2" r="4" fill="#C084FC" />
          <circle cx="52" cy="-6" r="4" fill="#E9D5FF" />
        </g>
      </svg>
    </div>
  );
}

