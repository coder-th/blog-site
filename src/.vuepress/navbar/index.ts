import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "计算机基础",
    icon: "discover",
    prefix: "/计算机基础/",
    children: [
        {
            text: "算法",
            icon: "leetcode",
            link: "算法/",
          },
      {
        text: "计算机网络",
        icon: "network",
        link: "计算机网络/"
      },
    ],
  },
  {
    text: "前端",
    icon: "frontend",
    prefix: "/前端/",
    children: [
      {
        text: "vue",
        icon: "edit",
        link: "vue/"
      },
    ],
  },
]);
