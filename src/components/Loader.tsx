import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingMessages = [
  'Brewing perfection... ☕',
  'Grinding fresh beans... ✨',
  'Heating up the water... 🔥',
  'Sending good vibes... 🌟',
  'Almost ready... 💫',
];

export default function Loader() {
  const [show, setShow] = useState(true);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 400);
    const timer = setTimeout(() => setShow(false), 2000);
    return () => {
      clearTimeout(timer);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #1B120D, #2A1A14, #3E2723)' }}
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

          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Animated coffee cup */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-6xl"
            >
              ☕
            </motion.div>

            {/* Steam particles with gradient */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 0, opacity: 0.6, x: -8 + i * 8 }}
                animate={{
                  y: [-20, -60],
                  opacity: [0.6, 0],
                  x: [-8 + i * 8 + (i - 1) * 5, -8 + i * 8 + (i - 1) * 12],
                  scale: [1, 1.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeOut',
                }}
                className="absolute -top-2 left-1/2 h-3 w-1 rounded-full"
                style={{
                  background: 'linear-gradient(to top, #d4af37, #b388ff, transparent)',
                }}
              />
            ))}
          </motion.div>

          {/* Animated loading text */}
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 font-grotesk text-lg tracking-wider text-cream/70"
            >
              {loadingMessages[msgIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Progress dots */}
          <div className="mt-6 flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="h-2 w-2 rounded-full bg-gradient-to-r from-gold to-purple-400"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
