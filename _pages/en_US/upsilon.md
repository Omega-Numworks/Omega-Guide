---
title: "Upsilon"
---

{% include toc title="Table of Contents" %}

You need an unlocked calculator. [To unlock it go here](get-started)
{: .notice--info}

This page will explain how to install Upsilon, assuming you have an unlocked calculator

### What you need

- A PC with a chromium based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- An unlocked Numworks calculator

### Section I - Prepare recovery mode

if your model is n0110, enter recovery mode by holding "6" and pressing "reset"
if your model is n0100, you don't need recovery mode, it works normally.

### Section II - Install Upsilon

1. Open [Upsilon website](https://getupsilon.web.app/install)
2. Click "Recovery" and select "STM32 BOOTLOADER"
3. Wait a bit until the calculator shows "Recovery Mode" on the screen
4. If the calculator doesn't get automatically connected, click "Connect" and select "Numworks Calculator"
5. Select your settings like the theme. For the slot, if you don't know which one to choose, select "A"
6. Now you can click "Install Upsilon" and in a few seconds Upsilon should be installed on your calculator.

### Section III - How to use your new calculator (not for n0100)

There are new features to your calculator now, you need to know them
There is a new "Slot" system. Your calculator has 2 slots and can store 2 firmwares, they can't run at the same time but by using reset you can switch between them.
You now have a menu on boot, it allows you do to a lot. You can acces it just by pressing "reset".

In this menu you can:
- Choose your slot. There are 3, 2 of them can recieve a standard firmware, you can select them by pressing 1 for Slot A or 3 for Slot B. The 3rd, selected by pressing 2, is meant to have KhiCAS and Epsilon at the same time
- Open Install mode. There are 2 modes: Flash Slots, that allows you to safely install any other firmware on your calculator, and Flash Bootloader, that allows you to update the bootloader by getting you to recovery mode (it may not work, to access recovery mode you can still use 6 + reset)

Also note that once plugged into the PC, (unless in recovery mode) your calculator will be named "Upsilon Calculator" or "Upsilon Bootloader" instead of "NumWorks Calculator".

### Optional features

Now that Upsilon is installed, there are a few steps you can take:

#### External apps (not for n0100)

Upsilon support external apps, there are a few but they are useful. Here is how to install them:
1. Open [External apps page](https://upsilonnumworks.github.io/Upsilon-External/)
2. Select the apps you want to install
3. Add any file you may need to use with your apps
4. Add a wallpaper if you want
5. Click install

#### Installing Epsilon (not for n0100)

You can install Epsilon on the bootloader without locking the calculator.

See [Install Epsilon from softloader](install-epsilon-from-softloader)
{: .notice--primary}

#### Create your own version

Upsilon is open-source, you can get the code and use it however you want. You will find everything on [Upsilon's github repo](https://github.com/UpsilonNumworks/Upsilon)

### Finished

You now have Upsilon installed on your calculator. You can add python scripts in the same way as before from [Numworks' workshop](https://my.numworks.com/python/)
