import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '面试题库',
  description: '收集算法、后端、前端面试题库',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/ai/': sidebarAi(),
      '/backend/': sidebarBackend(),
      '/frontend/': sidebarFrontend(),
      '/common/': sidebarCommon()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outline: [2, 3],
    outlineTitle: '目录',
    lastUpdatedText: '最后更新时间'
  }
})

function nav() {
  return [
    { text: '算法', link: '/ai/ml/basic', activeMatch: '/ai/' },
    { text: '后端', link: '/backend/java/basic', activeMatch: '/backend/' },
    { text: '前端', link: '/frontend/', activeMatch: '/frontend/' },
    { text: '关于', link: '/common/example', activeMatch: '/common/' }
  ]
}

function sidebarAi() {
  return [{
    text: '机器学习',
    items: [
      { text: '基础知识', link: '/ai/ml/basic' },
      { text: '决策树', link: '/ai/ml/decision' }
    ]
  }, {
    text: '深度学习',
    items: [
      { text: '注意力机制', link: '/ai/dl/attention' }
    ]
  }, {
    text: '大语言模型',
    items: [
      { text: 'OpenAI', link: '/ai/llm/openai' }
    ]
  }]
}

function sidebarBackend() {
  return [{
    text: 'Java',
    items: [
      { text: '基础', link: '/backend/java/basic' },
      { text: '集合', link: '/backend/java/collection' },
      { text: 'IO', link: '/backend/java/io' },
      { text: '并发', link: '/backend/java/concurrent' },
      { text: 'JVM', link: '/backend/java/jvm' }
    ]
  }, {
    text: 'Spring',
    items: [
      { text: 'Spring Boot', link: '/backend/spring/spring-boot' },
      { text: 'Spring Cloud', link: '/backend/spring/spring-cloud' }
    ]
  }, {
    text: '数据库',
    items: [
      { text: 'MySQL', link: '/backend/db/mysql' },
      { text: 'Redis', link: '/backend/db/redis' }
    ]
  }]
}

function sidebarFrontend() {
  return []
}

function sidebarCommon() {
  return [
    { text: 'Example', link: '/common/example' },
    { text: 'API Examples', link: '/common/api-examples' },
    { text: 'Markdown Examples', link: '/common/markdown-examples' }
  ]
}
