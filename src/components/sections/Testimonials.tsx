"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import Image from "next/image";

const items = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimoni" className="py-24 md:py-32 bg-cream-50 overflow-hidden relative">
      
      {/* Subtle background */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-16">
        
        {/* Header - Centered on Mobile, Split on Desktop */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <SectionReveal direction="up">
              <div className="text-secondary-dark text-xs font-bold tracking-[0.2em] uppercase mb-4 md:pl-1">
                Testimoni
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-[#1A2B1C] leading-tight">
                Apa Kata{" "}
                <span className="text-secondary italic font-serif font-normal">Mereka?</span>
              </h2>
            </SectionReveal>
          </div>
          
          <SectionReveal direction="left" delay={0.2} className="w-full md:w-auto mt-2 md:mt-0">
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-[280px] sm:max-w-sm mx-auto md:mx-0 md:pb-2">
              Pengalaman nyata dari individu yang telah merasakan manfaat layanan konsultasi kami.
            </p>
          </SectionReveal>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-cream-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-cream-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 45,
              repeat: shouldReduceMotion ? 0 : Infinity,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {items.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 250, damping: 22, mass: 0.8 }}
              className="shrink-0 w-[380px] md:w-[420px] bg-white rounded-[2rem] border border-cream-200/60 p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgb(26,43,28,0.06)] hover:border-secondary/15 transition-[border-color,box-shadow] duration-500 cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle corner decoration on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cream-50 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:from-secondary/[0.04]" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-secondary/10 mb-4" />
                <p className="text-[#1A2B1C] text-base md:text-lg leading-relaxed font-medium min-h-[80px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author with Photo */}
              <div className="mt-8 pt-6 border-t border-cream-200/60 flex items-center gap-4 relative z-10">
                <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0 ring-2 ring-cream-100 group-hover:ring-secondary/30 transition-all duration-500">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    sizes="56px"
                    quality={80}
                  />
                </div>
                <div>
                  <p className="text-[#1A2B1C] font-bold text-sm md:text-base">
                    {t.name}
                  </p>
                  <p className="text-neutral-400 text-xs md:text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

