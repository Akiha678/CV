import type { Contact, Education, Experience, Profile, Project, Skill } from '@/types/resume'

/**
 * 数据访问层 (Data Layer)
 *
 * 目前使用静态 JSON 风格数据源。在企业架构中，该层通常由一个
 * repository/service 封装，将"数据从哪里来"与"如何使用数据"解耦。
 * 后续只需替换本对象为 HTTP/Firebase 等实现，即可无侵入切换数据来源。
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
    name: '张三',
    title: '前端工程师 / React 开发',
    tagline: '用代码把复杂的想法变成简洁优雅的产品。',
    bio: '6 年以上 Web 前端开发经验，专注于 React 生态与大型中后台系统架构。热爱设计系统、性能优化与工程化建设，追求可维护、可测试、可扩展的代码质量。',
    avatarUrl: '/assets/avatar.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/yourname', icon: 'github' },
      { label: '掘金', url: 'https://juejin.cn', icon: 'document' },
      { label: '博客', url: 'https://yourblog.com', icon: 'website' },
    ],
  },
  experiences: [
    {
      id: 'exp-1',
      company: '某大型互联网公司',
      role: '高级前端工程师',
      startDate: '2020.04',
      endDate: null,
      current: true,
      summary: '负责核心业务前端架构演进与性能优化。',
      highlights: ['React', 'TypeScript', 'Vite', 'Monorepo'],
      bullets: [
        '主导前端微前端化改造，将单体应用拆分为 4 个可独立部署的子应用，构建耗时降低 60%。',
        '搭建统一组件库与设计系统，覆盖 80% 业务组件，样式一致性与开发效率显著提升。',
        '推动 Web Vitals 性能优化，首屏 LCP 从 2.8s 优化至 1.2s。',
      ],
    },
    {
      id: 'exp-2',
      company: '某创业公司',
      role: '前端开发工程师',
      startDate: '2018.04',
      endDate: '2020.03',
      summary: '从 0 到 1 搭建前端工程体系。',
      highlights: ['Vue 2', 'Webpack', 'Node.js'],
      bullets: [
        '从 0 搭建前端工程化体系，引入 ESLint、单元测试、CI/CD 全链路。',
        '负责官网与运营后台开发，支撑市场活动 30+ 场。',
      ],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'CV Portfolio Website',
      description: '企业级 React 简历站点，展示本文档所述架构思想的落地。',
      details: ['按领域分层，类型安全，懒加载路由', '暗色模式，响应式布局'],
      tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
      url: 'https://yourname.com',
      sourceUrl: 'https://github.com/yourname/cv',
    },
    {
      id: 'proj-2',
      name: 'Design System',
      description: '覆盖表单、布局、反馈的多主题组件库。',
      details: ['Storybook 驱动开发', '可访问性（a11y）达标'],
      tags: ['React', 'Storybook', 'Design Tokens'],
    },
    {
      id: 'proj-3',
      name: 'Performance Tools',
      description: '采集与分析前端运行时性能的轻量 SDK。',
      tags: ['TypeScript', 'Web Vitals', 'Plugin'],
    },
  ],
  skills: [
    { name: 'React', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 92, category: 'Frontend' },
    { name: 'CSS / Sass', level: 85, category: 'Frontend' },
    { name: 'Vite / Webpack', level: 85, category: 'Build Tools' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'GraphQL', level: 70, category: 'Backend' },
    { name: 'Docker / CI', level: 70, category: 'Ops' },
  ],
  contact: {
    email: 'yourname@example.com',
    phone: '+86 138-0000-0000',
    location: '中国 · 上海',
    webs: [
      { label: 'GitHub', url: 'https://github.com/yourname' },
      { label: 'LinkedIn', url: 'https://linkedin.com/in/yourname' },
    ],
  },
  education: [
    {
      id: 'edu-001',
      school: '示例大学',
      major: '计算机科学与技术',
      degree: '学士',
      startDate: '2014.09',
      endDate: '2018.06',
      description: '主修数据结构、操作系统、计算机网络。',
    },
  ],
}

export const educationData: Education[] = resumeData.education