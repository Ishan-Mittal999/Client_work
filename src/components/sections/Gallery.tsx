import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { galleryImages } from '../../data/site';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());

  const close = () => setSelectedIndex(null);

  const goNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % galleryImages.length);
  }, [selectedIndex]);

  const goPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedIndex]);

  const toggleLike = (id: string) => {
    setLikedImages((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,175,55,0.03),transparent_50%)]" />

      <div className="container-luxe">
        <SectionHeading
          title="Our Gallery"
          subtitle="Moments captured in every cup — the art behind the brew."
        />

        {/* Masonry-like grid */}
        <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.34, 1.56, 0.64, 1] }}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setSelectedIndex(i)}
                className="w-full text-left"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full transition-all duration-700 group-hover:scale-110"
                />
              </button>

              {/* Hover overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* View button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="btn-primary text-sm">👁️ View</span>
              </div>

              {/* Like button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(img.id);
                }}
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <Heart
                  size={18}
                  className={likedImages.has(img.id) ? 'text-pink-400 fill-pink-400' : 'text-white/70'}
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ backgroundColor: 'var(--bg)', opacity: 0.95 }}
          >
            {/* Background grain */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: 0.04,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '256px 256px',
              }}
            />

            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-6 top-6 z-10 rounded-full p-3 backdrop-blur-sm transition-colors hover:text-gold hover:shadow-glow"
              style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-muted)' }}
            >
              <X size={24} />
            </button>

            <button
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-4 z-10 rounded-full p-3 backdrop-blur-sm transition-colors hover:text-gold hover:shadow-glow md:left-8"
              style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-muted)' }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-4 z-10 rounded-full p-3 backdrop-blur-sm transition-colors hover:text-gold hover:shadow-glow md:right-8"
              style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-muted)' }}
            >
              <ChevronRight size={28} />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.8, opacity: 0, rotateY: 10 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: -10 }}
              transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />

            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 text-sm backdrop-blur-sm font-grotesk"
              style={{ backgroundColor: 'var(--bg)', color: 'var(--fg-muted)' }}
            >
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
