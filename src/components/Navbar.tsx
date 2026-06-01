import type React from "react";
import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, CalendarDays } from "lucide-react";
import AudioPlayer from "./AudioPlayer";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Jardín", href: "#nosotros" },
    { name: "Galería", href: "#galeria" },
    { name: "Menú", href: "#menu" },
    { name: "Eventos", href: "#eventos" },
    { name: "Ubicación", href: "#contacto" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setClicked(false);
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-1.5 sm:py-2 bg-brand-cream/70 backdrop-blur-xl border-b border-brand-wood/20 shadow-lg"
          : "py-2.5 sm:py-3 bg-brand-charcoal/20 backdrop-blur-md border-b border-white/10 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="flex items-center shrink-0 min-w-0 max-w-[62%] sm:max-w-[420px] group transition-transform duration-300 hover:opacity-90"
            id="brand-logo"
          >
            <BrandLogo
              variant="nav"
              className={
                scrolled
                  ? "drop-shadow-sm"
                  : "brightness-110 contrast-105 drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
              }
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {menuLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`font-sans text-sm tracking-wide transition-colors duration-200 relative py-1 group ${
                    scrolled
                      ? "text-brand-charcoal/80 hover:text-brand-olive"
                      : "text-brand-cream/90 hover:text-brand-cream"
                  }`}
                  id={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-brand-olive transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-brand-wood/30">
              <AudioPlayer />
              <a
                href="#contacto"
                onClick={(e) => handleScrollTo(e, "#contacto")}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-medium text-brand-cream bg-brand-olive hover:bg-brand-olive-dark rounded-full transition-all duration-300 shadow-sm"
                id="navbar-reserve-cta"
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Reservar</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <AudioPlayer />
            <button
              type="button"
              onClick={() => setClicked(!clicked)}
              className={`p-1.5 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "text-brand-charcoal hover:bg-brand-sand"
                  : "text-brand-cream/90 hover:bg-brand-cream/10"
              }`}
              aria-label={clicked ? "Cerrar menú" : "Abrir menú"}
              id="menu-toggle-btn"
            >
              {clicked ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {clicked && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream/95 backdrop-blur-lg border-b border-brand-wood/30 shadow-xl"
          id="mobile-nav-drawer"
        >
          <div className="px-5 py-6 space-y-4">
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block font-serif text-lg text-brand-charcoal/90 hover:text-brand-olive transition-colors"
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-brand-wood/20">
              <a
                href="#contacto"
                onClick={(e) => handleScrollTo(e, "#contacto")}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream rounded-xl text-sm font-sans font-medium"
                id="mobile-nav-reserve-btn"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Reservar Mesa</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
