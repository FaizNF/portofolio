// Portfolio Data Store for Faiz Nur Fakhri
// Bilingual (English & Indonesian)

export const portfolioData = {
  profile: {
    name: "Faiz Nur Fakhri",
    title: {
      en: "Software Engineer & Full-Stack Developer",
      id: "Software Engineer & Full-Stack Developer"
    },
    subtitle: {
      en: "Specializing in Laravel, Vue.js, and Systems Architecture",
      id: "Spesialisasi Laravel, Vue.js, dan Arsitektur Sistem"
    },
    location: {
      en: "Depok, West Java, Indonesia",
      id: "Depok, Jawa Barat, Indonesia"
    },
    email: "Faiz.swh@gmail.com",
    phone: "+62 813-1846-4206",
    statusBadge: {
      en: "Available for Engineering Roles",
      id: "Siap untuk Posisi Engineering"
    },
    cvFiles: {
      en: "Faiz_Nur_Fakhri_CV.pdf",
      id: "CV_Faiz_Nur_Fakhri_ID.pdf"
    },
    socials: {
      github: "https://github.com",
      email: "mailto:Faiz.swh@gmail.com",
      whatsapp: "https://wa.me/6281318464206"
    },
    summary: {
      en: "Software Engineer and Computer Science graduate (GPA 3.75/4.00) with hands-on experience designing, developing, and deploying full-stack web applications using Laravel, Vue.js, PHP, and MySQL. Successfully engineered an enterprise inventory and distribution management system from scratch in an agile 2-person development team, increasing operational tracking efficiency by 50%. Nationally certified Senior Computer Network Technician (BNSP) with solid foundations in embedded systems (C++/Arduino), system diagnostics, and network architecture. Proven track record of 3+ years delivering technical instruction and code mentorship to 50+ students daily.",
      id: "Software Engineer dan lulusan Sistem Komputer (IPK 3,75/4,00) dengan pengalaman praktis dalam merancang, mengembangkan, dan mengimplementasikan aplikasi web full-stack menggunakan Laravel, Vue.js, PHP, dan MySQL. Berhasil membangun sistem manajemen inventaris dan distribusi skala enterprise dari awal dalam tim pengembang agile 2 orang, meningkatkan efisiensi pelacakan operasional hingga 50%. Memiliki sertifikasi nasional Teknisi Utama Jaringan Komputer (BNSP) dengan fondasi kuat pada sistem tertanam (C++/Arduino), diagnostik sistem, dan arsitektur jaringan. Berpengalaman selama 3+ tahun memberikan instruksi teknis serta bimbingan kode kepada 50+ mahasiswa setiap hari."
    },
    highlights: [
      {
        metric: "50%",
        label: {
          en: "Tracking Efficiency Increase",
          id: "Peningkatan Efisiensi Pelacakan"
        },
        desc: {
          en: "Replaced manual spreadsheets with a validated relational system at PT Rekayasa Engineering",
          id: "Menggantikan spreadsheet manual dengan sistem relasional tervalidasi di PT Rekayasa Engineering"
        }
      },
      {
        metric: "3.75 / 4.00",
        label: {
          en: "Graduated with Distinction",
          id: "Lulus dengan Predikat Sangat Memuaskan"
        },
        desc: {
          en: "Bachelor of Computer Science (S.Kom.) in Computer Systems, Universitas Gunadarma",
          id: "Sarjana Komputer (S.Kom.) Sistem Komputer, Universitas Gunadarma"
        }
      },
      {
        metric: "BNSP Certified",
        label: {
          en: "Senior Network Technician",
          id: "Teknisi Utama Jaringan Komputer"
        },
        desc: {
          en: "National Certification (TIK.705.07126.2025) valid 2025–2028",
          id: "Sertifikasi Nasional (TIK.705.07126.2025) berlaku 2025–2028"
        }
      },
      {
        metric: "3+ Years",
        label: {
          en: "Technical Instruction & Leadership",
          id: "Instruksi Teknis & Kepemimpinan Lab"
        },
        desc: {
          en: "Mentoring 50+ students daily across embedded systems and computer architecture at ELKOM Lab",
          id: "Membimbing 50+ mahasiswa setiap hari di sistem tertanam & arsitektur komputer di Lab ELKOM"
        }
      }
    ]
  },

  projects: [
    {
      id: "rekayasa-inventory",
      featured: true,
      category: "Full-Stack Web Engineering",
      badge: {
        en: "Kemnaker Certified (\"Sangat Baik\")",
        id: "Sertifikasi Kemnaker (\"Sangat Baik\")"
      },
      title: {
        en: "Enterprise Inventory & Distribution Management System",
        id: "Sistem Manajemen Inventaris & Distribusi Skala Enterprise"
      },
      organization: "PT Rekayasa Engineering",
      period: "Dec 2025 – Jun 2026",
      tagline: {
        en: "Production-ready inventory management system built from scratch in a 2-developer agile team",
        id: "Sistem inventaris siap produksi yang dibangun dari awal dalam tim agile 2 pengembang"
      },
      description: {
        en: "Architected and delivered a production-ready enterprise inventory and distribution system to modernize operational tracking for corporate, project, and divisional assets. Transformed company operations from error-prone manual spreadsheets into a centralized, transactional web platform.",
        id: "Merancang dan merilis sistem inventaris dan distribusi skala enterprise untuk memodernisasi pelacakan aset operasional korporat, proyek, dan divisi. Mentransformasikan operasional perusahaan dari spreadsheet manual yang rentan kesalahan ke platform web transaksional terpusat."
      },
      impactPoints: {
        en: [
          "Delivered full-stack MVC architecture using PHP, Laravel, Vue.js, and MySQL in a high-velocity 2-developer squad.",
          "Engineered transactional modules for real-time stock logging, item borrowing workflows, and role-based approval pipelines covering corporate, project, and divisional operations.",
          "Increased inventory tracking and resource allocation efficiency by 50% through automated audit trails and structured data validation.",
          "Collaborated directly with business stakeholders to translate operational bottlenecks into technical specifications, normalized schemas, and responsive UI components.",
          "Received the highest performance rating of 'Sangat Baik' (Excellent) under the certified Ministry of Manpower (Kemnaker) internship program."
        ],
        id: [
          "Menerapkan arsitektur full-stack MVC dengan PHP, Laravel, Vue.js, dan MySQL dalam tim inti 2 pengembang.",
          "Mengembangkan modul transaksional untuk pencatatan stok real-time, alur kerja peminjaman barang, dan sistem persetujuan berbasis peran (role-based approval) untuk korporat, proyek, dan divisi.",
          "Meningkatkan efisiensi pelacakan inventaris dan alokasi sumber daya hingga 50% melalui jejak audit otomatis dan validasi data terstruktur.",
          "Berkolaborasi langsung dengan pemangku kepentingan (stakeholder) bisnis untuk memetakan kendala operasional menjadi spesifikasi teknis, skema ternormalisasi, dan UI responsif.",
          "Meraih predikat penilaian kinerja tertinggi 'Sangat Baik' dalam program magang bersertifikat Kementerian Ketenagakerjaan (Kemnaker)."
        ]
      },
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript (ES6+)", "Tailwind CSS", "RESTful APIs", "MVC Architecture"],
      architectureDetails: {
        pattern: "Full-Stack MVC (Model-View-Controller)",
        database: "Relational MySQL with normalized schemas, transaction logs & role-based access control",
        frontend: "Reactive Vue.js single-page modules for dynamic borrowing & approval tables",
        backend: "Laravel RESTful controllers with form request validation & middleware auth guards"
      }
    },
    {
      id: "sentrapixel",
      featured: true,
      category: "Production Web Platform & E-Commerce",
      liveUrl: "https://sentrapixel.com",
      badge: {
        en: "Live Production Platform",
        id: "Platform Produksi Aktif"
      },
      title: {
        en: "SentraPixel: Digital Agency & E-Commerce Web Engineering Platform",
        id: "SentraPixel: Platform Rekayasa Web Digital Agency & E-Commerce"
      },
      organization: "SentraPixel (sentrapixel.com)",
      period: "2024 – Present",
      tagline: {
        en: "High-performance agency platform with client progress tracker and payment gateway integration",
        id: "Platform agensi web performa tinggi dengan pelacak progres klien dan gateway pembayaran"
      },
      description: {
        en: "Architected and deployed a commercial web engineering platform for SentraPixel digital agency. Features automated client onboarding, real-time project milestone tracking via JSON data stores, responsive Tailwind UI, and payment checkout integration with Mayar and Midtrans.",
        id: "Merancang dan merilis platform web komersial untuk agensi digital SentraPixel. Dilengkapi onboarding klien otomatis, pelacakan progres proyek real-time via data store JSON, antarmuka Tailwind responsif, serta integrasi checkout pembayaran Mayar dan Midtrans."
      },
      impactPoints: {
        en: [
          "Engineered client portal with dynamic real-time progress tracker, invoice generation, and milestone delivery monitoring.",
          "Integrated Indonesian payment gateways (Mayar and Midtrans) supporting QRIS, Virtual Accounts, and e-wallets.",
          "Optimized asset delivery and core web vitals achieving < 1.2s First Contentful Paint and 98+ mobile Lighthouse scores.",
          "Built responsive, accessible UI modules with semantic HTML5, modern CSS/Tailwind, and vanilla JavaScript."
        ],
        id: [
          "Mengembangkan portal klien dengan pelacak progres real-time, penerbitan invoice otomatis, dan pemantauan milestone.",
          "Mengintegrasikan payment gateway Indonesia (Mayar dan Midtrans) untuk QRIS, Virtual Account, dan dompet digital.",
          "Mengoptimasi pengiriman aset dan web vitals sehingga meraih First Contentful Paint < 1,2 detik dan skor Lighthouse 98+.",
          "Membangun antarmuka responsif dan aksesibel menggunakan HTML5 semantik, Tailwind CSS, dan vanilla JavaScript."
        ]
      },
      technologies: ["PHP", "JavaScript (ES6+)", "Tailwind CSS", "Mayar / Midtrans API", "JSON Data Store", "Responsive Web Design"]
    },
    {
      id: "gamutdesk",
      featured: true,
      category: "Web Application & Color Science",
      liveUrl: "https://gamutdesk.com",
      badge: {
        en: "Live Web Utility (57/57 Vitest Tests)",
        id: "Utilitas Web Aktif (57/57 Tes Vitest)"
      },
      title: {
        en: "GamutDesk: Display Gamut, Color Space & Accessibility Engine",
        id: "GamutDesk: Engine Gamut Layar, Ruang Warna & Aksesibilitas"
      },
      organization: "GamutDesk (gamutdesk.com)",
      period: "2025 – Present",
      tagline: {
        en: "Client-side display color gamut testing, OKLCH converter, and APCA contrast calculator",
        id: "Pengujian gamut warna layar sisi klien, konverter OKLCH, dan kalkulator kontras APCA"
      },
      description: {
        en: "Engineered an in-browser color space and display profiling utility built with Next.js App Router and TypeScript. Runs 100% client-side with zero tracking, computing sRGB, Display P3, and Rec. 2020 gamut coverage, color difference formulas (ΔE*00, ΔE_ITP), and APCA accessibility compliance.",
        id: "Membangun utilitas profiling gamut layar dan ruang warna berbasis peramban menggunakan Next.js App Router dan TypeScript. Bekerja 100% di sisi klien tanpa pelacakan data, menghitung cakupan sRGB, Display P3, Rec. 2020, formula delta warna (ΔE*00, ΔE_ITP), dan kepatuhan kontras APCA."
      },
      impactPoints: {
        en: [
          "Engineered multi-space color conversion algorithms for sRGB, Display P3, Rec. 2020, CIE Lab, and OKLCH in pure TypeScript.",
          "Implemented APCA (Accessible Perceptual Contrast Algorithm) scoring alongside legacy WCAG 2.1 ratio checks.",
          "Authored comprehensive unit test suite with 57/57 passing Vitest assertions ensuring mathematical accuracy.",
          "Offloaded intensive delta-E calculations to Web Workers to maintain 60 FPS UI responsiveness during real-time color sweeps."
        ],
        id: [
          "Mengembangkan algoritma konversi multi-ruang warna untuk sRGB, Display P3, Rec. 2020, CIE Lab, dan OKLCH murni TypeScript.",
          "Mengimplementasikan kalkulasi kontras APCA (Accessible Perceptual Contrast Algorithm) dan verifikasi rasio WCAG 2.1.",
          "Menyusun rangkaian unit test komprehensif dengan 57/57 tes Vitest lulus untuk menjamin akurasi matematis.",
          "Mengalihkan komputasi berat delta-E ke Web Workers guna menjaga responsivitas UI tetap stabil pada 60 FPS."
        ]
      },
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Workers", "Vitest", "Color Science (OKLCH / APCA)"]
    },
    {
      id: "weeklytimecardcalc",
      featured: true,
      category: "Financial SaaS & Web Utility",
      liveUrl: "https://weeklytimecardcalc.com",
      badge: {
        en: "Live SaaS (FLSA § 778 Compliant)",
        id: "SaaS Aktif (Kepatuhan FLSA § 778)"
      },
      title: {
        en: "Weekly Time Card Calculator: FLSA Overtime & Payroll SaaS",
        id: "Kalkulator Kartu Jam Kerja Mingguan: SaaS Payroll & Lembur FLSA"
      },
      organization: "WeeklyTimeCardCalc (weeklytimecardcalc.com)",
      period: "2024 – Present",
      tagline: {
        en: "Zero-latency payroll calculation engine with military time support, breaks deduction, and instant PDF export",
        id: "Engine kalkulasi payroll tanpa latensi dengan dukungan format waktu militer, potongan istirahat, dan ekspor PDF"
      },
      description: {
        en: "Engineered a production payroll utility serving international hourly employees and HR administrators. Implements United States FLSA § 778 overtime regulations (1.5x daily >8h and weekly >40h thresholds), configurable lunch break deductions, local storage persistence, and print/PDF timesheet generation.",
        id: "Membangun utilitas payroll berbasis web untuk pekerja per jam dan staf administrasi HR. Mengimplementasikan regulasi lembur FLSA AS § 778 (tarif 1,5x harian >8 jam dan mingguan >40 jam), potongan jam istirahat fleksibel, penyimpanan lokal peramban, dan cetak PDF rekap lembar jam kerja."
      },
      impactPoints: {
        en: [
          "Programmed exact overtime logic compliant with standard and California double-time wage regulations.",
          "Implemented local client-side state caching allowing users to resume timesheet entries without data loss.",
          "Built responsive table interface with keyboard-accessible navigation and one-click printable reports.",
          "Optimized SEO metadata, schema.org structured markup, and robots/sitemap indexing across Google and Bing."
        ],
        id: [
          "Memprogram logika lembur akurat sesuai regulasi upah standar maupun ketentuan double-time California.",
          "Menerapkan penyimpanan status lokal peramban (client-side caching) agar pengisian data tidak hilang saat ditutup.",
          "Merancang antarmuka tabel responsif dengan navigasi ramah keyboard dan ekspor laporan cetak sekali klik.",
          "Mengoptimasi metadata SEO, skema terstruktur schema.org, serta pengindeksan Google dan Bing."
        ]
      },
      technologies: ["JavaScript (Vanilla ES6+)", "HTML5", "CSS3 / Custom Utility", "Local Storage API", "Print CSS", "Technical SEO"]
    },
    {
      id: "mutiara-kursus",
      featured: true,
      category: "EdTech & Full-Stack Web Platform",
      badge: {
        en: "Academic Platform (16 Sessions + Locked Exam)",
        id: "Platform Akademik (16 Pertemuan + Ujian Terkunci)"
      },
      title: {
        en: "Academic Course Management & Online Examination System",
        id: "Sistem Manajemen Kursus Akademik & Ujian Online Terkunci"
      },
      organization: "LKP Mutiara Komputer",
      period: "2024",
      tagline: {
        en: "Comprehensive academic training system with photo-verified attendance tracking and anti-cheat exam engine",
        id: "Sistem pelatihan akademik terpadu dengan absensi verifikasi foto dan engine ujian anti-curang"
      },
      description: {
        en: "Engineered an integrated course administration and online exam system for LKP Mutiara Komputer. Features a strict 16-session curriculum attendance workflow with webcam photo capture, computerized test engine with window-blur detection and countdown lock, automated grading, and official PDF certificate and revenue report generation via FPDF.",
        id: "Mengembangkan sistem administrasi kursus dan ujian online terpadu untuk LKP Mutiara Komputer. Dilengkapi alur absensi 16 sesi dengan tangkapan foto webcam, engine ujian komputer dengan deteksi blur jendela dan penguncian waktu, penilaian otomatis, serta pencetakan sertifikat dan laporan keuangan PDF via FPDF."
      },
      impactPoints: {
        en: [
          "Engineered attendance tracking system enforcing 16 sequential syllabus sessions with student webcam photo verification.",
          "Built secure 90-minute online exam engine featuring auto-submission upon timeout and browser window-blur anti-cheat logging.",
          "Automated grading calculations across multiple question categories, eliminating manual exam correction overhead.",
          "Implemented FPDF document generators producing formal completion certificates and institutional revenue ledgers."
        ],
        id: [
          "Mengembangkan modul absensi terstruktur untuk 16 pertemuan silabus disertai verifikasi foto webcam peserta didik.",
          "Membangun sistem ujian online 90 menit dengan pengumpulan otomatis saat waktu habis dan pencatat pelanggaran anti-curang.",
          "Mengotomatisasi kalkulasi penilaian di berbagai kategori soal sehingga menghapus beban koreksi manual instruktur.",
          "Mengimplementasikan generator PDF berbasis FPDF untuk penerbitan sertifikat kelulusan resmi dan laporan rekap pendapatan."
        ]
      },
      technologies: ["PHP", "MySQL", "JavaScript", "FPDF", "Webcam API", "CSS3 / Bootstrap", "Role-Based Access Control"]
    },
    {
      id: "mutiara-koperasi",
      featured: true,
      category: "Financial Management & Enterprise Web Application",
      badge: {
        en: "Financial Ledger & Loan System",
        id: "Sistem Pembukuan & Pinjaman Keuangan"
      },
      title: {
        en: "KoperasiHub: Financial Savings & Loan Management System",
        id: "KoperasiHub: Sistem Manajemen Keuangan Simpan Pinjam Koperasi"
      },
      organization: "Koperasi Mutiara Komputer",
      period: "2024",
      tagline: {
        en: "Multi-tier cooperative accounting application managing member deposits, loan disbursements, and interest ledgers",
        id: "Aplikasi akuntansi koperasi multi-level untuk simpanan anggota, pencairan pinjaman, dan buku besar bunga"
      },
      description: {
        en: "Architected a full-stack cooperative financial management system using Laravel and MySQL. Digitized cooperative operations by tracking principal, mandatory, and voluntary member savings, loan amortization schedules with automated penalty calculations, dividend distribution (SHU), and printable accounting journals.",
        id: "Merancang sistem manajemen keuangan koperasi full-stack menggunakan Laravel dan MySQL. Mendigitalkan operasional koperasi dengan mencatat simpanan pokok, wajib, dan sukarela, jadwal angsuran pinjaman dengan kalkulasi denda otomatis, pembagian SHU, dan jurnal akuntansi siap cetak."
      },
      impactPoints: {
        en: [
          "Architected relational schema in MySQL for member savings portfolios, active credit balances, and transaction logs.",
          "Programmed financial calculation algorithms for declining/flat interest amortization, late penalty accruals, and SHU dividend splits.",
          "Engineered role-based access control protecting cashier transactions, manager approvals, and audit log reviews.",
          "Produced comprehensive operational manual and automated financial reports ready for cooperative annual meetings (RAT)."
        ],
        id: [
          "Merancang skema relasional MySQL untuk portofolio simpanan anggota, saldo kredit aktif, dan log transaksi finansial.",
          "Memprogram algoritma kalkulasi keuangan untuk amortisasi bunga flat/menurun, denda keterlambatan, dan pembagian dividen SHU.",
          "Menerapkan hak akses berbasis peran (RBAC) yang memisahkan transaksi kasir, persetujuan manajer, dan tinjauan log audit.",
          "Menyusun buku panduan operasional lengkap serta laporan keuangan otomatis untuk kebutuhan Rapat Anggota Tahunan (RAT)."
        ]
      },
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind CSS / Blade", "Financial Amortization Engines", "PDF Reporting", "RBAC"]
    },
    {
      id: "atlas-iot",
      featured: true,
      category: "IoT & Embedded Systems",
      badge: {
        en: "Top 8 Favourite Winner (IPK 3.96)",
        id: "Pemenang Favorit Top 8 (IPK 3,96)"
      },
      title: {
        en: "ATLAS: Smart Autonomous Transplanter for Sustainable Agriculture",
        id: "ATLAS: Automatisasi Transplanter Cerdas Untuk Pertanian Keberlanjutan"
      },
      organization: "MSIB Kampus Merdeka Cycle 7 (PT Ozami Inti Sinergi / Indobot Academy)",
      period: "Aug 2024 – Dec 2024",
      tagline: {
        en: "Top 8 Demo Day Favourite Winner — IoT agricultural automation platform",
        id: "Favourite Winner Top 8 Demo Day — Sistem otomasi pertanian berbasis IoT"
      },
      description: {
        en: "Architected and engineered an autonomous smart transplanter system to automate agricultural planting routines. Integrated WiFi microcontrollers, obstacle detection telemetry, and real-time cloud data pipelines. Awarded Favourite Winner in Demo Day Top 8 across nationwide university participants.",
        id: "Merancang dan membangun sistem transplanter mandiri cerdas untuk mengotomatisasi penanaman bibit pertanian. Mengintegrasikan mikrokontroler WiFi, telemetri deteksi halangan, dan antarmuka cloud real-time. Meraih penghargaan Favourite Winner pada Demo Day Top 8 nasional."
      },
      impactPoints: {
        en: [
          "Awarded Favourite Winner in Demo Day Top 8 across nationwide university engineering cohorts in the MSIB Kampus Merdeka IoT Engineer Camp (After Class Summit 2024).",
          "Engineered firmware logic in C++/Arduino for WiFi microcontrollers, actuator motor drivers, and sensor array data logging.",
          "Implemented web and cloud telemetry dashboard for real-time device health, soil parameters, and operational waypoint tracking.",
          "Achieved a 3.96 / 4.00 Grade Point Average across 20 SKS of intensive IoT engineering and smart device curriculum."
        ],
        id: [
          "Meraih predikat Favourite Winner dalam Demo Day Top 8 nasional pada program MSIB Kampus Merdeka IoT Engineer Camp (After Class Summit 2024).",
          "Mengembangkan logika firmware C++/Arduino untuk mikrokontroler WiFi, pengendali aktuator motor, dan pencatatan sensor terpadu.",
          "Mengimplementasikan dasbor telemetri cloud dan web untuk pemantauan kesehatan perangkat, parameter lahan, dan pelacakan koordinat.",
          "Meraih IP 3,96 / 4,00 pada 20 SKS kurikulum intensif rekayasa IoT dan perancangan perangkat cerdas."
        ]
      },
      technologies: ["C++", "Arduino", "ESP32", "IoT Cloud Platforms", "Sensors Telemetry", "Motor Drivers", "RESTful Web APIs"],
      architectureDetails: {
        pattern: "Distributed IoT Edge & Cloud Architecture",
        database: "Time-series sensor telemetry and cloud state storage",
        frontend: "Web & mobile interface for remote command dispatch and live monitoring",
        backend: "WiFi microcontroller firmware with event-driven state machine"
      }
    },
    {
      id: "elkom-curriculum",
      featured: true,
      category: "Embedded Systems & Academic Engineering",
      badge: {
        en: "3+ Consecutive Years Leadership",
        id: "Kepemimpinan 3+ Tahun Berturut-turut"
      },
      title: {
        en: "Academic Lab Curriculum & Embedded Systems Architecture",
        id: "Kurikulum Praktikum Laboratorium & Sistem Tertanam"
      },
      organization: "ELKOM Laboratory, Universitas Gunadarma",
      period: "2022 – 2025",
      tagline: {
        en: "Engineering instruction, code review standardization, and practicum module authorship",
        id: "Instruksi praktikum teknik, standardisasi code review, dan penyusunan modul laboratorium"
      },
      description: {
        en: "Led technical instruction for 50+ engineering students daily across digital electronics, computer systems architecture, and embedded programming in C++/Arduino. Co-authored official lab practicum modules formally adopted into the university curriculum.",
        id: "Memimpin instruksi praktikum teknik untuk 50+ mahasiswa setiap hari pada bidang elektronika digital, arsitektur sistem komputer, dan pemrograman sistem tertanam C++/Arduino. Turut menyusun modul praktikum laboratorium baru yang resmi diadopsi ke kurikulum universitas."
      },
      impactPoints: {
        en: [
          "Instructed 50+ students daily across 4–5 rigorous technical laboratory sessions in C++/Arduino and digital electronics.",
          "Supervised curriculum execution across 3 concurrent laboratory courses, conducting code reviews and troubleshooting hardware-software integration issues.",
          "Co-authored new laboratory practicum modules officially integrated into the Gunadarma University computer systems curriculum.",
          "Standardized modern programming practices, code correctness standards, and breadboard circuit debugging procedures."
        ],
        id: [
          "Memimpin instruksi praktikum teknik untuk 50+ mahasiswa setiap hari dalam 4–5 sesi intensif untuk C++/Arduino dan elektronika digital.",
          "Mengawasi kurikulum pada 3 mata kuliah praktikum sekaligus, melakukan tinjauan kode (code review), dan menelusuri bug integrasi hardware-software.",
          "Turut menyusun modul praktikum laboratorium baru yang resmi diintegrasikan ke kurikulum Sistem Komputer Universitas Gunadarma.",
          "Menstandardisasi praktik penulisan kode modern, pengujian logika, dan prosedur debugging sirkuit mikrokontroler."
        ]
      },
      technologies: ["C++", "Arduino", "Microcontroller Architecture", "Digital Electronics", "Hardware-Software Integration", "Technical Writing"]
    }
  ],

  workExperience: [
    {
      role: {
        en: "Software Developer / Programmer Intern",
        id: "Software Developer / Programmer Intern"
      },
      company: "PT Rekayasa Engineering",
      location: "Jakarta, Indonesia",
      period: "Dec 2025 – Jun 2026",
      type: "Internship (Kemnaker Certified)",
      points: {
        en: [
          "Architected and delivered a production-ready web inventory and distribution system from scratch in a 2-developer team, implementing full-stack MVC architecture with PHP, Laravel, Vue.js, and MySQL.",
          "Engineered transactional modules for real-time stock logging, item borrowing workflows, and role-based approval pipelines covering corporate, project, and divisional operations.",
          "Increased inventory tracking and resource allocation efficiency by 50%, transitioning company operations from fragmented manual spreadsheets to a centralized, validated database.",
          "Collaborated directly with business stakeholders to translate operational pain points into clear technical specifications, database schemas, and responsive UI components.",
          "Completed the Ministry of Manpower (Kemnaker) certified internship program with the top performance rating of 'Sangat Baik' (Excellent) for engineering independence and delivery."
        ],
        id: [
          "Merancang dan merilis sistem inventaris dan distribusi berbasis web siap produksi dari awal dalam tim 2 pengembang, mengimplementasikan arsitektur MVC full-stack dengan PHP, Laravel, Vue.js, dan MySQL.",
          "Mengembangkan modul transaksional untuk pencatatan stok real-time, alur kerja peminjaman barang, dan sistem persetujuan berbasis peran (role-based approval) yang mencakup operasional korporat, proyek, dan divisi.",
          "Meningkatkan efisiensi pelacakan inventaris dan alokasi sumber daya hingga 50%, mentransformasikan operasional perusahaan dari spreadsheet manual yang terfragmentasi ke basis data terpusat dan tervalidasi.",
          "Berkolaborasi langsung dengan pemangku kepentingan (stakeholder) bisnis untuk menerjemahkan kendala operasional menjadi spesifikasi teknis, skema basis data, dan komponen antarmuka pengguna (UI) yang responsif.",
          "Menyelesaikan program magang bersertifikat Kementerian Ketenagakerjaan (Kemnaker) dengan predikat penilaian kinerja tertinggi 'Sangat Baik' atas kemandirian rekayasa teknis dan penyelesaian tugas."
        ]
      },
      skills: ["PHP", "Laravel", "Vue.js", "MySQL", "Tailwind CSS", "RESTful APIs", "MVC"]
    },
    {
      role: {
        en: "Laboratory Assistant & Technical Instructor",
        id: "Asisten Laboratorium & Instruktur Teknis"
      },
      company: "Laboratorium ELKOM, Universitas Gunadarma",
      location: "Depok, Indonesia",
      period: "2022 – 2025",
      type: "Academic & Technical Leadership",
      points: {
        en: [
          "Led practical engineering instruction for 50+ students daily across 4–5 rigorous sessions, teaching digital electronics, computer systems architecture, and embedded programming in C++/Arduino.",
          "Supervised curriculum execution across 3 concurrent laboratory courses, conducting code reviews, troubleshooting hardware-software integration bugs, and assessing student code correctness.",
          "Co-authored new laboratory practicum modules officially integrated into the Gunadarma University computer systems curriculum, standardizing modern programming practices.",
          "Demonstrated consistent leadership, technical mentorship, and time management across 3+ consecutive years of academic instruction."
        ],
        id: [
          "Memimpin instruksi praktikum teknik untuk 50+ mahasiswa setiap hari dalam 4–5 sesi intensif, mengajar elektronika digital, arsitektur sistem komputer, dan pemrograman sistem tertanam (embedded) dengan C++/Arduino.",
          "Mengawasi pelaksanaan kurikulum pada 3 mata kuliah praktikum laboratorium sekaligus, melakukan tinjauan kode (code review), menelusuri serta mengatasi bug integrasi perangkat keras-lunak, dan mengevaluasi ketepatan kode mahasiswa.",
          "Turut menyusun modul praktikum laboratorium baru yang resmi diintegrasikan ke dalam kurikulum Sistem Komputer Universitas Gunadarma untuk menstandardisasi praktik pemrograman modern.",
          "Menunjukkan kepemimpinan, bimbingan teknis, dan manajemen waktu yang konsisten selama 3+ tahun berturut-turut dalam instruksi akademik."
        ]
      },
      skills: ["C++", "Arduino", "Embedded Systems", "Computer Architecture", "Code Review", "Pedagogy"]
    }
  ],

  certifications: [
    {
      id: "bnsp-network",
      title: {
        en: "Senior Computer Network Technician (Teknisi Utama Jaringan Komputer)",
        id: "Teknisi Utama Jaringan Komputer (Senior Computer Network Technician)"
      },
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP Gunadarma",
      period: "2025 – 2028",
      regNo: "TIK.705.07126.2025",
      verified: true,
      description: {
        en: "National occupational certification confirming professional competence in advanced computer network architecture, routing & switching topology planning, network fault isolation, and enterprise system diagnostics.",
        id: "Sertifikasi okupasi nasional yang memvalidasi kompetensi profesional dalam arsitektur jaringan komputer tingkat lanjut, perencanaan topologi routing & switching, isolasi gangguan jaringan, dan diagnostik sistem enterprise."
      },
      topics: ["Advanced Network Topology", "Routing & Switching", "Fault Diagnostics & Recovery", "Network Security Protocols"]
    },
    {
      id: "kemnaker-programmer",
      title: {
        en: "Certified Programmer Internship Program",
        id: "Program Magang Programmer Bersertifikat"
      },
      issuer: "PT Rekayasa Engineering & Kementerian Ketenagakerjaan RI (Kemnaker)",
      period: "2025 – 2026",
      regNo: "No: MN.031.012469.03.2025 (Grade: Sangat Baik)",
      verified: true,
      pdfFile: "assets/certs/rekayasa-magang-programmer.pdf",
      description: {
        en: "Nationally recognized industrial internship certification awarded for engineering independence, full-stack software delivery, and top performance rating 'Sangat Baik' (Excellent) in production enterprise systems.",
        id: "Sertifikasi magang industri nasional atas kemandirian rekayasa perangkat lunak, implementasi sistem full-stack produksi, dan predikat penilaian kinerja tertinggi 'Sangat Baik'."
      },
      topics: ["Production Web Engineering", "Enterprise MVC Architecture", "Database Normalization", "Stakeholder Collaboration"]
    },
    {
      id: "msib-iot-winner",
      title: {
        en: "Certified IoT Engineer & Top 8 Demo Day Favourite Winner",
        id: "Sertifikasi Kompetensi IoT Engineer & Favourite Winner Top 8"
      },
      issuer: "MSIB Kampus Merdeka & PT Ozami Inti Sinergi (Indobot Academy)",
      period: "2024",
      regNo: "No: 063-13/SRTF/PTOZAMI/XII/2024 & 128-066/SRTF/PTOZAMI/XII/2024",
      verified: true,
      pdfFile: "assets/certs/msib-favourite-winner.pdf",
      description: {
        en: "Awarded Favourite Winner in Demo Day Top 8 national competition for the 'ATLAS' autonomous agricultural transplanter project. Certified IoT Engineer with a 3.96/4.00 GPA across 20 SKS of embedded hardware, microcontrollers, and cloud telemetry.",
        id: "Meraih penghargaan Favourite Winner pada Demo Day Top 8 nasional melalui proyek transplanter otomasi pertanian 'ATLAS'. Bersertifikat Kompetensi IoT Engineer dengan IPK 3,96/4,00 pada 20 SKS kurikulum perangkat cerdas dan telemetri cloud."
      },
      topics: ["IoT Concept Architecture", "WiFi Microcontrollers", "IoT Cloud Platforms", "Web & Android Interface", "Smart Device Prototyping"]
    },
    {
      id: "gunadarma-certs",
      title: {
        en: "Gunadarma University Technical Certifications (10 Specializations)",
        id: "Sertifikasi Teknis Universitas Gunadarma (10 Bidang Spesialisasi)"
      },
      issuer: "Universitas Gunadarma",
      period: "2022 – 2025",
      regNo: "Series: 2022–2025 (10 Official Certificates)",
      verified: true,
      items: [
        { name: "Instalasi LAN Nirkabel (Wireless LAN)", year: "2025 (No. 814845)" },
        { name: "Optimalisasi Kinerja Jaringan Komputer (Uji Kompetensi)", year: "2024 (No. 966464)" },
        { name: "Optimalisasi Kinerja Jaringan Komputer", year: "2024 (No. 001360)" },
        { name: "Pelacakan & Pemulihan Kerusakan Jaringan", year: "2024 (No. 010045)" },
        { name: "Pemrograman Mikrokontroler (Microcontroller)", year: "2024 (No. 721177)" },
        { name: "Tata Kelola Keamanan Jaringan Komputer", year: "2023 (No. 040341)" },
        { name: "Tata Kelola Pengalamatan dan Routing", year: "2023 (No. 890284)" },
        { name: "Teknologi & Aplikasi Drone", year: "2023 (No. 594177)" },
        { name: "Implementasi Koneksi Jaringan Komputer", year: "2022 (No. 936589)" },
        { name: "Identifikasi Kebutuhan Jaringan Komputer", year: "2022 (No. 521824)" }
      ],
      description: {
        en: "Comprehensive technical proficiency certifications covering WLAN deployment, embedded microcontroller architectures, enterprise routing protocol configuration, drone applications, network security, and fault recovery.",
        id: "Sertifikasi kemahiran teknis menyeluruh mencakup implementasi WLAN, arsitektur mikrokontroler, protokol routing, teknologi drone, keamanan jaringan, dan pemulihan gangguan."
      },
      topics: ["WLAN 802.11", "Microcontrollers", "Routing Protocols", "Network Security", "Drone Tech", "Fault Diagnostics"]
    },
    {
      id: "industry-talkshows",
      title: {
        en: "Industrial Seminars & Technology Talks",
        id: "Seminar Industri & Diskusi Teknologi"
      },
      issuer: "PT Ozami Inti Sinergi & Indobot Academy",
      period: "2024",
      regNo: "Series: 2024 (Verified Attendance)",
      verified: true,
      items: [
        { name: "Transforming Industries with Emerging Technologies", year: "2024 (No. 64-059/2024)" },
        { name: "Tren Industri dan Kebutuhan Keterampilan di Era Digital", year: "2024 (No. 14-061/2024)" },
        { name: "Dosen dan Karier Berkelanjutan di Dunia Global", year: "2024 (No. 142-060/2024)" }
      ],
      description: {
        en: "Professional development seminars on emerging technology adaptation, digital industry skills demands, and sustainable engineering careers.",
        id: "Seminar pengembangan profesional mengenai adaptasi teknologi terkini, kebutuhan keahlian industri digital, dan pengembangan karier rekayasa berkelanjutan."
      },
      topics: ["Emerging Technologies", "Digital Skills", "Industry Trends"]
    }
  ],

  education: {
    institution: "Universitas Gunadarma",
    degree: {
      en: "Bachelor of Computer Science (S.Kom.) in Computer Systems",
      id: "Sarjana Komputer (S.Kom.) Sistem Komputer"
    },
    period: "2021 – 2025",
    gpa: "3.75 / 4.00",
    honors: {
      en: "Graduated with Distinction (Sangat Memuaskan)",
      id: "Lulus dengan Predikat Sangat Memuaskan"
    },
    coursework: {
      en: [
        "Software Engineering",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Computer Systems Architecture",
        "Computer Networks & Data Communication",
        "Microprocessor & Microcontroller Systems",
        "Digital Signal Processing & Electronics"
      ],
      id: [
        "Rekayasa Perangkat Lunak",
        "Pemrograman Berorientasi Objek",
        "Sistem Basis Data",
        "Arsitektur Sistem Komputer",
        "Jaringan Komputer & Komunikasi Data",
        "Sistem Mikroprosesor & Mikrokontroler",
        "Pengolahan Sinyal Digital & Elektronika"
      ]
    }
  },

  skills: {
    categories: [
      {
        name: {
          en: "Web & Backend Engineering",
          id: "Rekayasa Web & Backend"
        },
        skills: [
          { name: "PHP", desc: { en: "Core language & OOP principles", id: "Bahasa inti & prinsip OOP" } },
          { name: "Laravel", desc: { en: "MVC, Eloquent ORM, Auth, Queues, REST APIs", id: "MVC, Eloquent ORM, Autentikasi, REST API" } },
          { name: "Vue.js", desc: { en: "Composition API, reactive state, SPA components", id: "Composition API, state reaktif, komponen SPA" } },
          { name: "JavaScript (ES6+)", desc: { en: "Modern syntax, async/await, DOM APIs", id: "Sintaks modern, async/await, DOM API" } },
          { name: "MySQL", desc: { en: "Normalized schema design, indexing, transactions", id: "Desain skema ternormalisasi, indexing, transaksi" } },
          { name: "Tailwind CSS", desc: { en: "Utility-first design, dark mode, responsive systems", id: "Desain utility-first, dark mode, sistem responsif" } },
          { name: "HTML5 & CSS3", desc: { en: "Semantic markup, modern layout models", id: "Markup semantik, model layout modern" } },
          { name: "RESTful APIs", desc: { en: "Endpoint design, token auth, JSON payloads", id: "Desain endpoint, autentikasi token, JSON payload" } }
        ]
      },
      {
        name: {
          en: "Systems & Network Engineering",
          id: "Sistem & Rekayasa Jaringan"
        },
        skills: [
          { name: "BNSP Senior Network Technician", desc: { en: "National occupational license TIK.705.07126.2025", id: "Lisensi okupasi nasional TIK.705.07126.2025" } },
          { name: "C++ / Embedded Programming", desc: { en: "Arduino, sensor telemetry, hardware controllers", id: "Arduino, telemetri sensor, pengontrol hardware" } },
          { name: "Routing & Switching", desc: { en: "IP addressing, VLANs, static & dynamic routing", id: "Pengalamatan IP, VLAN, routing statis & dinamis" } },
          { name: "Network Diagnostics & Recovery", desc: { en: "Packet inspection, fault isolation, latency debug", id: "Inspeksi paket, isolasi gangguan, debug latensi" } },
          { name: "Wireless LAN Systems", desc: { en: "WLAN topology, channel planning, security", id: "Topologi WLAN, alokasi kanal, keamanan" } }
        ]
      },
      {
        name: {
          en: "Tools, Rigor & Collaboration",
          id: "Tools, Disiplin & Kolaborasi"
        },
        skills: [
          { name: "Git & GitHub", desc: { en: "Version control, PR workflows, branch isolation", id: "Kontrol versi, alur kerja PR, isolasi branch" } },
          { name: "Linux CLI", desc: { en: "Shell navigation, process inspection, server ops", id: "Navigasi shell, inspeksi proses, operasi server" } },
          { name: "Code Review & Refactoring", desc: { en: "3+ years mentoring & evaluating student code", id: "Pengalaman 3+ tahun membimbing & mengevaluasi kode" } },
          { name: "VS Code & Development Tooling", desc: { en: "Extensions, linters, debuggers, workspace config", id: "Ekstensi, linter, debugger, konfigurasi workspace" } },
          { name: "DaVinci Resolve", desc: { en: "Technical walkthrough & presentation media editing", id: "Editing media presentasi & video teknis" } }
        ]
      }
    ]
  },

  languages: [
    {
      name: { en: "Indonesian", id: "Bahasa Indonesia" },
      proficiency: { en: "Native Speaker", id: "Penutur Asli" },
      tag: "ID"
    },
    {
      name: { en: "English", id: "Bahasa Inggris" },
      proficiency: { en: "Proficient / Working Fluency", id: "Mahir / Standar Kerja Teknis" },
      tag: "EN"
    }
  ]
};
