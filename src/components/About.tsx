import { motion } from "motion/react";
import { Coffee, Award, Trees, Wind, ShieldCheck } from "lucide-react";
import { ASSETS } from "../data";

export default function About() {
  const cards = [
    {
      icon: <Trees className="w-5 h-5 text-brand-olive" />,
      title: "Atmósfera Silvestre",
      description: "Mesas sumergidas en un oasis arbolado. Diseñamos rincones de meditación para desconectar de la velocidad citadina."
    },
    {
      icon: <Coffee className="w-5 h-5 text-brand-brown" />,
      title: "Molienda y Hebra Fina",
      description: "Tés obtenidos éticamente de plantaciones históricas en Asia y América. Infundidos bajo temperaturas controladas de manantial."
    },
    {
      icon: <Wind className="w-5 h-5 text-brand-wood" />,
      title: "Filosofía Japandi",
      description: "El balance perfecto entre el minimalismo rústico japonés y la calidez escandinava. Armonía con el ciclo de la naturaleza."
    }
  ];

  return (
    <section 
      id="nosotros" 
      className="py-24 bg-brand-cream relative overflow-hidden bg-grain"
    >
      {/* Decorative nature blurred circle */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-brand-olive/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-96 h-96 bg-brand-wood/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block">
              Nuestra Esencia
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4.5xl text-brand-charcoal font-light leading-tight">
              Donde la tierra susurra y <br />
              <span className="italic font-normal text-brand-olive">el agua se convierte en ritual</span>
            </h2>

            <p className="font-sans text-brand-charcoal/70 text-base leading-relaxed font-light">
              Komorebi nació del deseo de rescatar el valor del silencio. Inspirados por el término japonés que describe el resplandor solar filtrándose entre las hojas de los árboles, creamos un refugio al aire libre único en su clase.
            </p>

            <p className="font-sans text-brand-charcoal/70 text-base leading-relaxed font-light">
              Cada taza es un puente: conectamos antiguos cultivos de altura —desde los valles nubosos de Assam hasta las colinas ceremoniales de Kioto— con un espacio de diseño honesto, rodeado de cañas de bambú, estanques minimalistas y madera de pastura recuperada. No es solo beber té; es retornar a la lentitud orgánica de la vida en calma.
            </p>

            {/* Custom highlight row */}
            <div className="flex items-center gap-4 py-4 px-5 rounded-2xl bg-brand-sand/50 border border-brand-wood/30 max-w-lg">
              <div className="h-10 w-10 rounded-full bg-brand-olive/10 flex items-center justify-center text-brand-olive shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-brand-olive-dark">Fiel a la Estación</h4>
                <p className="font-sans text-xs text-brand-charcoal/60">Cambiamos los maridajes aromáticos según la temperatura y las hojas cosechadas.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Stacked Imagery */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-2 border-brand-olive/70" id="about-image-primary-holder">
              <img
                src={ASSETS.about.primary}
                alt="Espacio al aire libre de Komorebi entre vegetación y bambú"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/30 to-transparent" />
            </div>

            {/* Floating smaller asset */}
            <div className="absolute -bottom-8 -left-10 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-olive/70" id="about-image-secondary-holder">
              <img
                src={ASSETS.about.secondary}
                alt="Detalle del rincón de té con cerámica y texturas naturales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Story details layout: Cards */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-wood text-sm font-semibold tracking-widest font-sans uppercase">Los tres pilares</span>
            <h3 className="font-serif text-2xl text-brand-charcoal font-light mt-1">Cómo honramos su viaje de tranquilidad</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-brand-cream border border-brand-wood/25 shadow-sm hover:shadow-md hover:border-brand-olive/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                id={`pillar-card-${idx}`}
              >
                <div className="p-3.5 rounded-full bg-brand-sand/65 mb-4 border border-brand-wood/20">
                  {card.icon}
                </div>
                <h4 className="font-serif text-lg font-semibold text-brand-charcoal mb-2">
                  {card.title}
                </h4>
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
