---
title: "Commencer"
---

{% include toc title="Sommaire" %}

Avant de commencer ce guide, vous avez besoin de comprendre certains termes que vous croiserez dans ce guide.

#### Définitions

Ce guide va utiliser certains noms, avant de commencer vous devez savoir à qui ces noms font référence:

1. Epsilon: C'est le firmware vendu à l'origine avec la calculatrice, fait par Numworks. Après la version 16, ils ont commencé à vérrouiller la calculatrice pour empêcher toute installation de CFW ([comprenez pourquoi ici](https://tiplanet.org/forum/viewtopic.php?f=97&t=24968)).
2. CFW: Custom firmware, un firmware conçu pour remplacer Epsilon. Certains courants sont Omega et Upsilon.
3. Phi: C'est une appli conçue pour débloquer certaines calculatrices bloquées.
4. Recovery mode ("STM32 DFU bootloader" ou "hwloader"): C'est un mode sur la calculatrice qui permet de changer n'importe quoi, et le mode que Numworks a bloqué. On y accède couremment en appuyant sur "reset" au dos de la calculatrice pendant que l'on maintient la touche "6" et il est reconnu losque vous obtenez un écran noir et que la LED devient rouge. C'est ce que vous devez obtenir à la fin pour installer tout ce que vous voulez.
5. Bootloader ("softloader"): C'est un menu auquel vous pouvez accéder de différentes manières, cela dépend du CFW que vous choisissez. Il vous permet de réinstaller le firmware et peut vous empêcher de bloquer votre calculatrice si vous la mettez à jour. Phi vous permet d'en installer un si vous le souhaitez

6. Si vous ne voulez pas profondément modifier votre calculatrice, [il y a toujours certaines choses que vous pouvez faire](what-to-do-locked)
{: .notice--info}

#### Section I - Vérification du modèle

1. Retournez votre calculatrice.
2. Sur son dos, il devrait y avoir une petite écriture, soit N0110 ou N0100. Ceci est votre numéro de modèle.
3. Si vous n'arrivez pas à lire cela :
    1. Allumez la calculatrice
    2. Allez dans l'application des paramètres
    3. Allez dans "à propos"
    4. Regardez l'ID FCC. Il doit se terminer par N0110 ou N0100

Si vous avez un N0100, STOP - votre calculatrice est déjà déverrouillée ! Continuez à partir d'[ici](n0100-now-what).
{: .notice--warning}

Si vous avez un N0120, STOP - Vous ne pouvez pas installer de CFW dessus. Mais ce n'est pas fini, [il y a toujours certaines choses que vous pouvez faire](what-to-do-locked)
{: .notice--warning}



#### Section II - Vérification de la version Epsilon

1. Allumez votre appareil
2. Allez dans l'application des paramètres
3. Allez dans "à propos"
4. Regardez le champ "Version du logiciel" ou "Version Epsilon".
5. Ceci est votre version Epsilon.

#### Section III - Vérification du verrouillage du flash

1. Éteignez votre calculatrice
2. Appuyez sur la touche "6"
3. Tout en appuyant sur la touche "6", appuyez sur le bouton reset à l'arrière de l'appareil.

Si vous voyez un écran comme celui-ci, vous pouvez procéder :
![Epsilon 16 bootloader](images/screenshots/e16bl.png)

Si l'écran reste noir et que la LED devient rouge, STOP - votre calculatrice est déjà déverrouillée ! Continuez à partir d'[ici](n0110-now-what).
{: .notice--warning}

Appuyez sur le bouton reset à l'arrière de la calculatrice pour revenir au micrologiciel.

#### Section IV - Installer le driver

Votre PC a besoin d'un driver pour communiquer avec la calculatrice.
- Si vous avez macOS, vous n'avez pas besoin d'installer quoi que ce soit
- Si vous avez Windows ou Linux, ouvrez la [page de mise à jour](https://numworks.com/update) sur le site de Numworks et elle va vois le donner et vous dire comment l'installer. **Ne branchez pas votre calculatreice pour être sur que vous ne la bloquiez pas**

#### Section V - Sélectionnez une méthode

Utilisez le tableau des versions ci-dessous pour sélectionner une méthode. Quelques points à noter :
  + Le tableau des versions ci-dessous est *inclusif*. Par exemple, "de 16.3.0 à 18.0.0" inclus 16.3.0, 18.0.0, et toutes les versions entre celles-ci.
  + La version 16.4.3 ne suit pas cette règle.

<table>
  <colgroup>
    <col span="1" style="width: 20%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">Version du système</th>
      <th style="text-align: center">Que faire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">11.2.0-16.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="n0110-now-what">Et maintenant ?</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.3.0-16.4.2</td>
      <td style="text-align: center; font-weight: bold;"><a href="phi">Phi</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">16.4.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="install-epsilon-18-2-0">Installer Epsilon 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">17.0.0-18.2.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="phi">Phi</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">18.2.3</td>
      <td style="text-align: center; font-weight: bold;"><a href="install-epsilon-18-2-0">Installer Epsilon 18.2.0</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">19.0.0-20.4.0</td>
      <td style="text-align: center; font-weight: bold;"><a href="check-version-change-eligibility">Vérifier l'éligibilité au changement de version</a></td>
    </tr>
  </tbody>
</table>

---
#### Méthodes alternatives

Si possible, vous devriez suivre l'une des méthodes logicielles répertoriées ci-dessus.
Sinon, des méthodes qui fonctionnent sur toutes les versions sont disponibles, mais nécessitent du matériel supplémentaire :
1. [Port de débogage](https://tiplanet.org/forum/viewtopic.php?f=113&t=25191&p=263495#p263495) - nécessite un Raspbery PI ou un STLink
