/**
 * 联系表单服务配置 (Contact Form Service Config)
 *
 * 【如何使网页在线表单 100% 真实可用直达钉钉邮箱】：
 * 1. 前往 https://web3forms.com (永久免费，无需服务器)
 * 2. 输入您的邮箱: seanchenxin@dingtalk.com，点击 "Create Your Access Key"
 * 3. 您的钉钉邮箱将立即收到一段 Access Key 字符串
 * 4. 将该字符串填入下方的 `web3formsKey` 中即可！
 *
 * 【双轨兜底保障机制】：
 * 若未配置 Key 或处于纯离线/内网环境，系统已内置两套即时可用方案：
 * - 协议直连：自动生成编码邮件并唤起系统邮件客户端 (mailto:)
 * - 模板复制：一键复制结构化规范的招聘邀请函草稿，便于粘贴到钉钉/微信/邮件
 */
export const contactConfig = {
  /**
   * Web3Forms Access Key
   * 留空时系统将通过智能唤起系统邮件与生成草稿保障 100% 可达
   */
  web3formsKey: '1838374e-9f90-42d4-a4f8-774d082704c5',

  /**
   * 邮件标题前缀
   */
  subjectPrefix: '【陈鑫在线简历】来自移动端研发招聘/合作的来信',
}
