"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export default function Card({
  children,
  className = "",
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`rounded-2xl bg-white border border-cream-200 p-6 md:p-8 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
