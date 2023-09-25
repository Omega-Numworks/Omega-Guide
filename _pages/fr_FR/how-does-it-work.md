---
title: "Comment ça marche ?"
---

Cette page est faite pour expliquer comment fonctionne la calculatrice et ce qu'il se passe quand on la débloque
Vous allez également en apprendre un peu sur l'histoire de la calculatrice

### 1 - Comment la calculatrice est-celle conçue ?

D'abord, sachez que le bouton power de la calculatrice ne la met qu'en mode veille, au lieu de l'éteindre complètement. La calculatrice s'allume automatiquement quand la batterie est connectée. Le bouton reset au dos coupe simplement l'alimentation tant qu'il est maintenu. Quand vous le relachez, la calculatrice s'allume.

Il y a actuellement 4 modèles de calculatrice Numworks: n0100, n0110, n0115, n0120.

La calculatrice utilise un MCU (Microcontroller Unit) fait par STMicroelectronics pour tout faire.
- Le MCU utilisé dans la n0100 est le [STM32F412](https://www.st.com/en/microcontrollers-microprocessors/stm32f412.html). Il a une partition de stockage, nommée "flash" car c'est de la mémoire flash.
- Le MCU utilisé dans les n0110 et n0115 est le [STM32F730](https://www.st.com/en/microcontrollers-microprocessors/stm32f730r8.html). Il a 2 flashs. Nommées "interne" et "externe"
- Le MCU utilisé dans la n0120 est le [STM32H725](https://www.st.com/en/microcontrollers-microprocessors/stm32h725-735.html). Il a également 2 flashs, mais est aussi plus puissant que celui de la n0110

On peut donc faire 2 catégories:
- n0100: Avec flash interne uniquement
- n0110, n0115 et n0120: Avec flash interne et externe

Toutes les calculatrices, grâce au MCU, ont un mode Recovery. il est habituellement accédé en maintenant 6 pendant que la calculatrice démarre (sur la n0100 il doit être branché à un PC quand il démarre, vous n'avez pas besoin de maintenir 6). il est représenté par un écran noir avec la LED allumée en rouge. Mais si vous essayez, il se peut que cela ne fasse pas ça, nous comprendrons pourquoi après.
Sur n0115, le mode Recovery n'est pas accessible comme ça.
{: .notice--info}

### 2 - Comment le matériel est-il utilisé ?

Avec 1 flash, c'est facile de comprendre, tout est dans la flash, c'est le cas sur n0100. Mais avec 2 flashs, c'est plus compliqué:

- La flash externe: Elle contient le firmware, ce que vous connaissez, l'interface, le programme de calcul, et tout ce que vous utilisez sur cette calculatrice.
- La flash interne: Elle contient un petit programme fait pour démarrer ce qui est installé sur la flash externe. C'est la première chose exécutée par la calculatrice, si la flash interne est vide, la calculatrice ne peut pas démarrer, et la LED devient rouge.

### 3 - Qu'est-ce qui est installé sur les flashs ?

La flash interne est utilisée pour stocker un programme simple qui lance simplement le firmware installé sur la flash externe. Mais aujourd'hui, depuis Epsilon 16, c'est plus compliqué:

Depuis Epsilon 16, la flash interne contient un bootloader utilisé pour bloquer la calculatrice.
- **Comment c'est possible ?** Il vérifie que le firmware est signé par Numworks, s'il ne l'est pas, le bootloader ne lance pas le firmware.
- **Le mode Recovery ne peut pas aider ?** Numworks y a pensé, ils ont configuré le MCU pour empêcher d'écrire dans la flash interne et ils ont mit un message pour dire qu'elle est en mode Recovery alors qu'en réalité, elle ne l'est pas.
- **Pourquoi la n0100 n'est-elle pas bloquée ?** La n0100 n'a qu'une seule flash, et elle pourrait avoir besoin d'être mise à jour. Donc bloquer serait une mauvaise idée car ça empêcherait de mettre à jour sans des outils de déboguage spécifiques.

Maintenant que l'on sait comment Numworks utilise la calcuatrice, découvrons comment les firmwares custom l'utilisent.
{: .notice--info}

### 4 - Qu'est-ce qui change avec un CFW ?

À l'origine, un CFW remplaçait seulement la flash externe. Pour contourner certaines limitations, certains CFWs comme Omega et Delta ont comencé à changer la flash interne, mais ce n'était pas loin de ce que Numworks faisait à l'origine

Delta a introduit les applis externes, qui ont été réutilisées dans Omega. Elles sont installées dans la flash externe avec le firmware. Un système similaire a été ajouté à Epsilon plus tard.

Mais tout a changé quand les bootloaders custom ont été publiés en même temps que Phi.

Beaucoup de bootloaders custom contiennent plus de fonctions comment permettre d'avoir 2 firmwares stockés sur la flash externe et démarrer l'un ou l'autre. Ainsi qu'empêcher d'écrire sur la flash interne depuis le firmware

Maintenant que vous comprenez comment fonctionne la flash interne, voyons comment Phi fonctionne
{: .notice--info}

### 5 - Comment Phi fontionne-t-il ?

Phi n'est **PAS** un programme ou un exploit qui permet directement de lancer un CFW et ne fait rien une fois que la calculatrice est débloquée.
{: .notice--info}

Phi est une appli qui peut débloquer les calculatrices fonctionnant sous Epsilon entre 16.3.0 et 18.2.0 (hors 16.4.3)

Il peut être installé sur Epsilon et exploite un bug nommé [Screenhax (en anglais)](https://blog.mfriess.xyz/screenhax/) pour effacer la flash interne et écrire par dessus depuis Epsilon, ainsi que réactiver le mode Recovery.

Il peut également installer un bootloader simple.

Numworks a réglé ce bug en publiant Epsilon 18.2.3.

### 6 - Donc, que se passe-t-il quand vous suivez le guide ?

Le processus dans le guide est maintenant facile à comprendre:
- sur n0100, on lance simplement le mode Recovery et on écrase la flash interne
- sur n0110, on écrase la flash interne, débloque et réactive le mode Recovery pour installer ce que l'on veut sur les 2 flashs

### 7 - Pourquoi la n0120 ne peut pas être débloquée ?

La n0120 est dans un cas particulier:
Elle peut être débloquée avec des modifications matérielles, mais la raison pour laquelle on ne dit pas comment le faire dans ce guide c'est car il n'y a aucun CFW que vous pouvez installer dessus.
La n0120 a été publiée en premier avec Epsilon 16, mais une version patchés qui ne peut pas être débloquée avec Phi. Donc il n'y a aucune n0120 qui peut être débloquée sans matériel.

Aussi, depuis Epsilon 16, Numworks a arrêté de donner les drivers pour le MCU, ces drivers sont nécessaires pour créer le bootloader. Les Développeurs peuvent les récupérer depuis Epsilon 15 pour n0100 et n0110, mais pour n0120, ils n'ont jamais été publiés (et ne peuvent pas être extraits d'Epsilon), donc ils doivent être développés depuis zéro ce qui est difficile et long. C'est pourquoi il n'y a pas de CFW pour n0120, et qu'on ne peut pas vous dire comment la débloquer

Maintenant vous comprenez tout sur comment le débloquage de calculatrice fonctionne.
{: .notice--info}
