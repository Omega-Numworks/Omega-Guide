---
sidebar_position: 95
title: "Dépannage"
pagination_next: null
pagination_prev: null
---
Cette page liste toutes les erreurs connues que vous pouvez rencontrer en modifiant votre calculatrice.

## Sur n'importe quelle calculatrice

### Écran noir et LED rouge

Tout va bien : un écran noir et une LED rouge signifient que votre calculatrice est en mode Recovery, elle attend de recevoir un firmware, elle est donc débloquée. 
**ATTENTION : Dans ce mode, Si vous faites une mise à jour depuis le site de NumWorks, vous allez faire une réinstallation complète de la calculatrice avec la dernière version du système de gestion de NumWorks. Vous allez alors verrouiller la calculatrice : les installations de Custom Firmwares tels que Omega ou Upsilon seront bloquées.**

[Choisissez un OS Custom](/docs/cfw/choose-a-cfw) à installer sur votre calculatrice. (Si vous voulez installer Epsilon sans bloquer la calculatrice, installez d'abord à ce stade un OS Custom compatible, puis installer Epsilon en veillant à ne pas être en mode Recovery)

### Écran noir, cable jaune, et `numworks.com/rescue`

C'est l'écran du bootloader de NumWorks. Il s'affiche quand la calculatrice est verrouillée (blocage de l'installation des OS Custom) et que vous avez lancé le mode Recovery en maintenant 6 et en appuyant sur RESET. Il s'affiche également quand la calculatrice n'a pas pu démarrer.

Si vous souhaitez débloquer votre calculatrice, n'allez pas sur le site `numworks.com/rescue`, mais suivez le guide à partir de [l'installation d'Epsilon 18.2.0](/docs/unlock/phi/install-epsilon-18-2-0).

### Écran noir, rien d'autre

Il y a 5 raisons possibles:
- Votre calculatrice est en mode veille, appuyez sur le bouton power pour la rallumer.
- Votre calculatrice est peut-être victime d'un bug, appuyez sur RESET au dos.
- Votre calculatrice est peut-être déchargée, essayez de la laisser charger quelques minutes.
- La batterie est déconnectée, vous pourriez avoir besoin d'ouvrir votre calculatrice pour la rebrancher.
- Si vous avec une N0100, vous êtes peut-être en mode Recovery, débranchez le cable, et appuyez sur RESET au dos.

Si cela ne résout pas le problème, contactez NumWorks.

### Consommation de batterie élevée

Il y a 2 raisons possibles:
- Vous avez activé l'horloge dans les paramètres, certains CFW en contiennent une. L'horloge consomme beaucoup de batterie et il est fortement recommandé de la désactiver.
- Votre calculatrice garde la LED verte. C'est un problème matériel qui fait penser à la calculatrice qu'elle est constemment en train de charger et donc batterie pleine alors que ce n'est pas le cas. Vous devriez contacter NumWorks pour remplacer votre calculatrice.

## Connecter votre calculatrice à votre ordinateur

### Calculatrice non détectée

Il y a plusieurs raisons possibles : soit vous ne cliquez pas sur le bon bouton, soit le driver ou le fichier de configuration n'est pas installé sur Windows ou Linux.

Soyez sûr d'utiliser le bon bouton, si votre calculatrice est en mode Recovery, appuyez sur le bouton "Récupération" et pas "Détecter la calculatrice".

