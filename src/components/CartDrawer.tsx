import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full max-w-md flex-col backdrop-blur-2xl"
            style={{ borderLeft: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b px-6 py-5" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-gold" />
                <h2 className="heading-grotesk text-xl font-semibold" style={{ color: 'var(--fg)' }}>
                  Your Cart
                </h2>
                <span className="text-sm font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.6 }}>({items.length})</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
                className="rounded-full p-2 transition-colors hover:bg-gold/10 hover:text-gold hover:shadow-glow"
                style={{ color: 'var(--fg-muted)' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6 relative">
              {items.length === 0 ? (
                <div className="mt-20 flex flex-col items-center gap-4 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ShoppingBag className="h-16 w-16" style={{ color: 'var(--fg-muted)', opacity: 0.2 }} />
                  </motion.div>
                  <p className="heading-grotesk text-xl" style={{ color: 'var(--fg-muted)', opacity: 0.4 }}>Your cart is empty</p>
                  <p className="text-sm font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.3 }}>Add some coffee to get started! ☕</p>
                </div>
              ) : (
                <div className="space-y-5">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 group"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-20 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h3 className="font-medium font-grotesk" style={{ color: 'var(--fg)' }}>{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="ml-2 transition-colors hover:text-red-400 hover:scale-110"
                              style={{ color: 'var(--fg-muted)', opacity: 0.4 }}
                            >
                              <X size={14} />
                            </button>
                          </div>
                          <p className="text-sm text-gold font-grotesk">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-glow"
                            style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-sm font-grotesk" style={{ color: 'var(--fg)' }}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-glow"
                            style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="relative border-t px-6 py-6" style={{ borderColor: 'var(--border)' }}>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-grotesk" style={{ color: 'var(--fg-muted)' }}>Total</span>
                  <span className="heading-grotesk text-2xl font-bold text-gradient-vibe">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={clearCart}
                    className="flex-1 rounded-full border py-3 text-sm transition-all duration-300 hover:border-red-400/30 hover:text-red-400 font-grotesk"
                    style={{ borderColor: 'var(--border)', color: 'var(--fg-muted)' }}
                  >
                    Clear ✨
                  </button>
                  <button className="btn-primary flex-1">
                    <Sparkles size={16} />
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
