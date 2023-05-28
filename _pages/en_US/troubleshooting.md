---
title: "Troubleshooting"
---

{% include toc title="Table of Contents" %}

### Huge battery consumption

This can happen if you enable the clock in the settings, some custom firmwares include it.
The clock consumes a lot of battery and it's highly recommended to disable it.

### Calculator not detected

it means the driver or config file isn't installed on Windows or Linux.
Open the [Update page](https://numworks.com/update/) on Numworks' website and it will give it and tell you how to install it. **Don't plug in your calculator to make sure you don't lock it**

### "CommandName is not defined"

You are trying to do something with the calculator but the calculator isn't in the right mode, like trying to install apps with the calculator in Recovery Mode or on n0100.
Try to use the right mode, for external apps just run it in normal mode.

### "Unable to claim interface"

This error is displayed when you try to connect your calculator but it's already used by another tab or software. It usually happens when you try to install external apps but the tab you used to install your custom firmware is still open.
This can easily be fixed if you close the tab or software already connected to it.

### "Could not detect the calculator model" / "N????"

This means your calculator is locked and you need to unlock it.
Follow [this guide](get-started) to unlock it.

### Recovery mode (Black Screen + Red Led), calculator not recognized

Your calculator looks like it's in recovery mode but it isn't.
Hold 6 and click reset to start it in recovery mode, it will look the same but this time, it will be recognized.

### "Memory is corrupted" when adding python scripts

It can happen when the custom bootloader is too old. To update it go to your custom firmware's website then reinstall it from recovery mode by holding 6 and clicking reset on the calculator.

### Screen and led blinking

You are trying to run Epsilon 19 with an old custom bootloader.
Update the bootloader by going to your custom firmware's website and reinstalling it from recovery mode by holding 6 and clicking reset on the calculator.

### Installation takes infinite amout of time

This can happen on Omega's website and on Numworks' website. Unless your calculator is locked, the firmware is already installed but the website is trying to boot the calculator and it can't.
Just click reset on the calculator and it should be fixed

### "Address 0x90000000 outside of memory map"

You are trying to flash the external partition while in recovery mode. This can't work.
You need to flash while in the custom bootloader or recovery mode flasher (the screen saying "Recovery mode" when instlling Omega in Recovery mode)

### Calculator restarts when trying to install custom firmware

Your calculator is running Epsilon 19, it can happen when the calculator is locked or when you are running it from custom bootloader.
Just restart the calculator in bootloader or any other firmware that isn't Epsilon 19 or higher

### "ControlTransferIn" / "ControlTransferOut"

Something interrupted the connection with the calculator.
Make sure you are in the right mode and no other app or tab is using the calculator.

### "DFU DOWNLOAD FAILED"

You may not be using the right WebDFU, make sure you are using [TI-Planet's WebDFU](https://ti-planet.github.io/webdfu_numworks/n0110/)

### "Access Denied" when trying to connect the calculator in Recovery mode

This can happen on Windows and Linux:
- On Linux it means you haven't installed the config file, [Numworks' update page](https://numworks.com/update/) will give it to you.
- On Windows it means you are in recovery mode and the wrong driver is selected, there are a few steps you can follow to fix this
  1. If it's not installed, install the driver from [Numworks' update page](https://numworks.com/update/)
  2. Open Device manager, press Win+R, type `devmgmt.msc`, and press enter
  3. Search for a device with STM in the name
  4. Right click on it, and press "Update Driver"
  5. Dont search automatically for drivers, Search for it manually. Then decide to choose in a list.
  6. Select the Numworks driver, then press next
  7. The driver should be correctly installed, you can now connect in recovery mode and it should work.

___

### Is you error not listed ? The provided solution didn't fix your problem ? Don't hesitate to ask on the [Omega Discord](https://discord.gg/X2TWhh9)
{: .notice--info}
