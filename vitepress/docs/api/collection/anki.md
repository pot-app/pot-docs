---
title: Pot
titleTemplate: Anki
---

# Anki

由于 AnkiWeb 并没有开放的 API，所以要支持 Anki 只能通过 Anki 客户端插件 `AnkiConnect`

## 配置步骤

## 安装 `AnkiConnect` 插件

1. 打开 Anki 客户端
2. 工具-插件-获取插件
3. 填入 `AnkiConnect` 插件 id `2055492159`，确认后安装
4. 重启 Anki 客户端生效
   更多 `AnkiConnect` 相关信息可以查阅[AnkiConnect 官网](https://foosoft.net/projects/anki-connect/)

## 安装 `Minimize to tray` 插件(可选)

由于 `AnkiConnect` 需要 Anki 客户端保持运行，而 Anki 客户端又没有后台运行的功能，所以需要借助插件使其可以最小化到托盘

1. 打开 Anki 客户端
2. 工具-插件-获取插件
3. 填入 `Minimize to tray` 插件 id `85158043`，确认后安装
4. 重启 Anki 客户端生效

## 在 Pot 中启用 Anki 支持

1. Pot-偏好设置-服务设置-生词本-添加内置服务-Anki-填入默认的端口号 `8765`，确认后保存

配置完成之后，翻译面板会出现添加到 Anki 图标，点击即可将本次翻译内容添加到 Anki。

> 注意需要 Anki 客户端保持后台运行
