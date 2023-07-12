"use strict";(globalThis["webpackChunknamtar_rules_vue"]=globalThis["webpackChunknamtar_rules_vue"]||[]).push([[620],{9620:(e,t,s)=>{s.r(t),s.d(t,{default:()=>be});var l=s(9835),a=s(6970);const i=(0,l._)("h4",{class:"text-center"},"Création d'aptitude",-1),n=(0,l._)("div",{class:"q-my-xl"},[(0,l._)("p",null," Les aptitudes représentent les talents ou les différentes techniques qu'utiliseront les personnages et les créatures dans tous les recoins de la galaxie. Certaines sont innées, d'autres acquises après de longues heures de pratiques. Les plus courantes sont les techniques apprises part l'expérience, d'autre plus rare sont intimement liée à l'utilisation du 'Fluide'. "),(0,l._)("p",null," Depuis l'apparition du fluide, les créatures sensibles à sa présence ont accès à l'énergie sombre qui constitue une part importante de l'univers. Il existe deux grandes écoles dans l'utilisation du fluide. La première consiste à devenir un catalyseur pour permettre à l'énergie sombre de produire ses effets. Cette méthode est la plus directe et la plus puissante. Elle demande une grande discipline de corps et d'esprit. La seconde joue sur l'empreinte au sein du fluide que toute créature possède. En perturbant cette empreinte, l'utilisateur peut manifester des effets sur sa cible. Plus polyvalente, cette école manipule des effets plus subtils. ")],-1),c=(0,l._)("p",null," Détermine comment l'utilisateur canalise l'énergie sombre avec le fluide. En fonction de la méthode, l'utilisateur produit un certain nombre de points de \"stabilité\" qui lui sera utile pour choisir les effets de l'aptitude. ",-1),o=(0,l._)("p",{class:"text-center text-overline"},"Selectionez un type d'aptitude",-1),r={class:"row q-col-gutter-sm justify-center"},d=(0,l._)("p",null," Une fois canalysée, l'énergie peut être dirigée vers un point, s'etendre homogènement depuis sa source, être projetée sur une cible... Certaines méthodes sont plus complexes que d'autre. ",-1),p=(0,l._)("p",{class:"text-center text-overline"},"Selectionez un vecteur",-1),u={class:"row q-col-gutter-sm justify-center"},m=(0,l._)("p",null," Chaque effet à un coût en stabilité. Une fois que le coût établit, le type d'aptitude (choisi précédemment) détermine ce que le lanceur doit investir pour réussir son aptitude. Tous les effets sont appliqués en même temps lorsque l'aptitude touche sa cible. ",-1),f={class:"row q-col-gutter-sm justify-center"},h=(0,l._)("p",null," Les extensions permettent de gagner en stabilité sous certaines contraintes. Elles peuvent aussi, à l'inverse, décupler les effets d'un sort au prix de points de stabilité. ",-1),g={class:"row q-col-gutter-sm justify-center"},y={class:"q-gutter-md"},A=(0,l._)("p",null," Decrivez précisement comment utiliser l'aptitude et ses effets. Vous devez restez cohérent avec les différentes caractéristiques choisies tout au long de sa création. ",-1),b={class:"text-h5 q-mt-sm q-mb-xs"},_={class:"text-caption q-mt-sm q-mb-xs"},v={class:"text-caption text-grey"},S={class:"text-caption text-grey"},k={class:"text-caption text-grey"},x={class:"text-caption text-grey"},w={class:"text-caption text-grey"},E={class:"text-caption text-grey"},q=(0,l._)("p",{class:"text-caption text-grey q-mt-md"}," L'aptitude ne peut pas être sauvegardée pour l'instant. Notez la sur un bout de papier :) ",-1);function N(e,t,s,N,C,W){const T=(0,l.up)("TypeAptitudeItem"),D=(0,l.up)("q-btn"),V=(0,l.up)("q-stepper-navigation"),R=(0,l.up)("q-step"),Z=(0,l.up)("VecteurItem"),z=(0,l.up)("EffetCard"),Q=(0,l.up)("ExtensionCard"),I=(0,l.up)("q-input"),j=(0,l.up)("q-stepper"),U=(0,l.up)("q-card-section"),H=(0,l.up)("q-separator"),B=(0,l.up)("q-card"),F=(0,l.up)("q-dialog"),$=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)($,{padding:""},{default:(0,l.w5)((()=>[i,n,(0,l.Wm)(j,{modelValue:e.step,"onUpdate:modelValue":t[11]||(t[11]=t=>e.step=t),vertical:"","header-nav":"",animated:"",class:"bg-secondary",flat:""},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{name:1,title:"Type",caption:"La source de l'aptitude",icon:"settings",done:null!=e.SelectedAptTypeName},{default:(0,l.w5)((()=>[c,o,(0,l._)("div",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.availableAptitudeTypes,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.Nom,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(0,l.Wm)(T,{Type:t,onIsSelected:s=>e.changeType(t),style:{height:"100%"},class:(0,a.C_)(t.Nom===e.SelectedAptTypeName?"bg-accent":"")},null,8,["Type","onIsSelected","class"])])))),128))]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{onClick:t[0]||(t[0]=t=>e.step=2),color:"primary",label:"Continue"})])),_:1})])),_:1},8,["done"]),(0,l.Wm)(R,{name:2,title:"Vecteur",caption:"La cible de l'aptitude",icon:"create_new_folder",done:null!=e.SelectedAptVecteur},{default:(0,l.w5)((()=>[d,p,(0,l._)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.availableAptitudeVecteur,(t=>{var s;return(0,l.wg)(),(0,l.iD)("div",{key:t.Nom,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(0,l.Wm)(Z,{Vecteur:t,onIsSelected:s=>e.SelectedAptVecteur=t,style:{height:"100%"},class:(0,a.C_)(t.Nom===(null===(s=e.SelectedAptVecteur)||void 0===s?void 0:s.Nom)?"bg-accent":"")},null,8,["Vecteur","onIsSelected","class"])])})),128))]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{onClick:t[1]||(t[1]=t=>e.step=null==e.SelectedAptTypeName?5:3),color:"primary",label:"Continue"}),(0,l.Wm)(D,{flat:"",onClick:t[2]||(t[2]=t=>e.step=1),color:"primary",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1},8,["done"]),(0,l.Wm)(R,{name:3,title:"Effets",caption:"Ce que l'aptitude applique",icon:"assignment",disable:null==e.SelectedAptTypeName,done:e.SelectedAptEffets.size>0},{default:(0,l.w5)((()=>[m,(0,l._)("div",f,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.availableEffets,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.Nom,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(0,l.Wm)(z,{style:{height:"100%"},Effet:t,Disabled:!t.IsCummulable&&e.SelectedAptEffets.has(t.Nom),Rank:e.SelectedAptEffets.get(t.Nom)||0,class:(0,a.C_)(e.SelectedAptEffets.has(t.Nom)?"bg-accent":""),onRankIncreased:s=>e.increaseEffetRank(t),onRankDecreased:s=>e.decreaseEffetRank(t)},null,8,["Effet","Disabled","Rank","class","onRankIncreased","onRankDecreased"])])))),128))]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{onClick:t[3]||(t[3]=t=>e.step=4),color:"primary",label:"Continue"}),(0,l.Wm)(D,{flat:"",onClick:t[4]||(t[4]=t=>e.step=2),color:"primary",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1},8,["disable","done"]),(0,l.Wm)(R,{name:4,title:"Extention",caption:"Des conditions optionnelles de matérialisation",icon:"add_comment",disable:null==e.SelectedAptTypeName,done:e.step>4},{default:(0,l.w5)((()=>[h,(0,l._)("div",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.availableExtensions,(t=>((0,l.wg)(),(0,l.iD)("div",{key:t.Nom,class:"col-lg-3 col-md-4 col-sm-6 col-12"},[(0,l.Wm)(Q,{style:{height:"100%"},Extension:t,Disabled:!t.IsCummulable&&e.SelectedAptExtensions.has(t.Nom),Rank:e.SelectedAptExtensions.get(t.Nom)||0,class:(0,a.C_)(e.SelectedAptExtensions.has(t.Nom)?"bg-accent":""),onRankIncreased:s=>e.increaseExtensionRank(t),onRankDecreased:s=>e.decreaseExtensionRank(t)},null,8,["Extension","Disabled","Rank","class","onRankIncreased","onRankDecreased"])])))),128))]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{onClick:t[5]||(t[5]=t=>e.step=5),color:"primary",label:"Continue"}),(0,l.Wm)(D,{flat:"",onClick:t[6]||(t[6]=t=>e.step=3),color:"primary",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1},8,["disable","done"]),(0,l.Wm)(R,{name:5,title:"Finalisation",caption:"Baptisez votre nouvelle aptitude",icon:"add_comment"},{default:(0,l.w5)((()=>[(0,l._)("div",y,[A,(0,l.Wm)(I,{outlined:"",modelValue:e.aptName,"onUpdate:modelValue":t[7]||(t[7]=t=>e.aptName=t),label:"Nom de l'aptitude"},null,8,["modelValue"]),(0,l.Wm)(I,{outlined:"",modelValue:e.aptDesc,"onUpdate:modelValue":t[8]||(t[8]=t=>e.aptDesc=t),label:"Description libre"},null,8,["modelValue"])]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{disable:!e.isAptValid,color:"primary",label:"Creer l'aptitude",onClick:t[9]||(t[9]=t=>e.showAtpCard=!0)},null,8,["disable"]),(0,l.Wm)(D,{flat:"",onClick:t[10]||(t[10]=t=>e.step=null==e.SelectedAptTypeName?2:4),color:"primary",label:"Back",class:"q-ml-sm"})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(F,{modelValue:e.showAtpCard,"onUpdate:modelValue":t[12]||(t[12]=t=>e.showAtpCard=t)},{default:(0,l.w5)((()=>[(0,l.Wm)(B,{flat:"",bordered:"",class:"bg-secondary"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",b,(0,a.zw)(e.aptName),1),(0,l._)("div",_," Description : "+(0,a.zw)(e.aptDesc),1),(0,l.Wm)(U,{horizontal:"",class:"bg-accent"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"col-6",vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",v,[(0,l.Uk)(" Type : "),(0,l._)("strong",null,(0,a.zw)(e.SelectedAptTypeName),1)]),(0,l._)("div",S,[(0,l.Uk)(" Vecteur : "),(0,l._)("strong",null,(0,a.zw)(e.SelectedAptVecteur&&e.SelectedAptVecteur.Nom),1)]),(0,l._)("div",k,[(0,l.Uk)(" Effet : "),(0,l._)("strong",null,(0,a.zw)(e.getSelectedEffetsWithRank()),1)]),(0,l._)("div",x,[(0,l.Uk)(" Extension : "),(0,l._)("strong",null,(0,a.zw)(e.getSelectedExtensionWithRank()),1)])])),_:1}),(0,l.Wm)(H,{vertical:"",inset:""}),(0,l.Wm)(U,{class:"col-6",vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l.Uk)(" Cout : "),(0,l._)("strong",null,(0,a.zw)(e.computeCost()),1)]),(0,l._)("div",E,[(0,l.Uk)(" Test à réaliser : "),(0,l._)("strong",null,(0,a.zw)(e.SelectedAptVecteur&&e.SelectedAptVecteur.Difficulte),1)])])),_:1})])),_:1}),q])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var C=s(499),W=s(2349);const T={class:"text-h5 q-mt-sm q-mb-xs"},D={class:"text-caption text-grey"};function V(e,t,s,i,n,c){const o=(0,l.up)("q-badge"),r=(0,l.up)("q-card-section"),d=(0,l.up)("q-btn"),p=(0,l.up)("q-card-actions"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"col-10",vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",T,(0,a.zw)(e.Effet.Nom),1),e.Rank&&e.Rank>0?((0,l.wg)(),(0,l.j4)(o,{key:0,color:"primary",floating:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.Rank),1)])),_:1})):(0,l.kq)("",!0),(0,l._)("div",D,(0,a.zw)(e.Effet.Description),1)])),_:1}),(0,l.Wm)(p,{vertical:"",class:"col-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{outline:"",color:"primary",icon:"add",onClick:e.increment,disable:e.Disabled,dimmed:e.Disabled},null,8,["onClick","disable","dimmed"]),(0,l.Wm)(d,{outline:"",color:"primary",onClick:e.decrement,icon:"remove"},null,8,["onClick"])])),_:1})])),_:1})])),_:1})}const R=(0,l.aZ)({props:{Effet:{type:Object,required:!0},Disabled:{type:Boolean,required:!1},Rank:{type:Number,required:!1}},emits:["rank-increased","rank-decreased"],methods:{increment(){this.$emit("rank-increased")},decrement(){this.$emit("rank-decreased")}}});var Z=s(1639),z=s(4458),Q=s(3190),I=s(990),j=s(1821),U=s(4455),H=s(9984),B=s.n(H);const F=(0,Z.Z)(R,[["render",V],["__scopeId","data-v-4d557cf0"]]),$=F;B()(R,"components",{QCard:z.Z,QCardSection:Q.Z,QBadge:I.Z,QCardActions:j.Z,QBtn:U.Z});const L={class:"text-h5 q-mt-sm q-mb-xs"},P={class:"text-caption text-grey"};function K(e,t,s,i,n,c){const o=(0,l.up)("q-card-section"),r=(0,l.up)("q-card"),d=(0,l.Q2)("ripple");return(0,l.wy)(((0,l.wg)(),(0,l.j4)(r,{flat:"",bordered:"",class:"cursor-pointer q-hoverable",onClick:t[0]||(t[0]=t=>e.$emit("is-selected"))},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",L,(0,a.zw)(e.Type.Nom),1),(0,l._)("div",P,(0,a.zw)(e.Type.Description),1),(0,l._)("div",null,(0,a.zw)(e.Type.DescriptionDetails),1)])),_:1})])),_:1})),[[d]])}const O=(0,l.aZ)({props:{Type:{type:Object,required:!0}},emits:["is-selected"]});var Y=s(1136);const M=(0,Z.Z)(O,[["render",K]]),G=M;B()(O,"components",{QCard:z.Z,QCardSection:Q.Z}),B()(O,"directives",{Ripple:Y.Z});const J={class:"text-h5 q-mt-sm q-mb-xs"},X={class:"text-caption text-grey"};function ee(e,t,s,i,n,c){const o=(0,l.up)("q-card-section"),r=(0,l.up)("q-card"),d=(0,l.Q2)("ripple");return(0,l.wy)(((0,l.wg)(),(0,l.j4)(r,{flat:"",bordered:"",onClick:t[0]||(t[0]=t=>e.$emit("is-selected")),class:"cursor-pointer q-hoverable"},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{vertical:""},{default:(0,l.w5)((()=>[(0,l._)("div",J,(0,a.zw)(e.Vecteur.Nom),1),(0,l._)("div",X,(0,a.zw)(e.Vecteur.Description),1),(0,l._)("div",null,"Action : "+(0,a.zw)(e.Vecteur.Difficulte),1)])),_:1})])),_:1})),[[d]])}const te=(0,l.aZ)({props:{Vecteur:{type:Object,required:!0}},data(){return{Selected:(0,C.iH)(!1)}},emits:["is-selected"]}),se=(0,Z.Z)(te,[["render",ee],["__scopeId","data-v-fe7d69aa"]]),le=se;B()(te,"components",{QCard:z.Z,QCardSection:Q.Z}),B()(te,"directives",{Ripple:Y.Z});const ae={class:"text-h5 q-mt-sm q-mb-xs"},ie={class:"text-caption text-grey"};function ne(e,t,s,i,n,c){const o=(0,l.up)("q-badge"),r=(0,l.up)("q-card-section"),d=(0,l.up)("q-btn"),p=(0,l.up)("q-card-actions"),u=(0,l.up)("q-card");return(0,l.wg)(),(0,l.j4)(u,{flat:"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{horizontal:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{vertical:"",class:"col-10"},{default:(0,l.w5)((()=>[(0,l._)("div",ae,[(0,l.Uk)((0,a.zw)(e.Extension.Nom)+" ",1),e.Rank&&e.Rank>0?((0,l.wg)(),(0,l.j4)(o,{key:0,color:"primary",floating:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,a.zw)(e.Rank),1)])),_:1})):(0,l.kq)("",!0)]),(0,l._)("div",ie,(0,a.zw)(e.Extension.Description),1)])),_:1}),(0,l.Wm)(p,{vertical:"",class:"col-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{outline:"",color:"primary",icon:"add",onClick:e.increment,disable:e.Disabled,dimmed:e.Disabled},null,8,["onClick","disable","dimmed"]),(0,l.Wm)(d,{outline:"",color:"primary",onClick:e.decrement,icon:"remove"},null,8,["onClick"])])),_:1})])),_:1})])),_:1})}const ce=(0,l.aZ)({props:{Extension:{type:Object,required:!0},Disabled:{type:Boolean,required:!1},Rank:{type:Number,required:!1}},emits:["rank-increased","rank-decreased"],methods:{increment(){this.$emit("rank-increased")},decrement(){this.$emit("rank-decreased")}}}),oe=(0,Z.Z)(ce,[["render",ne],["__scopeId","data-v-8fdeac68"]]),re=oe;B()(ce,"components",{QCard:z.Z,QCardSection:Q.Z,QBadge:I.Z,QCardActions:j.Z,QBtn:U.Z});const de=(0,l.aZ)({name:"AptitudeInfoPage",components:{EffetCard:$,ExtensionCard:re,VecteurItem:le,TypeAptitudeItem:G},data(){return{AptTypes:W.F.getAllTypes(),SelectedAptTypeName:(0,C.iH)(),SelectedAptVecteur:(0,C.iH)(),SelectedAptEffets:(0,C.iH)(new Map),SelectedAptExtensions:(0,C.iH)(new Map),aptName:(0,C.iH)(""),aptDesc:(0,C.iH)(""),step:(0,C.iH)(1),showAtpCard:(0,C.iH)(!1)}},computed:{availableAptitudeTypes(){return this.AptTypes.filter((e=>e.Nom!==W.V.MANTRA))},availableAptitudeVecteur(){return this.SelectedAptTypeName?W.F.getAllVecteur().filter((e=>e.TypesCompatibilities.includes(this.SelectedAptTypeName))):W.F.getAllVecteur()},availableEffets(){return this.SelectedAptTypeName?W.F.getAllEffect().filter((e=>e.StabiliteParTypeAptitude.has(this.SelectedAptTypeName))):W.F.getAllEffect()},availableExtensions(){return this.SelectedAptTypeName&&this.SelectedAptTypeName?W.F.getAllExtension().filter((e=>e.StabiliteParTypeAptitude.has(this.SelectedAptTypeName))):W.F.getAllExtension()},isAptValid(){return this.SelectedAptTypeName&&this.SelectedAptVecteur&&this.SelectedAptEffets.size>0&&this.aptName&&""!==this.aptName&&this.aptDesc&&""!==this.aptDesc}},methods:{getSelectedEffetsWithRank(){return Array.from(this.SelectedAptEffets.entries()).map((([e,t])=>`${e}(${t})`)).join(" - ")},increaseEffetRank(e){if(this.SelectedAptEffets.has(e.Nom)){const t=this.SelectedAptEffets.get(e.Nom);this.SelectedAptEffets.set(e.Nom,t+1)}else this.SelectedAptEffets.set(e.Nom,1)},decreaseEffetRank(e){if(!this.SelectedAptEffets.has(e.Nom))return;const t=this.SelectedAptEffets.get(e.Nom);1!==t?this.SelectedAptEffets.set(e.Nom,t-1):this.SelectedAptEffets.delete(e.Nom)},increaseExtensionRank(e){if(this.SelectedAptExtensions.has(e.Nom)){const t=this.SelectedAptExtensions.get(e.Nom);this.SelectedAptExtensions.set(e.Nom,t+1)}else this.SelectedAptExtensions.set(e.Nom,1)},decreaseExtensionRank(e){if(!this.SelectedAptExtensions.has(e.Nom))return;const t=this.SelectedAptExtensions.get(e.Nom);1!==t?this.SelectedAptExtensions.set(e.Nom,t-1):this.SelectedAptExtensions.delete(e.Nom)},getSelectedExtensionWithRank(){return Array.from(this.SelectedAptExtensions.entries()).map((([e,t])=>`${e}(${t})`)).join(" - ")},updateExtensionRank(e,t){0!==t?this.SelectedAptExtensions.set(e.Nom,t):this.SelectedAptExtensions.delete(e.Nom)},computeCost(){return this.SelectedAptTypeName&&Array.from(this.SelectedAptEffets.values()).length?W.F.printAptitudeCost(W.F.computeStabilityScore(this.SelectedAptTypeName,this.SelectedAptEffets,this.SelectedAptExtensions),this.SelectedAptTypeName):"Incomplet"},changeType(e){this.SelectedAptTypeName=e.Nom,this.SelectedAptVecteur=(0,C.iH)(),this.SelectedAptEffets.clear(),this.SelectedAptExtensions.clear()},getTypeDescription(e){var t;return null===(t=this.AptTypes.find((t=>t.Nom===e)))||void 0===t?void 0:t.Description}}});var pe=s(9885),ue=s(8225),me=s(6017),fe=s(1992),he=s(2543),ge=s(9053),ye=s(926);const Ae=(0,Z.Z)(de,[["render",N]]),be=Ae;B()(de,"components",{QPage:pe.Z,QStepper:ue.Z,QStep:me.Z,QStepperNavigation:fe.Z,QBtn:U.Z,QInput:he.Z,QDialog:ge.Z,QCard:z.Z,QCardSection:Q.Z,QSeparator:ye.Z})}}]);