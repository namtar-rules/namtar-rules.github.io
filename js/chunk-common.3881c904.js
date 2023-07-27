"use strict";(globalThis["webpackChunknamtar_rules_vue"]=globalThis["webpackChunknamtar_rules_vue"]||[]).push([[64],{2349:(e,t,i)=>{i.d(t,{F:()=>c,V:()=>a});var s,a,u,n,r,o=i(4088),E=i(4515);(function(e){e["EVOCATION"]="Evocation",e["MALEFICE"]="Malefice",e["NECROMANCIE"]="Necromancie",e["ENVOUTEMENT"]="Envoutement",e["BENEDICTION"]="Bénédiction",e["MANTRA"]="Mantra",e["CYTOMANCIE"]="Cytomancie",e["POSTURE"]="Posture",e["TECHNIQUE"]="Technique",e["RIPOSTE"]="Riposte"})(a||(a={})),function(e){e["ALTERATION_OBJET"]="Altération d'objet",e["CARESSE"]="Caresse",e["CARESSE_ONIRIQUE"]="Caresse onirique",e["CHANT"]="Chant",e["CONTACT"]="Contact",e["FRAPPE"]="Frappe",e["FRAPPE_ONIRIQUE"]="Frappe onirique",e["EXPLOITATION_CADRAVRE"]="Exploitation de cadavre",e["EXPLOSION_CADAVRE"]="Explosion de cadavre",e["MANTRA"]="Mantra",e["MEDITATION_ECLAIRE"]="Méditation éclaire",e["PROJECTILE"]="Projectile",e["ONDE"]="Onde",e["REGARD"]="Regard",e["SOUFFLE"]="Souffle",e["POSTURE"]="Posture",e["TECHNIQUE_ENGAGEMENT"]="Technique d'engagement",e["RIPOSTE"]="Riposte"}(u||(u={})),function(e){e["ATTAQUE_DOUBLE"]="Attaque double",e["ATOUT"]="Atout",e["BOUCLIER"]="Bouclier",e["BRISE_POSTURE"]="Brise Posture",e["CHALEUR"]="Chaleur",e["DEBILITANT"]="Débilitant",e["DRAIN_FLUIDE"]="Drain de fluide",e["ENTRAVE"]="Entrave",e["FORCE"]="Force",e["LEVITATION"]="Levitation",e["ILLUSION"]="Illusion",e["MANTRA"]="Mantra",e["OBSTRUCTION"]="Obstruction",e["PUISSANT"]="Puissant",e["RENVERSEMENT"]="Renversement",e["SOIN"]="Soin",e["SOIN_DE_STRESS"]="Soin de stress",e["TELEPATHE"]="Télépathe",e["VAMPIRISME"]="Vampirisme"}(n||(n={})),function(e){e["ANGLE_MORT"]="Angle mort",e["CIBLE_GALVANISE"]="Cible galvanisée",e["CIBLE_MAUDITE"]="Cible maudite",e["CATALYSEUR"]="Catalyseur",e["CONTRE_COUP"]="Contre-coup",e["DIFFICILE"]="Difficile",e["ENERGIE_ACTIVATION"]="Energie d'activation",e["FEINTE"]="Feinte",e["FIN_POSTURE"]="Fin de Posture",e["INCENTATION_RAPIDE"]="Incantation rapide",e["INGREDIENT"]="Ingredient",e["MAITRISE_CORPS_A_CORPS"]="Maitrise du corps à corps",e["MAITRISE_PUGILAT"]="Maitrise de la pugilat",e["UTILISATEUR_MAUDIT"]="Utilisateur maudit",e["UTILISATEUR_GALVANISE"]="Utilisateur galvanisé",e["ZONE"]="Zone d'effet"}(r||(r={}));class c{static findAptitudesByNames(e){return this.AptitudeList.filter((t=>e.includes(t.Nom)))}static findAptTypeByName(e){return this.Types.find((t=>t.Nom===e))}static findAptVecteurByName(e){return this.VecteursList.find((t=>t.Nom===e))}static findEffetByName(e){return this.EffectsList.find((t=>t.Nom===e))}static findExtensionByName(e){return this.ExtensionList.find((t=>t.Nom===e))}static getAllAptitudes(){return this.AptitudeList}static getAllTypes(){return this.Types}static getAllEffect(){return this.EffectsList}static getAllExtension(){return this.ExtensionList}static getAllVecteur(){return this.VecteursList}static computeStabilityScore(e,t,i){if(e===a.MANTRA)return 0;let s=0;return t.forEach(((t,i)=>{var a;s+=t*((null===(a=this.findEffetByName(i))||void 0===a?void 0:a.StabiliteParTypeAptitude.get(e))||999)})),i.forEach(((t,i)=>{var a;s+=t*((null===(a=this.findExtensionByName(i))||void 0===a?void 0:a.StabiliteParTypeAptitude.get(e))||999)})),s}static printAptitudeCost(e,t){if(e>0)return"Aucun";switch(t){case a.EVOCATION:return`${Math.abs(e)} point de stress`;case a.BENEDICTION:return`${Math.trunc(Math.abs(e)/2)} atouts`;case a.MALEFICE:return`${Math.trunc(Math.abs(e)/2)} menaces`;case a.NECROMANCIE:return`${Math.trunc(Math.abs(e)/2)} niveaux de puissance`;case a.ENVOUTEMENT:return`${Math.abs(e)} atouts`;case a.CYTOMANCIE:return`${Math.trunc(Math.abs(e))} PV sacrifié`;case a.TECHNIQUE:return 0===e?"stable":"Inutilisable";case a.MANTRA:return"Aucun";case a.POSTURE:return"Aucun"}}}s=c,c.Types=[{Nom:a.EVOCATION,Description:"La conversion de l'energie sombre par le fluide est activée par l'utilisateur qui utilise son corps comme catalyseur. L'utilisateur subit du stress pour stabiliser et matérialiser son aptitude.",DescriptionDetails:"Chaque point de stress investi produit 1 point de stabilité."},{Nom:a.MALEFICE,Description:"L'utilisateur se sert des menace de la cible pour corompre la signature de la cible qui devient le catalyseur d'une matérialisation néfaste de l'énergie sombre. La puissance du maléfice est nourrie par les menaces accumulées par la cible.",DescriptionDetails:"Chaque menaces subit par la cible génère 2 points de stabilité. Les menaces ne sont pas consommées."},{Nom:a.NECROMANCIE,Description:"La force vitale résidelle d'un cadavre est utilisée comme catalyseur de l'énergie sombre. La qualitée de l'individu et le nombre d'individu renforce l'apptitude.",DescriptionDetails:"Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux."},{Nom:a.ENVOUTEMENT,Description:"Le lanceur corrompt l'empreinte onirique de la cible pour qu'elle devienne un catalyseur d'énergie néfaste. La concordance de la cible est déteriorée dans le processus. L'apptitude consume les atouts de la cible pour générer des effets.",DescriptionDetails:"Chaque atout supprimé génère 1 point de stabilité."},{Nom:a.BENEDICTION,Description:"Le lanceur utilise l'empreinte onirique de la cible consentante pour qu'elle devienne un catalyseur. Les atouts du groupe sont consommé pour générer des effets.",DescriptionDetails:"Chaque atout consommé génère 2 points de stabilité."},{Nom:a.MANTRA,Description:"Un mantra est une modification permanante de la signature onirique de la cible pour apprécier certain effets du fluide sur son comportement et ses capacités. Les effets sont passifs.",DescriptionDetails:"Les mantras sont toujours stables et les effets constants depuis sa creation."},{Nom:a.CYTOMANCIE,Description:"L'énergie sombre est stockée dans des cellules sacrifiées par le lanceur. Le lanceur sacrifie des PV pour générer ses effets",DescriptionDetails:"Chaque PV sacrifié genère 1 point de stabilité."},{Nom:a.TECHNIQUE,Description:"Un mouvement qui requiert une grande concentration. L'apptitude se déroule comme une action complexe.",DescriptionDetails:"Action ou attaque qui se déroule comme une action complexe."},{Nom:a.RIPOSTE,Description:"Une technique qui s'effectue lors d'une réaction",DescriptionDetails:"Attaque qui consomme votre réaction."},{Nom:a.POSTURE,Description:"Une posture travaillée et maîtrisée permet de mieux appréhender une situation. Elle s'active avec une réaction. Une seule posture active à la fois.",DescriptionDetails:"Les postures sont toujours stables et se déclenchent en consommant une réaction."}],c.VecteursList=[{Nom:u.ALTERATION_OBJET,Description:"Les effets sont prisonnier d'un objet au contact du lanceur. Le lanceur peut choisir de relacher les effets à sa guise. Sinon, ils sont libérés quelques secondes après que l'objet est été relaché.",Difficulte:`Test d'${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD3`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.EVOCATION]},{Nom:u.CONTACT,Description:"Les effets sont appliqués à la cible touchée.",Difficulte:`Attaque engagée de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.VIGUEUR})`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:u.FRAPPE,Description:"Les effets sont appliqué sur une attaque à main nue ou avec une arme au corps à corps. Un equilibre certain doit être trouver par l'utilisateur pour captialiser sur son arme et l'aptitude.",Difficulte:`Attaque engagée de ${E.c.CORPS_A_CORPS} (${o.H.VIGUEUR}) ou de ${E.c.PUGILAT} (${o.H.VIGUEUR}). La qualité de la réussite de l'aptitude est déterminée par les atouts net plutôt que par les succès. Les dégats de l'arme utilisé sont calculés normalement.`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:u.FRAPPE_ONIRIQUE,Description:"La lanceur materialise l'aptitude directement sur la cible à portée de voix grâce a son empreinte laissée dans le fluide. ",Difficulte:`Attaque distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}). Le DD est augmentée 1 fois en plus de la distance.`,TypesCompatibilities:[a.BENEDICTION,a.ENVOUTEMENT,a.MALEFICE]},{Nom:u.REGARD,Description:"Les effets sont appliqués à la cible avec qui vous avez un contact visuel mutuel.",Difficulte:`Test opposé de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) et ${E.c.PERSPICACITE} (${o.H.CHARISME}) de la cible.`,TypesCompatibilities:[a.ENVOUTEMENT,a.MALEFICE]},{Nom:u.SOUFFLE,Description:"Le lanceur canalyse l'energie dans ses poumons, et applique des effets dans un cône devant lui sur une courte distance",Difficulte:`Attaque a distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.VIGUEUR}).`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:u.PROJECTILE,Description:"Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endroit indiqué, et applique ses effets à l'impact avant de s'estomper.",Difficulte:`Attaque à distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}).`,TypesCompatibilities:[a.CYTOMANCIE,a.EVOCATION]},{Nom:u.ONDE,Description:"Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à portée courte autour de lui.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD4 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:u.CHANT,Description:"Le lanceur entonne un chant ou une mélodie galvanisatrice. Les membres du groupes qui marmonnent le chant avec le lanceurs beneficient alors de ses effets.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) de DD3 du lanceur. Pas de tests pour les créatures.`,TypesCompatibilities:[a.BENEDICTION]},{Nom:u.MEDITATION_ECLAIRE,Description:"Le lanceur pratique une introspection rapide pour effectuer appliquer les effets de l'aptitude sur lui-même.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD2 du lanceur.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION]},{Nom:u.CARESSE,Description:"Le lanceur applique les effets de l'aptitudes à la cible touchée concentante.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) de DD2 du lanceur.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION]},{Nom:u.CARESSE_ONIRIQUE,Description:"La lanceur materialise l'aptitude directement sur la cible consentante à portée de voix grâce a son empreinte laissée dans le fluide. ",Difficulte:`Attaque distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) qui ignore l'équipement et la couverture. Le DD est augmentée 1 fois en plus de la distance.`,TypesCompatibilities:[a.BENEDICTION,a.ENVOUTEMENT,a.MALEFICE]},{Nom:u.EXPLOSION_CADAVRE,Description:"Le lanceur utilise le cadavre ou la source d'énergie pour répendre un souffle à portée courte.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD3 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,TypesCompatibilities:[a.NECROMANCIE]},{Nom:u.EXPLOITATION_CADRAVRE,Description:"Le lanceur absorbe le cadavre ou la source d'énergie à son contact.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD2.`,TypesCompatibilities:[a.NECROMANCIE]},{Nom:u.MANTRA,Description:"Un mantra est une caracteristique du corps du lanceur qui lui permet de recevoir des bénefices du fluide. ",Difficulte:"Aucune (passif)",TypesCompatibilities:[a.MANTRA]},{Nom:u.POSTURE,Description:"Une posture permet à son utilisateur de bénéficier d'effets passif.",Difficulte:"Aucune (passif)",TypesCompatibilities:[a.POSTURE]},{Nom:u.TECHNIQUE_ENGAGEMENT,Description:"Un mouvement ou une attaque au corps à corps (avec une arme ou à main nue).",Difficulte:"Jet d'Attaque au corps à corps ou de pugilat",TypesCompatibilities:[a.TECHNIQUE]},{Nom:u.RIPOSTE,Description:"Une attaque ou action qui se déroule lors d'une reaction",Difficulte:"Aucune",TypesCompatibilities:[a.TECHNIQUE]}],c.EffectsList=[{Nom:n.ATOUT,Description:"La cible gagne 1 atout (cumulable). S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-2],[a.EVOCATION,-4],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-2]])},{Nom:n.BOUCLIER,Description:"La cible gagne augmente sa défense de 1 point. S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-6],[a.EVOCATION,-8],[a.NECROMANCIE,-4],[a.CYTOMANCIE,-4]])},{Nom:n.CHALEUR,Description:"Inflige 2 blessures (cumulable) par triomphe, par succès et par atouts net.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-5],[a.EVOCATION,-4],[a.MALEFICE,-3],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-3]])},{Nom:n.DEBILITANT,Description:"La cible perd sa prochaine reaction. Si vous avez plus de succès net que sa valeur d'intelligence, elle joue une de ses actions à la fin du tour.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-4],[a.EVOCATION,-4],[a.MALEFICE,-4],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-4]])},{Nom:n.DRAIN_FLUIDE,Description:"Chaque succès et triomphe vol 1 point de stress à l'adversaire.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-1],[a.EVOCATION,-2],[a.MALEFICE,-1],[a.CYTOMANCIE,-1],[a.BENEDICTION,-2]])},{Nom:n.ENTRAVE,Description:"La cible perd sa capacité de déplacement au premier succès. Si le total de succès net est supérieur à sa valeur de vigueur, elle est immobilisée.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-3],[a.MALEFICE,-2],[a.ENVOUTEMENT,-1],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-2]])},{Nom:n.FORCE,Description:"Inflige 1 blessure (cumulable) par triomphe et succès net. Les cibles dont la vigueur est inférieure au nombre de succès net sont renversées.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-3],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-1]])},{Nom:n.TELEPATHE,Description:"Permet de communiquer brièvement avec la cible par la pensée. Chaque succès permet soit de faire durer le lien quelques secondes de plus.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,-2],[a.EVOCATION,-2],[a.BENEDICTION,-1],[a.MALEFICE,-1],[a.ENVOUTEMENT,-1]])},{Nom:n.OBSTRUCTION,Description:"Pour niveau de résultat (1 succès, 2, 3, 5, 8 ...), une menace est infligée à la cible",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-2],[a.MALEFICE,-1],[a.ENVOUTEMENT,-2],[a.CYTOMANCIE,-2]])},{Nom:n.ILLUSION,Description:"Vous pouvez faire halluciner la cible pour que ses sens lui indiquent ce que vous voulez (déterminé à la création de l'aptitude). Chaque succès permet de rendre l'illusion plus précise et efficace, et affecte plus de sens.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-2],[a.MALEFICE,-1],[a.ENVOUTEMENT,-1]])},{Nom:n.SOIN_DE_STRESS,Description:"La cible est soignée d'1 point de stress (cumulable) par triomphe et succès net.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-2],[a.EVOCATION,-3],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-2]])},{Nom:n.SOIN,Description:"La cible dépense immédiatement 1 point de résilience (cumulable) pour regagner ses PV. Chaque triomphe soigne d'un point de stress",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-3],[a.EVOCATION,-4],[a.NECROMANCIE,-3],[a.CYTOMANCIE,-3]])},{Nom:n.VAMPIRISME,Description:"Inflige 1 blessure (cumulable) par triomphe et succès net. Si l'effet est appliqué, le lanceur regagne 1 (cumulable) PV.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-10],[a.EVOCATION,-6],[a.MALEFICE,-4],[a.CYTOMANCIE,-2]])},{Nom:n.LEVITATION,Description:"La cible de gabarit 1 (cumulable) au maximum est en lévitation pendant un bref instant. Chaque succès permet de prolonger l'effet pendant quelques secondes",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-6],[a.CYTOMANCIE,-6],[a.BENEDICTION,-6]])},{Nom:n.MANTRA,Description:"Voir la description",IsCummulable:!1,StabiliteParTypeAptitude:new Map},{Nom:n.PUISSANT,Description:"Vous infliger 1 point de dégats supplémentaire par succès.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,-2]])},{Nom:n.RENVERSEMENT,Description:"Si la somme des succès est superieur à la vigueur de la cible, elle est renversée.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,-1]])},{Nom:n.ATTAQUE_DOUBLE,Description:"Vous attaquez et lancez deux fois un jet d'attaque pendant l'execution de cette technique.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,-4]])},{Nom:n.BRISE_POSTURE,Description:"La cible perd sa posture.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,-2],[a.EVOCATION,-3],[a.ENVOUTEMENT,-1],[a.MALEFICE,-2],[a.CYTOMANCIE,-3]])}],c.ExtensionList=[{Nom:r.ANGLE_MORT,Description:"Vous devez vous situer en dehors du champ de vision de la cible.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,2],[a.EVOCATION,2],[a.CYTOMANCIE,2],[a.MALEFICE,2]])},{Nom:r.CATALYSEUR,Description:"Vous devez tenir en main un objet onirique qui vous aide à lancer le sort. La puissance du catalyseur doit être égale ou supérieure au rang de cette extension.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:r.CIBLE_GALVANISE,Description:"La ou les cibles de l'aptitude doivent être sous les effets d'au moins autant d'atout que le rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,2],[a.ENVOUTEMENT,3],[a.EVOCATION,2],[a.NECROMANCIE,1],[a.MALEFICE,3]])},{Nom:r.CIBLE_MAUDITE,Description:"La ou les cibles de l'aptitude doivent être sous les effets d'au moins 1 menace pour chaque rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,2],[a.ENVOUTEMENT,3],[a.EVOCATION,2],[a.NECROMANCIE,1],[a.MALEFICE,3]])},{Nom:r.UTILISATEUR_GALVANISE,Description:"Vous devez être sous les effets d'au moins 1 atout pour chaque rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,2],[a.ENVOUTEMENT,3],[a.EVOCATION,2],[a.NECROMANCIE,1],[a.MALEFICE,3]])},{Nom:r.DIFFICILE,Description:"Ajouter 1 dé de difficulté sur votre jet.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:r.INCENTATION_RAPIDE,Description:"L'aptitude peut être lancée pendant un déplacement, mais vous augmentez 2 fois la difficulté de l'aptitude. ",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:r.ENERGIE_ACTIVATION,Description:"L'aptitude n'applique pas ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,2],[a.ENVOUTEMENT,2],[a.CYTOMANCIE,2],[a.EVOCATION,2],[a.MALEFICE,2]])},{Nom:r.UTILISATEUR_GALVANISE,Description:"Vous devez être sous les effets d'au moins autant d'atout que le rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,3],[a.ENVOUTEMENT,3],[a.EVOCATION,3],[a.NECROMANCIE,2],[a.MALEFICE,3]])},{Nom:r.UTILISATEUR_MAUDIT,Description:"Vous devez être sous les effets d'au moins autant menace que le rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,3],[a.ENVOUTEMENT,3],[a.EVOCATION,3],[a.NECROMANCIE,2],[a.MALEFICE,3]])},{Nom:r.INGREDIENT,Description:"Vous devez consommer un objet possédant une signature énergétique commune. Cet objet est déterminé lors de la conception de l'aptitude.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.CYTOMANCIE,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.NECROMANCIE,1],[a.MALEFICE,1]])},{Nom:r.CONTRE_COUP,Description:"Le lanceur subit 1 blessure par menace net.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.BENEDICTION,1],[a.MALEFICE,1],[a.NECROMANCIE,1],[a.ENVOUTEMENT,2],[a.TECHNIQUE,1]])},{Nom:r.MAITRISE_CORPS_A_CORPS,Description:`Le rang de maîtrise dans la compétence ${E.c.CORPS_A_CORPS} doit être supérieur ou égal au rang de cette extension.`,IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,1],[a.RIPOSTE,1]])},{Nom:r.MAITRISE_PUGILAT,Description:`Le rang de maîtrise dans la compétence ${E.c.PUGILAT} doit être supérieur ou égal au rang de cette extension.`,IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,1]])},{Nom:r.FEINTE,Description:"La technique n'inflige pas de dégat.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,2]])},{Nom:r.FIN_POSTURE,Description:"La technique met fin à la posture de l'utilisateur.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.TECHNIQUE,2]])}],c.AptitudeList=[{Nom:"Eclat de feu",Description:"Vous formez une sphère d'énergie et la projetez dans la direction de la cible. À son contact, la cible est brûlée et subit des dommages.",Image:"",Type:s.findAptTypeByName(a.EVOCATION),Vecteur:s.findAptVecteurByName(u.PROJECTILE),Effets:new Map([[n.CHALEUR,1]]),ExtensionsEffet:new Map},{Nom:"Touché guerisseur",Description:"Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de résilience pour regagner ses PV perdus.",Image:"",Type:s.findAptTypeByName(a.BENEDICTION),Vecteur:s.findAptVecteurByName(u.CARESSE),Effets:new Map([[n.SOIN,1]]),ExtensionsEffet:new Map},{Nom:"Nova mortelle",Description:"L'énergie résiduelle du cadavre visé s'échappe violemment et renverse les cibles à portée courte.",Image:"",Type:s.findAptTypeByName(a.NECROMANCIE),Vecteur:s.findAptVecteurByName(u.ONDE),Effets:new Map([[n.FORCE,2]]),ExtensionsEffet:new Map([[r.ZONE,1]])},{Nom:"Le Berserk",Description:"Vous devenez colérique et inconscient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de « sacrifier » vos dés de défense donnée par votre valeur de réflexes pour les additionner à vos dés sur votre jet d'attaques. Ses dés ne sont plus utilisables pour vous défendre jusqu'au prochain tour.",Image:"",Type:s.findAptTypeByName(a.MANTRA),Vecteur:s.findAptVecteurByName(u.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"L'Échophage",Description:`Lorsque vous appliquez l'effet ${n.DRAIN_FLUIDE} ou subissez l'effet ${n.SOIN_DE_STRESS}, vous pouvez dépenser immédiatement un point de résilience pour regagner des PV, ou dépenser 1 atout pour regagner un point de résilience. Vous êtes constamment affamé, et ne sembler être rassasié qu'après-avoir volé du fluide auprès d'une source extérieur. Vous vous comportez comme un drogué vis à vis de cette source d'énergie. Chaque jour passé sans consommer du fluide baisse votre santé max de 1 point jusqu'à un minimum de 1. Lorsque vous récurez de l'énergie via le fluide, vous pouvez dépenser un point de résilience, ou dépenser 3 atouts pour regagner un point de résilience.`,Image:"",Type:s.findAptTypeByName(a.MANTRA),Vecteur:s.findAptVecteurByName(u.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"Le Distant",Description:"Vous avez 1 point de défense supplémentaire. Vous n'aimez pas le contact avec les autres, et vous montrez très irascible quand vous estimez des personnes trop proches de vous.",Image:"",Type:s.findAptTypeByName(a.MANTRA),Vecteur:s.findAptVecteurByName(u.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"Morsure de Namtar",Description:"Vous drainez l'énergie de la cible touchée pour vous soigner.",Image:"",Type:s.findAptTypeByName(a.CYTOMANCIE),Vecteur:s.findAptVecteurByName(u.FRAPPE),Effets:new Map([[n.DRAIN_FLUIDE,1]]),ExtensionsEffet:new Map([[r.DIFFICILE,1]])},{Nom:"Le Fluidophobique",Description:"Vous gagnez un atout chaque fois que vous effectuez un jet d'attaque ou un jet d'opposition avec une créature utilisant le fluide. Vous ne pouvez pas utiliser d'aptitude autre que des mantras. Vous vous montrez toujours très antipathique envers les utilisateurs du fluide.",Image:"",Type:s.findAptTypeByName(a.MANTRA),Vecteur:s.findAptVecteurByName(u.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"L'Honorable Dueliste",Description:"Le personnage à un esprit de compétition très marqué. Pendant une phase de combat, vous avez gagnez un atout avant d'effectuer un jet d'attaque face à un ennemi s'il n'a déjà effectuer une attaque contre vous et seulement vous, et n'a subit aucune attaque autre que les vôtres. Vous subissez immédiatement deux menaces si le duel est rompu.",Image:"",Type:s.findAptTypeByName(a.MANTRA),Vecteur:s.findAptVecteurByName(u.MANTRA),Effets:new Map,ExtensionsEffet:new Map}]},6930:(e,t,i)=>{i.d(t,{I:()=>s,i:()=>u});var s,a=i(1408);(function(e){e["PV"]="PV",e["REFLEXES"]="REFLEXES",e["STRESS"]="STRESS",e["RESILIENCE"]="RESILIENCE",e["INITIATIVE"]="INITIATIVE"})(s||(s={}));class u{static getAttributsByNames(e){return this.AttributsList.filter((t=>e.includes(t.Nom)))}}u.AttributsList=[{Nom:s.PV,Description:"Votre maximum de PV est egal à 3 fois la Vigueur + 4 + 1d4 par niveau supplémentaire après le niveau 1. ",Icon:a.sMo},{Nom:s.REFLEXES,Description:"Vous avez 1 point de Réflexes par point d'Agilité.",Icon:a.pCE},{Nom:s.INITIATIVE,Description:"Vous avez 1 point d'initiative par point d'Agilité et par niveau.",Icon:a.XHH},{Nom:s.STRESS,Description:"Votre seuil de stress est égale à Intelligence + Charisme",Icon:a.Ze$},{Nom:s.RESILIENCE,Description:"Vous avez 1 point de Résiliance par point de Vigueur",Icon:a.UZG}]},4088:(e,t,i)=>{i.d(t,{H:()=>s,p:()=>u});var s,a=i(6930);(function(e){e["VIGUEUR"]="Vigueur",e["AGILITE"]="Agilité",e["ADRESSE"]="Adresse",e["INTELLIGENCE"]="Intelligence",e["CHARISME"]="Charisme"})(s||(s={}));class u{static getAllCaracteristiques(){return this.CaracteristiquesList}static getCaracteristique(e){return this.CaracteristiquesList.find((t=>t.Nom===e))}}u.CaracteristiquesList=[{Nom:s.VIGUEUR,Description:"Traduit la force, la musculature, la vitalité et la robustesse physique",Attributs:a.i.getAttributsByNames([a.I.PV,a.I.RESILIENCE])},{Nom:s.AGILITE,Description:"Determine la souplesse et la vivacité des mouvements.",Attributs:a.i.getAttributsByNames([a.I.REFLEXES,a.I.INITIATIVE])},{Nom:s.ADRESSE,Description:"Représente la précision et le contrôle des mouvements subtiles.",Attributs:a.i.getAttributsByNames([])},{Nom:s.INTELLIGENCE,Description:"Mesure la capacité de raisonnement, la mémoire et la sagesse d'un personnage.",Attributs:a.i.getAttributsByNames([a.I.STRESS])},{Nom:s.CHARISME,Description:"Représente la force de caractère, l'assurance et la subtilité du personnage dans sa communication.",Attributs:a.i.getAttributsByNames([a.I.STRESS])}]},4515:(e,t,i)=>{i.d(t,{_:()=>u,c:()=>s});var s,a=i(4088);(function(e){e["ARME_A_DISTANCE"]="Arme à distance",e["ATHLETISME"]="Athlétisme",e["CHARME"]="Charme",e["CONNAISSANCE_CULTES"]="Connaissance - Cultes",e["CONNAISSANCE_HISTOIRE"]="Connaissance - Histoire",e["COORDINATION"]="Coordination",e["CORPS_A_CORPS"]="Corps à corps",e["DISCRETION"]="Discrétion",e["ENTROPIE_DU_FLUIDE"]="Entropie du fluide",e["INGENIERIE"]="Ingénierie",e["INTIMIDATION"]="Intimidation",e["MAGOUILLE"]="Magouille",e["MEDECINE"]="Médecine",e["NEGOCIATION"]="Négociation",e["PERSPICACITE"]="Prespicacité",e["PILOTAGE"]="Pilotage",e["PUGILAT"]="Pugilat",e["SURVIE"]="Survie",e["TROMPERIE"]="Tromperie",e["VIGILANCE"]="Vigilance"})(s||(s={}));class u{static getCompetencesByCaracteristique(e){return this.CompetencesList.filter((t=>t.BaseCaracteristique===e))}static getAllCompetences(){return this.CompetencesList}}u.CompetencesList=[{Nom:s.ARME_A_DISTANCE,BaseCaracteristique:a.H.ADRESSE,ShortDescription:"Utiliser une arme à distance avec efficacité."},{Nom:s.ATHLETISME,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Sauter, grimper, soulever de lourdes charges."},{Nom:s.COORDINATION,BaseCaracteristique:a.H.AGILITE,ShortDescription:"Garder un equilibre, effectuer des accrobatie, habilité manuelle."},{Nom:s.CORPS_A_CORPS,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Porter une attaque avec une arme au corps à corps."},{Nom:s.DISCRETION,BaseCaracteristique:a.H.AGILITE,ShortDescription:"S'approcher sans attirer l'attention."},{Nom:s.PUGILAT,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Attaquer a main nue, lutter contre un adversaire."},{Nom:s.PILOTAGE,BaseCaracteristique:a.H.ADRESSE,ShortDescription:"Manoeuvrer un vehicule terrestre ou aerospacial."},{Nom:s.CONNAISSANCE_HISTOIRE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réagir et argumenter sur un fait lié à l'Histoire de la galaxie."},{Nom:s.CONNAISSANCE_CULTES,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réagir et argumenter sur un fait lié à un culte, une religions ou une croyance."},{Nom:s.MEDECINE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Appliquer des premier soins ou manipuler des outils de medecine."},{Nom:s.SURVIE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Trouver un chemin sûr, reconnaitre des substances nutritives ou danguereuses."},{Nom:s.INGENIERIE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réparer un objet mecanique ou interagir avec un terminal informatique."},{Nom:s.ENTROPIE_DU_FLUIDE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Invoquer des materialisation du Fluide, resentir des sources d'energie du Fluide."},{Nom:s.CHARME,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Obtenir une faveur de la cible sans avoir recours à la négociation."},{Nom:s.NEGOCIATION,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Marchander, argumenter sur une decision de manière plus ou moins rationnelle."},{Nom:s.TROMPERIE,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Déguiser un scène ou une personne, mentir à un individu."},{Nom:s.PERSPICACITE,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Capcité passive à detecter le mensonge ou mettre en evidence ce qui ne l'est pas."},{Nom:s.INTIMIDATION,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Obtenir un service ou un objet par la menace."},{Nom:s.VIGILANCE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Detecter le danger, remarquer des détails significatif."}]},628:(e,t,i)=>{i.d(t,{Z:()=>C});var s=i(9835),a=i(6970);const u={class:"text-overline"},n={class:"text-h5 q-mt-sm q-mb-xs"},r={class:"text-overline"},o={class:"ellipsis-3-lines text-caption text-grey"};function E(e,t,i,E,c,l){const p=(0,s.up)("q-card-section"),N=(0,s.up)("q-card");return(0,s.wg)(),(0,s.j4)(N,{flat:"",class:"bg-accent"},{default:(0,s.w5)((()=>[(0,s.Wm)(p,{vertical:""},{default:(0,s.w5)((()=>[(0,s._)("div",u,(0,a.zw)(e.Aptitude.Type.Nom),1),(0,s._)("div",n,(0,a.zw)(e.Aptitude.Nom),1),(0,s._)("div",r,(0,a.zw)(e.Aptitude.Vecteur.Nom),1),(0,s._)("div",o,(0,a.zw)(e.Aptitude.Description),1)])),_:1})])),_:1})}var c=i(2349);const l=(0,s.aZ)({name:"AptitudeCard",props:{Aptitude:{type:Object,required:!0}},data(){return{openDetail:!1}},methods:{computeAptitudeCost(){return c.F.computeStabilityScore(this.Aptitude.Type.Nom,this.Aptitude.Effets,this.Aptitude.ExtensionsEffet)}}});var p=i(1639),N=i(4458),I=i(3190),d=i(9984),m=i.n(d);const T=(0,p.Z)(l,[["render",E]]),C=T;m()(l,"components",{QCard:N.Z,QCardSection:I.Z})}}]);