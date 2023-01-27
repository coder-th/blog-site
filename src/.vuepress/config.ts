import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "前端",
      description: "个人记录以及总结",
    },
  },

  theme,

  shouldPrefetch: false,
});
