import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="heading-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        style={{ color: 'var(--fg)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-2xl text-lg md:text-xl font-grotesk"
          style={{ color: 'var(--fg-muted)' }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        className={`mx-auto mt-6 h-0.5 w-20 origin-center rounded-full bg-gradient-to-r from-gold to-purple-400 ${
          align === 'left' ? 'ml-0' : ''
        }`}
      />
      {/* Decorative sparkle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="mt-3 text-sm text-gold/40"
      >
        ✦ ✦ ✦
      </motion.div>
    </div>
  );
}
