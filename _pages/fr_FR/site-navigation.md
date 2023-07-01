---
title: "Navigation du site" #
sitemap: false
---

{% capture site %}
**Site**

+ [Accueil](/)
+ [Bien commencer](get-started)
+ [FAQ](faq)
+ [Dépannage](troubleshooting)
+ [Contribuer](contribute)
+ [Politique de confidentialité](privacy-policy)
+ [Crédits](credits)

{% endcapture %}
<div class="notice--info">{{ site | markdownify }}</div>

{% capture unlocking %}
**Unlocking**

+ [Vérifier l'éligibilité au changement de version](check-version-change-eligibility.md)
+ [Installer Epsilon 18.2.0](install-epsilon-18-2-0)
+ [Phi](phi)
+ [Et maintenant (N0100)?](n0100-now-what)
+ [Et maintenant (N0110)?](n0110-now-what)
+ [Et maintenant (Phi)?](phi-now-what)
+ [Vérifications finales](final-checks)

{% endcapture %}
<div class="notice--primary">{{ unlocking | markdownify }}</div>

{% capture customizing %}
**Customizing**

+ [Choisir un CFW](choose-a-cfw)
+ [Omega](omega)
+ [Upsilon](upsilon)
+ [Installer Epsilon depuis le Softloader](install-epsilon-from-softloader)
+ [Que faire sur une calculatrice bloquée ?](what-to-do-locked)
+ [Restaurer le firmware d'origine](restore-stock-firmware)

{% endcapture %}
<div class="notice--primary">{{ customizing | markdownify }}</div>
