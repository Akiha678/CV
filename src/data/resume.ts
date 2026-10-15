import avatarImg from '@/assets/image/avatar.jpg'
import type { Contact, Education, Experience, Honor, Profile, Project, Skill } from '@/types/resume'

export interface ResumeData {
  profile: Profile
  experiences: Experience[]
  projects: Project[]
  skills: Skill[]
  honors: Honor[]
  contact: Contact
  education: Education[]
}

export const resumeData: ResumeData = {
  profile: {
    name: '陈鑫',
    handle: 'SeanChen',
    tagline: '板凳要坐十年冷，星光不问赶路人',
    bio: 'Android方面主要使用Jetpack Compose + MVVM架构开发，熟悉 ViewModel、Room等常用的Jetpack组件，熟练使用 Kotlin协程、StateFlow、Retrofit等现代Android开发技术。Flutter方面熟悉Provider状态管理，go_router路由框架和跨平台通信机制，能够通过Method Channel实现原生与 Flutter 混合开发。',
    avatarUrl: avatarImg,
    status: '求职意向：移动端开发工程师',
    school: '荆州学院',
    major: '软件工程（本科）',
    graduation: '2027 年 6 月毕业',
    location: '江浙沪',
    targetCity: '全国可飞',
    stats: [
      { label: '编程语言', value: 'Kotlin/Dart' },
      { label: '核心方向', value: 'Android/Flutter' },
      { label: '毕业院校', value: '荆州学院' },
      { label: '期望城市', value: '全国可飞' },
    ],
    links: [
      { label: 'GitHub: Akiha678', url: 'https://github.com/Akiha678', icon: 'github' },
      { label: '掘金主页', url: 'https://juejin.cn/user/1502355831661744', icon: 'document' },
    ],
  },

  experiences: [
    {
      id: 'exp-1',
      company: '中科融合（苏州）',
      role: '移动端开发实习生',
      startDate: '2026.06',
      endDate: null,
      current: true,
      summary: '主导智能骑行场景跨平台客户端核心功能开发，打通 Flutter 与 Android BLE 原生通信通道。',
      highlights: ['Flutter', 'Android BLE SDK', 'Method Channel', 'GATT', 'Provider', 'go_router'],
      bullets: [
        '基于 Flutter 封装 Android BLE SDK，实现与固态激光蓝牙硬件设备的深度联动与闭环控制。',
        '统一管理扫描连接、自动重连与状态同步，形成“指令下发 + 状态回传”的高可靠通信流。',
        '使用 flutter_downloader 与 Isolate 实现后台静默下载、安装权限申请与触发系统应用更新。',
      ],
    },
    {
      id: 'exp-2',
      company: '三赫智能',
      role: '移动端开发实习生',
      startDate: '2025.09',
      endDate: '2026.05',
      summary: '负责油田井下套管形变专业分析软件开发，构建双平台一致性业务架构与复杂数据可视化界面。',
      highlights: ['Jetpack Compose', 'OkHttp', 'Flow', 'Room', 'Hilt'],
      bullets: [
        '基于 Canvas + Tile 实现工业级瓦片地图异步分块加载与 Bitmap 高性能缓存渲染。',
        '实现自定义多轨波形曲线绘制与深度轴同步滚动，结合分级降采样策略保障大规模测井数据流畅渲染。',
        '引入 Material3 Adaptive + WindowSizeClass，实现手机、折叠屏与平板的多尺寸动态自适应。',
      ],
    },
    {
      id: 'exp-3',
      company: '长江大学',
      role: '移动端开发',
      startDate: '2025.02',
      endDate: '2025.08',
      summary: '本项目面向桥梁结构的健康监测场景，通过 WebSocket 实现通信与边缘设备联动，实现智能硬件远程控制等模块。',
      highlights: ['Flutter', 'Provider', 'Dio', 'TDesign', 'go_router'],
      bullets: [
        '硬件远程控制：WebSocketService 单例模式建立长连接，形成 HTTP 发指令 + WebSocket 收状态的双通道控制，实现设备远程启停与实时同步设备状态。',
        '异常实时报警：WebSocket 订阅异常事件，flutter_local_notifications 实现系统通知，告警数据持久化至本地 SQLite。',
        '远程更新：使用 flutter_downloader 实现 APK 下载，通过 Isolate 接收下载进度回调，利用 MethodChannel 调用原生 Android 获取未知来源应用权限申请、触发系统安装流程。',
      ],
    },
  ],

  projects: [
    // ---------------- 实习项目 (Internship Projects) ----------------
    {
      id: 'proj-iris',
      name: 'Ainstec Iris',
      projectType: 'internship',
      company: '中科融合（苏州）',
      period: '2026.6 – 至今',
      role: '移动端开发',
      category: 'Mobile',
      language: 'Dart',
      description: '本项目基于 Flutter 跨平台框架，通过 IRIS 固态激光蓝牙设备和 Flutter Plugin 封装 Android BLE SDK 实现智能骑行场景。项目通过 Method Channel 调用原生 SDK 与硬件设备联动，实现了设备控制模块、设备管理模块。',
      tags: ['Flutter', 'Android BLE SDK', 'Method Channel', 'GATT', 'Provider', 'go_router'],
      responsibilities: [
        {
          title: '硬件设备控制',
          content: '基于 BLE 直连与本地插件封装实现控制设备能力，统一管理扫描连接、自动重连与状态同步，形成“指令下发 + 状态回传”的闭环控制。',
        },
        {
          title: '硬件设备管理',
          content: '封装设备状态快照与监听机制，订阅设备状态流和连接状态流，实时同步电量、设备状态、连接状态等信息到 UI。',
        },
        {
          title: '远程更新',
          content: '使用 flutter_downloader 实现 APK 下载，通过 Isolate 接收下载进度回调，利用 MethodChannel 调用原生 Android 获取未知来源应用权限申请、触发系统安装流程。',
        },
      ],
    },
    {
      id: 'proj-casing',
      name: '智能化套变检测系统',
      projectType: 'internship',
      company: '三赫智能',
      period: '2025.9 – 2026.5',
      role: '移动端开发',
      category: 'Mobile',
      language: 'Kotlin',
      description: '面向油田井下套管形变检测的专业分析软件，系统采用 MVVM 架构设计模式，Compose + Material 3 Adaptive 全界面自适应，覆盖工程概览、波形分析、井管理、作业管理、设备管理等功能模块。同时包含 Flutter 版本，为研究员提供管理平台，实现 Android、iOS 多平台业务能力统一，保证功能一致性。',
      tags: ['Jetpack Compose', 'OkHttp', 'Flow', 'Room', 'Hilt'],
      responsibilities: [
        {
          title: '工程概览 (瓦片地图绘制)',
          content: '基于 Canvas + Tile 实现瓦片地图渲染，通过动态计算窗口范围按需加载 Tile 数据，通过异步加载及 Bitmap 缓存机制完成地图拼接绘制。',
        },
        {
          title: '数据分析 (多轨波形同步绘制)',
          content: '基于 Canvas 自定义绘制波形曲线，通过共享 ScrollState 保证深度轴与多轨波形同步滚动，并通过分级采样策略实现大规模检测数据高性能渲染。',
        },
        {
          title: '软件自适应布局',
          content: '基于 Material3 Adaptive + WindowSizeClass 实现自适应布局，适配不同屏幕尺寸与旋转形态。',
        },
      ],
    },
    {
      id: 'proj-bridge',
      name: '远程桥梁监测系统',
      projectType: 'internship',
      company: '长江大学',
      period: '2025.2 – 2025.8',
      role: '移动端开发',
      category: 'Mobile',
      language: 'Dart',
      description: '面向桥梁结构健康监测场景，通过 WebSocket 实现通信与边缘设备联动，实现智能硬件远程控制、异常告警与远程更新等核心模块。',
      tags: ['Flutter', 'Provider', 'Dio', 'TDesign', 'go_router', 'WebSocket'],
      responsibilities: [
        {
          title: '硬件远程控制',
          content: 'WebSocketService 单例模式建立长连接，形成“HTTP 发指令 + WebSocket 收状态”的双通道控制，实现设备远程启停与实时同步设备状态。',
        },
        {
          title: '异常实时报警',
          content: '通过 WebSocket 订阅异常事件，集成 flutter_local_notifications 实现系统通知，告警数据持久化存储至本地 SQLite。',
        },
        {
          title: '远程更新',
          content: '使用 flutter_downloader 实现 APK 下载，通过 Isolate 接收下载进度回调，利用 MethodChannel 调用原生 Android 获取未知来源应用权限申请、触发系统安装流程。',
        },
      ],
    },

    // ---------------- 开源项目 (GitHub Open Source Projects) ----------------
    {
      id: 'proj-xincamera',
      name: 'XinCamera',
      projectType: 'opensource',
      category: 'Mobile',
      language: 'Kotlin',
      description: '基于 CameraX + Jetpack Compose + JNI/C++ 的 Android 相机学习与底层图像处理项目。',
      stars: 2,
      details: [
        '基于 Jetpack Compose 打造响应式取景交互界面，利用 CameraX 抽象灵活控制曝光、对焦与镜头参数。',
        '集成 JNI / C++ (NDK) 底层图像处理算法，实现实时 YUV 图像流帧级高效处理与滤波渲染。',
      ],
      tags: ['Android', 'Kotlin', 'CameraX', 'Compose', 'JNI / C++', 'NDK'],
      url: 'https://github.com/Akiha678/XinCamera',
      sourceUrl: 'https://github.com/Akiha678/XinCamera',
    },
    {
      id: 'proj-xinchat-android',
      name: 'XinChat',
      projectType: 'opensource',
      category: 'Mobile',
      language: 'Kotlin',
      description: '基于 Kotlin 和 Jetpack Compose 的移动端通讯学习项目，支持高可靠双工 WebSocket 通信。',
      stars: 1,
      details: [
        '纯 Compose 构建丝滑会话流、富文本气泡与表情交互，利用 StateFlow 驱动单向数据流。',
        '实现高可靠 WebSocket 长连接、心跳保活、离线重连机制与消息状态机同步。',
      ],
      tags: ['Android', 'Kotlin', 'Jetpack Compose', 'WebSocket', 'IM', 'Coroutines'],
      url: 'https://github.com/Akiha678/XinChat',
      sourceUrl: 'https://github.com/Akiha678/XinChat',
    },
    {
      id: 'proj-xinchat-swift',
      name: 'XinChat_Swift',
      projectType: 'opensource',
      category: 'Mobile',
      language: 'Swift',
      description: '基于 Swift 的通讯软件，帮助大家学习 Swift 并对齐移动端 IM 协议架构。',
      stars: 1,
      details: [
        '使用现代 Swift 与 async/await 并发模型，实现与 Android 端一致的通信协议编解码。',
        '遵循苹果官方规范进行原生交互设计与内存安全管理。',
      ],
      tags: ['iOS', 'Swift', 'SwiftUI', 'Async/Await', 'IM Protocol'],
      url: 'https://github.com/Akiha678/XinChat_Swift',
      sourceUrl: 'https://github.com/Akiha678/XinChat_Swift',
    },
    {
      id: 'proj-xincomponent',
      name: 'XinComponent',
      projectType: 'opensource',
      category: 'Library',
      language: 'Kotlin',
      description: '自定义封装组件库，包含常用 UI 组件、工具组件、网络封装组件。',
      stars: 1,
      details: [
        '模块化拆分基础 UI 控件、常用扩展函数与异步网络请求封装，提升团队快速建构 App 能力。',
        '经过多个实际项目沉淀，具有良好的代码健壮性与快速接入能力。',
      ],
      tags: ['Kotlin', 'Android Library', 'Networking', 'Utils'],
      url: 'https://github.com/Akiha678/XinComponent',
      sourceUrl: 'https://github.com/Akiha678/XinComponent',
    },
  ],

  skills: [
    { name: 'Kotlin / Dart 编程语言', level: 95, category: '语言与跨平台' },
    { name: 'Flutter 跨平台开发框架', level: 90, category: '语言与跨平台' },
    { name: 'Android 与 Flutter 混合开发', level: 88, category: '语言与跨平台' },
    { name: 'HTTP / TCP / WebSocket 协议', level: 90, category: '语言与跨平台' },

    { name: 'Android 四大组件及生命周期', level: 92, category: 'Android 原生与架构' },
    { name: 'Jetpack Compose / UI 声明式', level: 90, category: 'Android 原生与架构' },
    { name: 'MVVM & Clean Architecture', level: 92, category: 'Android 原生与架构' },
    { name: 'ViewModel / Room / Hilt', level: 88, category: 'Android 原生与架构' },

    { name: 'Coroutines 与 Flow 响应式', level: 90, category: '网络封装与通信' },
    { name: 'OkHttp / Retrofit 框架封装', level: 90, category: '网络封装与通信' },
    { name: 'Android BLE 蓝牙硬件通信', level: 88, category: '网络封装与通信' },
    { name: 'Method Channel 原生通信', level: 90, category: '网络封装与通信' },

    { name: 'System Trace 性能调优', level: 85, category: '工程化与性能调优' },
    { name: 'Jank Frame / Compose 重组优化', level: 85, category: '工程化与性能调优' },
    { name: 'Android Studio / Git / Gradle', level: 92, category: '工程化与性能调优' },
    { name: 'Linux 常用命令 / Apifox', level: 88, category: '工程化与性能调优' },
  ],

  honors: [
    {
      id: 'h-1',
      title: '中国国际大学生创新大赛湖北省复赛 · 银奖',
      date: '2024 年 12 月',
      category: 'award',
      detail: '《望闻诊切——桥梁智能监护的方案提供商》',
    },
    {
      id: 'h-2',
      title: '湖北省第十五届“挑战杯”课外学术科技作品竞赛 · 三等奖',
      date: '2025 年 7 月',
      category: 'award',
      detail: '《从图像识别到动态风险评估：机器视觉与物联网协同在校园风险预警系统的应用》',
    },
    {
      id: 'h-3',
      title: '发明专利（实质审查中）',
      date: '2026 年 4 月',
      category: 'patent',
      detail: '《一种泥浆泵的剩余寿命预测方法、装置、电子设备及介质》',
    },
    {
      id: 'h-4',
      title: '软件著作权登记',
      date: '2026 年 6 月',
      category: 'patent',
      detail: '《输油管道异常检测系统软件 V1.0》',
    },
    {
      id: 'h-5',
      title: '全国大学英语四级 (CET-4)',
      date: '已通过',
      category: 'cert',
      detail: '具备良好的英文技术文献阅读与编写能力',
    },
  ],

  contact: {
    email: 'seanchenxin@dingtalk.com',
    phone: '19108666223',
    location: '江浙沪',
    targetCity: '全国可飞',
    webs: [
      { label: 'GitHub: Akiha678', url: 'https://github.com/Akiha678' },
      { label: '掘金主页: 陈鑫', url: 'https://juejin.cn/user/1502355831661744' },
      { label: '钉钉邮箱: seanchenxin@dingtalk.com', url: 'mailto:seanchenxin@dingtalk.com' },
    ],
  },

  education: [
    {
      id: 'edu-001',
      school: '荆州学院',
      major: '软件工程',
      degree: '本科',
      startDate: '2023.09',
      endDate: '2027.06',
      description: '主修移动应用开发、数据结构、操作系统、计算机网络、软件工程规范。2027 年 6 月毕业。',
    },
  ],
}

export const educationData: Education[] = resumeData.education