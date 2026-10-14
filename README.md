# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
src/
├── core/                                # 核心基础设施层 (无业务依赖)
│   ├── contexts/                        # 全局状态 (ThemeContext, ToastContext)
│   │   ├── ToastContext.tsx
│   │   └── Toast.module.css             # 现代毛玻璃浮动 Toast 样式
│   ├── styles/                          # 全局样式基础与设计令牌
│   │   ├── tokens.css                   # 色板、渐变、阴影、层级令牌
│   │   ├── base.css                     # 现代排版与重置
│   │   └── index.css                    # 全局科技网格、光晕与滚动条
│   └── utils/
│       └── cn.ts                        # 类型安全的类名合并工具
├── types/                               # 领域契约层 (Domain Models)
│   ├── resume.ts                        # 简历/作品集数据模型
│   └── github.ts                        # GitHub API 数据契约
├── services/                            # 数据访问与外部服务层 (Repository Pattern)
│   ├── githubService.ts                 # 异步获取 GitHub 仓库、Stars，支持本地 15m 缓存与优雅降级
│   └── resumeService.ts                 # 聚合本地数据与实时 GitHub API 的统一服务 Hook (useResumeData)
├── components/                          # 表现层 (Presentation Layer)
│   ├── ui/                              # 原子 UI 原语 (带 CSS Modules)
│   │   ├── Button/                      # variants: primary, secondary, outline, ghost
│   │   ├── Card/                        # 支持 hoverable, glow, glass 变体
│   │   ├── Badge/                       # 状态与语言标签
│   │   ├── Section/                     # 统一规范的容器区块
│   │   ├── Icon/                        # Lucide React + 官方品牌 SVG
│   │   └── PageLoading/                 # Suspense 科技感骨架加载
│   ├── layout/                          # 应用外壳布局 (CSS Modules)
│   │   ├── Header/ (Header.module.css)  # 悬浮毛玻璃胶囊、导出简历、主题切换
│   │   ├── Footer/ (Footer.module.css)  # 品牌区、回到顶部
│   │   └── Layout/ (Layout.module.css)  # 统一页面容器
│   └── sections/                        # 领域业务区块 (全面重构为 CSS Modules)
│       ├── Hero/ (Hero.module.css)      # 个人形象、指标栏、快速复制邮箱
│       ├── About/ (About.module.css)    # macOS 终端哲学卡片
│       ├── Projects/ (Projects.module.css) # 开源项目矩阵、分类过滤、语言色标
│       ├── Skills/ (Skills.module.css)  # 技能分类柱状矩阵
│       ├── Experience/ (Experience.module.css) # 研发经历时间轴与脉冲节点
│       └── Contact/ (Contact.module.css)# 联系方式卡片与在线留言表单
├── pages/                               # 页面控制器 (Page Controllers)
│   ├── HomePage.tsx                     # 消费 useResumeData 驱动全览
│   ├── ProjectsPage.tsx                 # 项目独立路由
│   └── ContactPage.tsx                  # 联系我独立路由
├── App.tsx                              # React.lazy + Suspense 路由分包与 ErrorBoundary
└── main.tsx                             # 全局 Provider 组合挂载
