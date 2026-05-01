// ============================================================
// CONSTANTS — Holistic Psychology and Educare
// All website content centralized for easy management
// ============================================================

const DEFAULT_SITE_URL = "https://example.com";

const resolveSiteUrl = () => {
  const candidate = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!candidate) return DEFAULT_SITE_URL;

  try {
    const parsed = new URL(candidate);
    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
};

export const SITE_CONFIG = {
  name: "Holistic Psychology and Educare",
  tagline: "Know Yourself Before Choosing Your Path",
  description:
    "Pendekatan psikologi holistik untuk membantu Anda memahami potensi diri secara menyeluruh serta menentukan arah pendidikan dan karir dengan lebih tepat, sadar, dan bermakna.",
  siteUrl: resolveSiteUrl(),
  email: "holisticpsychologyeducare@gmail.com",
  whatsappDisplay: "085 784 012 354",
  whatsappNumber: "6285784012354",
  whatsappMessage:
    "Halo, saya ingin berkonsultasi mengenai layanan Holistic Psychology and Educare.",
  location: "Indonesia",
  social: {
    instagram: "https://instagram.com/holisticpsyeducare",
  },
};

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
];

export const PILLARS = [
  {
    title: "Holistic",
    description:
      "Memahami individu sebagai satu kesatuan utuh dari berbagai aspek kehidupan",
    icon: "Orbit" as const,
  },
  {
    title: "Scientific",
    description:
      "Menggunakan metode psikologi yang terstandar, objektif, dan terpercaya",
    icon: "FlaskConical" as const,
  },
  {
    title: "Educare",
    description:
      "Membantu menggali dan mengembangkan potensi terbaik dalam diri individu",
    icon: "Sparkles" as const,
  },
];

export const VISION =
  "Menjadi mitra terpercaya dalam pengembangan potensi individu melalui pendekatan psikologi yang holistik, ilmiah, dan berorientasi masa depan.";

export const MISSIONS = [
  "Memberikan layanan asesmen psikologis yang komprehensif dan profesional",
  "Membantu individu mengenali potensi diri secara lebih mendalam",
  "Memberikan rekomendasi pendidikan dan pengembangan diri yang objektif dan aplikatif",
  "Mendukung peserta didik, orang tua, dan institusi dalam pengambilan keputusan yang tepat",
  "Mengembangkan pendekatan edukasi yang berpusat pada individu",
];

export const PHILOSOPHIES = [
  {
    title: "Holistic",
    description:
      "Kami melihat individu sebagai kesatuan utuh yang terdiri dari aspek intelektual, emosional, karakter, nilai, dan pengalaman hidup yang saling terhubung.",
    icon: "CircleDot" as const,
  },
  {
    title: "Psychology",
    description:
      "Setiap proses asesmen dan analisis didasarkan pada pendekatan psikologi ilmiah yang objektif, terstandar, dan profesional.",
    icon: "Brain" as const,
  },
  {
    title: "Educare",
    description:
      "Kami percaya bahwa setiap individu memiliki potensi dalam dirinya, dan tugas kami adalah membantu mengeluarkan serta mengembangkannya secara optimal.",
    icon: "GraduationCap" as const,
  },
];

export const PAIN_POINTS = [
  "Memilih jurusan tanpa mengenali potensi diri",
  "Keputusan pendidikan yang tidak sesuai minat dan kemampuan",
  "Kurangnya pemahaman terhadap karakter dan arah masa depan",
];

export const SERVICES = [
  {
    title: "Asesmen psikologis",
    description:
      "Mengidentifikasi kemampuan, minat, karakter, serta potensi individu melalui metode yang terstandar.",
    icon: "ClipboardCheck" as const,
  },
  {
    title: "Konseling",
    description:
      "Membantu individu memahami diri, mengatasi tantangan, serta mengembangkan potensi secara optimal.",
    icon: "HeartHandshake" as const,
  },
  {
    title: "Psikoedukasi",
    description:
      "Memberikan edukasi dan pemahaman mendalam mengenai berbagai aspek psikologis untuk pengembangan diri.",
    icon: "Route" as const,
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Konsultasi Awal",
    description: "Memahami kebutuhan dan tujuan individu secara menyeluruh",
    icon: "MessageCircle" as const,
  },
  {
    step: 2,
    title: "Asesmen Psikologis",
    description:
      "Melakukan pengukuran potensi dan karakter menggunakan metode ilmiah",
    icon: "FileSearch" as const,
  },
  {
    step: 3,
    title: "Analisis Hasil",
    description:
      "Mengolah dan menginterpretasikan data secara mendalam dan objektif",
    icon: "BarChart3" as const,
  },
  {
    step: 4,
    title: "Rekomendasi & Pendampingan",
    description:
      "Memberikan arahan yang aplikatif serta pendampingan berkelanjutan",
    icon: "Compass" as const,
  },
];

