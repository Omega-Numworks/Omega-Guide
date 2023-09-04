---
title: "Et maintenant (N0110) ?"
---

{% include toc title="Sommaire" %}

Votre Numworks n'a pas besoin d'être déverrouillé, youpi !

Vous avez maintenant plusieurs choix. Vous pouvez:
- Installer un bootloader patché puis installer Epsilon >= 16.
- Installer un CFW.

### Choice I - Installer un bootloader patché

Si vous souhaitez utiliser Epsilon >= 16 tout en pouvant installer un custom firmware,
vous pouvez installer un bootloader patché :
1. Téléchargez [ce fichier](https://phi.getomega.dev/install/bootloader.bin)
2. Ouvrez [cette page](https://ti-planet.github.io/webdfu_numworks/n0110/) dans un navigateur web basé sur Chromium
3. Tout en maintenant la touche 6 enfoncée, appuyez sur le bouton reset à l'arrière de votre appareil
4. Branchez votre calculatrice sur votre ordinateur
5. Cliquez sur « Se connecter à la calculatrice Numworks » et sélectionnez le bootloader STM32.
6. Cliquez sur "Choisir le fichier" et choisissez le bootloader.bin que vous venez de télécharger
7. Cliquez sur Flash internal

Vous pouvez maintenant maintenir 4 et réinitialiser. Vous démarrerez dans le soft bootloader. De là, vous pouvez installer Epailon à partir du [site Numworks](https://my.numworks.com/devices/upgrade).

Continuer vers les [Vérifications finales](final-checks)
{: .notice--primary}

### Choice II - Installer un CFW

Continuez vers [Choisir un CFW](choose-a-cfw)
{: .notice--primary}
