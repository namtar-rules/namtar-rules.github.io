"use strict";(globalThis["webpackChunknamtar_rules_vue"]=globalThis["webpackChunknamtar_rules_vue"]||[]).push([[64],{2349:(e,t,i)=>{i.d(t,{F:()=>c,V:()=>a});var s,a,n,r,u,o=i(9890),E=i(4515);(function(e){e["EVOCATION"]="Evocation",e["MALEFICE"]="Malefice",e["NECROMANCIE"]="Necromancie",e["ENVOUTEMENT"]="Envoutement",e["BENEDICTION"]="Bénédiction",e["MANTRA"]="Mantra",e["CYTOMANCIE"]="Cytomancie"})(a||(a={})),function(e){e["ALTERATION_OBJET"]="Altération d'objet",e["CARESSE"]="Caresse",e["CHANT"]="Chant",e["CONTACT"]="Contact",e["FRAPPE"]="Frappe",e["EXPLOITATION_CADRAVRE"]="Exploitation de cadavre",e["EXPLOSION_CADAVRE"]="Explosion de cadavre",e["MANTRA"]="Mantra",e["MEDITATION_ECLAIRE"]="Méditation éclaire",e["PROJECTILE"]="Projectile",e["ONDE"]="Onde",e["REGARD"]="Regard",e["SOUFFLE"]="Souffle"}(n||(n={})),function(e){e["ATOUT"]="Atout",e["ATOUT_GROUPE"]="Atout de groupe",e["BOUCLIER"]="Bouclier",e["CHALEUR"]="Chaleur",e["DEBILITANT"]="Débilitant",e["DRAIN_FLUIDE"]="Drain de fluide",e["ENTRAVE"]="Entrave",e["FORCE"]="Force",e["LEVITATION"]="Levitation",e["ILLUSION"]="Illusion",e["OBSTRUCTION"]="Obstruction",e["SOIN_DE_STRESS"]="Soin de stress",e["TELEPATHE"]="Télépathe",e["SOIN"]="Soin",e["VAMPIRISME"]="Vampirisme",e["MANTRA"]="Mantra"}(r||(r={})),function(e){e["ANGLE_MORT"]="Angle mort",e["MAUDIT"]="Maudit",e["DESTINE"]="Déstiné",e["CATALYSEUR"]="Catalyseur",e["CONTRE_COUP"]="Contre-coup",e["DIFFICILE"]="Difficile",e["ENERGIE_ACTIVATION"]="Energie d'activation",e["INCENTATION_RAPIDE"]="Incantation rapide",e["INGREDIENT"]="Ingredient",e["ZONE"]="Zone d'effet"}(u||(u={}));class c{static findCapacityTypeByName(e){return this.Types.find((t=>t.Nom===e))}static findVecteurByName(e){return this.VecteursList.find((t=>t.Nom===e))}static findEffetByName(e){return this.EffectsList.find((t=>t.Nom===e))}static findExtensionByName(e){return this.ExtensionList.find((t=>t.Nom===e))}static getAllAptitudes(){return this.AptitudeList}static getAllTypes(){return this.Types}static getAllEffect(){return this.EffectsList}static getAllExtension(){return this.ExtensionList}static getAllVecteur(){return this.VecteursList}static computeStabilityScore(e,t,i){if(e===a.MANTRA)return 0;let s=0;return t.forEach(((t,i)=>{var a;s+=t*((null===(a=this.findEffetByName(i))||void 0===a?void 0:a.StabiliteParTypeAptitude.get(e))||999)})),i.forEach(((t,i)=>{var a;s+=t*((null===(a=this.findExtensionByName(i))||void 0===a?void 0:a.StabiliteParTypeAptitude.get(e))||999)})),s}static printAptitudeCost(e,t){if(e>0)return"Aucun";switch(t){case a.EVOCATION:return`${Math.abs(e)} point de stress`;case a.BENEDICTION:return`${Math.trunc(Math.abs(e)/2)} atouts`;case a.MALEFICE:return`${Math.trunc(Math.abs(e)/2)} menaces`;case a.NECROMANCIE:return`${Math.trunc(Math.abs(e)/2)} niveaux de puissance`;case a.ENVOUTEMENT:return`${Math.abs(e)} atouts`;case a.CYTOMANCIE:return`${Math.trunc(Math.abs(e))} PV sacrifié`;case a.MANTRA:return"Aucun";case a.MANTRA:return"Non caclulé"}}}s=c,c.Types=[{Nom:a.EVOCATION,Description:"La conversion de l'energie sombre par le fluide est activée par l'utilisateur qui utilise son corps comme catalyseur. L'utilisateur subit du stress pour stabiliser et matérialiser son aptitude.",DescriptionDetails:"Chaque point de stress investi produit 1 point de stabilité."},{Nom:a.MALEFICE,Description:"L'utilisateur se sert des menace de la cible pour corompre la signature de la cible qui devient le catalyseur d'une matérialisation néfaste de l'énergie sombre. La puissance du maléfice est nourrie par les menaces accumulées par la cible.",DescriptionDetails:"Chaque menaces subit par la cible génère 2 points de stabilité. Les menaces ne sont pas consommées."},{Nom:a.NECROMANCIE,Description:"La force vitale résidelle d'un cadavre est utilisée comme catalyseur de l'énergie sombre. La qualitée de l'individu et le nombre d'individu renforce l'apptitude.",DescriptionDetails:"Chaque niveau du cadavre génère 2 points de stabilité. Plusieurs cadavres peuvent être utilisés en additionnant leurs niveaux."},{Nom:a.ENVOUTEMENT,Description:"Le lanceur utilise la concordance namtarique de la cible pour qu'elle devienne un catalyseur d'énergie néfaste. La concordance de la cible est déteriorée dans le processus. L'apptitude consume les atouts de la cible pour générer des effets.",DescriptionDetails:"Chaque atout supprimé génère 1 point de stabilité."},{Nom:a.BENEDICTION,Description:"Le lanceur utilise la concordance namtarique de la cible consentante pour qu'elle devienne un catalyseur. Les atouts du groupe sont consommé pour générer des effets.",DescriptionDetails:"Chaque atout consommé génère 2 points de stabilité."},{Nom:a.MANTRA,Description:"Un mantra est une modification permanante de la signature namtarique de la cible pour apprécier certaine caractéristiques. Les effets sont passifs.",DescriptionDetails:"Les mantras sont toujours stables. Leurs effets sont directement établis par le MJ."},{Nom:a.CYTOMANCIE,Description:"L'énergie sombre est stockée dans des cellules sacrifiées par le lanceur. Le lanceur sacrifie des PV pour générer ses effets",DescriptionDetails:"Chaque PV sacrifié genère 1 point de stabilité."}],c.VecteursList=[{Nom:n.ALTERATION_OBJET,Description:"Les effets sont prisonnier d'un objet au contact du lanceur. Le lanceur peut choisir de relacher les effets à sa guise. Sinon, ils sont libérés quelques secondes après que l'objet est été relaché.",Difficulte:`Test d'${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD3`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.EVOCATION]},{Nom:n.CONTACT,Description:"Les effets sont appliqués à la cible touchée.",Difficulte:`Attaque engagée de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.VIGUEUR})`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:n.FRAPPE,Description:"Les effets sont appliqué sur une attaque à main nue ou avec une arme au corps à corps. Un equilibre certain doit être trouver par l'utilisateur pour captialiser sur son arme et l'aptitude.",Difficulte:`Attaque engagée de ${E.c.CORPS_A_CORPS} (${o.H.VIGUEUR}) ou de ${E.c.PUGILAT} (${o.H.VIGUEUR}). La qualité de la réussite de l'aptitude est déterminée par les avantages générés plutôt que par les succès. Les dégats de l'arme utilisé sont calculés normalement.`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:n.REGARD,Description:"Les effets sont appliqués à la cible avec qui vous avez un contact visuel mutuel.",Difficulte:`Test opposé de ${E.c.TROMPERIE} (${o.H.CHARISME}) et ${E.c.PERSPICACITE} (${o.H.CHARISME}) de la cible.`,TypesCompatibilities:[a.ENVOUTEMENT,a.MALEFICE]},{Nom:n.SOUFFLE,Description:"Le lanceur canalyse l'energie dans ses poumons, et applique des effets dans un cône devant lui sur une courte distance",Difficulte:`Attaque a distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.VIGUEUR}).`,TypesCompatibilities:[a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:n.PROJECTILE,Description:"Le lanceur génère un projectile qui se déplace à grande vitesse jusqu'à l'endroit indiqué, et applique ses effets à l'impact avant de s'estomper.",Difficulte:`Attaque à distance de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}).`,TypesCompatibilities:[a.CYTOMANCIE,a.EVOCATION]},{Nom:n.ONDE,Description:"Le lanceur génère une onde qui applique les effets du sort sur toutes les cibles à portée courte autour de lui.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD4 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION,a.MALEFICE]},{Nom:n.CHANT,Description:"Le lanceur entonne un chant ou une mélodie galvanisatrice. Les membres du groupes qui marmonnent le chant avec le lanceurs beneficient alors de ses effets.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) de DD3 du lanceur. Pas de tests pour les créatures.`,TypesCompatibilities:[a.BENEDICTION]},{Nom:n.MEDITATION_ECLAIRE,Description:"Le lanceur pratique une introspection rapide pour effectuer appliquer les effets de l'aptitude sur lui-même.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD2 du lanceur.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION]},{Nom:n.CARESSE,Description:"Le lanceur applique les effets de l'aptitudes à la cible touchée concentante.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.CHARISME}) de DD2 du lanceur.`,TypesCompatibilities:[a.BENEDICTION,a.CYTOMANCIE,a.ENVOUTEMENT,a.EVOCATION]},{Nom:n.EXPLOSION_CADAVRE,Description:"Le lanceur utilise le cadavre ou la source d'énergie pour répendre un souffle à portée courte.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD3 à portée courte. Le DD augmente une fois pour chaque rangs de portée supplémentaires.`,TypesCompatibilities:[a.NECROMANCIE]},{Nom:n.EXPLOITATION_CADRAVRE,Description:"Le lanceur absorbe le cadavre ou la source d'énergie à son contact.",Difficulte:`Test de ${E.c.ENTROPIE_DU_FLUIDE} (${o.H.INTELLIGENCE}) de DD2.`,TypesCompatibilities:[a.NECROMANCIE]}],c.EffectsList=[{Nom:r.ATOUT,Description:"La cible gagne 1 atout (cumulable) sur son prochain test. S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-2],[a.EVOCATION,-4],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-2]])},{Nom:r.ATOUT_GROUPE,Description:"Le groupe gagne 1 atout (cumulable). S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-4],[a.EVOCATION,-6],[a.NECROMANCIE,-3],[a.CYTOMANCIE,-3]])},{Nom:r.BOUCLIER,Description:"La cible gagne augmente sa défense de 1 point. S'estompe à la fin de la rencontre ou au bout d'une dizaine de secondes",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-6],[a.EVOCATION,-8],[a.NECROMANCIE,-4],[a.CYTOMANCIE,-4]])},{Nom:r.CHALEUR,Description:"Inflige 2 blessures (cumulable) par succès net et par avantage.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-5],[a.EVOCATION,-4],[a.MALEFICE,-3],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-3]])},{Nom:r.DEBILITANT,Description:"La cible perd sa prochaine reaction.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-4],[a.EVOCATION,-4],[a.MALEFICE,-4],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-4]])},{Nom:r.DRAIN_FLUIDE,Description:"Chaque succès vol 1 point de stress à l'adversaire",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-1],[a.EVOCATION,-2],[a.MALEFICE,-1],[a.CYTOMANCIE,-1],[a.BENEDICTION,-2]])},{Nom:r.ENTRAVE,Description:"La cible perd sa capacité de déplacement au premier succès. Elle est neutralisée à partir de 2 succès. Elle est inconsciente à partir de 3 succès.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-3],[a.MALEFICE,-2],[a.ENVOUTEMENT,-1],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-2]])},{Nom:r.FORCE,Description:"Inflige 1 blessure (cumulable) par succès net. Les cibles dont la vigueur est inférieure au nombre de succès générés sont renversées.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-3],[a.NECROMANCIE,-1],[a.CYTOMANCIE,-1]])},{Nom:r.TELEPATHE,Description:"Permet de communiquer brièvement avec la cible par la pensée. Chaque succès permet soit de faire durer le lien quelques secondes de plus.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-2],[a.BENEDICTION,-1],[a.MALEFICE,-1],[a.ENVOUTEMENT,-1]])},{Nom:r.OBSTRUCTION,Description:"La cible subit 1 menace (cumulable) sur son prochain test.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-2],[a.MALEFICE,-1],[a.ENVOUTEMENT,-2],[a.CYTOMANCIE,-2]])},{Nom:r.ILLUSION,Description:"Vous pouvez faire halluciner la cible pour que ses sens lui indiquent ce que vous voulez (déterminé à la création de l'aptitude). Chaque succès permet de rendre l'illusion plus précise et efficace, et affecte plus de sens.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-2],[a.MALEFICE,-1],[a.ENVOUTEMENT,-1]])},{Nom:r.SOIN_DE_STRESS,Description:"La cible est soignée d'1 point de stress (cumulable) par succès net.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-2],[a.EVOCATION,-3],[a.NECROMANCIE,-2],[a.CYTOMANCIE,-2]])},{Nom:r.SOIN,Description:"La cible dépense immédiatement 1 point de résilience (cumulable) pour regagner ses PV. Chaque avantage soigne 1 point de stress.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,-3],[a.EVOCATION,-4],[a.NECROMANCIE,-3],[a.CYTOMANCIE,-3]])},{Nom:r.VAMPIRISME,Description:"Inflige 1 blessure (cumulable) par succès net. Si l'effet est appliqué, le lanceur regagne 1 (cumulable) PV.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,-10],[a.EVOCATION,-6],[a.MALEFICE,-4],[a.CYTOMANCIE,-2]])},{Nom:r.LEVITATION,Description:"La cible de gabarit 1 (cumulable) au maximum est en lévitation pendant un bref instant.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,-6],[a.CYTOMANCIE,-6],[a.BENEDICTION,-6]])},{Nom:r.MANTRA,Description:"Voir la description",IsCummulable:!1,StabiliteParTypeAptitude:new Map}],c.ExtensionList=[{Nom:u.ANGLE_MORT,Description:"Vous devez vous situer en dehors du champ de vision de la cible.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.ENVOUTEMENT,2],[a.EVOCATION,2],[a.CYTOMANCIE,2],[a.MALEFICE,2]])},{Nom:u.CATALYSEUR,Description:"Vous devez tenir en main un objet qui vous aide à lancer le sort. Cette extension convient à un catalyseur simple et commun.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:u.DESTINE,Description:"Vous devez être sous les effets 1 d'atout pour chaque rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,2],[a.ENVOUTEMENT,3],[a.EVOCATION,2],[a.NECROMANCIE,1],[a.MALEFICE,3]])},{Nom:u.DIFFICILE,Description:"Ajouter 1 dé de difficulté sur votre jet.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:u.INCENTATION_RAPIDE,Description:"Augmentez 3 fois la difficulté de l'aptitude. L'aptitude peut être lancée pendant un déplacement.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.MALEFICE,1],[a.NECROMANCIE,1]])},{Nom:u.ENERGIE_ACTIVATION,Description:"L'aptitude n'applique pas ses effets uniquement si la cible est victime déjà d'un effet. Cet effet est déterminé à la conception du sort.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,2],[a.ENVOUTEMENT,2],[a.CYTOMANCIE,2],[a.EVOCATION,2],[a.MALEFICE,2]])},{Nom:u.MAUDIT,Description:"Vous devez être sous les effets de 1 menace pour chaque rang de cette extension.",IsCummulable:!1,StabiliteParTypeAptitude:new Map([[a.CYTOMANCIE,3],[a.ENVOUTEMENT,3],[a.EVOCATION,3],[a.NECROMANCIE,2],[a.MALEFICE,3]])},{Nom:u.INGREDIENT,Description:"Vous devez consommer un objet possédant une signature énergétique commune. Cet objet est déterminé lors de la conception de l'aptitude.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.BENEDICTION,1],[a.CYTOMANCIE,1],[a.ENVOUTEMENT,1],[a.EVOCATION,1],[a.NECROMANCIE,1],[a.MALEFICE,1]])},{Nom:u.CONTRE_COUP,Description:"Le lanceur subit 1 blessure pour chaque désavantage généré.",IsCummulable:!0,StabiliteParTypeAptitude:new Map([[a.EVOCATION,1],[a.CYTOMANCIE,1],[a.BENEDICTION,1],[a.MALEFICE,1],[a.NECROMANCIE,1],[a.ENVOUTEMENT,2]])}],c.AptitudeList=[{Nom:"Eclat de feu",Description:"Vous formez une sphère d'énergie et la projetez dans la direction de la cible. À son contact, la cible est brûlée et subit des dommages.",Image:"",Type:s.findCapacityTypeByName(a.EVOCATION),Vecteur:s.findVecteurByName(n.PROJECTILE),Effets:new Map([[r.CHALEUR,1]]),ExtensionsEffet:new Map},{Nom:"Touché guerisseur",Description:"Vous posez vos mains sur une cible consentante. La cible dépense immédiatement 1 point de résilience pour regagner ses PV perdus.",Image:"",Type:s.findCapacityTypeByName(a.BENEDICTION),Vecteur:s.findVecteurByName(n.CARESSE),Effets:new Map([[r.SOIN,1]]),ExtensionsEffet:new Map},{Nom:"Nova mortelle",Description:"L'énergie résiduelle du cadavre visé s'échappe violemment et renverse les cibles à portée courte.",Image:"",Type:s.findCapacityTypeByName(a.NECROMANCIE),Vecteur:s.findVecteurByName(n.ONDE),Effets:new Map([[r.FORCE,2]]),ExtensionsEffet:new Map([[u.ZONE,1]])},{Nom:"Le Berserk",Description:"Vous devenez colérique et inconscient en situation de conflit. Avant de lancer un jet d'attaque, vous pouvez choisir de « sacrifier » vos dés de défense pour les additionner à vos dés sur votre jet d'attaques. Ses dés ne sont plus utilisables pour vous défendre jusqu'au prochain tour.",Image:"",Type:s.findCapacityTypeByName(a.MANTRA),Vecteur:s.findVecteurByName(n.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"L'Échophage",Description:`Lorsque vous appliquez l'effet ${r.DRAIN_FLUIDE} ou subissez l'effet ${r.SOIN_DE_STRESS}, vous pouvez dépenser immédiatement un point de résilience pour regagner des PV, ou dépenser 1 atout pour regagner un point de résilience. Vous êtes constamment affamé, et ne sembler être rassasié qu'après-avoir volé du fluide auprès d'une source extérieur. Vous vous comportez comme un drogué vis à vis de cette source d'énergie. Chaque jour passé sans consommer du fluide baisse votre santé max de 1 point jusqu'à un minimum de 1. Lorsque vous récurez de l'énergie via le fluide, vous pouvez dépenser un point de résilience, ou dépenser 3 atouts pour regagner un point de résilience.`,Image:"",Type:s.findCapacityTypeByName(a.MANTRA),Vecteur:s.findVecteurByName(n.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"Le Distant",Description:"Vous avez 1 point de défense supplémentaire. Vous n'aimez pas le contact avec les autres, et vous montrez très irascible quand vous estimez des personnes trop proches de vous. ",Image:"",Type:s.findCapacityTypeByName(a.MANTRA),Vecteur:s.findVecteurByName(n.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"Morsure de Namtar",Description:"Vous drainez l'énergie de la cible touchée pour vous soigner.",Image:"",Type:s.findCapacityTypeByName(a.CYTOMANCIE),Vecteur:s.findVecteurByName(n.FRAPPE),Effets:new Map([[r.DRAIN_FLUIDE,1]]),ExtensionsEffet:new Map([[u.DIFFICILE,1]])},{Nom:"Le Fluidophobique",Description:"Vous gagnez un atout chaque fois que vous effectuez un jet d'attaque ou un jet d'opposition avec une créature utilisant le fluide. Vous ne pouvez pas utiliser d'aptitude autre que des mantras. Vous vous montrez toujours très antipathique envers les utilisateurs du fluide.",Image:"",Type:s.findCapacityTypeByName(a.MANTRA),Vecteur:s.findVecteurByName(n.MANTRA),Effets:new Map,ExtensionsEffet:new Map},{Nom:"L'Honorable Dueliste",Description:"Pendant une phase de combat, vous avez un avantage sur tous vos jets d'attaque face à un ennemi s'il n'a attaqué que vous, et n'a subit aucune attaque autre que les vôtres. Vous subissez deux menaces si le duel est rompu. Le personnage à un esprit de compétition très marqué.",Image:"",Type:s.findCapacityTypeByName(a.MANTRA),Vecteur:s.findVecteurByName(n.MANTRA),Effets:new Map,ExtensionsEffet:new Map}]},9890:(e,t,i)=>{i.d(t,{p:()=>u,H:()=>a});var s,a,n=i(1408);(function(e){e["PV"]="PV",e["DEFENSE"]="DEFENSE",e["STRESS"]="STRESS",e["RESILIENCE"]="RESILIENCE"})(s||(s={}));class r{static getAttributsByNames(e){return this.AttributsList.filter((t=>e.includes(t.Nom)))}}r.AttributsList=[{Nom:s.PV,Description:"Votre maximum de PV est egal à 3 fois la Vigueur + 5",Icon:n.sMo},{Nom:s.DEFENSE,Description:"Vous avez 1 point de Défense par point d'Agilité.",Icon:n.pCE},{Nom:s.STRESS,Description:"Votre seuil de stress est égale à Intelligence + Charisme",Icon:n.Ze$},{Nom:s.RESILIENCE,Description:"Vous avez 1 point de Résiliance par point de Vigueur",Icon:n.UZG}],function(e){e["VIGUEUR"]="Vigueur",e["AGILITE"]="Agilité",e["INTELLIGENCE"]="Intelligence",e["CHARISME"]="Charisme"}(a||(a={}));class u{static getAllCaracteristiques(){return this.CaracteristiquesList}static getCaracteristique(e){return this.CaracteristiquesList.find((t=>t.Nom===e))}}u.CaracteristiquesList=[{Nom:a.VIGUEUR,Description:"Traduit la force, la musculature, la vitalité et la robustesse physique",Attributs:r.getAttributsByNames([s.PV,s.RESILIENCE])},{Nom:a.AGILITE,Description:"Determine la souplesse, la finesse dans les mouvement et l'adresse.",Attributs:r.getAttributsByNames([s.DEFENSE])},{Nom:a.INTELLIGENCE,Description:"Mesure la capacité de raisonnement, la mémoire et la sagesse d'un personnage.",Attributs:r.getAttributsByNames([s.STRESS])},{Nom:a.CHARISME,Description:"Représente la force de caractère, l'assurance et la subtilité du personnage dans sa communication.",Attributs:r.getAttributsByNames([s.STRESS])}]},4515:(e,t,i)=>{i.d(t,{_:()=>n,c:()=>s});var s,a=i(9890);(function(e){e["ARME_A_DISTANCE"]="Arme à distance",e["ATHLETISME"]="Athlétisme",e["CHARME"]="Charme",e["CONNAISSANCE_CULTES"]="Connaissance - Cultes",e["CONNAISSANCE_HISTOIRE"]="Connaissance - Histoire",e["COORDINATION"]="Coordination",e["CORPS_A_CORPS"]="Corps à corps",e["DISCRETION"]="Discrétion",e["ENTROPIE_DU_FLUIDE"]="Entropie du fluide",e["INGENIERIE"]="Ingénierie",e["INTIMIDATION"]="Intimidation",e["MAGOUILLE"]="Magouille",e["MEDECINE"]="Médecine",e["NEGOCIATION"]="Négociation",e["PERSPICACITE"]="Prespicacité",e["PILOTAGE"]="Pilotage",e["PUGILAT"]="Pugilat",e["SURVIE"]="Survie",e["TROMPERIE"]="Tromperie",e["VIGILANCE"]="Vigilance"})(s||(s={}));class n{static getCompetencesByCaracteristique(e){return this.CompetencesList.filter((t=>t.BaseCaracteristique===e))}static getAllCompetences(){return this.CompetencesList}}n.CompetencesList=[{Nom:s.ATHLETISME,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Sauter, grimper, soulever de lourdes charges."},{Nom:s.COORDINATION,BaseCaracteristique:a.H.AGILITE,ShortDescription:"Garder un equilibre, effectuer des accrobatie, habilité manuelle."},{Nom:s.CORPS_A_CORPS,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Porter une attaque avec une arme au corps à corps."},{Nom:s.DISCRETION,BaseCaracteristique:a.H.AGILITE,ShortDescription:"S'approcher sans attirer l'attention."},{Nom:s.PUGILAT,BaseCaracteristique:a.H.VIGUEUR,ShortDescription:"Attaquer a main nue, lutter contre un adversaire."},{Nom:s.PILOTAGE,BaseCaracteristique:a.H.AGILITE,ShortDescription:"Manoeuvrer un vehicule terrestre ou aerospacial."},{Nom:s.CONNAISSANCE_HISTOIRE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réagir et argumenter sur un fait lié à l'Histoire de la galaxie."},{Nom:s.CONNAISSANCE_CULTES,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réagir et argumenter sur un fait lié à un culte, une religions ou une croyance."},{Nom:s.MEDECINE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Appliquer des premier soins ou manipuler des outils de medecine."},{Nom:s.SURVIE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Trouver un chemin sûr, reconnaitre des substances nutritives ou danguereuses."},{Nom:s.INGENIERIE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Réparer un objet mecanique ou interagir avec un terminal informatique."},{Nom:s.ENTROPIE_DU_FLUIDE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Invoquer des materialisation du Fluide, resentir des sources d'energie du Fluide."},{Nom:s.CHARME,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Obtenir une faveur de la cible sans avoir recours à la négociation."},{Nom:s.NEGOCIATION,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Marchander, argumenter sur une decision de manière plus ou moins rationnelle."},{Nom:s.TROMPERIE,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Déguiser un scène ou une personne, mentir à un individu."},{Nom:s.PERSPICACITE,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Capcité passive à detecter le mensonge ou mettre en evidence ce qui ne l'est pas."},{Nom:s.INTIMIDATION,BaseCaracteristique:a.H.CHARISME,ShortDescription:"Obtenir un service ou un objet par la menace."},{Nom:s.VIGILANCE,BaseCaracteristique:a.H.INTELLIGENCE,ShortDescription:"Detecter le danger, remarquer des détails significatif."}]},3521:(e,t,i)=>{i.d(t,{Z:()=>M});var s=i(9835),a=i(6970);const n={class:"text-overline"};function r(e,t,i,r,u,o){const E=(0,s.up)("q-item-label"),c=(0,s.up)("q-item-section"),l=(0,s.up)("q-item"),p=(0,s.up)("q-space"),N=(0,s.up)("q-btn"),d=(0,s.up)("q-card-section"),I=(0,s.up)("q-card"),C=(0,s.up)("q-dialog"),m=(0,s.Q2)("ripple"),T=(0,s.Q2)("close-popup");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.wy)(((0,s.wg)(),(0,s.j4)(l,{class:"bg-accent",clickable:"",onClick:t[0]||(t[0]=t=>e.openDetail=!0)},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Wm)(E,{class:"text-overline"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.Aptitude.Nom),1)])),_:1}),(0,s.Wm)(E,{caption:"",class:"text-grey"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.Aptitude.Description),1)])),_:1})])),_:1}),(0,s.Wm)(c,{side:"",top:""},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{caption:""},{default:(0,s.w5)((()=>[(0,s.Uk)((0,a.zw)(e.Aptitude.Type.Nom),1)])),_:1})])),_:1})])),_:1})),[[m]]),(0,s.Wm)(C,{modelValue:e.openDetail,"onUpdate:modelValue":t[1]||(t[1]=t=>e.openDetail=t)},{default:(0,s.w5)((()=>[(0,s.Wm)(I,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"row items-center q-pb-none"},{default:(0,s.w5)((()=>[(0,s._)("div",n,"Details : "+(0,a.zw)(e.Aptitude.Nom),1),(0,s.Wm)(p),(0,s.wy)((0,s.Wm)(N,{icon:"close",flat:"",round:"",dense:""},null,512),[[T]])])),_:1}),(0,s.Wm)(d,null,{default:(0,s.w5)((()=>[(0,s._)("p",null,"Type: "+(0,a.zw)(e.Aptitude.Type.Nom)+" - "+(0,a.zw)(e.Aptitude.Type.Description),1),(0,s._)("p",null," Vecteur: "+(0,a.zw)(e.Aptitude.Vecteur.Nom)+" - "+(0,a.zw)(e.Aptitude.Vecteur.Description),1),(0,s._)("p",null,"Description: "+(0,a.zw)(e.Aptitude.Description),1),(0,s._)("p",null,"Effets: "+(0,a.zw)(Array.from(e.Aptitude.Effets.keys()).join(",")),1),(0,s._)("p",null," Extension: "+(0,a.zw)(Array.from(e.Aptitude.ExtensionsEffet.keys()).join(",")),1),(0,s._)("p",null,"Cout: "+(0,a.zw)(e.computeAptitudeCost()),1)])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}var u=i(2349);const o=(0,s.aZ)({props:{Aptitude:{type:Object,required:!0}},data(){return{openDetail:!1}},methods:{computeAptitudeCost(){return u.F.computeStabilityScore(this.Aptitude.Type.Nom,this.Aptitude.Effets,this.Aptitude.ExtensionsEffet)}}});var E=i(1639),c=i(490),l=i(1233),p=i(3115),N=i(9053),d=i(4458),I=i(3190),C=i(136),m=i(4455),T=i(1136),A=i(2146),O=i(9984),f=i.n(O);const D=(0,E.Z)(o,[["render",r]]),M=D;f()(o,"components",{QItem:c.Z,QItemSection:l.Z,QItemLabel:p.Z,QDialog:N.Z,QCard:d.Z,QCardSection:I.Z,QSpace:C.Z,QBtn:m.Z}),f()(o,"directives",{Ripple:T.Z,ClosePopup:A.Z})}}]);