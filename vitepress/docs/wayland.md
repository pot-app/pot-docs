---
title: Pot
titleTemplate: Wayland
---

# Wayland

由于各大发行版对于 Wayland 的支持程度不同，所以 pot 本身没法做到特别完美的支持，这里可以提供一些常见问题的解决方案，通过合理的设置之后，pot 也可以在 Wayland 下完美运行。

## 快捷键无法使用

由于 Tauri 的快捷键方案并没有支持 Wayland，所以 pot 应用内的快捷键设置在 Wayland 下无法使用。 您可以设置系统快捷用 curl 发送请求来触发 pot，详见[外部调用](/docs/invoke)

## 截图无法使用

在一些纯 Wayland 桌面环境/窗口管理器(如 Hyprland)上，pot 内置的截图无法使用，这时可以通过使用其他截图工具代替，详见 [不使用软件内截图](/docs/invoke#不使用软件内截图)

下面给出在 Hyprland 下的配置示例(通过 grim 和 slurp 实现截图)：

```ini
bind = ALT, X, exec, grim -g "$(slurp)" ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png && curl "127.0.0.1:60828/ocr_recognize?screenshot=false"
bind = ALT, C, exec, grim -g "$(slurp)" ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png && curl "127.0.0.1:60828/ocr_translate?screenshot=false"
```

其他桌面环境/窗口管理器也是类似的操作

## 划词翻译窗口跟随鼠标位置

由于目前 pot 在 Wayland 下还无法获取到正确的鼠标坐标，所以内部的实现无法工作。 对于某些桌面环境/窗口管理器，可以通过设置窗口规则来实现窗口跟随鼠标位置，这里以 Hyprland 为例：

```ini
windowrule = float, ^(pot) # Translation window floating
windowrule = move cursor 0 0, ^(pot) # Translation window follows the mouse position.
```
