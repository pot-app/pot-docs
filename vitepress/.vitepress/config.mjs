import { defineConfig } from 'vitepress'
import { enConfig } from './config/en'
import { zhConfig } from './config/zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Pot",
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo/pot.png' }]
  ],
  themeConfig: {
    logo: '/logo/pot.png',
    siteTitle: 'Pot',
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pot-app/pot-desktop' }
    ]
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh',
      ...zhConfig
    },
    en: {
      label: 'English',
      lang: 'en',
      ...enConfig
    },
  },
})
