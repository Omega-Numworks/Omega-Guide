---
title: "Installer Phi"
sidebar_position: 3
pagination_next: unlock/n0110-unlocked
---

### Lecture obligatoire

Phi a plusieurs points d'entrée (méthode de lancement).
L'exploit utilisé pour le moment est compatible avec Epsilon 16.3.0 à 26.4.0.

### Ce dont vous avez besoin

- Un navigateur web basé sur Chromium (nous recommandons l'utilisation de [chromium](https://www.chromium.org/chromium-projects/) directement).
- L'[installeur Phi](https://phi.getomega.dev/).

### Section I - Installer Phi

1. Appuyez sur la touche "6".
2. Tout en appuyant sur la touche "6", appuyez sur le bouton RESET à l'arrière de la calculatrice.
3. Branchez votre calculatrice à un ordinateur.
4. Ouvrez Chromium.
5. Allez sur l'[installeur Phi](https://phi.getomega.dev/).
6. Cliquez sur "Connect to Numworks calculator" et sélectionnez "STM32 BOOTLOADER". (Vérifiez qu'aucun autre onglet n'utilise l'USB, comme NumWorks ou Omega/Upsilon.)

### Section II - Exécuter Phi

1. Phi se lance automatiquement après l'installation. L'écran suivant devrait apparaître. Appuyez sur OK pour continuer.

![Écran d'accueil de Phi](/img/phi-launch.png)


### Section III - Déverrouiller la calculatrice

Nous allons maintenant lancer la procédure de déverrouillage :

1. L'écran de licence s'affiche ensuite. Lisez-le et appuyez sur OK pour continuer.

![Écran de licence de Phi](/img/phi-license.png)

2. Appuyez de nouveau sur OK pour lancer l'installation automatique.

![Écran de sélection d'action de Phi](/img/phi-auto-install.png)

3. Phi effectuera ensuite une étape de déverrouillage, puis une étape d'effacement.

4. Le nouveau bootloader devrait maintenant être installé. Vous pouvez désormais installer un [OS Custom](/cfw/choose-a-cfw.md)

:::info

Si Phi reste bloqué sur l'effacement à 100 % pendant plus de 30 secondes, vous pouvez maintenir la touche "6" et appuyer sur le bouton RESET à l'arrière de la calculatrice. Suivez ensuite la procédure de récupération sur le [site d'Upsilon](https://getupsilon.web.app/install)

:::

:::info
Si vous ne voyez pas le bootloader mais seulement un écran noir, ne vous inquiétez pas : Phi a bien déverrouillé votre calculatrice NumWorks. Vous pouvez maintenir la touche "6" et appuyer sur le bouton RESET à l'arrière de la calculatrice. Suivez ensuite la procédure de récupération du [site d'Upsilon](https://getupsilon.web.app/install)
:::

:::caution
Si vous voyez l'écran de secours de NumWorks, Phi a échoué. Veuillez ouvrir un sujet sur le [Discord d'Omega](https://discord.gg/X2TWhh9)

![Écran de secours NumWorks](/img/e16bl.png)
:::
