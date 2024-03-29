export const META_URL = "https://pot-app.com";
export const META_TITLE = "Pot";
export const META_DESCRIPTION =
  "Cross-platform software for text translation and ocr recognize.";

export const enConfig = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:image", content: "/img/pot-social-card.png" }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
    ["meta", { name: "google-adsense-account", content: "ca-pub-2287479151560516" }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-D9P8XT4LJS" }],
    ["script", { async: "", src: "/js/google.js" }],
    ["script", { async: "", src: "/js/baidu.js" }],
    ["script", { async: "", src: "/js/microsoft.js" }],
  ],
  themeConfig: {
    nav: [
      { text: "Guide", link: "/en/docs/", activeMatch: "/en/docs/" },
      { text: "Download", link: "/en/download" },
      { text: "Plugin List", link: "/en/plugin" },
      {
        text: "Community",
        items: [
          { text: "Telegram", link: "https://t.me/pot_app" },
          { text: "Matrix", link: "https://matrix.to/#/#pot-app:matrix.org" },
          { text: "QQ Channel", link: "https://pd.qq.com/s/akns94e1r" },
          { text: "QQ Group", link: "/img/qq_group.png" },
          { text: "Email", link: "mailto:support@pot-app.com" },
        ],
      },
      { text: "About", link: "/en/about" },
    ],
    sidebar: {
      "/en/docs/": [
        {
          text: "User Guide",
          link: "/en/docs/",
          items: [
            { text: "Install Guide", link: "/en/docs/install" },
            {
              text: "Software Config",
              collapsed: true,
              items: [
                { text: "General", link: "/en/docs/config/general" },
                { text: "Hotkey", link: "/en/docs/config/hotkey" },
                { text: "Translate", link: "/en/docs/config/translate" },
                { text: "Recognize", link: "/en/docs/config/recognize" },
                { text: "Service", link: "/en/docs/config/service" },
                { text: "Backup", link: "/en/docs/config/backup" },
              ],
            },
            { text: "External Calls", link: "/en/docs/invoke" },
            { text: "Plugin System", link: "/en/docs/plugin" },
            { text: "Wayland", link: "/en/docs/wayland" },
            {
              text: "API Service",
              link: "/en/docs/api/",
              collapsed: true,
              items: [
                {
                  text: "Text Translation",
                  collapsed: true,
                  items: [
                    {
                      text: "NiuTrans",
                      link: "/en/docs/api/translate/niutrans",
                    },
                    { text: "Baidu", link: "/en/docs/api/translate/baidu" },
                    { text: "Alibaba", link: "/en/docs/api/translate/alibaba" },
                    { text: "Caiyun", link: "/en/docs/api/translate/caiyun" },
                    { text: "DeepL", link: "/en/docs/api/translate/deepl" },
                    { text: "Google", link: "/en/docs/api/translate/google" },
                    { text: "ChatGLM", link: "/en/docs/api/translate/chatglm" },
                    { text: "OpenAI", link: "/en/docs/api/translate/openai" },
                    { text: "Youdao", link: "/en/docs/api/translate/youdao" },
                    { text: "Tencent", link: "/en/docs/api/translate/tencent" },
                    {
                      text: "Transmart",
                      link: "/en/docs/api/translate/transmart",
                    },
                    {
                      text: "Volcengine",
                      link: "/en/docs/api/translate/volcengine",
                    },
                  ],
                },
                {
                  text: "Text Recogniztion",
                  collapsed: true,
                  items: [
                    { text: "Baidu OCR", link: "/en/docs/api/recognize/baidu" },
                    {
                      text: "Tencent OCR",
                      link: "/en/docs/api/recognize/tencent",
                    },
                    {
                      text: "VolcEngine OCR",
                      link: "/en/docs/api/recognize/volcengine",
                    },
                    {
                      text: "iFlyTek OCR",
                      link: "/en/docs/api/recognize/iflytek",
                    },
                    {
                      text: "Baidu Image Translate",
                      link: "/en/docs/api/recognize/baidu_img",
                    },
                    {
                      text: "Tencent Image Translate",
                      link: "/en/docs/api/recognize/tencent_img",
                    },
                    {
                      text: "iFlyTek LaTeX",
                      link: "/en/docs/api/recognize/iflytek_latex",
                    },
                    {
                      text: "Simple LaTeX",
                      link: "/en/docs/api/recognize/simple_latex",
                    },
                  ],
                },
                {
                  text: "Word Collection",
                  collapsed: true,
                  items: [
                    { text: "Anki", link: "/en/docs/api/collection/anki" },
                    { text: "Eudic", link: "/en/docs/api/collection/eudic" },
                  ],
                },
                {
                  text: "Text to Speech",
                  collapsed: true,
                  items: [{ text: "Lingva", link: "/en/docs/api/tts/lingva" }],
                },
              ],
            },
            { text: "FAQ", link: "/en/docs/faq" },
          ],
        },
      ],
    },
    footer: {
      message: "Released under the <a href='https://github.com/pot-app/pot-desktop/blob/master/LICENSE' target='_blank'><b>GPL-3.0</b></a> License<br/>Copyright © 2023-present <a href='https://github.com/pot-app' target='_blank'><b>Pot-App</b></a>",
      copyright: "<span style='display: flex; justify-content: center'><a href='https://beian.miit.gov.cn' target='_blank'><b>蜀ICP备2023031468号-1</b></a><img src='/img/gongan.png' style='height: 18px; margin: auto 8px'><a href='https://beian.mps.gov.cn/#/query/webSearch?code=51019002005996' rel='noreferrer' target='_blank'><b>川公网安备51019002005996</b></a></span>",
    },
    editLink: {
      pattern:
        "https://github.com/pot-app/pot-docs-vitepress/edit/main/vitepress/:path",
      text: "Edit this page on GitHub",
    },
  },
};
