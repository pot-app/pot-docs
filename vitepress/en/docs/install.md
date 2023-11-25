---
title: Pot
titleTemplate: Install Guide
---

# Install Guide

## Windows

### Install Manually

- For 32-bit machines, please download `Windows x86 (.exe)`，After the download is complete, double-click to install.

- For 64-bit machines, please download `Windows x64 (.exe)`，After the download is complete, double-click to install.

- For arm64 machines, please download `Windows arm64 (.exe)`，After the download is complete, double-click to install.

### Install via Winget

pot also supports install through `winget` package manager, if you already have `winget` installed, you can install pot directly with the following command:

```powershell
winget install Pylogmon.pot
```

## MacOS

:::warning Troubleshooting

- "pot" can’t be opened because the developer cannot be verified.

  Click the `Cancel` button, then go to the `Settings -> Privacy & Security` page, click the `Still Open` button, and then click the `Open` button in the pop-up window. After that, there will be no more pop-up warnings when opening pot.

- If you cannot find the above options in `Privacy & Security`, or get error prompts such as broken files with Apple Silicon machines. Open `Terminal.app` and enter the following command (you may need to enter a password halfway through), then restart pot:

  ```bash
  sudo xattr -d com.apple.quarantine /Applications/pot.app
  ```

:::

### Install Manually

MacOS provides both the `x64` version and the `aarch64` version, which correspond to Macs with `Intel` chips and Macs with `M1/M2` chips respectively.

- If you are using a Mac with an `Intel` chip, please download `MacOS x64(.dmg)`.
- If you are using a Mac with `M1/M2` chip, please download `MacOS aarch64(.dmg)`.

After downloading is complete, open the `.dmg` file and drag the `pot` file into the Applications folder.

### Install via Brew

1. Add our tap:

```bash
brew tap pot-app/homebrew-tap
```

2. Install pot:

```bash
brew install --cask pot
```

3. Upgrade pot

```bash
brew upgrade --cask pot
```

## Linux

:::warning Troubleshooting

- In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes. If you encounter a "Segmentation fault" or Pot fails to start, please try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or any other place where environment variables can be set) to disable the use of DMABUF.
- Wayland users are unable to use application-specific shortcuts. Please refer to the documentation on [setting system shortcuts](/en/docs/wayland#shortcut-can-t-be-used).

:::

### Debian/Ubuntu

#### Install Manually

- For 32-bit machines, please download `Linux x86 (.deb)`

- For 64-bit machines, please download `Linux x64 (.deb)`

- For aarch64 machines, please download `Linux aarch64  (.deb)`

- For armv7 machines, please download `Linux armv7 (.deb)`

Then use `apt-get` for installation.

```bash
sudo apt-get install ./pot_{version}_{arch}.deb
```

#### Install via the Spark App Store.

Download and install the [Spark App Store](https://www.spark-app.store/).

Simply search for "pot" in the store and click on the installation button.

### Arch/Manjaro

#### Install via [AUR](https://aur.archlinux.org/packages?O=0&K=pot-translation)

Use `AUR helper`：

```bash
yay -S pot-translation # 或 pot-translation-bin

# paru -S pot-translation # 或 pot-translation-bin
```

#### Install via `archlinuxcn`

If you are using the `archlinuxcn` repository, you can directly install it using pacman:

```bash
sudo pacman -S pot-translation
```

## Manual Compilation

### Required Tools

- [rust](https://www.rust-lang.org/) >= 1.70.0
- [pnpm](https://pnpm.io/) >=8.1.0
- [nodejs](https://nodejs.org/) >=18.0.0

### Compilation Steps

1. Clone Repository

```bash
git clone https://github.com/pot-app/pot-desktop.git
```

2. Installing dependencies (Linux Only)

```bash
sudo apt-get install -y libgtk-3-dev libwebkit2gtk-4.0-dev libayatana-appindicator-dev librsvg2-dev patchelf libxdo-dev libxcb1 libxrandr2 libdbus-1-3
```

3. Start Compilation

```bash
cd pot-desktop

pnpm install

pnpm tauri build
```

4. After compilation is completed, you can find the installation package for the corresponding platform in the `src-tauri/target/Release/bundle` directory.
