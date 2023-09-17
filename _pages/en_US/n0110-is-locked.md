---
title: "Is your calculator locked ? (N0110)"
---

{% include toc title="Table of Contents" %}

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
![Epsilon 16 bootloader](images/screenshots/e16bl.png)

If the screen stays black and the LED turns red, STOP - your calculator is already unlocked! Continue from [here](n0110-now-what).
{: .notice--warning}

Press the reset button at the back of the calculator to return to the firmware.

#### Section III - Select a Method

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
      <td style="text-align: center; font-weight: bold;">11.2.0-16.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0110-now-what">Now what ?</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.3.0-16.4.2</td>
      <td style="text-align: center; font-weight: bold;"><a href="phi">Phi</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.4.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="install-epsilon-18-2-0">Install Epsilon 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0.0-18.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="phi">Phi</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">18.2.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="install-epsilon-18-2-0">Install Epsilon 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">19.0.0-21.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="check-version-change-eligibility">Check version change eligibility</a></td>
    </tr>
  </tbody>
</table>

---
#### Alternate Methods

If possible, you should follow one of the software methods listed above.

Otherwise, methods that work on all versions are available, but require additional hardware:

1. [Hardware Unlock](n0110-hardware-unlock) - requires special tools
