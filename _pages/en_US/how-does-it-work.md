---
title: "How does it work ?"
---

This page is made to explain how does the calculator work and what happens when we unlock it

### 1 - How is the calculator made ?

First, know that the power button on the front if the calculator doesn't turn on or off the calculator. It just puts it in sleep mode. The calculator starts automatically when the battery is connected. The reset button on the back only cuts the power while it's held. When you release it, the calculator boots up.

There are currently 3 models of Numworks calculators: n0100, n0110, n0120.

The calculator uses a MCU (Microcontroller Unit) made by ST Microelectronics to do all the work.
The MCU used in n0100 is the [STM32F412](https://www.st.com/en/microcontrollers-microprocessors/stm32f412.html). This one has one storage partition, named "flash" because it's flash memory.
The MCU used in n0110 is the [STM32F730](https://www.st.com/en/microcontrollers-microprocessors/stm32f730r8.html). This one has 2 flashs. Named "internal" and "external"
The MCU used in n0120 is the [STM32H725](https://www.st.com/en/microcontrollers-microprocessors/stm32h725-735.html). This one also has 2 flashs, but is also more powerful than n0110's one

So we can make 2 categories:
- n0100: With internal flash only
- n0110 and n0120: With internal and external flash

Every calculator, thanks to the MCU, has a recovery mode. It can usually be accessed by holding 6 while the calculator is starting. It's represented by a black screen with the LED turned on red. But if you try it may not behave like this, we will understand why later.
{: .notice--info}

### 2 - How is the hardware used ?

With 1 flash, it's easy to understand, everything is in the flash, this is the case on n0100. But with 2 flashs, it's more complicated:

- The External flash: It contains the firmware, what you usually know about, the interface, the calculation program, and everything you use from this calculator.
- The Internal flash: It contains a small program made to start what is installed in the External flash. It's the first thing run by the calculator, if the internal flash is empty, the calculator can't start, and the LED turns red.

### 3 - What is installed in the flashs ?

The internal flash used to store a simple program that just starts the firmware installed in the external flash. But nowdays, since Epsilon 16, it's more complicated:

Since Epsilon 16, the internal flash now contains a bootloader that is used to lock the calculator.
**How does it do that ?** It check is the firmware installed is signed by Numworks, if it isn't, the bootloader does't start the firmware.
**Can't the recovery mode help ?** Numworks thought about that, they configured the MCU to prevent writing in the internal flash and they put a message to tell that it's in recovery mode while it acually isn't.
**Why isn't the n0100 locked ?** The n0100 has only one flash, and may need to be updated. So locking it was stupid as it would prevent updating it without special debugging tools.

Now that we know how Numworks uses the calculator, let's know how custom firmwares use it.
{: .notice--info}

### 4 - What changes with a CFW ?

Originally, a CFW was just replacing the external flash. To bypass some limitations, some CFWs like Omega and Delta started changing the internal flash, but it was not far from what Numworks originally did.

Delta introduces external apps, which were then reused in Omega. They are installed in the external flash alongside the firmware.


But everything changed when custom bootloaders were released alongside with Phi.
Most custom bootloaders contains more features li




