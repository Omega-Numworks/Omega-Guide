---
title: "Installer Phi"
---

{% include toc title="Sommaire" %}

### Lecture obligatoire

Phi a plusieurs points d'entrée (méthode de lancement).
L'exploit utilisé pour le moment est compatible avec Epsilon 16.3.0 à 18.2.0.

### Ce dont vous avez besoin

- Un navigateur web basé sur chromium (nous recommandons l'utilisation de [chromium](https://www.chromium.org/chromium-projects/) directement)
- L'[Installateur Phi](https://phi.getomega.dev/)

### Section I - Installer Phi

1. Allumez votre appareil
2. Branchez votre appareil à un ordinateur
3. Ouvrez Chromium
4. Allez sur l'[Installateur Phi](https://phi.getomega.dev/)
5. Cliquez sur "Se connecter à la calculatrice Numworks" et sélectionnez votre calculatrice
6. La calculatrice affichera un message indiquant "Applications tierces"
7. Appuyez sur la touche Retour

### Section II - Exécuter Phi

1. Faites défiler la liste des applications et sélectionnez "Phi Installer"
2. Appuyez sur la touche OK
3. L'écran devrait clignoter et vous devriez voir un écran similaire à celui-ci :

![Phi launch screen](images/screenshots/phi-launch.png)

Si l'écran devient jaune, la version d'Epsilon que vous utilisez n'est pas encore prise en charge. Vous pourriez avoir besoin de [changer de version](check-version-change-eligibility).
{: .notice--warning}
Si l'écran devient rouge, l'exploit a échoué. Réinitialisez la calculatrice et réessayez. Si cela ne fonctionne pas la deuxième fois, veuillez rejoindre le [Discord Omega](https://discord.gg/X2TWhh9).
{: .notice--warning}

### Section III - Déverrouiller la calculatrice

Nous allons maintenant déverrouiller le flash interne et supprimer la protection en écriture :

1. Appuyez sur 1 pour déverrouiller le flash interne.
2. Appuyez sur OK pour confirmer
3. Vous devriez voir quelque chose comme ça :
![Phi unlock screen](/images/screenshots/phi-unlock.png)

L'étape "Reset RDP" peut prendre un peu de temps. Vous serez remis sur le menu principal après une seconde, lorsque le déverrouillage sera terminé.

### Section IV - Effacement du flash interne

La suppression de la protection en écriture aurait dû effacer le flash interne, mais nous allons le refaire, juste pour être sûr :

1. Appuyez sur 2 pour réinitialiser le flash interne
2. Appuyez sur OK pour confirmer
3. YVous devriez voir quelque chose comme ça :
![Phi erase screen](/images/screenshots/phi-erase.png)

L'étape "Effacer le flash" peut prendre un peu de temps. Vous reviendrez au menu principal après une seconde, lorsque l'effacement sera terminé.

___

### Continuer avec [Et maintenant (Phi) ?](phi-now-what)
{: .notice--primary}
