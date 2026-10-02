import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Sparkles, ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

/**
 * Schedule - Locked Master Timeline Teaser View
 * Timetable is hidden per pre-launch teaser phase; displaying official "REVEALING SOON" Ender Vault.
 */
const Schedule = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 flex items-center justify-center px-4">
      <ParticleBackground />

      <div className="max-w-4xl w-full mx-auto relative z-10 text-center">
        <div className="minecraft-slot p-6 sm:p-14 border-2 border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.2)]">
          
          {/* Glowing Vault Lock Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 bg-[#14141c] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.35)]">
            <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300 animate-pulse" />
          </div>

          <span className="font-minecraft text-[8.5px] sm:text-[10px] text-amber-300 tracking-widest uppercase mb-2 inline-block">
            [ MASTER DISPATCH // ENCRYPTED IN VAULT ]
          </span>

          <h1 className="text-2xl sm:text-5xl font-black text-white font-cyber mb-3 sm:mb-4">
            FEST TIMELINE // <span className="neon-text text-amber-300 block sm:inline">REVEALING SOON</span>
          </h1>

          <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-mono leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            The interactive 3-day timeline, stage schedules, 24-hour hackathon milestones, and arena slots are currently undergoing final calibration. The complete master timeline will be unlocked soon.
          </p>

          {/* 3 Locked Day Vault Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 text-left">
            {[
              {
                day: 'DAY 01',
                title: 'INAUGURATION & TECH QUESTS',
                desc: 'Opening ceremonies, keynote addresses, and opening rounds.',
                status: 'REVEALING SOON'
              },
              {
                day: 'DAY 02',
                title: '24H HACKATHON & LAN WARS',
                desc: 'Overnight building, code sprints, and esports playoffs.',
                status: 'REVEALING SOON'
              },
              {
                day: 'DAY 03',
                title: 'GRAND FINALE & CONCERT',
                desc: 'Project jury evaluations, bounty awards, and celebratory DJ concert.',
                status: 'REVEALING SOON'
              },
            ].map((item) => (
              <div key={item.day} className="p-4 bg-[#0d0d14] border border-[#2d2d3d] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-minecraft text-xs text-white font-bold">{item.day}</span>
                    <span className="text-[8px] font-minecraft text-amber-300 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" />
                      <span>LOCKED</span>
                    </span>
                  </div>
                  <h3 className="font-minecraft text-[10px] text-zinc-200 mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-[11px] font-mono text-zinc-400 mb-3 leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-[8.5px] font-minecraft text-emerald-400 uppercase tracking-tight pt-2 border-t border-white/5">
                  // {item.status}
                </span>
              </div>
            ))}
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

export default Schedule;
