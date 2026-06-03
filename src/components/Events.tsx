import type React from "react";
import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { Music, Flower2, GlassWater, Calendar, Clock, ChevronDown } from "lucide-react";
import { EVENTS } from "../data";

const experienceData = [
  {
    icon: Music,
    title: "Música Acústica",
    description: "Tardes doradas armonizadas con arpa celta, flautas Shakuhachi tradicionales o guitarras acústicas ambientales.",
    event: EVENTS[1],
  },
  {
    icon: Flower2,
    title: "Degustaciones",
    description: "Viajes guiados por teteras antiguas, analizando la densidad de las hojas y perfiles de sabor de diversas altitudes.",
    event: EVENTS[2],
  },
  {
    icon: GlassWater,
    title: "Eventos Privados",
    description: "Reserve nuestro jardín completo para celebraciones íntimas, banquetes de lino, bodas botánicas o talleres privados.",
    event: EVENTS[0],
  },
];

function WordReveal({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap gap-x-[0.25em]">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function useActiveOnViewport(threshold = 0.5) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const observers = useRef<IntersectionObserver[]>([]);

  const observe = useCallback(
    (index: number): React.RefCallback<HTMLElement> =>
      (el) => {
        if (!el) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveIndex(index);
          },
          { threshold }
        );
        observer.observe(el);
        observers.current.push(observer);
      },
    [threshold]
  );

  return { activeIndex, observe };
}

const lineVariants = {
  collapsed: { scaleX: 0, opacity: 0 },
  expanded: { scaleX: 1, opacity: 1 },
};

const contentVariants = {
  collapsed: { opacity: 0, y: 12, filter: "blur(4px)" },
  expanded: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function Events() {
  const { activeIndex, observe } = useActiveOnViewport(0.3);

  return (
    <section
      id="eventos"
      className="py-24 lg:py-32 bg-brand-sand/20 relative overflow-hidden bg-grain"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-olive/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-3"
          >
            Eventos
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal font-light leading-tight">
            Experiencias en el jardín
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-16 lg:space-y-20">
          {experienceData.map((exp, index) => {
            const isActive = activeIndex === index;
            const Icon = exp.icon;
            const event = exp.event;

            return (
              <div
                key={exp.title}
                ref={observe(index)}
                className="relative"
              >
                <div className="flex items-start gap-5 lg:gap-8">
                  <span className="font-serif text-[11px] tracking-[0.15em] text-brand-wood/70 pt-1 shrink-0 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 lg:gap-5">
                      <motion.div
                        animate={{ y: isActive ? [0, -3, 0] : 0 }}
                        transition={{ duration: 3, repeat: isActive ? Infinity : 0, ease: "easeInOut" }}
                        className="p-2.5 rounded-xl bg-brand-sand/70 text-brand-olive shrink-0"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>

                      <h3 className="font-serif text-xl lg:text-2xl text-brand-charcoal font-light tracking-tight">
                        <WordReveal text={exp.title} />
                      </h3>

                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="ml-auto shrink-0"
                      >
                        <ChevronDown className="w-4 h-4 text-brand-wood/50" />
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      initial={false}
                      transition={{
                        height: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.4 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 lg:pt-8 space-y-6 lg:space-y-8">
                        <motion.div
                          initial="collapsed"
                          animate={isActive ? "expanded" : "collapsed"}
                          variants={lineVariants}
                          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                          className="h-px bg-gradient-to-r from-brand-olive/40 via-brand-olive/60 to-brand-olive/40 origin-left"
                        />

                        <motion.p
                          initial="collapsed"
                          animate={isActive ? "expanded" : "collapsed"}
                          variants={contentVariants}
                          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                          className="font-sans text-sm text-brand-charcoal/65 leading-relaxed max-w-xl"
                        >
                          {exp.description}
                        </motion.p>

                        <motion.div
                          initial="collapsed"
                          animate={isActive ? "expanded" : "collapsed"}
                          variants={contentVariants}
                          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                          className="flex flex-wrap items-center gap-4 text-xs font-sans text-brand-brown"
                        >
                          <div className="flex items-center gap-1.5 bg-brand-sand/60 px-3 py-1.5 rounded-lg">
                            <Calendar className="w-3.5 h-3.5 text-brand-olive" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5 bg-brand-sand/60 px-3 py-1.5 rounded-lg">
                            <Clock className="w-3.5 h-3.5 text-brand-olive" />
                            <span>{event.time}</span>
                          </div>
                        </motion.div>

                        <motion.div
                          initial="collapsed"
                          animate={isActive ? "expanded" : "collapsed"}
                          variants={contentVariants}
                          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                          className="flex flex-wrap items-center justify-between gap-4 pt-2"
                        >
                          <div>
                            <span className="text-[10px] font-sans uppercase tracking-widest text-brand-charcoal/50 block">
                              Precio por cupo
                            </span>
                            <span className="font-serif text-xl font-semibold text-brand-olive block mt-0.5">
                              {event.price}
                            </span>
                          </div>

                          <a
                            href="#contacto"
                            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream text-xs font-sans font-semibold rounded-xl tracking-wider uppercase transition-all duration-500"
                          >
                            <span>Inscribirme</span>
                            <span className="text-[10px] opacity-60 group-hover:opacity-100 transition-opacity">
                              ({event.slotsAvailable} cupos)
                            </span>
                          </a>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
