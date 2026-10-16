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
      id: "elkom-curriculum",
      featured: true,
      category: "Embedded Systems & Academic Engineering",
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
      period: "2026",
      regNo: "Grade: Sangat Baik (Excellent)",
      verified: true,
      description: {
        en: "Nationally recognized industrial internship certification awarded for engineering independence, full-stack software delivery, and exceptional problem-solving in production enterprise systems.",
        id: "Sertifikasi magang industri nasional atas kemandirian rekayasa perangkat lunak, implementasi sistem full-stack produksi, dan predikat penilaian kinerja tertinggi 'Sangat Baik'."
      },
      topics: ["Production Web Engineering", "Enterprise MVC Architecture", "Database Normalization", "Stakeholder Collaboration"]
    },
    {
      id: "gunadarma-certs",
      title: {
        en: "Gunadarma University Technical Certifications",
        id: "Sertifikasi Teknis Universitas Gunadarma"
      },
      issuer: "Universitas Gunadarma",
      period: "2023 – 2025",
      regNo: "Series: 2023–2025",
      verified: true,
      items: [
        { name: "Wireless LAN", year: "2025" },
        { name: "Microcontroller Programming", year: "2024" },
        { name: "Network Fault Detection & Recovery", year: "2024" },
        { name: "Routing Protocols", year: "2023" }
      ],
      description: {
        en: "Comprehensive technical proficiency certifications covering RF / WLAN deployment, embedded microcontroller architectures, enterprise routing protocol configuration, and systematic network recovery.",
        id: "Sertifikasi kemahiran teknis menyeluruh mencakup implementasi WLAN, arsitektur mikrokontroler tertanam, konfigurasi protokol routing enterprise, dan pemulihan jaringan sistematis."
      },
      topics: ["WLAN 802.11", "Microcontrollers", "Routing Protocols", "Packet Analysis"]
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
