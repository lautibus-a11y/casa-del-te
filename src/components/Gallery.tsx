import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null || prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="galeria"
      className="py-24 bg-brand-sand/30 bg-grain relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-2">
            Galería de nuestro espacio
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-brand-charcoal font-light leading-none">
            La quietud capturada en instantes
          </h2>
          <p className="mt-4 font-sans text-brand-charcoal/60 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Un recorrido visual por las texturas, los rincones iluminados bajo el follaje, la vajilla de cerámica y el vapor templado de nuestras infusiones.
          </p>
        </motion.div>

        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          id="gallery-masonry"
        >
          {GALLERY_ITEMS.map((item, index) => {
            const borders = [
              "border-t-4 border-l-4",
              "border-r-4 border-t-4",
              "border-b-4 border-r-4",
              "border-l-4 border-b-4",
              "border-t-4 border-r-4 border-b-4",
              "border-r-4 border-b-4 border-l-4",
              "border-b-4 border-l-4 border-t-4",
              "border-l-4 border-t-4 border-r-4",
              "border-t-4 border-b-4",
              "border-l-4 border-r-4",
              "border-t-4",
              "border-b-4",
              "border-l-4",
              "border-r-4",
            ];
            const border = borders[index % borders.length];
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (index % 4) * 0.08,
                ease: "easeOut",
              }}
              onClick={() => setLightboxIndex(index)}
              className={`break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm border-brand-olive hover:shadow-xl hover:brightness-110 transition-all duration-500 ${border}`}
              id={`gallery-item-wrap-${item.id}`}
            >
              <img
                src={item.url}
                alt={item.alt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full object-cover rounded-2xl transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-brand-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="text-brand-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-sm font-light text-brand-cream/90 leading-snug">
                    {item.alt}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-brand-wood/90 text-xs font-sans">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Ampliar imagen</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
        </div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-brand-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setLightboxIndex(null)}
              id="lightbox-overlay"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-cream/10 text-brand-cream hover:bg-brand-cream/20 transition-all z-10"
                id="lightbox-close-btn"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-cream/10 text-brand-cream hover:bg-brand-cream/20 transition-all hidden md:flex"
                id="lightbox-prev-btn"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div
                className="max-w-4xl w-full flex flex-col items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-auto max-h-[75vh] w-full flex justify-center bg-brand-charcoal"
                >
                  <img
                    src={GALLERY_ITEMS[lightboxIndex].url}
                    alt={GALLERY_ITEMS[lightboxIndex].alt}
                    referrerPolicy="no-referrer"
                    className="max-h-[70vh] max-w-full object-contain rounded-xl border border-brand-wood/10"
                  />
                </motion.div>

                <div className="text-center text-brand-cream max-w-2xl px-4 mt-2">
                  <p className="font-serif text-lg font-light">
                    {GALLERY_ITEMS[lightboxIndex].alt}
                  </p>
                  <p className="font-sans text-[11px] text-brand-cream/40 mt-1">
                    Imagen {lightboxIndex + 1} de {GALLERY_ITEMS.length}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-brand-cream/10 text-brand-cream hover:bg-brand-cream/20 transition-all hidden md:flex"
                id="lightbox-next-btn"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-brand-cream/50 md:hidden">
                <span>Presione a los costados para navegar</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
