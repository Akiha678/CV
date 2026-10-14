import { Section, Icon } from '@/components/ui'
import type { Contact, Profile } from '@/types/resume'
import styles from './About.module.css'

export interface AboutProps {
  profile: Profile
  contact: Contact
}

/**
 * 现代极客风“关于我”组件 (CSS Modules)
 * 聚焦移动端开发工程师定位 (Android / Flutter / Kotlin / Dart)
 */
export function About({ profile, contact }: AboutProps) {
  return (
    <Section
      id="about"
      title="关于我与技术体系"
      subtitle="移动端开发工程师 · 专注 Android 原生与 Flutter 跨平台架构设计"
      badge="About Me"
      fullWidth
    >
      <div className={styles.container}>
        {/* 左侧：macOS 极客终端卡片 */}
        <div className={styles.terminal}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <span className={styles.terminalTitle}>chenxin@mobile-engineer:~</span>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>whoami</span>
            </div>
            <p className={styles.output}>
              &gt; {profile.name} ({profile.handle}) - {profile.title}
            </p>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>cat philosophy.md</span>
            </div>
            <div className={`${styles.output} ${styles.outputQuote}`}>
              <span className={styles.outputHighlight}>“{profile.tagline}”</span>
              <p>深耕移动端架构。坚持扎实的底层功底与声明式 UI 最佳实践，追求流畅的交互体验与高可靠的软硬件通信链路。</p>
            </div>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>neofetch --profile</span>
            </div>
            <div className={`${styles.output} ${styles.outputGrid}`}>
              <div><span className={styles.dim}>Education:</span> {profile.school ?? '荆州学院'} · {profile.major ?? '软件工程（本科）'}</div>
              <div><span className={styles.dim}>Graduation:</span> {profile.graduation ?? '2027年6月毕业'}</div>
              <div><span className={styles.dim}>TargetCity:</span> {profile.targetCity ?? '全国可飞'}</div>
              <div><span className={styles.dim}>TechStack:</span> Kotlin, Dart, Flutter, Compose, BLE</div>
              <div><span className={styles.dim}>OpenSource:</span> GitHub @Akiha678 (8+ Repos)</div>
            </div>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cursor} />
            </div>
          </div>
        </div>

        {/* 右侧：移动端专业能力矩阵 */}
        <div className={styles.details}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <Icon name="sparkles" size={18} className={styles.cardIcon} />
              移动端核心架构能力
            </h3>
            <p className={styles.cardText}>
              熟练掌握 Kotlin 与 Dart，精通 Flutter 跨平台框架，拥有成熟的 Android 与 Flutter 混合开发实战经验。深入理解 MVVM 与 Clean Architecture 分层思想，善于利用 Coroutines / Flow 实现响应式异步编程，具备扎实的 BLE 蓝牙通信、瓦片地图绘制与性能卡顿（Jank Frame / 重组）调优能力。
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="terminal" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>Android 原生与四大组件</h4>
                <p>Jetpack Compose、Room、Hilt、生命周期及后台任务管理</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="layers" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>Flutter 跨端与混合开发</h4>
                <p>Method Channel 原生插件封装、Provider / go_router 状态路由</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="code" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>硬件联动与网络通信</h4>
                <p>BLE 蓝牙闭环控制、OkHttp/Retrofit 封装、WebSocket 长连接</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="compass" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>性能分析与工程规范</h4>
                <p>System Trace 卡顿分析、瓦片地图异步缓存、组件化解耦</p>
              </div>
            </div>
          </div>

          {/* 状态快捷信息卡 */}
          <div className={styles.quickMeta}>
            <div className={styles.metaChip}>
              <Icon name="location" size={14} />
              <span>期望工作地：{profile.targetCity ?? '全国可飞'}</span>
            </div>
            <div className={styles.metaChip}>
              <Icon name="mail" size={14} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            {contact.phone && (
              <div className={styles.metaChip}>
                <Icon name="phone" size={14} />
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            )}
            <a
              href="https://github.com/Akiha678"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.metaChip}
            >
              <Icon name="github" size={14} />
              <span>github.com/Akiha678</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}