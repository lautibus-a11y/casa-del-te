import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, Info, Leaf, Plus, Minus, X, ShoppingBag } from "lucide-react";
import { MENU_ITEMS } from "../data";
import { MenuItem } from "../types";
import { useCart } from "../context/CartContext";

const TABS: { key: MenuItem["category"]; label: string; desc: string }[] = [
  {
    key: "tes",
    label: "Tés",
    desc: "Negro, verde y matcha ceremonial — hebras de origen único infusionadas con cuidado.",
  },
  {
    key: "pastelería",
    label: "Pastelería",
    desc: "Elaborados diariamente en horno de leña con hierbas botánicas.",
  },
  {
    key: "brunch",
    label: "Brunch",
    desc: "Opciones saladas y tablas de campo orgánicas para compartir en paz.",
  },
];

function categoryLabel(item: MenuItem): string {
  if (item.category === "tes") return item.variety ?? "Té";
  if (item.category === "pastelería") return "Pastelería";
  return "Brunch";
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuItem["category"]>("tes");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [modalQty, setModalQty] = useState(1);
  const { addToCart } = useCart();

  const activeTabMeta = TABS.find((t) => t.key === activeTab)!;
  const filteredItems = MENU_ITEMS.filter((it) => it.category === activeTab);

  return (
    <section
      id="menu"
      className="py-24 bg-brand-cream relative overflow-hidden bg-grain"
    >
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-wood/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-olive font-semibold block mb-2">
            Nuestro Menú
          </span>
          <h2 className="font-serif text-3xl sm:text-4.5xl text-brand-charcoal font-light leading-none">
            La pureza de los ingredientes
          </h2>
          <p className="mt-4 font-sans text-brand-charcoal/60 text-sm max-w-lg mx-auto font-light leading-relaxed">
            Tés en hebra, repostería de horno y brunch de campo — tres bloques, una misma calma.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-brand-sand/50 rounded-2xl max-w-md mx-auto mb-8 border border-brand-wood/20">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 min-w-[5.5rem] px-5 py-3 text-sm tracking-wide rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "text-brand-cream bg-brand-olive shadow-md"
                  : "text-brand-charcoal/70 hover:text-brand-olive hover:bg-brand-sand/40"
              }`}
              id={`menu-tab-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <p className="text-center text-xs font-sans tracking-wide text-brand-olive italic mb-10 max-w-lg mx-auto">
          “{activeTabMeta.desc}”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => {
                  setSelectedItem(item);
                  setModalQty(1);
                }}
                className="flex flex-col sm:flex-row gap-4 p-4 bg-brand-cream rounded-2xl border border-brand-wood/20 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                id={`menu-item-card-${item.id}`}
              >
                <div className="w-full sm:w-[40%] aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden shrink-0 bg-brand-sand relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-brand-cream/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[9px] font-semibold text-brand-olive border border-brand-wood/20">
                    {categoryLabel(item)}
                  </span>
                </div>

                <div className="flex flex-col justify-between flex-grow min-w-0 py-0.5">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-brand-charcoal group-hover:text-brand-olive transition-colors leading-snug">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-brand-charcoal/60 mt-2 leading-relaxed font-light line-clamp-2">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1 mt-2">
                        <Leaf className="w-2.5 h-2.5 text-brand-olive shrink-0" />
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[8px] font-sans px-1.5 py-0.5 bg-brand-sand/55 text-brand-charcoal/70 border border-brand-wood/20 rounded uppercase tracking-wider font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-brand-sand">
                    <span className="font-serif text-xl font-bold text-brand-olive-dark">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(item, 1);
                      }}
                      className="flex items-center gap-1 px-3.5 py-1.5 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream text-[10px] uppercase font-semibold tracking-wider font-sans rounded-xl transition-all shadow-sm active:scale-95"
                      id={`quick-add-${item.id}`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Añadir</span>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-14 p-6 rounded-2xl bg-brand-sand/40 border border-brand-wood/30 max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 items-center">
          <div className="h-12 w-12 rounded-full bg-brand-olive text-brand-cream flex items-center justify-center shrink-0">
            <Info className="w-6 h-6 stroke-[1.5]" />
          </div>
          <div className="text-center sm:text-left">
            <h5 className="font-serif text-sm font-semibold text-brand-charcoal">
              Preparación de hebra
            </h5>
            <p className="font-sans text-xs text-brand-charcoal/60 mt-1 leading-relaxed">
              Agua filtrada a 75°C (verde), 85°C (oolong) y 95°C (negro). Leche de pastura o
              almendras casera sin costo extra.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-brand-charcoal/80 backdrop-blur-sm z-[200] cursor-pointer"
              id="product-modal-overlay"
            />

            <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-brand-cream border border-brand-wood/35 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col md:flex-row relative"
                id="product-detail-modal"
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-brand-cream/80 text-brand-charcoal hover:bg-brand-sand transition-colors shadow-sm cursor-pointer"
                  id="product-modal-close"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:min-h-[400px] bg-brand-sand relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-olive text-brand-cream text-[10px] font-sans uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-sm border border-brand-wood/35">
                    {categoryLabel(selectedItem)}
                  </div>
                </div>

                <div className="p-6 md:p-8 w-full md:w-1/2 flex flex-col justify-between bg-brand-cream">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-brand-charcoal leading-tight">
                        {selectedItem.name}
                      </h3>
                      {selectedItem.tags && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {selectedItem.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-sans px-2 py-0.5 bg-brand-sand/65 text-brand-charcoal/70 border border-brand-wood/25 rounded-md uppercase tracking-wider font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="font-sans text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-light">
                      {selectedItem.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-brand-sand/40 border border-brand-wood/20 flex gap-2.5 items-start">
                      <Coffee className="w-4 h-4 text-brand-olive shrink-0 mt-0.5" />
                      <p className="text-[10px] font-sans text-brand-charcoal/65 leading-relaxed">
                        <span className="font-semibold text-brand-olive">Sugerencia Zen:</span>{" "}
                        Infundido con agua purificada y servido en vajilla de arcilla.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-brand-sand space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-brand-charcoal/50 font-semibold font-sans">
                        Precio
                      </span>
                      <span className="font-serif text-2xl font-bold text-brand-olive-dark">
                        {selectedItem.price}
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <div className="flex items-center bg-brand-sand/50 rounded-xl border border-brand-wood/20 p-1">
                        <button
                          type="button"
                          onClick={() => setModalQty((q) => Math.max(1, q - 1))}
                          className="p-1 rounded text-brand-charcoal hover:bg-brand-sand transition-colors cursor-pointer"
                          aria-label="Menos cantidad"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3.5 font-sans text-sm font-semibold text-brand-charcoal min-w-[20px] text-center">
                          {modalQty}
                        </span>
                        <button
                          type="button"
                          onClick={() => setModalQty((q) => q + 1)}
                          className="p-1 rounded text-brand-charcoal hover:bg-brand-sand transition-colors cursor-pointer"
                          aria-label="Más cantidad"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          addToCart(selectedItem, modalQty);
                          setSelectedItem(null);
                        }}
                        className="flex-grow flex items-center justify-center gap-2 py-3 px-5 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream text-xs font-semibold uppercase tracking-wider font-sans rounded-xl shadow-md transition-all cursor-pointer"
                        id="modal-add-to-cart"
                      >
                        <ShoppingBag className="w-4 h-4 text-brand-wood fill-brand-wood" />
                        <span>Añadir al Carrito</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