export const ADVANTAGES = [
  {
    title: "Pendekatan Holistik",
    description:
      "Tidak hanya melihat hasil tes, tetapi memahami individu secara menyeluruh",
    icon: "Layers" as const,
  },
  {
    title: "Berbasis Psikologi Ilmiah",
    description:
      "Menggunakan metode terstandar yang objektif dan terpercaya",
    icon: "Microscope" as const,
  },
  {
    title: "Analisis Mendalam",
    description:
      "Hasil tidak hanya berupa data, tetapi insight yang mudah dipahami",
    icon: "SearchCheck" as const,
  },
  {
    title: "Rekomendasi Aplikatif",
    description: "Dapat langsung digunakan dalam pengambilan keputusan",
    icon: "Lightbulb" as const,
  },
  {
    title: "Berorientasi Masa Depan",
    description: "Membantu merancang pendidikan dan karir jangka panjang",
    icon: "Rocket" as const,
  },
  {
    title: "Pendekatan Personal",
    description:
      "Setiap individu diperlakukan secara unik dan tidak diseragamkan",
    icon: "Fingerprint" as const,
  },
];

export const AUDIENCES = [
  {
    title: "Sekolah & Guru BK",
    description:
      "Membantu keputusan strategis dalam pembagian kelas, penjurusan pendidikan, dan perancangan program bimbingan klasikal.",
    icon: "Building2" as const,
  },
  {
    title: "Peserta Didik & Orang Tua",
    description:
      "Menerima laporan individual yang memuat profil potensi dan rekomendasi pengembangan yang jelas.",
    icon: "Users" as const,
  },
];

export const AUDIENCE_OUTPUTS = [
  {
    title: "Output untuk Sekolah & Guru BK",
    items: [
      "Membantu keputusan strategis pembagian kelas.",
      "Mendukung proses penjurusan pendidikan yang lebih tepat.",
      "Menjadi dasar perancangan program bimbingan klasikal.",
      "Meningkatkan citra positif sekolah di mata masyarakat.",
    ],
    summary:
      "Data asesmen dirancang agar langsung dapat digunakan sebagai dasar kebijakan akademik dan layanan bimbingan di sekolah.",
    deliveryFormat: "Rekapitulasi Hasil Psikotes",
  },
  {
    title: "Output Laporan Individual",
    items: [
      "Skor IQ",
      "Dinamika kepribadian",
      "Bakat dominan",
      "Rekomendasi taktis terkait gaya belajar yang paling efektif",
      "Jalur karier/studi lanjut yang sesuai dengan potensi bawaan",
    ],
    summary:
      "Laporan individual membantu peserta didik dan orang tua memahami potensi diri secara lebih utuh untuk pengambilan keputusan pendidikan dan karier.",
    deliveryFormat: "Hardcopy (Laporan Resmi)",
  },
];



export const TESTIMONIALS = [
  {
    quote:
      "Saya jadi lebih memahami potensi diri dan lebih yakin dalam menentukan jurusan kuliah.",
    name: "A.R.",
    role: "Siswa SMA",
    image: "/images/team/dila_20230131-2023-0550-opt.webp",
  },
  {
    quote:
      "Hasil asesmen sangat membantu kami sebagai orang tua dalam mendukung anak kami.",
    name: "B.S.",
    role: "Orang Tua",
    image: "/images/team/izzah_20230005-2025-02-1031-opt.webp",
  },
  {
    quote:
      "Pendekatannya profesional dan mudah dipahami, sangat membantu dalam perencanaan karir.",
    name: "C.D.",
    role: "Mahasiswa",
    image: "/images/team/rista_20190930-2023-0368-opt.webp",
  },
];

export const SCHOOL_PROGRAMS = [
  {
    id: "program-1",
    name: "Program Psikotes 1",
    priceReguler: "Rp159.000",
    priceKolektif: "Rp129.000",
    isPopular: false,
    components: [
      "Skor Intelegensi (IQ)",
      "Analisa Gaya Belajar",
      "Analisa Kepribadian",
    ],
    benefits: [
      "Laporan Hasil Pemeriksaan Psikologis",
      "Rekapitulasi Hasil Psikotes",
    ]
  },
  {
    id: "program-2",
    name: "Program Psikotes 2",
    priceReguler: "Rp209.000",
    priceKolektif: "Rp169.000",
    isPopular: false,
    components: [
      "Skor Intelegensi (IQ)",
      "Analisa Gaya Belajar",
      "Analisa Kepribadian",
      "Analisa Arah Peminatan",
    ],
    benefits: [
      "Laporan Hasil Pemeriksaan Psikologis",
      "Rekapitulasi Hasil Psikotes",
      "Tidak ada kenaikan harga selama 5 tahun",
    ]
  },
  {
    id: "program-3",
    name: "Program Psikotes 3",
    priceReguler: "Rp249.000",
    priceKolektif: "Rp199.000",
    isPopular: true,
    components: [
      "Skor Intelegensi (IQ)",
      "Analisa Gaya Belajar",
      "Analisa Kepribadian",
      "Analisa Arah Peminatan",
    ],
    benefits: [
      "Laporan Hasil Pemeriksaan Psikologis",
      "Rekapitulasi Hasil Psikotes",
      "Tidak ada kenaikan harga selama 5 tahun",
      "Gratis Konten untuk Media Sosial",
      "Penyampaian Hasil oleh Psikolog",
    ]
  }
];

export const ADDITIONAL_SERVICES = [
  "Gratis Asesmen Potential Review untuk Guru / Tenaga Kependidikan"
];
