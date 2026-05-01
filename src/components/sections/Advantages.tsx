"use client";

import { motion } from "framer-motion";
import { Layers, Microscope, SearchCheck, Lightbulb, Rocket, Fingerprint } from "lucide-react";
import { ADVANTAGES } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

const iconMap = { Layers, Microscope, SearchCheck, Lightbulb, Rocket, Fingerprint };

const smoothSpring = { type: "spring" as const, stiffness: 250, damping: 22, mass: 0.8 };

export default function Advantages() {
  return (
    <section className="py-24 md:py-32 bg-[#1A2B1C] relative overflow-hidden">
      
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Clean Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <SectionReveal direction="up">
              <div className="text-secondary-light text-xs font-bold tracking-[0.2em] uppercase mb-4 pl-1">
                Keunggulan Kompetitif
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mengapa Memilih <br className="hidden md:block"/>
                <span className="text-secondary-light italic font-serif font-normal">Holistic?</span>
              </h2>
            </SectionReveal>
          </div>
          
          <SectionReveal direction="left" delay={0.2}>
            <p className="text-cream-200/70 text-base md:text-lg leading-relaxed md:max-w-sm pb-2">
              Enam fondasi utama yang mendasari layanan kami untuk memberikan tingkat kedalaman dan akurasi terbaik demi kesuksesan terarah Anda.
            </p>
          </SectionReveal>
        </div>

        {/* Clean 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ADVANTAGES.map((adv, i) => {
            const Icon = iconMap[adv.icon as keyof typeof iconMap] || Layers;

            // Optional: assign stagger delay
            const delay = i * 0.1;

            return (
              <SectionReveal key={adv.title} direction="up" delay={delay}>
                <motion.div 
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={smoothSpring}
                  className="bg-white/[0.05] border border-white/[0.08] rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.1)] hover:border-secondary-light/30 hover:shadow-[0_15px_40px_rgb(0,0,0,0.2)] hover:bg-white/[0.08] flex flex-col group cursor-pointer relative overflow-hidden h-full backdrop-blur-sm transition-[border-color,box-shadow,background-color] duration-500"
                >
                  
                  {/* Decorative faint glow inside the top right corner of hovered cards */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:from-secondary/[0.08]" />

                  {/* Minimalist Icon Block */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/10 flex justify-center items-center mb-8 transition-colors duration-500 ring-1 ring-white/10 group-hover:bg-secondary group-hover:ring-secondary">
                    <Icon className="w-6 h-6 text-secondary-light group-hover:text-white transition-colors duration-500" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <h3 className="font-heading font-bold text-xl lg:text-2xl text-white mb-3 leading-snug">
                      {adv.title}
                    </h3>
                    <p className="text-cream-200/60 leading-relaxed text-sm md:text-base group-hover:text-cream-200/90 transition-colors duration-500">
                      {adv.description}
                    </p>
                  </div>
                  
                  {/* Bottom animated border line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-secondary-light w-0 group-hover:w-full transition-all duration-700 ease-out" />
                  
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
