---
title: "Install Epsilon from softloader"
sidebar_position: 4
pagination_next: null
pagination_prev: cfw/choose-a-cfw
---

:::danger

Following this guide may put your calculator at risk. Installing Epsilon on your calculator the wrong way may lock it. **STRICTLY** follow what's said on this page to make sure your calculator is safe

:::

:::caution

The latest Epsilon version may not be safe, check the latest version. Latest known safe version: **22.2.0**.

:::

:::info

This page is irrelevant if you have a N0100, because you can switch between any Custom OS and Epsilon without locking your calculator, and either way the N0100 cannot have any custom bootloader.

:::

### Required Reading

We will now install Epsilon on one of the two slots of your calculator, assuming you already have a bootloader that allows it.

### What You Need

- A PC with a chromium-based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- A compatible custom bootloader installed (if you don't know what this is or if you're not sure if you have one, see [this page](/docs/cfw/choose-a-cfw))

### Section I - Open the bootloader

If your Custom OS includes a custom bootloader that allows installing a firmware from it, you should now open the bootloader and make it ready to install anything. Some help can be found on [this page](/docs/cfw/choose-a-cfw).

### Section II - Install

1. Make sure your calculator is in the bootloader, ready to install anything. It **MUST NOT** be in recovery mode (black screen + red LED) as this would allow NumWorks to lock your calculator.
2. Open [NumWorks' Update page](https://numworks.com/update)
3. Follow instructions but if it asks you to do anything on your calculator, do not do it unless it's connecting it to your PC. The website should see version 0.0.0.
4. At the end the installer will get stuck and may even fail, it's because it fails to reboot the calculator. Don't worry, Epsilon is installed, simply press RESET and you are good to go.

Now you have Epsilon with a custom bootloader so your calculator isn't locked.

Epsilon has normally been installed on both slots. So if you had a Custom OS, it has been erased, only the bootloader is remaining. To reinstall it you can do it normally from the bootloader or in recovery mode, though if you use recovery mode make sure you are not installing Epsilon again, as this would lock the calculator.

It's recommended to keep your Custom OS in Slot A.

### GG

You now have Epsilon and your Custom OS at the same time, Epsilon on one slot, your Custom OS on the other. You can now switch between them whenever you want, it works differently depending on your Custom OS but the goal is just to switch between slots.
