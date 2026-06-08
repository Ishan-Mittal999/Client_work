import { motion } from 'framer-motion';
import { Bean, Award, Leaf, Sparkles, Heart, Clock } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { features, type Feature } from '../../data/site';

const iconMap: Record<string, React.ReactNode> = {
  Bean: <Bean size={24} />,
  Award: <Award size={24} />,
  Leaf: <Leaf size={24} />,
  Sparkles: <Sparkles size={24} />,
  Heart: <Heart size={24} />,
  Clock: <Clock size={24} />,
};

function FeatureCard({ feature, index, className }: { feature: Feature; index: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`bento-card p-8 group ${className || ''}`}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-purple-400 group-hover:text-espresso group-hover:shadow-lg group-hover:shadow-gold/20">
          {iconMap[feature.icon] || <Sparkles size={24} />}
        </div>
        <h3 className="heading-grotesk text-xl font-semibold transition-colors group-hover:text-gold" style={{ color: 'var(--fg)' }}>
          {feature.title}
        </h3>
        <p className="mt-3 leading-relaxed font-grotesk text-sm" style={{ color: 'var(--fg-muted)' }}>{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559525835-b9c7cd2f44e5?w=1920&q=85"
          alt=""
          className="h-full w-full object-cover opacity-[0.05]"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 0%, var(--bg) 80%)' }} />
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px] animate-blob" />

      <div className="container-luxe relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="What makes The Cappuccino Maker different — and better."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Feature 1 - Spans 2 cols on large */}
          <div className="lg:col-span-2 lg:row-span-1">
            <FeatureCard feature={features[0]} index={0} />
          </div>
          {/* Feature 2 */}
          <div className="lg:col-span-1">
            <FeatureCard feature={features[1]} index={1} />
          </div>
          {/* Feature 3 */}
          <div className="lg:col-span-1">
            <FeatureCard feature={features[2]} index={2} />
          </div>
          {/* Feature 4 - Spans 2 rows */}
          <div className="lg:col-span-1 lg:row-span-2 flex flex-col">
            <FeatureCard feature={features[3]} index={3} className="flex-1" />
          </div>
          {/* Feature 5 */}
          <div className="lg:col-span-2">
            <FeatureCard feature={features[4]} index={4} />
          </div>
          {/* Feature 6 */}
          <div className="lg:col-span-1">
            <FeatureCard feature={features[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
