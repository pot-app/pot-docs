export const META_URL = 'https://pot-app.com'
export const META_TITLE = 'Pot'
export const META_DESCRIPTION = 'Cross-platform software for text translation and ocr recognize.'

export const enConfig = {
    description: META_DESCRIPTION,
    head: [
        ['meta', { property: 'og:url', content: META_URL }],
        ['meta', { property: 'og:description', content: META_DESCRIPTION }],
        ['meta', { property: 'twitter:url', content: META_URL }],
        ['meta', { property: 'twitter:title', content: META_TITLE }],
        ['meta', { property: 'twitter:description', content: META_DESCRIPTION }],
    ],
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/en/docs/', activeMatch: '/en/docs/' },
            { text: 'Changelog', link: '/en/changelog' },
            { text: 'Download', link: '/en/download' },
            {
                text: 'Community',
                items: [
                    { text: 'Telegram', link: 'https://t.me/pot_app' },
                    { text: 'Matrix', link: 'https://matrix.to/#/#pot-app:matrix.org' },
                    { text: 'QQ Channel', link: 'https://pd.qq.com/s/akns94e1r' },
                    { text: 'QQ Group', link: '/img/qq_group.png' },
                    { text: 'Email', link: 'mailto:support@pot-app.com' }
                ]
            },
            { text: 'About', link: '/en/about' }
        ],
        sidebar: {
            '/en/docs/': [
                {
                    text: 'User Guide',
                    link: '/en/docs/',
                    items: [
                        { text: 'Install Guide', link: '/en/docs/install' },
                        {
                            text: 'Software Config', link: '/en/docs/config/', collapsed: true, items: [
                                { text: 'General', link: '/en/docs/config/general' },
                                { text: 'Hotkey', link: '/en/docs/config/hotkey' },
                                { text: 'Translate', link: '/en/docs/config/translate' },
                                { text: 'Recognize', link: '/en/docs/config/recognize' },
                                { text: 'Service', link: '/en/docs/config/service' },
                                { text: 'Backup', link: '/en/docs/config/backup' },
                            ]
                        },
                        { text: 'External Calls', link: '/en/docs/invoke' },
                        { text: 'Plugin System', link: '/en/docs/plugin' },
                        { text: 'Wayland', link: '/en/docs/wayland' },
                        { text: 'API Service', link: '/en/docs/api/', collapsed: true, items: [] },
                        { text: 'FAQ', link: '/en/docs/faq' },
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the GPL-3.0 License.',
            copyright: 'Copyright © 2023-present Pot-App'
        }
    }
}