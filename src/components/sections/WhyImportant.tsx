"use client";

import { motion } from "framer-motion";
import { HelpCircle, AlertCircle, Compass, CheckCircle2 } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";

const PAIN_POINTS = [
  {
    id: 1,
    title: "Salah Pilih Jurusan",
    description: "Memilih jurusan tanpa mengenali potensi diri yang sesungguhnya. Hal ini sering memicu hilangnya motivasi belajar.",
    icon: HelpCircle,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    id: 2,
    title: "Tidak Sesuai Minat",
    description: "Keputusan pendidikan yang hanya didasarkan pada tren, bukan pada minat dan kemampuan bawaan yang otentik.",
    icon: AlertCircle,
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    id: 3,
    title: "Arah Karir Kabur",
    description: "Kurangnya pemahaman terhadap karakter diri berujung pada arah masa depan yang kabur dan penuh keraguan.",
    icon: Compass,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function WhyImportant() {
  return (
    <section id="tantangan-solusi" className="py-24 md:py-32 bg-[#faf9f8] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top: Center Aligned Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <SectionReveal direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-red-600 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm border border-neutral-100">
              <AlertCircle className="w-4 h-4" />
              Tantangan Utama
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-8">
              Mengapa Memahami Diri <br className="hidden md:block" />
              <span className="text-neutral-400 font-serif italic font-normal">Sangat Penting?</span>
            </h2>
            
            <p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Banyak individu terjebak dalam rutinitas tanpa arah yang pasti. Ketidaktahuan akan potensi diri sendiri adalah akar dari kebingungan dalam menentukan langkah pendidikan dan karir.
            </p>
          </SectionReveal>
        </div>

        {/* Middle: 3-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PAIN_POINTS.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <SectionReveal key={item.id} direction="up" delay={0.1 + index * 0.1}>
                <motion.div 
                  className="bg-white rounded-[2rem] p-10 h-full flex flex-col items-center text-center border border-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] cursor-default transition-colors duration-500 hover:border-neutral-100 group"
                  whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${item.bg} ${item.color}`}>
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-bold text-2xl text-primary-dark mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-neutral-500 leading-relaxed text-base">
                    {item.description}
                  </p>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>

        {/* Bottom: Full-Width Solution Banner */}
        <SectionReveal direction="up" delay={0.4}>
          <motion.div 
            className="relative w-full rounded-[2.5rem] bg-primary-dark p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 group"
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.5 }}
          >
            {/* Elegant Background Glows */}
            <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] bg-secondary/20 blur-[120px] rounded-full pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-[-50%] left-[-10%] w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 lg:max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/20 text-secondary-light text-xs font-bold tracking-wide uppercase mb-6 border border-secondary/30 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4" />
                Solusi Kami
              </div>
              
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Keputusan Terarah <br className="hidden lg:block"/> & Bermakna
              </h3>
              
              <div className="w-20 h-1.5 bg-gradient-to-r from-secondary to-accent rounded-full mb-8 mx-auto lg:mx-0" />
            </div>
            
            <div className="relative z-10 lg:w-1/3 text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/10 pt-10 lg:pt-0 lg:pl-12">
              <p className="text-neutral-300 text-lg md:text-xl leading-relaxed font-serif italic mb-8">
                &ldquo;Kami hadir untuk membantu Anda memahami diri secara lebih mendalam, sehingga setiap langkah yang diambil menjadi lebih pasti.&rdquo;
              </p>

            </div>
          </motion.div>
        </SectionReveal>

      </div>
    </section>
  );
}
