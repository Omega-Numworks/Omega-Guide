---
title: "Is your calculator locked ? (N0110)"
sidebar_position: 1
pagination_next: null
pagination_prev: intro
---

This page will tell you if you need to unlock your calculator and how.

#### Section I - Epsilon Version check

1. Power on your device
2. Go in the settings app
3. Go in "about"
4. Look at the "Software version" or "Epsilon version" field.
5. This is your Epsilon version.

#### Section II - Flash lock check

1. Press the "6" key
2. While pressing the "6" key, press the reset button at the back of the device.

If you see a screen like this one, you can proceed :

![Epsilon 16 bootloader](/img/e16bl.png)

:::caution

If the screen stays black and the LED turns red, STOP - your calculator is already unlocked! Continue from [here](/docs/n0110/n0110-unlocked).

:::

Press the reset button at the back of the calculator to return to the firmware.

#### Section III - Select a Method {#principal-methods}

Use the version table below to select a method. A few things to note:
  + The version table below is *inclusive*. For example, "from 16.3.0 to 18.0.0" includes 16.3.0, 18.0.0, and all versions in between.
  + Version 16.4.3 does not follow this rule.

| System Version | What to do                                                           |
|----------------|----------------------------------------------------------------------|
| 11.2.0-16.2.0  | [Now what ?](n0110-unlocked)                                         |
| 16.3.0-16.4.2  | [Phi](phi)                                                           |
| 16.4.3         | [Install Epsilon 18.2.0](phi/install-epsilon-18-2-0)                     |
| 17.0.0-18.2.0  | [Phi](phi)                                                           |
| 18.2.3         | [Install Epsilon 18.2.0](phi/install-epsilon-18-2-0)                     |
| 19.0.0-21.2.0  | [Check version change eligibility](phi/check-version-change-eligibility) |

---
#### Alternate Methods {#alt-methods}

If possible, you should follow one of the software methods listed above.

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [Hardware Unlock](hardware/n0110-hardware-unlock) - requires special tools
