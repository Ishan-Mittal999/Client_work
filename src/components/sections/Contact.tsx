import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import MagneticButton from '../ui/MagneticButton';
import { openingHours } from '../../data/site';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Decorative backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.03),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(179,136,255,0.03),transparent_60%)]" />

      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          translateX: [0, 30, 0],
          translateY: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/5 blur-[100px]"
      />

      <div className="container-luxe relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="We'd love to hear from you — drop by, call, or send us a message."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Your Name ✨"
                  required
                  className="w-full rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:shadow-glow font-grotesk"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--fg)' }}
                />
                <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(212, 175, 55, 0.3)' }} />
              </div>
              <input
                type="email"
                placeholder="Your Email 📧"
                required
                className="w-full rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:shadow-glow font-grotesk"
                style={{ border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--fg)' }}
              />
            </div>
            <input
              type="text"
              placeholder="Subject 💬"
              className="w-full rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:shadow-glow font-grotesk"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--fg)' }}
            />
            <textarea
              rows={5}
              placeholder="Your Message ☕"
              required
              className="w-full resize-none rounded-xl px-5 py-3.5 outline-none transition-all duration-300 focus:shadow-glow font-grotesk"
              style={{ border: '1px solid var(--border)', background: 'var(--bg-soft)', color: 'var(--fg)' }}
            />
            <MagneticButton
              type="submit"
              className="btn-primary w-full"
            >
              {submitted ? (
                <span>✨ Message Sent! ✨</span>
              ) : (
                <span>Send Message 💫</span>
              )}
            </MagneticButton>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-purple-400 group-hover:text-espresso group-hover:shadow-lg group-hover:shadow-gold/20">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="heading-grotesk text-lg font-semibold" style={{ color: 'var(--fg)' }}>📍 Visit Us</h3>
                <p className="mt-1 font-grotesk" style={{ color: 'var(--fg-muted)' }}>
                  8653 Sunset Blvd<br />
                  West Hollywood, CA 90069
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-purple-400 group-hover:text-espresso group-hover:shadow-lg group-hover:shadow-gold/20">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="heading-grotesk text-lg font-semibold" style={{ color: 'var(--fg)' }}>🕐 Opening Hours</h3>
                <div className="mt-2 space-y-1.5">
                  {openingHours.map((item) => (
                    <div key={item.day} className="flex justify-between gap-8 text-sm font-grotesk" style={{ color: 'var(--fg-muted)' }}>
                      <span>{item.day}</span>
                      <span style={{ color: 'var(--fg)', opacity: 0.7 }}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-purple-400 group-hover:text-espresso group-hover:shadow-lg group-hover:shadow-gold/20">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="heading-grotesk text-lg font-semibold" style={{ color: 'var(--fg)' }}>📧 Email</h3>
                <p className="mt-1 font-grotesk" style={{ color: 'var(--fg-muted)' }}>hello@midnightbrew.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-purple-400 group-hover:text-espresso group-hover:shadow-lg group-hover:shadow-gold/20">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="heading-grotesk text-lg font-semibold" style={{ color: 'var(--fg)' }}>📞 Phone</h3>
                <p className="mt-1 font-grotesk" style={{ color: 'var(--fg-muted)' }}>+1 (310) 360‑6900</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
