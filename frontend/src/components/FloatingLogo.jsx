import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * FloatingLogo - Authentic 3D Floating Big O Emblem
 * - Displays the official THE BIG O logo with razor clarity
 * - Interactive 3D mouse tilt & specular lighting physics
 * - Smooth floating animation
 */
const FloatingLogo = ({ size = 64, className = '', showText = false }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.4);
    setRotateY(x * 0.4);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none perspective-[900px] ${className}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          scale: isHovered ? 1.1 : [1, 1.03, 1],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          scale: isHovered
            ? { duration: 0.2 }
            : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.12s ease-out',
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient Backlight Glow */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-40 group-hover:opacity-80 transition-opacity" />

        {/* Authentic High-Definition Big O Logo */}
        <img
          src="/the-big-o-clean.png"
          alt="The Big O Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default FloatingLogo;
