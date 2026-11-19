"use client";

import { motion } from "framer-motion";

interface HuggingCharactersProps {
  isHugging: boolean;
  onHugToggle?: () => void;
  className?: string;
}

export default function HuggingCharacters({
  isHugging,
  className = "w-full max-w-sm h-64",
}: HuggingCharactersProps) {
  return (
    <div className={`relative flex items-center justify-center overflow-visible ${className}`}>
      {/* Floating hearts burst when hugging */}
      {isHugging && (
        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0, y: 0, x: 0 }}
              animate={{
                scale: [0, 1.2, 0.9],
                opacity: [0, 1, 0],
                y: [-20, -70 - i * 15],
                x: [(i % 2 === 0 ? 1 : -1) * (15 + i * 12)],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeOut",
              }}
              className="absolute text-2xl"
            >
              {i % 2 === 0 ? "💖" : "✨"}
            </motion.div>
          ))}
        </div>
      )}

      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        {/* Soft ground shadow */}
        <ellipse cx="160" cy="205" rx="100" ry="12" fill="#FCE7F3" opacity="0.8" />

        {/* Character 1 (Left - Pink Bunny/Bear "Shuttu") */}
        <motion.g
          animate={
            isHugging
              ? { x: 42, rotate: 6 }
              : { x: 0, rotate: [0, -2, 0], y: [0, -3, 0] }
          }
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 14,
            rotate: { duration: 3, repeat: isHugging ? 0 : Infinity, ease: "easeInOut" },
            y: { duration: 2.5, repeat: isHugging ? 0 : Infinity, ease: "easeInOut" },
          }}
        >
          {/* Left Character Ears */}
          <ellipse cx="90" cy="80" rx="9" ry="24" fill="#FBCFE8" transform="rotate(-15 90 80)" />
          <ellipse cx="90" cy="80" rx="5" ry="16" fill="#F472B6" transform="rotate(-15 90 80)" />
          <ellipse cx="120" cy="76" rx="9" ry="24" fill="#FBCFE8" transform="rotate(10 120 76)" />
          <ellipse cx="120" cy="76" rx="5" ry="16" fill="#F472B6" transform="rotate(10 120 76)" />

          {/* Left Character Body */}
          <ellipse cx="105" cy="145" rx="38" ry="44" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="3" />
          {/* Head */}
          <circle cx="105" cy="110" r="32" fill="#FDF2F8" stroke="#FBCFE8" strokeWidth="3" />

          {/* Cheeks */}
          <ellipse cx="92" cy="116" rx="6" ry="3" fill="#FB7185" opacity="0.6" />
          <ellipse cx="118" cy="116" rx="6" ry="3" fill="#FB7185" opacity="0.6" />

          {/* Eyes (Happy arcs when hugging) */}
          {isHugging ? (
            <>
              <path d="M92 110C92 106 98 106 98 110" stroke="#831843" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M112 110C112 106 118 106 118 110" stroke="#831843" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="95" cy="108" r="3" fill="#831843" />
              <circle cx="115" cy="108" r="3" fill="#831843" />
              <circle cx="94" cy="106" r="1" fill="#FFFFFF" />
              <circle cx="114" cy="106" r="1" fill="#FFFFFF" />
            </>
          )}

          {/* Nose & Smile */}
          <ellipse cx="105" cy="114" rx="2.5" ry="2" fill="#F43F5E" />
          <path d="M102 118C103.5 120 106.5 120 108 118" stroke="#831843" strokeWidth="2" strokeLinecap="round" />

          {/* Cute Bow on Ear */}
          <path d="M82 72L88 78L82 84Z" fill="#F43F5E" />
          <path d="M88 72L82 78L88 84Z" fill="#F43F5E" />
          <circle cx="85" cy="78" r="2.5" fill="#FFFFFF" />

          {/* Left Arm */}
          {isHugging ? (
            <motion.path
              d="M115 135 C135 130 155 140 160 148"
              stroke="#FBCFE8"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <path
              d="M80 135 C70 145 74 160 84 165"
              stroke="#FBCFE8"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </motion.g>

        {/* Character 2 (Right - Soft Peach/Lavender Bear "Boyfriend") */}
        <motion.g
          animate={
            isHugging
              ? { x: -42, rotate: -6 }
              : { x: 0, rotate: [0, 2, 0], y: [0, -3, 0] }
          }
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 14,
            rotate: { duration: 3.2, repeat: isHugging ? 0 : Infinity, ease: "easeInOut" },
            y: { duration: 2.7, repeat: isHugging ? 0 : Infinity, ease: "easeInOut" },
          }}
        >
          {/* Right Character Round Bear Ears */}
          <circle cx="195" cy="84" r="13" fill="#E9D5FF" stroke="#C084FC" strokeWidth="2" />
          <circle cx="195" cy="84" r="7" fill="#C084FC" />
          <circle cx="230" cy="86" r="13" fill="#E9D5FF" stroke="#C084FC" strokeWidth="2" />
          <circle cx="230" cy="86" r="7" fill="#C084FC" />

          {/* Right Character Body */}
          <ellipse cx="215" cy="148" rx="42" ry="46" fill="#F3E8FF" stroke="#DDD6FE" strokeWidth="3" />
          {/* Head */}
          <circle cx="215" cy="110" r="34" fill="#F3E8FF" stroke="#DDD6FE" strokeWidth="3" />

          {/* Cheeks */}
          <ellipse cx="202" cy="118" rx="6" ry="3" fill="#C084FC" opacity="0.4" />
          <ellipse cx="228" cy="118" rx="6" ry="3" fill="#C084FC" opacity="0.4" />

          {/* Eyes */}
          {isHugging ? (
            <>
              <path d="M202 110C202 106 208 106 208 110" stroke="#581C87" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M222 110C222 106 228 106 228 110" stroke="#581C87" strokeWidth="2.5" strokeLinecap="round" />
            </>
          ) : (
            <>
              <circle cx="205" cy="108" r="3" fill="#581C87" />
              <circle cx="225" cy="108" r="3" fill="#581C87" />
              <circle cx="204" cy="106" r="1" fill="#FFFFFF" />
              <circle cx="224" cy="106" r="1" fill="#FFFFFF" />
            </>
          )}

          {/* Bear Snout */}
          <ellipse cx="215" cy="118" rx="10" ry="7" fill="#FFFFFF" />
          <ellipse cx="215" cy="116" rx="3.5" ry="2.5" fill="#581C87" />
          <path d="M215 118L215 122" stroke="#581C87" strokeWidth="1.5" strokeLinecap="round" />

          {/* Right Arm Wrapping around Shuttu */}
          {isHugging ? (
            <motion.path
              d="M200 135 C175 128 140 138 135 152"
              stroke="#DDD6FE"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
          ) : (
            <path
              d="M238 135 C248 145 244 160 234 165"
              stroke="#DDD6FE"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
          )}
        </motion.g>

        {/* Big Heart Above When Hugging */}
        {isHugging && (
          <motion.g
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: [0.8, 1.15, 1], y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            transform="translate(142, 38)"
          >
            <path
              d="M18 32l-2.2-2C7.8 22.8 3 18.2 3 12.5 3 7.8 6.8 4 11.5 4c2.6 0 5.1 1.2 6.5 3.2C19.4 5.2 21.9 4 24.5 4 29.2 4 33 7.8 33 12.5c0 5.7-4.8 10.3-12.8 17.5L18 32z"
              fill="#F43F5E"
            />
          </motion.g>
        )}
      </svg>
    </div>
  );
}

