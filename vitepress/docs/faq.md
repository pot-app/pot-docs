---
title: Pot
titleTemplate: 常见问题
---

# 常见问题

## Windows 7 无法使用

:::warning Windows 7 无法使用

- 原因

  Pot始终使用最新版Rust编译，现已不再支持 Windows 7 系统

- 解决方案

  借助 [i486/VxKex](https://github.com/i486/VxKex) 项目运行，步骤：
  1. 在 [Releases](https://github.com/i486/VxKex/releases) 下载 `KexSetup_Release_x_x_x_xxxx.exe` 并安装
  2. 进入 Pot 安装目录，右键 `pot.exe` 打开属性
  3. 找到 `VxKex` 选项卡，勾选 `Enable VxKex for this program` 及 `Disable VxKex for child processes` 选项，点击应用。
  4. 然后即可正常使用 Pot
:::

## 被杀毒软件删除

:::warning 被杀毒软件删除

- 原因

  软件被某些杀毒软件误报，作者目前遇到过两次，还不清楚具体的原因，看 tauri 的 issue,也有遇到同样问题的人，但目前还没发现具体的原因。

- 解决方案

  在杀毒软件中还原，并将软件加入白名单

:::

## 禁用或删除了系统 WebView2 (Windows)

:::warning 禁用或删除了系统 WebView2 (Windows)

- 原因

  Tauri 框架依赖于 WebView2，如果卸载或禁用了 WebView2，将无法显示界面，表现为 pot 可以启动，但是点击托盘菜单没有反应。

- 解决方案

  如果是利用第三方软件禁用了 Edge，请检查是否同时禁用了 WebView2，将 WebView2 取消禁用。

  如果是卸载了 WebView2，可以在微软官网下载安装包重新安装 WebView2。

  如果是企业版系统不方便安装或无法安装 WebView2，请尝试在 [Release](https://github.com/pot-app/pot-desktop/releases/latest) 下载内置 WebView2 的版本 `pot_{version}_{arch}_fix_webview2_runtime-setup.exe`

  若问题仍然存在请尝试使用 Windows7 兼容模式启动。

:::

## 配置文件格式错误

:::warning 配置文件格式错误

- 原因

  如果设置了不可用的快捷键，或者因为各种原因(你自己修改、或者软件异常退出)导致配置文件格式不正确，软件将无法启动。

- 解决方案

  备份配置文件之后将原配置文件删除，再次打开应用就正常了。

:::

## Nvidia 驱动问题 (Linux)

:::warning Nvidia 驱动问题 (Linux)

- 原因

  在最新版本的 [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生。

- 解决方案

  如果遇到 `段错误` 或 Pot 无法启动的情况，请尝试在 `/etc/environment` （或者其他设置环境变量的地方）中加入 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 环境变量关闭 DMABUF 的使用。

:::

## 应用没有签名 (MacOS)

:::warning 应用没有签名 (MacOS)

- 原因

  由于应用没有签名，所以 MacOS 可能会显示开发者无法验证或应用已损坏

- 解决方案

  点击 `取消` 按钮，然后去 `设置 -> 隐私与安全性` 页面，点击 `仍要打开` 按钮，然后在弹出窗口里点击

  `打开` 按钮即可，以后打开 pot 就再也不会有任何弹窗警告了

  如果在 `隐私与安全性` 中找不到以上选项，或启动时提示文件损坏。打开 `Terminal.app`，并输入以下命令，然后重启 pot 即可：

  ```bash
  sudo xattr -d com.apple.quarantine /Applications/pot.app
  ```

:::
