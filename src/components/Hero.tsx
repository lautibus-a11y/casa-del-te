import { motion } from "motion/react";
import { Coffee, Compass, ArrowRight, HeartHandshake } from "lucide-react";
import { ASSETS } from "../data";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal py-20"
    >
      {/* Background video with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={ASSETS.hero.poster}
            className="w-full h-full object-cover select-none filter brightness-75"
            aria-label="Jardín de Komorebi con luz natural entre las hojas"
          >
            <source src={ASSETS.hero.video} type="video/mp4" />
            <source src={ASSETS.hero.videoAlt} type="video/mp4" />
          </video>
        </motion.div>
        {/* Cinematic gradient overlay for premium legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/40 via-brand-charcoal/50 to-brand-cream" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cream/15 backdrop-blur-md border border-brand-wood/20 text-brand-sand shadow-sm"
          id="hero-badge"
        >
          <HeartHandshake className="w-3.5 h-3.5 text-brand-wood" />
          <span className="text-xs font-sans tracking-[0.25em] lowercase first-letter:uppercase">
            Presentación Digital Premium
          </span>
        </motion.div>

        {/* Cinematic Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-cream font-light tracking-tight leading-tight max-w-4xl"
          id="hero-title"
        >
          Un espacio para desconectar entre <span className="italic text-brand-wood font-normal">naturaleza</span> y <span className="font-normal font-serif">té artesanal</span>
        </motion.h1>

        {/* Descriptive subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 font-sans text-brand-sand/80 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          id="hero-subtitle"
        >
          En Komorebi creamos rituales memorables. Un concepto al aire libre inspirado en la quietud de los jardines japoneses y el confort nórdico.
        </motion.p>

        {/* Multi-Buttons Navigation Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          id="hero-actions"
        >
          {/* Main Core CTA: Ver Menú */}
          <button
            onClick={() => handleScrollTo("#menu")}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-olive text-brand-cream font-medium text-sm rounded-xl hover:bg-brand-olive-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-brand-olive-dark/20 group"
            id="hero-cta-menu"
          >
            <Coffee className="w-4 h-4 text-brand-wood" />
            <span>Descubrir Menú</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary Core CTA: Reservar */}
          <button
            onClick={() => handleScrollTo("#contacto")}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-cream/85 backdrop-blur-md text-brand-charcoal font-medium text-sm rounded-xl border border-brand-wood/40 hover:bg-brand-cream hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
            id="hero-cta-reserve"
          >
            <span>Reservar Mesa</span>
          </button>

          {/* Tertiary Quick CTA: Cómo Llegar */}
          <button
            onClick={() => handleScrollTo("#contacto")}
            className="flex items-center justify-center gap-1.5 px-6 py-4 text-brand-sand hover:text-brand-cream font-sans text-sm tracking-wide transition-colors duration-200"
            id="hero-cta-location"
          >
            <Compass className="w-4 h-4 text-brand-wood animate-pulse" />
            <span className="underline decoration-brand-wood/30 underline-offset-4">Cómo Llegar</span>
          </button>

        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => handleScrollTo("#nosotros")}
          id="scroll-indicator"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-charcoal/50 font-medium">Deslizar para Vivir</span>
          <div className="w-[1.5px] h-10 bg-brand-olive/40 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-3 bg-brand-olive"
              animate={{ y: [0, 40] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
