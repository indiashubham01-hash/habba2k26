import React from 'react';
import { motion } from 'framer-motion';

/**
 * TechHabbaPravruttiTitle - Pravrutti Techfest 2.0 Inspired Grand Typography
 * - Replaces the previous chunky 3D extrusion with refined, high-fashion Pravrutti aesthetic
 * - Continuous horizontal golden headline beam (shirorekha) spanning over the letters
 * - Metallic champagne-gold gradient fill with subtle inner sheen & warm luminous glow
 * - Iconic "<<< NATIONAL LEVEL TECHFEST 2026 >>>" cyber-gold badge
 * - Atmospheric dark monolith tower silhouette & glowing ruby-crimson celestial portal halo
 */
const TechHabbaPravruttiTitle = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center select-none ${className}`}>


      {/* ========================================================
          2. TOP PRESENTER LINE (Pravrutti style)
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-3 sm:mb-4 text-center"
      >
        <span className="text-[11px] sm:text-xs md:text-sm font-sans uppercase font-bold tracking-[0.28em] text-[#E5D0AD] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-center gap-2">
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E5D0AD]/60" />
          ACHARYA INSTITUTES & THE BIG O PRESENT
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E5D0AD]/60" />
        </span>
      </motion.div>

      {/* ========================================================
          3. MAIN PRAVRUTTI-STYLE TITLE: "tech habba" / "TECH HABBA 2K26"
             With continuous horizontal golden overline beam
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative flex flex-col items-center justify-center w-full px-2"
      >
        {/* Continuous Horizontal Golden Beam (Shirorekha / Headline) */}
        <div className="relative w-full max-w-2xl sm:max-w-3xl flex items-center justify-center mb-0.5">
          {/* Left Decorative Serif Swash */}
          <div className="w-3 h-2 border-t-2 border-l-2 border-[#E8CA80] rounded-tl-sm -mr-1" />
          {/* Main Glowing Bar */}
          <div className="flex-grow h-[3px] sm:h-[4px] pravrutti-top-bar rounded-full" />
          {/* Right Decorative Serif Swash */}
          <div className="w-3 h-2 border-t-2 border-r-2 border-[#E8CA80] rounded-tr-sm -ml-1" />
        </div>

        {/* Stylized Typography Title */}
        <div className="relative flex items-baseline justify-center gap-2 sm:gap-3 flex-nowrap max-w-full">
          <h1 className="title-pravrutti text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-normal leading-[1.1] select-none text-center">
            tech habba
          </h1>

          {/* 2K26 Badge in Matching Champagne Gold */}
          <span className="title-pravrutti text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-amber-200/90 ml-1 sm:ml-2">
            2K26
          </span>
        </div>

        {/* Ambient Golden Under-Glow Ray */}
        <div className="w-2/3 h-1 bg-gradient-to-r from-transparent via-[#E8CA80]/40 to-transparent blur-sm mt-1" />
      </motion.div>

      {/* ========================================================
          4. SUB-BADGE: <<< NATIONAL LEVEL TECHFEST 2026 >>>
          ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 sm:mt-5 text-center"
      >
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-black/60 border border-amber-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <span className="pravrutti-sub-badge text-xs sm:text-sm md:text-base font-bold font-mono">
            &lt;&lt;&lt; NATIONAL LEVEL TECHFEST 2026 &gt;&gt;&gt;
          </span>
        </div>
      </motion.div>

    </div>
  );
};

export default TechHabbaPravruttiTitle;
