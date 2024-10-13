---
sidebar_position: 1
title: Commencer
pagination_next: null
pagination_prev: null
---

:::caution
Lisez tout les pages (en incluant celle-ci !) avant de procéder
:::

**Avant de démarer ce guide, vous devez comprendre quelques termes utilisés tout au long du guide.**

#### Définitions

Ce guide va utiliser certains noms, avant de commencer vous devez savoir à quoi ces noms font référence :

1. Epsilon : C'est le firmware vendu à l'origine avec la calculatrice, fait par NumWorks. Après la version 16, ils ont commencé à verrouiller la calculatrice pour empêcher toute installation d'un OS Custom ([comprenez pourquoi ici](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. OS Custom : Custom firmware, un firmware conçu pour remplacer Epsilon. Les plus courants sont Omega et Upsilon.
3. Phi : C'est une application conçue pour débloquer certaines calculatrices bloquées.
4. Recovery mode ("STM32 DFU bootloader" ou "hwloader") : C'est un mode sur la calculatrice qui permet de changer n'importe quoi, et le mode que NumWorks a bloqué. On y accède couramment en appuyant sur "RESET" au dos de la calculatrice pendant que l'on maintient la touche "6". Il est reconnu lorsque vous obtenez un écran noir et que la LED devient rouge. C'est ce que vous devez obtenir à la fin de ce guide pour installer tout ce que vous voulez.
5. Bootloader ("softloader") : C'est un menu auquel vous pouvez accéder de différentes manières, cela dépend de l'OS Custom que vous choisissez. Il vous permet de réinstaller le firmware et peut vous empêcher de bloquer votre calculatrice si vous la mettez à jour. Phi vous permet d'en installer un si vous le souhaitez.

:::info
Si vous ne voulez pas profondément modifier votre calculatrice, [il y a toujours certaines choses que vous pouvez faire](/docs/unlock/what-to-do-locked).
:::

#### Préréquis

- Calculatrice NumWorks
- Un driver si vous avez Windows ou Linux : ouvrez la [page de récupération](https://numworks.com/rescue) sur le site de NumWorks et elle va vous le donner et vous dire comment l'installer. **Ne branchez pas votre calculatrice pour être sur que vous ne la bloquiez pas**. Si vous avez macOS, vous n'en avez pas besoin.

#### Vérification du modèle

1. Retournez votre calculatrice.
2. Sur son dos, il devrait y avoir une petite écriture commençant par un `N`. Ceci est votre numéro de modèle.
3. Si vous n'arrivez pas à lire cela :
    1. Allumez la calculatrice.
    2. Allez dans l'application des paramètres.
    3. Allez dans "À propos".
    4. Regardez l'ID FCC. Il doit se terminer par un des noms de modèle ci-dessous.

| Modèle de calculatrice | Que faut-il faire ? |
|------------------|----------------------------------------------------------------|
| N0100            | [Votre calculatrice est déja dévérouillée, mais quelques étapes supplémentaires pourraient être nécessaires](/docs/n0100-extra-steps) |
| N0110            | [Vérifiez si votre calculatrice est verrouillée](/docs/unlock/n0110-is-locked) |
| N0115 - N0120    | [Vous ne pouvez pas installer d'OS Custom dessus. Mais il y a toujours certaines choses que vous pouvez faire.](/docs/unlock/what-to-do-locked) |
