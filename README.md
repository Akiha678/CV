<div align="center">

  <img src="public/logo.png" alt="CV Portfolio Logo" width="100" height="100" style="border-radius: 20%;" />

  # 🌟 Modern CV & Portfolio

  **基于 React 19 + TypeScript + Vite 8 构建的高颜值、现代化工程师在线简历与个人作品集系统**

  <p align="center">
    <a href="README_EN.md">English</a> •
    <a href="README.md"><b>简体中文</b></a>
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
    <a href="https://akiha678.github.io/CV/">🌐 在线预览 Demo</a> •
    <a href="#-快速开始">🚀 快速开始</a> •
    <a href="#-定制专属简历">🎨 定制指南</a> •
    <a href="#-部署运维">🚢 部署运维</a>
  </p>

</div>

---

## 📖 简介

**CV** 是一个专为全栈与移动端开发者打造的现代化在线简历与技术作品集网站。它摒弃了冗余重型的 UI 库，使用原生 **CSS Modules + Design Tokens** 打造出极致轻盈且富有科技质感的视觉体系。

项目内置对 **GitHub REST API** 的实时聚合、**深色/浅色自适应主题**、路由懒加载与渐进式展示能力，并具备从 **GitHub Pages** 自动化部署到 **Docker 生产级容器化** 的全套工程化配置，开箱即用。

