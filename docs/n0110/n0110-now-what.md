---
title: "Now What (N0110) ?"
---

Your Numworks doesn't need to be unlocked, yay!

You now have multiple choices. You can:
- Install a patched bootloader and then install Epsilon >= 16
- Install a custom firmware

### Choice I - Install a patched bootloader

If you wish to use Epsilon >= 16 while still being able to install a custom firmware,
you can install a patched bootloader :
1. Download [this file](https://phi.getomega.dev/install/bootloader.bin)
2. Open [this page](https://ti-planet.github.io/webdfu_numworks/n0110/) in a chromium-based browser
3. While holding the 6 key, press the reset button on the back of your device
4. Plug your calculator to your computer
5. Click "Connect to the Numworks calculator" and select the STM32 bootloader.
6. Click "Chose file" and pick the bootloader.bin that you just downloaded
7. Click Flash internal

You can now hold 4 and reset. You'll boot into the soft bootloader. From there, you can install Epsilon from [Numworks' website](https://my.numworks.com/devices/upgrade).

Continue to [Final checks](final-checks)
{: .notice--primary}

### Choice II - Install a CFW

Go to [choose a CFW](choose-a-cfw)
{: .notice--primary}
