import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { reviews } from '../../data/site';

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 400 : -400, opacity: 0, rotateY: d > 0 ? 15 : -15 }),
    center: { x: 0, opacity: 1, rotateY: 0 },
    exit: (d: number) => ({ x: d > 0 ? -400 : 400, opacity: 0, rotateY: d > 0 ? -15 : 15 }),
  };

  const review = reviews[current];

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,136,255,0.03),transparent_50%)]" />

      {/* Animated decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 left-10 w-20 h-20 rounded-full border border-gold/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-purple-500/10"
      />

      <div className="container-luxe relative z-10">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Real words from real coffee lovers."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative min-h-[320px] perspective-[1000px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center"
                style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
              >
                {/* Sparkle decorations */}
                <div className="relative mb-4">
                  <Sparkles className="h-8 w-8 text-gold/20" strokeWidth={1} />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0"
                  >
                    <Sparkles className="h-8 w-8 text-gold/10" strokeWidth={1} />
                  </motion.div>
                </div>

                <div className="mb-6 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                    >
                      <Star size={18} className="text-gold" fill="currentColor" />
                    </motion.span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <Star key={`e${i}`} size={18} className="text-white/10" />
                  ))}
                </div>

                <p
                  className="text-balance heading-display text-xl leading-relaxed md:text-2xl md:leading-relaxed"
                  style={{ color: 'var(--fg)', opacity: 0.8 }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 flex items-center gap-4"
                >
                  <motion.img
                    whileHover={{ scale: 1.1, borderColor: '#d4af37' }}
                    src={review.avatar}
                    alt={review.name}
                    className="h-12 w-12 rounded-full border-2 border-gold/30 object-cover transition-all duration-300"
                  />
                  <div className="text-left">
                    <p className="font-semibold font-grotesk" style={{ color: 'var(--fg)' }}>{review.name}</p>
                    <p className="text-sm font-grotesk flex items-center gap-1" style={{ color: 'var(--fg-muted)' }}>
                      <span>✅</span> Verified Customer
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => goTo((current - 1 + reviews.length) % reviews.length, -1)}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-glow"
              style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`rounded-full transition-all duration-500 ${
                    i === current ? 'w-8 h-2 bg-gradient-to-r from-gold to-purple-400' : 'w-2 h-2'
                  }`}
                  style={i !== current ? { backgroundColor: 'var(--border)' } : {}}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo((current + 1) % reviews.length, 1)}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-gold/30 hover:text-gold hover:shadow-glow"
              style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
