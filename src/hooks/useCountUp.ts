import { useState, useEffect, useRef } from 'react';

export function useCountUp(
  end: number,
  duration = 2000,
  start = 0,
): number {
  const [count, setCount] = useState(start);
  const startTime = useRef<number | null>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    startTime.current = null;
    const step = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [end, duration, start]);

  return count;
}
