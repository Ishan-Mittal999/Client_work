import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Drinks', href: '#drinks' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-soft' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="group flex items-center gap-2"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="heading-display text-xl font-bold tracking-wide md:text-2xl"
            >
              <span className="text-gold">The Cappuccino Maker</span>
            </motion.span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-gold group font-grotesk"
                style={{ color: 'var(--fg-muted)' }}
              >
                {link.label}
                <span className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-gradient-to-r from-gold to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full p-2 transition-all duration-300 hover:bg-gold/10 hover:text-gold hover:shadow-glow"
              style={{ color: 'var(--fg-muted)' }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open cart"
              className="relative rounded-full p-2 transition-all duration-300 hover:bg-gold/10 hover:text-gold hover:shadow-glow"
              style={{ color: 'var(--fg-muted)' }}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <motion.span
                  key={totalItems}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gradient-to-r from-gold to-purple-400 px-1 text-[10px] font-bold text-espresso"
                >
                  {totalItems}
                </motion.span>
              )}
            </motion.button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="rounded-full p-2 transition-all duration-300 hover:text-cream md:hidden"
              style={{ color: 'var(--fg-muted)' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl md:hidden"
            style={{ backgroundColor: 'var(--glass)' }}
          >
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 text-4xl opacity-10">☕</div>
            <div className="absolute bottom-10 left-10 text-4xl opacity-10">✨</div>

            <div className="flex h-full flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="heading-display text-2xl tracking-wide transition-colors hover:text-gradient-vibe"
                  style={{ color: 'var(--fg)', opacity: 0.8 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
