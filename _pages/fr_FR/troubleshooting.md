---
title: "Dépannage"
---

{% include toc title="Table of Contents" %}

### Consommation de batterie élevée

Il y a 2 raisons possibles:
- Vous avez activé l'horloge dans les paramètres, certains firmwares en contiennent une. L'horloge consome beaucoup de batterie et il est fartement recommandé de la désactiver.
- Votre calculatrice garde la LED verte. C'est un problème matériel qui fait penser à la calulatrice qu'elle est constemment e ntrain de charger et donc batterie pleine alors que ce n'est pas le cas. Vous devriez contacter Numworks pour remplacer votre calculatrice.

### Calculatrice non détectée

Ça vaut dire que le driver ou le fichier de configuration n'est pas installé sur Windows ou Linux
Ouvrez la [page de mise à jour](https://numworks.com/update/) sur le site de Numworks et il va vous le donner et vous dire comment l'installer. **Ne branchez pas votre calculatrice pour être sûr de ne pas la bloquer**

### "CommandName is not defined"

Vous essayer de faire quelque chose avec la calculatrice alors qu'elle n'est pas dans le bon mode, comme essayer d'installer des applis avec la calculatrice en mode Recovery ou sur n0100.
Essayez d'utiliser le bon mode, pour des applis externes lancez juste en mode normal.

### "Unable to claim interface"

Cette erreut arrive quand vous essayez de connecter votre calculatrice mais elle est déjà utilisée par un autre onglet ou logiciel. Cela arrive habituellement quand vous essayez d'installer des applis externes mais que l'onglet que vous avec utilisé pour unstaller votre CFW est toujours ouvert.
Ça peut facilement être régle si vous fermez l'onglet ou lle logiciel déjà connecté à la calculatrice

### "Could not detect the calculator model" / "N????"

Cela veut dire que votre calculatrice est bloquée et vous avec besoin de la débloquer
Suivez [ce guide](get-started) pour la débloquer.

### Mode Recovery (écran noir + LED rouge), calculatrice non reconnue

Votre calculatrice a l'air d'être en mode Recovery mais elle ne l'est pas
Maintenez 6 et cliquez sur reset pour la démarrer en mode Recovery, ça aure l'air d'être pareil mais cette fois, elle sera reconnue

### "Mémoire corrompue" en essayant d'ajouter des scripts Python

Cela peut arriver quand la bootloader custom est trop ancien.
Pour le mettre à jour allez sur le site de votre CFW et réinstallez le en mode Recovery en maintenant 6 et en cliquant sur reset sur la calculatrice.

### Écran et LED clignottants

Vous essayez de démarrer Epsilon 19 sur un ancian bootloader custom.
Mettez à jour le bootloader en allant sur le site de votre CFW et en le réinstallant le en mode Recovery en maintenant 6 et en cliquant sur reset sur la calculatrice.

### L'installation dure indéfiniment

Cela peut arriver sur le site d'Omega et le site de Numworks. A moins que votre calculatrice soit bloquée, le firmware est déjà installé mais le site essaie de démarrer la calculatrice et il n'y arrive pas.
Appuyez juste sur reset sur la calculatrice et ça devrait être réglé

### "Address 0x90000000 outside of memory map"

Vous essayez de flash la partition externe en mode recovery. Ça ne peut pas marcher
Vous devez flash dans le bootloader custom ou le flasher du mode Recovery (l'écran indiquant "Recovery mode" en installant Omega en mode Recovery)

### La calculatrice redémarre en essayant d'installer un CFW

Votre calculatrice est sous Epsilon 19 ou plus, cela peut arriver quand la calculatrice est bloquée ou que vous l'exécutez depuis un bootloader custom
Redémarrez juste la calculatrice dans le bootloader ou n'importe quel autre firmware qui n'est pas Epsilon 19 ou plus

### "ControlTransferIn" / "ControlTransferOut"

Quelque chose a interrompu la connextion avec la calculatrice.
Vérifiez que vous êtes dans le bon mode et qu'aucune autre appli ou onglet utilise la calculatrice.

### "DFU DOWNLOAD FAILED"

Vous n'utilisez peut-être pas le bon WebDFU, vérifiez que vous utiliser le [WebDFU de TI-Planet](https://ti-planet.github.io/webdfu_numworks/n0110/)

### "Acces refusé" en essayant de se connecter à la calculatrice en mode Recovery

Cela peut arriver sur Windows et Linux
- Sur Linux ça veut dire que vous n'avez pas installé le fichier de configuration, [La page de mise à jour Numworks](https://numworks.com/update/) vous le donnera
- Sur Windows cela veut dire que vous êtes en mode Recovery et que le mauvais driver est sélectionné, il y a quelques étapes que vous pouvez suivre pour régler ça.
  1. S'il n'est pas installé, installez le driver depuis [La page de mise à jour Numworks](https://numworks.com/update/)
  2. Ouvrez le Gestionnaire de Périphériques, appuyez sur Win+R, tappez `devmgmt.msc`, et appuyez sur Entrée
  3. Recherchez un appareil avec "STM" dans le nom
  4. Faites clic droit dessus, et cliquez sur "Mettre à jour le driver"
  5. Ne recherchez pas automatiquement un driver, cherchez-le manuellement, puis décidez de choisir dans une liste.
  6. Sélectionnez le driver Numworks, puis cliquer sur "Suivant"
  7. Le driver devrait être correctement installé, vous pouvez maintenant connecter en mode Recovery et cela devrait marcher.

### Plantage en lançant Upsilon

Upsilon a tendance à plante quand vous le lancez et que la calculatrice est connectée à un PC. Déconnectez la avant de le lancer.

___

### Votre erreur n'est pas listée ? LA solution proposée n'a pas réglé votre problème ? N'hésitez pas à demander sur le [Discord d'Omega](https://discord.gg/X2TWhh9)
{: .notice--info}
