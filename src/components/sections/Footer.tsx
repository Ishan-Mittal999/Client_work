import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Heart, Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Shop: ['All Coffee', 'Single Origin', 'Blends', 'Subscriptions', 'Brew Gear'],
  Learn: ['Brew Guides', 'Coffee 101', 'Our Process', 'Sustainability', 'Events'],
  Company: ['About Us', 'Careers', 'Press', 'Partnerships', 'Blog'],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', emoji: '📸' },
  { icon: Twitter, href: '#', label: 'Twitter', emoji: '🐦' },
  { icon: Facebook, href: '#', label: 'Facebook', emoji: '👍' },
  { icon: Youtube, href: '#', label: 'YouTube', emoji: '🎬' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Newsletter */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="container-luxe px-6 py-16 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-xl text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto mb-4"
            >
              <Mail className="h-8 w-8 text-gold/40" />
            </motion.div>
            <h3 className="heading-display text-2xl font-bold" style={{ color: 'var(--fg)' }}>
              Stay Brewed In ☕
            </h3>
            <p className="mt-2 font-grotesk" style={{ color: 'var(--fg-muted)' }}>
              Get <span className="text-gold font-semibold">10% off</span> your first order and exclusive access to limited roasts.
              No spam, just the good stuff. ✨
            </p>
            <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-md gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email 📧"
                required
                className="flex-1 rounded-full px-5 py-3 outline-none transition-all duration-300 focus:shadow-glow font-grotesk"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--fg)' }}
              />
              <button
                type="submit"
                className="btn-primary shrink-0"
              >
                {subscribed ? '✨ Subscribed! ✨' : 'Subscribe'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Links */}
      <div className="container-luxe px-6 py-16 md:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 group">
              <Coffee className="h-6 w-6 text-gold transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
              <span className="heading-display text-xl font-bold tracking-wide" style={{ color: 'var(--fg)' }}>
                The Cappuccino Maker
              </span>
            </a>
            <p className="mt-4 max-w-sm leading-relaxed font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.5 }}>
              Premium artisan coffee, roasted in small batches and shipped within
              48 hours. Brewed for dreamers, by dreamers.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:border-gold/20 hover:text-gold hover:shadow-glow"
                  style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
                >
                  <social.icon size={16} className="transition-all duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 heading-grotesk text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--fg)' }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block font-grotesk"
                      style={{ color: 'var(--fg-muted)', opacity: 0.5 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-luxe flex flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row md:px-12 font-grotesk" style={{ color: 'var(--fg-muted)', opacity: 0.3 }}>
          <p>&copy; {new Date().getFullYear()} The Cappuccino Maker. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-pink-400/60" /> in Portland 🌲
          </p>
        </div>
      </div>
    </footer>
  );
}
