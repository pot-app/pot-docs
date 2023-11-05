export const META_URL = 'https://pot-app.com'
export const META_TITLE = 'Pot'
export const META_DESCRIPTION = '跨平台划词翻译和OCR软件'

export const zhConfig = {
    description: META_DESCRIPTION,
    head: [
        ['meta', { property: 'og:url', content: META_URL }],
        ['meta', { property: 'og:image', content: '/screenshots/dark_zh.png' }],
        ['meta', { property: 'og:description', content: META_DESCRIPTION }],
        ['meta', { property: 'twitter:url', content: META_URL }],
        ['meta', { property: 'twitter:title', content: META_TITLE }],
        ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ],
    themeConfig: {
        nav: [
            { text: '使用指南', link: '/docs/', activeMatch: '/docs/' },
            { text: '下载', link: '/download' },
            {
                text: '社区交流',
                items: [
                    { text: 'Telegram', link: 'https://t.me/pot_app' },
                    { text: 'Matrix', link: 'https://matrix.to/#/#pot-app:matrix.org' },
                    { text: 'QQ频道', link: 'https://pd.qq.com/s/akns94e1r' },
                    { text: 'QQ群组', link: '/img/qq_group.png' },
                    { text: '电子邮件', link: 'mailto:support@pot-app.com' }
                ]
            },
            { text: '关于', link: '/about' }
        ],
        sidebar: {
            '/docs/': [
                {
                    text: '使用指南',
                    link: '/docs/',
                    items: [
                        { text: '安装指南', link: '/docs/install' },
                        {
                            text: '软件配置', collapsed: true,
                            items: [
                                { text: '常规设置', link: '/docs/config/general' },
                                { text: '快捷键设置', link: '/docs/config/hotkey' },
                                { text: '翻译设置', link: '/docs/config/translate' },
                                { text: '文字识别设置', link: '/docs/config/recognize' },
                                { text: '服务设置', link: '/docs/config/service' },
                                { text: '备份设置', link: '/docs/config/backup' }
                            ]
                        },
                        { text: '外部调用', link: '/docs/invoke' },
                        { text: '插件系统', link: '/docs/plugin' },
                        { text: 'Wayland', link: '/docs/wayland' },
                        {
                            text: 'API服务申请', link: '/docs/api/', collapsed: true,
                            items: [
                                {
                                    text: '文本翻译', collapsed: true,
                                    items: [
                                        { text: '百度翻译', link: '/docs/api/translate/baidu' },
                                        { text: '阿里翻译', link: '/docs/api/translate/alibaba' },
                                        { text: '彩云小译', link: '/docs/api/translate/caiyun' },
                                        { text: 'DeepL', link: '/docs/api/translate/deepl' },
                                        { text: '谷歌翻译', link: '/docs/api/translate/google' },
                                        { text: 'OpenAI', link: '/docs/api/translate/openai' },
                                        { text: '腾讯翻译君', link: '/docs/api/translate/tencent' },
                                        { text: '腾讯交互翻译', link: '/docs/api/translate/transmart' },
                                        { text: '火山翻译', link: '/docs/api/translate/volcengine' }
                                    ]
                                },
                                {
                                    text: '文字识别', collapsed: true,
                                    items: [
                                        { text: '百度OCR', link: '/docs/api/recognize/baidu' }
                                    ]
                                },
                                {
                                    text: '生词本', collapsed: true,
                                    items: [
                                        { text: 'Anki', link: '/docs/api/collection/anki' },
                                        { text: '欧路词典', link: '/docs/api/collection/eudic' }
                                    ]
                                }
                            ]
                        },
                        { text: '常见问题', link: '/docs/faq' },
                    ]
                }
            ]
        },
        footer: {
            message: '基于GPL-3.0开源协议发布',
            copyright: 'Copyright © 2023-present Pot-App'
        }
    }
}