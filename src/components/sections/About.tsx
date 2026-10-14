import { resumeData } from '@/data/resume'
import { Section, Icon } from '@/components/ui'
import './about.css'

/**
 * 现代极客风“关于我”组件
 * 采用 macOS 终端/代码窗口设计，沉浸式展示技术哲学、背景与开发环境
 */
export function About() {
  const { profile, contact } = resumeData

  return (
    <Section
      id="about"
      title="关于我与开发哲学"
      subtitle="Geek Profile & Engineering Philosophy"
      badge="About Me"
      fullWidth
    >
      <div className="about__container">
        {/* 左侧：macOS 极客终端卡片 */}
        <div className="about__terminal">
          <div className="about__terminal-header">
            <div className="about__terminal-dots">
              <span className="about__dot about__dot--red" />
              <span className="about__dot about__dot--yellow" />
              <span className="about__dot about__dot--green" />
            </div>
            <span className="about__terminal-title">seanchen@smartlab411:~</span>
          </div>

          <div className="about__terminal-body">
            <div className="about__cmd-row">
              <span className="about__prompt">$</span>
              <span className="about__cmd">whoami</span>
            </div>
            <p className="about__output">
              &gt; {profile.name} (@{profile.handle}) - {profile.title}
            </p>

            <div className="about__cmd-row">
              <span className="about__prompt">$</span>
              <span className="about__cmd">cat philosophy.md</span>
            </div>
            <div className="about__output about__output--quote">
              <span className="about__output-highlight">“{profile.tagline}”</span>
              <p>坚持以底层性能为基石，以极客美学为驱动；坚信优秀的工程不仅要跑得快，更要写得漂亮、读得舒心。</p>
            </div>

            <div className="about__cmd-row">
              <span className="about__prompt">$</span>
              <span className="about__cmd">neofetch --brief</span>
            </div>
            <div className="about__output about__output-grid">
              <div><span className="about__dim">OS:</span> Android · macOS · Windows · Linux</div>
              <div><span className="about__dim">Languages:</span> Kotlin, Swift, Rust, C++, TS, Dart</div>
              <div><span className="about__dim">Lab:</span> Smartlab411 Research Team</div>
              <div><span className="about__dim">Location:</span> 湖北 (HuBei), China</div>
              <div><span className="about__dim">OpenSource:</span> 8+ Repositories & Growing</div>
            </div>

            <div className="about__cmd-row">
              <span className="about__prompt">$</span>
              <span className="about__cursor" />
            </div>
          </div>
        </div>

        {/* 右侧：专业背景与核心关注点 */}
        <div className="about__details">
          <div className="about__card">
            <h3 className="about__card-title">
              <Icon name="sparkles" size={18} className="about__card-icon" />
              架构与技术理念
            </h3>
            <p className="about__card-text">
              专注于跨端与原生深度结合。善于在业务复杂度与代码整洁度之间取得平衡，主张推行响应式编程范式、强类型约束与模块化设计。通过持续开源输出，不断锤炼高内聚的组件库与应用框架。
            </p>
          </div>

          <div className="about__features-grid">
            <div className="about__feature-item">
              <div className="about__feature-icon">
                <Icon name="terminal" size={20} />
              </div>
              <div className="about__feature-info">
                <h4>底层与系统调用</h4>
                <p>JNI / NDK、Rust FFI 与 C++ 硬件/图像管线集成</p>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-icon">
                <Icon name="layers" size={20} />
              </div>
              <div className="about__feature-info">
                <h4>跨平台与多端对齐</h4>
                <p>Flutter + Rust、Qt C++ 与 iOS/Android 双端协议统一</p>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-icon">
                <Icon name="code" size={20} />
              </div>
              <div className="about__feature-info">
                <h4>现代 Web 与声明式 UI</h4>
                <p>Jetpack Compose、SwiftUI、React 19 全体系落地</p>
              </div>
            </div>

            <div className="about__feature-item">
              <div className="about__feature-icon">
                <Icon name="compass" size={20} />
              </div>
              <div className="about__feature-info">
                <h4>工程化与敏捷交付</h4>
                <p>CMake 构建规范、模块化组件封装与 CI/CD 自动化</p>
              </div>
            </div>
          </div>

          {/* 状态快捷信息卡 */}
          <div className="about__quick-meta">
            <div className="about__meta-chip">
              <Icon name="location" size={14} />
              <span>{contact.location}</span>
            </div>
            <div className="about__meta-chip">
              <Icon name="mail" size={14} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className="about__meta-chip">
              <Icon name="github" size={14} />
              <a href="https://github.com/Akiha678" target="_blank" rel="noopener noreferrer">
                github.com/Akiha678
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}