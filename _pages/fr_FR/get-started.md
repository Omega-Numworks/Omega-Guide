---
title: "Commencer"
---

{% include toc title="Sommaire" %}

Avant de commencer ce guide, vous avez besoin de comprendre certains termes que vous croiserez dans ce guide.

#### Définitions

Ce guide va utiliser certains noms, avant de commencer vous devez savoir à qui ces noms font référence:

1. Epsilon: C'est le firmware vendu à l'origine avec la calculatrice, fait par Numworks. Après la version 16, ils ont commencé à verrouiller la calculatrice pour empêcher toute installation de CFW ([comprenez pourquoi ici](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. CFW: Custom firmware, un firmware conçu pour remplacer Epsilon. Les plus courants sont Omega et Upsilon.
3. Phi: C'est une appli conçue pour débloquer certaines calculatrices bloquées.
4. Recovery mode ("STM32 DFU bootloader" ou "hwloader"): C'est un mode sur la calculatrice qui permet de changer n'importe quoi, et le mode que Numworks a bloqué. On y accède couramment en appuyant sur "reset" au dos de la calculatrice pendant que l'on maintient la touche "6" et il est reconnu lorsque vous obtenez un écran noir et que la LED devient rouge. C'est ce que vous devez obtenir à la fin de ce guide pour installer tout ce que vous voulez.
5. Bootloader ("softloader"): C'est un menu auquel vous pouvez accéder de différentes manières, cela dépend du CFW que vous choisissez. Il vous permet de réinstaller le firmware et peut vous empêcher de bloquer votre calculatrice si vous la mettez à jour. Phi vous permet d'en installer un si vous le souhaitez

Si vous ne voulez pas profondément modifier votre calculatrice, [il y a toujours certaines choses que vous pouvez faire](what-to-do-locked)
{: .notice--info}

#### Préréquis

- Calculatrice Numworks
- Driver si vous avez Windows ou Linux: ouvrez la [page de récupération](https://numworks.com/rescue) sur le site de Numworks et elle va vous le donner et vous dire comment l'installer. **Ne branchez pas votre calculatrice pour être sur que vous ne la bloquiez pas**. Si vous avez macOS, vous n'en avez pas besoin.

#### Vérification du modèle

1. Retournez votre calculatrice.
2. Sur son dos, il devrait y avoir une petite écriture, commençant par un `N`. Ceci est votre numéro de modèle.
3. Si vous n'arrivez pas à lire cela :
    1. Allumez la calculatrice
    2. Allez dans l'application des paramètres
    3. Allez dans "à propos"
    4. Regardez l'ID FCC. Il doit se terminer par un des noms de modèle ci-dessous.

<table>
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">Modèle de calculatrice</th>
      <th style="text-align: center">Que faire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0100</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0100-now-what">Votre calculatrice est déjà déverrouillée</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0110</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0110-is-locked">Vérifiez si votre calculatrice est verrouillée.</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">N0115 - N0120</td>
      <td style="text-align: center; font-weight: bold;"><a href="what-to-do-locked">Vous ne pouvez pas installer de CFW dessus. Mais il y a toujours certaines choses que vous pouvez faire</a></td>
    </tr>
  </tbody>
</table>
