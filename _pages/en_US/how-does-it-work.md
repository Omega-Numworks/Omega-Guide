---
title: "How does it work ?"
---

This page is made to explain how does the calculator work and what happens when we unlock it
You will also learn a bit from the history of the calculator

### 1 - How is the calculator made ?

First, understand that the power button of the calculator only put the it in sleep mode, instead of powering it down completely. The calculator powers on automatically when the battery is connected. The reset button on the back only cuts the power while it's held. When you release it, the calculator powers on.

There are currently 3 models of Numworks calculators: n0100, n0110, n0115, n0120.

The calculator uses a MCU (Microcontroller Unit) made by ST Microelectronics to do all the work.
- The MCU used in n0100 is the [STM32F412](https://www.st.com/en/microcontrollers-microprocessors/stm32f412.html). This one has one storage partition, named "flash" because it's flash memory.
- The MCU used in n0110 and n0115 is the [STM32F730](https://www.st.com/en/microcontrollers-microprocessors/stm32f730r8.html). This one has 2 flashs. Named "internal" and "external"
- The MCU used in n0120 is the [STM32H725](https://www.st.com/en/microcontrollers-microprocessors/stm32h725-735.html). This one also has 2 flashs, but is also more powerful than n0110's one

So we can make 2 categories:
- n0100: With internal flash only
- n0110, n0115 and n0120: With internal and external flash

Every calculator, thanks to the MCU, has a recovery mode. It can usually be accessed by holding 6 while the calculator is starting (on n0100 it has to be plugged into a PC when it starts, you don't need to hold 6). It's represented by a black screen with the LED turned on red. But if you try it may not behave like this, we will understand why later.
On n0115, Recovery mode can't be accessed this way.
{: .notice--info}

### 2 - How is the hardware used ?

With 1 flash, it's easy to understand, everything is in the flash, this is the case on n0100. But with 2 flashs, it's more complicated:

- The External flash: It contains the firmware, what you usually know about, the interface, the calculation program, and everything you use from this calculator.
- The Internal flash: It contains a small program made to start what is installed in the External flash. It's the first thing run by the calculator, if the internal flash is empty, the calculator can't start, and the LED turns red.

### 3 - What is installed in the flashs ?

The internal flash used to store a simple program that just starts the firmware installed in the external flash. But nowdays, since Epsilon 16, it's more complicated:

Since Epsilon 16, the internal flash now contains a bootloader that is used to lock the calculator.
- **How does it do that ?** It check is the firmware installed is signed by Numworks, if it isn't, the bootloader doesn't start the firmware.
- **Can't the recovery mode help ?** Numworks thought about that, they configured the MCU to prevent writing in the internal flash and they put a message to tell that it's in recovery mode while it acually isn't.
- **Why isn't the n0100 locked ?** The n0100 has only one flash, and may need to be updated. So locking it was stupid as it would prevent updating it without special debugging tools.

Now that we know how Numworks uses the calculator, let's know how custom firmwares use it.
{: .notice--info}

### 4 - What changes with a CFW ?

Originally, a CFW was just replacing the external flash. To bypass some limitations, some CFWs like Omega and Delta started changing the internal flash, but it was not far from what Numworks originally did.

Delta introduced external apps, which were then reused in Omega. They are installed in the external flash alongside the firmware. A similar system has been added to Epsilon later.

But everything changed when custom bootloaders were released alongside with Phi.

Most custom bootloaders contains more features like being able to have 2 firmwares stored on the external flash and starting one or another. And preventing writing over the internal flash from the firmware

Now that you understand how the internal flash works, let's understand how Phi works
{: .notice--info}

### 5 - How does Phi work ?

Phi is **NOT** a program or exploit that directly allows CFW to run and doesn't do anything once the calculator is unlocked
{: .notice--info}

Phi is an app that can unlock calculators running Epsilon between 16.3.0 and 18.2.0 (but not 16.4.3)

It can be installed on Epsilon and exploits a bug named [Screenhax](https://blog.mfriess.xyz/screenhax/) to erase the internal flash and write over it from Epsilon, and also re-enabling recovery mode.

It can also install a simple bootloader.

Numworks patched it by releasing Epsilon 18.2.3.

### 6 - So, what happens when you follow the guide ?

The process in the guide is now easy to understand:
- on n0100 we just start in recovery mode then erase the internal flash
- on n0110 we erase the internal flash, unlock and re-enable the recovery mode to install whatever we want on both flashs

### 7 - Why n0120 can't be unlocked ?

The n0120 is in a particular case:
It can be unlocked with a hardware modification, but the reason why we don't advertize it in this guide is because there is no CFW you can install on it.

The n0120 was released first with Epsilon 16, but a patched version that can't be unlocked with Phi. So there is no n0120 that can currently be unlocked without hardware.

Also, since Epsilon 16, Numworls stopped giving the drivers for the MCU, these drivers are requiered to create a bootloader. Developers can get them from Epsilon 15 for n0100 and n0110, but for n0120, they just never got released publically (and they can't get extracted from Epsilon), so they need to be developed from scratch which is really hard and long. This is why there is no CFW for n0120, and we can't tell you how to unlock it.

Now you understand everything about how unlocking the calculator works.
{: .notice--info}
