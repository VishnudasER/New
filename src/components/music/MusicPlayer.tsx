"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { musicData } from "@/data/content";
import { Play, Pause, Volume2, VolumeX, ExternalLink, Sparkles, Heart, Radio } from "lucide-react";

export default function MusicPlayer() {
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(false);
  const [selectedAmbient, setSelectedAmbient] = useState(musicData.ambientSounds[0]);
  const [volume, setVolume] = useState(0.5);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceNodeRef = useRef<AudioNode | null>(null);
  const isMuted = volume === 0;

  // Initialize or stop ambient Web Audio generator
  const stopAmbientSound = () => {
    if (sourceNodeRef.current) {
      try {
        (sourceNodeRef.current as any).stop?.();
        sourceNodeRef.current.disconnect();
      } catch {
        // safe fallback
      }
      sourceNodeRef.current = null;
    }
    setIsPlayingAmbient(false);
  };

  const startAmbientSound = (soundType: string) => {
    stopAmbientSound();

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContextClass();
      }

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
      gainNode.connect(ctx.destination);
      gainNodeRef.current = gainNode;

      // Generate soothing noise according to sound type
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);

      if (soundType === "rain") {
        // Pink / soft rain noise
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          output[i] = (b0 + b1 + b2) * 0.15;
        }
      } else if (soundType === "ocean") {
        // Low-frequency rolling waves
        for (let i = 0; i < bufferSize; i++) {
          const t = i / ctx.sampleRate;
          const slowSine = Math.sin(t * 0.5 * Math.PI) * 0.5 + 0.5;
          const white = Math.random() * 2 - 1;
          output[i] = white * slowSine * 0.18;
        }
      } else {
        // Gentle brown noise for fireplace/night/chimes
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          output[i] *= 0.8;
        }
      }

      const whiteNoiseSource = ctx.createBufferSource();
      whiteNoiseSource.buffer = noiseBuffer;
      whiteNoiseSource.loop = true;

      // Filter to soften the harsh frequencies
      const filter = ctx.createBiquadFilter();
      filter.type = soundType === "rain" ? "lowpass" : soundType === "ocean" ? "bandpass" : "lowpass";
      filter.frequency.setValueAtTime(soundType === "rain" ? 900 : 450, ctx.currentTime);

      whiteNoiseSource.connect(filter);
      filter.connect(gainNode);

      whiteNoiseSource.start();
      sourceNodeRef.current = whiteNoiseSource;
      setIsPlayingAmbient(true);
    } catch (err) {
      console.error("Ambient audio synthesis error:", err);
    }
  };

  const handleToggleAmbient = () => {
    if (isPlayingAmbient) {
      stopAmbientSound();
    } else {
      startAmbientSound(selectedAmbient.id);
    }
  };

  const handleSelectSound = (sound: typeof musicData.ambientSounds[0]) => {
    setSelectedAmbient(sound);
    if (isPlayingAmbient) {
      startAmbientSound(sound.id);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol * 0.3, audioContextRef.current.currentTime);
    }
  };

  useEffect(() => {
    return () => {
      stopAmbientSound();
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Featured Song Card - Arz Kiya Hai */}
      <div className="bg-gradient-to-br from-[#FFF0F5] via-white to-[#FCE7F3] rounded-3xl p-6 sm:p-8 border border-pink-200/90 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Stylized Vinyl / Album Art */}
          <div className="relative shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-stone-900 border-4 border-stone-800 shadow-xl flex items-center justify-center p-3 relative overflow-hidden"
            >
              {/* Grooves */}
              <div className="absolute inset-2 rounded-full border border-stone-700/50" />
              <div className="absolute inset-5 rounded-full border border-stone-700/50" />
              <div className="absolute inset-8 rounded-full border border-stone-700/50" />

              {/* Center Label */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-rose-400 via-pink-500 to-purple-600 flex flex-col items-center justify-center text-white text-center p-1">
                <Heart className="w-5 h-5 fill-white mb-0.5" />
                <span className="text-[8px] font-bold tracking-tight">SHUTTU</span>
              </div>
            </motion.div>

            {/* Glowing pin */}
            <div className="absolute -top-1 -right-1 p-2 rounded-full bg-rose-500 text-white shadow-md">
              <Sparkles className="w-4 h-4 animate-spin" />
            </div>
          </div>

          {/* Song Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>🎵</span>
              <span>Her Favourite Song</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-rose-950 mb-1">
              {musicData.featuredSong.title}
            </h3>
            <p className="text-sm font-medium text-pink-700 mb-3">
              {musicData.featuredSong.tagline}
            </p>

            {/* Lyrics Excerpt */}
            <div className="bg-white/80 rounded-2xl p-4 border border-pink-100/80 mb-4 font-serif italic text-stone-800 text-xs sm:text-sm leading-relaxed">
              <pre className="font-serif whitespace-pre-wrap">{musicData.featuredSong.lyricsSnippet}</pre>
            </div>

            <p className="text-xs text-stone-600 mb-4 font-sans">
              {musicData.featuredSong.personalNote}
            </p>

            {/* Official Streaming Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <a
                href={musicData.featuredSong.spotifySearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#1DB954] hover:bg-[#1AA34A] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Listen on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={musicData.featuredSong.youtubeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#FF0000] hover:bg-[#D90000] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={musicData.featuredSong.appleMusicSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#FA243C] hover:bg-[#D81C30] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Apple Music</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Built-in Ambient Sound Synthesizer for Relaxation */}
      <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-pink-100 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Radio className="w-5 h-5 text-rose-500" />
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-rose-950">
                Relaxation Mode & Ambient Sounds
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-stone-600">
              Gentle soothing sounds synthesized directly in your browser. Perfect for naps, reading,
              or easing cramps.
            </p>
          </div>

          {/* Master Play/Pause Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggleAmbient}
            className={`px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
              isPlayingAmbient
                ? "bg-rose-500 text-white shadow-rose-500/25 animate-pulse"
                : "bg-pink-100 hover:bg-pink-200 text-rose-800"
            }`}
          >
            {isPlayingAmbient ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-rose-800" />}
            <span>{isPlayingAmbient ? "Pause Ambient" : "Play Ambient Rain"}</span>
          </motion.button>
        </div>

        {/* Ambient Sound Options Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {musicData.ambientSounds.map((sound) => {
            const isSelected = selectedAmbient.id === sound.id;
            return (
              <button
                key={sound.id}
                onClick={() => handleSelectSound(sound)}
                className={`p-3.5 rounded-2xl flex flex-col items-center justify-center text-center transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-rose-500 text-white border-rose-400 shadow-xs"
                    : "bg-pink-50/70 hover:bg-pink-100/80 text-stone-700 border-pink-100"
                }`}
              >
                <span className="text-2xl mb-1">{sound.emoji}</span>
                <span className="text-xs font-semibold leading-tight">{sound.name}</span>
              </button>
            );
          })}
        </div>

        {/* Volume Slider */}
        <div className="flex items-center justify-center gap-3 max-w-xs mx-auto bg-pink-50/80 p-3 rounded-2xl border border-pink-100">
          <button
            onClick={() => handleVolumeChange(isMuted ? 0.5 : 0)}
            className="text-rose-600 hover:text-rose-800"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer"
          />
          <span className="text-xs font-semibold text-rose-700 w-8 text-right">
            {Math.round(volume * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}

