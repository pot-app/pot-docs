---
title: Pot
titleTemplate: 使用指南
---

## 使用指南

| 划词翻译                                             | 输入翻译                                                       | 外部调用                                                                |
| ---------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 鼠标选中需要翻译的文本，按下设置的划词翻译快捷键即可 | 按下输入翻译快捷键呼出翻译窗口，输入待翻译文本后按下 回车 翻译 | 通过被其他软件调用实现更加方便高效的功能, 详见 [外部调用](/docs/invoke) |
| <img src="/img/eg1.gif"/>                            | <img src="/img/eg2.gif"/>                                      | <img src="/img/eg3.gif"/>                                               |

| 剪切板监听模式                                                         | 截图 OCR                                          | 截图翻译                                         |
| ---------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| 在任意翻译面板上点击左上角图标启动剪切板监听默认，复制文字即可完成翻译 | 按下截图 OCR 快捷键后框选需要识别区域即可完成识别 | 按下截图翻译快捷键后框选需要识别区域即可完成翻译 |
| <img src="/img/eg4.gif"/>                                              | <img src="/img/eg5.gif"/>                         | <img src="/img/eg6.gif"/>                        |

## 特色功能

- 多接口并行翻译
- 多接口文字识别
- 多接口语音合成
- 导出到生词本
- 外部调用 ([详情](/docs/invoke))
- 支持插件系统 ([详情](/docs/plugin))
- 支持所有 PC 平台 (Windows, macOS, Linux)
- 支持 Wayland (在 KDE、Gnome 以及 Hyprland 上测试)
- 多语言支持

## 支持接口

### 翻译

- [OpenAI](https://platform.openai.com/)
- [智谱 AI](https://www.zhipuai.cn/)
- [阿里翻译](https://www.aliyun.com/product/ai/alimt)
- [百度翻译](https://fanyi.baidu.com/)
- [彩云小译](https://fanyi.caiyunapp.com/)
- [腾讯翻译君](https://fanyi.qq.com/)
- [腾讯交互翻译](https://transmart.qq.com/)
- [火山翻译](https://translate.volcengine.com/)
- [小牛翻译](https://niutrans.com/)
- [Google](https://translate.google.com)
- [Bing](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/)
- [Bing 词典](https://www.bing.com/dict)
- [DeepL](https://www.deepl.com/)
- [有道翻译](https://ai.youdao.com/)
- [剑桥词典](https://dictionary.cambridge.org/)
- [Yandex](https://translate.yandex.com/)
- [Lingva](https://github.com/TheDavidDelta/lingva-translate) ([插件](https://github.com/pot-app/pot-app-translate-plugin-template))
- [Tatoeba](https://tatoeba.org/) ([插件](https://github.com/pot-app/pot-app-translate-plugin-tatoeba))
- [ECDICT](https://github.com/skywind3000/ECDICT) (离线词典 [插件](https://github.com/pot-app/pot-app-translate-plugin-tatoeba))

更多接口支持见 [插件系统](/docs/plugin)

### 文字识别

- 系统 OCR (离线)
  - [Windows.Media.OCR](https://learn.microsoft.com/en-us/uwp/api/windows.media.ocr.ocrengine?view=winrt-22621) on Windows
  - [Apple Vision Framework](https://developer.apple.com/documentation/vision/recognizing_text_in_images) on MacOS
  - [Tesseract OCR](https://github.com/tesseract-ocr) on Linux
- [Tesseract.js](https://tesseract.projectnaptha.com/) (离线)
- [百度](https://ai.baidu.com/tech/ocr/general)
- [腾讯](https://cloud.tencent.com/product/ocr-catalog)
- [火山](https://www.volcengine.com/product/OCR)
- [迅飞](https://www.xfyun.cn/services/common-ocr)
- [腾讯图片翻译](https://cloud.tencent.com/document/product/551/17232)
- [百度图片翻译](https://fanyi-api.baidu.com/product/22)
- [Simple LaTeX](https://simpletex.cn/)
- [OCRSpace](https://ocr.space/) ([插件](https://github.com/pot-app/pot-app-recognize-plugin-template))
- [Rapid](https://github.com/RapidAI/RapidOcrOnnx) (离线 [插件](https://github.com/pot-app/pot-app-recognize-plugin-rapid))
- [Paddle](https://github.com/hiroi-sora/PaddleOCR-json) (离线 [插件](https://github.com/pot-app/pot-app-recognize-plugin-paddle))

更多接口支持见 [插件系统](/docs/plugin)

### 语音合成

- [Lingva](https://github.com/thedaviddelta/lingva-translate)

更多接口支持见 [插件系统](/docs/plugin)

### 生词本

- [Anki](https://apps.ankiweb.net/)
- [欧路词典](https://dict.eudic.net/)
- [有道](https://www.youdao.com/) ([插件](https://github.com/pot-app/pot-app-collection-plugin-youdao))
- [扇贝](https://web.shanbay.com/web/main) ([插件](https://github.com/pot-app/pot-app-collection-plugin-shanbay))

更多接口支持见 [插件系统](/docs/plugin)

## 感谢

- [Bob](https://github.com/ripperhe/Bob) 灵感来源
- [bob-plugin-openai-translator](https://github.com/yetone/bob-plugin-openai-translator) OpenAI 接口参考
- [@uiYzzi](https://github.com/uiYzzi) 实现思路
- [@Lichenkass](https://github.com/Lichenkass) 维护 Deepin 应用商店中的 pot
- [Tauri](https://github.com/tauri-apps/tauri) 好用的 GUI 框架
