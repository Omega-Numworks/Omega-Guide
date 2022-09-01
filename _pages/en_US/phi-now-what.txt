---
title: "Now What (Phi) ?"
---

{% include toc title="Table of Contents" %}

You now have multiple choices. You can:
- Install a custom bootloader and continue using Epsilon >= 16
- Install a custom firmware

# Choice I - Install a custom bootloader

If you wish to continue using Epsilon >= 16 while still being able to install a custom firmware, you can install a custom bootloader :
1. Press 3
2. Press OK to confirm
3. You should see something like this :
![Phi launch screen](images/screenshots/phi-write.png)

The "Write flash" stage can take a bit of time. You'll be put back on the main menu after a second, when the flashing is done.

Press 4, then OK. You should now boot back into Epsilon.

If you don't boot back into Epsilon, please join the [Omega Discord](https://discord.gg/X2TWhh9) and ask for help.
{: .notice--warning}

### Continue to [Final checks](final-checks)
{: .notice--primary}

## Choice II - Install a CFW

We are going to take Omega as an example here, but it should work the same with any custom firmware.

1. Press 4 to reset
2. Hold 6
3. While holding 6, press OK to confirm

The LED of the calculator should have turned red.

If it'"s not the case, please join the [Omega Discord](https://discord.gg/X2TWhh9) and ask for help.
{: .notice--warning}

You can now go on the [Omega installer](https://getomega.dev/install/latest) with a chromium-base web browser.
Click on the "Recovery" button, then select "STM32 Bootloader". Your calculator's screen should turn white with some text saying "Recovery mode". You can now click on "Install" and wait. The calculator should reboot into Omega.

### Continue to [Final checks](final-checks)
{: .notice--primary}
