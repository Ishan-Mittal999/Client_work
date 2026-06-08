import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { products, type Product } from '../../data/site';
import { useCart } from '../../context/CartContext';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // 3D Tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-glow-multi"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--bg-soft)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Rating badge with sparkle */}
        <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-espresso/70 px-2.5 py-1 text-xs text-gold backdrop-blur-sm">
          <Star size={12} fill="currentColor" />
          <span>{product.rating}</span>
        </div>

        {/* Add button on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button
            onClick={handleAdd}
            className="btn-primary text-sm"
          >
            <ShoppingBag size={16} />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <span className="text-xs tracking-[0.2em] uppercase font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.6 }}>{product.category}</span>
        <h3
          className="mt-1 heading-display text-lg transition-colors duration-300 group-hover:text-gradient-vibe"
          style={{ color: 'var(--fg)' }}
        >
          {product.name}
        </h3>
        <p className="mt-1 text-sm" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>{product.tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="heading-grotesk text-xl font-bold text-gold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAdd}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-gold/10 hover:text-gold hover:shadow-glow"
            style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>

      {/* Added toast */}
      <AnimatePresence>
        {added && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-espresso shadow-lg flex items-center gap-1.5"
          >
            <Sparkles size={14} />
            Added to cart!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(179,136,255,0.03),transparent_50%)]" />

      <div className="container-luxe relative z-10">
        <SectionHeading
          title="Featured Coffee"
          subtitle="Hand-picked single origins and signature blends, roasted to perfection."
        />

        {/* Category filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium font-grotesk transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-espresso shadow-lg shadow-gold/20 scale-105'
                  : 'hover:border-gold/20 hover:text-gold'
              }`}
              style={activeCategory !== cat ? { border: '1px solid var(--border)', color: 'var(--fg-muted)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
