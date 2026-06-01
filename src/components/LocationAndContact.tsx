import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Clock, Phone, Send, Info, Compass, MessageSquare, Instagram, Heart } from "lucide-react";

export default function LocationAndContact() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "16:00",
    guests: "2",
    atmosphere: "jardín-bambú",
    notes: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      alert("Por favor ingrese su nombre y la fecha deseada.");
      return;
    }

    // Dynamic Whatsapp message generator
    const atmosphereLabel = 
      formData.atmosphere === "jardín-bambú" ? "Jardín Oriental de Bambú" :
      formData.atmosphere === "cabana-rustica" ? "Cabaña de Té Japandi (Cubierta)" :
      formData.atmosphere === "rincon-tatami" ? "Rincón Zen de Tatamis" : 
      "Mesa Exterior Arborizada";

    const text = `Hola Komorebi Casa de Té! Me gustaría realizar una solicitud de reserva:\n\n` +
      `• Nombre: ${formData.name}\n` +
      `• Fecha: ${formData.date}\n` +
      `• Hora: ${formData.time} hs\n` +
      `• Invitados: ${formData.guests} personas\n` +
      `• Ambiente preferido: ${atmosphereLabel}\n` +
      `• Notas adicionales: ${formData.notes || "Ninguna"}\n\n` +
      `¿Tienen disponibilidad? ¡Muchas gracias!`;

    const encodedText = encodeURIComponent(text);
    // Real-world Whatsapp redirection API
    const whatsappUrl = `https://wa.me/15550199?text=${encodedText}`;

    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <section 
      id="contacto" 
      className="py-24 bg-brand-cream relative overflow-hidden bg-grain border-t border-brand-wood/25"
    >
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-sand/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-2">
            Reservar y Encontrarnos
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-brand-charcoal font-light leading-none">
            Planifique su visita al oasis
          </h2>
          <p className="mt-4 font-sans text-brand-charcoal/60 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Abierto de Jueves a Domingo para asegurar la frescura de nuestras hebras de té y la máxima atención artesanal.
          </p>
        </div>

        {/* Double Column: Form + Contact Details and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Elegant Direct WhatsApp Reservation Form */}
          <div className="lg:col-span-6 bg-brand-cream/80 backdrop-blur-md p-8 rounded-3xl border border-brand-wood/25 shadow-xl shadow-brand-charcoal/5 relative">
            <h3 className="font-serif text-2.5xl font-light text-brand-charcoal mb-2">
              Solicitud de Reserva
            </h3>
            <p className="text-xs font-sans text-brand-charcoal/60 mb-6 leading-relaxed">
              Complete los detalles y presione enviar para redirigirlo de inmediato con nuestro WhatsApp oficial de reservas. Le responderemos confirmando su mesa en minutos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" id="whatsapp-booking-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Su Nombre</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Fernández"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors"
                  />
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Fecha de Visita</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Time */}
                <div className="space-y-1">
                  <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Hora Sugerida</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors cursor-pointer"
                  >
                    <option value="15:00">15:00 hs</option>
                    <option value="16:00">16:00 hs</option>
                    <option value="17:00">17:00 hs</option>
                    <option value="18:00">18:00 hs</option>
                    <option value="19:00">19:00 hs</option>
                    <option value="20:00">20:00 hs</option>
                  </select>
                </div>

                {/* Comensales */}
                <div className="space-y-1">
                  <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Invitados</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors cursor-pointer"
                  >
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas (Recom.)</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="5-6">De 5 a 6 personas</option>
                    <option value="grupal">Evento Grupal (7+)</option>
                  </select>
                </div>

                {/* Atmosphere Selection */}
                <div className="space-y-1 sm:col-span-1">
                  <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Estilo del Rincón</label>
                  <select
                    value={formData.atmosphere}
                    onChange={(e) => setFormData({ ...formData, atmosphere: e.target.value })}
                    className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors cursor-pointer"
                  >
                    <option value="jardín-bambú">Jardín de Bambú</option>
                    <option value="mesa-arbol">Mesa Exterior</option>
                    <option value="cabana-rustica">Cabaña Japandi</option>
                    <option value="rincon-tatami">Rincón Meditativo</option>
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-1">
                <label className="text-[11px] font-sans font-semibold text-brand-charcoal/70 uppercase tracking-wider block">Preferencia o Nota Alimentaria</label>
                <textarea
                  rows={2}
                  placeholder="Ej. Celíaco, Vegano, festejo de cumpleaños, o necesidad especial de accesibilidad..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-sand/30 border border-brand-wood/30 rounded-xl font-sans text-sm text-brand-charcoal placeholder-brand-charcoal/40 focus:outline-none focus:border-brand-olive focus:bg-brand-cream transition-colors resize-none"
                />
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={isSuccess}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream font-sans text-sm font-semibold rounded-xl tracking-wide uppercase transition-all duration-300 shadow-md transform active:scale-95 disabled:opacity-50 mt-4 cursor-pointer"
                id="booking-submit-btn"
              >
                {isSuccess ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="border-2 border-brand-cream border-t-transparent rounded-full h-4 w-4 block"
                    />
                    <span>Abriendo WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4 text-brand-wood fill-brand-wood" />
                    <span>Enviar Reserva por WhatsApp</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 flex items-center gap-2 p-3 bg-brand-sand/40 rounded-lg border border-brand-wood/20">
              <Info className="w-4 h-4 text-brand-olive shrink-0" />
              <p className="text-[10px] text-brand-charcoal/70 leading-relaxed">
                Sin cargos por cancelación. Se conserva la reservación por una tolerancia de hasta 15 minutos en el rincón seleccionado.
              </p>
            </div>
          </div>

          {/* Right Side: Map Pointer & Detailed Hours */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Hour Card */}
            <div className="p-7 bg-brand-sand/40 border border-brand-wood/30 rounded-3xl" id="hours-card">
              <h4 className="font-serif text-lg font-medium text-brand-charcoal mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-olive" />
                <span>Horarios Extendido de Temporada</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-r border-brand-wood/20 pr-4">
                  <span className="text-[10px] uppercase font-sans tracking-wider text-brand-charcoal/50">Jueves a Viernes</span>
                  <span className="font-serif text-lg font-semibold text-brand-olive block mt-1">15:00 hs a 21:00 hs</span>
                  <span className="text-[11px] font-sans text-brand-charcoal/60">Tarde dorada & sonido ambiente</span>
                </div>
                <div className="pl-2">
                  <span className="text-[10px] uppercase font-sans tracking-wider text-brand-charcoal/50">Sábados y Domingos</span>
                  <span className="font-serif text-lg font-semibold text-brand-olive block mt-1">12:00 hs a 22:00 hs</span>
                  <span className="text-[11px] font-sans text-brand-charcoal/60">Carta Brunch & noches de veladoras</span>
                </div>
              </div>
            </div>

            {/* Address & Socials Card */}
            <div className="p-7 bg-brand-cream border border-brand-wood/25 rounded-3xl space-y-4 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-olive/10 rounded-full text-brand-olive shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-sm font-semibold text-brand-charcoal">El Sendero Secreto</h5>
                  <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                    Paseo de los Bambúes 1420, Senda Verde Jardines.<br />
                    Un sendero peatonal de piedra a 100 metros del estacionamiento principal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-olive/10 rounded-full text-brand-olive shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif text-sm font-semibold text-brand-charcoal">Redes Sociales</h5>
                  <p className="font-sans text-xs text-brand-charcoal/70 mt-1 leading-relaxed">
                    Síguenos en <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline font-medium text-brand-olive hover:text-brand-olive-dark">@komorebi_teahouse</a> para contemplar las hojas que florecen, fotos tomadas por nuestros clientes e invitaciones íntimas.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Geographical Maps Layout */}
            <div className="w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-md border border-brand-wood/30 relative group" id="embedded-map-container">
              {/* Aesthetic placeholder styled map since clean static preview works beautifully inside iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.397787325603!2d135.7725838!3d35.0093863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108ec737f1915%3A0xe5a363a0ab393b33!2sKyoto%20Gyoen%20National%20Garden!5e0!3m2!1sen!2sjp!4v1783000000000!5m2!1sen!2sjp" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                id="iframe-google-map"
              />
              
              {/* Map Floating Tag */}
              <div className="absolute bottom-3 left-3 bg-brand-charcoal/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-sans text-brand-cream border border-brand-wood/20 flex items-center gap-1.5 pointer-events-none shadow-md">
                <Compass className="w-3.5 h-3.5 text-brand-wood" />
                <span>Acceso peatonal libre / Jardín Privado</span>
              </div>
            </div>

          </div>

        </div>

        {/* Small Love Footer Note */}
        <div className="mt-16 text-center text-brand-charcoal/40 text-xs flex items-center justify-center gap-1.5">
          <span>Komorebi es un espacio libre de ruidos de motor</span>
          <Heart className="w-3 h-3 text-brand-olive fill-brand-olive" />
          <span>Fomentamos la oxigenación natural.</span>
        </div>

      </div>
    </section>
  );
}
