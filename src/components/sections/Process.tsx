"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, FileSearch, BarChart3, Compass, ArrowRight } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

const iconMap = { MessageCircle, FileSearch, BarChart3, Compass };

const smoothEase = [0.22, 1, 0.36, 1] as const;
const softSpring = { type: "spring" as const, stiffness: 220, damping: 22, mass: 0.8 };

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Auto-cycle only when visible and not paused
  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
  }, []);

  useEffect(() => {
    if (isPaused || !isInView) return;
    const id = setInterval(advance, 3500);
    return () => clearInterval(id);
  }, [isPaused, isInView, advance]);

  return (
    <section
      ref={sectionRef}
      id="cara-kerja"
      className="pt-8 pb-24 md:pt-12 md:pb-32 bg-cream-50 relative overflow-hidden"
      onMouseEnter={() => {
        if (!isInView) return;
        setActiveIndex(0);
      }}
    >
      {/* Soft background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Top Separator */}
        <div className="flex items-center justify-center gap-3 mb-12 md:mb-16 opacity-60">
          <div className="w-24 md:w-56 h-[1.5px] bg-secondary-light/40 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-secondary-light/70" />
          <div className="w-24 md:w-56 h-[1.5px] bg-secondary-light/40 rounded-full" />
        </div>

        {/* Header */}
        <SectionReveal direction="up" className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A2B1C]/5 border border-[#1A2B1C]/10 text-[#1A2B1C] text-xs font-bold tracking-wide uppercase mb-6">
            Cara Kerja Kami
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2B1C] leading-tight mb-4">
            Alur yang Terarah
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Empat langkah menuju pemahaman diri yang lebih mendalam.
          </p>
        </SectionReveal>

        {/* Steps Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Horizontal Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[72px] left-[12%] right-[12%] h-px">
            <div className="w-full h-full bg-[#1A2B1C]/10" />
            {/* Animated progress fill */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-secondary/40 origin-left"
              animate={{
                scaleX: (activeIndex + 1) / PROCESS_STEPS.length,
              }}
              transition={{ duration: 0.7, ease: smoothEase }}
            />
          </div>

          {PROCESS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap] || Compass;
            const isActive = activeIndex === i;
            const isLast = i === PROCESS_STEPS.length - 1;

            return (
              <SectionReveal key={step.step} direction="up" delay={i * 0.12} className="relative">
                <div
                  className="flex flex-col items-center text-center group cursor-pointer px-4 lg:px-6"
                  onMouseEnter={() => { setActiveIndex(i); setIsPaused(true); }}
                  onClick={() => setActiveIndex(i)}
                >
                  {/* Icon Container with ring */}
                  <div className="relative mb-8">
                    {/* Pulse ring on active */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.3 : 1,
                        opacity: isActive ? 0.15 : 0,
                      }}
                      transition={{ duration: 0.5, ease: smoothEase }}
                      className="absolute inset-0 bg-secondary rounded-full"
                    />

                    <motion.div
                      animate={{
                        y: isActive ? -6 : 0,
                        scale: isActive ? 1.08 : 1,
                      }}
                      transition={softSpring}
                      className={`relative w-[88px] h-[88px] rounded-full flex items-center justify-center transition-[background-color,border-color,box-shadow] duration-500 ${
                        isActive
                          ? "bg-white border-2 border-secondary/30 shadow-xl shadow-secondary/15"
                          : "bg-[#1A2B1C] shadow-lg shadow-[#1A2B1C]/20"
                      }`}
                    >
                      {/* Step number badge */}
                      <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-[background-color,color,box-shadow] duration-500 ${
                        isActive
                          ? "bg-[#1A2B1C] text-white shadow-md"
                          : "bg-secondary text-white shadow-sm"
                      }`}>
                        {step.step}
                      </div>

                      <Icon className={`w-8 h-8 transition-colors duration-500 ${
                        isActive ? "text-[#1A2B1C]" : "text-white"
                      }`} />
                    </motion.div>
                  </div>

                  {/* Arrow connector between steps (desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute top-[72px] right-0 translate-x-1/2 z-10 items-center justify-center">
                      <motion.div
                        animate={{ x: isActive ? 3 : 0, opacity: i <= activeIndex ? 1 : 0.3 }}
                        transition={{ duration: 0.4, ease: smoothEase }}
                        className="w-6 h-6 rounded-full bg-cream-50 border border-[#1A2B1C]/10 flex items-center justify-center"
                      >
                        <ArrowRight className="w-3 h-3 text-[#1A2B1C]/50" />
                      </motion.div>
                    </div>
                  )}

                  {/* Card content */}
                  <motion.div
                    animate={{
                      y: isActive ? -4 : 0,
                    }}
                    transition={softSpring}
                    className={`w-full rounded-2xl p-6 transition-[background-color,border-color,box-shadow] duration-500 ${
                      isActive
                        ? "bg-white shadow-xl shadow-[#1A2B1C]/[0.06] border border-[#1A2B1C]/10"
                        : "bg-transparent border border-transparent"
                    }`}
                  >
                    <h3 className="font-heading text-lg md:text-xl font-bold text-[#1A2B1C] mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-400 ${
                      isActive ? "text-neutral-600" : "text-neutral-400"
                    }`}>
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
