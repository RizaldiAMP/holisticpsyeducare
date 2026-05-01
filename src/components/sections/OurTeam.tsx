"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import Image from "next/image";

interface TeamMember {
  name: string;
  fullName: string;
  role: string;
  sipp: string;
  image: string;
  experiences: string[];
  bio: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Joko",
    fullName: "Joko Tri Hartanto, M.Psi., Psikolog",
    role: "Psikolog",
    sipp: "20230201-2023-0367",
    image: "/images/team/joko_20230201-2023-0367-opt.webp?v=3",
    experiences: [
      "Psikolog PT Industri Kereta Api (Persero)",
      "Tester Penerimaan CPNS Kejaksaan Agung",
      "Tester Psikotes di SMP Muhammadiyah 3 Yogyakarta",
      "Tester Psikotes di SMA Muhammadiyah 2 Yogyakarta",
      "Tester Psikotes di SMA Muhammadiyah 3 Yogyakarta",
      "Tester Psikotes di SMA Muhammadiyah 7 Yogyakarta",
      "Tester Psikotes di MAN 1 Yogyakarta",
      "Tester Psikotes di MAN 2 Yogyakarta",
      "Tester Psikotes di MAN 3 Sleman",
      "Tester Psikotes di MAN 4 Sleman",
      "Tester Psikotes di SMAN 1 Purworejo",
      "Asesor Penerimaan Beasiswa LPP Agro Nusantara",
      "Asesor PT GML Jakarta",
      "Konselor Menjadi Manusia"
    ],
    bio: "Sebagai seorang psikolog yang memiliki pengalaman sebagai asesor sekitar 9 tahun di ranah psikologi industri, pendidikan, dan klinis. Pengalaman saya di bidang industri, seperti: rekrutmen dan seleksi, potential review, person job fit, asesmen kelompok, asesmen organisasi, dan lainnya. Di bidang pendidikan, seperti: penjurusan, konseling karir, dan minat & bakat. Di bidang klinis, seperti: konseling.",
  },
  {
    name: "Izzah",
    fullName: "Izzah Annisatur Rahma, M. Psi., Psikolog",
    role: "Psikolog",
    sipp: "20230005-2025-02-1031",
    image: "/images/team/izzah_20230005-2025-02-1031-opt.webp?v=3",
    experiences: [
      "Psikolog RSUD Wates",
      "Dosen Psikologi Universitas Proklamasi 45",
      "Asesor Quantum HRM Internasional"
    ],
    bio: "Saya merupakan psikolog klinis yang memiliki ketertarikan dengan berbagai isu kesehatan mental, baik dalam lingkup individual, keluarga, kelompok, maupun komunitas. Bidang kompetensi yang saya dalami saat ini meliputi konseling klinis dewasa dan anak, asesmen psikologi, masalah kekerasan, serta edukasi komunitas terkait isu-isu kesehatan mental.",
  },
  {
    name: "Rista",
    fullName: "Rista Dwi Fitriani, M. Psi., Psikolog",
    role: "Psikolog",
    sipp: "20190930-2023-0368",
    image: "/images/team/rista_20190930-2023-0368-opt.webp?v=3",
    experiences: [
      "Asesor LPP Agro Nusantara",
      "Asesor Quantum HRM Internasional",
      "Asesor PIP UNPAD",
      "Asesor PT. Industri Kereta Api (Persero)",
      "Asesor Lembanga Pengembangan Perbankan Indonesia",
      "Trainer SMK Negeri 2 Kota Bengkulu",
      "Trainer BNN Provinsi Bengkulu",
      "Trainer Logos Indonesia",
      "Associate Psychologist Biro SDM Polda Bengkulu"
    ],
    bio: "Saya seorang psikolog, penilai, konselor, dan spesialis pengembangan organisasi dengan pengalaman beberapa tahun di bidang psikologi terapan. Saya telah menangani dan mendukung individu atau organisasi dengan pendekatan psikologis. Selama beberapa tahun, saya telah menyelenggarakan banyak sesi (seminar, lokakarya, sesi berbagi) untuk kelompok, organisasi, dan sekolah tentang peningkatan keterampilan lunak, kesejahteraan, penilaian psikologis, dan perekrutan kandidat yang tangguh.",
  },
  {
    name: "Dila",
    fullName: "Hasna Fadilla Sustring, M.Psi., Psikolog",
    role: "Psikolog",
    sipp: "20230131-2023-0550",
    image: "/images/team/dila_20230131-2023-0550-opt.webp?v=3",
    experiences: [
      "Asesor LPP Agro Nusantara",
      "Asesor UPT UII",
      "Psikolog EUDAIMONIA PSYCHOLOGY",
      "Psikolog Biro Psikologi Sahabat Remaja",
      "Psikolog Biro Arteri",
      "Psikolog Dharma Setia Consultan",
      "Psikolog Biro Payung Qalbu"
    ],
    bio: "Saya merupakan Psikolog lulusan Magister Profesi Psikologi UII dengan bidang peminatan Pendidikan. Saya merupakan pribadi yang tekun, pekerja keras dan dapat bekerja secara individu maupun kelompok. Keahlian saya meliputi Asesmen Psikologi, konseling, ketertarikan pada ilmu perkembangan dan kepribadian. Saya tertarik dan familiar dengan perkembangan anak serta kondisi anak spesial (ABK). Selama kuliah hingga saat ini saya menjadi freelancer di beberapa biro dan lembaga belajar sehingga saya sudah biasa bekerja dalam sistem atau strukrutal. Selain itu saya pribadi yang senang mempelajari hal baru yang berkaitan dengan psikologi.",
  },
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Function to close modal
  const closeModal = () => setSelectedMember(null);

  return (
    <section id="tim-kami" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* Left: Sticky Info Panel */}
          <div className="lg:w-5/12 lg:pr-8">
            <div className="lg:sticky lg:top-32">
              <SectionReveal direction="left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-cream-200 shadow-sm text-secondary-dark text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Pakar & Ahli
                </div>

                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-dark leading-[1.1] mb-6">
                  Kenali <br className="hidden lg:block" />
                  <span className="text-secondary italic font-light">Tim Profesional</span><br className="hidden lg:block" />
                  Kami
                </h2>

                <div className="w-16 h-1 bg-secondary/30 rounded-full mb-8" />

                <p className="text-neutral-500 text-lg leading-relaxed font-light mb-8">
                  Berpengalaman, terverifikasi, dan siap mendampingi perjalanan Anda menemukan potensi terbaik melalui pendekatan yang manusiawi dan terarah.
                  <br /><br />
                  <span className="text-secondary font-medium">Klik pada foto profil untuk melihat detail dan pengalaman psikolog kami.</span>
                </p>

                <div className="hidden lg:flex items-center gap-4 text-sm font-bold text-primary-dark uppercase tracking-widest">
                  <span>Geser ke bawah</span>
                  <div className="w-12 h-[1px] bg-primary-dark/30 relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full w-1/2 bg-primary-dark"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>

          {/* Right: Staggered Masonry-style Grid */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={member.name}
                  className={`relative ${index % 2 !== 0 ? 'sm:mt-16' : 'sm:mb-16'}`}
                >
                  <SectionReveal direction="up" delay={0.1 + index * 0.1}>
                    <motion.div
                      className="group cursor-pointer block h-full"
                      whileHover="hover"
                      onClick={() => setSelectedMember(member)}
                    >
                      {/* Unified Card Container */}
                      <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.3)] group-hover:-translate-y-2 border border-white/60">

                        {/* Image */}
                        <motion.div
                          className="w-full h-full relative"
                          variants={{
                            hover: { scale: 1.05 }
                          }}
                          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            unoptimized
                            className="object-cover object-center"
                          />
                        </motion.div>

                        {/* Extended Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2B1C] via-[#1A2B1C]/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

                        {/* Aesthetic Border Frame Overlay */}
                        <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.5rem] transition-all duration-700 pointer-events-none z-10" />

                        {/* Hover Prompt - View Bio */}
                        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                          </div>
                        </div>

                        {/* Unified Text Content Inside Card */}
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start justify-end z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                          <div className="flex items-center gap-3 mb-3">
                            <span className="h-[2px] w-8 bg-secondary-light" />
                            <p className="text-secondary-light font-bold text-xs tracking-[0.2em] uppercase drop-shadow-sm">
                              {member.role}
                            </p>
                          </div>

                          <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-6 tracking-wide drop-shadow-md leading-tight line-clamp-3">
                            {member.fullName || member.name}
                          </h3>

                          {/* SIPP Badge - Aligned left */}
                          <div className="inline-flex items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-90 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                            <p className="text-white text-[10px] md:text-xs font-mono tracking-widest uppercase flex items-center gap-2.5 whitespace-nowrap">
                              <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-light opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                              </span>
                              <span className="truncate">SIPP: {member.sipp}</span>
                            </p>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  </SectionReveal>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bio Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-primary-dark/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col md:flex-row relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/50 backdrop-blur-md md:bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-full p-2.5 transition-colors"
                  aria-label="Tutup bio"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Left Side: Photo */}
                <div className="w-full md:w-5/12 h-[300px] md:h-auto relative bg-neutral-200 flex-shrink-0">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.fullName}
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                  {/* Gradient to smooth transition on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:hidden opacity-80" />
                </div>

                {/* Right Side: Bio Details */}
                <div className="w-full md:w-7/12 p-8 sm:p-10 md:p-12 overflow-y-auto custom-scrollbar">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary-dark text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                    {selectedMember.role}
                  </div>

                  <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-dark mb-2">
                    {selectedMember.fullName || selectedMember.name}
                  </h3>

                  <p className="text-neutral-500 font-mono text-xs sm:text-sm mb-8 tracking-widest uppercase">
                    SIPP: {selectedMember.sipp}
                  </p>

                  <div className="w-12 h-1 bg-secondary/30 rounded-full mb-8" />

                  {/* Profil / Bio Section */}
                  {selectedMember.bio && (
                    <div className="mb-8">
                      <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary">
                          <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                        </svg>
                        Profil
                      </h4>
                      <div className="prose prose-sm sm:prose-base prose-neutral max-w-none text-neutral-600">
                        <p className="leading-relaxed whitespace-pre-line">
                          {selectedMember.bio}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Pengalaman Section */}
                  {selectedMember.experiences && selectedMember.experiences.length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary">
                          <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.36-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm3-1.5a1.5 1.5 0 00-1.5 1.5v.127a48.596 48.596 0 016 0V5.25a1.5 1.5 0 00-1.5-1.5h-3z" clipRule="evenodd" />
                        </svg>
                        Pengalaman Profesional
                      </h4>
                      <ul className="space-y-3">
                        {selectedMember.experiences.map((exp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-neutral-600 leading-relaxed text-sm sm:text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(!selectedMember.bio && (!selectedMember.experiences || selectedMember.experiences.length === 0)) && (
                    <div className="text-center py-12">
                      <p className="text-neutral-400 italic">Informasi profil lengkap sedang diperbarui.</p>
                    </div>
                  )}

                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
