---
title: "Get Started"
---

{% include toc title="Table of Contents" %}

Before starting this guide, you need to a few but mantatory things.

#### Definitions

This guide will refer to some names, before starting you have to know what these names refer to:

1. Epsilon: This is the system originally sold with the calculator, made by Numworks. After version 16, they started to lock the calculator to prevent any CFW installation ([see why here](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. CFW: Custom firmware, a system that is made to replace Epsilon. A common one is Omega
3. Phi: This is an app that is made to unlock locked calculators.
4. Recovery mode ("STM32 DFU bootloader" or "hwloader"): This is a mode on the calculator that allows to change anything, and the one that Numworks locked. It's usually accessed when pressing "reset" on the back of the calculator while holding the "6" key and it can be recognized when you get a black screen with the led turned on red. This is what you need to get at the end to be able to install anything you want.
5. Bootloader ("softloader"): This is a menu you can get in different ways, it depends on the CFW you choose. It allows you to reinstall the system and can prevent you from locking your calculator if you update it. Phi allows you to install one if you want.

#### Section I - Model check

1. Turn your calculator around
2. On its back, there should be a little writing, either N0120, N0110 or N0100. This is your model number.
3. If you can't read that:
    1. Turn the calculator on
    2. Go in the settings app
    3. Go in "about"
    4. Look at the FCC ID. It should end with N0120, N0110 or N0100

If you have a N0100, STOP - your calculator is already unlocked! Continue from [here](n0100-now-what).
{: .notice--warning}

If you have a N0120, STOP - nothing here will work for you!
{: .notice--warning}



#### Section II - Epsilon Version check

1. Power on your device
2. Go in the settings app
3. Go in "about"
4. Look at the "Software version" or "Epsilon version" field.
5. This is your Epsilon version.

#### Section III - Flash lock check

1. Press the "6" key
2. While pressing the "6" key, press the reset button at the back of the device.

If you see a screen like this one, you can proceed :
![Epsilon 16 bootloader](images/screenshots/e16bl.png)

If the screen stays black and the LED turns red, STOP - your calculator is already unlocked! Continue from [here](n0110-now-what).
{: .notice--warning}

Press the reset button at the back of the calculator to return to the firmware.

#### Section IV - Select a Method

Use the version table below to select a method. A few things to note:
  + The version table below is *inclusive*. For example, "from 16.3.0 to 18.0.0" includes 16.3.0, 18.0.0, and all versions in between.
  + Version 16.4.3 does not follow this rule.

<table>
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">System Version</th>
      <th style="text-align: center">What to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">19.0.0-20.4.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="check-downgrade-eligibility">Check Downgrade Eligibility</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">18.2.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="downgrade-18-2-0">Downgrade to 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.4.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="downgrade-18-2-0">Upgrade to 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.3.0-18.2.0 (not 16.4.3)</td>
      <td style="text-align: center; font-weight: bold;"><a href="phi">Phi</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">11.2.0-16.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0110-now-what">Now what ?</a></td>
    </tr>
  </tbody>
</table>

---
#### Alternate Methods

If possible, you should follow one of the software methods listed above.

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [Debug port](https://tiplanet.org/forum/viewtopic.php?f=113&t=25191&p=263495#p263495) - requires a Raspberry PI or a STLink
