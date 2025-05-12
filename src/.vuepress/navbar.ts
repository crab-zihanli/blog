import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "Coding",
    icon: "laptop-code",
    prefix: "/code/",
    children: [
      {
        text: "Embracing AI",
        icon: "bolt",
        link: "ai/",
      },
      {
        text: "Frontend",
        icon: "pager",
        link: "frontend/",
      },
    ],
  },
  {
    text: "Essay",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Reading",
        icon: "book-open",
        link: "read/",
      },
      {
        text: "Thinking",
        icon: "lightbulb",
        link: "think/",
      },
    ],
  },
  {
    text: "About",
    icon: "circle-info",
    link: "/intro",
  },
]);