Pour récupérer le driver ouvrez la [page de récupération](https://numworks.com/rescue/) sur le site de NumWorks et il va vous le donner et vous dire comment l'installer. **Ne branchez pas votre calculatrice pour être sûr de ne pas la bloquer.**

Si vous êtes sur Linux, il se peut qu'elle ne soit toujours pas détectée. Cela arrive si votre navigateur web est installé au format flatpak ou snap.

Dans le cas du Flatpak, il vous faudra installer l'application [Flatseal](https://flathub.org/apps/com.github.tchx84.Flatseal), sélectionner votre navigateur, et ajouter `/run/udev` dans les "Autres fichiers" dans la catégorie "Filesystem".

Vous pouvez également exécuter la commande: `flatpak override --user --filesystem=/run/udev [Application ID]` (Remplacez `[Application ID]` par l'ID de votre navigateur, n'hésitez pas à faire `flatpak list` pour le trouver).

Dans le cas du Snap, exécutez la commande: `snap connect [Application ID]:raw-usb` (Remplacez `[Application ID]` par l'ID de votre navigateur, n'hésitez pas à faire `snap list` pour le trouver).

Notez bien que redémarrer le navigateur risque d'être nécessaire si vous débranchez et rebranchez la calculatrice.

### Mode Recovery (écran noir + LED rouge), mais calculatrice non reconnue sur l'ordinateur.

Votre calculatrice a l'air d'être en mode Recovery mais elle ne l'est pas.

Maintenez 6 et cliquez sur RESET pour la démarrer en mode Recovery, l'apparence sera la même mais cette fois, elle sera reconnue.

Il se peut aussi que vous n'ayez pas le driver our le fichier de configuration installé, allez voir la [page de récupération](https://numworks.com/rescue/) sur le site de NumWorks et il va vous le donner et vous dire comment l'installer. **Ne branchez pas votre calculatrice pour être sûr de ne pas la bloquer.**

### "Unable to claim interface"

Cette erreur arrive quand vous essayez de connecter votre calculatrice mais elle est déjà utilisée par un autre onglet ou logiciel. Cela arrive habituellement quand vous essayez d'installer des applications externes mais que l'onglet que vous avec utilisé pour installer votre OS Custom est toujours ouvert.

Ça peut facilement être réglé si vous fermez l'onglet ou le logiciel déjà connecté à la calculatrice.
Il ne peut y avoir qu'un seul onglet (ou logiciel) établissant une connexion à la calculatrice.

### "Acces refusé" en essayant de se connecter à la calculatrice en mode Recovery

Cela peut arriver sur Windows et Linux.
- Sur Linux ça veut dire que vous n'avez pas installé le fichier de configuration, [la page de mise à jour NumWorks](https://numworks.com/update/) vous le donnera.
- Sur Windows cela veut dire que vous êtes en mode Recovery et que le mauvais driver est sélectionné, il y a quelques étapes que vous pouvez suivre pour régler ça.
  1. S'il n'est pas installé, installez le driver depuis [la page de récupération NumWorks](https://numworks.com/rescue/).
  2. Ouvrez le Gestionnaire de Périphériques, appuyez sur Windows+R, tapez `devmgmt.msc`, et appuyez sur Entrée
  3. Recherchez un appareil avec "STM" dans le nom.
  4. Faites clic droit dessus, et cliquez sur "Mettre à jour le driver".
  5. Ne recherchez pas automatiquement un driver, cherchez-le manuellement, puis décidez de choisir dans une liste.
  6. Sélectionnez le driver NumWorks, puis cliquer sur "Suivant".
  7. Le driver devrait être correctement installé, vous pouvez maintenant connecter en mode Recovery et cela devrait marcher.
  
  :::note

  Certains logiciels comme ceux de production musicale pourraient réinstaller en boucle le mauvais driver. Si cela arrive, fermez ces logiciels pour pouvoir changer le driver.
  
  :::

### "Could not detect the calculator model" / "N????"

Cela veut dire que votre calculatrice est verrouillée contre l'installation d'un OS Custom. Si vous voulez installer un OS Custom, vous avez besoin de la débloquer.

Suivez [ce guide](/docs/intro) pour la débloquer.

## Modifier la calculatrice

### L'installation n'a pas de fin (installation infinie)

Cela peut arriver sur le site d'Omega et le site de NumWorks. À moins que votre calculatrice soit bloquée, le firmware est déjà installé mais le site essaie de démarrer la calculatrice et il n'y parvient pas.

Appuyez juste sur RESET sur la calculatrice et ça devrait être réglé.

### La calculatrice redémarre en essayant d'installer un OS Custom

Votre calculatrice est sous Epsilon 19 ou plus, cela peut arriver quand la calculatrice est bloquée ou que vous l'exécutez depuis un bootloader custom.

Redémarrez juste la calculatrice dans le bootloader ou n'importe quel autre firmware qui n'est pas Epsilon 19 ou plus.

### "CommandName is not defined"

Vous essayer de faire quelque chose avec la calculatrice alors qu'elle n'est pas dans le bon mode, comme essayer d'installer des applications avec la calculatrice en mode Recovery ou sur N0100.

Essayez d'utiliser le bon mode, pour des applications externes lancez juste en mode normal.

### "ControlTransferIn" / "ControlTransferOut"

Quelque chose a interrompu la connexion avec la calculatrice.

Vérifiez que vous êtes dans le bon mode et qu'aucune autre appli ou onglet utilise la calculatrice.

Vous pouvez aussi essayer de prendre un cable USB différent pour connecter la calculatrice à votre appareil.

### "DFU DOWNLOAD FAILED"

Vous n'utilisez peut-être pas le bon WebDFU, vérifiez que vous utilisez bien le [WebDFU de TI-Planet](https://ti-planet.github.io/webdfu_numworks/n0110/).

### "Address 0x90000000 outside of memory map"

Vous essayez de flasher la partition externe mais la calculatrice n'est pas dans le bon mode. Ça ne peut pas marcher.

Vous devez flasher avec l'écran du bootloader NumWorks, le bootloader custom ou le flasheur du mode Recovery (l'écran indiquant "Recovery mode" en installant Omega en mode Recovery).

### Address 90a687ff outside of memory map

Vous essayez d'installer plus de fichiers que ce que la calculatrice peut supporter.

## Sur les calculatrices modifiées

### Slot "Invalid" dans le bootloader

Cela veut dire que le slot ne comtient pas d'OS fonctionnel. Vous devez le réinstaller vous-même si vous voulez l'utiliser.

### Écran et LED clignotants

Vous essayez de démarrer Epsilon 19 sur un ancien bootloader custom.

Mettez à jour le bootloader : allez sur le site de votre OS Custom, mettez la calculatrice en mode Recovery (en maintenant 6 et en appuyant sur RESET au dos de la calculatrice), connectez-la à l'ordinateur, puis choisissez "Récupération" (recovery) sur le site de votre OS Custom.

### "Mémoire corrompue" en essayant d'ajouter des scripts Python

Cela peut arriver quand le bootloader custom est trop ancien.

Pour le mettre à jour : allez sur le site de votre OS Custom, mettez la calculatrice en mode Recovery (en maintenant 6 et en appuyant sur RESET au dos de la calculatrice), connectez-la à l'ordinateur, puis choisissez "Récuperation" (recovery) sur le site de votre OS Custom.

### Plantage en lançant Upsilon

Upsilon a tendance à planter quand vous le lancez et que la calculatrice est connectée à un PC. Déconnectez-la avant de lancer Upsilon.

### En Dual boot, KhiCAS fait planter la calculatrice

KhiCAS est une appli lourde, et le dual-boot avec cette appli installée est impossible.

Il se peut que vous ayez installé KhiCAS, puis Epsilon, ce qui a écrasé une parte de KhiCAS, l'empêchant de démarrer.

Dans ce cas, si vous voulez utiliser KhiCAS, vous devrez le réinstaller.

___

:::info
### Votre erreur n'est pas listée ? La solution proposée n'a pas réglé votre problème ? N'hésitez pas à demander sur le [Discord d'Omega](https://discord.gg/X2TWhh9)
:::
