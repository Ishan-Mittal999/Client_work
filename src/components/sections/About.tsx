import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { stats } from '../../data/site';
import { useCountUp } from '../../hooks/useCountUp';

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(inView ? value : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className="text-center group"
    >
      <div className="heading-grotesk text-4xl font-bold text-gradient-vibe md:text-5xl">
        {count}
        <span>{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-grotesk" style={{ color: 'var(--fg-muted)' }}>{label}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559525835-b9c7cd2f44e5?w=1920&q=85"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--bg) 80%)' }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-gold/5 blur-[100px] animate-blob" />
      <div className="absolute -right-20 bottom-1/3 h-64 w-64 rounded-full bg-purple-500/5 blur-[100px] animate-blob" style={{ animationDelay: '-4s' }} />

      <div className="container-luxe relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-soft-lg glow-ring">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85"
                alt="Coffee roasting"
                className="w-full object-cover transition-all duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full border-2 border-dashed border-gold/20 md:h-56 md:w-56"
            />
            {/* Floating emoji */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 text-3xl"
            >
              ☕
            </motion.div>
          </motion.div>

          {/* Content side */}
          <div>
            <SectionHeading
              title="Our Story"
              subtitle="From bean to cup — a journey of passion, precision, and purpose."
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
              style={{ color: 'var(--fg-muted)' }}
            >
              <p className="text-lg leading-relaxed font-grotesk">
                The Cappuccino Maker was born in a tiny garage in Portland, Oregon, with
                nothing but a second-hand roaster and a dream. Our founder, Elias
                Marquez, believed that coffee could be more than a morning
                ritual — it could be <span className="text-gold font-semibold">an experience</span>.
              </p>
              <p className="text-lg leading-relaxed font-grotesk">
                Today, we source beans from 18 countries, roast in small batches
                to preserve each origin&apos;s unique character, and ship directly
                to your door within 48 hours of roasting. Every bag is a labor of
                love.
              </p>
              <p className="text-lg leading-relaxed font-grotesk">
                We&apos;re not just coffee roasters. We&apos;re <span className="text-gradient-vibe font-semibold">dreamers</span>, just like
                you.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee stats strip */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-gold/10 bg-gold/[0.02] py-4">
          <div className="flex animate-marquee whitespace-nowrap gap-16">
            {[...stats, ...stats].map((stat, i) => (
              <span key={i} className="flex items-center gap-3 text-sm font-grotesk tracking-wide">
                <span className="text-gradient-vibe font-bold text-lg">{stat.value}{stat.suffix}</span>
                <span style={{ color: 'var(--fg-muted)' }}>{stat.label}</span>
                <span className="text-gold/30">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
