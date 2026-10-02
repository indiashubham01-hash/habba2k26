import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Sparkles, ArrowRight, ShieldCheck, Trophy, ArrowLeft } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

/**
 * Register - Locked Pre-Launch Teaser View
 * Registrations are not open yet; displaying official "REVEALING SOON" portal gate.
 */
const Register = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 flex items-center justify-center px-4">
      <ParticleBackground />

      <div className="max-w-2xl w-full mx-auto relative z-10 text-center">
        <div className="minecraft-slot p-6 sm:p-14 border-2 border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
          
          {/* Glowing Vault Lock Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-[#14141c] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.35)]">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 animate-pulse" />
          </div>

          <span className="font-minecraft text-[8.5px] sm:text-[10px] text-amber-300 tracking-widest uppercase mb-2 inline-block">
            [ PORTAL STATUS: ACCESS RESTRICTED ]
          </span>

          <h1 className="text-2xl sm:text-5xl font-black text-white font-cyber mb-3 sm:mb-4">
            REGISTRATIONS <span className="neon-text text-amber-300 block sm:inline">REVEALING SOON</span>
          </h1>

          <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-mono leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto">
            Online registrations for Tech Habba 2.0 have not opened yet. Squad entry, single quest enrollment, 24-hour hackathon slots, and verification portals will unlock shortly.
          </p>

          {/* Quest Teaser Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
            <div className="p-3 bg-[#0d0d14] border border-[#2d2d3d] text-center">
              <span className="font-minecraft text-[10px] text-sky-400 block mb-1">13 QUESTS</span>
              <span className="text-[10px] text-zinc-400 font-mono">Coding, AI & Gaming</span>
            </div>
            <div className="p-3 bg-[#0d0d14] border border-[#2d2d3d] text-center">
              <span className="font-minecraft text-[10px] text-emerald-400 block mb-1">₹1,50,000+</span>
              <span className="text-[10px] text-zinc-400 font-mono">Bounty Prize Pool</span>
            </div>
            <div className="p-3 bg-[#0d0d14] border border-[#2d2d3d] text-center">
              <span className="font-minecraft text-[10px] text-amber-300 block mb-1">24H HACK</span>
              <span className="text-[10px] text-zinc-400 font-mono">National Hackathon</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
            <Link
              to="/events"
              className="btn-minecraft-diamond !py-3 !px-6 text-xs font-minecraft flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>⚔</span>
              <span>EXPLORE ALL 13 QUESTS</span>
            </Link>
            <Link
              to="/"
              className="btn-minecraft !py-3 !px-6 text-xs font-minecraft flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO REALM</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
