---
title: "Installing Phi"
sidebar_position: 3
pagination_next: unlock/n0110-unlocked
---

### Required Reading

Phi has multiple entrypoints (method of launching).
The exploit used at the moment is compatible with Epsilon 16.3.0 through 18.2.0 (except 16.4.3).

### What you need

- A chromium-based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly).
- The [Phi Installer](https://phi.getomega.dev/).

### Section I - Installing Phi

1. Power on your device.
2. Plug your device to a computer.
3. Open Chromium.
4. Go to the [Phi Installer](https://phi.getomega.dev/).
5. Click "Connect to Numworks calculator" and select your calculator.
6. The calculator will show a message reading "Third party applications".
7. Press Back.

### Section II - Running Phi

1. Scroll down in the apps list and select "Phi Installer".
2. Press OK.
3. The screen should blink and you should see a screen similar to this one:

![Phi launch screen](/img/phi-launch.png)

:::info
If the screen turns yellow, the version or Epsilon you're using isn't yet supported. You may need to [change your version](/docs/unlock/phi/check-version-change-eligibility).
:::

:::caution
If the screen turns red, the exploit failed. RESET the calculator and try again. If it doesn't work the second time, please join the [Omega Discord](https://discord.gg/X2TWhh9).
:::

### Section III - Unlocking the calculator

We are now going to unlock the internal flash and remove the write protection:

1. Press 1 to unlock the internal flash.
2. Press OK to confirm
3. You should now see something like this:

![Phi unlock screen](/img/phi-unlock.png)

The "Reset RDP" stage can take a bit of time. You'll be sent back to the main menu after a second, after the unlocking is done.

### Section IV - Erasing the internal flash

Removing the write protection should have erased the internal flash, but we are going to do it again, just to be sure:

1. Press 2 to reset the internal flash.
2. Press OK to confirm.
3. You should see something like this:

![Phi erase screen](/img/phi-erase.png)

The "Erase flash" stage can take a bit of time. You'll be put back on the main menu after a second, when the erasing is done.

### Section V - Installing a custom bootloader

1. Press 3.
2. Press OK to confirm.
3. You should see something like this:

![Phi launch screen](/img/phi-write.png)

The "Write flash" stage can take a bit of time. You'll be put back on the main menu after a second, when the flashing is done.

Press 4, then OK. You should now boot back into Epsilon.

### Section VI - Finalizing unlocking

1. Press 4.
2. Press OK to confirm.
3. The calculator restarts on Epsilon and Phi has disappeared.

:::info
If you don't boot back into Epsilon, don't worry, installing a Custom OS will fix it later.
:::
