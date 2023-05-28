---
title: "Omega"
---

{% include toc title="Table of Contents" %}

You need an unlocked calculator. [To unlock it go here](get-started)
{: .notice--info}

This page will explain how to install Omega, assuming you have an unlocked calculator

### What you need

- A PC with a chromium based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- An unlocked Numworks calculator

### Section I - Prepare recovery mode

if your model is n0110, enter recovery mode by holding "6" and pressing "reset"
if your model is n0100, you don't need recovery mode, it works normally.

### Section II - Install Omega

1. Open [Omega website](https://getomega.dev/install)
2. Click "Recovery" and select "STM32 BOOTLOADER"
3. Wait a bit until the calculator shows "Recovery Mode" on the screen
4. If the calculator doesn't get automatically connected, click "Detect Calculator" and select "Numworks Calculator"
5. Now you can click "Install Omega" and in a few seconds Omega should be installed on your calculator.

### Section III - How to use your new calculator (not for n0100)

There are new features to your calculator now, you need to know them
There is a new "Slot" system. Your calculator has 2 slots and can store 2 firmwares, they can't run at the same time but by using reset you can switch between them:
- Hold 1 and press reset to start Slot A (containing Omega by default)
- Hold 2 and press reset to start Slot B (may be empty or contains Epsilon)
- Hold 4 and press reset to open the bootloader, you will be able to see which slot contain which firmware and also be able to install any firmware without locking the calculator.
- You can’t start another firmware if you enable exam mode, you have to disable it to do so

### Optional features

Now that Omega is installed, there are a few steps you can take:

#### External apps (not for n0100)

Omega support external apps, there are a few but they are useful. Here is how to install them:
1. Open [External apps page](https://external.getomega.dev/)
2. Select the apps you want to install
3. Add any file you may need to use with your apps
4. Add a wallpaper if you want
5. Enable icons support to have good looking icons on your apps
6. Click install

#### Installing Epsilon (not for n0100)

You can install Epsilon on the bootloader without locking the calculator.

See [Install Epsilon from softloader](install-epsilon-from-softloader)
{: .notice--primary}

#### Create your own version

Omega is open-source, you can get the code and use it however you want. You will find everything on [Omega's github repo](https://github.com/Omega-Numworks/Omega)
