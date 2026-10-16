<div align="center">

  <img src="public/logo.png" alt="CV Portfolio Logo" width="100" height="100" style="border-radius: 20%;" />

  # 🌟 Modern CV & Portfolio

  **A sleek, performant, and modern developer resume and portfolio website powered by React 19, TypeScript, and Vite 8.**

  <p align="center">
    <a href="README_EN.md"><b>English</b></a> •
    <a href="README.md">简体中文</a>
  </p>

  <p align="center">
    <a href="https://github.com/Akiha678/CV/actions/workflows/deploy.yml">
      <img src="https://img.shields.io/github/actions/workflow/status/Akiha678/CV/deploy.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=Deploy" alt="Deploy Status" />
    </a>
    <a href="https://github.com/Akiha678/CV/releases">
      <img src="https://img.shields.io/github/v/release/Akiha678/CV?style=flat-square&color=blue" alt="Latest Release" />
    </a>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-6.0%2B-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    </a>
    <a href="https://vite.dev/">
      <img src="https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" alt="MIT License" />
    </a>
  </p>

  <p align="center">
    <a href="https://akiha678.github.io/CV/">🌐 Live Demo</a> •
    <a href="#-getting-started">🚀 Getting Started</a> •
    <a href="#-customization-guide">🎨 Customization</a> •
    <a href="#-deployment">🚢 Deployment</a>
  </p>

</div>

---

## 📖 Introduction

**CV** is a modern, high-aesthetic online resume and engineering portfolio template crafted for mobile and full-stack software engineers. Steering clear of bulky UI frameworks, it utilizes pure **CSS Modules + Design Tokens** to deliver a lightweight, high-performance, and futuristic user experience.

Out of the box, it features real-time **GitHub REST API** synchronization, **dark/light adaptive theme switching**, route-level code splitting, and robust deployment configurations ranging from **GitHub Pages CI/CD** to production-ready **Docker containerization**.

