import { defineConfig } from "vitepress";
import { enConfig } from "./config/en";
import { zhConfig } from "./config/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pot",
  head: [
    ["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/logo/icon.svg",
    siteTitle: "Pot",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          en: {},
        },
      },
    },
    socialLinks: [
      {
        icon: {
          svg: `<svg viewBox="-43.52 -43.52 599.04 599.04"><path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"></path></svg>`,
        },
        link: "https://jihulab.com/pot-app/pot-desktop",
      },
      { icon: "github", link: "https://github.com/pot-app/pot-desktop" },
    ],
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh",
      ...zhConfig,
    },
    en: {
      label: "English",
      lang: "en",
      ...enConfig,
    },
  },
});
