---
title: Pot
titleTemplate: Plugin System
---

# Plugin System

The built-in services are limited. But you can expand the app's functionality through the plugin system.

## Install Plugin

You can find plugins you need in the [Plugin List](/en/plugin), and then download it.

The file extension of pot plugin is `.potext`. After downloading the `.potext` file, go to `Config - Service Settings - Add Extension - Install Plugin` to select the corresponding `.potext` to install it. It will then be added to the service list and can be used like a built-in service.

:::warning Troubleshooting

- The specified module could not be found (Windows)

  Errors like this occur because the system lacks C++ libraries，Go to [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170#visual-studio-2015-2017-2019-and-2022) download and install it.

- Not a valid Win32 application (Windows)

  An error like this indicates that you did not download the plugin for the corresponding system or architecture. Go to the plugin repository and download the correct plugin to solve the problem.

:::

## Develop Plugin

The [Template](https://github.com/pot-app/pot-app-plugin-list/blob/main/README_EN.md#template) section in the [pot-app-plugin-list](https://github.com/pot-app/pot-app-plugin-list) repo provides plugin development templates for various plugins. Please check the corresponding template repo for specific documentation.
