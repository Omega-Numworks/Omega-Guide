---
title: "Upsilon"
sidebar_position: 3
pagination_next: null
pagination_prev: cfw/choose-a-cfw
---

:::info
Vous avez besoin d'une calculatrice débloquée. [Pour la débloquer continuez ici](/docs/intro).
:::

Cette page expliquera comment installer Upsilon, en supposant que vous avez déjà une calculatrice débloquée.

### Ce dont vous avez besoin

- Un PC avec un navigateur basé Chromium (on recommande d'utiliser directement [chromium](https://www.chromium.org/chromium-projects/))
- Une calculatrice NumWorks débloquée

### Section I - Préparer le mode Recovery

Si votre modèle est N0110, entrez dans le mode Recovery en maintenant "6" et en appuyant sur "RESET".<br/>
Si votre modèle est N0100, entrez dans le mode Recovery en branchant votre calculatrice et en appuyant sur "RESET".

### Section II - Installation d'Upsilon

1. Ouvrez [le site web d'Upsilon](https://getupsilon.web.app/install).
2. Cliquez sur "Mode de récupération" et sélectionnez "STM32 BOOTLOADER".
3. Attendez un peu jusqu'a ce que la calculatrice affiche "Recovery Mode".
4. Si la calculatrice n'est pas connectée automatiquement, cliquez sur "Connecter" et sélectionnez "NumWorks Calculator".
5. Sélectionnez vos paramètres, tel que le thème. Pour le slot, si vous ne savez pas lequel choisir, sélectionnez "A".
6. Maintenant vous pouvez cliquer sur "Installer Upsilon" et au bout de quelques secondes, Upsilon devrait être installé sur votre calculatrice.

:::tip
Upsilon a tendance à planter quand vous le démarrez alors que la calculatrice est connectée à un PC. Déconnectez-la avant de démarrer Upsilon.
:::

### Section III - Comment utiliser votre nouvelle calculatrice (pas pour N0100)

Il y a de nouvelles fonctions sur votre calculatrice, vous devez les connaitre.<br/>
Il y a un nouveau système de "Slot". Votre calculatrice a 2 slots et peut stocker 2 firmwares. Ils ne peuvent pas fonctionner en même temps mais en utilisant RESET vous pouvez passer de l'un à l'autre :
Upsilon ajoute un bootloader, qu'on peut accéder en appuyant sur RESET. Ce bootloader est un menu qui possède plusieurs fonctions utiles.

Dans ce menu vous pouvez :
- Chosir votre slot. Il y en a 3, 2 d'entre eux peuvent contenir un firmware classique. Vous pouvez les sélectionner en appuyant sur 1 pour le Slot A et 3 pour Slot B. Le 3ème slot, sélectionné en appuyant sur 2, est conçu pour des cas très spécifiques, la plupart des gens n'en ont pas besoin.
- En appuyant sur 4 on peut ouvrir l'"Install mode". Il y a 2 options : Flash Slots (en appuyant sur 1), qui permet d'installer n'importe quel autre firmware en toute sécurité, donc sans bloquer la calculatrice, et Flash Bootloader (en appuyant sur 2), qui permer de mettre à jour le bootloader en lançant le mode Recovery (cette option pourrait ne pas marcher, pour accéder au mode Recovery vous pouvez toujours utiliser 6 + RESET).

:::note

Une fois votre calculatrice branchée à un PC (à moins qu'elle soit en mode Recovery), votre calculatrice pourrait être nommée "Upsilon Calculator" ou "Upsilon Bootloader" au lieu de "NumWorks Calculator".

:::

#### Section IV - Comment mettre à jour ?

Pour mettre à jour Upsilon, ouvrez le "Install Mode" puis "Flash Slots" (voir ci-dessus pour savoir comment faire). Branchez votre calculatrice au PC, ouvrez le site web d'Upsilon, et installez-le normalement.

Pour mettre à jour le bootloader, démarrez en mode Recovery en appuyant sur RESET tout en maintenant la touche 6, branchez votre calculatrice au PC, ouvrez le site web d'Upsilon, connectez la calculatrice en mode de récupération, et installez Upsilon de cette manière.

### Fonctions facultatives

Maintenant qu'Upsilon est installé, il y a certaines choses que vous pouvez faire :

#### Applis externes (pas pour N0100)

Upsilon prend en charge les applis externes, il n'y en a que quelques unes mais elles sont utiles. Voici comment les installer :
1. Ouvrez la [page des applis externes](https://upsilonnumworks.github.io/Upsilon-External/).
2. Sélectionnez les applis que vous voulez installer.
3. Ajoutez n'importe quel fichier que vous voulez utiliser avec vos applis.
4. Ajoutez un fond d'écran si vous le souhaitez.
5. Cliquez sur "Installer".

#### Lisuse (pas pour N0100)

Upsilon a une appli Liseuse. Elle peut afficher des fichiers texte et des expressions LaTeX.

N'importe quel fichier avec l'extension `.txt` peut être lu, mais si vous voulez utiliser des expressions LaTex, vous devez changer l'extension en `.urt` (Upsilon Rich Text). Le contenu du fichier reste le même mais Upsilon va afficher les expressions LaTeX.
Toutes les expressions LaTeX sont documentées [ici](https://getupsilon.web.app/doc/reader).

Pour transférer votre fichier, envoyez-le avec la [page des applis externes](https://upsilonnumworks.github.io/Upsilon-External/).

#### Installer Epsilon (pas pour N0100)

Vous pouvez installer Epsilon sur votre bootloader sans bloquer la calculatrice.

Allez voir [Installer Epsilon depuis le Softloader](/docs/cfw/install-epsilon-from-softloader)

#### Créer votre propre version

Upsilon est open-source, vous pouvez récupérer le code et l'utiliser comme vous le souhaitez. Vous trouverez tout sur le [dépôt GitHub d'Upsilon](https://github.com/UpsilonNumworks/Upsilon).

### Fini

Vous avez maintenant Upsilon installé sur votre calculatrice. Vous pouvez ajouter des scripts Python de la même manière qu'avant depuis le [workshop de NumWorks](https://my.numworks.com/python/).
