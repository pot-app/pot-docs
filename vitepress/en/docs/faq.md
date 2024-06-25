---
title: Pot
titleTemplate: FAQ
---

# FAQ

## Windows 7 Not Supported

:::warning Windows 7 Not Supported

- Reason

  Pot always uses the latest version of Rust for compilation, which no longer supports Windows 7.

- Solution

  Run using the [vxiiduu/VxKex](https://github.com/vxiiduu/VxKex) project. Follow these steps:
  
  1. Download `KexSetup_Release_x_x_x_xxxx.exe` from [Releases](https://github.com/vxiiduu/VxKex/releases) and install it.
  2. Navigate to the Pot installation directory, right-click `pot.exe`, and open Properties.
  3. Find the `VxKex` tab, check the options `Enable VxKex for this program` and `Disable VxKex for child processes`, then click Apply.
  4. You can now use Pot normally.
:::

## Deleted by antivirus software

:::warning Deleted by antivirus software

- Reason

  The software has been falsely reported by some antivirus software. The author has encountered this issue twice but is still unsure of the specific reason. Looking at the issues on Tauri, there are also others who have experienced the same problem, but no specific reason has been found yet.

- Solution

  Restore in antivirus software and add the software to the whitelist.

:::

## System WebView2 has been disabled or removed (Windows)

:::warning System WebView2 has been disabled or removed (Windows)

- Reason

  The Tauri framework relies on WebView2. If WebView2 is uninstalled or disabled, the interface will not be displayed. This will manifest as the application being able to launch, but there will be no response when clicking on the tray menu.

- Solution

  If Edge has been disabled using third-party software, please check if WebView2 has also been disabled at the same time. Please enable WebView2.

  If WebView2 has been uninstalled, you can download the installation package from the Microsoft official website and reinstall WebView2.

  If the enterprise edition system is inconvenient to install or cannot install WebView2, please try to download the fix WebView2 version `pot_{version}_{arch}_fix_webview2_runtime-setup.exe` at [Release](https://github.com/pot-app/pot-desktop/releases/latest)

  If the problem persists, try booting in Windows 7 compatibility mode.

:::

## Configuration file format error

:::warning Configuration file format error

- Reason

  If the configuration file format is incorrect due to various reasons (such as your own modifications or abnormal software termination), the software will not be able to start.

- Solution

  After backing up the configuration file, delete the original configuration file. When you open the application again, it will work normally.

:::

## Nvidia driver issues (Linux)

:::warning Nvidia driver issues (Linux)

- Reason

  In the latest version of [Webkit2Gtk](https://archlinux.org/packages/extra/x86_64/webkit2gtk) (2.42.0), due to incomplete implementation of DMABUF by Nvidia proprietary drivers, there may be issues with startup failure and crashes.

- Solution

  If you encounter a "Segmentation fault" or Pot fails to start, please try adding the environment variable `WEBKIT_DISABLE_DMABUF_RENDERER=1` in `/etc/environment` (or any other place where environment variables can be set) to disable the use of DMABUF.

:::

## The application is not signed (MacOS)

:::warning The application is not signed (MacOS)

- Reason

  Due to the lack of a signature for the application, MacOS may display a message stating that the developer cannot be verified or that the application is damaged.

- Solution

  Click the `Cancel` button, then go to the `Settings -> Privacy & Security` page, click the `Still Open` button, and then click the `Open` button in the pop-up window. After that, there will be no more pop-up warnings when opening pot.

  If you cannot find the above options in `Privacy & Security`, or get error prompts such as broken files with Apple Silicon machines. Open `Terminal.app` and enter the following command (you may need to enter a password halfway through), then restart pot:

  ```bash
  sudo xattr -d com.apple.quarantine /Applications/pot.app
  ```

:::
