---
title: Pot
titleTemplate: 插件系统
---

# 插件系统

软件内置接口数量有限，但是您可以通过插件系统来扩展软件的功能。

## 插件安装

你可以在 [pot-app-plugin-list](https://github.com/pot-app/pot-app-plugin-list) 仓库查找你需要的插件，然后前往插件仓库下载插件。

pot 插件的扩展名为 `.potext`, 下载得到`.potext`文件之后， 在 `偏好设置-服务设置-添加外部插件-安装外部插件` 选择对应的 `.potext` 即可安装成功，添加到服务列表中即可像内置服务一样正常使用了。

:::warning 故障排除

- 找不到指定的模块 (Windows)

  出现类似这样的报错是因为系统缺少 C++库，前往[这里](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022)安装即可解决问题。

- 不是有效的 Win32 应用程序 (Windows)

  出现类似这样的报错说明你没有下载对应系统或者架构的插件，前往插件仓库下载正确的插件即可解决问题。

:::

## 插件开发

在 [pot-app-plugin-list](https://github.com/pot-app/pot-app-plugin-list) 仓库中的 [模板](https://github.com/pot-app/pot-app-plugin-list/blob/main/README.md#%E6%A8%A1%E6%9D%BF) 章节提供了各种插件的开发模板，具体的开发文档请查看对应的模板仓库。
