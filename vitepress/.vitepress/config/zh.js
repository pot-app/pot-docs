export const META_URL = "https://pot-app.com";
export const META_TITLE = "Pot";
export const META_DESCRIPTION = "跨平台划词翻译和OCR软件";

export const zhConfig = {
  description: META_DESCRIPTION,
  head: [
    ["meta", { property: "og:url", content: META_URL }],
    ["meta", { property: "og:image", content: "/img/pot-social-card.png" }],
    ["meta", { property: "og:description", content: META_DESCRIPTION }],
    ["meta", { property: "twitter:url", content: META_URL }],
    ["meta", { property: "twitter:title", content: META_TITLE }],
    ["meta", { property: "twitter:description", content: META_DESCRIPTION }],
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-D9P8XT4LJS" }],
    ["script", { async: "", src: "/js/google.js" }],
    ["script", { async: "", src: "/js/baidu.js" }],
    ["script", { async: "", src: "/js/microsoft.js" }],
  ],
  themeConfig: {
    nav: [
      { text: "使用指南", link: "/docs/", activeMatch: "/docs/" },
      { text: "下载", link: "/download" },
      {
        text: "社区交流",
        items: [
          { text: "Telegram", link: "https://t.me/pot_app" },
          { text: "Matrix", link: "https://matrix.to/#/#pot-app:matrix.org" },
          { text: "QQ频道", link: "https://pd.qq.com/s/akns94e1r" },
          { text: "QQ群组", link: "/img/qq_group.png" },
          { text: "电子邮件", link: "mailto:support@pot-app.com" },
        ],
      },
      { text: "关于", link: "/about" },
    ],
    sidebar: {
      "/docs/": [
        {
          text: "使用指南",
          link: "/docs/",
          items: [
            { text: "安装指南", link: "/docs/install" },
            {
              text: "软件配置",
              collapsed: true,
              items: [
                { text: "常规设置", link: "/docs/config/general" },
                { text: "快捷键设置", link: "/docs/config/hotkey" },
                { text: "翻译设置", link: "/docs/config/translate" },
                { text: "文字识别设置", link: "/docs/config/recognize" },
                { text: "服务设置", link: "/docs/config/service" },
                { text: "备份设置", link: "/docs/config/backup" },
              ],
            },
            { text: "外部调用", link: "/docs/invoke" },
            { text: "插件系统", link: "/docs/plugin" },
            { text: "Wayland", link: "/docs/wayland" },
            {
              text: "API服务申请",
              link: "/docs/api/",
              collapsed: true,
              items: [
                {
                  text: "文本翻译",
                  collapsed: true,
                  items: [
                    { text: "百度翻译", link: "/docs/api/translate/baidu" },
                    { text: "阿里翻译", link: "/docs/api/translate/alibaba" },
                    { text: "彩云小译", link: "/docs/api/translate/caiyun" },
                    { text: "DeepL", link: "/docs/api/translate/deepl" },
                    { text: "谷歌翻译", link: "/docs/api/translate/google" },
                    { text: "质谱 AI", link: "/docs/api/translate/chatglm" },
                    { text: "OpenAI", link: "/docs/api/translate/openai" },
                    { text: "小牛翻译", link: "/docs/api/translate/niutrans" },
                    { text: "有道翻译", link: "/docs/api/translate/youdao" },
                    { text: "腾讯翻译君", link: "/docs/api/translate/tencent" },
                    {
                      text: "腾讯交互翻译",
                      link: "/docs/api/translate/transmart",
                    },
                    {
                      text: "火山翻译",
                      link: "/docs/api/translate/volcengine",
                    },
                  ],
                },
                {
                  text: "文字识别",
                  collapsed: true,
                  items: [
                    { text: "百度 OCR", link: "/docs/api/recognize/baidu" },
                    { text: "腾讯 OCR", link: "/docs/api/recognize/tencent" },
                    {
                      text: "火山 OCR",
                      link: "/docs/api/recognize/volcengine",
                    },
                    { text: "讯飞 OCR", link: "/docs/api/recognize/iflytek" },
                    {
                      text: "百度图片翻译",
                      link: "/docs/api/recognize/baidu_img",
                    },
                    {
                      text: "腾讯图片翻译",
                      link: "/docs/api/recognize/tencent_img",
                    },
                    {
                      text: "讯飞公式识别",
                      link: "/docs/api/recognize/iflytek_latex",
                    },
                    {
                      text: "Simple LaTeX",
                      link: "/docs/api/recognize/simple_latex",
                    },
                  ],
                },
                {
                  text: "生词本",
                  collapsed: true,
                  items: [
                    { text: "Anki", link: "/docs/api/collection/anki" },
                    { text: "欧路词典", link: "/docs/api/collection/eudic" },
                  ],
                },
                {
                  text: "语音合成",
                  collapsed: true,
                  items: [{ text: "Lingva", link: "/docs/api/tts/lingva" }],
                },
              ],
            },
            { text: "常见问题", link: "/docs/faq" },
          ],
        },
      ],
    },
    footer: {
      message: "基于<a href='https://github.com/pot-app/pot-desktop/blob/master/LICENSE' target='_blank'>GPL-3.0</a>开源协议发布<br/>Copyright © 2023-present <a href='https://github.com/pot-app' target='_blank'>Pot-App</a>",
      copyright: "<div style='display: flex; justify-content: center'><a href='https://beian.miit.gov.cn' target='_blank'>蜀ICP备2023031468号-1</a><img src='/img/gongan.png' style='height: 18px; margin: auto 8px'><a href='https://beian.mps.gov.cn/#/query/webSearch?code=51019002005996' rel='noreferrer' target='_blank'>川公网安备51019002005996</a></div>",
    },
    editLink: {
      pattern:
        "https://github.com/pot-app/pot-docs-vitepress/edit/main/vitepress/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
};
