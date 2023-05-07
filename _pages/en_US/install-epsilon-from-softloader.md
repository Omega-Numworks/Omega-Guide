---
title: "Install Epsilon from softloader"
---

{% include toc title="Table of Contents" %}

### Required Reading

We will now install Epsilon 18.2.0 from softloader

### What You Need

- A chromium-based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- Epsilon 18.2.0 `18-2-0.dfu` (since Numworks deleted this file from their website because of Phi, we cannot give you a link here)
- [This python script](images/unpack.py)

### Section I - Extracting the external binary

Since Epsilon is now proprietary, we can't distribute the external flash image directly.
We thus have to make you extract it.

1. Install python on your platform
2. Download Epsilon 18.2.0
3. Create a new folder
4. Put the python script in that folder
5. Put 18-2-0.dfu in that folder
6. Run the script

You should now have an internal.bin and an external.bin file

### Section II - Install

1. Open [WebDFU](https://ti-planet.github.io/webdfu_numworks/n0110/) in a chromium-based browser
2. Hold the 4 key on your numworks and press the reset button
3. You should now see the Omega bootloader interface
4. Select `external.bin` in WebDFU
5. Click "flash external"
6. Once flashing is done, press the reset button on your Numworks

You should now see version 18.2.0 in Settings > About.

If it is not the case or your Numworks doesn't boot, please join the [Omega Discord](https://discord.gg/X2TWhh9).
{: .notice--warning}

___

If you want to have Omega and Epsilon at the same time, continue to [Dual Boot](dual-boot)
{: .notice--info}