import type { Contact, Education, Experience, Profile, Project, Skill } from '@/types/resume'

/**
 * 个人数据访问层 (Data Layer)
 * 聚合 SeanChen (Akiha678) 的真实开源作品、技术栈与实践经验。
 */

export interface ResumeData {
  profile: Profile
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  contact: Contact
  education: Education[]
}

export const resumeData: ResumeData = {
  profile: {
    name: 'SeanChen',
    handle: 'Akiha678',
    title: '跨平台与客户端全栈工程师',
    tagline: '熬夜喝酒写代码，吃饱喝足打贝贝。',
    bio: '深耕跨平台与移动客户端架构。在 Android 原生 (Kotlin / Jetpack Compose / CameraX / JNI NDK)、iOS (Swift)、高性能跨端 (Flutter + Rust / Qt C++) 以及现代 Web 前端 (React 19 / TypeScript) 拥有全面的工程实践与开源沉淀。热衷于系统级性能优化、底层音视频/通信探索与高复用组件化体系搭建。',
    avatarUrl: 'https://avatars.githubusercontent.com/u/153362937?v=4',
    status: '开源活跃中 · 热爱技术探索',
    stats: [
      { label: '开源代码库', value: '8+ Repos' },
      { label: '多端核心语言', value: '7+ 门语言' },
      { label: '研发实验室', value: 'Smartlab411' },
      { label: '常驻坐标', value: '中国 · 湖北' },
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Akiha678', icon: 'github' },
      { label: 'Smartlab411', url: 'https://github.com/Smartlab411', icon: 'website' },
      { label: '快速联系', url: 'mailto:akiha678@outlook.com', icon: 'mail' },
    ],
  },
  experiences: [
    {
      id: 'exp-1',
      company: 'Smartlab411 实验室',
      role: '客户端与系统架构研发',
      startDate: '2023.09',
      endDate: null,
      current: true,
      summary: '主导移动端与桌面跨平台基础脚手架及音视频多媒体通讯架构预研与落地。',
      highlights: ['Kotlin', 'Compose', 'CameraX', 'Flutter', 'Rust', 'Qt C++'],
      bullets: [
        '主导 XinCamera 影像处理模块设计，打通 CameraX 与 NDK C++ 底层管线，实现高帧率预览与图像处理。',
        '预研并开源 Frs-Kit 架构，建立 Flutter 与 Rust 的高性能跨语言 FFI 机制，大幅提升密集计算场景效率。',
        '统一设计并开发 XinComponent 组件库，覆盖 UI 交互、网络封装与工具链，显著提升多项目复用效能。',
      ],
    },
    {
      id: 'exp-2',
      company: '开源社区 & 独立技术探索',
      role: '开源创作者 & 全栈工程师',
      startDate: '2022.03',
      endDate: '2023.08',
      summary: '在 GitHub 持续输出高质量客户端应用、脚手架工程与现代 Web 全栈项目。',
      highlights: ['Swift', 'TypeScript', 'React 19', 'WebSocket', 'IM Protocol'],
      bullets: [
        '独立实现多端即时通讯架构 (XinChat Android / Swift iOS / Qt C++ 桌面端)，保持通信协议与状态同步高度一致。',
        '研发轻量记账应用 BookKeep 及在线简历系统，运用现代化 React 与 TypeScript 进行高可用工程化落地。',
        '推行 Clean Architecture 与声明式 UI 范式，坚持编写类型严密、可维护、可测试的干净代码。',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-xincamera',
      name: 'XinCamera',
      category: 'Mobile',
      language: 'Kotlin',
      description: '基于 CameraX + Jetpack Compose + JNI/C++ 的 Android 高性能相机与底层图像处理项目。',
      stars: 2,
      details: [
        '纯 Jetpack Compose 打造响应式取景交互界面，利用 CameraX 抽象灵活控制曝光、对焦与镜头参数。',
        '集成 JNI / C++ (NDK) 底层图像处理算法，实现实时 YUV 图像流帧级高效处理与滤波渲染。',
      ],
      tags: ['Android', 'Kotlin', 'CameraX', 'Jetpack Compose', 'JNI / C++', 'NDK'],
      url: 'https://github.com/Akiha678/XinCamera',
      sourceUrl: 'https://github.com/Akiha678/XinCamera',
    },
    {
      id: 'proj-frs-kit',
      name: 'Frs-Kit',
      category: 'CrossPlatform',
      language: 'Rust / Flutter',
      description: '现代 Flutter + Rust 高性能跨平台应用研发脚手架，结合极致渲染与内存安全系统能力。',
      stars: 1,
      details: [
        '构建 Flutter (Dart) 与 Rust 间零开销安全 FFI 管道，计算密集型任务交由 Rust 多线程高效执行。',
        '提供全套跨平台桌面与移动端工程模板、自动化代码绑定生成以及模块化状态架构。',
      ],
      tags: ['Flutter', 'Rust', 'Dart', 'FFI', 'Desktop / Mobile', 'Scaffold'],
      url: 'https://github.com/Akiha678/Frs-Kit',
      sourceUrl: 'https://github.com/Akiha678/Frs-Kit',
    },
    {
      id: 'proj-xinchat-android',
      name: 'XinChat (Android)',
      category: 'Mobile',
      language: 'Kotlin',
      description: '基于 Kotlin 与 Jetpack Compose 的现代化移动端即时通信 (IM) 客户端。',
      stars: 1,
      details: [
        '采用 Compose 构建丝滑会话流、富文本气泡与表情交互，利用 StateFlow 驱动单向数据流。',
        '实现高可靠 WebSocket 双工长连接、心跳保活、离线重连机制与消息状态机同步。',
      ],
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'WebSocket', 'IM', 'Coroutines'],
      url: 'https://github.com/Akiha678/XinChat',
      sourceUrl: 'https://github.com/Akiha678/XinChat',
    },
    {
      id: 'proj-xinchat-swift',
      name: 'XinChat_Swift (iOS)',
      category: 'Mobile',
      language: 'Swift',
      description: '基于 Swift 构建的 XinChat iOS 客户端，多端架构对齐并还原苹果原生质感体验。',
      stars: 1,
      details: [
        '使用现代 Swift 与 async/await 并发模型，实现与 Android/桌面端一致的通讯交互与协议编解码。',
        '开源给开发者作为学习现代 Swift 移动网络通信与架构设计的优秀实践范例。',
      ],
      tags: ['iOS', 'Swift', 'SwiftUI', 'Async/Await', 'IM Protocol', 'Networking'],
      url: 'https://github.com/Akiha678/XinChat_Swift',
      sourceUrl: 'https://github.com/Akiha678/XinChat_Swift',
    },
    {
      id: 'proj-xinchat-qt',
      name: 'XinChat_QT',
      category: 'Desktop',
      language: 'C++',
      description: '基于 Qt C++ 的桌面端即时通信客户端，探索高性能桌面 GUI 与底层通信。',
      stars: 1,
      details: [
        '采用 Qt 现代架构解耦网络传输与界面渲染，支持跨 Windows / Linux / macOS 桌面平台运行。',
        '深度定制桌面托盘、消息气泡弹窗与低资源占用的本地通信缓存。',
      ],
      tags: ['Qt', 'C++', 'QML', 'Desktop', 'Socket', 'Cross-Platform'],
      url: 'https://github.com/Akiha678/XinChat_QT',
      sourceUrl: 'https://github.com/Akiha678/XinChat_QT',
    },
    {
      id: 'proj-qt-kit',
      name: 'Qt-Kit',
      category: 'Desktop',
      language: 'C++',
      description: '现代化 Qt C++ 跨平台工程脚手架，加速桌面级商业与工具软件研发。',
      stars: 1,
      details: [
        '采用现代 CMake 进行工程化构建与依赖管理，内置全局主题引擎（Dark/Light）、日志诊断与配置管理。',
        '开箱即用支持模块化插件开发与多语言国际化支持。',
      ],
      tags: ['Qt', 'C++', 'CMake', 'Architecture', 'Desktop Tools'],
      url: 'https://github.com/Akiha678/Qt-Kit',
      sourceUrl: 'https://github.com/Akiha678/Qt-Kit',
    },
    {
      id: 'proj-xincomponent',
      name: 'XinComponent',
      category: 'Library',
      language: 'Kotlin',
      description: '高内聚、模块化自封装组件库，涵盖 UI 交互组件、工具类与底层网络封装。',
      stars: 1,
      details: [
        '模块化拆分基础 UI 控件、常用扩展函数与异步网络请求封装，降低业务系统耦合度。',
        '经过多个实际项目沉淀，具有良好的稳定性与快速接入能力。',
      ],
      tags: ['Kotlin', 'Android', 'Component Library', 'Design Tokens', 'Networking'],
      url: 'https://github.com/Akiha678/XinComponent',
      sourceUrl: 'https://github.com/Akiha678/XinComponent',
    },
    {
      id: 'proj-bookkeep',
      name: 'BookKeep',
      category: 'Web',
      language: 'TypeScript',
      description: '轻量化智能记账与收支统计 Web 应用，提供敏捷记账体验与直观财务看板。',
      stars: 1,
      details: [
        '全 TypeScript 类型约束与现代化组件设计，支持多维度收支记录、预算追踪与数据本地安全存储。',
        '响应式视图适配，支持移动端触控与桌面端键鼠快捷输入。',
      ],
      tags: ['TypeScript', 'React', 'Data Visualization', 'PWA', 'Productivity'],
      url: 'https://github.com/Akiha678/BookKeep',
      sourceUrl: 'https://github.com/Akiha678/BookKeep',
    },
    {
      id: 'proj-cv',
      name: 'CV Portfolio',
      category: 'Web',
      language: 'TypeScript',
      description: '极客风多主题个人在线简历与作品集，现代化 UI 与精细工程化架构落地。',
      stars: 1,
      details: [
        'React 19 + TypeScript + Vite 强类型构建，领域模型与展示层解耦。',
        '融入主流科技美学（暗黑星空/明亮清爽双主题、毛玻璃、微动效、A4 打印优化）。',
      ],
      tags: ['React 19', 'TypeScript', 'Vite', 'Modern Aesthetics', 'Responsive'],
      url: 'https://github.com/Akiha678',
      sourceUrl: 'https://github.com/Akiha678',
    },
  ],
  skills: [
    { name: 'Kotlin / Compose', level: 92, category: '移动原生' },
    { name: 'Android NDK / JNI', level: 86, category: '移动原生' },
    { name: 'CameraX / 图像底层', level: 84, category: '移动原生' },
    { name: 'Swift / iOS', level: 85, category: '移动原生' },

    { name: 'Rust', level: 82, category: '跨平台与系统' },
    { name: 'Flutter / Dart', level: 88, category: '跨平台与系统' },
    { name: 'C++ / Qt', level: 86, category: '跨平台与系统' },
    { name: 'FFI 跨语言互操作', level: 85, category: '跨平台与系统' },

    { name: 'TypeScript', level: 90, category: 'Web & 全栈' },
    { name: 'React 19', level: 88, category: 'Web & 全栈' },
    { name: 'HTML5 / Modern CSS', level: 88, category: 'Web & 全栈' },
    { name: 'Node.js', level: 80, category: 'Web & 全栈' },

    { name: 'Clean Architecture', level: 90, category: '架构与工程' },
    { name: '即时通讯 / WebSocket', level: 88, category: '架构与工程' },
    { name: 'CMake / 构建工具链', level: 85, category: '架构与工程' },
    { name: 'Git / CI/CD 自动化', level: 88, category: '架构与工程' },
  ],
  contact: {
    email: 'akiha678@outlook.com',
    location: '中国 · 湖北 (HuBei)',
    webs: [
      { label: 'GitHub: Akiha678', url: 'https://github.com/Akiha678' },
      { label: 'Smartlab411', url: 'https://github.com/Smartlab411' },
    ],
  },
  education: [
    {
      id: 'edu-001',
      school: 'Smartlab411 实验室 / 计算机相关专业',
      major: '计算机科学与技术 / 软件工程',
      degree: '本科 / 实验室研发',
      startDate: '2021.09',
      endDate: '2025.06',
      description: '主修计算机体系结构、操作系统、数据结构与算法、计算机网络。专注客户端与跨平台系统方向。',
    },
  ],
}

export const educationData: Education[] = resumeData.education