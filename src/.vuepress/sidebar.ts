import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Coding",
      icon: "laptop-code",
      link: "code/",
      prefix: "code/",
      children: "structure",
    },
    {
      text: "Essay",
      icon: "pen-to-square",
      link: "posts/",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
  ],
});
