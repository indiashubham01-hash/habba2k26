import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Shield, User, LogOut, Sparkles, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import FloatingLogo from './FloatingLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'SCHEDULE', path: '/schedule' },
    { name: 'ACCOMMODATION', path: '/accommodation' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(path.substring(2));
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(path.substring(2));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with 3D Monochromatic emblem */}
          <Link to="/" className="flex items-center space-x-3 group">
            <FloatingLogo size={36} />
            <div className="flex flex-col">
              <span className="font-cyber font-black tracking-wider text-xl text-white flex items-center gap-1.5">
                <span className="text-white text-3d-subtle">TECH HABBA</span> <span className="text-black font-sans text-xs px-1.5 py-0.5 rounded bg-white font-bold">2K26</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-400 font-medium">
                Acharya Institute of Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-xs uppercase tracking-widest font-bold transition-all relative py-1 hover:text-white ${
                    isActive ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_#ffffff]"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAdmin && (
              <Link
                to="/admin"
                className="px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider bg-zinc-900 text-zinc-200 border border-white/30 hover:bg-zinc-800 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,255,255,0.15)]"
              >
                <Shield className="w-3.5 h-3.5 text-white" />
                Admin Hub
              </Link>
            )}

            {user ? (
              <div className="flex items-center space-x-2">
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-900 text-white border border-white/20 hover:border-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <User className="w-3.5 h-3.5 text-zinc-300" />
                  <span>{user.name.split(' ')[0]}</span>
                </Link>
                <button
                  onClick={logout}
                  title="Logout"
                  className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white px-3 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="btn-primary !py-2 !px-5 text-xs shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  REGISTER NOW
                </Link>
              </div>
            )}
          </div>

          {/* Mobile hamburger menu */}
          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/register"
              className="md:hidden btn-minecraft-emerald !py-1 !px-2.5 text-[9px] font-minecraft inline-block"
            >
              REGISTER
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 sm:p-2 bg-[#14141a] border-2 border-[#383848] text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-out Navigation (Minecraft Pocket Edition GUI Style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-b-4 border-[#32323f] px-5 py-5 shadow-[0_15px_30px_rgba(0,0,0,0.95)]"
          >
            <div className="flex flex-col space-y-3">
              <div className="text-[10px] font-minecraft text-[#fbee37] pb-1 border-b border-white/10 uppercase">
                [ REALM NAVIGATION MENU ]
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-xs uppercase tracking-widest font-minecraft text-zinc-200 hover:text-[#4dedf4] transition-colors py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#55FF55] inline-block" />
                    <span>{link.name}</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">/&gt;</span>
                </Link>
              ))}

              <div className="pt-3 flex flex-col gap-2.5">
                {user ? (
                  <>
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="btn-minecraft w-full py-2.5 text-center text-xs flex items-center justify-center gap-2 font-minecraft"
                    >
                      <User className="w-3.5 h-3.5 text-zinc-300" />
                      <span>Dashboard ({user.name.split(' ')[0]})</span>
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        onClick={() => setIsOpen(false)}
                        className="btn-minecraft w-full py-2.5 text-center text-xs flex items-center justify-center gap-2 font-minecraft text-[#fbee37]"
                      >
                        <Shield className="w-3.5 h-3.5 text-[#fbee37]" />
                        <span>Admin Realm</span>
                      </Link>
                    )}
                    <button
                      onClick={() => { logout(); setIsOpen(false); }}
                      className="w-full py-2 text-center text-[10px] font-minecraft text-zinc-400 bg-[#121218] border border-white/10 hover:text-white"
                    >
                      [ DISCONNECT / LOGOUT ]
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="btn-minecraft-emerald w-full text-center text-[10px] min-[380px]:text-xs py-3 font-minecraft flex items-center justify-center gap-2"
                    >
                      <span>ENTER THE REALM [REGISTER]</span>
                    </Link>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="btn-minecraft w-full text-center text-[10px] min-[380px]:text-xs py-2.5 font-minecraft"
                    >
                      SIGN IN / LOGIN
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
