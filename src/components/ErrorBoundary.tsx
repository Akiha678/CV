import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  message: string
}

/**
 * 全局错误边界
 * 捕获子组件渲染/生命周期错误，避免白屏，提供降级提示。
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message }
  }

  componentDidCatch(error: Error) {
    console.error('[ErrorBoundary]', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>页面出错了</h1>
          <p style={{ color: '#666' }}>{this.state.message}</p>
          <button
            type="button"
            style={{ marginTop: '1rem', padding: '0.5rem 1.25rem', cursor: 'pointer' }}
            onClick={() => {
              this.setState({ hasError: false })
              window.location.reload()
            }}
          >
            重新加载
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary