---
title: Pot
titleTemplate: External Calls
---

# External Calls

Pot provides a complete HTTP interface for integration with other software. You can call pot by sending HTTP requests to `127.0.0.1:port`, where `port` is the listening port of pot, default to `60828`, and can be changed in the app settings.

## API Docs:

```bash
POST "/" => Translate given text (body is text to translate)
GET "/config" => Open settings
GET "/translate" => Translate given text (same as "/")
GET "/selection_translate" => Translate selected text
GET "/input_translate" => Open input translation
GET "/ocr_recognize" => Perform OCR on screenshot
GET "/ocr_translate" => Perform translation on screenshot
GET "/ocr_recognize?screenshot=false" => OCR without taking screenshot
GET "/ocr_translate?screenshot=false" => Translate screenshot without taking screenshot
GET "/ocr_recognize?screenshot=true" => OCR with screenshot
GET "/ocr_translate?screenshot=true" => Translate screenshot
```

## Example:

- Call translation by selection:

  To call pot's translation by selection, simply send a request to `127.0.0.1:port`:

  E.g. using curl:

  ```bash
  curl "127.0.0.1:60828/selection_translate"
  ```

## OCR without internal screenshot

This allows you to perform OCR/translation without using pot's internal screenshot, so you can use your own screenshot tools. It also solves the problem where pot's internal screenshot doesn't work on some platforms.

### Workflow:

1. Take screenshot using other tool
2. Save screenshot to `$CACHE/com.pot-app.desktop/pot_screenshot_cut.png`
3. Send request to `127.0.0.1:port/ocr_recognize?screenshot=false` to call

:::info
`$CACHE` is the system cache dir, e.g. `C:\Users\{username}\AppData\Local\com.pot-app.desktop\pot_screenshot_cut.png` on Windows.
:::

### Example

OCR using Flameshot on Linux:

```bash
rm ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png && flameshot gui -s -p ~/.cache/com.pot-app.desktop/pot_screenshot_cut.png && curl "127.0.0.1:60828/ocr_recognize?screenshot=false"
```

## Existing Usages (Quick selection translation)(Recommended)

### Effect display

![Popup example](/img/eg3.gif)

### SnipDo (Windows)

1. Download and install SnipDo in the [Microsoft Store](https://apps.microsoft.com/store/detail/snipdo/9NPZ2TVKJVT7)
2. Download the SnipDo extension of pot from the Latest [Release](https://github.com/pot-app/pot-desktop/releases/latest) (pot.pbar)
3. Double click the downloaded file to install it.
4. Selection some text, you can see the pot icon in the upper right corner of the selection, click the icon to translate.

### PopClip (MacOS)

1. Download and install PopClip in the [App Store](https://apps.apple.com/us/app/popclip/id445189367?mt=12)
2. Download the PopClip extension of pot from the Latest [Release](https://github.com/pot-app/pot-desktop/releases/latest) (pot.popclipextz)
3. Double click the downloaded file to install it.
4. Enable the pot extension in PopClip settings, and then you can translate by selecting text.

### Starry (Linux)

:::info
Starry is still in the development stage, so you can only compile him manually
:::
Github: [ccslykx/Starry](https://github.com/ccslykx/Starry)
