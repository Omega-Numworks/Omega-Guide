---
title: Votre calculatrice est-elle verrouillée ? (N0110)
---

Cette page vous dire si vous devez déverrouiller votre calculatrice et comment.

#### Section I - Vérification de la version Epsilon

1. Allumez votre appareil
2. Allez dans l'application des paramètres
3. Allez dans "à propos"
4. Regardez le champ "Version du logiciel" ou "Version Epsilon".
5. Ceci est votre version Epsilon.

#### Section II - Vérification du verrouillage du flash

1. Éteignez votre calculatrice
2. Appuyez sur la touche "6"
3. Tout en appuyant sur la touche "6", appuyez sur le bouton reset à l'arrière de l'appareil.

Si vous voyez un écran comme celui-ci, vous pouvez procéder :
![Epsilon 16 bootloader](images/screenshots/e16bl.png)

Si l'écran reste noir et que la LED devient rouge, STOP - votre calculatrice est déjà déverrouillée ! Continuez à partir d'[ici](n0110-now-what).
{: .notice--warning}

Appuyez sur le bouton reset à l'arrière de la calculatrice pour revenir au micrologiciel.

#### Section III - Sélectionnez une méthode

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
      <td style="text-align: center; font-weight: bold;">19.0.0-21.1.1</td>
      <td style="text-align: center; font-weight: bold;"><a href="check-version-change-eligibility">Vérifier l'éligibilité au changement de version</a></td>
    </tr>
  </tbody>
</table>

---
#### Méthodes alternatives

Si possible, vous devriez suivre l'une des méthodes logicielles répertoriées ci-dessus.
Sinon, des méthodes qui fonctionnent sur toutes les versions sont disponibles, mais nécessitent du matériel supplémentaire :
1. [Port de débogage](https://tiplanet.org/forum/viewtopic.php?f=113&t=25191&p=263495#p263495) - nécessite un Raspbery PI ou un STLink
