import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BrandLogo from "./BrandLogo";

export default function CinematicReveal() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-4 sm:px-8 select-none bg-cover bg-center bg-no-repeat bg-brand-charcoal"
          style={{ backgroundImage: "url('/fondo-cinmeatic-reveal.png')" }}
          id="cinematic-reveal"
        >
          <div className="absolute inset-0 bg-brand-charcoal/60" />
          <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full px-2 sm:px-6"
            >
              <BrandLogo variant="reveal" className="mx-auto drop-shadow-lg" />
            </motion.div>

            <div className="w-full max-w-xs h-[2px] bg-brand-wood/15 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-20 bg-brand-wood/70"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 sm:bottom-12 text-center"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-brand-sand font-medium">
              Desarrollado por Broacastweb
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
