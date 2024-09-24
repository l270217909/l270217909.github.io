//侧边栏
export default {
    '/src/前端框架/vue/':[{
      text:'vue',
      items: [
        { text: 'vue', link: '/src/前端框架/vue/vue' },
        { text: 'VitePress', link: '/src/前端框架/vue/VitePress' },
        { text: 'ElemetPlusAdmin', link: '/src/前端框架/vue/ElemetPlusAdmin' },
      ]
    }],

    '/src/前端框架/uniapp/':[{
      text:'uniapp',
      items: [
        { text: 'uniapp', link: '/src/前端框架/uniapp/uniapp' },
      ]
    }],


    '/src/后端框架/node':[{
      text:'node',
      items: [
        { text: 'express', link: '/src/后端框架/node/express' },
        { text: 'koa', link: '/src/后端框架/node/koa' },
      ]
    }],

    '/src/后端框架/java':[{
      text:'java',
      items: [
        { text: 'java1', link: '/src/后端框架/java/java1' },
        { text: 'java2', link: '/src/后端框架/java/java2' },
      ]
    }],






    '/src/示例/':[
      {
      text:'示例ts',
      collapsed: true,
      items: [
        { text: '示例1', link: '/src/示例/示例1', },
        { text: '示例2', link: '/src/示例/示例2' },
      ]
      },
      {
        text:'示例demo',
        collapsed: true,
        items: [
          { text: '示例3', link: '/src/示例/示例3', collapsed: true,
            items:[
              { text: '示例5', link: '/src/示例/示例5', },
              { text: '示例6', link: '/src/示例/示例6' },
            ]
          },
          { text: '示例4', link: '/src/示例/示例4' },
        ]
        },
  ],
  }