> 💡 **在线演示体验**：[https://akiha678.github.io/CV/](https://akiha678.github.io/CV/)

---

## ✨ 核心特性

- ⚡️ **极致性能与现代技术栈**：采用最新的 React 19、Vite 8 构建，极速毫秒级 HMR，生产包体积小、加载快。
- 🎨 **极简科技美学 (Design Tokens)**：
  - 核心设计采用毛玻璃质感（Glassmorphism）、微光晕边框与流体阴影；
  - 完善的暗黑 / 明亮双主题自适应，支持平滑动态过渡；
  - 纯 CSS Modules 实现组件样式隔离，零额外大型 CSS 运行时开销。
- 🔄 **GitHub 动态数据流集成**：
  - 实时接入 GitHub API 获取个人 Profile、公开开源仓库及 Star 统计；
  - 配备 15 分钟 LocalStorage 智能缓存策略，并提供离线静态数据的优雅降级（Graceful Degradation）。
- 🧩 **规范的分层工程架构**：
  - 严格划分为 `core`（核心设施）、`types`（领域契约）、`services`（数据仓储）、`components`（展示层）与 `pages`（路由控制器）。
- 📱 **全终端响应式适配**：
  - 桌面端悬浮毛玻璃胶囊导航，支持滚动高亮与交互反馈；
  - 移动端原生级侧滑抽屉导航与流畅手势遮罩交互。
- 🛡️ **高可靠与健壮性**：
  - 页面级 `React.lazy` + `Suspense` 骨架分包加载；
  - 全局与局部 `ErrorBoundary` 异常边界兜底防护；
  - 基于 Hash 路由机制，天然兼容各类静态托管与子目录访问。
- 🚢 **全链路开箱即用部署**：
  - 内置 GitHub Actions CI/CD 工作流，一键自动化发布至 GitHub Pages；
  - 包含多阶段 Dockerfile 构建（Alpine 基础镜像仅数 MB）与 Docker Compose 编排；
  - 预配置生产级 Nginx 配置（Gzip 压缩、1年静态强缓存、协商缓存）。

---

## 🛠️ 技术栈一览

| 模块 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **基础核心** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) | 最新版 React 核心框架与严格类型安全 |
| **构建工具** | [Vite 8](https://vite.dev/) | 下一代现代化前端构建工具，极速冷启动 |
| **路由系统** | [React Router v7](https://reactrouter.com/) | 声明式 Hash 路由配置，天然适配静态网站托管 |
| **样式方案** | CSS Modules + CSS Custom Properties | 模块化纯 CSS 设计令牌系统，轻量纯粹 |
| **图标库** | [Lucide React](https://lucide.dev/) | 统一现代轻量线性图标集合 |
| **容器化与网关** | Docker + Docker Compose + Nginx Alpine | 极小体积生产容器镜像与高并发静态反代 |
| **代码规范** | ESLint 9/10 + TypeScript ESLint | 严格的代码规范与静态类型审查 |

---

## 📁 目录架构说明

```text
CV/
├── .github/workflows/       # GitHub Actions 自动化 CI/CD 配置
│   └── deploy.yml           # 自动化构建并发布至 GitHub Pages
├── public/                  # 静态资源 (Logo、Favicon、头像等)
├── src/
│   ├── assets/              # 本地静态图片与媒体资源
│   ├── components/          # 组件层
│   │   ├── layout/          # 全局布局 (Header, Footer, Layout 骨架)
│   │   ├── sections/        # 业务板块 (Hero, About, Projects, Skills, Experience, Contact)
│   │   ├── ui/              # 原子通用组件 (Button, Card, Badge, Icon, Section, PageLoading)
│   │   └── ErrorBoundary.tsx# 统一容错边界
│   ├── config/              # 站点配置 (导航项路由等)
│   ├── contexts/            # React 上下文状态 (Theme 主题、Toast 弹窗)
│   ├── core/                # 基础设施层 (Tokens 变量、基础排版与类名合并工具)
│   ├── data/                # 简历静态数据源 (个人介绍、经历、项目、技能等)
│   ├── hooks/               # 自定义 React Hooks
│   ├── pages/               # 页面控制器 (HomePage, ProjectsPage, ContactPage)
│   ├── services/            # 数据接入与服务层 (GitHub API 联动与缓存)
│   ├── types/               # 全局领域类型声明 (Resume, GitHub 数据模型)
│   ├── App.tsx              # 路由路由树与 Suspense 分包配置
│   └── main.tsx             # 客户端入口挂载
├── Dockerfile               # 生产环境多阶段 Docker 构建
├── docker-compose.yml       # Docker Compose 一键启动编排
├── nginx.conf               # 生产优化 Nginx 反代配置 (Gzip / 强缓存)
├── deploy.sh                # 服务器自动化部署脚本
├── vite.config.ts           # Vite 工程配置与路径别名 (@)
└── package.json             # 依赖与脚本声明
```

---

## 🚀 快速开始

### 1. 环境准备

请确保本地已安装运行环境：
- **Node.js**: `20.0.0` 或更高版本
- **包管理器**: `npm`（推荐）、`pnpm` 或 `yarn`

### 2. 克隆项目与安装依赖

```bash
# 克隆仓库
git clone https://github.com/Akiha678/CV.git

# 进入项目目录
cd CV

# 安装依赖
npm install
```

### 3. 本地开发调试

```bash
# 启动本地热更新开发服务器 (默认端口通常为 5173)
npm run dev
```

启动后在浏览器中访问控制台输出的地址即可（如：`http://localhost:5173/`）。

### 4. 项目构建与本地预览

```bash
# TypeScript 类型检查并执行生产包构建
npm run build

# 预览生产打包产物
npm run preview
```

---

## 🎨 定制专属简历

项目采用数据驱动设计，只需简单修改少量数据文件，即可快速定制属于您自己的简历与作品集：

### 1. 修改简历基本信息与经历

打开 [`src/data/resume.ts`](src/data/resume.ts)，根据您的个人背景替换以下内容：
- **`profile`**：姓名、职业意向、个人座右铭、个人简介、联系方式、头像路径。
- **`experiences`**：实习与工作经历（公司、职位、时间、技术亮点、具体成果）。
- **`projects`**：代表性项目（项目名称、架构描述、技术栈、链接与演示地址）。
- **`skills`**：专业技能列表与能力掌握度。
- **`education` & `honors`**：教育背景与所获荣誉奖项。

### 2. 配置您的 GitHub 动态数据

打开 [`src/services/githubService.ts`](src/services/githubService.ts)，将默认参数中的用户名替换为您本人的 GitHub 用户名：

```typescript
// 替换为您的 GitHub 用户名
export async function fetchGitHubUser(username: string = 'YOUR_GITHUB_USERNAME') { ... }
export async function fetchGitHubRepos(username: string = 'YOUR_GITHUB_USERNAME') { ... }
```

### 3. 自定义导航菜单

如果需要增删导航栏页面或调整路由名称，直接编辑 [`src/config/navigation.ts`](src/config/navigation.ts) 即可。

---

## 🚢 部署运维

### 方案一：部署至 GitHub Pages（推荐，自动化 CI/CD）

项目已默认配置好 GitHub Actions 工作流（[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)）：

1. 将代码推送到 GitHub 的 `main`（或 `master`）分支。
2. 进入 GitHub 仓库设置：**Settings** -> **Pages**。
3. 在 **Build and deployment** 下将 **Source** 选为 **GitHub Actions**。
4. 后续每次 push 代码都会自动触发构建并无缝更新上线。

### 方案二：Docker & Docker Compose 部署

项目包含生产级多阶段 `Dockerfile`，体积小且经过生产性能调优：

```bash
# 1. 一键构建并后台启动容器
docker compose up -d --build

# 2. 查看容器运行状态 (默认映射宿主机 9092 端口)
docker compose ps

# 3. 停止运行
docker compose down
```

启动后，访问 `http://<服务器IP>:9092` 即可直接访问。若需更改映射端口，可直接编辑 [`docker-compose.yml`](docker-compose.yml)。

### 方案三：使用 Shell 脚本自动化部署

如果部署在独立的 Linux 云服务器上，可直接利用项目根目录的 [`deploy.sh`](deploy.sh)：

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 💻 常用脚本命令

| 命令 | 说明 |
| :--- | :--- |
| `npm run dev` | 启动 Vite 本地开发服务器（支持 HMR） |
| `npm run build` | 执行 TypeScript 类型编译与生产打包 |
| `npm run lint` | 运行 ESLint 进行全量代码风格检查 |
| `npm run preview` | 本地预览编译后的 `dist` 生产环境产物 |

---

## 🤝 参与贡献

欢迎提交 Issue 和 Pull Request 来帮助完善此项目！

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的修改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到远程分支 (`git push origin feature/AmazingFeature`)
5. 新建 Pull Request

---

## 📄 开源许可证

本项目采用 [MIT 许可证](LICENSE) 开源。您可以自由用于个人简历展示、二次开发或定制。

---

<div align="center">
  <sub>Designed & Developed with ❤️ by <a href="https://github.com/Akiha678">Sean Chen (Akiha678)</a></sub>
</div>
