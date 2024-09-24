# vitepress 博客用法

vitepress 是一款由vite开发的快速构建博客类的框架

## 构建vitepress

**搭建命令**
```md
cnpm add -D vitepress
```

**安装向导**
```md
npx vitepress init
```
![这是图片](/Users/apple/Desktop/MyBlog/dosc/.vitepress/public/vitepress_init.png "Magic Gardens")


**启动命令**
```md
cnpm run docs:dev
```

**打包命令**
```md
cnpm run docs:build
```

<!-- **Github 部署** -->
## Github Pages 部署

::: tip
1、创建github仓库，仓库命名使用github名，会自动生成:xxx.github.io 这也将是你的域名

2、关联仓库，并提交打包后的代码。注意：一定要是生成的dist文件夹下的内容。

3、仓库===》settings ===》 pages ===》 配置选择：Deploy from a branch  和 master /(root)

4、配置完成等待即可。page生成域名：xxx.github.io 就是他妈的这么简单
:::