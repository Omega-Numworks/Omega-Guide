---
title: "Omega"
sidebar_position: 2
pagination_next: null
pagination_prev: cfw/choose-a-cfw
---

:::info

You need an unlocked calculator. [To unlock it go here](/docs/intro).

:::

This page will explain how to install Omega, assuming you already have an unlocked calculator.

### What you need

- A PC with a chromium based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- An unlocked NumWorks calculator

### Section I - Prepare recovery mode

If your model is N0110, enter recovery mode by holding "6" and pressing "RESET".<br/>
If your model is N0100, enter recovery mode by plugging your calculator and pressing "RESET".

### Section II - Install Omega

1. Open the [Omega website](https://getomega.dev/install).
2. Click "Recovery" and select "STM32 BOOTLOADER".
3. Wait a bit until the calculator displays "Recovery Mode".
4. If the calculator doesn't get automatically connected, click "Detect Calculator" and select "NumWorks Calculator"
5. You can now click "Install Omega" and in a few seconds Omega should be installed on your calculator.

### Section III - How to use your new calculator (not for N0100)

There are new features to your calculator now, you need to know them.<br/>
There is a new "Slot" system. Your calculator has 2 slots, so it can store 2 firmwares. They can't be run at the same time, but by using the RESET button you can switch between them:
- Hold 1 and press RESET to start Slot A (containing Omega by default)
- Hold 2 and press RESET to start Slot B (may be empty or contains Epsilon)
- Hold 4 and press RESET to open the bootloader, you will be able to see which slot contain which firmware and also be able to install any firmware without locking the calculator.
- You can’t start another firmware if you enable exam mode, you have to disable it to do so.

### Section IV - How to update Omega?

To update Omega, open the bootloader by holding 4 and pressing RESET, plug your calculator to your PC, go to the [Omega website](https://getomega.dev/), and install it normally.

To update the bootloader, access recovery mode by pressing RESET while holding 6, plug the calculator in your PC, go to the Omega website, connect your calculator in Recovery mode and install Omega this way.

### Optional features

Now that Omega is installed, there are a few steps you can take:

#### External apps (not for N0100)

Omega supports external apps, there are only a few but they are useful. Here is how to install them:
1. Open the [External apps page](https://external.getomega.dev/)
2. Select the apps you want to install.
3. Add any file you may need to use with your apps.
4. Add a wallpaper if you want to.
5. Enable icons support to have good looking icons on your apps.
6. Click "Install".

#### Installing Epsilon (not for N0100)

You can install Epsilon on the bootloader without locking the calculator.

See [Install Epsilon from softloader](/docs/cfw/install-epsilon-from-softloader).


#### Create your own version

Omega is open-source, you can get the code and use it however you want. You will find everything on [Omega's GitHub repository](https://github.com/Omega-Numworks/Omega).

### Finished

You now have Omega installed on your calculator. You can add Python scripts in the same way as before from [NumWorks' workshop](https://my.numworks.com/python/).
