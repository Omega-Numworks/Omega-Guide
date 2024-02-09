---
title: "Install Epsilon 18.2.0"
sidebar_position: 2
---

### Required Reading

We will now install Epsilon 18.2.0.

:::info

If you are not sure if you can install Epsilon 18.2.0, go check [this page](./check-version-change-eligibility).

:::


### What you need

- A chromium-based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- Epsilon 18.2.0 (`18-2-0.dfu`) (since NumWorks deleted this file from their website because of Phi, we cannot give you a link here)
- Python ([Link for Windows and macOS](https://www.python.org/))
- This Python script: [Linux and macOS version](/resources/unpack.py), [Windows version](/resources/unpack-win.py)

### Section I - Extracting the external binary

Since Epsilon is now proprietary, we can't distribute the external flash image directly.
We therefore have to make you extract it.

1. Install Python on your platform.
2. Download Epsilon 18.2.0.
3. Create a new folder.
4. Put the Python script in that folder.
5. Put the `18-2-0.dfu` file in that folder.
6. Run the script.

There should now be an `internal.bin` and `external.bin` file.

### Section II - Install

1. Open [WebDFU](https://ti-planet.github.io/webdfu_numworks/n0110/) in a chromium-based browser.
2. Hold the 6 key on your calculator and press the RESET button.
3. You should now see the Epsilon bootloader interface.
4. Select `external.bin` in WebDFU.
5. Click "Flash external".
6. Once flashing is done, press the RESET button on your calculator.

You should now see version 18.2.0 in Settings > About.

:::caution

If you do not see the right version or your calculator doesn't boot, you can only use an [alternate method](/docs/unlock/n0110-is-locked#alt-methods).

:::
