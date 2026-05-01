"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardCheck,
  HeartHandshake,
  Route,
  ChevronDown,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

// Ensure keys match what's in constants.ts
const iconMap = { ClipboardCheck, HeartHandshake, Route };

const SERVICE_IMAGES = [
  "/images/services/Asesmen-Psikologi.webp",
  "/images/services/konseling.webp",
  "/images/services/Psikoedukasi.webp",
];

/** Smooth cubic-bezier for a natural, buttery feel */
const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="layanan" className="py-24 md:py-32 bg-[#1A2B1C] relative overflow-hidden">
      {/* Background radial glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Modern Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <SectionReveal direction="up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-50/10 border border-secondary/20 text-cream-100 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
              Fokus Utama
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-[1.15]">
              Layanan <span className="text-secondary-light">Holistic</span> <br className="hidden md:block" />
              Sebagai Mitra Anda
            </h2>
          </SectionReveal>

          <SectionReveal direction="left" delay={0.2} className="md:w-1/3">
            <p className="text-cream-200/80 text-base md:text-lg leading-relaxed">
              Dirancang khusus untuk memandu individu maupun institusi dalam memetakan serta memaksimalkan potensi terbaik.
            </p>
          </SectionReveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Dynamic Sticky Image Viewer (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-[650px] sticky top-32 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black/20">
            {/* Pre-render all images and only crossfade opacity to prevent decode stutters */}
            {SERVICE_IMAGES.map((imgSrc, idx) => (
              <motion.div
                key={imgSrc}
                initial={false}
                animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.5, ease: smoothEase }}
                className="absolute inset-0"
                style={{ 
                  willChange: "opacity", 
                  pointerEvents: activeIndex === idx ? "auto" : "none",
                  zIndex: activeIndex === idx ? 1 : 0 
                }}
              >
                <Image
                  src={imgSrc}
                  alt={`Layanan ${idx + 1}`}
                  width={1000}
                  height={1000}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="w-full h-full object-cover"
                  priority={idx === 0}
                  loading={idx === 0 ? undefined : "lazy"}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B1C] via-[#1A2B1C]/20 to-transparent opacity-80" />
              </motion.div>
            ))}

            {/* Floating Info Overlay on Image */}
            <div className="absolute bottom-10 left-10 right-10 z-20 flex items-center gap-6">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={`num-${activeIndex}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  className="w-16 h-16 rounded-full bg-secondary/80 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center text-white shrink-0"
                >
                  <span className="text-xs font-medium uppercase opacity-80">No</span>
                  <span className="text-xl font-bold leading-none -mt-0.5">0{activeIndex + 1}</span>
                </motion.div>
              </AnimatePresence>
              <div>
                <p className="text-cream-100 font-medium text-lg leading-snug drop-shadow-md">
                  Mengembangkan Karakter, Merancang Masa Depan
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive List / Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {SERVICES.map((svc: { title: string; description: string; icon: string }, i: number) => {
              const IconComponent = iconMap[svc.icon as keyof typeof iconMap] || ClipboardCheck;
              const isActive = activeIndex === i;

              return (
                <SectionReveal key={svc.title} delay={i * 0.1} direction="up" className="w-full">

                  {/* Mobile Image (Visible only on small screens) */}
                  <div
                    className="lg:hidden w-full relative rounded-[2rem] overflow-hidden border-white/10"
                    style={{ 
                      transition: "height 0.4s cubic-bezier(0.22, 1, 0.36, 1), margin-bottom 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      height: isActive ? "256px" : "0px",
                      marginBottom: isActive ? "16px" : "0px",
                      borderWidth: isActive ? "1px" : "0px",
                      willChange: "height, margin-bottom"
                    }}
                  >
                    <Image
                      src={SERVICE_IMAGES[i]}
                      alt={svc.title}
                      width={800}
                      height={800}
                      sizes="(max-width: 640px) 100vw, 92vw"
                      className="w-full h-full object-cover"
                      quality={85}
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div
                    className={`group relative rounded-[2rem] border overflow-hidden cursor-pointer transition-colors duration-500 ${isActive
                      ? "bg-white/[0.04] border-secondary/40 shadow-xl"
                      : "bg-transparent border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                      }`}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <div className="p-8 md:p-10 flex flex-col gap-6">

                      <div className="flex items-center gap-6">
                        <motion.div
                          animate={{
                            backgroundColor: isActive ? "var(--color-secondary)" : "rgba(255,255,255,0.05)",
                          }}
                          transition={{ duration: 0.4, ease: smoothEase }}
                          className={`w-14 h-14 rounded-[1.25rem] border flex items-center justify-center shrink-0 ${isActive
                            ? "text-white border-secondary-light"
                            : "text-cream-200 border-white/10 group-hover:bg-white/10"
                            }`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>

                        <h3 className={`font-heading text-2xl md:text-3xl font-bold transition-colors duration-500 flex-1 ${isActive ? "text-white" : "text-cream-200/80 group-hover:text-cream-50"
                          }`}>
                          {svc.title}
                        </h3>

                        {/* Status Icon Indicator (Visible on Mobile & Desktop) */}
                        <div className="flex w-10 h-10 rounded-full border border-white/10 items-center justify-center text-white/50 bg-black/20 shrink-0 group-hover:bg-black/40 transition-colors duration-300">
                          <motion.div
                            animate={{ rotate: isActive ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: smoothEase }}
                          >
                            <ChevronDown className={`w-5 h-5 transition-colors duration-500 ${isActive ? "text-secondary-light" : "text-white/50"}`} />
                          </motion.div>
                        </div>
                      </div>

                      {/* Expandable Text using CSS Grid for zero-JS buttery smooth transition */}
                      <div 
                        className="grid"
                        style={{
                          transition: "grid-template-rows 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease-out",
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                          opacity: isActive ? 1 : 0,
                          willChange: "grid-template-rows, opacity"
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-2 flex flex-col lg:flex-row gap-6 lg:items-end justify-between">
                            <p className="text-cream-200/70 text-base md:text-lg leading-relaxed max-w-lg">
                              {svc.description}
                            </p>

                            <Link 
                              href={i === 3 ? "#program-sekolah" : "#"}
                              className="inline-flex items-center gap-2 text-sm font-medium text-secondary-light hover:text-white transition-colors cursor-pointer w-max uppercase tracking-wider py-2"
                              onClick={(e) => {
                                // Prevent card accordion from toggling when clicking the link
                                e.stopPropagation();
                              }}
                            >
                              <span>Selengkapnya</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-current" />
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
