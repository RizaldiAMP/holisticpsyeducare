"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CircleDot, Brain, GraduationCap, ChevronDown } from "lucide-react";
import { PHILOSOPHIES } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import SectionTitle from "@/components/ui/SectionTitle";

const IMAGES = [
  "/images/filosofi/filosofi-1.webp",
  "/images/filosofi/filosofi-2.webp",
  "/images/filosofi/filosofi-3.webp",
];

const ICONS = [CircleDot, Brain, GraduationCap];

export default function Philosophy() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default open first item on desktop

  return (
    <section className="py-24 md:py-32 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal direction="up">
          <SectionTitle
            label="Filosofi Kami"
            title="Pendekatan yang Kami Yakini"
          />
        </SectionReveal>

        <SectionReveal direction="up" delay={0.2}>
          <div className="mt-12 flex flex-col md:flex-row gap-4 h-[700px] md:h-[550px] lg:h-[600px]">
            {PHILOSOPHIES.map((p, i) => {
              const Icon = ICONS[i];
              const isHovered = hoveredIndex === null ? false : hoveredIndex === i;
              
              return (
                <motion.div
                  key={p.title}
                  className="relative overflow-hidden rounded-[2rem] cursor-pointer group flex-1 md:flex-auto transition-all duration-700 ease-[0.21,0.47,0.32,0.98]"
                  style={{
                    flexGrow: isHovered ? 2.5 : 1,
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onClick={() => setHoveredIndex(i)}
                >
                  <Image
                    src={IMAGES[i]}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  
                  {/* Dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-700" />
                  
                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <div className="flex items-center justify-between w-full mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        
                        {/* Only show title fully expanded on desktop, always on mobile */}
                        <h3 className="font-heading text-2xl font-bold text-white whitespace-nowrap">
                          {p.title}
                        </h3>
                      </div>

                      {/* Visual Cue Indicator for Mobile */}
                      <div className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 shrink-0 border border-white/10">
                        <ChevronDown 
                          className={`w-5 h-5 text-white transition-transform duration-500 ${isHovered ? "rotate-180" : "rotate-0"}`} 
                        />
                      </div>
                    </div>
                    
                    {/* Description - fade and slide in when hovered */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isHovered ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-4 md:max-h-0 md:opacity-0"
                      }`}
                    >
                      <p className="text-white/80 text-sm md:text-base leading-relaxed md:pr-12 md:max-w-md">
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
    </section>
  );
}
