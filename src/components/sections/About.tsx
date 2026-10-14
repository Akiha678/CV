import { Section, Icon } from '@/components/ui'
import type { Contact, Profile } from '@/types/resume'
import styles from './About.module.css'

export interface AboutProps {
  profile: Profile
  contact: Contact
}

/**
 * 现代极客风“关于我”组件 (CSS Modules)
 */
export function About({ profile, contact }: AboutProps) {
  return (
    <Section
      id="about"
      title="关于我与开发哲学"
      subtitle="Geek Profile & Engineering Philosophy"
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
            <span className={styles.terminalTitle}>seanchen@smartlab411:~</span>
          </div>

          <div className={styles.terminalBody}>
            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>whoami</span>
            </div>
            <p className={styles.output}>
              &gt; {profile.name} (@{profile.handle}) - {profile.title}
            </p>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>cat philosophy.md</span>
            </div>
            <div className={`${styles.output} ${styles.outputQuote}`}>
              <span className={styles.outputHighlight}>“{profile.tagline}”</span>
              <p>坚持以底层性能为基石，以极客美学为驱动；坚信优秀的工程不仅要跑得快，更要写得漂亮、读得舒心。</p>
            </div>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>neofetch --brief</span>
            </div>
            <div className={`${styles.output} ${styles.outputGrid}`}>
              <div><span className={styles.dim}>OS:</span> Android · macOS · Windows · Linux</div>
              <div><span className={styles.dim}>Languages:</span> Kotlin, Swift, Rust, C++, TS, Dart</div>
              <div><span className={styles.dim}>Lab:</span> Smartlab411 Research Team</div>
              <div><span className={styles.dim}>Location:</span> {contact.location ?? '湖北 (HuBei), China'}</div>
              <div><span className={styles.dim}>OpenSource:</span> 8+ Repositories & Growing</div>
            </div>

            <div className={styles.cmdRow}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cursor} />
            </div>
          </div>
        </div>

        {/* 右侧：专业背景与核心关注点 */}
        <div className={styles.details}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <Icon name="sparkles" size={18} className={styles.cardIcon} />
              架构与技术理念
            </h3>
            <p className={styles.cardText}>
              专注于跨端与原生深度结合。善于在业务复杂度与代码整洁度之间取得平衡，主张推行响应式编程范式、强类型约束与模块化设计。通过持续开源输出，不断锤炼高内聚的组件库与应用框架。
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="terminal" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>底层与系统调用</h4>
                <p>JNI / NDK、Rust FFI 与 C++ 硬件/图像管线集成</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="layers" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>跨平台与多端对齐</h4>
                <p>Flutter + Rust、Qt C++ 与 iOS/Android 双端协议统一</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="code" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>现代 Web 与声明式 UI</h4>
                <p>Jetpack Compose、SwiftUI、React 19 全体系落地</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Icon name="compass" size={20} />
              </div>
              <div className={styles.featureInfo}>
                <h4>工程化与敏捷交付</h4>
                <p>CMake 构建规范、模块化组件封装与 CI/CD 自动化</p>
              </div>
            </div>
          </div>

          {/* 状态快捷信息卡 */}
          <div className={styles.quickMeta}>
            <div className={styles.metaChip}>
              <Icon name="location" size={14} />
              <span>{contact.location}</span>
            </div>
            <div className={styles.metaChip}>
              <Icon name="mail" size={14} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
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