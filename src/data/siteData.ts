export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  priceStart: string;
  materials: string[];
  features: string[];
  imageUrl: string;
  popular?: boolean;
}

export interface RegionData {
  id: string;
  province: string;
  slug: string;
  cities: {
    name: string;
    slug: string;
    highlightAreas: string[];
    description: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'kitchenset' | 'livingroom' | 'bedroom' | 'office' | 'lainnya';
  categoryLabel: string;
  location: string;
  province: string;
  client: string;
  finishing: string;
  materials: string;
  duration: string;
  imageUrl: string;
  detailUrl?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const BRAND_INFO = {
  name: "GIBRAN INTERIOR",
  tagline: "Custom Interior & High-End Furniture Fabrication",
  phone: "+62 852-2357-9483",
  whatsappNumber: "6285223579483",
  email: "halo@gibraninterior.com",
  instagram: "@gibran_interior.id",
  tiktok: "@gibran_interiorid",
  threads: "@gibran_interior.id",
  socialMedia: {
    instagram: "https://www.instagram.com/gibran_interior.id?hvrq=MXRqejYycnduYWRqdw==",
    tiktok: "https://www.tiktok.com/@gibran_interiorid?_r=1&_t=ZS-9BfUiuqor26",
    threads: "https://www.threads.com/@gibran_interior.id"
  },
  address: "Jl. Nasional 3, Citatah, Cipatat, Bandung Barat, Jawa Barat, 40554 ID",
  rating: "4.9",
  reviewCount: "148",
  projectCompleted: "250+",
  yearsExperience: "8+",
  freeSurvey: true,
  warranty: "Garansi Material & Pengerjaan 1 Tahun"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "kitchen-set",
    slug: "kitchen-set-custom",
    title: "Kitchen Set Custom",
    shortDesc: "Dapur bersih & basah ergonomis dengan finishing HPL anti-panas/air, top table marmer/granite/solid surface, dan hardware slow-motion.",
    fullDesc: "Pembuatan kitchen set custom presisi disesuaikan dengan luas ruangan dan kebiasaan memasak Anda. Menggunakan multiplek meranti tebal 18mm standar ekspor yang tahan lembap dan anti rayap.",
    priceStart: "Rp 2.400.000 / m¹",
    materials: ["Multiplek Meranti 18mm", "Finishing HPL Taco / Cat Duco", "Engsel Slow-Motion Blum/Hettich", "Top Table Solid Surface / Granit Alam"],
    features: ["Free Rak Piring Stainless", "Free Rak Sendok & Bumbu", "LED Warm Strip Lighting", "Instalasi Cooker Hood & Sink"],
    imageUrl: "/images/custom-furniture/kitchen-set/kitchen-island-sage-01.webp",
    popular: true
  },
  {
    id: "wardrobe",
    slug: "wardrobe-lemari-custom",
    title: "Wardrobe & Walk-in Closet",
    shortDesc: "Lemari pakaian custom floor-to-ceiling dengan pintu geser/swing, kaca tempered bronzed/ribbed, laci aksesoris velvet, dan lampu otomatis.",
    fullDesc: "Maksimalkan ruang simpan pakaian dan aksesoris Anda dengan rancangan lemari custom terpadu. Dilengkapi pembagian kompartemen gantungan panjang, rak tas berlampu, dan laci jam tangan berlapis beludru.",
    priceStart: "Rp 2.300.000 / m¹",
    materials: ["Multiplek 18mm Grade A", "Pintu Aluminium Profil & Tempered Glass", "Laci Rel Double Track Soft-Close", "Inner HPL Fabric Texture"],
    features: ["Sensor Lampu LED Otomatis", "Laci Khusus Perhiasan & Jam", "Cermin Full Body Terintegrasi", "Gantungan Hidrolik Praktis"],
    imageUrl: "/images/custom-furniture/bedroom/bedroom-glass-wardrobe-vanity-02.webp",
    popular: true
  },
  {
    id: "backdrop-tv",
    slug: "backdrop-tv-partisi",
    title: "Backdrop TV & Wall Panel",
    shortDesc: "Pusat estetika ruang keluarga dengan kombinasi wood panel slat (kisi-kisi), aksen marmer bookmatched, indirect lighting, dan kabel tersembunyi rapi.",
    fullDesc: "Bikin ruang tamu atau keluarga tampil mewah layaknya hotel bintang lima. Desain backdrop TV custom dengan manajemen kabel tanpa terlihat (hidden cable management) dan credenza gantung.",
    priceStart: "Rp 1.950.000 / m²",
    materials: ["Kisi-kisi WPC / Solid Wood", "HPL Marmer Glossy / HPL Matte", "Ambalan Kayu & Rak Pajang", "LED Cove Lighting"],
    features: ["Hidden Cable Management", "Stopkontak Terintegrasi", "Credenza Gantung Slow Close", "Aksen Akustik Panel"],
    imageUrl: "/images/custom-furniture/tv-backdrop/backdrop-japandi-oak-02.webp"
  },
  {
    id: "bedroom",
    slug: "interior-kamar-tidur",
    title: "Dipan & Kamar Tidur Set",
    shortDesc: "Dipan tempat tidur terintegrasi storage laci, padded headboard kulit/kain lembut, meja nakas melayang, dan meja rias vanity aesthetic.",
    fullDesc: "Kamar tidur yang nyaman dan estetik meningkatkan kualitas istirahat Anda. Kami memproduksi dipan custom dengan storage tersembunyi di bawah matras serta headboard berbalut busa empuk.",
    priceStart: "Rp 2.100.000 / m¹",
    materials: ["Rangka Kayu Kokoh & Multiplek", "Headboard Busa Rebounded + Kain Kagawa/Fabric", "Finishing HPL Wood Grain Natural"],
    features: ["Laci Bawah Kasur Kapasitas Besar", "Nakas Gantung dengan Switch Lampu", "Cermin Rias Vanity LED"],
    imageUrl: "/images/custom-furniture/bedroom/bedroom-platform-headboard-01.webp"
  }
];

export const REGIONS: RegionData[] = [
  {
    id: "dki-jakarta",
    province: "DKI Jakarta",
    slug: "dki-jakarta",
    cities: [
      {
        name: "Jakarta Selatan",
        slug: "jakarta-selatan",
        highlightAreas: ["Pondok Indah", "Kemang", "Senopati", "Cilandak", "Kebayoran Baru", "Tebet", "Jagakarsa"],
        description: "Layanan pembuatan interior custom & kitchen set mewah untuk hunian, townhouse, dan apartemen di Jakarta Selatan."
      },
      {
        name: "Jakarta Barat",
        slug: "jakarta-barat",
        highlightAreas: ["Puri Indah", "Kebon Jeruk", "Tanjung Duren", "Citra Garden", "Green Lake City"],
        description: "Spesialis custom furniture minimalis & modern luxury untuk rumah residensial dan apartemen Jakarta Barat."
      },
      {
        name: "Jakarta Timur & Pusat",
        slug: "jakarta-timur-pusat",
        highlightAreas: ["Menteng", "Kelapa Gading", "Rawamangun", "Duren Sawit", "Cibubur"],
        description: "Fabrikasi furniture custom berkualitas tinggi langsung dari workshop ke lokasi Anda di Jakarta Pusat dan Timur."
      },
      {
        name: "Jakarta Utara",
        slug: "jakarta-utara",
        highlightAreas: ["PIK (Pantai Indah Kapuk)", "Pluit", "Sunter", "Kelapa Gading"],
        description: "Desain dan instalasi kitchen set tahan lembap dan interior apartemen tepi pantai di kawasan Jakarta Utara."
      }
    ]
  },
  {
    id: "jawa-barat",
    province: "Jawa Barat",
    slug: "jawa-barat",
    cities: [
      {
        name: "Bandung Raya & Cimahi",
        slug: "bandung-raya",
        highlightAreas: ["Dago", "Setiabudi", "Buah Batu", "Kota Baru Parahyangan (KBP)", "Summarecon Bandung", "Cimahi"],
        description: "Jasa interior dan furniture custom terpercaya di Bandung dengan material multiplek grade A dan garansi resmi."
      },
      {
        name: "Kota & Kab. Bekasi",
        slug: "bekasi",
        highlightAreas: ["Summarecon Bekasi", "Grand Galaxy City", "Harapan Indah", "Kemang Pratama", "Cikarang"],
        description: "Spesialis custom kitchen set dan lemari pakaian untuk perumahan baru dan renovasi rumah di Bekasi."
      },
      {
        name: "Bogor (Kota & Sentul)",
        slug: "bogor",
        highlightAreas: ["Sentul City", "Bogor Kota", "Cibinong", "Rancamaya", "Gunung Putri"],
        description: "Pengerjaan interior villa, hunian asri, dan custom furniture modern untuk kawasan Bogor dan Sentul."
      },
      {
        name: "Kota Depok",
        slug: "depok",
        highlightAreas: ["Margonda", "Cinere", "Sawangan", "Grand Depok City", "Cimanggis"],
        description: "Solusi furniture hemat ruang dan kitchen set estetik untuk rumah keluarga muda dan apartemen di Depok."
      }
    ]
  },
  {
    id: "banten",
    province: "Banten",
    slug: "banten",
    cities: [
      {
        name: "Tangerang Selatan (BSD & Bintaro)",
        slug: "tangerang-selatan",
        highlightAreas: ["BSD City", "Bintaro Jaya", "Alam Sutera", "Pamulang", "Ciputat"],
        description: "Layanan prioritas custom furniture premium untuk klaster-klaster modern di BSD City dan Bintaro Jaya."
      },
      {
        name: "Kota & Kab. Tangerang",
        slug: "tangerang",
        highlightAreas: ["Gading Serpong", "Lippo Karawaci", "Modernland", "Suvarna Sutera", "Cikupa"],
        description: "Kitchen set minimalis elegan, backdrop TV, dan interior custom terpasang rapi di area Tangerang."
      },
      {
        name: "Cilegon & Serang",
        slug: "cilegon-serang",
        highlightAreas: ["Serang Kota", "Cilegon", "Ciruas"],
        description: "Melayani proyek interior custom hunian pribadi dan kantor di wilayah Serang dan Cilegon."
      }
    ]
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. Kitchenset
  {
    id: "port-k1",
    title: "Kitchen Set Klasik Modern & Island",
    category: "kitchenset",
    categoryLabel: "Kitchenset",
    location: "Soreang, Bandung",
    province: "Jawa Barat",
    client: "Ibu Qisty",
    finishing: "HPL Taco Classic Profile & Granit Top Table",
    materials: "Multiplek Grade A 18mm Anti-Rayap",
    duration: "18 Hari Kerja",
    imageUrl: "/images/portfolio/kitchen-set/ibu-qisty-soreang-01.webp"
  },
  {
    id: "port-k2",
    title: "Kitchen Set Semi Klasik Prima Amerta",
    category: "kitchenset",
    categoryLabel: "Kitchenset",
    location: "Prima Amerta Residence, Soreang",
    province: "Jawa Barat",
    client: "Ibu Widya",
    finishing: "Cat Duco Semi-Gloss Off-White",
    materials: "Multiplek 18mm + Solid Surface Top Table",
    duration: "20 Hari Kerja",
    imageUrl: "/images/portfolio/kitchen-set/ibu-widya-soreang-01.webp"
  },
  {
    id: "port-k3",
    title: "Modern Japandi Kitchen Set & Mini Bar Island",
    category: "kitchenset",
    categoryLabel: "Kitchenset",
    location: "Cluster Navapark, BSD City",
    province: "Banten",
    client: "Bpk. Hendra S.",
    finishing: "HPL Taco Natural Oak & Sage Green Matte",
    materials: "Multiplek Meranti 18mm Anti-Lembap",
    duration: "18 Hari Kerja",
    imageUrl: "/images/custom-furniture/kitchen-set/kitchen-island-sage-01.webp"
  },
  {
    id: "port-k4",
    title: "Minimalist Kitchen Set L-Shape",
    category: "kitchenset",
    categoryLabel: "Kitchenset",
    location: "Kota Bali, Padalarang, Bandung Barat",
    province: "Jawa Barat",
    client: "Bpk. Dedi",
    finishing: "HPL Taco Warm Woodgrain & Textured White",
    materials: "Full Multiplek 18mm + Rel Slow-Motion",
    duration: "15 Hari Kerja",
    imageUrl: "/images/portfolio/kitchen-set/modern-01.webp"
  },
  {
    id: "port-k5",
    title: "Kitchen Set Semi Klasik Mewah",
    category: "kitchenset",
    categoryLabel: "Kitchenset",
    location: "Cihampelas, Bandung Barat",
    province: "Jawa Barat",
    client: "Ibu Grace",
    finishing: "HPL Textur Marmer & Aksesoris Gold Brass",
    materials: "Multiplek 18mm + Engsel Slow-Motion",
    duration: "16 Hari Kerja",
    imageUrl: "/images/portfolio/kitchen-set/semi-classic-01.webp"
  },

  // 2. Livingroom
  {
    id: "port-l1",
    title: "Luxury Fluted TV Backdrop & LED Ambiance",
    category: "livingroom",
    categoryLabel: "Livingroom",
    location: "Kota Baru Parahyangan, Bandung Barat",
    province: "Jawa Barat",
    client: "Bpk. Yanwar",
    finishing: "Wood Slat Panel & HPL Marmer Carara",
    materials: "Solid Plywood 18mm & LED Strip Warm",
    duration: "12 Hari Kerja",
    imageUrl: "/images/custom-furniture/tv-backdrop/backdrop-modern-fluted-01.webp"
  },
  {
    id: "port-l2",
    title: "Japandi Oak TV Console & Hidden Cable Storage",
    category: "livingroom",
    categoryLabel: "Livingroom",
    location: "Citatah, Cipatat, Bandung Barat",
    province: "Jawa Barat",
    client: "Bpk. Yanwar",
    finishing: "HPL Taco Warm Oak & Slat Wood",
    materials: "Multiplek 18mm Solid",
    duration: "10 Hari Kerja",
    imageUrl: "/images/custom-furniture/tv-backdrop/backdrop-japandi-oak-02.webp"
  },
  {
    id: "port-l3",
    title: "Modern Fireplace Backdrop & Marble Wall Panel",
    category: "livingroom",
    categoryLabel: "Livingroom",
    location: "Prima Amerta Residence, Soreang",
    province: "Jawa Barat",
    client: "Bapak Asep",
    finishing: "HPL High Gloss Marble & Black Metal Trim",
    materials: "Plywood Meranti 18mm",
    duration: "14 Hari Kerja",
    imageUrl: "/images/custom-furniture/tv-backdrop/backdrop-marmer-fireplace-03.webp"
  },
  {
    id: "port-l4",
    title: "Modern TV Backdrop Minimalis & Ambiance Light",
    category: "livingroom",
    categoryLabel: "Livingroom",
    location: "TKI 5, Bandung",
    province: "Jawa Barat",
    client: "Ibu Debbi",
    finishing: "HPL Concrete Grey & Strip Wood Acoustic",
    materials: "Multiplek 18mm Grade A",
    duration: "11 Hari Kerja",
    imageUrl: "/images/portfolio/tv-backdrop/tv-backdrop-01.webp"
  },

  // 3. Bedroom
  {
    id: "port-b1",
    title: "Full-Height Wardrobe & Vanity Make-up Desk",
    category: "bedroom",
    categoryLabel: "Bedroom",
    location: "Cimahi, Jawa Barat",
    province: "Jawa Barat",
    client: "Ibu Amie",
    finishing: "HPL White Ash Matte & Cermin Bevel",
    materials: "Plywood 18mm + Rel Double Track",
    duration: "15 Hari Kerja",
    imageUrl: "/images/portfolio/wardrobe/amie-cimahi-01.webp"
  },
  {
    id: "port-b2",
    title: "Master Sliding Wardrobe 3-Pintu",
    category: "bedroom",
    categoryLabel: "Bedroom",
    location: "Padalarang, Bandung Barat",
    province: "Jawa Barat",
    client: "Bpk. Darwin",
    finishing: "HPL Woodgrain Natural & List Aluminium Hitam",
    materials: "Multiplek 18mm + Rel Gantung Heavy Duty",
    duration: "16 Hari Kerja",
    imageUrl: "/images/portfolio/wardrobe/bpk-darwin-padalarang-01.webp"
  },
  {
    id: "port-b3",
    title: "Master Walk-In Closet with Bronze Tempered Glass",
    category: "bedroom",
    categoryLabel: "Bedroom",
    location: "Sarijadi, Bandung",
    province: "Jawa Barat",
    client: "Pak Ruben",
    finishing: "Aluminium Bronze Frame + Kaca Tempered + LED Strip",
    materials: "Plywood 18mm & Aksesoris Velvet",
    duration: "21 Hari Kerja",
    imageUrl: "/images/custom-furniture/bedroom/bedroom-glass-wardrobe-vanity-02.webp"
  },
  {
    id: "port-b4",
    title: "Platform Bed with Hidden Storage & Padded Headboard",
    category: "bedroom",
    categoryLabel: "Bedroom",
    location: "Gegerkalong, Bandung",
    province: "Jawa Barat",
    client: "Ibu Zuhria",
    finishing: "HPL Warm Walnut & Padded Fabric Headboard",
    materials: "Rangka Multiplek Solid 18mm",
    duration: "14 Hari Kerja",
    imageUrl: "/images/custom-furniture/bedroom/bedroom-platform-headboard-01.webp"
  },
  {
    id: "port-b5",
    title: "Minimalist Master Bedroom & Wardrobe Set",
    category: "bedroom",
    categoryLabel: "Bedroom",
    location: "Batujajar, Bandung Barat",
    province: "Jawa Barat",
    client: "Ibu Hani",
    finishing: "HPL Nordic Timber & Warm White",
    materials: "Multiplek Grade A 18mm",
    duration: "17 Hari Kerja",
    imageUrl: "/images/portfolio/bedroom/bedroom-01.webp"
  },

  // 4. Office
  {
    id: "port-o1",
    title: "Interior Toko & Etalase Display Komersial",
    category: "office",
    categoryLabel: "Office",
    location: "Antapani, Bandung",
    province: "Jawa Barat",
    client: "Ibu Maya",
    finishing: "HPL Walnut Woodgrain & Dark Grey Accent",
    materials: "Multiplek 18mm + Cable Grommet Metal + LED",
    duration: "14 Hari Kerja",
    imageUrl: "/images/portfolio/interior-komersial/ibu-maya-antapani-01.webp"
  },
  {
    id: "port-o2",
    title: "Executive Work Desk & Display Shelving Unit",
    category: "office",
    categoryLabel: "Office",
    location: "Antapani, Bandung",
    province: "Jawa Barat",
    client: "Ibu Maya",
    finishing: "HPL Industrial Concrete & Natural Teak",
    materials: "Multiplek Meranti 18mm",
    duration: "12 Hari Kerja",
    imageUrl: "/images/portfolio/interior-komersial/ibu-maya-antapani-02.webp"
  },
  {
    id: "port-o3",
    title: "Modern Working Space & Storage Cabinet Kantor",
    category: "office",
    categoryLabel: "Office",
    location: "Sarijadi, Bandung",
    province: "Jawa Barat",
    client: "Bpk. Bayu",
    finishing: "HPL Matte Charcoal & Light Oak",
    materials: "Multiplek 18mm Presisi + Rel Slow-Motion",
    duration: "10 Hari Kerja",
    imageUrl: "/images/portfolio/interior-komersial/ibu-maya-antapani-03.webp"
  },

  // 5. Lainnya
  {
    id: "port-x1",
    title: "Lemari Multifungsi Bawah Tangga & Rak Sepatu",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Sarijadi, Bandung",
    province: "Jawa Barat",
    client: "Ibu Icha",
    finishing: "HPL Matte White & Push-to-Open System",
    materials: "Multiplek 18mm Presisi Sudut Miring",
    duration: "9 Hari Kerja",
    imageUrl: "/images/portfolio/lemari-bawah-tangga/ibu-icha-sarijadi-01.webp"
  },
  {
    id: "port-x2",
    title: "Under-Stairs Hidden Storage & Display Cabinet",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Arcamanik, Bandung",
    province: "Jawa Barat",
    client: "Dara",
    finishing: "HPL Taco Natural Teak & White Gloss",
    materials: "Multiplek 18mm Khusus Bawah Tangga",
    duration: "10 Hari Kerja",
    imageUrl: "/images/portfolio/lemari-bawah-tangga/dara-arcamanik-01.webp"
  },
  {
    id: "port-x3",
    title: "Lemari Bawah Tangga Sudut Presisi",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Soreang, Bandung Barat",
    province: "Jawa Barat",
    client: "Pak Yuki",
    finishing: "HPL Warm Wood & Push-to-Open",
    materials: "Multiplek 18mm Tahan Lembap",
    duration: "8 Hari Kerja",
    imageUrl: "/images/portfolio/lemari-bawah-tangga/pak-yuki-soreang-01.webp"
  },
  {
    id: "port-x4",
    title: "Lemari Bawah Tangga & Cabinet Batujajar",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Batujajar, Bandung Barat",
    province: "Jawa Barat",
    client: "Herna",
    finishing: "HPL Matte White & Rel Double Track",
    materials: "Multiplek Meranti 18mm",
    duration: "9 Hari Kerja",
    imageUrl: "/images/portfolio/lemari-bawah-tangga/herna-batujajar-01.webp"
  },
  {
    id: "port-x5",
    title: "Semi & Full Home Custom Wardrobe Suite",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Subang, Jawa Barat",
    province: "Jawa Barat",
    client: "Ibu Via",
    finishing: "HPL Textured White Wood & Cermin Penuh",
    materials: "Multiplek 18mm Full Frame",
    duration: "20 Hari Kerja",
    imageUrl: "/images/portfolio/wardrobe/ibu-via-subang-01.webp"
  },
  {
    id: "port-x6",
    title: "Full Interior Living & Partition Residential",
    category: "lainnya",
    categoryLabel: "Lainnya",
    location: "Kota Baru Parahyangan, Bandung Barat",
    province: "Jawa Barat",
    client: "Bpk. Han",
    finishing: "Kombinasi Modern Wood & Marble Texture",
    materials: "Full Plywood Grade A 18mm",
    duration: "25 Hari Kerja",
    imageUrl: "/images/interior/real-estate/real-estate-kotabaru-parahyangan-tatar-naganingrum-01.webp"
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Konsultasi & Estimasi Awal",
    desc: "Diskusi kebutuhan desain, dimensi perkiraan ruangan, dan referensi gaya interior Anda. Tim kami memberikan estimasi anggaran awal yang transparan."
  },
  {
    step: "02",
    title: "Survei Lokasi & Pengukuran Presisi",
    desc: "Tim teknis kami datang langsung ke lokasi rumah/apartemen Anda di Jabar, DKI Jakarta, atau Banten untuk mengukur ruangan secara akurat dan cek instalasi utilitas."
  },
  {
    step: "03",
    title: "Desain 3D Render & Pemilihan Material",
    desc: "Kami buatkan visualisasi 3D realistis agar Anda bisa melihat hasil jadinya sebelum dibuat. Anda juga bebas memilih katalog contoh HPL, handle, dan top table."
  },
  {
    step: "04",
    title: "Fabrikasi di Workshop Sendiri",
    desc: "Proses produksi dilakukan oleh tukang kayu ahli di workshop kami dengan mesin pemotong presisi dan standar quality control ketat."
  },
  {
    step: "05",
    title: "Pengiriman, Instalasi Rapi, & Garansi",
    desc: "Pemasangan di lokasi dilakukan dengan rapi, bersih, dan tepat waktu. Dilindungi garansi pengerjaan dan hardware 1 tahun."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Berapa biaya pembuatan kitchen set atau furniture custom per meter?",
    answer: "Biaya custom furniture di Gibran Interior mulai dari Rp 1.950.000 hingga Rp 3.200.000 per meter lari/persegi, tergantung jenis finishing (HPL standar, HPL premium tekstur, atau Cat Duco), tipe top table (Solid Surface, Granite alam, Quadra), dan jenis hardware (soft-close standar vs Blum/Hettich). Kami selalu memberikan rincian RAB terbuka tanpa biaya tersembunyi.",
    category: "Harga & Biaya"
  },
  {
    question: "Apakah survei lokasi ke rumah saya dikenakan biaya?",
    answer: "Untuk seluruh wilayah DKI Jakarta, Jawa Barat (Bandung, Bekasi, Bogor, Depok), dan Banten (Tangerang, BSD, dsk), layanan survei pengukuran awal dan konsultasi tatap muka GRATIS setelah tahap estimasi awal disepakati.",
    category: "Layanan"
  },
  {
    question: "Material apa yang digunakan oleh Gibran Interior?",
    answer: "Kami HANYA menggunakan Multiplek/Plywood Meranti Grade A tebal 18mm (bukan serbuk kayu MDF atau partikel board yang mudah rapuh terkena air). Bagian dalam dilapisi melaminto atau HPL putih, dan finishing luar menggunakan HPL bermerek (Taco/Aica) atau Cat Duco polyurethane (PU) yang awet bertahun-tahun.",
    category: "Material"
  },
  {
    question: "Berapa lama proses pembuatan furniture custom?",
    answer: "Rata-rata waktu produksi di workshop adalah 14 hingga 25 hari kerja tergantung volume proyek. Proses instalasi di lokasi Anda biasanya hanya membutuhkan waktu 1 hingga 3 hari sehingga tidak mengganggu kenyamanan hunian Anda.",
    category: "Waktu Pengerjaan"
  },
  {
    question: "Apakah ada garansi setelah pengerjaan selesai?",
    answer: "Ya, kami memberikan Garansi Resmi 1 Tahun untuk struktur material dan fungsi engsel/rel hardware. Jika ada kendala seperti engsel kendur atau pintu tidak presisi, teknisi kami siap datang melakukan perbaikan.",
    category: "Garansi"
  }
];
