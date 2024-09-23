import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Next",
  description: "One story ends, another one story begins...",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
