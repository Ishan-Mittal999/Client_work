import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    
    // Glow follow
    if (glowRef.current) {
      const glowX = (e.clientX - rect.left) / rect.width * 100;
      const glowY = (e.clientY - rect.top) / rect.height * 100;
      glowRef.current.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(212,175,55,0.15), transparent 60%)`;
      glowRef.current.style.opacity = '1';
    }
  };

  const handleReset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 12 }}
      className={`relative cursor-pointer overflow-hidden rounded-full font-semibold shadow-lg transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    >
      {/* Glow follower */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: 0 }}
      />
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
