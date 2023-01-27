import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  { text: "计算机基础", icon: "discover", link: "/basic/" },
  {
    text: "前端",
    icon: "edit",
    prefix: "/frontend/",
    children: [
      {
        text: "vue",
        icon: "edit",
        prefix: "vue/",
        children: [
          { text: "组件", icon: "edit", link: "component" }
        ],
      }
    ],
  }
]);
