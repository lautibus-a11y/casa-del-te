import { Trees, Instagram, MessageSquare, Compass, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer 
      id="foot-info" 
      className="bg-brand-olive-dark text-brand-cream/80 py-16 border-t border-brand-cream/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Brand Grid in Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-brand-wood/10">
          
          {/* Brand Presentation */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full bg-brand-olive text-brand-cream">
                <Trees className="w-4 h-4" />
              </div>
              <span className="font-serif text-base font-semibold tracking-wider text-brand-cream uppercase">
                Komorebi
              </span>
            </div>
            
            <p className="font-sans text-xs text-brand-cream/60 leading-relaxed max-w-sm">
              “La luz que se filtra a través de las copas de los árboles, iluminando el sendero que nos reencuentra con la calma original.”
            </p>

            <span className="font-serif italic text-xs text-brand-wood/90 block">
              — Estética Nórdica, Quietud Zen.
            </span>
          </div>

          {/* Sitemaps / Navigation shortcuts */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-sans text-xs uppercase tracking-wider text-brand-wood font-semibold">Secciones</h5>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              <a href="#inicio" className="text-brand-cream/60 hover:text-brand-cream transition-colors">Inicio</a>
              <a href="#nosotros" className="text-brand-cream/60 hover:text-brand-cream transition-colors">Nosotros</a>
              <a href="#galeria" className="text-brand-cream/60 hover:text-brand-cream transition-colors">Galería</a>
              <a href="#menu" className="text-brand-cream/60 hover:text-brand-cream transition-colors">El Menú</a>
              <a href="#eventos" className="text-brand-cream/60 hover:text-brand-cream transition-colors">Eventos</a>
              <a href="#contacto" className="text-brand-cream/60 hover:text-brand-cream transition-colors">Contacto</a>
            </div>
          </div>

          {/* Social connections */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-sans text-xs uppercase tracking-wider text-brand-wood font-semibold">Comunidad Sensorial</h5>
            <p className="font-sans text-xs text-brand-cream/60 leading-relaxed">
              Comparta su experiencia y síganos para conocer nuevas cosechas de primavera y noches acústicas rústicas.
            </p>
            
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-brand-cream/5 border border-brand-wood/20 hover:bg-brand-olive hover:text-brand-cream text-brand-wood transition-colors"
                title="Siga nuestro Instagram"
                id="footer-insta"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/15550199"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-brand-cream/5 border border-brand-wood/20 hover:bg-brand-olive hover:text-brand-cream text-brand-wood transition-colors"
                title="Mensaje por WhatsApp"
                id="footer-wa"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="p-2.5 rounded-full bg-brand-cream/5 border border-brand-wood/20 hover:bg-brand-olive hover:text-brand-cream text-brand-wood transition-colors"
                title="Cómo Llegar"
                id="footer-compass"
              >
                <Compass className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Row: Copyright + Up controller */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-cream/40">
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
            <div className="flex items-center gap-1 justify-center sm:justify-start">
              <span>&copy; {new Date().getFullYear()} Komorebi Casa de Té. Hecho con</span>
              <Heart className="w-3 h-3 text-red-500/80 fill-red-500/50" />
              <span>para amantes del buen té.</span>
            </div>
            <span className="hidden sm:inline text-brand-cream/20">•</span>
            <span className="text-[10px] text-brand-wood/80 block sm:inline">Desarrollado por Broacastweb</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Sin Recubrimientos Químicos</span>
            <span>•</span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1 text-brand-wood hover:text-brand-cream transition-colors"
              id="footer-back-to-top"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
