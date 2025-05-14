import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://crab-zihanli.github.io/blog/",

  author: {
    name: "Zihan Li",
    email:"lzh_pku2002@163.com"
  },

  logo: "/crab.svg",
  favicon: "/crab.svg",

  repo: "https://github.com/crab-zihanli/blog",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,
  // 关闭更新时间功能，避免 dev 时报错
  lastUpdated: false,

  // 页脚
  footer: "This site is served by GitHub Pages",
  displayFooter: true,

  // 博客相关
  blog: {
    avatar: "/avatar.jpeg",
    description: "To be a full stack developer",
    intro: "/intro.html",
    medias: {
      Douban: "https://www.douban.com/",
      BiliBili: "https://www.bilibili.com/",
      Email: "https://mail.163.com/",
      GitHub: "https://example.com",
      "163Music": "https://music.163.com/",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

  // 加密配置，之后再配置这部分
  encrypt: {
    config: {
      "/resume.html": {
        hint: "Password",
        password: "check2025",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,//控制markdown对齐
    attrs: true,//为markdown元素添加属性
    codeTabs: true,//代码选项卡
    component: true,//启用组件支持
    demo: true,//支持代码演示
    figure: true,//启用figure
    gfm: true,//GitHub Flavored Markdown Spec
    imgLazyload: true,//图片懒加载
    imgMark: true,//启用图片标记
    imgSize: true,//启用图片大小
    mark: true,//高亮=====
    spoiler: true,//剧透文字！！！！
    
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],//对内联标记进行样式化
    sub: true,//上下标
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,//使用任何 Mustache 语法

    //在启用之前安装 echarts
    echarts: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily



    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: {
      excerptLength: 100,
    },


    slimsearch:true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},{
  // 主题配置
  custom: true,//自定义组件
});
