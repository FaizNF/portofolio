import { portfolioData } from './data.js';

// Standalone Vue 3 Composition API application
export function initPortfolio(Vue) {
  const { createApp, ref, computed, onMounted, watch } = Vue;

  createApp({
    setup() {
      // Data state
      const data = ref(portfolioData);
      
      // Language state
      const savedLang = localStorage.getItem('faiz_portfolio_lang');
      const currentLang = ref(savedLang || 'en');

      // Theme state
      const savedTheme = localStorage.getItem('faiz_portfolio_theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = ref(savedTheme ? savedTheme === 'dark' : prefersDark);

      // UI state
      const mobileMenuOpen = ref(false);
      const selectedCert = ref(null);
      const searchQuery = ref('');
      const toast = ref({ show: false, message: '' });
      let toastTimer = null;

      // Contact form state
      const contactForm = ref({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Apply theme
      const applyTheme = (dark) => {
        if (dark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      const toggleTheme = () => {
        isDark.value = !isDark.value;
        localStorage.setItem('faiz_portfolio_theme', isDark.value ? 'dark' : 'light');
        applyTheme(isDark.value);
      };

      // Toggle Language
      const setLang = (lang) => {
        currentLang.value = lang;
        localStorage.setItem('faiz_portfolio_lang', lang);
      };

      // Toast Notification
      const showToast = (message) => {
        if (toastTimer) clearTimeout(toastTimer);
        toast.value = { show: true, message };
        toastTimer = setTimeout(() => {
          toast.value.show = false;
        }, 2800);
      };

      // Copy to Clipboard
      const copyText = async (text, label) => {
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }
          const msg = currentLang.value === 'en' 
            ? `${label} copied to clipboard!` 
            : `${label} berhasil disalin ke papan klip!`;
          showToast(msg);
        } catch (err) {
          console.error('Clipboard copy failed:', err);
          showToast('Failed to copy');
        }
      };

      // Certificate Modal
      const openCertModal = (cert) => {
        selectedCert.value = cert;
        document.body.style.overflow = 'hidden';
      };

      const closeCertModal = () => {
        selectedCert.value = null;
        document.body.style.overflow = '';
      };

      // Filtered Skills
      const filteredCategories = computed(() => {
        const query = searchQuery.value.trim().toLowerCase();
        if (!query) return data.value.skills.categories;

        return data.value.skills.categories.map(cat => {
          const matchedSkills = cat.skills.filter(s => {
            const nameMatch = s.name.toLowerCase().includes(query);
            const descMatch = s.desc[currentLang.value].toLowerCase().includes(query);
            return nameMatch || descMatch;
          });
          return {
            ...cat,
            skills: matchedSkills
          };
        }).filter(cat => cat.skills.length > 0);
      });

      // Send Contact Form via Mailto
      const handleContactSubmit = () => {
        const { name, email, subject, message } = contactForm.value;
        if (!name || !message) {
          showToast(currentLang.value === 'en' ? 'Please fill required fields.' : 'Mohon lengkapi kolom yang wajib diisi.');
          return;
        }

        const mailSubject = encodeURIComponent(subject ? `[Portfolio Inquiry] ${subject}` : `[Portfolio Inquiry] Message from ${name}`);
        const mailBody = encodeURIComponent(
          `Sender Name: ${name}\nSender Email: ${email || 'Not provided'}\n\nMessage:\n${message}\n\n---\nSent from Faiz Nur Fakhri Engineering Portfolio`
        );
        window.location.href = `mailto:Faiz.swh@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        contactForm.value = { name: '', email: '', subject: '', message: '' };
        showToast(currentLang.value === 'en' ? 'Email client opened.' : 'Klien email dibuka.');
      };

      // Quick CV Download Path
      const currentCvFile = computed(() => {
        return currentLang.value === 'en' 
          ? data.value.profile.cvFiles.en 
          : data.value.profile.cvFiles.id;
      });

      // Translations for UI Chrome
      const t = computed(() => {
        const isEn = currentLang.value === 'en';
        return {
          nav: {
            about: isEn ? "About" : "Tentang",
            experience: isEn ? "Experience" : "Pengalaman",
            projects: isEn ? "Systems" : "Sistem & Proyek",
            certifications: isEn ? "Credentials" : "Sertifikasi",
            skills: isEn ? "Skills" : "Keahlian",
            education: isEn ? "Education" : "Pendidikan",
            contact: isEn ? "Contact" : "Kontak",
            downloadCv: isEn ? "Resume (PDF)" : "Unduh CV (PDF)"
          },
          hero: {
            badge: isEn ? "Available for Engineering Roles" : "Siap untuk Posisi Engineering",
            ctaPrimary: isEn ? "Get In Touch" : "Hubungi Langsung",
            ctaSecondary: isEn ? "Download Resume" : "Unduh CV",
            verifiedCvEn: isEn ? "English CV" : "CV Bahasa Inggris",
            verifiedCvId: isEn ? "Indonesian CV" : "CV Bahasa Indonesia",
            quickCopyEmail: isEn ? "Copy Email" : "Salin Email",
            quickCopyPhone: isEn ? "Copy Phone" : "Salin Telepon",
            architectureAnchor: isEn ? "Explore Production Architecture" : "Eksplorasi Arsitektur Produksi"
          },
          experience: {
            title: isEn ? "Work Experience" : "Pengalaman Kerja",
            subtitle: isEn ? "Engineering delivery in enterprise environments and technical instruction" : "Implementasi rekayasa sistem enterprise dan instruksi teknis",
            certifiedTag: isEn ? "Kemnaker Certified" : "Sertifikasi Kemnaker",
            keyHighlights: isEn ? "Key Deliverables & Responsibilities" : "Capaian Kunci & Tanggung Jawab"
          },
          projects: {
            title: isEn ? "Featured Systems Engineering" : "Sistem & Studi Kasus Rekayasa",
            subtitle: isEn ? "Architecting production-ready enterprise platforms and academic technical curriculum" : "Merancang sistem enterprise siap produksi dan kurikulum praktikum teknik",
            architectureTitle: isEn ? "System Architecture & Data Flow" : "Arsitektur Sistem & Aliran Data",
            impactTitle: isEn ? "Technical & Operational Impact" : "Dampak Teknis & Operasional",
            technologiesTitle: isEn ? "Engineered With" : "Teknologi yang Digunakan"
          },
          certifications: {
            title: isEn ? "Certifications & Professional Licenses" : "Sertifikasi & Lisensi Profesi",
            subtitle: isEn ? "National credentials, industrial qualifications, and specialized systems proficiencies" : "Lisensi nasional BNSP, sertifikasi magang industri, dan kompetensi teknis",
            verifiedBadge: isEn ? "Nationally Verified" : "Terverifikasi Nasional",
            viewDetails: isEn ? "View Credential Details" : "Lihat Detail Kredensial",
            regNoLabel: isEn ? "Registration / Grade:" : "Nomor Registrasi / Predikat:"
          },
          skills: {
            title: isEn ? "Technical Skills & Competencies" : "Keahlian Teknis & Kompetensi",
            subtitle: isEn ? "Rigorous full-stack capabilities, system diagnostics, and hardware-software integration" : "Kemampuan full-stack, diagnostik sistem jaringan, dan integrasi perangkat keras-lunak",
            searchPlaceholder: isEn ? "Filter competencies (e.g. Laravel, Vue, MySQL, C++)..." : "Cari kompetensi (contoh: Laravel, Vue, MySQL, C++)...",
            noResults: isEn ? "No matching skills found." : "Tidak ada keahlian yang cocok ditemukan."
          },
          education: {
            title: isEn ? "Education & Academic Honors" : "Pendidikan & Prestasi Akademik",
            subtitle: isEn ? "Formal computer science and systems foundations" : "Fondasi akademik sains komputer dan sistem komputer",
            gpaLabel: isEn ? "Cumulative GPA" : "IPK Kumulatif",
            honorsLabel: isEn ? "Academic Honors" : "Predikat Kelulusan",
            courseworkTitle: isEn ? "Key Relevant Coursework" : "Mata Kuliah Utama"
          },
          contact: {
            title: isEn ? "Get In Touch" : "Hubungi Langsung",
            subtitle: isEn ? "Direct channels for full-time roles, engineering contracts, and technical collaboration" : "Saluran langsung untuk posisi full-time, kontrak rekayasa, atau kolaborasi teknis",
            nameLabel: isEn ? "Your Name / Organization *" : "Nama / Organisasi *",
            emailLabel: isEn ? "Your Email" : "Email Anda",
            subjectLabel: isEn ? "Subject" : "Subjek Pesan",
            messageLabel: isEn ? "Message *" : "Isi Pesan *",
            sendBtn: isEn ? "Send Direct Message" : "Kirim Pesan Langsung",
            orDirect: isEn ? "Direct Communication Channels" : "Saluran Komunikasi Langsung",
            whatsappBtn: isEn ? "Open WhatsApp" : "Buka WhatsApp",
            phoneBtn: isEn ? "Direct Call" : "Panggilan Telepon"
          },
          modal: {
            close: isEn ? "Close" : "Tutup",
            certDetails: isEn ? "Credential Scope & Verification" : "Cakupan Kredensial & Verifikasi",
            competencyAreas: isEn ? "Tested Competency Areas" : "Bidang Kompetensi yang Diuji"
          },
          footer: {
            rights: isEn ? "All rights reserved." : "Hak cipta dilindungi.",
            builtWith: isEn ? "Engineered with Vue.js, Tailwind CSS & Swiss Minimalist Standards. Zero AI Slop." : "Dibangun dengan standar Vue.js, Tailwind CSS & Minimalisme Swiss. Bebas AI Slop.",
            backToTop: isEn ? "Back to top" : "Kembali ke atas"
          }
        };
      });

      onMounted(() => {
        applyTheme(isDark.value);
        // Sync system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!localStorage.getItem('faiz_portfolio_theme')) {
            isDark.value = e.matches;
            applyTheme(e.matches);
          }
        });
      });

      return {
        data,
        currentLang,
        isDark,
        mobileMenuOpen,
        selectedCert,
        searchQuery,
        toast,
        contactForm,
        toggleTheme,
        setLang,
        showToast,
        copyText,
        openCertModal,
        closeCertModal,
        filteredCategories,
        handleContactSubmit,
        currentCvFile,
        t
      };
    }
  }).mount('#app');
}
