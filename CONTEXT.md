# CONTEXT.md — Faiz Nur Fakhri Portfolio

## 1. Executive Summary & Domain Scope
This project is an engineering-first personal portfolio website for **Faiz Nur Fakhri**, Software Engineer and Full-Stack Web Developer specialized in Laravel, Vue.js, PHP, and MySQL, with a verified credential in Network Systems (BNSP Senior Computer Network Technician) and 3+ years in academic technical instruction at ELKOM Laboratory, Gunadarma University.

## 2. Anti-Slop Directive & Design System
Strict adherence to the Anti-Slop Standard:
- **Zero generic AI trends**: No unrequested purple glowing neon blurs, no floating arbitrary stat cards with unverified metrics, no dead filler components, no bento grids without purpose.
- **Zero AI copywriting clichés**: Strictly avoid words such as *delve*, *leverage*, *robust*, *seamless*, *streamline*, *revolutionize*, *tapestry*, *testament to*. Every sentence is concise, factual, and written from an engineer's perspective.
- **Visual Design Identity**:
  - Swiss / Minimalist Editorial Engineering aesthetic.
  - High contrast typography: Sans-serif for editorial body (`Inter` / `Plus Jakarta Sans`), Monospace for metrics, timestamps, and tags (`JetBrains Mono`).
  - Palette: Neutral slate/zinc foundation (`neutral-900` / `neutral-50`), crisp micro-borders (`border-neutral-200 dark:border-neutral-800`), selective purposeful accents (e.g. emerald/cyan for active system statuses, deep sapphire for primary action focus).
  - Responsive: Seamless on mobile (360px+), tablet, and wide desktop displays.

## 3. Core Domain Data (Derived from Verified CVs)
- **Identity**: Faiz Nur Fakhri, S.Kom.
- **Title**: Software Engineer | Full-Stack Web Developer (Laravel & Vue.js)
- **Location**: Depok, West Java, Indonesia
- **Contact**: `Faiz.swh@gmail.com` | `+62 813-1846-4206`
- **Education**: Bachelor of Computer Science (S.Kom.), Computer Systems, Universitas Gunadarma (2021 – 2025), GPA 3.75 / 4.00 (Distinction / Sangat Memuaskan).
- **Flagship Project**: Enterprise Inventory & Distribution System at PT Rekayasa Engineering (Dec 2025 – Jun 2026).
  - Built from scratch in a 2-developer agile squad.
  - Stack: PHP, Laravel, Vue.js, MySQL.
  - Key Modules: Real-time stock audit trails, transactional borrowing workflows, role-based tiered approvals (Corporate, Project, Division).
  - Business Impact: Replaced fragmented spreadsheets, increased tracking & resource efficiency by 50%.
  - Rating: Kemnaker Certified Internship Program with "Sangat Baik" (Excellent) rating.
- **Academic & Technical Leadership**: ELKOM Laboratory Gunadarma (2022 – 2025).
  - 3+ years teaching digital electronics, computer systems architecture, embedded programming in C++/Arduino to 50+ students daily.
  - Co-authored official lab practicum modules for university curriculum.
- **Licenses & Certifications**:
  - BNSP Senior Computer Network Technician (2025–2028, Reg: TIK.705.07126.2025).
  - Certified Programmer Internship Program (PT Rekayasa Engineering & Kemnaker 2026).
  - Gunadarma Certifications: Wireless LAN (2025), Microcontroller Programming (2024), Network Fault Detection & Recovery (2024), Routing (2023).

## 4. Architecture Decisions (ADR)
- **ADR-001: Standalone Modular Modern Architecture with Zero-Friction Preview**
  - Decision: Build a self-contained, highly structured single-page web application with Vue 3 (Composition API / reactive state management) and Tailwind CSS.
  - Rationale: Enables instantaneous opening in any browser (`index.html`) via `file://` or HTTP without mandatory dev server build crashes, while retaining a full componentized structure, dual language toggle (EN/ID), dark/light theme persistence, and interactive modals.
- **ADR-002: Dual-Language Architecture (English & Indonesian)**
  - Decision: Implement complete bilingual content mapping (EN / ID) with instant reactive switching and localStorage persistence.
  - Rationale: Faiz operates in Indonesian enterprise environments (PT Rekayasa Engineering, BNSP, Gunadarma) while targeting global and domestic high-tier software engineering roles.
- **ADR-003: Strict Link & Asset Integrity**
  - Decision: All external actions (Mailto, Phone, WhatsApp, PDF downloads) are bound to verified files and real contact info.
  - Rationale: Adheres to the Resilience & Verification pillar—no dead links or placeholder buttons.
