import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "前端",
      icon: "creative",
      prefix: "frontend/",
      link: "frontend/",
      children: "structure",
    },
    {
      text: "计算机基础",
      icon: "note",
      prefix: "basic/",
      children: "structure",
    }
  ],
});
