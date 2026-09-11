import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UserPlus } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect if user has scrolled past top
      setScrolled(currentScrollY > 20);

      // Always show when near the very top
      if (currentScrollY <= 80) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN -> hide header
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Clases', path: '/clases' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Planes', path: '/#planes' },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    } else if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleEnrollClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLinkActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    if (path.startsWith('/#')) return location.hash === path.replace('/', '');
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full max-w-[94vw] md:max-w-fit pointer-events-auto flex flex-col items-center">
        
        {/* Floating Glass Pill Container */}
        <div
          className={`w-full rounded-full shadow-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-white/[0.12] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
              : 'bg-white/[0.06] backdrop-blur-xl border border-white/15'
          }`}
        >
          <div className="relative flex items-center justify-between w-full px-5 sm:px-7 py-2 sm:py-2.5">
            {/* Subtle top specular crystal line reflection */}
            <div className="absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* Monogram Logo on the left inside pill with generous breathing room */}
            <Link
              to="/"
              onClick={handleLogoClick}
              className="flex items-center group py-0.5 shrink-0 pl-1 pr-3 sm:pr-6 z-10 select-none cursor-pointer"
              aria-label="Ir al inicio de FB SEVEN"
            >
              <img
                src="/images/logo-f7-transparent.png"
                alt="FB SEVEN"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,242,254,0.3)] select-none pointer-events-none"
              />
            </Link>

            {/* Desktop Navigation Links with generous gaps */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10 xl:gap-12 ml-6 sm:ml-10 lg:ml-12 z-10">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className={`text-sm lg:text-base font-bold transition-colors tracking-wide relative py-1 group ${
                      active ? 'text-brand-neon' : 'text-slate-200 hover:text-brand-neon'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-neon shadow-[0_0_10px_rgba(0,242,254,0.8)] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button with clear margin */}
            <div className="hidden md:flex items-center z-10 pl-8 sm:pl-10 lg:pl-14">
              <Link
                to="/#contacto"
                onClick={handleEnrollClick}
                className="btn-tactile inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-neon hover:bg-white text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.45)] hover:shadow-[0_0_30px_rgba(0,242,254,0.8)] cursor-pointer group/cta"
              >
                <UserPlus className="w-4 h-4 text-black group-hover/cta:scale-110 transition-transform" />
                <span>Anotate</span>
              </Link>
            </div>

            {/* Mobile Actions: Hamburger Toggle */}
            <div className="flex md:hidden items-center ml-auto z-10">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="btn-tactile p-2 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Floating Glass Dropdown */}
        {mobileMenuOpen && (
          <div className="w-full md:hidden mt-2 rounded-3xl bg-black/80 backdrop-blur-2xl border border-white/15 shadow-2xl overflow-hidden">
            <div className="w-full p-5 space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isLinkActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                        active
                          ? 'bg-brand-neon/15 text-brand-neon'
                          : 'text-slate-200 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/#contacto"
                onClick={handleEnrollClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-neon text-black font-extrabold text-sm uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.4)]"
              >
                <UserPlus className="w-4 h-4 text-black" />
                <span>Anotate</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Navbar;
