---
title: "Votre calculatrice est-elle bloquée ? (N0110)"
sidebar_position: 1
pagination_next: null
pagination_prev: intro
---

Cette page vous dire si vous devez déverrouiller votre calculatrice et comment.

#### Section I - Vérification de la version Epsilon

1. Allumez votre calculatrice
2. Allez dans "Paramètres"
3. Allez dans "À propos"
4. Regardez le champ "Version du logiciel" ou "Version d'Epsilon".
5. Ceci est votre version Epsilon.

#### Section II - Vérification du verrouillage du flash

1. Éteignez votre calculatrice
2. Appuyez sur la touche "6"
3. Tout en appuyant sur la touche "6", appuyez sur le bouton reset à l'arrière de l'appareil.

Si vous voyez un écran comme celui-ci, vous pouvez procéder :

![Epsilon 16 bootloader](/img/e16bl.png)

:::caution

Si l'écran reste noir et que la LED devient rouge, **STOP** - votre calculatrice est déjà déverrouillée ! Continuez à partir d'[ici](./n0110-unlocked).

:::

Appuyez sur le bouton reset à l'arrière de la calculatrice pour revenir au micrologiciel.

#### Section III - Sélectionnez une méthode {#principal-methods}

Utilisez le tableau des versions ci-dessous pour sélectionner une méthode. Quelques points à noter :
  + Le tableau des versions ci-dessous est *inclusif*. Par exemple, "de 16.3.0 à 18.0.0" inclus 16.3.0, 18.0.0, et toutes les versions entre celles-ci.
  + La version 16.4.3 ne suit pas cette règle.

| Version du système | Que faire                                                        |
|--------------------|------------------------------------------------------------------|
| 11.2.0-16.2.0  | [Et maintenant ?](./n0110-unlocked)                                         |
| 16.3.0-16.4.2  | [Phi](./phi)                                                           |
| 16.4.3         | [Installer Epsilon 18.2.0](./phi/install-epsilon-18-2-0)                     |
| 17.0.0-18.2.0  | [Phi](./phi)                                                           |
| 18.2.3         | [Installer Epsilon 18.2.0](./phi/install-epsilon-18-2-0)                     |
| 19.0.0-21.2.0  | [Vérifier l'éligibilité au changement de version](./phi/check-version-change-eligibility) |

---
#### Méthodes alternatives {#alt-methods}

Si possible, vous devriez suivre l'une des méthodes logicielles répertoriées ci-dessus.

Sinon, des méthodes qui fonctionnent sur toutes les versions sont disponibles, mais nécessitent du matériel supplémentaire :

1. [Débloquage matériel](./hardware/n0110-hardware-unlock) - nécessite des outils spécifiques
