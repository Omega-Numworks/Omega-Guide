---
sidebar_position: 1
title: Get Started
pagination_next: null
pagination_prev: null
---

:::caution
Thoroughly read all of the introductory pages (including this one!) before proceeding.
:::

**Before starting this guide, you need to understand some words you will see in this guide.**

### Definitions

This guide will refer to some names, before starting you have to know what these names refer to:

1. Epsilon: This is the firmware originally sold with the calculator, made by Numworks. After version 16, they started to lock the calculator to prevent any Custom OS installation ([see why here](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. Custom OS: Custom operating system, a firmware that is made to replace Epsilon. Common ones are Omega and Upsilon
3. Phi: This is an app that is made to unlock locked calculators.
4. Recovery mode ("STM32 DFU bootloader" or "hwloader"): This is a mode on the calculator that allows to change anything, and the one that Numworks locked. It's usually accessed when pressing "reset" on the back of the calculator while holding the "6" key and it can be recognized when you get a black screen with the led turned on red. This is what you need to get at the end to be able to install anything you want.
5. Bootloader ("softloader"): This is a menu you can get in different ways, it depends on the Custom OS you choose. It allows you to reinstall the firmware and can prevent you from locking your calculator if you update it. Phi allows you to install one if you want.

:::info

If you don't want to deeply modify your calculator, [there are still a few things you can do](what-to-do-locked).

:::

### Prerequisites

- Numworks Calculator
- Driver if you have Windows or Linux: open the [Rescue page](https://numworks.com/rescue) on Numworks’ website and it will give it and tell you how to install it. **Don’t plug in your calculator to make sure you don’t lock it**. If you have macOS, you don't need it.

### Model check

1. Turn your calculator around
2. On its back, there should be a little writing, either N0120, N0110 or N0100. This is your model number.
3. If you can't read that:
    1. Turn the calculator on
    2. Go in the settings app
    3. Go in "about"
    4. Look at the FCC ID. It should end with one of the model names below.

| Calculator Model | What to do                                                                                      |
|------------------|-------------------------------------------------------------------------------------------------|
| N0100            | [Your calculator is already unlocked. Choose a Custom OS](../cfw/choose-a-cfw)                     |
| N0110            | [Check if your calculator is locked](../unlock/n0110-is-locked)                               |
| N0115 - N0120    | [You can't install a Custom OS on it. But there are still a few things you can do](../what-to-do-locked) |
