---
title: "Install Epsilon from softloader"
sidebar_position: 4
---

:::danger

Following this guide may put your calculator at risk. Installing Epsilon on your calculator the wrong way may lock it. **STRICTLY** follow what's said on this page to make sure your calculator is safe

:::

:::caution

The latest Epsilon version may not be safe, check the latest version [for n0110](https://my.numworks.com/firmwares/n0110/stable.json) (Logged in Numworks account requiered). Latest known safe version: **21.2.0**

:::

:::info

This page is irrelevant if you have an n0100, because you can switch between any CFW and Epsilon without locking your calculator. And the n0100 can't have any custom bootloader.

:::

### Required Reading

We will now install Epsilon on one slot of your calculator, assuming you have a bootloader that allows it

### What You Need

- A PC with a chromium-based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- A compatible custom bootloader installed (if you don't know, see [this page](choose-a-cfw))

### Section I - Open the bootloader

If your CFW includes a custom bootloader that allows installing a firmware from it, you should now open the bootloader and make it ready to install anything. Some help can be found on [this page](choose-a-cfw)

### Section II - Install

1. Make sure your calculator is in the bootloader, ready to install anything. It **MUST NOT** be in recovery mode (black screen + red led) as this would allow Numworks to lock your calculator.
2. Open [Numworks' Update page](https://numworks.com/update)
3. Follow instructions but if it asks you to do anything on your calculator, don't do it unless it's connecting it to your PC. The website should see version 0.0.0
4. At the end the installer will get stuck and may even fail, it's because it can't reboot the calculator. Don't worry Epsilon is installed, just press reset and you are good

Now you have Epsilon with a custom bootloader so your calculator isn't locked.

Epsilon has normally been installed on both slots. So if you had a CFW, it has been erased, only the bootloader is remaining. To reinstall it you can do it normally from the bootloader or in recovery mode, just make sure you are not installing Epsilon again.

It's recommended to keep your CFW in Slot A.

### GG

You now have Epsilon and your CFW at the same time, Epsilon on one slot, your CFW on the other. You can now switch between them whenever you want, it works differently depending on your CFW but the goal is just to switch between slots.
