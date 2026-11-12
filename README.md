# Reegan Gladis P — 3D Cybernetic Developer Portfolio

[![Production Build](https://img.shields.io/badge/Build-Passing-00F0FF?style=for-the-badge&logo=vite&logoColor=black)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-8B5CF6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-00F0FF?style=for-the-badge&logo=three.js&logoColor=black)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-slate?style=for-the-badge)](LICENSE)

A high-performance, dark-futuristic 3D personal portfolio designed and engineered for **Reegan Gladis P** — Software Development Engineer, Full Stack Developer, and AI/ML Engineer based in Bengaluru, India.

---

## ⚡ Overview & Design Philosophy

Inspired by modern creative developer platforms, high-end SaaS dashboards, and cybernetic HUD aesthetics, this portfolio rejects generic template conventions in favor of:
- **Procedural 3D Neural Sphere**: Built with Three.js, React Three Fiber, and Drei, featuring golden-spiral node lattices, orbital ring vectors, reactive mouse parallax, and dynamic lighting.
- **Editorial Typography**: Pairing **Space Grotesk** (headings), **Inter** (interface copy), and **JetBrains Mono** (technical indicators).
- **Dark Futuristic Color Space**: Deep midnight background (`#07090E`), cybernetic surface elevated layers (`#0D111A`, `#151B28`), electric cyan accents (`#00F0FF`), and ultraviolet secondary accents (`#8B5CF6`).
- **Zero Subpage 3D Overhead**: Code-split via dynamic `React.lazy()` chunking, isolating Three.js vendor binaries exclusively to the homepage hero.

---

## 🚀 Key Features

- **Procedural 3D Cyber Hero**: Interactive WebGL neural sphere with Fibonacci distribution, orbital rings, ambient dust particles, and fallback SVG badges for low-power or reduced-motion environments.
- **Granular Project Case Studies**: Dedicated architectural deep dives for 5 verified projects:
  1. **VertexERP AI** (Enterprise ERP assistant with FastAPI microservices and Redis queue)
  2. **ExcelR Track360** (Salesforce CRM operations engine with SOQL optimization and Flow automation)
  3. **Learnova AI** (FastAPI, React 18, PostgreSQL, Redis, and RAG retrieval architecture)
  4. **Leo AI** (Voice AI assistant powered by Web Speech API and LLM orchestrator)
  5. **AI Healthcare Diagnosis** (Clinical decision support system with Scikit-learn disease classification)
- **Interactive Technology Explorer (`/skills`)**: 8 searchable technical domains with cross-project navigation pills.
- **Verified Career & Education Timelines**: Detailed career track covering ongoing engineering at ExcelR EdTech, Prinston Smart Engineers, and Anudip Foundation, alongside MCA studies at JAIN University and BCA at St. Francis College.
- **HUD Transmission Portal (`/contact`)**: Zod-validated input schema with React Hook Form, honeypot spam protection, 1-click email copy with visual feedback, and direct email client dispatch.
- **Curriculum Vitae Modal**: Accessible dialog displaying verified candidate summary with direct PDF request dispatch.
- **SEO & Social Graph Optimization**: Automated OpenGraph, Twitter Cards, `robots.txt`, dynamic XML sitemaps, and Schema.org `Person` & `WebSite` JSON-LD microdata.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18.3, TypeScript 5.6, Vite 5.4 |
| **3D & Canvas** | Three.js 0.169, `@react-three/fiber` 8.17, `@react-three/drei` 9.114 |
| **Animation Engine** | GSAP 3.12, `@gsap/react` 2.1, ScrollTrigger |
| **Styling & Design System** | Tailwind CSS 3.4, PostCSS, Lucide React, clsx, tailwind-merge |
| **Form & State Management** | React Hook Form 7.53, Zod 3.23, `@hookform/resolvers` |
| **Routing & Architecture** | React Router DOM 6.26 (SPA mode with custom `ScrollToTop`) |
| **Quality & Bundling** | ESLint 9.11, TypeScript-ESLint, Rollup Manual Chunk Splitting |
| **Hosting & CDN** | Vercel Serverless Edge Network with custom HTTP caching and security headers |

---

## 🏛️ Architecture & Code Splitting

```
reegan-portfolio/
├── public/                 # Static assets, favicon, robots.txt, sitemap.xml
├── src/
│   ├── components/
│   │   ├── canvas/         # 3D CyberSphere & HeroCanvas (Three.js/R3F)
│   │   └── common/         # Navbar, Footer, PageHeader, Button, SEO, Modals
│   ├── data/               # Strongly-typed project, skill, experience data
│   ├── pages/              # Lazy-loaded route views (Home, About, Projects, etc.)
│   ├── App.tsx             # Route declarations, Suspense boundaries, Error Boundary
│   ├── main.tsx            # Application entry point
│   └── index.css           # Design tokens, custom HUD brackets, Tailwind directives
├── vercel.json             # SPA rewrites, immutable asset caching, security headers
└── vite.config.ts          # Manual chunking configuration
```

### Chunk Separation Strategy
```
three-vendor.js  (816 KB)  --> Lazy-loaded exclusively on Homepage Hero
react-vendor.js  (163 KB)  --> React, ReactDOM, React Router
gsap-vendor.js   (71 KB)   --> GSAP Core, ScrollTrigger
ui-vendor.js     (17 KB)   --> Lucide React, clsx, styling utilities
Route chunks     (1-16 KB) --> Ultra-fast subpage navigation
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/reegangladis/reegan-portfolio.git
   cd reegan-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 🔨 Available Scripts

- `npm run dev` — Starts the local development server with Vite Hot Module Replacement (HMR).
- `npm run build` — Runs TypeScript type-checking (`tsc`) and compiles optimized production assets to `dist/`.
- `npm run preview` — Boots a local HTTP server to preview the production build.
- `npm run lint` — Runs ESLint across all TypeScript and React source files.

---

## 🚢 Deployment

### Deploying to Vercel

The project is pre-configured for instant zero-configuration deployment to Vercel via [vercel.json](vercel.json).

#### Option A: Vercel CLI
```bash
npm install -g vercel
vercel
```

#### Option B: GitHub Integration
1. Push this repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Configure the project settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

---

## 📸 Screenshots & Visual Walkthrough

> *(Place screenshots of the 3D Hero, Projects Gallery, and Interactive Skills Explorer here upon production deployment)*

| Desktop 3D Hero | Mobile Navigation |
| :---: | :---: |
| *(Hero Canvas with Neural Sphere)* | *(Slide-out HUD drawer)* |

---

## 👤 Author & Contact

**Reegan Gladis P**  
Software Development Engineer & AI/ML Engineer  
Bengaluru, Karnataka, India  

- **Email**: [reegangladis.p@gmail.com](mailto:reegangladis.p@gmail.com)  
- **GitHub**: [github.com/reegangladis](https://github.com/reegangladis)  
- **LinkedIn**: [linkedin.com/in/reegangladis](https://linkedin.com/in/reegangladis)  

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
