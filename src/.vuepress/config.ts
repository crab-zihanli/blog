import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // 动态设置 base
  base: process.env.NODE_ENV === 'production' ? '/blog/' : '/',

  lang: "zh-CN",
  title: "Zihan Li",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  alias: {
    "@HobbyCarousel": path.resolve(__dirname, "components/HobbyCarousel.vue"),
  },

  

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
