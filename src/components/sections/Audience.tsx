"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Building2, CheckCircle, ChevronDown, FileText } from "lucide-react";
import {
  AUDIENCES,
  AUDIENCE_OUTPUTS,
} from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

const iconMap = { Users, Building2 };

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function Audience() {
  const [active, setActive] = useState(0);
  const ActiveIcon = iconMap[AUDIENCES[active].icon as keyof typeof iconMap] || Users;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      {/* Soft ambient decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-secondary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <SectionReveal direction="up">
            <div className="text-secondary-dark text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Untuk Siapa
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-5xl font-bold text-[#1A2B1C] leading-tight mb-6">
              Layanan Ini Ditujukan{" "}
              <span className="text-secondary italic font-serif font-normal">Untuk Anda.</span>
            </h2>
            
            <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
              Bentuk laporan disusun agar dapat ditindaklanjuti oleh sekolah, guru BK, peserta didik, dan orang tua.
            </p>
          </SectionReveal>
        </div>

        {/* Interactive Tabs + Content */}
        <div className="flex flex-col gap-10">

          {/* Tab Selectors */}
          <SectionReveal direction="up" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:border md:border-cream-200 md:rounded-[1.5rem] md:p-2 md:bg-cream-50/50">
              {AUDIENCES.map((aud, i) => {
                const Icon = iconMap[aud.icon as keyof typeof iconMap] || Users;
                const isActive = active === i;

                return (
                  <button
                    key={aud.title}
                    onClick={() => setActive(i)}
                    className={`relative flex-1 flex items-center justify-between gap-4 px-6 py-5 md:py-4 rounded-[1.2rem] text-left transition-all duration-500 cursor-pointer w-full ${
                      isActive
                        ? "bg-[#1A2B1C] shadow-lg shadow-[#1A2B1C]/15"
                        : "bg-transparent hover:bg-cream-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                        isActive ? "bg-secondary/25 text-secondary-light" : "bg-cream-100 text-neutral-400"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className={`font-heading font-bold text-base md:text-lg transition-colors duration-500 ${
                          isActive ? "text-white" : "text-[#1A2B1C]"
                        }`}>
                          {aud.title}
                        </h3>
                        <p className={`text-xs md:text-sm leading-relaxed transition-colors duration-500 mt-0.5 ${
                          isActive ? "text-cream-200/70" : "text-neutral-400"
                        }`}>
                          {aud.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Visual Cue Indicator for Mobile */}
                    <div className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors duration-500 ${
                      isActive ? "bg-white/10" : "bg-neutral-200/50"
                    }`}>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-500 ${
                          isActive ? "text-white rotate-0" : "text-neutral-500 -rotate-90"
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </SectionReveal>

          {/* Expanded Content Panel */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{
                duration: 0.45,
                ease: smoothEase,
                opacity: { duration: 0.3 },
              }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12"
              style={{ willChange: "opacity, transform" }}
            >
              {/* Left: Output List */}
              <div className="bg-cream-50/60 rounded-[2rem] border border-cream-200/50 p-8 md:p-10 flex flex-col justify-center">
                <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-secondary-dark mb-8">
                  {AUDIENCE_OUTPUTS[active].title}
                </h4>
                <ul className="space-y-5">
                  {AUDIENCE_OUTPUTS[active].items.map((item: string, bi: number) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: bi * 0.08, duration: 0.4, ease: smoothEase }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-secondary/20 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-secondary-dark" />
                      </div>
                      <p className="text-[#1A2B1C] font-medium text-base md:text-lg leading-snug">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right: Summary + Delivery Format */}
              <div className="bg-[#1A2B1C] rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-accent/15 rounded-full blur-[50px] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-8">
                    <ActiveIcon className="w-8 h-8 text-secondary-light" />
                  </div>

                  <motion.div
                    key={`summary-${active}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                    className="text-cream-100 text-base md:text-lg leading-relaxed max-w-md mx-auto"
                  >
                    {AUDIENCE_OUTPUTS[active].summary}
                  </motion.div>

                  <div className="mt-8 p-5 rounded-2xl bg-white/10 border border-white/10 text-left max-w-md mx-auto">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-secondary-light shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] font-bold text-cream-200/70 mb-2">
                          Format Penyerahan
                        </p>
                        <p className="text-cream-100 text-sm md:text-base leading-relaxed">
                          {AUDIENCE_OUTPUTS[active].deliveryFormat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
