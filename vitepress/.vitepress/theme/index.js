// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import AppPreview from "./components/AppPreview.vue";
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import "./style.css";

/** @type {import('vitepress').Theme} */
export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "home-hero-after": () => h(AppPreview),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
    giscusTalk({
      repo: 'pot-app/pot-desktop',
      repoId: 'R_kgDOJCp3Ww',
      category: 'General',
      categoryId: 'DIC_kwDOJCp3W84CUrQN',
      mapping: 'title',
      inputPosition: 'top',
      lang: 'zh-CN',
      lightTheme: 'https://pot-app.com/styles/giscus_light.css',
      darkTheme: 'https://pot-app.com/styles/giscus_dark.css'
    }, {
      frontmatter, route
    },
      true
    );
  }
};
