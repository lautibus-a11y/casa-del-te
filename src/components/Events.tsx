import { motion } from "motion/react";
import { Calendar, Clock, Ticket, Users, Music, Flower2, GlassWater } from "lucide-react";
import { EVENTS } from "../data";

export default function Events() {
  const experiences = [
    {
      icon: <Music className="w-5 h-5" />,
      title: "Música Acústica",
      desc: "Tardes doradas armonizadas con arpa celta, flautas Shakuhachi tradicionales o guitarras acústicas ambientales."
    },
    {
      icon: <Flower2 className="w-5 h-5" />,
      title: "Degustaciones",
      desc: "Viajes guiados por teteras antiguas, analizando la densidad de las hojas y perfiles de sabor de diversas altitudes."
    },
    {
      icon: <GlassWater className="w-5 h-5" />,
      title: "Eventos Privados",
      desc: "Reserve nuestro jardín completo para celebraciones íntimas, banquetes de lino, bodas botánicas o talleres privados."
    }
  ];

  return (
    <section 
      id="eventos" 
      className="py-24 bg-brand-sand/20 relative overflow-hidden bg-grain border-t border-brand-wood/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-2">
            Eventos
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-brand-charcoal font-light leading-none">
            Experiencias en el jardín
          </h2>
          <p className="mt-4 font-sans text-brand-charcoal/60 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Sesiones exclusivas diseñadas con cupos estrictamente limitados para preservar la quietud, el silencio de la conversación y el confort sensorial.
          </p>
        </div>

        {/* Experience pillars preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.title}
              className="p-6 rounded-2xl bg-brand-cream border border-brand-wood/20 shadow-sm flex items-start gap-4"
              id={`experience-cell-${idx}`}
            >
              <div className="p-2.5 rounded-xl bg-brand-sand/60 text-brand-olive shrink-0">
                {exp.icon}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-charcoal">{exp.title}</h4>
                <p className="font-sans text-xs text-brand-charcoal/60 mt-1 leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar visual layout */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-brand-wood/30 pb-3">
            <h3 className="font-serif text-xl font-light text-brand-charcoal">
              Próximas Sesiones Programadas
            </h3>
            <span className="text-xs font-sans text-brand-olive font-medium">Cupos limitados</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {EVENTS.map((evt, idx) => (
              <motion.div
                key={evt.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row items-stretch bg-brand-cream border border-brand-wood/20 rounded-2xl overflow-hidden hover:border-brand-olive/40 hover:shadow-lg transition-all duration-300"
                id={`event-card-${evt.id}`}
              >
                {/* Event Thumbnail */}
                <div className="w-full lg:w-1/4 aspect-[16/9] lg:aspect-auto min-h-[160px] bg-brand-sand relative">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-brand-cream/90 backdrop-blur-sm rounded-full text-[10px] font-sans font-semibold text-brand-olive border border-brand-wood/25 shadow-sm">
                    Taller / Sesión
                  </div>
                </div>

                {/* Event Metadata & Details */}
                <div className="p-6 lg:p-8 flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  
                  {/* Left segment */}
                  <div className="space-y-3 max-w-lg">
                    <div className="flex items-center gap-4 text-xs font-sans text-brand-brown font-medium">
                      <div className="flex items-center gap-1.5 bg-brand-sand/50 px-2 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-brand-olive" />
                        <span>{evt.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-brand-sand/50 px-2 py-1 rounded-md">
                        <Clock className="w-3.5 h-3.5 text-brand-olive" />
                        <span>{evt.time}</span>
                      </div>
                    </div>

                    <h4 className="font-serif text-xl font-semibold text-brand-charcoal tracking-tight">
                      {evt.title}
                    </h4>

                    <p className="font-sans text-xs text-brand-charcoal/65 leading-relaxed">
                      {evt.description}
                    </p>
                  </div>

                  {/* Right segment: Price & Registration trigger */}
                  <div className="w-full md:w-auto shrink-0 flex flex-row md:flex-col justify-between items-center md:items-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-brand-sand">
                    
                    <div className="text-left md:text-right">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-brand-charcoal/50 block">Precio por cupo</span>
                      <span className="font-serif text-xl font-semibold text-brand-olive block mt-0.5">{evt.price}</span>
                      <span className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-sans font-medium mt-1 inline-block">
                        Últimos {evt.slotsAvailable} lugares
                      </span>
                    </div>

                    <a
                      href="#contacto"
                      className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream font-sans text-xs font-semibold rounded-xl tracking-wider uppercase transition-colors"
                      id={`event-book-btn-${evt.id}`}
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Inscribirme</span>
                    </a>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
