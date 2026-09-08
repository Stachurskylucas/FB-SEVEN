import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export const IronNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'FILOSOFÍA', href: '#filosofia' },
    { name: 'SEDES', href: '#sedes' },
    { name: 'ESPACIOS', href: '#espacios' },
    { name: 'COACHES', href: '#coaches' },
    { name: 'PLANES', href: '#planes' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800/80 py-4' : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
    }`}>
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo on the left */}
          <a href="#inicio" className="flex items-center group">
            <img
              src="/images/logo.png"
              alt="FB SEVEN"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,242,254,0.35)]"
            />
          </a>

          {/* Center Navigation Links (IronX style with >>) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-neutral-300 hover:text-white transition-colors tracking-widest flex items-center gap-1 group py-1"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3 h-3 text-neutral-600 group-hover:text-brand-neon group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </nav>

          {/* Right Action Button (IronX style sharp border box) */}
          <div className="hidden sm:flex items-center">
            <a
              href="https://wa.me/5491144724002?text=%C2%A1Hola%20FB%20SEVEN!%20Quisiera%20recibir%20informaci%C3%B3n%20sobre%20las%20sedes%20y%20aranceles."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-none border border-neutral-700 hover:border-brand-neon bg-black/40 hover:bg-white text-white hover:text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-brand-neon transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-neutral-300 hover:text-brand-neon tracking-widest flex items-center justify-between py-1"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-800">
            <a
              href="https://wa.me/5491144724002"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 block text-center border border-brand-neon text-brand-neon font-bold text-xs uppercase tracking-widest hover:bg-brand-neon hover:text-black transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default IronNavbar;
