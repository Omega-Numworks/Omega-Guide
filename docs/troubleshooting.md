---
sidebar_position: 95
title: "Troubleshooting"
pagination_next: null
pagination_prev: null
---

This page lists all knows errors you can get when modding your NumWorks calculator. 

## On any calculator

### Black screen and red LED

Your calculator is in Recovery mode, it's waiting to receive a firmware, so it's unlocked. **If you update from NumWorks' website, your calculator will be locked**

[Choose a Custom OS](./cfw/choose-a-cfw) to install on your calculator (if you want to install Epsilon without locking your calculator, install first a compatible Custom OS while in recovery mode, then install Epsilon while **NOT** in recovery mode).

### Black screen, yellow cable, and `numworks.com/rescue`

This is NumWorks' bootloader. It shows up when the calculator is locked and you started the Recovery mode by holding 6 and pressing reset, or when the calculator couldn't start.

If you want to unlock your calculator, don't go to the `numworks.com/rescue` website, but follow the guide from [Installing Epsilon 18.2.0](./unlock/phi/install-epsilon-18-2-0).

### Black screen, nothing else

There are 5 possible reasons:
- Your calculator is in sleep mode, press the power button to turn it back on.
- Your calculator may have encountered a weird bug, try pressing the RESET button on the back.
- Your calculator may be discharged, try letting it charge a few minutes.
- The battery is disconnected, you may need to open your calculator to plug it back in.
- If you have a N0100, you may be in Recovery Mode, unplug the cable, and press the RESET button on the back.

If this doesn't solve the problem, contact NumWorks.

### Huge battery consumption

There are 2 possible reasons:
- You have enabled the clock in the settings, some custom firmwares include it. The clock consumes a lot of battery and it's highly recommended to disable it.
- Your calculator keeps the led green. This is a hardware issue that tricks the calculator into thinking it's constantly charging and so fully charged while it's not the case. You should contact NumWorks to replace your calculator

## Connecting your calculator to your computer

### Calculator not detected

There are multiple possible causes: Weather you don't click on the right button, or the driver or config file isn't installed on Windows or Linux.

Make sure you are pressing the right button, if you are in recovery mode, press "Recovery" and not "Detect Calculator".

Open the [Rescue page](https://numworks.com/rescue/) on NumWorks' website and it will give it and tell you how to install it. **Don't plug in your calculator to make sure you don't lock it.**

If you are using Linux, it may still not be detected. It can happen if your web browser is installed as a flatpak or snap.

If you're using flatpak, you will need to install [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal), select your web browser, and add `/run/udev` in the "Other files" into the "Filesystem" category.

You can also run this command: `flatpak override --user --filesystem=/run/udev [Application ID]` (Replace `[Application ID]` with your web browser's ID, try to run `flatpak list` to find it).

If you are using Snap, run the following command: `snap connect [Application ID]:raw-usb` (Replace `[Application ID]` with your web browser's ID, try to run `snap list` to find it).

Don't forget that you may need to restart your web browser if you unplug and replug the calculator.

### Recovery mode (Black Screen + Red Led), calculator not recognized

Your calculator looks like it's in recovery mode but it isn't.

Hold 6 and click RESET to start it in recovery mode, it will look the same but this time, it will be recognized.

You may also not have the driver or config file installed, check the [Rescue page](https://numworks.com/rescue/) on NumWorks' website and it will give it and tell you how to install it. **Don't plug in your calculator to make sure you don't lock it.**

### "Unable to claim interface"

This error is displayed when you try to connect your calculator but it's already used by another tab or software. It usually happens when you try to install external apps but the tab you used to install your custom firmware is still open.

This can easily be fixed if you close the tab or software already connected to it. Only one tab (or software) at a time can establish the connection to the calculator.

### "Access Denied" when trying to connect the calculator in Recovery mode

This can happen on Windows and Linux:
- On Linux it means you haven't installed the config file, [NumWorks' update page](https://numworks.com/update/) will give it to you.
- On Windows it means you are in recovery mode and the wrong driver is selected, there are a few steps you can follow to fix this
  1. If it's not installed, install the driver from [NumWorks' rescue page](https://numworks.com/rescue/).
  2. Open Device manager, press Win+R, type `devmgmt.msc`, and press Enter.
  3. Search for a device with STM in the name.
  4. Right click on it, and press "Update Driver".
  5. Dont search automatically for drivers, search for it manually. Then decide to choose in a list.
  6. Select the NumWorks driver, then press Next.
  7. The driver should be correctly installed, you can now connect in recovery mode and it should work.
  
  :::note
  
  Some software like music production ones may keep reinstalling the wrong driver. If it happens, close these softwares to be able to change the driver.
  
  :::

### "Could not detect the calculator model" / "N????"

This means your calculator is protected against CFW installation. If you want to install a Custom OS, you need to unlock it.

Follow [this guide](./intro) to unlock it.

## Modifying the calculator

### Installation takes infinite amout of time

This can happen on Omega's website and on NumWorks' website. Unless your calculator is locked, the firmware is already installed but the website is trying to boot the calculator and it fails.

Just press RESET on the calculator and it should be fixed.

### "CommandName is not defined"

You are trying to do something with the calculator but the calculator isn't in the correct mode, like trying to install apps with the calculator in Recovery Mode or on N0100.

Try to use the correct mode, for external apps just run it in normal mode.

### Calculator restarts when trying to install custom firmware

Your calculator is running Epsilon 19 or higher, it can happen when the calculator is locked or when you are running it from custom bootloader.

Just restart the calculator in bootloader or any other firmware that isn't Epsilon 19 or higher.

### "ControlTransferIn" / "ControlTransferOut"

Something interrupted the connection with the calculator.

Make sure you are in the right mode and no other app or tab is using the calculator.

### "DFU DOWNLOAD FAILED"

You may not be using the right WebDFU, make sure you are using [TI-Planet's WebDFU](https://ti-planet.github.io/webdfu_numworks/n0110/).

### "Address 0x90000000 outside of memory map"

You are trying to flash the external partition but the calculator is not in the right mode. This can't work.

You need to flash while in NumWorks' bootloader, the custom bootloader or recovery mode flasher (the screen saying "Recovery mode" when installing Omega in Recovery mode)

### Address 90a687ff outside of memory map

You are trying to install more than what the calculator can support.

## On modded calculators

### "Invalid" Slot in bootloader

This means the slot does not contain any working OS. You have to reinstall it yourself if you want to use it.

### Screen and led blinking

You are trying to run Epsilon 19 with an old custom bootloader.

Update the bootloader: go to your custom firmware's website, put the calculator in recovery mode (holding 6 and clicking RESET on the calculator's back), connect the calculator to the computer,  then select "recovery" on custom firmware's website.

### "Memory is corrupted" when adding Python scripts

It can happen when the custom bootloader is too old. To update it: go to your custom firmware's website, put the calculator in recovery mode (holding 6 and clicking reset on the calculator's back), connect the calculator to the computer, then select "recovery" on custom firmware's website.

### Crash when starting Upsilon

Upsilon tends to crash when you start it and the calculator is connected to a PC. Disconnect it before starting.

### In dualboot, KhiCAS makes the calculator crash

KhiCAS is a heavy app and dual-booting with this app installed is not possible.

You may have installed KhiCAS, then Epsilon, which erased a part of KhiCAS, preventing it from starting.

If you want to use KhiCAS, you will need to reinstall it.

___

:::info
Is you error not listed? The provided solution didn't fix your problem ? Don't hesitate to ask on the [Omega Discord](https://discord.gg/X2TWhh9)
:::
