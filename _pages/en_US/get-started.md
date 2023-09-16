---
title: "Get Started"
---

{% include toc title="Table of Contents" %}

Before starting this guide, you need to understand some words you will see in this guide.

#### Definitions

This guide will refer to some names, before starting you have to know what these names refer to:

1. Epsilon: This is the firmware originally sold with the calculator, made by Numworks. After version 16, they started to lock the calculator to prevent any CFW installation ([see why here](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. CFW: Custom firmware, a firmware that is made to replace Epsilon. Common ones are Omega and Upsilon
3. Phi: This is an app that is made to unlock locked calculators.
4. Recovery mode ("STM32 DFU bootloader" or "hwloader"): This is a mode on the calculator that allows to change anything, and the one that Numworks locked. It's usually accessed when pressing "reset" on the back of the calculator while holding the "6" key and it can be recognized when you get a black screen with the led turned on red. This is what you need to get at the end to be able to install anything you want.
5. Bootloader ("softloader"): This is a menu you can get in different ways, it depends on the CFW you choose. It allows you to reinstall the firmware and can prevent you from locking your calculator if you update it. Phi allows you to install one if you want.

If you don't want to deeply modify your calculator, [there are still a few things you can do](what-to-do-locked).
{: .notice--info}

#### Prerequisites

Numworks Calculator
Driver if you have Windows or Linux: open the [Rescue page](https://numworks.com/rescue) on Numworks’ website and it will give it and tell you how to install it. **Don’t plug in your calculator to make sure you don’t lock it**. If you have macOS, you don't need it.

#### Model check

1. Turn your calculator around
2. On its back, there should be a little writing, either N0120, N0110 or N0100. This is your model number.
3. If you can't read that:
    1. Turn the calculator on
    2. Go in the settings app
    3. Go in "about"
    4. Look at the FCC ID. It should end with one of the model names below.

<table>
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">Calculator model</th>
      <th style="text-align: center">What to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0100</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0100-now-what">Your calculator is already unlocked</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0110</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0110-is-locked">Check if your calculator is locked</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0120</td>
      <td style="text-align: center; font-weight: bold;"><a href="what-to-do-locked">You can't install a CFW on it. But there are still a few things you can do</a></td>
    </tr>
  </tbody>
</table>
