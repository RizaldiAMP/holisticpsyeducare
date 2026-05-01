"use client";

import { motion } from "framer-motion";
import { VISION, MISSIONS } from "@/lib/constants";

export default function VisionMission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visi */}
        <motion.div 
          className="mb-24 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-[#8A7350]"></span>
            <span className="uppercase tracking-widest text-xs font-bold text-[#E5D5B5]">
              Visi
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-heading font-bold text-white leading-[1.15] max-w-5xl"
          >
            {/* 
              Render kalimat visi dan berikan styling berbeda pada kata kunci: 
              holistik, teliti, ilmiah dll agar terlihat elegan.
            */}
            {VISION.split(" ").map((word, i) => {
              const lower = word.toLowerCase();
              if (lower.includes("holistik") || lower.includes("ilmiah") || lower.includes("masa") || lower.includes("depan")) {
                return (
                  <span key={i} className="font-serif italic font-normal text-[#E5D5B5]">
                    {word}{" "}
                  </span>
                );
              }
              return <span key={i}>{word} </span>;
            })}
          </motion.h2>
        </motion.div>

        {/* Misi */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-24">
            
            {/* Misi Title section */}
            <motion.div variants={itemVariants} className="md:w-1/4 shrink-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-[#8A7350]"></span>
                <span className="uppercase tracking-widest text-xs font-bold text-[#E5D5B5]">
                  Misi Kami
                </span>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed max-w-xs opacity-80">
                Langkah-langkah strategis kami untuk mewujudkan visi dan komitmen jangka panjang.
              </p>
            </motion.div>

            {/* Misi Grid */}
            <div className="md:w-3/4 grid sm:grid-cols-2 gap-x-12 gap-y-16">
              {MISSIONS.map((m, i) => (
                <motion.div key={i} variants={itemVariants} className="group relative">
                  {/* Top hairline border */}
                  <div className="absolute top-0 left-0 w-full h-px bg-white/10 group-hover:bg-[#E5D5B5] transition-colors duration-500"></div>
                  
                  <div className="pt-8">
                    <span className="block text-4xl mb-6 font-light text-white/20 group-hover:text-white transition-colors duration-500 font-heading">
                      0{i + 1}
                    </span>
                    <p className="text-base text-cream-100 leading-relaxed group-hover:text-white transition-colors duration-500 font-medium">
                      {m}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
