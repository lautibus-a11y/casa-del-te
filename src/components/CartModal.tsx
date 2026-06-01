import { motion, AnimatePresence } from "motion/react";
import { X, Plus, Minus, Trash2, ShoppingCart, Send } from "lucide-react";
import { useCart, formatPrice } from "../context/CartContext";

export default function CartModal() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalAmount,
    totalItems,
    isCartOpen,
    closeCart,
  } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    let message = "¡Hola Komorebi Casa de Té! Me gustaría realizar el siguiente pedido:\n\n";
    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.product.name} (${item.product.price} c/u) - Subtotal: ${formatPrice(
        parseInt(item.product.price.replace(/[$.]/g, ""), 10) * item.quantity
      )}\n`;
    });
    message += `\n*Total del Pedido: ${formatPrice(totalAmount)}*\n\n`;
    message += "¿Tienen disponibilidad para preparar este pedido? ¡Muchas gracias!";

    window.open(`https://wa.me/15550199?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-brand-charcoal/70 backdrop-blur-sm z-[200] cursor-pointer"
            id="cart-modal-overlay"
          />

          <div className="fixed inset-0 z-[210] flex items-end sm:items-center justify-center p-4 pb-24 sm:pb-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-lg max-h-[min(85vh,640px)] bg-brand-cream border border-brand-wood/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
              id="cart-modal-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cart-modal-title"
            >
              <div className="p-5 sm:p-6 border-b border-brand-wood/25 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-full bg-brand-olive text-brand-cream">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      id="cart-modal-title"
                      className="font-serif text-xl font-semibold text-brand-charcoal"
                    >
                      Su pedido
                    </h3>
                    <p className="text-[10px] font-sans text-brand-charcoal/50 uppercase tracking-wider">
                      {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="p-2 rounded-full text-brand-charcoal hover:bg-brand-sand transition-colors"
                  aria-label="Cerrar carrito"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-5 sm:p-6 space-y-3">
                {cartItems.length === 0 ? (
                  <div className="py-12 text-center space-y-3">
                    <ShoppingCart className="w-10 h-10 mx-auto text-brand-wood/60" />
                    <p className="font-sans text-sm text-brand-charcoal/60">
                      Su carrito está vacío
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => {
                    const unit = parseInt(item.product.price.replace(/[$.]/g, ""), 10);
                    const subtotal = unit * item.quantity;
                    return (
                      <div
                        key={item.product.id}
                        className="flex gap-3 p-3 bg-brand-cream border border-brand-wood/20 rounded-2xl"
                        id={`cart-item-${item.product.id}`}
                      >
                        <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-brand-sand">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow min-w-0 flex flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <h4 className="font-serif text-sm font-semibold text-brand-charcoal leading-tight truncate">
                              {item.product.name}
                            </h4>
                            <span className="font-serif text-sm font-semibold text-brand-olive shrink-0">
                              {formatPrice(subtotal)}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center bg-brand-sand/50 rounded-lg border border-brand-wood/20 p-0.5">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity - 1)
                                }
                                className="p-1 rounded hover:bg-brand-sand"
                                aria-label="Menos"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-sans text-xs font-medium">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(item.product.id, item.quantity + 1)
                                }
                                className="p-1 rounded hover:bg-brand-sand"
                                aria-label="Más"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.product.id)}
                              className="p-1.5 text-brand-charcoal/40 hover:text-red-600 rounded-lg"
                              aria-label="Eliminar"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-5 sm:p-6 border-t border-brand-wood/25 bg-brand-sand/30 space-y-3 shrink-0">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs uppercase tracking-widest text-brand-charcoal/60 font-semibold">
                      Total
                    </span>
                    <span className="font-serif text-2xl font-semibold text-brand-olive">
                      {formatPrice(totalAmount)}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={clearCart}
                      className="flex items-center justify-center gap-1 py-3 px-3 bg-brand-cream border border-brand-wood text-brand-charcoal/70 text-[10px] font-semibold uppercase tracking-wider rounded-xl hover:bg-brand-sand/50"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Vaciar
                    </button>
                    <button
                      type="button"
                      onClick={handleCheckout}
                      className="flex items-center justify-center gap-1.5 py-3 px-3 bg-brand-olive hover:bg-brand-olive-dark text-brand-cream text-[10px] font-semibold uppercase tracking-wider rounded-xl shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Enviar pedido
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
