import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [],
  "/前端/vue/": [
    {
      text: "vue",
      icon: "vue",
      children: "structure",
    },
  ],
  "/计算机基础/算法/": [
    {
      text: "算法",
      icon: "leetcode",
      children: "structure",
    },
  ],
  "/计算机基础/计算机网络/": [
    {
      text: "计算机网络",
      icon: "network",
      children: "structure",
    },
  ],
});
