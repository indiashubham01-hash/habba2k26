import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * AcharyaBigOEmblem3D - Interactive 3D Collaborative Emblem (ACHARYA ✕ THE BIG O)
 * - Ultra-clear high-definition rendering of both official logos
 * - Interactive 3D perspective tilt reacting smoothly to mouse & mobile touch
 * - Scaled responsively for phone view (320px+) through desktop
 * - Floating hover physics and subtle dynamic light sweep
 */
const AcharyaBigOEmblem3D = ({ className = '' }) => {
  const containerRef = useRef(null);
  const [rot, setRot] = useState({ rx: 0, ry: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    let animId;
    let targetRot = { rx: 0, ry: 0 };
    let currentRot = { rx: 0, ry: 0 };

    const updateTilt = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance relative to emblem center
      const dx = (clientX - centerX) / (window.innerWidth / 2);
      const dy = (clientY - centerY) / (window.innerHeight / 2);

      targetRot = {
        rx: Math.max(-18, Math.min(18, -dy * 16)),
        ry: Math.max(-22, Math.min(22, dx * 20)),
      };
    };

    const handleMouseMove = (e) => {
      updateTilt(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        updateTilt(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleReset = () => {
      targetRot = { rx: 0, ry: 0 };
      setIsInteracting(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('mouseleave', handleReset);
    document.addEventListener('touchend', handleReset);

    const loop = () => {
      currentRot.rx += (targetRot.rx - currentRot.rx) * 0.08;
      currentRot.ry += (targetRot.ry - currentRot.ry) * 0.08;
      setRot({ rx: currentRot.rx, ry: currentRot.ry });
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseleave', handleReset);
      document.removeEventListener('touchend', handleReset);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onTouchStart={() => setIsInteracting(true)}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      className={`relative inline-block select-none perspective-[1200px] max-w-full ${className}`}
    >
      <motion.div
        animate={{
          y: isInteracting ? -4 : [0, -3, 0],
          scale: isInteracting ? 1.03 : 1,
        }}
        transition={{
          y: isInteracting ? { duration: 0.25 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 0.25 },
        }}
        style={{
          transform: `rotateX(${rot.rx}deg) rotateY(${rot.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative group flex items-center justify-center gap-2.5 min-[380px]:gap-3.5 sm:gap-7 py-2 px-2"
      >
        {/* 1. ACHARYA OFFICIAL LOGO (Floating Cleanly, Only Logo) */}
        <div
          className="flex flex-col items-center group/ach transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="relative w-11 h-11 min-[380px]:w-13 min-[380px]:h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center">
            <img
              src="/acharya-dark-clean.png"
              alt="Acharya Logo"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)]"
              loading="eager"
            />
          </div>
        </div>

        {/* 2. ELEGANT 3D COLLABORATION BADGE (✕) */}
        <div
          className="flex flex-col items-center justify-center px-0.5"
          style={{ transform: 'translateZ(28px)' }}
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-amber-400/50 bg-black/70 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.35)]">
            <span className="text-amber-300 font-black text-[11px] sm:text-sm font-cyber leading-none">
              ✕
            </span>
          </div>
        </div>

        {/* 3. THE BIG O OFFICIAL LOGO - PURE WHITE ICON ONLY (Zero Text, Only Logo) */}
        <div
          className="flex flex-col items-center group/bigo transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="relative w-11 h-11 min-[380px]:w-13 min-[380px]:h-13 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center">
            <img
              src="/the-big-o-clean.png"
              alt="The Big O Logo - Icon Only"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_22px_rgba(255,255,255,0.75)]"
              loading="eager"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcharyaBigOEmblem3D;
