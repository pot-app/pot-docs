import { defineConfig } from "vitepress";
import { enConfig } from "./config/en";
import { zhConfig } from "./config/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    build: {
      rollupOptions: {
        external: ['axios'],
      },
    },
  },
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
    socialLinks: [{ icon: "github", link: "https://github.com/pot-app/pot-desktop" }],
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
