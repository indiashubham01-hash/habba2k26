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
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2 sm:mb-3 text-center max-w-[95vw]"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-none bg-[#14141c] border-t-2 border-l-2 border-[#444455] border-b-2 border-r-2 border-[#09090c] shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 shadow-[0_0_6px_#34d399] inline-block animate-pulse flex-shrink-0" />
          <span className="font-minecraft text-[8.5px] sm:text-xs text-amber-300 tracking-normal sm:tracking-wider uppercase font-bold whitespace-nowrap">
            [ Adv: Acharya ✕ The Big O ]
          </span>
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-400 shadow-[0_0_6px_#38bdf8] inline-block animate-pulse flex-shrink-0" />
        </div>
      </motion.div>

      {/* ========================================================
          2. MINECRAFT LOGO TITLE: "TECH HABBA 2.0"
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative flex flex-col items-center justify-center w-full px-1"
      >
        <div className="relative flex flex-col items-center justify-center max-w-full">

          {/* Line 1: TECH HABBA (Authentic Stone Bevel, Phone Responsive) */}
          <div className="relative inline-block max-w-full">
            <h1
              className="font-minecraft text-2xl min-[380px]:text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight min-[380px]:tracking-normal sm:tracking-wider uppercase text-center break-words"
              style={{
                color: '#d4d4d8',
                textShadow: `
                  2px 2px 0 #3f3f46,
                  -1px -1px 0 #ffffff,
                  4px 4px 0 #18181b,
                  0 4px 20px rgba(0, 0, 0, 0.9)
                `,
                WebkitTextStroke: '1.2px #18181c',
              }}
            >
              TECH HABBA
            </h1>

            {/* Desktop / Tablet Splash Text */}
            <div className="hidden sm:block absolute -top-4 -right-6 md:-top-7 md:-right-12 z-20 pointer-events-none">
              <span className="minecraft-splash text-sm md:text-lg font-bold whitespace-nowrap px-2 py-0.5 bg-black/70 border border-yellow-500/40 shadow-lg">
                {splashes[splashIndex]}
              </span>
            </div>
          </div>

          {/* Line 2: 2.0 in Diamond Voxel Styling (Tight Kerning for cohesive pixel typography) */}
          <div className="mt-1 sm:mt-1.5 flex justify-center">
            <span
              className="font-minecraft inline-flex items-baseline text-2xl min-[380px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase"
              style={{
                color: '#38bdf8',
                textShadow: `
                  2px 2px 0 #0284c7,
                  -1px -1px 0 #e0f2fe,
                  3px 3px 0 #0c4a6e,
                  0 4px 16px rgba(2, 132, 199, 0.35)
                `,
                WebkitTextStroke: '1px #082f49',
              }}
            >
              <span>2</span>
              <span className="-mx-1 sm:-mx-2 text-[0.8em] relative -top-0.5 sm:-top-1">.</span>
              <span>0</span>
            </span>
          </div>

          {/* Mobile Splash Text (Neat, contained, won't overlap divider) */}
          <div className="block sm:hidden my-1 z-20 pointer-events-none text-center">
            <span className="inline-block transform -rotate-3 text-[10px] font-minecraft-alt font-bold px-2 py-0.5 bg-yellow-950/80 border border-yellow-500/40 text-yellow-300 shadow-md">
              {splashes[splashIndex]}
            </span>
          </div>

        </div>

        {/* Minecraft Redstone / Diamond Wire Accent */}
        <div className="w-full max-w-xs sm:max-w-md flex items-center justify-center gap-1 mt-2 sm:mt-3">
          <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-[#ef4444]" />
          <div className="w-2 h-2 bg-[#ef4444] shadow-[0_0_8px_#ef4444] rotate-45 flex-shrink-0" />
          <div className="h-[2px] flex-grow bg-gradient-to-l from-transparent via-[#38bdf8]/40 to-[#ef4444]" />
        </div>
      </motion.div>

    </div>
  );
};

export default TechHabbaMinecraftTitle;
