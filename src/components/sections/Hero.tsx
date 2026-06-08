import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Coffee, Sparkles, Music } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const floatingEmojis = ['☕', '✨', '🔥', '💫', '🌟', '🎵'];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(179,136,255,0.06),transparent_50%)]" />

      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=85"
          alt=""
          className="h-[120%] w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12),transparent_70%)]" />
      </motion.div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      {/* Floating emoji particles */}
      {floatingEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0,
          }}
          animate={{
            y: [null, Math.random() * -40 - 20 + '%'],
            opacity: [0, 0.15, 0],
            rotate: [0, Math.random() * 20 - 10],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
          className="absolute z-[1] text-2xl pointer-events-none"
        >
          {emoji}
        </motion.div>
      ))}

      {/* Decorative gradient orbs with animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-24 top-[18%] h-72 w-72 rounded-full bg-purple-500/5 blur-3xl"
      />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[10%] top-[20%] hidden text-gold/15 md:block"
      >
        <Coffee size={80} strokeWidth={1} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[8%] top-[35%] hidden text-lavender/10 md:block"
      >
        <Sparkles size={60} strokeWidth={1} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="container-luxe relative z-10 px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <span className="animate-pulse-glow inline-block">✨</span>
            <span className="text-gold font-grotesk tracking-wide">Premium Artisan Coffee</span>
          </motion.div>

          {/* Split text heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="heading-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
            style={{ color: 'var(--fg)' }}
          >
            {'Brewed For '.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
            <br />
            <span className="text-gradient-vibe">
              {'Dreamers'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, rotateX: -40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + i * 0.04,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl font-grotesk"
            style={{ color: 'var(--fg-muted)' }}
          >
            Hand-selected beans from the world&apos;s finest origins, expertly
            roasted in small batches. <span className="text-gold">Every cup hits different.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-sm"
            >
              <span>Explore Our Coffee</span>
              <span>🔥</span>
            </MagneticButton>
            <MagneticButton
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-sm"
            >
              <span>Our Story</span>
              <span>✨</span>
            </MagneticButton>
          </motion.div>

          {/* Vibe tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-8 flex items-center gap-2 text-xs"
            style={{ color: 'var(--fg-muted)', opacity: 0.3 }}
          >
            <Music size={12} />
            <span>lo-fi beats to brew coffee to</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
          style={{ color: 'var(--fg-muted)', opacity: 0.4 }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase font-grotesk">Scroll</span>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
