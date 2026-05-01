"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";

export default function FinalCta() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center">
            {/* Logo */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 mb-6 overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Holistic Logo"
                fill
                quality={95}
                className="object-contain p-2.5 md:p-3"
                sizes="(min-width: 768px) 112px, 96px"
              />
            </motion.div>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-cream-50 leading-tight mb-6">
              Siap Mengenali{" "}
              <span className="relative inline-block">
                <span className="text-secondary-light">Potensi Diri</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent/60 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              Anda?
            </h2>
            <p className="text-cream-200 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Kami siap membantu Anda memahami potensi diri secara lebih
              mendalam dan memberikan arahan yang tepat untuk masa depan Anda.
              Konsultasi pertama dimulai dari obrolan ringan.
            </p>

            {/* CTA button */}
            <motion.a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(SITE_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-cream-100 text-primary-dark font-heading font-bold text-base shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-300 cursor-pointer"
            >
              Mulai Konsultasi
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
