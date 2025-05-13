import { defineUserConfig } from "vuepress";

import theme from "./theme.js";


export default defineUserConfig({
  // 动态设置 base
  base: process.env.NODE_ENV === 'production' ? '/blog/' : '/',

  lang: "zh-CN",
  title: "Zihan Li",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  
  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
