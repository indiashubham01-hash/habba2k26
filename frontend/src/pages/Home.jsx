import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight, Calendar, MapPin, Users, Cpu, Trophy, Zap, Code, Shield,
  Sparkles, Award, ArrowRight, CheckCircle2, HelpCircle, Send, ExternalLink,
  Terminal, Flame, Rocket, Star, Clock, Layers, Phone, Mail, Sword, Compass, Gem, Box, Lock
} from 'lucide-react';
import { eventsData, eventCategories, faqList, scheduleData } from '../data/events';
import MinecraftParticleBackground from '../components/MinecraftParticleBackground';
import AcharyaBigOEmblem3D from '../components/AcharyaBigOEmblem3D';
import TechHabbaMinecraftTitle from '../components/TechHabbaMinecraftTitle';

/**
 * Authentic Minecraft Experience (XP) Bar & Inventory Slot Countdown
 * - Perfectly responsive across phone view (320px+) to desktop
 */
const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 14, minutes: 22, seconds: 10 });

  useEffect(() => {
    // 12 November 2026
    const targetDate = new Date('2026-11-12T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Compute dynamic XP bar progress based on seconds in minute
  const xpPercent = Math.min(100, Math.max(6, ((60 - timeLeft.seconds) / 60) * 100));

  return (
    <div className="w-full max-w-xl mx-auto my-2.5 sm:my-5 px-2">
      {/* Minecraft Inventory Hotbar Slots for Countdown */}
      <div className="grid grid-cols-4 gap-1.5 min-[380px]:gap-2 sm:gap-4 mb-2">
        {[
          { label: 'DAYS', val: timeLeft.days, color: '#38bdf8', ore: 'DIAMOND' },
          { label: 'HOURS', val: timeLeft.hours, color: '#4ade80', ore: 'EMERALD' },
          { label: 'MINUTES', val: timeLeft.minutes, color: '#facc15', ore: 'GOLD' },
          { label: 'SECONDS', val: timeLeft.seconds, color: '#f87171', ore: 'REDSTONE' },
        ].map((item) => (
          <div
            key={item.label}
            className="minecraft-slot p-1.5 min-[380px]:p-2.5 sm:p-4 flex flex-col items-center justify-center relative group transition-transform hover:scale-105"
          >
            {/* Top slot highlight */}
            <div className="absolute top-1 left-1 right-1 h-[1px] bg-white/10 pointer-events-none" />
            
            <span
              className="font-minecraft text-base min-[360px]:text-lg min-[410px]:text-xl sm:text-3xl md:text-4xl font-black"
              style={{
                textShadow: `2px 2px 0 #101015, 0 0 10px ${item.color}40`,
                color: item.color,
              }}
            >
              {item.val.toString().padStart(2, '0')}
            </span>
            <span className="text-[7px] min-[360px]:text-[7.5px] min-[410px]:text-[8.5px] sm:text-[10px] font-minecraft tracking-tight sm:tracking-wider text-zinc-400 mt-1 uppercase whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Minecraft Experience (XP) Bar with Level 2.0 */}
      <div className="relative pt-0.5 sm:pt-1.5 pb-1 px-1">
        {/* XP Level Badge Centered */}
        <div className="flex justify-center items-center mb-1">
          <span className="minecraft-xp-level text-xs sm:text-sm font-bold inline-flex items-baseline">
            <span>2</span>
            <span className="-mx-0.5 text-[0.85em]">.</span>
            <span>0</span>
          </span>
        </div>

        {/* Authentic Segmented Minecraft XP Progress Bar */}
        <div className="w-full h-2 sm:h-2.5 bg-[#111115] border-t-2 border-l-2 border-[#000000] border-b-2 border-r-2 border-[#383842] p-[1px] relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 transition-all duration-500"
            style={{ width: `${xpPercent}%` }}
          />
          {/* Grid lines overlay for Minecraft XP slot divisions */}
          <div className="absolute inset-0 flex justify-between pointer-events-none opacity-40">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-black/80" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('ALL');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });

  const featuredEvents = eventsData.filter(e => e.featured).slice(0, 4);
  const previewEvents = activeTab === 'ALL'
    ? eventsData.slice(0, 6)
    : eventsData.filter(e => e.category === activeTab).slice(0, 6);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setContactSubmitted(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-black bg-workbench-gradient text-white overflow-x-hidden selection:bg-[#38bdf8] selection:text-black">
      {/* 3D Voxel Blocks & XP Orbs Canvas System */}
      <MinecraftParticleBackground />

      {/* ==================================================
          1. HERO SECTION (Authentic Minecraft Fest Arena)
          ================================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-24 pb-8 sm:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden">

        {/* Soft Monochromatic White Ambient Light (Zero Red) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[650px] h-[300px] sm:h-[650px] bg-white/[0.03] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">

          {/* 3D Collaborative Emblem: ACHARYA ✕ THE BIG O (Pure white logo, no box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center mb-1.5 sm:mb-3"
          >
            <AcharyaBigOEmblem3D />
          </motion.div>

          {/* Minecraft 3D Stone Title + Bouncing Yellow Splash Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-1.5 sm:mb-3"
          >
            <TechHabbaMinecraftTitle />
          </motion.div>

          {/* Minecraft Server / Fest Tagline (Compact & clean) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2.5 sm:mb-3.5 px-2"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 bg-zinc-950/80 border border-zinc-800 shadow-sm font-minecraft text-[8.5px] min-[380px]:text-[9.5px] sm:text-xs uppercase text-zinc-300 select-none">
              <span className="w-1.5 h-1.5 bg-emerald-400 inline-block flex-shrink-0" />
              <span className="text-zinc-100 font-bold">WHERE TECH MEETS TALENT</span>
              <span className="text-zinc-600">//</span>
              <span className="text-sky-400 font-bold">13 QUESTS</span>
            </div>
          </motion.div>

          {/* Minecraft Theme Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-400 font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-4 sm:mb-6 leading-relaxed font-normal px-3"
          >
            The national collegiate technical festival in high-res voxel grandeur. Gather your squad, mine breakthrough solutions, and clash for ₹1,50,000+ in bounties.
          </motion.p>

          {/* Minecraft Action Buttons: Registrations Revealing Soon + Explore Quests */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6 w-full max-w-[320px] sm:max-w-none mx-auto"
          >
            <div
              className="btn-minecraft-emerald w-full sm:w-auto text-center px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-center gap-2 text-[10px] min-[380px]:text-[11px] sm:text-xs select-none shadow-md cursor-default"
            >
              <Lock className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span>REGISTRATIONS // REVEALING SOON</span>
            </div>
            <Link
              to="/events"
              className="btn-minecraft-diamond w-full sm:w-auto text-center px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-center gap-2 text-[10px] min-[380px]:text-[11px] sm:text-xs"
            >
              <span className="text-xs">⚔</span>
              <span>EXPLORE QUESTS [13 EVENTS]</span>
            </Link>
          </motion.div>

          {/* ==================================================
              2. MINECRAFT COUNTDOWN & XP PROGRESS BAR
              ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-0"
          >
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#14141a] border border-[#383848] text-[8.5px] min-[380px]:text-[9.5px] sm:text-[10px] font-minecraft font-bold tracking-wider text-emerald-400 uppercase mb-1.5 shadow-sm">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>SERVER LAUNCH & FEST COUNTDOWN</span>
            </div>
            <Countdown />
          </motion.div>

        </div>
      </section>

      {/* ==================================================
          3. ABOUT TECH HABBA - 5 MINECRAFT ORE FEATURE TRACKS
          ================================================== */}
      <section id="about" className="py-16 sm:py-24 relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-minecraft text-[10px] sm:text-xs text-[#fbee37] tracking-widest uppercase mb-2 block">
              [ ADVANCEMENT: DISCOVER THE REALM ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mb-4 sm:mb-6 font-cyber">
              ABOUT <span className="neon-text">TECH HABBA 2.0</span>
            </h2>
            <p className="text-zinc-300 text-sm sm:text-lg leading-relaxed font-mono">
              "A collegiate gathering where coders, designers, gamers, and strategists unite in a Minecraft-inspired battlefield to engineer legendary software and conquer technical quests."
            </p>
          </div>

          {/* 5 Core Feature Cards Styled as Minecraft Ores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">

            {/* Card 1: Redstone Technology */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="minecraft-slot p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none border-t-4 border-t-[#ff2a44] hover:shadow-[0_0_30px_rgba(255,42,68,0.35)]"
            >
              <Link to="/events?category=TECHNICAL" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2a1115] border-2 border-[#ff2a44] flex items-center justify-center text-[#ff2a44] mb-3 sm:mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(255,42,68,0.4)] transition-all">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-minecraft text-[#ff2a44] uppercase tracking-wider mb-1">
                    REDSTONE CIRCUIT
                  </div>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 tracking-wide">
                    TECHNOLOGY
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    Deep-dive into Agentic AI, Autonomous Redstone-like Logic, Cyber Defense, and Protocols.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-minecraft text-[#ff2a44]">
                  <span>01 // TECH</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 2: Diamond Innovation */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="minecraft-slot p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none border-t-4 border-t-[#4dedf4] hover:shadow-[0_0_30px_rgba(77,237,244,0.35)]"
            >
              <Link to="/events?category=HACKATHON" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#092228] border-2 border-[#4dedf4] flex items-center justify-center text-[#4dedf4] mb-3 sm:mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(77,237,244,0.4)] transition-all">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-minecraft text-[#4dedf4] uppercase tracking-wider mb-1">
                    DIAMOND TIER
                  </div>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 tracking-wide">
                    INNOVATION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    Forge 24-hour prototypes from scratch and present high-caliber tech solutions to judges.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-minecraft text-[#4dedf4]">
                  <span>02 // INNV</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 3: Emerald Competition */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="minecraft-slot p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none border-t-4 border-t-[#17dd62] hover:shadow-[0_0_30px_rgba(23,221,98,0.35)]"
            >
              <Link to="/events?category=CODING" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0d2817] border-2 border-[#17dd62] flex items-center justify-center text-[#17dd62] mb-3 sm:mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(23,221,98,0.4)] transition-all">
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-minecraft text-[#17dd62] uppercase tracking-wider mb-1">
                    EMERALD LOOT
                  </div>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 tracking-wide">
                    COMPETITION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    Battle across algorithmic CP, CTF cyber puzzles, and intense Valorant LAN tournaments.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-minecraft text-[#17dd62]">
                  <span>03 // COMP</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 4: Gold Creativity */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="minecraft-slot p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none border-t-4 border-t-[#fbee37] hover:shadow-[0_0_30px_rgba(251,238,55,0.35)]"
            >
              <Link to="/events?category=CREATIVE" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2d2a0c] border-2 border-[#fbee37] flex items-center justify-center text-[#fbee37] mb-3 sm:mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(251,238,55,0.4)] transition-all">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-minecraft text-[#fbee37] uppercase tracking-wider mb-1">
                    GOLD REPERTOIRE
                  </div>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 tracking-wide">
                    CREATIVITY
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    Design modern UI identities, debate tech ethics, and decipher cryptic campus treasure hunts.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-minecraft text-[#fbee37]">
                  <span>04 // CREA</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Card 5: Obsidian Collaboration */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="minecraft-slot p-4 sm:p-6 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 select-none border-t-4 border-t-[#9c27b0] hover:shadow-[0_0_30px_rgba(156,39,176,0.35)]"
            >
              <Link to="/events?category=FUN%20%2F%20MANAGEMENT" className="flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#210e2b] border-2 border-[#9c27b0] flex items-center justify-center text-[#c084fc] mb-3 sm:mb-4 group-hover:scale-110 shadow-[0_0_15px_rgba(156,39,176,0.4)] transition-all">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-minecraft text-[#c084fc] uppercase tracking-wider mb-1">
                    NETHER GUILD
                  </div>
                  <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2 tracking-wide">
                    COLLABORATION
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                    Forge multi-college guilds, connect with technology leaders, and build lifelong networks.
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-minecraft text-[#c084fc]">
                  <span>05 // COLL</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ==================================================
          4. EVENT CATEGORIES BROWSE
          ================================================== */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
            <div>
              <span className="font-minecraft text-[10px] sm:text-xs text-[#55FF55] tracking-widest uppercase mb-2 block">
                [ QUEST SELECTOR ]
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white font-cyber">
                EVENT <span className="neon-text">CATEGORIES</span>
              </h2>
            </div>
            <Link to="/events" className="text-sm font-semibold text-white hover:underline flex items-center gap-1 mt-3 md:mt-0 font-minecraft text-[10px] sm:text-xs text-[#4dedf4]">
              <span>View All 13 Events in Catalog</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { name: 'CODING', icon: Code, count: 'CP', desc: 'Speed coding & Algorithms', color: '#17dd62' },
              { name: 'HACKATHON', icon: Terminal, count: '24 Hours', desc: 'The Big Hack Flagship', color: '#4dedf4' },
              { name: 'TECHNICAL', icon: Cpu, count: 'CTF, AI', desc: 'Agentic AI & Cyber Sec', color: '#ff2a44' },
              { name: 'GAMING', icon: Flame, count: 'Valorant', desc: 'eSports LAN Tournaments', color: '#fbee37' },
              { name: 'QUIZ', icon: HelpCircle, count: 'IT Quiz', desc: 'Tech Intellect Battle', color: '#55ff55' },
              { name: 'CREATIVE', icon: Sparkles, count: 'UI Design', desc: 'UI Design & Pitching', color: '#c084fc' },
              { name: 'FUN / MANAGEMENT', icon: Trophy, count: 'Quests', desc: 'Campus Quest & Strategy', color: '#fb923c' },
              { name: 'WORKSHOPS', icon: Rocket, count: 'Masterclass', desc: 'Industry Led Hands-on', color: '#38bdf8' },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.name}
                  onClick={() => navigate(`/events?category=${cat.name === 'WORKSHOPS' ? 'TECHNICAL' : cat.name}`)}
                  className="minecraft-slot p-3.5 sm:p-5 cursor-pointer transition-all duration-300 group hover:scale-[1.03] active:scale-95"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 mb-2 sm:mb-3 transition-transform group-hover:scale-110" style={{ color: cat.color }} />
                  <h4 className="font-cyber font-bold text-xs sm:text-sm text-white mb-1 line-clamp-1">{cat.name}</h4>
                  <p className="text-[10px] sm:text-[11px] text-zinc-400 line-clamp-1 font-mono">{cat.desc}</p>
                  <span className="inline-block mt-2 sm:mt-3 text-[8.5px] sm:text-[9px] font-minecraft text-white font-bold px-1.5 sm:px-2 py-0.5 bg-black/60 border border-white/20">
                    [{cat.count}]
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          5. FEATURED EVENTS SECTION
          ================================================== */}
      <section className="py-16 sm:py-20 relative z-10 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="font-minecraft text-[10px] sm:text-xs text-[#4dedf4] tracking-widest uppercase mb-2 block">
              [ HIGH-TIER BOUNTIES ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4 font-cyber">
              FEATURED <span className="neon-text">FLAGSHIPS</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">
              The grandest challenges offering massive prize pools, industry recognition, and maximum XP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="minecraft-slot overflow-hidden flex flex-col group transition-all duration-300"
              >
                {/* Poster */}
                <div className="relative h-40 sm:h-44 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/50 to-transparent" />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 text-[8.5px] sm:text-[9px] font-minecraft bg-black text-[#55FF55] border border-[#55FF55]/50">
                      [{event.category}]
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                    <span className="font-minecraft text-[#fbee37] text-[10px] sm:text-[11px] font-bold flex items-center gap-1">
                      <Trophy className="w-3.5 h-3.5 text-[#fbee37]" />
                      {event.prizePool.split('+')[0]}
                    </span>
                    <span className="text-[10px] text-zinc-300 font-mono bg-black/80 px-2 py-0.5 border border-white/20">
                      Fee: ₹{event.fee}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-cyber font-bold text-sm sm:text-base text-white group-hover:text-[#4dedf4] transition-colors line-clamp-1 mb-1.5">
                      {event.name}
                    </h3>
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-3.5 leading-relaxed font-mono">
                      {event.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-zinc-300 mb-4 sm:mb-5 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                        <span className="truncate">{event.date} • {event.time.split(' - ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-zinc-400 flex-shrink-0" />
                        <span>{event.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                    <Link
                      to={`/events/${event.id}`}
                      className="btn-minecraft text-center !py-2 !px-2 text-[10px]"
                    >
                      RULES
                    </Link>
                    <Link
                      to={`/register?event=${event.id}`}
                      className="btn-minecraft-emerald text-center !py-2 !px-2 text-[10px]"
                    >
                      REGISTER
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          6. ALL EVENTS PREVIEW & TABS
          ================================================== */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <span className="font-minecraft text-[10px] sm:text-xs text-[#55FF55] tracking-widest uppercase mb-2 block">
                [ COMPLETE MISSION LOG ]
              </span>
              <h2 className="text-2xl sm:text-5xl font-black text-white font-cyber">
                ALL <span className="neon-text">13 EVENTS</span>
              </h2>
            </div>

            {/* Category pills (Horizontally scrollable on phones without breaking) */}
            <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4 md:mt-0">
              {['ALL', 'TECHNICAL', 'CODING', 'GAMING', 'CREATIVE'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-2.5 sm:px-3 py-1.5 text-[9px] min-[380px]:text-[10px] font-minecraft uppercase transition-all ${
                    activeTab === cat
                      ? 'bg-[#17dd62] text-[#032b10] font-bold shadow-[0_0_15px_#17dd62]'
                      : 'bg-[#14141a] text-zinc-400 hover:text-white border border-[#32323f]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-8 sm:mb-10">
            {previewEvents.map((event) => (
              <div
                key={event.id}
                className="minecraft-slot p-4 sm:p-5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <span className="text-[8.5px] sm:text-[9px] font-minecraft px-2 py-0.5 bg-black/70 text-white border border-white/20">
                      [{event.category}]
                    </span>
                    <span className="text-[11px] sm:text-xs font-minecraft text-[#fbee37]">
                      Prize: {event.prizePool.split('+')[0]}
                    </span>
                  </div>

                  <h3 className="font-cyber font-bold text-sm sm:text-base text-white group-hover:text-[#4dedf4] transition-colors mb-1.5">
                    {event.name}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 mb-3 leading-relaxed font-mono">
                    {event.description}
                  </p>

                  <div className="space-y-1 text-xs text-zinc-400 font-mono mb-3.5">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-white/10">
                  <span className="text-xs font-bold text-white font-mono">₹{event.fee} / team</span>
                  <div className="flex items-center gap-2">
                    <Link to={`/events/${event.id}`} className="text-xs font-semibold text-zinc-300 hover:text-white px-2 py-1 font-mono border border-white/10 hover:border-white/30">
                      Rules
                    </Link>
                    <span className="px-2.5 py-1 bg-[#14141c] border border-amber-400/40 text-amber-300 font-minecraft text-[8px] sm:text-[9px] flex items-center gap-1 select-none">
                      <Lock className="w-2.5 h-2.5" />
                      <span>REVEALING SOON</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events" className="btn-minecraft text-[10px] sm:text-xs inline-flex items-center justify-center gap-2 px-5 py-3 w-full sm:w-auto">
              <span>EXPLORE ALL 13 EVENTS IN FULL DETAIL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ==================================================
          7. WHY PARTICIPATE SECTION
          ================================================== */}
      <section className="py-16 sm:py-20 relative z-10 bg-black/80 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-minecraft text-[10px] sm:text-xs text-[#fbee37] tracking-widest uppercase mb-2 block">
              [ ACHIEVEMENTS & REWARDS ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4 font-cyber">
              WHY <span className="neon-text">PARTICIPATE?</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">
              Level up your developer skill tree, claim cash bounties, and showcase your prowess on a national stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#fbee37]">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#fbee37] mb-3 sm:mb-4" />
              <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">₹1,50,000+ Prize Pool</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Direct cash bounties, trophies, mechanical keyboards, gaming gear, and cloud credits for winners.
              </p>
            </div>

            <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#17dd62]">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#17dd62] mb-3 sm:mb-4" />
              <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">National Verification</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Tamper-proof, QR-verifiable digital certificates endorsed by Acharya Institute of Technology.
              </p>
            </div>

            <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#4dedf4]">
              <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#4dedf4] mb-3 sm:mb-4" />
              <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">VC & Guild Mentorship</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Pitch your solutions directly to seasoned startup founders, angel investors, and tech leaders.
              </p>
            </div>

            <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#c084fc]">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#c084fc] mb-3 sm:mb-4" />
              <h3 className="font-cyber font-bold text-base sm:text-lg text-white mb-1.5 sm:mb-2">3D Voxel Arena</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                Experience high-octane LAN battles, pro shoutcasting, voxel aesthetics, and celebratory DJ concert nights.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          8. SCHEDULE & TIMELINE (ENCRYPTED // REVEALING SOON)
          ================================================== */}
      <section id="schedule" className="py-16 sm:py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="minecraft-slot p-6 sm:p-12 relative overflow-hidden text-center border-2 border-[#3b3b4f]">
            {/* Top Vault Lock Accent */}
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-5 bg-[#14141c] border-2 border-amber-400/60 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.25)]">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300 animate-pulse" />
            </div>

            <span className="font-minecraft text-[8.5px] sm:text-[10px] text-amber-300 tracking-widest uppercase mb-2 inline-block">
              [ REALM DISPATCH // MASTER TIMELINE ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white font-cyber mb-3 sm:mb-4">
              TIMELINE & <span className="neon-text text-amber-300">SCHEDULE</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-mono">
              The official 3-day quest schedule, stage timelines, 24-hour hackathon milestones, and arena slots are currently undergoing final calibration. The full timetable will be revealed soon.
            </p>

            {/* 3 Locked Day Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-6 sm:mb-8 text-left">
              {[
                { day: 'DAY 01', title: 'INAUGURATION & KEYNOTE QUESTS', status: 'REVEALING SOON' },
                { day: 'DAY 02', title: '24H HACKATHON & ARENA WARS', status: 'REVEALING SOON' },
                { day: 'DAY 03', title: 'GRAND FINALE & AWARDS CEREMONY', status: 'REVEALING SOON' },
              ].map((item) => (
                <div key={item.day} className="p-3.5 sm:p-4 bg-[#0d0d14] border border-[#2d2d3d] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-minecraft text-xs text-white font-bold">{item.day}</span>
                    <span className="text-[8px] font-minecraft text-amber-300 flex items-center gap-1">
                      <Lock className="w-2.5 h-2.5" />
                      <span>LOCKED</span>
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-zinc-400 mb-2 leading-snug">{item.title}</p>
                  <span className="text-[8.5px] font-minecraft text-emerald-400 uppercase tracking-tight">
                    // {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 border border-amber-400/40 text-amber-300 font-minecraft text-[9px] sm:text-xs select-none">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
              <span>MASTER TIMELINE: REVEALING SOON</span>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          9. PRIZES / HIGHLIGHTS SECTION
          ================================================== */}
      <section className="py-16 sm:py-20 relative z-10 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="minecraft-slot p-5 sm:p-12 relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center relative z-10">
              <div>
                <span className="font-minecraft text-[10px] sm:text-xs text-[#fbee37] tracking-widest uppercase mb-2 block">
                  [ REALM STATISTICS ]
                </span>
                <h2 className="text-2xl sm:text-5xl font-black text-white mb-4 sm:mb-6 font-cyber">
                  FEST METRICS & <span className="neon-text">PRIZES</span>
                </h2>
                <p className="text-zinc-300 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed font-mono">
                  Tech Habba 2.0 stands as one of the largest collegiate technical symposiums in South India, hosting students from premier universities and technology institutes.
                </p>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="p-3 sm:p-4 bg-[#0a0a0e] border border-[#ff2a44]/40">
                    <span className="text-xl min-[380px]:text-2xl sm:text-3xl font-black font-minecraft text-[#ff2a44] block">₹1,50K+</span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase font-mono">Cash Bounty Pool</span>
                  </div>
                  <div className="p-3 sm:p-4 bg-[#0a0a0e] border border-[#4dedf4]/40">
                    <span className="text-xl min-[380px]:text-2xl sm:text-3xl font-black font-minecraft text-[#4dedf4] block">5,000+</span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase font-mono">Guild Members</span>
                  </div>
                  <div className="p-3 sm:p-4 bg-[#0a0a0e] border border-[#17dd62]/40">
                    <span className="text-xl min-[380px]:text-2xl sm:text-3xl font-black font-minecraft text-[#17dd62] block">50+</span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase font-mono">Colleges & Clans</span>
                  </div>
                  <div className="p-3 sm:p-4 bg-[#0a0a0e] border border-[#fbee37]/40">
                    <span className="text-xl min-[380px]:text-2xl sm:text-3xl font-black font-minecraft text-[#fbee37] block">13</span>
                    <span className="text-[9px] sm:text-[10px] text-zinc-400 uppercase font-mono">Quest Tracks</span>
                  </div>
                </div>
              </div>

              {/* Highlight Perks */}
              <div className="space-y-3 sm:space-y-4">
                <div className="p-3.5 sm:p-4 bg-[#0c0c10] border border-white/10 flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16161f] border border-[#ff2a44] text-[#ff2a44] flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">24-Hour Hackathon Arena</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">High-speed gigabit LAN, dedicated resting pods, hot food & caffeine supplies.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-[#0c0c10] border border-white/10 flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16161f] border border-[#4dedf4] text-[#4dedf4] flex items-center justify-center flex-shrink-0">
                    <Flame className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Pro LAN Gaming Arena</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">Low-ping private server setup, 165Hz gaming rigs, RTX GPUs, and live stage caster streaming.</p>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-[#0c0c10] border border-white/10 flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#16161f] border border-[#17dd62] text-[#17dd62] flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs sm:text-sm mb-0.5 sm:mb-1">Accommodation for Outstation Teams</h4>
                    <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">Secure on-campus hostel stay with meals available at ₹450 per person per day.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          10. REGISTRATION CTA SECTION (REVEALING SOON)
          ================================================== */}
      <section className="py-16 sm:py-24 relative z-10 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="minecraft-slot p-6 sm:p-14 relative border-2 border-amber-400/40 shadow-[0_0_50px_rgba(245,158,11,0.12)]">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#14141c] border-2 border-amber-400/60 text-amber-300 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_30px_rgba(245,158,11,0.25)]">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" />
            </div>

            <span className="font-minecraft text-[8.5px] sm:text-[10px] text-amber-300 tracking-widest uppercase mb-2 inline-block">
              [ PORTAL STATUS: CALIBRATING ]
            </span>

            <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4 font-cyber">
              REGISTRATION PORTAL // <span className="neon-text text-amber-300">REVEALING SOON</span>
            </h2>

            <p className="text-zinc-300 text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-mono">
              The portal gates for Tech Habba 2.0 registrations, team entries, and individual quest slots are currently locked in preparation for deployment. Official entry will open shortly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
              <div className="btn-minecraft-emerald opacity-95 cursor-default !py-3.5 sm:!py-4 !px-6 sm:!px-8 text-[10px] sm:text-xs font-minecraft w-full sm:w-auto flex items-center justify-center gap-2 select-none shadow-md">
                <Lock className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                <span>REGISTRATIONS REVEALING SOON</span>
              </div>
              <Link to="/events" className="btn-minecraft-diamond !py-3.5 sm:!py-4 !px-6 sm:!px-8 text-[10px] sm:text-xs font-minecraft w-full sm:w-auto flex items-center justify-center gap-2">
                <span>⚔</span>
                <span>EXPLORE ALL 13 QUESTS</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================
          11. FAQ SECTION
          ================================================== */}
      <section id="faq" className="py-16 sm:py-20 relative z-10 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-14">
            <span className="font-minecraft text-[10px] sm:text-xs text-[#fbee37] tracking-widest uppercase mb-2 block">
              [ KNOWLEDGE BASE ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4 font-cyber">
              FREQUENTLY ASKED <span className="neon-text">QUESTIONS</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">
              Everything you need to know about eligibility, registration, team sizes, rules, and accommodation.
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className={`minecraft-slot transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-[#55FF55] bg-[#0d0d12]' : ''
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between gap-3"
                  >
                    <span className="font-semibold text-xs sm:text-base text-zinc-200 flex items-center gap-2 sm:gap-3">
                      <span className="text-[#55FF55] font-minecraft text-[10px] sm:text-xs flex-shrink-0">Q{index + 1}.</span>
                      <span>{faq.q}</span>
                    </span>
                    <span className={`text-white text-lg sm:text-xl font-mono transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 text-[#55FF55]' : ''}`}>
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/10 font-mono"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          12. CONTACT SECTION
          ================================================== */}
      <section id="contact" className="py-16 sm:py-20 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-minecraft text-[10px] sm:text-xs text-[#4dedf4] tracking-widest uppercase mb-2 block">
              [ TRANSMISSION LOG ]
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mb-3 sm:mb-4 font-cyber">
              CONTACT <span className="neon-text">ORGANIZERS</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">
              Reach out to our faculty heads and student coordinators for queries, sponsorship, or assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">

            {/* Left Info: Coordinators & Venue */}
            <div className="space-y-4 sm:space-y-6">

              {/* Faculty Coordinator Card */}
              <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#4dedf4]">
                <span className="text-[9px] sm:text-[10px] font-minecraft text-[#4dedf4] font-bold uppercase block mb-1">
                  [ CHIEF FACULTY CONVENER ]
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Dr. Rajagopal K. & Prof. Ananya Sharma</h3>
                <p className="text-xs text-zinc-400 mb-3 font-mono">Department of Computer Science & Engineering, AIT</p>
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs text-zinc-300 font-mono">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#4dedf4] flex-shrink-0" /> +91 98765 43210</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-[#4dedf4] flex-shrink-0" /> convener@techhabba2k26.in</span>
                </div>
              </div>

              {/* Student Coordinators Card */}
              <div className="minecraft-slot p-5 sm:p-6 border-l-4 border-l-[#22c55e]">
                <span className="text-[9px] sm:text-[10px] font-minecraft text-emerald-400 font-bold uppercase block mb-1">
                  [ STUDENT COORDINATORS & EVENT HEADS ]
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-3">
                  <div className="p-3 bg-[#0d0d14] border border-white/10">
                    <h4 className="font-bold text-white text-xs sm:text-sm">Aditya</h4>
                    <span className="text-[10px] text-amber-300 font-minecraft block mb-1">Lead Student Coordinator</span>
                    <p className="text-[10px] text-zinc-400 font-mono mb-1">CP & The Big Hack Head</p>
                    <p className="text-xs text-zinc-200 font-mono flex items-center gap-1.5"><Phone className="w-3 h-3 text-emerald-400" /> +91 777981810</p>
                    <p className="text-[10.5px] text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5"><Mail className="w-3 h-3 text-sky-400" /> adityal2.24.beis@acharya.ac.in</p>
                  </div>
                  <div className="p-3 bg-[#0d0d14] border border-white/10">
                    <h4 className="font-bold text-white text-xs sm:text-sm">Shubham Kumar</h4>
                    <span className="text-[10px] text-amber-300 font-minecraft block mb-1">Lead Student Coordinator</span>
                    <p className="text-[10px] text-zinc-400 font-mono mb-1">Workshop & The Big Hack Head</p>
                    <p className="text-xs text-zinc-200 font-mono flex items-center gap-1.5"><Phone className="w-3 h-3 text-emerald-400" /> +91 9334590992</p>
                    <p className="text-[10.5px] text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5"><Mail className="w-3 h-3 text-sky-400" /> shubhmas.24.beis@acharya.ac.in</p>
                  </div>
                  <div className="p-3 bg-[#0d0d14] border border-white/10">
                    <h4 className="font-bold text-white text-xs sm:text-sm">Dhanush</h4>
                    <span className="text-[10px] text-sky-400 font-minecraft block mb-1">Event Lead</span>
                    <p className="text-[10px] text-zinc-400 font-mono mb-1">Chess Championship</p>
                    <p className="text-xs text-zinc-200 font-mono flex items-center gap-1.5"><Phone className="w-3 h-3 text-emerald-400" /> +91 9334590992</p>
                    <p className="text-[10.5px] text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5"><Mail className="w-3 h-3 text-sky-400" /> chess@techhabba2k26.in</p>
                  </div>
                  <div className="p-3 bg-[#0d0d14] border border-white/10">
                    <h4 className="font-bold text-white text-xs sm:text-sm">Abhay</h4>
                    <span className="text-[10px] text-sky-400 font-minecraft block mb-1">Event Lead</span>
                    <p className="text-[10px] text-zinc-400 font-mono mb-1">Capture The Flag (CTF)</p>
                    <p className="text-xs text-zinc-200 font-mono flex items-center gap-1.5"><Phone className="w-3 h-3 text-emerald-400" /> +91 777981810</p>
                    <p className="text-[10.5px] text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5"><Mail className="w-3 h-3 text-sky-400" /> ctf@techhabba2k26.in</p>
                  </div>
                </div>
              </div>

              {/* Map & Address Simulation */}
              <div className="minecraft-slot p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#ff2a44] flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs">Acharya Institute of Technology, Soladevanahalli, Hesaraghatta Main Rd, Bengaluru, Karnataka 560107</span>
                </div>

                {/* Visual Map Mock */}
                <div className="w-full h-32 sm:h-36 bg-[#0a0a0e] border border-white/15 relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[radial-gradient(#4dedf4_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  <div className="relative z-10 text-center px-2">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff2a44] mx-auto animate-bounce" />
                    <span className="text-[10px] sm:text-xs font-minecraft font-bold text-white block mt-1">ACHARYA REALM • 120 ACRES</span>
                    <a
                      href="https://maps.google.com/?q=Acharya+Institute+of+Technology+Bengaluru"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-minecraft text-[#4dedf4] hover:underline mt-1 font-bold"
                    >
                      <span>[ OPEN MAP COORDINATES ]</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="minecraft-slot p-5 sm:p-8">
              <h3 className="font-cyber font-bold text-lg sm:text-xl text-white mb-1.5 sm:mb-2">Send us a Message</h3>
              <p className="text-xs text-zinc-400 mb-5 sm:mb-6 font-mono">Have specific queries about events, sponsors or accommodations? Transmit a message.</p>

              {contactSubmitted ? (
                <div className="p-5 sm:p-6 bg-[#0a2012] border-2 border-[#17dd62] text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#17dd62] mx-auto" />
                  <h4 className="font-minecraft text-white text-xs sm:text-sm">[ TRANSMISSION DELIVERED ]</h4>
                  <p className="text-xs text-zinc-300 font-mono">Our student coordinators will reply via email/phone shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3.5 sm:space-y-4 font-mono">
                  <div>
                    <label className="text-xs text-zinc-300 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Steve / Alex"
                      className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0a0e] border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4dedf4]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="player@realm.com"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0a0e] border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4dedf4]"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-300 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0a0e] border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4dedf4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-300 block mb-1">Your Message / Query *</label>
                    <textarea
                      required
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Describe your query regarding rules, events or team slots..."
                      className="w-full px-3.5 sm:px-4 py-2.5 bg-[#0a0a0e] border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#4dedf4]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-minecraft-emerald w-full py-3 sm:py-3.5 text-[10px] sm:text-xs font-minecraft tracking-wider flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
