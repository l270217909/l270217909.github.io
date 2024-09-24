import { defineConfig } from 'vitepress'

import sidebar from './layout/sidebar.mjs'
import nav from './layout/nav.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true, //最后的更新时间
  title: "小明",
  description: "黄色",
  themeConfig: {
  // siteTitle:'hahha',
  // siteTitle: false,
  lastUpdatedText:"最后更新",
  //页脚
  footer: {
    message: "Released under the MIT License",
    copyright: "Copyright © 2023-present Lao Yuan",
  },
    
    logo: 'https://vitepress.qzxdp.cn/vitepress-logo-mini.svg' ,
    //导航栏
    nav:nav,
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '示例1', link: '/markdown-examples' },
    //   {
    //     text: '前端框架',
    //     items: [
    //       { text: '大纲', link: '/src/前端框架/', },
    //       { text: 'vue', link: '/src/前端框架/vue' },
    //       { text: 'uniapp', link: '/src/前端框架/uniapp' }
    //     ]
    //   },
    //   {
    //     text: '后端框架',
    //     items: [
    //       { text: '大纲', link: '/src/后端框架/', },
    //       { text: 'express', link: '/src/后端框架/express' },
    //     ]
    //   }
    //   // { text: '前端框架', link: '/src/前端框架/' },
    //   // { text: '后端框架', link: '/src/后端框架/' }
    // ],

    //侧边栏
    sidebar:sidebar,
    // sidebar: [ 
    //   {
    //     text: '前端框架',
    //     items:[
    //       { text: 'vue', link: '/src/前端框架/uniapp' },
    //       { text: 'uniapp', link: '/src/前端框架/vue' },
    //     ]
    //   },
      
    //   {
    //     text: '编程技巧',
    //     collapsed: true, //折叠
    //     items: [
    //       { text: 'vite press 博客', link: '/vite-press' },
    //       { text: '小说类目',
    //         items:[
    //           {text:'作者',link: '/src/dotr/story'},
    //           {text:'描述',link: '/src/dotr/'},
    //         ],
    //         link: '/src/dotr/'

    //       },
    //       { text: '测试侧边栏',
    //         items:[
    //           {text:'首页',link: '/src/guide/'},
    //           {text:'老二',link: '/src/guide/two'},
    //         ],
    //       },
    //       { text: '示例1', link: '/markdown-examples' },
    //       { text: '示例2', link: '/api-examples' },
    //     ]
    //   },
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'vite press 博客', link: '/vite-press' },
    //       { text: '小说类目', link: '/story' },
    //       { text: '示例1', link: '/markdown-examples' },
    //       { text: '示例2', link: '/api-examples' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
