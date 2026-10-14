/**
 * 轻量类名合并工具
 * 支持过滤空值、布尔值与条件表达式
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ')
}
