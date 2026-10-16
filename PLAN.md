# PLAN.md — Roadmap & Priority Backlog

## Goal
Build an authentic, high-impact, anti-slop software engineering portfolio website for Faiz Nur Fakhri based on verified CV data, deployable with zero friction and fully functional offline and online.

## Priority Backlog & Phases

- [x] **Phase 1: Architecture & Data Modeling**
  - [x] Read and analyze both English (`Faiz_Nur_Fakhri_CV.pdf`) and Indonesian (`CV_Faiz_Nur_Fakhri_ID.pdf`) CVs.
  - [x] Create `CONTEXT.md` with ADRs and domain constraints.
  - [x] Setup `PLAN.md` and `PROGRESS.md`.

- [x] **Phase 2: Core Data Structure & Localization Dictionary**
  - [x] Create `js/data.js` containing typed reactive data for all sections (Profile, Work Experience, Projects Deep-Dive, Academic Leadership, Certifications, Skills, Education, Contact).
  - [x] Support complete bilingual parity (EN / ID) with zero translation gaps.

- [x] **Phase 3: UI Architecture & Anti-Slop Component Design**
  - [x] Implement responsive layout with Navbar (Brand, Navigation Links, Language Switcher, Dark/Light Mode Switcher, Quick CV download).
  - [x] Hero Section: Clear engineering headline, live status badge ("Available for Engineering Roles"), quick action buttons (Direct CV Download, Get in Touch), core technical stack chips.
  - [x] Experience Section: Timeline with PT Rekayasa Engineering & ELKOM Gunadarma with quantifiable metrics and authentic responsibilities.
  - [x] Engineering Case Study / Project Deep-Dive: Enterprise Inventory & Distribution System (Laravel, Vue.js, MySQL) featuring architecture breakdown, operational workflows, and verified Kemnaker rating.
  - [x] Certifications & Licensure Grid: BNSP Senior Computer Network Technician with verified registration number, Kemnaker, Gunadarma network/systems certs with interactive credential details modal.
  - [x] Technical Skills & Stack Matrix: Grouped cleanly by Web & Backend, Systems & Networking, Tools & Engineering Rigor.
  - [x] Education & Honors: Gunadarma University, GPA 3.75 (Distinction).
  - [x] Contact & Connect: Direct email link, phone/WhatsApp link, copy-to-clipboard toast notification, clean contact form trigger.
  - [x] Footer: Clean copyright, tech stack disclosure, PDF CV download quicklinks.

- [x] **Phase 4: Resilience, Interactivity & Verification**
  - [x] Test language toggling (EN <-> ID) dynamically without page reload.
  - [x] Test theme toggling (Dark <-> Light) with system preference detection and localStorage persistence.
  - [x] Test CV download links (`Faiz_Nur_Fakhri_CV.pdf` and `CV_Faiz_Nur_Fakhri_ID.pdf`).
  - [x] Test copy-to-clipboard functionality with toast feedback.
  - [x] Verify zero broken links, zero fake numbers, zero AI slop styling.
  - [x] Automated test runner (`test-portfolio.js`) passing 17/17 tests.

- [x] **Phase 5: Final Review & Delivery**
  - [x] Verified zero bloat & production minification.
  - [x] Update `PROGRESS.md`.
  - [x] Update `quota-state.json`.
