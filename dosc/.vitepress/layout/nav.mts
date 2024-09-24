//导航
export default [
    { text: '首页', link: '/' },
    // { text: '示例1', link: '/markdown-examples' },
    {
        text: '前端框架',
        items: [
            { text: '大纲', link: '/src/前端框架/', },
            { text: 'vue', link: '/src/前端框架/vue/vue' },
            { text: 'uniapp', link: '/src/前端框架/uniapp/uniapp' }
        ]
    },
    {
        text: '后端框架',
        items: [
            { text: '大纲', link: '/src/后端框架/', },
            { text: 'node', link: '/src/后端框架/node/express' },
            { text: 'java', link: '/src/后端框架/java/java1' },
        ]
    },
    // {
    //     text: '脚手架',
    //     items: [
    //         { text: 'Vite press', link: '/src/脚手架/VitePress', },
    //         { text: 'express', link: '/src/脚手架/ElemetPlusAdmin' },
    //     ]
    // },
    {
        text: '示例',
        items: [
            { text: '示例1', link: '/src/示例/示例1', },
            { text: '示例2', link: '/src/示例/示例2' },
            { text: '示例3', link: '/src/示例/示例3' },
            { text: '示例4', link: '/src/示例/示例4' },
        ]
    },
]