---
title: "Installer Epsilon depuis le Softloader"
---

{% include toc title="Table of Contents" %}

Suivre ce quige peut mettre en danger votre calculatrice. Installer Epsilon de la mauvaise manière sur votre calculatrice pourrait la bloquer.. Suivez **STRICTEMENT** ce qui est dir sur cette page pour être sur que votre calculatrice n'est pas en danger
{: .notice--warning}

La dernière version d'Epsilon pourrait ne pas être sûre, vérifiez la dernière version [pour n0110](https://my.numworks.com/firmwares/n0110/stable.json). Dernière version sûre connue: *$20.4.0**
{: .notice--warning}

Cette page est inutile si vous avez une n0100, étant donné que vous pouvez changer entre un CFW et Epsilon sans bloquer votre calculatrice. Et la n0100 ne peut pas avoir de bootloader custom.
{: .notice--info}

### Lecture obligatoire

Nous allons maintenant installer Epsilon sur un slot de la calculatrice, en considérant que vous avez un bootloader qui le permet

### Ce dont vous avez besoin

- Un PC avec un navigateur basé Chromium (on recommande d'utiliser directement [chromium](https://www.chromium.org/chromium-projects/))
- Un bootloader custom compatible installé (si vous ne savez pas, regardez [cette page](choose-a-cfw))

### Section I - Ouvrir le bootloader

Si votre CFW inclut un bootloader qui permet d'installer un firmware depuis celui-ci, vous devriez donc ouvrir le bootloader et le rendre prêt à installer quoi que ce soit. De l'aide eut être trouvée sur[cette page](choose-a-cfw)

### Section II - Installation

1. Vérifiez que votre calculatrice est dans le bootloader, prête à installer quoi que ce soit. Elle **NE DOIT PAS** être en mode Recovery (écran noir + LED rouge) étant donné que ça permettrait à Numworks de bloquer votre calculatrice
2. Ouvrez la [page de mise à jour Numworks](https://numworks.com/update)
3. Suivez les instructions mais si il vous demande de faire quoi que ce soit sur votre calculatrice, ne le faites pas à moins que ce soit la connecter à votre PC. Le site devrait voir la version 0.0.0
4. À la fin l'installer sera bloqué et pourrait donner une erreur, c'est car il ne peut pas redémarrer la calculatrice. Ne vous inquiétez pas Epsilon est installé, appuyez juste sur reset et tout est bon

Maintenant vous avez Epsilon avec un bootloader custom donc votre calculatrice n'est pas bloquée

Epsilon a normalement été installé sur les deux slots. Donc si vous aviez un CFW, il a été effacé, seul le bootloader reste. Pour le réinstaller vous pouvez le faire normalement depuis le bootloader ou en mode Recovery, faites juste attention de ne pas installer Epsilon à la place.

Il est recommandé de garder votre CFW en Slot A.

### GG

Vous avez maintenant Epsion et un CFW en même temps, Epsilon sur un slot, votre CFW sur l'autre. Vous pouvez maintenant changer quand vous voulez, cela fonctionne différemment en fonction de votre CFW mais l'objectif est juste de changer entre les deux slots.
