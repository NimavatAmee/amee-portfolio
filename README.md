# Amee Nimavat — Senior React Native Developer Portfolio

A production-ready, dark-first personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, designed for **Amee Nimavat**, a Senior React Native Developer with 3.5+ years of experience.

## ✨ Features & Architecture

- **Dark-First Modern Aesthetics**: Engineered with a sleek dark palette (`#06090F`), electric-blue / violet accents (`#38BDF8`, `#6366F1`), high-contrast typography, and subtle ambient glows inspired by modern developer portfolios.
- **Interactive Mobile Device Mockup**: Interactive iOS / Android conceptual device component showcasing real-time features, AI voice entry waveforms, Zustand caching indicators, and offline-first SQLite queues with a code toggle.
- **Structured Sections**:
  1. **Sticky Navigation**: Responsive desktop links, mobile navigation drawer, and active scroll spy.
  2. **Hero Section**: Strong headline (*“Building Reliable Mobile Experiences That People Love”*), availability status indicator (*“Open to Remote Opportunities”*), core specialties, dual CTAs, and quick metrics bar.
  3. **About Me**: Concise professional summary, domain expertise badges, and 5 compact capability pillars.
  4. **Technical Skills**: Organized into 5 distinct categories with an instant real-time search bar and filter tabs.
  5. **Experience Timeline**: Career history spanning **ScriptJet Services** (Lead), **Tagline Infotech**, **BigBrainy Infotech**, and **Exelance IT**.
  6. **Featured Projects**: Deep-dive case studies covering Expense Tracking App, Shipping Employee Management App, Dating App, Feudr Social Platform, and SmartHaul Transport App. Includes full architecture breakdown modal.
  7. **Engineering Approach**: 6 core architectural pillars (Offline-First, Data Synchronization, Firebase & APIs, Real-Time WebRTC, Performance Profiling, and Feature Ownership).
  8. **Education**: M.Sc. in Information Technology & Bachelor of Computer Application (BCA) from Saurashtra University.
  9. **Contact & Footer**: Functional inquiry form with transparent `mailto:` generation, 1-click email/phone copy buttons, LinkedIn direct link, and smooth back-to-top navigation.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd /Users/amee/Documents/amee

# Install dependencies (already installed)
npm install
```

### Local Development

Run the Vite development server with hot-module replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

Create an optimized static build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📦 Project Structure

```
├── index.html                   # SEO-optimized HTML with Open Graph & SVG React Native icon
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Custom theme colors, fonts, and keyframes
├── tsconfig.json                # TypeScript compiler configuration
├── vite.config.ts               # Vite bundler configuration
└── src/
    ├── main.tsx                 # Application entry point
    ├── App.tsx                  # Root component with scroll spy navigation
    ├── index.css                # Global styles, glassmorphic panels & scrollbar
    ├── types/
    │   └── index.ts             # TypeScript interfaces for projects, experience & skills
    ├── data/
    │   └── portfolioData.ts     # Verified portfolio data source of truth
    └── components/
        ├── Navbar.tsx           # Sticky navbar with mobile hamburger menu
        ├── Hero.tsx             # Hero section with CTAs & availability badge
        ├── MobileDeviceMockup.tsx # Interactive conceptual mobile preview with code view
        ├── About.tsx            # Concise introduction and domain badges
        ├── Skills.tsx           # Searchable & filterable technical skill groups
        ├── Experience.tsx       # Polished chronological career timeline
        ├── Projects.tsx         # Featured project cards with tech tags
        ├── ProjectModal.tsx     # Deep-dive architecture inspection modal
        ├── EngineeringHighlights.tsx # 6 core engineering capability pillars
        ├── Education.tsx        # Academic degrees and qualifications
        ├── Contact.tsx          # Contact channels, copy buttons & inquiry form
        └── Footer.tsx           # Footer with social links & back-to-top trigger
```

---

## 🛡️ Content Integrity

- Primary source of truth is derived strictly from confirmed resume and profile information.
- No invented performance numbers, client names, app store links, or GitHub URLs.
- Illustrative mobile mockups are labeled as conceptual representations of delivered functionality.
