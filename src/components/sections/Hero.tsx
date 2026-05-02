"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown, Star } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";


export default function Hero() {
  // Animasi berantai
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-cream-50">
      <section
        id="hero"
        className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      >
        {/* Absolute Background Image - Mirip dengan "nano banana" / Nona di foto */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/hero/new-hero.webp"
            alt="Woman smiling peacefully in sunlight"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient Overlay for text readability (Darker on the left and bottom) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-32 md:pb-40 flex flex-col justify-center h-full min-h-[100svh]">
          <div className="flex-1 flex items-center">
            <motion.div
              className="max-w-2xl"
              variants={containerVars}
              initial="hidden"
              animate="visible"
            >
              {/* Top Badge */}
              <motion.div variants={itemVars}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5D5B5] text-[#4A3D2A] text-xs font-bold tracking-wide uppercase mb-6 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-[#8A7350] text-[#8A7350]" />
                  PENDIDIKAN &amp; PSIKOLOGI HOLISTIK
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVars}
                className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-white leading-[1.1]"
              >
                Know yourself
                <br />
                <span className="font-serif italic text-cream-100 font-normal">
                  before choosing your path
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                variants={itemVars}
                className="mt-6 text-base md:text-lg text-cream-200 leading-relaxed max-w-xl font-medium"
              >
                {SITE_CONFIG.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVars}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                    SITE_CONFIG.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-[#2A3B2D] text-white px-6 py-3.5 rounded-full font-semibold transition-all hover:bg-[#1f2b21] hover:scale-105"
                >
                  Mulai Sekarang
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E5D5B5] text-[#2A3B2D] transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="#tentang"
                  className="inline-flex items-center gap-2 font-medium text-cream-100 hover:text-white transition-colors"
                >
                  Pelajari Lebih Lanjut
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
          </div>


        </div>
      </section>
    </div>
  );
}
