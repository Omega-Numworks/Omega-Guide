---
sidebar_position: 10
title: "Restaurer le firmware officiel"
pagination_next: null
pagination_prev: null
---

## Méthode 1 : Firmware officiel 18.2.0 (pas pour N0100) {#methode-1}

Avec cette méthode, vous installerez la dernière version du firmware officiel compatible avec Phi (afin de garder la possibilité d'obtenir à nouveau un CFW).

1. Suivez à nouveau les étapes pour obtenir les fichiers external.bin et internal.bin de Epsilon 18.2.0.
2. Démarrer sur le bootloader du CFW installé (4+RESET) pour flasher les slots.
3. Rendez-vous sur le WebDFU de TI-Planet pour flasher le fichier external.bin en externe ([comme pour un downgrade]()).
4. Quand c'est terminé, mettez votre calculatrice en mode Recovery en maintenant 6 et en appuyant sur "RESET" en même temps.
5. Sur le même site, connectez la NumWorks puis flashez internal.bin en internal.
6. Votre NumWorks devrait avoir démarré sur Epsilon. Veuillez cliquer sur RESET.

Vous devriez normalement démarrer automatiquement sur Epsilon 18.2.0.
Vous avez maintenant une calculatrice avec le dernier firmware d'origine compatible avec Phi.
Vous pouvez faire quelques tests (mode examen, RESET physique) pour vous assurer de son bon fonctionnement.
Le menu 6+RESET devrait maintenant afficher numworks.com/rescue.

:::caution
Il y a toujours un risque que les mises à jour verrouillent le bootloader, cette méthode n'est donc pas sûre à 100% si vous souhaitez downgrade par la suite.
:::

## Méthode 2 : Firmware officiel E15 {#methode-2}

E15 est la dernière version open-source de Epsilon, sur laquelle sont basés Omega et Upsilon.

:::danger
Cet avertissement ne s'applique pas aux modèles N0100.
Mettre à jour votre calculatrice par la suite depuis le site NumWorks **VA LA BLOQUER** et vous ne pourrez plus jamais installer d'OS Custom dessus, à moins que vous utilisiez une méthode matérielle pour la redébloquer. Nous vous conseillons vivement d'utiliser le dernier bootloader Upsilon et d'[installer Epsilon depuis le Softloader](/docs/cfw/install-epsilon-from-softloader) pour à nouveau utiliser les dernières versions sans bloquer votre calculatrice.
:::

1. Ouvrez [la page d'installation E15 du site Omega](https://getomega.dev/install/E15).
2. Branchez votre calculatrice à votre ordinateur.
3. Mettez votre calculatrice en mode Recovery en maintenant 6 et en appuyant sur "RESET" en même temps.
4. Sélectionnez Recovery, puis STM32 BOOTLOADER.
5. Sélectionnez Install.

Vous avez maintenant une calculatrice avec le dernier firmware open-source d'origine.

:::note
Après cette installation, vous pouvez remonter à des version plus anciennes, en consultant [les archives de TI-Planet](https://tiplanet.org/forum/archives_list.php?cat=OS+nw).
:::

## Méthode 3 : Firmware officiel sans possibilité de downgrade (sauf pour N0100) {#methode-3}

:::danger
Cet avertissement ne s'applique pas aux modèles N0100.
Restaurer votre calculatrice vers le firmware d'origine **VA LA BLOQUER** et vous ne pourrez plus jamais installer d'OS Custom dessus, à moins que vous utilisiez une méthode matérielle pour la redébloquer. Nous vous conseillons vivement d'utiliser le dernier bootloader Upsilon et d'[installer Epsilon depuis le Softloader](/docs/cfw/install-epsilon-from-softloader) pour toujours utiliser les dernières versions sans bloquer votre calculatrice.
:::

Cette page vous expliquera comment revenir au firmware d'origine, et donc bloquer votre calculatrice.

1. Ouvrez [la page de restauration de NumWorks](https://numworks.com/rescue).
2. Branchez votre calculatrice à votre ordinateur.
3. Mettez votre calculatrice en mode Recovery en maintenant 6 et en appuyant sur "RESET" en même temps.
4. Suivez les instructions pour restaurer le firmware d'origine.

Vous avez maintenant une calculatrice avec le firmware d'origine.
