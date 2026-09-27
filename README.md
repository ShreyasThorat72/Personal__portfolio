# Shreyas Thorat — Developer Portfolio

A production-grade, highly interactive personal developer portfolio website for **Shreyas Thorat**, Computer Science & Artificial Intelligence undergraduate at **Rajarambapu Institute of Technology (RIT), Maharashtra**.

Built with a modular frontend architecture, zero-pill aesthetic discipline, smooth hardware-accelerated animations, responsive typography, and a backend-ready API abstraction layer.

---

## 🌟 Key Highlights & Features

- **Cinematic Developer Hero**: Dynamic interactive command center containing an active code inspector, full-stack architecture telemetry nodes, and an interactive mini-CLI shell.
- **Applied Project Showcase**: Deep case studies for real projects:
  - **CivicConnect**: Civic engagement and municipal issue triage platform with GPS pinning.
  - **Smart Water Tank Automation**: IoT reservoir telemetry and automated relay pump controller.
  - **BottlePoints**: Smart reverse-vending plastic bottle recycling system with carbon savings ledger.
- **Zero-Broken-Image Policy**: High-fidelity custom SVG and interactive schematic visual fallbacks for all project cards and media containers.
- **Architectural Flow Diagrams**: Visual node breakdowns illustrating data flow from ingestion to inference and UI.
- **Technology Pipeline Graph**: Interactive map demonstrating Full Stack, Applied AI, and Embedded IoT workflows.
- **Academic & Experience Timelines**: Responsive vertical timeline showcasing RIT coursework, technical activities, and student leadership with clearly distinguished placeholders for external internships.
- **Developer GitHub Analytics**: Language distribution breakdown, contribution heatmap, and repository showcase.
- **ATS-Friendly Resume**: Printable and downloadable CV supporting browser print-to-PDF (`@media print`) and ATS layout standards.
- **Interactive Contact Terminal**: Simulated socket handshake connection with a client-validated dispatch form.
- **Accessibility & Motion Discipline**: WCAG AA color contrast, visible focus outlines, keyboard navigation, and full compliance with `prefers-reduced-motion`.
- **Dark & Light Mode**: Persistent theme switching using `localStorage` and system preferences (defaults to dark mode).

---

## 🛠️ Technology Stack

- **Framework**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4, CSS Grid, Flexbox
- **Routing**: React Router v7 (`react-router-dom`)
- **Animation**: Motion (`motion/react`), CSS keyframes
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans, Syne, JetBrains Mono
- **SEO & Structured Data**: OpenGraph, Twitter Cards, Schema.org JSON-LD

---

## 📂 Project Architecture

```
src/
 ├── assets/             # Static icons and assets
 ├── components/
 │   ├── common/         # CustomCursor, SectionHeading, ScrollProgress, ThemeToggle, etc.
 │   ├── navigation/     # 3-Zone Navbar, Fullscreen MobileMenu, Footer
 │   ├── hero/           # HeroVisual (Command Center), BackgroundGrid
 │   ├── projects/       # ProjectCard, ArchitectureDiagram
 │   ├── skills/         # SkillCard, SkillGraph
 │   ├── timeline/       # TimelineNode
 │   └── contact/        # ContactTerminal, ContactForm
 ├── pages/              # Home, About, Education, Skills, Projects, Experience, etc.
 ├── data/               # Centralized data files (profile, projects, skills, education...)
 ├── hooks/              # usePrefersReducedMotion, useScrollProgress
 ├── services/           # Backend-ready API abstractions (api, projects, contact, github...)
 ├── types/              # Comprehensive TypeScript interfaces
 ├── layouts/            # RootLayout (Navbar + Outlet + Footer)
 ├── App.tsx             # Application router and theme configuration
 └── main.tsx            # Entry point
```

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development Server

Runs on port 3000 by default:

```bash
npm run dev
```

### 3. Production Build & Preview

```bash
npm run build
npm run preview
```

---

## ⚙️ Environment Variables & Future Backend Integration

All personal content and project records are centralized in `src/data/`. The UI components do not couple directly to static data; instead, they query the service layer in `src/services/`.

To connect this frontend to a real backend REST API:

1. Create a `.env` file (copied from `.env.example`):
   ```bash
   VITE_USE_REMOTE_API="true"
   VITE_API_URL="https://your-backend-api.com/api"
   VITE_USE_LIVE_GITHUB="true"
   ```
2. Your backend needs to implement standard REST endpoints:
   - `GET /api/projects`
   - `GET /api/skills`
   - `GET /api/experience`
   - `GET /api/certifications`
   - `POST /api/contact`
3. No UI components need to be modified.

---

## 🚢 Deployment

### Vercel (Recommended)
This repository includes a `vercel.json` file configuring SPA routing rewrites:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Netlify
Add a `_redirects` file to the `public/` directory:
```
/*    /index.html   200
```

---

## 🖥️ Backend Architecture & Integration

The repository includes a dedicated, production-ready Node.js & Express REST API inside the `backend/` directory.

### Backend Tech Stack
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB Atlas with Mongoose ORM
- **Security**: Helmet, CORS, Express Rate Limit, Express Validator
- **Email Service**: Nodemailer (SMTP / Gmail)

### API Endpoints
- `GET /api/health` — Status & uptime verification
- `POST /api/contact` — Submits inquiries, saves to MongoDB, & triggers email notification
- `GET /api/projects` — Retrieves project showcases (supports `?category=Full Stack`)
- `GET /api/projects/featured` — Retrieves featured project showcases
- `GET /api/projects/:id` — Retrieves project details by ID or slug
- `GET /api/skills` — Retrieves technical skills matrix (supports `?category=Frontend`)

### Local Backend Setup
```bash
cd backend
npm install
npm run dev
```

For full backend documentation, MongoDB seeding, email setup, and Render cloud deployment guidelines, refer to [`backend/README.md`](file:///c:/Users/Shreyas/Desktop/website/Personal__portfolio/backend/README.md).

---

## 📝 License & Contact

- **Author**: Shreyas Thorat
- **GitHub**: [ShreyasThorat72](https://github.com/ShreyasThorat72)
- **LinkedIn**: [Shreyas Thorat](https://www.linkedin.com/in/shreyas-thorat-867040214/)
- **Email**: shreyasthorat717@gmail.com

