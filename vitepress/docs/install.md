---
title: Pot
titleTemplate: 安装指南
---

# 安装指南

## Windows

### 手动下载安装

- 32 位机器请下载 `Windows x86 (.exe)`，下载完成后双击安装即可。

- 64 位机器请下载 `Windows x64 (.exe)`，下载完成后双击安装即可。

- arm64 机器请下载 `Windows arm64 (.exe)`，下载完成后双击安装即可。

### 通过 winget 安装

pot 也支持通过 `winget` 包管理器安装，如果您已经安装了 `winget`，可以直接通过以下命令安装 pot:

```powershell
winget install Pylogmon.pot
```

## MacOS

:::warning Troubleshooting

- 由于应用没有签名，所以 MacOS 可能会显示开发者无法验证或应用已损坏

  点击 `取消` 按钮，然后去 `设置 -> 隐私与安全性` 页面，点击 `仍要打开` 按钮，然后在弹出窗口里点击

  `打开` 按钮即可，以后打开 pot 就再也不会有任何弹窗警告了

- 如果在 `隐私与安全性` 中找不到以上选项，或启动时提示文件损坏。打开 `Terminal.app`，并输入以下命令，然后重启 pot 即可：

  ```bash
  sudo xattr -d com.apple.quarantine /Applications/pot.app
  ```

:::

### 手动安装

MacOS 提供了 `x64` 版本和 `aarch64` 版本，分别对应 `intel` 芯片的 Mac 和 `M1/M2` 芯片的 Mac

- 如果您使用 Intel 芯片的 Mac，请下载 `MacOS x64(.dmg)`
- 如果您使用 M1/M2 芯片的 Mac，请下载 `MacOS aarch64(.dmg)`

下载完成之后打开 `dmg` 文件，将 `pot` 拖到 `Application` 内即可。

### 通过 Brew 安装

1. 添加我们的 tap:

```bash
brew tap pot-app/homebrew-tap
```

2. 安装 pot:

```bash
brew install --cask pot
```

3. 更新 pot

```bash
brew upgrade --cask pot
```

## Linux

:::warning 故障排除

- 在最新版本的 [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0) 中，由于 Nvidia 专有驱动未完全实现 DMABUF，将导致无法启动和崩溃的情况发生，如果遇到 `段错误` 或 Pot 无法启动的情况，请尝试在 `/etc/environment` （或者其他设置环境变量的地方）中加入 `WEBKIT_DISABLE_DMABUF_RENDERER=1` 环境变量关闭 DMABUF 的使用。
- Wayland 用户无法使用应用内快捷键，请参考文档[设置系统快捷键](/docs/wayland#快捷键无法使用)

:::

### Debian/Ubuntu

#### 手动下载安装

- 32 位机器请下载 `Linux x86 (.deb)`

- 64 位机器请下载 `Linux x64 (.deb)`

- aarch64 机器请下载 `Linux aarch64  (.deb)`

- armv7 机器请下载 `Linux armv7 (.deb)`

然后使用 `apt-get` 进行安装

```bash
sudo apt-get install ./pot_{version}_{arch}.deb
```

#### 通过星火应用商店安装

下载安装[星火应用商店](https://www.spark-app.store/)，在商店中搜索 `pot` 后点击安装即可。

### Arch/Manjaro

#### 通过 [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation) 安装

使用 `AUR helper` 安装：

```bash
yay -S pot-translation # 或 pot-translation-bin

# paru -S pot-translation # 或 pot-translation-bin
```

#### 通过 `archlinuxcn` 安装

如果你使用 `archlinuxcn` 源，可以直接使用 pacman 安装

```bash
sudo pacman -S pot-translation
```

### Flatpak

> [!WARNING]
> Flatpak 版本缺失托盘图标。

<a href='https://flathub.org/apps/com.pot_app.pot'>
    <img width='240' alt='Download on Flathub' src='https://flathub.org/api/badge?locale=zh-Hans'/>
</a>

## 手动编译

### 所需工具

- [rust](https://www.rust-lang.org/) >= 1.70.0
- [pnpm](https://pnpm.io/) >=8.1.0
- [nodejs](https://nodejs.org/) >=18.0.0

### 编译步骤

1. 克隆仓库

```bash
git clone https://github.com/pot-app/pot-desktop.git
```

2. 安装构建依赖 (Linux Only)

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator3-dev librsvg2-dev patchelf libxdo-dev libxcb1 libxrandr2 libdbus-1-3
```

3. 开始编译

```bash
cd pot-desktop

pnpm install # 安装前端依赖

pnpm tauri build # 编译打包
```

4. 编译完成之后，可以在`src-tauri/target/Release/bundle`目录下找到对应平台的安装包
