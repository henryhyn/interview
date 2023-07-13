import { defineConfig } from 'vitepress';

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: 'zh-CN',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2, 3],
    outlineTitle: '目录',
    lastUpdatedText: '最后更新时间',
    footer: {
      message: '该网站在 <a href="https://inscode.csdn.net/" target="_blank">InsCode</a> 开发并部署',
      // copyright: 'Copyright © </a>'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    nav: [
      { text: 'Example', link: '/example' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          // ...
        ],
      },
    ],
  },
});
