---
title: Pot
titleTemplate: User Guide
---

## User Guide

| Translation by selection                        | Translate by input                                                    | External calls                                                                           |
| ----------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Select text and press the shortcut to translate | Press shortcut to open translation window, translate by hitting Enter | More efficient workflow by integrating other apps, see [External Calls](/en/docs/invoke) |
| <img src="/img/eg1.gif"/>                       | <img src="/img/eg2.gif"/>                                             | <img src="/img/eg3.gif"/>                                                                |

| Clipboard Listening                                                                                                          | Screenshot OCR                     | Screenshot Translation                   |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------- |
| Click the top left icon on any translation panel to start clipboard listening. Copied text will be translated automatically. | Press shortcut, select area to OCR | Press shortcut, select area to translate |
| <img src="/img/eg4.gif"/>                                                                                                    | <img src="/img/eg5.gif"/>          | <img src="/img/eg6.gif"/>                |

## Features

- Parallel translations with multiple services
- OCR with multiple services
- Text-to-Speech with multiple services
- Export to vocabulary apps
- External calls ([Details](/en/docs/invoke))
- Plugin system ([Details](/en/docs/plugin))
- Support Windows, macOS and Linux
- Support Wayland (Tested on KDE, Gnome and Hyprland)
- Multi-language support

## Supported Services

### Translation

- [OpenAI](https://platform.openai.com/)
- [ChatGLM](https://www.zhipuai.cn/)
- [Ali Translate](https://www.aliyun.com/product/ai/alimt)
- [Baidu Translate](https://fanyi.baidu.com/)
- [Caiyun](https://fanyi.caiyunapp.com/)
- [Tencent Transmart](https://fanyi.qq.com/)
- [Tencent Interactive Translate](https://transmart.qq.com/)
- [Volcengine Translate](https://translate.volcengine.com/)
- [NiuTrans](https://niutrans.com/)
- [Google Translate](https://translate.google.com)
- [Bing Translate](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/)
- [Bing Dictionary](https://www.bing.com/dict)
- [DeepL](https://www.deepl.com/)
- [Youdao](https://ai.youdao.com/)
- [Cambridge Dictionary](https://dictionary.cambridge.org/)
- [Yandex](https://translate.yandex.com/)
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) ([Plugin](https://github.com/pot-app/pot-app-translate-plugin-template))
- [Tatoeba](https://tatoeba.org/) ([Plugin](https://github.com/pot-app/pot-app-translate-plugin-tatoeba))
- [ECDICT](https://github.com/skywind3000/ECDICT) (Offline Dictionary [Plugin](https://github.com/pot-app/pot-app-translate-plugin-tatoeba))

More Services see [Plugin System](/en/docs/plugin)

### Text Recognize

- System OCR (Offline)
- [Windows.Media.OCR](https://learn.microsoft.com/en-us/uwp/api/windows.media.ocr.ocrengine?view=winrt-22621) on Windows
- [Apple Vision Framework](https://developer.apple.com/documentation/vision/recognizing_text_in_images) on MacOS
- [Tesseract OCR](https://github.com/tesseract-ocr) on Linux
- [Tesseract.js](https://tesseract.projectnaptha.com/) (Offline)
- [Baidu](https://ai.baidu.com/tech/ocr/general)
- [Tencent](https://cloud.tencent.com/product/ocr-catalog)
- [Volcengine](https://www.volcengine.com/product/OCR)
- [iflytek](https://www.xfyun.cn/services/common-ocr)
- [Tencent Image Translate](https://cloud.tencent.com/document/product/551/17232)
- [Baidu Image Translate](https://fanyi-api.baidu.com/product/22)
- [Simple LaTeX](https://simpletex.cn/)
- [OCRSpace](https://ocr.space/) ([Plugin](https://github.com/pot-app/pot-app-recognize-plugin-template))
- [Rapid](https://github.com/RapidAI/RapidOcrOnnx) (Offline [Plugin](https://github.com/pot-app/pot-app-recognize-plugin-rapid))
- [Paddle](https://github.com/hiroi-sora/PaddleOCR-json) (Offline [Plugin](https://github.com/pot-app/pot-app-recognize-plugin-paddle))

More Services see [Plugin System](/en/docs/plugin)

### Text-to-Speech

- [Lingva](https://github.com/thedaviddelta/lingva-translate)

More Services see [Plugin System](/en/docs/plugin)

### Collection

- [Anki](https://apps.ankiweb.net/)
- [Eudic](https://dict.eudic.net/)
- [Youdao](https://www.youdao.com/) ([Plugin](https://github.com/pot-app/pot-app-collection-plugin-youdao))
- [ShanBay](https://web.shanbay.com/web/main) ([Plugin](https://github.com/pot-app/pot-app-collection-plugin-shanbay))

More Services see [Plugin System](/en/docs/plugin)

## Acknowledgement

- [Bob](https://github.com/ripperhe/Bob) Inspiration
- [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator) OpenAI API Reference
- [@uiYzzi](https://github.com/uiYzzi) Implementation ideas
- [@Lichenkass](https://github.com/Lichenkass) Maintaining the Deepin App Store.
- [Tauri](https://github.com/tauri-apps/tauri) A user-friendly GUI framework.
