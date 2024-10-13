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

This guide will refer to some specific terms, before starting you have to know what these mean:

1. Epsilon: This is the firmware originally sold with the calculator, made by NumWorks. After version 16, they started to lock the calculator to prevent any Custom OS installation ([see why here](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. Custom OS: Custom operating system, a firmware that is made to replace Epsilon. Common ones are Omega and Upsilon.
3. Phi: This is an app that is made to unlock locked calculators.
4. Recovery mode ("STM32 DFU bootloader" or "hwloader"): This is a mode on the calculator that allows to change anything, and the one that NumWorks locked. It's usually accessed when pressing "RESET" on the back of the calculator while holding the "6" key and it can be recognized by a black screen with the LED turned on red. This is what you need to get at the end to be able to install anything you want.
5. Bootloader ("softloader"): This is a program you can get on your calculator through different methods, it depends on the Custom OS you choose. When present on the calculator, the bootloader launches before the OS when pressing RESET. It allows you to reinstall the firmware and can prevent you from locking your calculator if you update it. Phi allows you to install one if you want.

:::info

If you don't want to deeply modify your calculator, [there are still a few things you can do](./unlock/what-to-do-locked).

:::

### Prerequisites

- A NumWorks Calculator
- A specific driver if you have Windows or Linux: open the [Rescue page](https://numworks.com/rescue) on NumWorks’ website and it will give it and tell you how to install it. **Don’t plug in your calculator to make sure you don’t lock it**. If you have macOS, you don't need it.

### Model check

1. Turn your calculator around.
2. On its back, there should be a little writing starting with an "N". This is your model number.
3. If you can't read that:
    1. Turn the calculator on
    2. Go in the settings app
    3. Go in "about"
    4. Look at the FCC ID. It should end with one of the model names below.

| Calculator Model | What to do                                                                                      |
|------------------|-------------------------------------------------------------------------------------------------|
| N0100            | [Your calculator is already unlocked, but some extra steps may be required](/docs/n0100-extra-steps) |
| N0110            | [Check if your calculator is locked](/docs/unlock/n0110-is-locked)                               |
| N0115 - N0120    | [You can't install a Custom OS on it. But there are still a few things you can do](/docs/unlock/what-to-do-locked) |
