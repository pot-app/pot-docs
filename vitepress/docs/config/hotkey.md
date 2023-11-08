---
title: Pot
titleTemplate: 快捷键设置
---

# 快捷键设置

软件的四个基本功能都支持分别设置快捷键
注意，pot只支持标准的组合按键，不支持双击之类的非标准快捷键，以后也不会支持，如有需求请借助第三方按键映射来实现。

## 快捷键设置失败

### Wayland

Tauri的快捷键方案暂时还不支持Wayland，所以pot内的快捷键设置在Wayland下无法使用，请参考 [外部调用](/docs/invoke.html) 在系统自定义快捷键中通过`curl`命令来调用pot。