> 💡 **Live Interactive Demo**: [https://akiha678.github.io/CV/](https://akiha678.github.io/CV/)

---

## ✨ Key Features

- ⚡️ **Blazing Fast & Cutting-Edge Stack**: Built with React 19 and Vite 8, featuring sub-second HMR and minimal production bundle sizes.
- 🎨 **Minimalist Tech Aesthetic (Design Tokens)**:
  - Frosted glassmorphism, subtle glowing accents, and fluid shadows;
  - Comprehensive dark and light theme switching with smooth CSS transitions;
  - Pure CSS Modules for scoped styles without redundant CSS runtime overhead.
- 🔄 **Real-time GitHub API Integration**:
  - Automatically fetches user profile details, public repositories, and star counts;
  - Features intelligent 15-minute `localStorage` caching paired with seamless offline fallback data.
- 🧩 **Clean Layered Architecture**:
  - Decoupled into `core` (infrastructure & tokens), `types` (domain models), `services` (data repository layer), `components` (presentation layer), and `pages` (page controllers).
- 📱 **Fully Responsive Layout**:
  - Desktop floating capsule navigation bar with scroll detection and hover indicators;
  - Mobile native-style drawer menu with smooth gesture backdrop interactions.
- 🛡️ **Resilient & Robust**:
  - Route-level code splitting via `React.lazy` and `Suspense` skeleton states;
  - Global error boundaries (`ErrorBoundary`) to prevent unhandled UI crashes;
  - HashRouter navigation for zero-configuration compatibility across static hosting platforms.
- 🚢 **Production Ready Deployment**:
  - Automated GitHub Actions workflow deploying directly to GitHub Pages;
  - Multi-stage Docker build producing an ultra-lightweight Nginx Alpine image;
  - Pre-configured production Nginx rules with Gzip compression and aggressive 1-year asset caching.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | Modern React primitives with strict type safety |
| **Build Tool** | [Vite 8](https://vite.dev/) | Next-generation frontend tooling with instant server start |
| **Routing** | [React Router v7](https://reactrouter.com/) | Declarative Hash-based client-side routing for static hosts |
| **Styling** | CSS Modules + CSS Custom Properties | Pure, scoped CSS variables with zero external dependencies |
| **Icons** | [Lucide React](https://lucide.dev/) | Beautiful, consistent, and lightweight feather-based icons |
| **Container & Proxy** | Docker + Docker Compose + Nginx Alpine | Minimal production image with optimized reverse proxy & caching |
| **Linting & Quality** | ESLint 9/10 + TypeScript ESLint | Modern flat configuration for strict code quality |

---

## 📁 Directory Structure

```text
CV/
├── .github/workflows/       # GitHub Actions automated workflows
│   └── deploy.yml           # Automated build & deployment to GitHub Pages
├── public/                  # Static web assets (Logo, Favicon, Avatar, etc.)
├── src/
│   ├── assets/              # Local images and media assets
│   ├── components/          # Reusable component library
│   │   ├── layout/          # Layout shells (Header, Footer, Main Layout)
│   │   ├── sections/        # Domain sections (Hero, About, Projects, Skills, Experience, Contact)
│   │   ├── ui/              # Atomic UI primitives (Button, Card, Badge, Icon, Section, PageLoading)
│   │   └── ErrorBoundary.tsx# Fallback error boundary component
│   ├── config/              # Site settings (Navigation items and routes)
│   ├── contexts/            # React contexts (ThemeContext, ToastContext)
│   ├── core/                # Core tokens, typography base, and class utilities
│   ├── data/                # Static resume data source (Bio, Experience, Projects, Skills)
│   ├── hooks/               # Custom reusable React hooks
│   ├── pages/               # Page components (HomePage, ProjectsPage, ContactPage)
│   ├── services/            # Data services (GitHub API integration & caching)
│   ├── types/               # TypeScript domain model definitions
│   ├── App.tsx              # Router tree & Suspense code splitting configuration
│   └── main.tsx             # Application entry point
├── Dockerfile               # Production multi-stage Docker build
├── docker-compose.yml       # Docker Compose orchestration
├── nginx.conf               # High-performance Nginx config (Gzip, caching, SPA routing)
├── deploy.sh                # Shell deployment script for remote servers
├── vite.config.ts           # Vite build configuration and path aliases (@)
└── package.json             # Project dependencies and script commands
```

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure your development environment meets the following requirements:
- **Node.js**: `20.0.0` or higher
- **Package Manager**: `npm` (recommended), `pnpm`, or `yarn`

### 2. Clone & Install Dependencies

```bash
# Clone the repository
git clone https://github.com/Akiha678/CV.git

# Navigate into the project folder
cd CV

# Install dependencies
npm install
```

### 3. Local Development

```bash
# Start the local development server with Hot Module Replacement (HMR)
npm run dev
```

Open your browser and navigate to the printed local address (typically `http://localhost:5173/`).

### 4. Build & Preview

```bash
# Run TypeScript compilation and build production-ready assets
npm run build

# Preview the built production output locally
npm run preview
```

---

## 🎨 Customization Guide

The project is structured with a data-driven model, making it effortless to customize with your own information:

### 1. Update Personal Profile & Experiences

Open [`src/data/resume.ts`](src/data/resume.ts) and modify the fields to match your background:
- **`profile`**: Name, target title, bio, motto, contact links, and avatar image.
- **`experiences`**: Internships and work history (company name, role, date range, highlights, achievements).
- **`projects`**: Featured software projects (name, architectural description, tech stack, repo links, demo URLs).
- **`skills`**: Technical skill groups and proficiency levels.
- **`education` & `honors`**: Academic degree info and awards.

### 2. Connect Your GitHub Account

Open [`src/services/githubService.ts`](src/services/githubService.ts) and replace the default fallback username with your own GitHub handle:

```typescript
// Replace with your personal GitHub username
export async function fetchGitHubUser(username: string = 'YOUR_GITHUB_USERNAME') { ... }
export async function fetchGitHubRepos(username: string = 'YOUR_GITHUB_USERNAME') { ... }
```

### 3. Customize Navigation

To add, remove, or modify header navigation links, edit [`src/config/navigation.ts`](src/config/navigation.ts).

---

## 🚢 Deployment

### Method 1: Deploy to GitHub Pages (Recommended)

The repository includes a ready-to-use GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)):

1. Push your changes to the `main` (or `master`) branch on GitHub.
2. Go to your repository settings on GitHub: **Settings** -> **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Future pushes will automatically trigger the CI/CD pipeline and publish your website.

### Method 2: Docker & Docker Compose

Deploy on any server with Docker and Docker Compose installed:

```bash
# 1. Build and run container in detached mode
docker compose up -d --build

# 2. Check container status (mapped to host port 9092 by default)
docker compose ps

# 3. Stop containers
docker compose down
```

After starting, navigate to `http://<YOUR_SERVER_IP>:9092`. To change the exposed port, modify [`docker-compose.yml`](docker-compose.yml).

### Method 3: Automated Shell Deployment Script

If hosting directly on a Linux virtual machine, you can use the bundled [`deploy.sh`](deploy.sh) script:

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Compiles TypeScript and creates optimized production build |
| `npm run lint` | Runs ESLint across the codebase |
| `npm run preview` | Serves the production `dist` directory locally |

---

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the [MIT License](LICENSE). You are free to adapt, fork, and use this template for your personal CV or portfolio.

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <a href="https://github.com/Akiha678">Sean Chen (Akiha678)</a></sub>
</div>
