import { motion, AnimatePresence } from "motion/react";
import { ShoppingCart, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartBottomBar() {
  const { totalItems, openCart } = useCart();

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="fixed bottom-4 left-4 right-4 z-[180] flex justify-center pointer-events-none"
          id="cart-bottom-bar-wrap"
        >
          <button
            type="button"
            onClick={openCart}
            className="pointer-events-auto w-full max-w-md flex items-center justify-between gap-4 px-5 py-3.5 bg-brand-olive text-brand-cream rounded-full shadow-xl shadow-brand-charcoal/25 border border-brand-wood/30 hover:bg-brand-olive-dark active:scale-[0.98] transition-all"
            id="cart-bottom-bar-btn"
            aria-label={`Ver carrito, ${totalItems} artículos`}
          >
            <span className="flex items-center gap-3">
              <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-cream/15">
                <ShoppingCart className="w-5 h-5" strokeWidth={1.75} />
                <span className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-cream text-brand-olive text-[11px] font-bold font-sans">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              </span>
              <span className="font-sans text-sm font-medium tracking-wide text-left">
                Ver carrito
                <span className="block text-[10px] font-normal text-brand-cream/75 uppercase tracking-wider">
                  {totalItems} {totalItems === 1 ? "producto" : "productos"}
                </span>
              </span>
            </span>
            <ChevronRight className="w-5 h-5 text-brand-wood shrink-0" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
