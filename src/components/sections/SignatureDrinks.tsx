import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { signatureDrinks, type Drink } from '../../data/site';

const categories = ['All', ...Array.from(new Set(signatureDrinks.map((d) => d.category)))];

function DrinkCard({ drink, index }: { drink: Drink; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <motion.div
      layout
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-glow-multi"
      style={{
        border: '1px solid var(--border)',
        background: 'var(--bg-soft)',
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={drink.image}
          alt={drink.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="btn-primary text-sm">
            <Plus size={16} />
            Add to Order
          </span>
        </div>
        {/* Drink badge */}
        <div className="absolute right-3 top-3 rounded-full bg-espresso/60 px-2 py-0.5 text-[10px] text-gold backdrop-blur-sm font-grotesk">
          ✦ {drink.category}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <h3
            className="heading-display text-lg transition-colors duration-300 group-hover:text-gradient-vibe"
            style={{ color: 'var(--fg)' }}
          >
            {drink.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed font-grotesk" style={{ color: 'var(--fg-muted)' }}>{drink.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="heading-grotesk text-xl font-bold text-gold">${drink.price.toFixed(2)}</span>
          <motion.span
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-lg cursor-pointer"
          >
            ✨
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default function SignatureDrinks() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? signatureDrinks
    : signatureDrinks.filter((d) => d.category === activeCategory);

  return (
    <section id="drinks" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(179,136,255,0.03),transparent_50%)]" />
      <div className="container-luxe relative z-10">
        <SectionHeading
          title="Signature Drinks"
          subtitle="Crafted by our baristas, inspired by the world's greatest coffee cultures."
        />

        {/* Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium font-grotesk transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-espresso shadow-lg shadow-gold/20 scale-105'
                  : 'transition-all duration-300 hover:border-gold/20 hover:text-gold'
              }`}
              style={activeCategory !== cat ? { border: '1px solid var(--border)', color: 'var(--fg-muted)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((drink, i) => (
              <DrinkCard key={drink.id} drink={drink} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
