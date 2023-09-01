---
title: "Site Navigation" #
sitemap: false
---

{% capture site %}
**Site**

+ [Home](/)
+ [Get started](get-started)
+ [FAQ](faq)
+ [Troubleshooting](troubleshooting)
+ [How does it work ?](how-does-it-work)
+ [Contribute](contribute)
+ [Privacy Policy](privacy-policy)
+ [Credits](credits)

{% endcapture %}
<div class="notice--info">{{ site | markdownify }}</div>

{% capture unlocking %}
**Unlocking**

+ [Check version change eligibility](check-version-change-eligibility.md)
+ [Install Epsilon 18.2.0](install-epsilon-18-2-0)
+ [Phi](phi)
+ [Now What (N0100)?](n0100-now-what)
+ [Now What (N0110)?](n0110-now-what)
+ [Now What (Phi)?](phi-now-what)
+ [Final checks](final-checks)

{% endcapture %}
<div class="notice--primary">{{ unlocking | markdownify }}</div>

{% capture customizing %}
**Customizing**

+ [Choose a CFW](choose-a-cfw)
+ [Omega](omega)
+ [Upsilon](upsilon)
+ [Install Epsilon From Softloader](install-epsilon-from-softloader)
+ [What to do on a locked calculator ?](what-to-do-locked)
+ [Restore Stock Firmware](restore-stock-firmware)

{% endcapture %}
<div class="notice--primary">{{ customizing | markdownify }}</div>
