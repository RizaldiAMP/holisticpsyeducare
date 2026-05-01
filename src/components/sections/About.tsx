"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleDot, Brain, GraduationCap, ChevronDown } from "lucide-react";
import { PHILOSOPHIES } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

const IMAGES = [
  "/images/filosofi/filosofi-1.webp",
  "/images/filosofi/filosofi-2.webp",
  "/images/filosofi/filosofi-3.webp",
];

const ICONS = [CircleDot, Brain, GraduationCap];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="tentang" className="pt-16 md:pt-24 pb-24 md:pb-32 bg-cream-50 overflow-hidden relative z-20 -mt-12 md:-mt-20 rounded-t-[2rem] md:rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left text */}
          <SectionReveal direction="left" className="lg:col-span-4">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-secondary-50 text-secondary-dark">
                Tentang Kami
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-primary-dark leading-tight mb-6">
                Memahami Anda
                <br />
                <span className="text-secondary">Secara Utuh</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed text-base md:text-lg mb-4">
                Holistic Psychology and Educare hadir dengan pendekatan yang
                mengintegrasikan pemahaman manusia secara menyeluruh, metode
                psikologi yang ilmiah, serta pengembangan potensi individu.
              </p>
              <p className="text-neutral-600 leading-relaxed text-sm">
                Kami membantu setiap individu mengenali dirinya secara lebih
                utuh agar mampu mengambil keputusan pendidikan dan masa depan
                secara lebih tepat.
              </p>
              <motion.div
                className="mt-8 h-1 w-24 bg-gradient-to-r from-secondary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ originX: 0 }}
              />
            </div>
          </SectionReveal>

          {/* Right — Philosophy Accordion */}
          <SectionReveal direction="right" delay={0.15} className="lg:col-span-8">
            <div className="flex flex-col md:flex-row gap-3 h-[700px] md:h-[500px]">
              {PHILOSOPHIES.map((p, i) => {
                const Icon = ICONS[i];
                const isHovered = hoveredIndex === null ? false : hoveredIndex === i;
                
                return (
                  <motion.div
                    key={p.title}
                    className="relative overflow-hidden rounded-[2rem] cursor-pointer group flex-1 md:flex-auto transition-all duration-700 ease-[0.21,0.47,0.32,0.98]"
                    style={{
                      flexGrow: isHovered ? 2 : 1,
                    }}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onClick={() => setHoveredIndex(i)}
                  >
                    <Image
                      src={IMAGES[i]}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      quality={85}
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700" />
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                      <div className="flex items-center justify-between w-full mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className={`font-heading text-lg xl:text-xl font-bold text-white whitespace-nowrap transition-opacity duration-300 ${!isHovered ? 'md:opacity-0 lg:opacity-100' : 'opacity-100'}`}>
                            {p.title}
                          </h3>
                        </div>

                        {/* Visual Cue Indicator for Mobile/Vertical */}
                        <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0 border border-white/10">
                          <ChevronDown 
                            className={`w-5 h-5 text-white transition-transform duration-500 ${isHovered ? "rotate-180" : "rotate-0"}`} 
                          />
                        </div>
                      </div>
                      
                      {/* Description - fade and slide in when hovered */}
                      <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isHovered ? "max-h-40 opacity-100 translate-y-0 mt-2" : "max-h-0 opacity-0 translate-y-4 md:max-h-0 md:opacity-0"
                        }`}
                      >
                        <p className="text-white/80 text-sm md:text-base leading-relaxed md:pr-4 lg:pr-8 max-w-sm">
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
