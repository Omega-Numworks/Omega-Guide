---
title: "Upsilon"
sidebar_position: 3
pagination_next: null
pagination_prev: cfw/choose-a-cfw
---

:::info

You need an unlocked calculator. [To unlock it go here](/docs/intro).

:::

This page will explain how to install Upsilon, assuming you already have an unlocked calculator.

### What you need

- A PC with a chromium based browser (we recommend using [chromium](https://www.chromium.org/chromium-projects/) directly)
- An unlocked NumWorks calculator

### Section I - Prepare recovery mode

If your model is N0110, enter recovery mode by holding "6" and pressing "RESET".<br/>
If your model is N0100, enter recovery mode by plugging your calculator and pressing RESET.

### Section II - Install Upsilon

1. Open the [Upsilon website](https://getupsilon.web.app/install).
2. Click "Recovery" and select "STM32 BOOTLOADER".
3. Wait a bit until the calculator displays "Recovery Mode".
4. If the calculator doesn't get automatically connected, click "Connect" and select "NumWorks Calculator"
5. Select your settings, like the theme. For the slot, if you don't know which one to choose, select "A".
6. You can now click "Install Upsilon" and in a few seconds Upsilon should be installed on your calculator.

:::tip

Upsilon tends to crash when you start it while the calculator is connected to a PC. Disconnect it before starting Upsilon.

:::

### Section III - How to use your new calculator (not for N0100)

There are new features to your calculator now, which you need to know.
There is a new "Slot" system. Your calculator has 2 slots and can store 2 firmwares, they can't be run at the same time, but by using RESET you can switch between them.
Upsilon adds a bootloader, accessed by simply pressing RESET. Upsilon's bootloader consists of a menu that can do multiple useful things.

In this menu you can:
- Choose your slot. There are 3 in total, 2 of which can store a standard firmware. You can select them by pressing 1 for Slot A or 3 for Slot B. The 3rd, selected by pressing 2, is meant for very specific use cases, most people don't need it.
- By pressing 4 you can open Install mode. There are 2 options: Flash Slots (press 1), that allows you to safely install any other firmware on your calculator, and Flash Bootloader (press 2), that allows you to update the bootloader by getting you to recovery mode (it may not work, to access recovery mode you can still use 6 + RESET).

Also note that once plugged into the PC, (unless in recovery mode) your calculator will be named "Upsilon Calculator" or "Upsilon Bootloader" instead of the usual "NumWorks Calculator".

### Section IV - How to update Upsilon?

To update Upsilon, open Install Mode and Flash Slots (see above how to), plug your calculator to your PC, go to the [Upsilon website](https://getupsilon.web.app/install), and install it normally.

To update the bootloader, access recovery mode by pressing reset while holding 6, plug the calculator to your PC, go to the Upsilon website, connect your calculator in Recovery mode and install Upsilon this way.

### Optional features

Now that Upsilon is installed, there are a few steps you can take:

#### External apps (not for N0100)

Upsilon support external apps, there are a few but they are useful. Here is how to install them:
1. Open [External apps page](https://upsilonnumworks.github.io/Upsilon-External/)
2. Select the apps you want to install.
3. Add any file you may need to use with your apps.
4. Add a wallpaper if you want.
5. Click "Install".

#### Reader (not for N0100)

Upsilon has a reader app. It can display text files and LaTeX expressions.

Any file with the `.txt` extension can be read, however if you want to use LaTeX expressions, you need to change the extension to `.urt` (Upsilon Rich Text). The content of the file stays the same but Upsilon will display LaTeX expressions.
All the LaTeX expressions are documented [here](https://getupsilon.web.app/doc/reader).

To transfer your file, send it through the [External apps page](https://upsilonnumworks.github.io/Upsilon-External/).

#### Installing Epsilon (not for N0100)

You can install Epsilon on the bootloader without locking the calculator.

See [Install Epsilon from softloader](/docs/cfw/install-epsilon-from-softloader).


#### Create your own version

Upsilon is open-source, you can get the code and use it however you want. You will find everything on [Upsilon's GitHub repository](https://github.com/UpsilonNumworks/Upsilon).

### Finished

You now have Upsilon installed on your calculator. You can add Python scripts in the same way as before from [NumWorks' workshop](https://my.numworks.com/python/).
