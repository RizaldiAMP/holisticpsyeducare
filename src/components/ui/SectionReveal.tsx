"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "flip" | "blur";

const variantMap: Record<RevealDirection, Variants> = {
  up: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 35 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: 15, y: 20 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)", y: 12 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        shouldReduceMotion
          ? {
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }
          : variantMap[direction]
      }
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay,
        duration: shouldReduceMotion ? 0.25 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
