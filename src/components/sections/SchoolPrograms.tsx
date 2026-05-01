"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SCHOOL_PROGRAMS, ADDITIONAL_SERVICES, SITE_CONFIG } from "@/lib/constants";
import SectionReveal from "@/components/ui/SectionReveal";
import { Check, FileText } from "lucide-react";
import { useLayananToggle } from "@/context/LayananToggleContext";

export default function SchoolPrograms() {
  const { showLayanan } = useLayananToggle();
  const cardPrograms = [...SCHOOL_PROGRAMS];
  const popularIndex = cardPrograms.findIndex((program) => program.isPopular);

  if (cardPrograms.length === 3 && popularIndex !== -1 && popularIndex !== 1) {
    const [popularProgram] = cardPrograms.splice(popularIndex, 1);
    cardPrograms.splice(1, 0, popularProgram);
  }

  return (
    <AnimatePresence>
      {showLayanan && (
        <motion.section
          id="program-sekolah"
          className="py-24 bg-cream-50 relative"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <SectionReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-dark text-xs font-bold tracking-wide uppercase mb-6">
                Layanan Institusi
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">
                Program Psikotes untuk <span className="text-secondary">Sekolah</span>
              </h2>
              <p className="text-neutral-600 text-lg">
                Program psikotes dirancang untuk membantu memetakan potensi siswa secara lebih objektif, terarah, dan aplikatif.
              </p>
            </SectionReveal>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 items-stretch gap-6 lg:gap-8 mb-16">
              {cardPrograms.map((program, idx) => (
                <SectionReveal key={program.id} direction="up" delay={idx * 0.1} className={`${program.isPopular ? 'z-10' : 'z-0'} h-full`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative rounded-[2rem] overflow-hidden border transition-all duration-500 flex flex-col h-full ${program.isPopular
                      ? 'border-secondary/50 shadow-[0_20px_50px_-15px_rgba(44,62,45,0.5)]'
                      : 'border-cream-200 shadow-sm hover:shadow-xl hover:border-secondary/30'
                      }`}
                  >
                    {/* Badge */}
                    {program.isPopular && (
                      <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-secondary-light text-white text-xs font-bold px-6 py-2 rounded-b-2xl uppercase tracking-widest shadow-xl whitespace-nowrap z-20 border-x border-b border-white/10">
                        Rekomendasi
                      </div>
                    )}

                    {/* Top Section: Name + Price */}
                    <div className={`relative px-8 pt-10 pb-10 md:px-10 md:pt-12 md:pb-12 ${program.isPopular
                      ? 'bg-gradient-to-br from-[#1A2B1C] via-[#213223] to-[#2A3C2D] text-white'
                      : 'bg-gradient-to-br from-cream-50 to-white text-primary-dark'
                      }`}>
                      {/* Decorative blur */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {program.isPopular && (
                          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[50px] -mr-16 -mt-16" />
                        )}
                      </div>

                      <div className="relative z-10">
                        <div className="flex gap-4 items-center mb-8">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${program.isPopular ? 'bg-white/10 border border-white/20 text-white' : 'bg-secondary/10 border border-secondary/20 text-secondary'}`}>
                            <FileText className="w-6 h-6" />
                          </div>
                          <h3 className={`font-heading text-xl font-bold leading-tight ${program.isPopular ? 'text-white' : 'text-primary-dark'}`}>
                            {program.name}
                          </h3>
                        </div>

                        {/* Price highlight box — visually distinct */}
                        <div className={`rounded-2xl px-6 py-6 text-center ${program.isPopular
                          ? 'bg-white/[0.08] border border-white/15'
                          : 'bg-secondary/[0.06] border border-secondary/15'
                          }`}>
                          <div className={`text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 mb-3 ${program.isPopular ? 'text-white/50' : 'text-neutral-400'}`}>
                            Reguler
                            <span className="line-through decoration-red-400/80 decoration-2">
                              {program.priceReguler}
                            </span>
                          </div>
                          <div className="flex items-baseline justify-center gap-2">
                            <span className={`text-4xl md:text-[2.75rem] font-extrabold tracking-tight ${program.isPopular ? 'text-white' : 'text-secondary-dark'}`}>
                              {program.priceKolektif}
                            </span>
                            <span className={`text-sm font-medium ${program.isPopular ? 'text-white/40' : 'text-neutral-400'}`}>/ siswa</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section: Features + Benefits + CTA */}
                    <div className={`flex-grow flex flex-col px-8 pt-8 pb-10 md:px-10 md:pt-10 md:pb-12 ${program.isPopular ? 'bg-[#1e2f20]' : 'bg-white'}`}>

                      {/* Components */}
                      <div className="mb-5">
                        <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 ${program.isPopular ? 'text-secondary-light/70' : 'text-neutral-400'}`}>
                          Komponen Asesmen
                        </p>
                        <div className="space-y-3">
                          {program.components.map((comp, i) => (
                            <div key={`comp-${i}`} className="flex items-start gap-3">
                              <Check className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${program.isPopular ? 'text-secondary-light' : 'text-secondary'}`} />
                              <span className={`text-[13px] font-medium leading-relaxed ${program.isPopular ? 'text-white/85' : 'text-neutral-700'}`}>{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`w-full h-px mb-5 ${program.isPopular ? 'bg-white/10' : 'bg-cream-200'}`} />

                      {/* Benefits */}
                      <div className="flex-grow">
                        <p className={`text-[11px] font-bold uppercase tracking-[0.15em] mb-4 ${program.isPopular ? 'text-secondary-light/70' : 'text-neutral-400'}`}>
                          Benefit
                        </p>
                        <div className="space-y-3">
                          {program.benefits.map((benefit, i) => (
                            <div key={`ben-${i}`} className="flex items-start gap-3">
                              <Check className={`w-[18px] h-[18px] shrink-0 mt-0.5 ${program.isPopular ? 'text-secondary-light' : 'text-secondary'}`} />
                              <span className={`text-[13px] leading-relaxed ${program.isPopular ? 'text-white/75' : 'text-neutral-600'}`}>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA — extra top margin for breathing room */}
                      <div className="mt-10 pt-6 border-t border-dashed border-cream-200/50">
                        <a
                          href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Halo, saya ingin berkonsultasi mengenai layanan Holistic Psychology and Educare. (${program.name})`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center w-full py-4 rounded-2xl font-bold text-[15px] transition-all duration-300 ${program.isPopular ? 'bg-secondary text-white hover:bg-secondary-light shadow-[0_0_20px_rgba(107,143,94,0.3)] hover:shadow-[0_0_25px_rgba(107,143,94,0.5)] hover:-translate-y-1 border border-secondary-light/30' : 'bg-cream-100 text-primary-dark hover:bg-secondary hover:text-white border border-cream-200 hover:border-secondary shadow-sm hover:shadow-lg hover:-translate-y-1'}`}
                        >
                          Konsultasikan Program
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>

            {/* Detailed Explanation / Comparison Box below the cards - Hidden as requested to combine with cards */}
            {/*
        <SectionReveal direction="up" delay={0.3} className="bg-white rounded-[2rem] border border-cream-200 shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-10 border-b border-cream-200 bg-cream-100/50">
            <h3 className="font-heading text-2xl font-bold text-primary-dark">Detail Fasilitas Program</h3>
            <p className="text-neutral-600 mt-2 text-sm">Bandingkan cakupan fitur dan benefit dari setiap paket program di atas.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-5 border-b border-cream-200 bg-white font-medium text-neutral-400 text-sm uppercase tracking-wider w-1/3">Fitur & Asesmen</th>
                  {cardPrograms.map(p => (
                    <th key={p.id} className={`p-5 border-b border-cream-200 text-center font-bold text-sm min-w-[140px] ${p.isPopular ? 'bg-[#1A2B1C]/5 text-secondary-dark' : 'bg-white text-primary-dark'}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="bg-cream-50 p-4 font-bold text-sm text-secondary-dark border-b border-cream-200 uppercase tracking-widest">
                    Komponen Asesmen
                  </td>
                </tr>
                {allComponents.map((feature, i) => (
                  <tr key={`comp-${i}`} className="hover:bg-cream-50/50 transition-colors">
                    <td className="p-5 border-b border-cream-100 text-neutral-700 text-sm">{feature}</td>
                    {cardPrograms.map(p => (
                      <td key={`${p.id}-${i}`} className={`p-5 border-b border-cream-100 text-center ${p.isPopular ? 'bg-[#1A2B1C]/5' : ''}`}>
                        {p.components.includes(feature) 
                          ? <Check className={`w-5 h-5 mx-auto ${p.isPopular ? 'text-secondary font-bold' : 'text-neutral-800'}`} /> 
                          : <Minus className="w-4 h-4 text-cream-300 mx-auto" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td colSpan={4} className="bg-cream-50 p-4 font-bold text-sm text-accent border-b border-cream-200 uppercase tracking-widest">
                    Benefit Khusus
                  </td>
                </tr>
                {allBenefits.map((benefit, i) => {
                  const isHighlighted = benefit === "Gratis Potential Review untuk Guru / Tenaga Kependidikan";
                  return (
                    <tr 
                      key={`ben-${i}`} 
                      className={`transition-colors ${
                        isHighlighted 
                          ? "bg-secondary/10 hover:bg-secondary/15" 
                          : "hover:bg-cream-50/50"
                      }`}
                    >
                      <td className={`p-5 border-b border-cream-100 text-sm ${isHighlighted ? "text-secondary-dark font-bold" : "text-neutral-700"}`}>
                        {benefit}
                        {isHighlighted && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary text-white uppercase tracking-tighter">
                            Benefit Bundling
                          </span>
                        )}
                      </td>
                      {cardPrograms.map(p => (
                        <td key={`${p.id}-${i}`} className={`p-5 border-b border-cream-100 text-center ${p.isPopular ? 'bg-[#1A2B1C]/5' : ''}`}>
                          {p.benefits.includes(benefit) 
                            ? <Check className={`w-5 h-5 mx-auto ${p.isPopular || isHighlighted ? 'text-secondary font-bold' : 'text-neutral-800'}`} /> 
                            : <Minus className="w-4 h-4 text-cream-300 mx-auto" />
                          }
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-cream-50 p-6 flex gap-3 text-sm text-neutral-500">
            <Info className="w-5 h-5 text-secondary shrink-0" />
            <p>Semua program di atas sudah termasuk pemberian laporan hasil pemeriksaan psikologi dalam bentuk hardfile.</p>
          </div>
        </SectionReveal>
        */}

            {/* Layanan Tambahan */}
            <SectionReveal direction="up" delay={0.4} className="border-t border-cream-200 pt-16">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-heading text-2xl font-bold text-primary-dark mb-8 text-center bg-white py-2 px-8 rounded-full shadow-sm w-max mx-auto border border-cream-200">
                  Layanan Tambahan (Opsional)
                </h3>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2B1C] via-[#213223] to-[#2A3C2D] p-8 md:p-10 shadow-lg">
                  {/* Decorative blur */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 rounded-full blur-[60px] -mr-12 -mt-12 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Highlighted Top Badge */}
                    <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.1)] ring-1 ring-white/5">
                      <p className="text-secondary-light text-2xl md:text-3xl font-extrabold tracking-[0.1em] mb-3">PAKET BUNDLING</p>
                      <p className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">Paket 2 dan Paket 3</p>
                    </div>

                    {/* Main Service Text */}
                    <div className="flex flex-col items-center gap-5">
                      <p className="text-white font-medium text-xl md:text-2xl leading-relaxed max-w-2xl">
                        {ADDITIONAL_SERVICES[0]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>

          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
