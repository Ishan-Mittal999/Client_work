import { motion } from 'framer-motion';
import { Store, ArrowRight, Sparkles } from 'lucide-react';

export default function AppPromo() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-luxe">
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-16"
          style={{
            border: '1px solid rgba(212,175,55,0.1)',
            background: 'linear-gradient(135deg, #1B120D, #2A1A14, #3E2723)',
          }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-gold/15 to-purple-500/15 blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -60, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-gold/10 blur-[100px]"
          />

          {/* Grain overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: 0.04,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '256px 256px',
            }}
          />

          {/* Floating emojis */}
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-8 right-12 text-2xl hidden md:block"
          >
            ☕
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-12 left-20 text-2xl hidden md:block"
          >
            📱
          </motion.div>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold/20 to-purple-500/20 px-4 py-1.5 text-sm text-gold backdrop-blur-sm font-grotesk">
                  <Sparkles size={14} />
                  <span>Coming Soon 🚀</span>
                </div>
                <h2 className="heading-display text-4xl font-bold text-cream md:text-5xl">
                  Brew On The{' '}
                  <span className="text-gradient-vibe">Go</span>
                </h2>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-beige/70 font-grotesk">
                  Pre-order ahead, earn rewards, and discover new roasts — all from
                  The Cappuccino Maker app. <span className="text-gold">It&apos;s giving main character energy.</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)' }}
                  className="flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 cursor-pointer"
                  style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <Store className="h-8 w-8 text-gold" />
                  <div>
                    <p className="text-xs font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>Download on the</p>
                    <p className="font-semibold text-cream font-grotesk">App Store</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)' }}
                  className="flex items-center gap-3 rounded-xl px-5 py-3 transition-all duration-300 cursor-pointer"
                  style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <Store className="h-8 w-8 text-gold" />
                  <div>
                    <p className="text-xs font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>Get it on</p>
                    <p className="font-semibold text-cream font-grotesk">Google Play</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex items-center gap-2 text-sm font-grotesk"
                style={{ color: 'var(--fg-muted)', opacity: 0.4 }}
              >
                <span>Join the waitlist for early access</span>
                <ArrowRight size={14} />
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </motion.div>
            </div>

            {/* Right mockup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto hidden lg:block"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mx-auto h-[580px] w-[280px] overflow-hidden rounded-[3rem] border-[10px] border-cream/15 shadow-soft-lg"
                style={{ background: 'linear-gradient(180deg, #2A1A14, #1B120D)' }}
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-20 h-5 w-32 -translate-x-1/2 rounded-b-2xl bg-cream/10" />
                
                {/* Status Bar */}
                <div className="flex justify-between px-6 pt-6 text-[10px] text-cream/40 font-grotesk">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="flex h-[490px] flex-col justify-between p-5 pt-3">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-beige/50 font-grotesk">Good morning</p>
                        <p className="font-display text-sm font-semibold text-cream">Elias Marquez</p>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-gradient-to-br from-gold to-purple-400 flex items-center justify-center text-[10px] font-bold text-espresso">
                        EM
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2 border border-white/[0.05]">
                      <span className="text-xs text-beige/40">🔍</span>
                      <span className="text-[10px] text-beige/40 font-grotesk">Search favorite coffee...</span>
                    </div>

                    {/* Categories */}
                    <div className="mt-4 flex gap-1.5 overflow-x-hidden">
                      <span className="rounded-full bg-gradient-to-r from-gold to-purple-400 px-3 py-1 text-[9px] font-bold text-espresso">All</span>
                      <span className="rounded-full bg-white/[0.04] border border-white/[0.05] px-3 py-1 text-[9px] text-beige/50 font-grotesk">Espresso</span>
                      <span className="rounded-full bg-white/[0.04] border border-white/[0.05] px-3 py-1 text-[9px] text-beige/50 font-grotesk">Cold Brew</span>
                    </div>

                    {/* Product Card */}
                    <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                      <div className="relative h-28 w-full bg-coffee/40 overflow-hidden">
                        <img 
                          src="/images/midnight_espresso.png" 
                          alt="Midnight Espresso" 
                          className="h-full w-full object-cover" 
                        />
                        <span className="absolute left-2.5 top-2.5 rounded-full bg-espresso/60 px-1.5 py-0.5 text-[8px] text-gold font-grotesk">★ 4.9</span>
                      </div>
                      <div className="p-3">
                        <p className="text-[8px] tracking-widest text-beige/40 uppercase font-grotesk">Blend</p>
                        <p className="font-display text-xs font-semibold text-cream mt-0.5">Midnight Espresso</p>
                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="text-xs font-bold text-gold">$27.99</span>
                          <button className="h-6 w-6 rounded-full bg-gradient-to-r from-gold to-purple-400 flex items-center justify-center text-[10px] font-bold text-espresso hover:scale-105 transition-transform">+</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="border-t border-white/[0.06] bg-white/[0.01] pt-3 flex justify-around text-center">
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="text-xs text-gold">🏠</span>
                      <span className="text-[8px] font-medium text-gold font-grotesk">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-beige/40">
                      <span className="text-xs">☕</span>
                      <span className="text-[8px] font-grotesk">Order</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-beige/40">
                      <span className="text-xs">🎁</span>
                      <span className="text-[8px] font-grotesk">Rewards</span>
                    </div>
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 h-1 w-28 -translate-x-1/2 rounded-full bg-cream/25" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
