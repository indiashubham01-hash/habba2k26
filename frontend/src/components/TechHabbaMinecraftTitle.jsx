import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * TechHabbaMinecraftTitle - Authentic Minecraft Theme Logo & Typography
 * - Fully responsive for mobile phones, tablets, and desktop
 * - 3D Minecraft stone & pixel-beveled typography for "TECH HABBA 2K26"
 * - Iconic bouncing yellow Minecraft Splash Text (with mobile-safe containment)
 * - Minecraft Advancement Badge top presenter
 * - Diamond / Redstone / XP level accents
 */
const TechHabbaMinecraftTitle = ({ className = '' }) => {
  const splashes = [
    "Now with 100% more Redstone!",
    "Craft your Future!",
    "Level 2.0 Unlocked!",
    "Beware of Creepers!",
    "Diamond Tier Innovation!",
    "Powered by Code & Netherite!",
  ];

  const [splashIndex, setSplashIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSplashIndex((prev) => (prev + 1) % splashes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [splashes.length]);

  return (
    <div className={`relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center select-none px-2 ${className}`}>

      {/* ========================================================
          1. MINECRAFT ADVANCEMENT BADGE (TOP PRESENTER)
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-3 sm:mb-4 text-center max-w-[95vw]"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-none bg-[#1e1e24] border-t-2 border-l-2 border-[#555566] border-b-2 border-r-2 border-[#09090c] shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#55FF55] shadow-[0_0_8px_#55FF55] inline-block animate-pulse flex-shrink-0" />
          <span className="font-minecraft text-[9px] sm:text-xs text-[#fbee37] tracking-normal sm:tracking-wider uppercase font-bold whitespace-nowrap">
            [ Adv: Acharya ✕ The Big O ]
          </span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#4dedf4] shadow-[0_0_8px_#4dedf4] inline-block animate-pulse flex-shrink-0" />
        </div>
      </motion.div>

      {/* ========================================================
          2. MINECRAFT LOGO TITLE: "TECH HABBA 2K26"
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative flex flex-col items-center justify-center w-full px-1"
      >
        <div className="relative flex flex-col items-center justify-center max-w-full">

          {/* Line 1: TECH HABBA (Authentic Stone Bevel, Phone Responsive) */}
          <div className="relative inline-block max-w-full">
            <h1
              className="font-minecraft text-2xl min-[380px]:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight min-[380px]:tracking-normal sm:tracking-wider uppercase text-center break-words"
              style={{
                color: '#bcbcbc',
                textShadow: `
                  2px 2px 0 #3c3c3c,
                  -1px -1px 0 #ffffff,
                  4px 4px 0 #1b1b1b,
                  0 0 25px rgba(77, 237, 244, 0.35)
                `,
                WebkitTextStroke: '1.5px #18181c',
              }}
            >
              TECH HABBA
            </h1>

            {/* Desktop / Tablet Splash Text */}
            <div className="hidden sm:block absolute -top-4 -right-6 md:-top-7 md:-right-12 z-20 pointer-events-none">
              <span className="minecraft-splash text-sm md:text-lg font-bold whitespace-nowrap px-2 py-0.5 bg-black/60 border border-yellow-500/30 shadow-lg">
                {splashes[splashIndex]}
              </span>
            </div>
          </div>

          {/* Line 2: 2K26 in Diamond Voxel Styling */}
          <div className="mt-1 sm:mt-2">
            <span
              className="font-minecraft text-xl min-[380px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider sm:tracking-widest uppercase"
              style={{
                color: '#4dedf4',
                textShadow: `
                  2px 2px 0 #0d6371,
                  -1px -1px 0 #c2ffff,
                  4px 4px 0 #05262c,
                  0 0 30px rgba(77, 237, 244, 0.65)
                `,
                WebkitTextStroke: '1.5px #073840',
              }}
            >
              2.0
            </span>
          </div>

          {/* Mobile Splash Text (Centered & perfectly contained on phones) */}
          <div className="block sm:hidden mt-2 z-20 pointer-events-none text-center max-w-[280px]">
            <span className="minecraft-splash text-[11px] font-bold px-2 py-0.5 bg-black/70 border border-yellow-500/40 shadow-md">
              {splashes[splashIndex]}
            </span>
          </div>

        </div>

        {/* Minecraft Redstone / Diamond Wire Accent */}
        <div className="w-full max-w-xs sm:max-w-lg flex items-center justify-center gap-1 mt-3 sm:mt-4">
          <div className="h-[2px] sm:h-[3px] flex-grow bg-gradient-to-r from-transparent via-[#4dedf4]/60 to-[#ff2a44]" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#ff2a44] shadow-[0_0_10px_#ff2a44] rotate-45 flex-shrink-0" />
          <div className="h-[2px] sm:h-[3px] flex-grow bg-gradient-to-l from-transparent via-[#4dedf4]/60 to-[#ff2a44]" />
        </div>
      </motion.div>

      {/* ========================================================
          3. MINECRAFT LEVEL / TAGLINE SUBTITLE
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-3 sm:mt-4 text-center max-w-[95vw]"
      >
        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#14141a] border-t-2 border-l-2 border-[#383848] border-b-2 border-r-2 border-[#09090c] shadow-[inset_1px_1px_0_#4c4c60]">
          <span className="text-[#55FF55] font-minecraft text-[9px] min-[380px]:text-[11px] sm:text-xs font-bold whitespace-nowrap">
            [EXP LVL 2.0: NATIONAL TECHFEST]
          </span>
        </div>
      </motion.div>

    </div>
  );
};

export default TechHabbaMinecraftTitle;
