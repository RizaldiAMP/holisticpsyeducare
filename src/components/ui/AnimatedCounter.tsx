"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) return;

    let frameId = 0;
    let startTimestamp: number | null = null;

    const tick = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const nextValue = Math.floor(target * progress);
      setCount(nextValue);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isInView, target, duration, shouldReduceMotion]);

  const displayCount = shouldReduceMotion && isInView ? target : count;

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { type: "spring", stiffness: 200, damping: 15 }
      }
      className="tabular-nums"
    >
      {displayCount}
      {suffix}
    </motion.span>
  );
}
