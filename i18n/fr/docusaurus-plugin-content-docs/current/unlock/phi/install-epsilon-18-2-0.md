---
title: "Installer Epsilon 18.2.0"
sidebar_position: 2
---

### Lecture requise

Nous allons maintenant installer Epsilon 18.2.0

:::info
Si vous n'êtes pas sur que vous puissiez installer Epsilon 18.2.0, allez voir [cette page](./check-version-change-eligibility)
:::

### Ce dont vous avez besoin

- Un navigateur à base chromium (nous vous recommandons d'utiliser [chromium](https://www.chromium.org/chromium-projects/) directement)
- Epsilon 18.2.0 `18-2-0.dfu` (Etant donné que Numworks a supprimé ce fichier de leur site web à cause de Phi, nous ne pouvons pas vous donner de lien ici)
- Ce script Python: [version Linux et macOS](/resources/unpack.py), [version Windows](/resources/unpack-win.py)

### Section I - Extraction du binaire externe

Étant donné qu'Epsilon est désormais sous code source fermé, nous ne pouvons pas distribuer directement l'image du flash externe.
Nous devons donc vous le faire extraire.

1. Installez Python sur votre plateforme.
2. Téléchargez Epsilon 18.2.0 quelque part.
3. Créez un nouveau dossier
4. Mettez le script Python dans ce dossier
5. Mettez 18-2-0.dfu dans ce dossier
6. Exécutez le script

Vous devriez maintenant avoir un fichier internal.bin et un fichier external.bin

### Section II - Installation

1. Ouvrez le [WebDFU](https://ti-planet.github.io/webdfu_numworks/n0110/) dans un navigateur web basé sur chromium
2. Maintenez la touche 6 sur votre Numworks et pressez le bouton reset
3. Vous devriez maintenant voir l'interface du bootloader Epsilon
4. Sélectionnez `external.bin` dans WebDFU
5. Cliquez sur "flash external"
6. Une fois le clignotement effectué, appuyez sur le bouton reset de votre Numworks

Vous devriez maintenant voir la version 18.2.0 dans Paramètres > À propos.

:::caution

Si ce n'est pas le cas ou que votre Numworks ne démarre pas, vous pouvez toujours utiliser une [méthode alternative](/docs/unlock/n0110-is-locked#alternate-methods).

:::
