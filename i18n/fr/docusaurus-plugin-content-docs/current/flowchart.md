---
sidebar_position: 50
title: "Plan du site"
pagination_next: null
pagination_prev: null
---

```mermaid
flowchart TD

    calc_unlocked([Votre calculatrice est débloquée, youpi !])
    calc_locked_no_modif([Ce que vous pouvez faire sans un Custom OS])
    calc_locked_new_calcs([Votre calculatrice est bloquée, mais vous pouvez faire d'autres choses avec])
    
    start([Start]) --> want_cfw[Vous voulez un Custom OS ?]
    style start stroke:#00f500,stroke-width:4px
    want_cfw --Non--> calc_locked_no_modif
    want_cfw --->|Oui| model_number[Quel modèle de NumWorks ?]

    
    model_number --N0100--> calc_unlocked
    model_number ---->|N0110| check_version_n0110
    model_number ---->|N0115 ou N0120| calc_locked_new_calcs
    model_number --Other--> goto_discord([Aller sur le Discord Omega])

    
    subgraph n0110 [Branche N0110]
    style n0110 fill:transparent,stroke-width:4px
    calc_locked_n0110([Votre calculatrice est bloquée, mais vous pouvez faire d'autres choses avec])
    calc_unlocked_n0110([Votre calculatrice est débloquée, youpi !])
    check_version_n0110[Quelle version ?]
    
    check_version_n0110 --11.2.0 à 16.2.0--> calc_unlocked_n0110
    check_version_n0110 ==16.3.0 à 16.4.2\n17.0.0 à 18.2.0==> phi[Utilisez Phi]
    check_version_n0110 --16.4.3 ou 18.2.3--> install_18_2_0[Installez Epsilon 18.2.0]
    check_version_n0110 --19.0.0 à 21.3.0--> downgrade_check[Verifiez l'éligibilité au downgrade]
    
    downgrade_check --Éligible--> install_18_2_0
    downgrade_check --Non éligible--> downgrade_fail(( )) --Ouvrir la calculatrice--> hardware_method[Suivez la méthode hardware]
    downgrade_fail --Ne veut pas ouvrir la calculatrice--> calc_locked_n0110
    
    install_18_2_0 --> phi
    
    phi & hardware_method --> calc_unlocked_n0110


    click model_number "/fr/docs/intro"
    click calc_locked_no_modif "/fr/docs/unlock/what-to-do-locked"
    click calc_unlocked "/fr/docs/cfw/choose-a-cfw"
    click goto_discord "https://discord.gg/X2TWhh9"

    click check_version_n0110 "/fr/docs/unlock/n0110-is-locked"
    click downgrade_check "/fr/docs/unlock/phi/check-version-change-eligibility"
    click install_18_2_0 "/fr/docs/unlock/phi/install-epsilon-18-2-0"
    click phi "/fr/docs/unlock/phi"
    click hardware_method "/fr/docs/unlock/hardware/n0110-hardware-unlock"
    click calc_locked_n0110 "/fr/docs/what-to-do-locked"
    click calc_unlocked_n0110 "/fr/docs/cfw/choose-a-cfw"

    click calc_locked_new_calcs "/fr/docs/unlock/what-to-do-locked"

    end
```
