"use strict";(globalThis["webpackChunknamtar_rules_vue"]=globalThis["webpackChunknamtar_rules_vue"]||[]).push([[875],{9875:(e,t,s)=>{s.r(t),s.d(t,{default:()=>le});var n=s(9835),c=s(6970);const a=(0,n._)("h3",{class:"text-center"},"Aptitude",-1),l=(0,n._)("div",{class:"text-h5 q-mt-sm q-mb-xs"},"Nouvelle Aptitude",-1),i={class:"text-caption text-grey"},o={class:"text-caption text-grey"},r={class:"text-caption text-grey"},d={class:"text-caption text-grey"},u={class:"text-caption text-grey"},m={class:"text-caption text-grey"},p={class:"row q-col-gutter-sm justify-center"},f={class:"row q-col-gutter-sm justify-center"},h={class:"row q-col-gutter-sm justify-center"},E={class:"row q-col-gutter-sm justify-center"};function S(e,t,s,S,x,y){const b=(0,n.up)("q-card-section"),_=(0,n.up)("q-card"),g=(0,n.up)("q-tab"),w=(0,n.up)("q-tabs"),v=(0,n.up)("TypeAptitudeItem"),k=(0,n.up)("q-tab-panel"),T=(0,n.up)("VecteurItem"),q=(0,n.up)("EffetCard"),C=(0,n.up)("ExtensionCard"),W=(0,n.up)("q-tab-panels"),N=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(N,{padding:""},{default:(0,n.w5)((()=>[a,(0,n.Wm)(_,{class:"bg-accent",flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"col-6",vertical:""},{default:(0,n.w5)((()=>[l,(0,n._)("div",i,[(0,n.Uk)(" Type : "),(0,n._)("strong",null,(0,c.zw)(e.SelectedType),1)]),(0,n._)("div",o,[(0,n.Uk)(" Vecteur : "),(0,n._)("strong",null,(0,c.zw)(e.SelectedVecteur&&e.SelectedVecteur.Nom),1)]),(0,n._)("div",r,[(0,n.Uk)(" Effet : "),(0,n._)("strong",null,(0,c.zw)(e.getSelectedEffectsWithRank()),1)]),(0,n._)("div",d,[(0,n.Uk)(" Extension : "),(0,n._)("strong",null,(0,c.zw)(e.getSelectedExtensionWithRank()),1)])])),_:1}),(0,n.Wm)(b,{class:"col-6",vertical:""},{default:(0,n.w5)((()=>[(0,n._)("div",u,[(0,n.Uk)(" Cout : "),(0,n._)("strong",null,(0,c.zw)(e.computeCost()),1)]),(0,n._)("div",m,[(0,n.Uk)(" Test à réaliser : "),(0,n._)("strong",null,(0,c.zw)(e.SelectedVecteur&&e.SelectedVecteur.Difficulte),1)])])),_:1})])),_:1})])),_:1}),(0,n.Wm)(w,{modelValue:e.SelectedTab,"onUpdate:modelValue":t[0]||(t[0]=t=>e.SelectedTab=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(g,{name:"Type",label:"Types"}),(0,n.Wm)(g,{name:"Vecteur",label:"Vecteur"}),(0,n.Wm)(g,{name:"Effet",label:"Effets"}),(0,n.Wm)(g,{name:"Extension",label:"Extension d'effet"})])),_:1},8,["modelValue"]),(0,n.Wm)(W,{class:"bg-transparent",modelValue:e.SelectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.SelectedTab=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(k,{name:"Type"},{default:(0,n.w5)((()=>[(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.TypesAptitude,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.Nom,class:"col-12"},[(0,n.Wm)(v,{Type:t,onIsSelected:s=>e.changeType(t)},null,8,["Type","onIsSelected"])])))),128))])])),_:1}),(0,n.Wm)(k,{name:"Vecteur"},{default:(0,n.w5)((()=>[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.Vecteurs,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.Nom,class:"col-12"},[(0,n.Wm)(T,{Vecteur:t,onIsSelected:s=>e.SelectedVecteur=t},null,8,["Vecteur","onIsSelected"])])))),128))])])),_:1}),(0,n.Wm)(k,{name:"Effet"},{default:(0,n.w5)((()=>[(0,n._)("div",h,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.availableEffects,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.Nom,class:"col-12"},[(0,n.Wm)(q,{Effet:t,onRankIncreased:s=>e.increaseEffectRank(t),onRankDecreased:s=>e.decreaseEffectRank(t),Disabled:!t.IsCummulable&&e.SelectedEffects.has(t.Nom)},null,8,["Effet","onRankIncreased","onRankDecreased","Disabled"])])))),128))])])),_:1}),(0,n.Wm)(k,{name:"Extension"},{default:(0,n.w5)((()=>[(0,n._)("div",E,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.availableExtensions,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.Nom,class:"col-12"},[(0,n.Wm)(C,{Extension:t,onRankIncreased:s=>e.increaseExtensionRank(t),onRankDecreased:s=>e.decreaseExtensionRank(t),Disabled:!t.IsCummulable&&e.SelectedExtension.has(t.Nom)},null,8,["Extension","onRankIncreased","onRankDecreased","Disabled"])])))),128))])])),_:1})])),_:1},8,["modelValue"])])),_:1})}var x=s(499),y=s(2349);const b={class:"text-h5 q-mt-sm q-mb-xs"},_={class:"text-caption text-grey"};function g(e,t,s,a,l,i){const o=(0,n.up)("q-card-section"),r=(0,n.up)("q-btn"),d=(0,n.up)("q-card-actions"),u=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(u,{flat:"",class:(0,c.C_)([e.Disabled?"transparent":"","bg-secondary"])},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{class:"col-10",vertical:""},{default:(0,n.w5)((()=>[(0,n._)("div",b,(0,c.zw)(e.Effet.Nom),1),(0,n._)("div",_,(0,c.zw)(e.Effet.Description),1)])),_:1}),(0,n.Wm)(d,{vertical:"",class:"col-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{flat:"",round:"",onClick:e.increment,disable:e.Disabled,icon:"add"},null,8,["onClick","disable"]),(0,n.Wm)(r,{flat:"",round:"",onClick:e.decrement,icon:"remove"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["class"])}const w=(0,n.aZ)({props:{Effet:{type:Object,required:!0},Disabled:{type:Boolean,required:!1}},emits:["rank-increased","rank-decreased"],methods:{increment(){this.$emit("rank-increased")},decrement(){this.$emit("rank-decreased")}}});var v=s(1639),k=s(4458),T=s(3190),q=s(1821),C=s(4455),W=s(9984),N=s.n(W);const Z=(0,v.Z)(w,[["render",g],["__scopeId","data-v-ec8699d0"]]),D=Z;N()(w,"components",{QCard:k.Z,QCardSection:T.Z,QCardActions:q.Z,QBtn:C.Z});const V={class:"text-h5 q-mt-sm q-mb-xs"},R={class:"text-caption text-grey"},A={class:""};function Q(e,t,s,a,l,i){const o=(0,n.up)("q-card-section"),r=(0,n.up)("q-card"),d=(0,n.Q2)("ripple");return(0,n.wy)(((0,n.wg)(),(0,n.j4)(r,{flat:"",onClick:t[0]||(t[0]=t=>e.$emit("is-selected")),class:"cursor-pointer q-hoverable bg-secondary"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{vertical:""},{default:(0,n.w5)((()=>[(0,n._)("div",V,(0,c.zw)(e.Type.Nom),1),(0,n._)("div",R,(0,c.zw)(e.Type.Description),1),(0,n._)("div",A,(0,c.zw)(e.Type.DescriptionDetails),1)])),_:1})])),_:1})),[[d]])}const z=(0,n.aZ)({props:{Type:{type:Object,required:!0}},emits:["is-selected"]});var I=s(1136);const j=(0,v.Z)(z,[["render",Q]]),H=j;N()(z,"components",{QCard:k.Z,QCardSection:T.Z}),N()(z,"directives",{Ripple:I.Z});const $={class:"text-h5 q-mt-sm q-mb-xs"},F={class:"text-caption text-grey"};function U(e,t,s,a,l,i){const o=(0,n.up)("q-card-section"),r=(0,n.up)("q-card"),d=(0,n.Q2)("ripple");return(0,n.wy)(((0,n.wg)(),(0,n.j4)(r,{flat:"",onClick:t[0]||(t[0]=t=>e.$emit("is-selected")),class:"cursor-pointer q-hoverable bg-secondary"},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{vertical:""},{default:(0,n.w5)((()=>[(0,n._)("div",$,(0,c.zw)(e.Vecteur.Nom),1),(0,n._)("div",F,(0,c.zw)(e.Vecteur.Description),1),(0,n._)("div",null,"Action : "+(0,c.zw)(e.Vecteur.Difficulte),1)])),_:1})])),_:1})),[[d]])}const P=(0,n.aZ)({props:{Vecteur:{type:Object,required:!0}},data(){return{Selected:(0,x.iH)(!1)}},emits:["is-selected"]}),B=(0,v.Z)(P,[["render",U],["__scopeId","data-v-4113e1f0"]]),K=B;N()(P,"components",{QCard:k.Z,QCardSection:T.Z}),N()(P,"directives",{Ripple:I.Z});const O={class:"text-h5 q-mt-sm q-mb-xs"},Y={class:"text-caption text-grey"};function M(e,t,s,a,l,i){const o=(0,n.up)("q-card-section"),r=(0,n.up)("q-btn"),d=(0,n.up)("q-card-actions"),u=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(u,{flat:"",class:(0,c.C_)([e.Disabled?"transparent":"","bg-secondary"])},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{horizontal:""},{default:(0,n.w5)((()=>[(0,n.Wm)(o,{vertical:"",class:"col-10"},{default:(0,n.w5)((()=>[(0,n._)("div",O,(0,c.zw)(e.Extension.Nom),1),(0,n._)("div",Y,(0,c.zw)(e.Extension.Description),1)])),_:1}),(0,n.Wm)(d,{vertical:"",class:"col-2"},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{flat:"",round:"",onClick:e.increment,disable:e.Disabled,icon:"add"},null,8,["onClick","disable"]),(0,n.Wm)(r,{flat:"",round:"",onClick:e.decrement,icon:"remove"},null,8,["onClick"])])),_:1})])),_:1})])),_:1},8,["class"])}const G=(0,n.aZ)({props:{Extension:{type:Object,required:!0},Disabled:{type:Boolean,required:!1}},emits:["rank-increased","rank-decreased"],methods:{increment(){this.$emit("rank-increased")},decrement(){this.$emit("rank-decreased")}}}),J=(0,v.Z)(G,[["render",M],["__scopeId","data-v-358e06a6"]]),L=J;N()(G,"components",{QCard:k.Z,QCardSection:T.Z,QCardActions:q.Z,QBtn:C.Z});const X=(0,n.aZ)({name:"AptitudeInfoPage",components:{TypeAptitudeItem:H,VecteurItem:K,EffetCard:D,ExtensionCard:L},data(){return{SelectedTab:(0,x.iH)("Type"),TypesAptitude:y.F.getAllTypes(),Vecteurs:y.F.getAllVecteur(),SelectedType:(0,x.iH)(),SelectedVecteur:(0,x.iH)(),SelectedEffects:(0,x.iH)(new Map),SelectedExtension:(0,x.iH)(new Map)}},computed:{availableEffects(){return this.SelectedType?y.F.getAllEffect().filter((e=>e.StabiliteParTypeAptitude.has(this.SelectedType))):y.F.getAllEffect()},availableExtensions(){return this.SelectedType&&this.SelectedType?y.F.getAllExtension().filter((e=>e.StabiliteParTypeAptitude.has(this.SelectedType))):y.F.getAllExtension()}},methods:{getSelectedEffectsWithRank(){return Array.from(this.SelectedEffects.entries()).map((([e,t])=>`${e}(${t})`)).join(" - ")},increaseEffectRank(e){if(this.SelectedEffects.has(e.Nom)){const t=this.SelectedEffects.get(e.Nom);this.SelectedEffects.set(e.Nom,t+1)}else this.SelectedEffects.set(e.Nom,1)},decreaseEffectRank(e){if(!this.SelectedEffects.has(e.Nom))return;const t=this.SelectedEffects.get(e.Nom);1!==t?this.SelectedEffects.set(e.Nom,t-1):this.SelectedEffects.delete(e.Nom)},increaseExtensionRank(e){if(this.SelectedExtension.has(e.Nom)){const t=this.SelectedExtension.get(e.Nom);this.SelectedExtension.set(e.Nom,t+1)}else this.SelectedExtension.set(e.Nom,1)},decreaseExtensionRank(e){if(!this.SelectedExtension.has(e.Nom))return;const t=this.SelectedExtension.get(e.Nom);1!==t?this.SelectedExtension.set(e.Nom,t-1):this.SelectedExtension.delete(e.Nom)},getSelectedExtensionWithRank(){return Array.from(this.SelectedExtension.entries()).map((([e,t])=>`${e}(${t})`)).join(" - ")},updateExtensionRank(e,t){0!==t?this.SelectedExtension.set(e.Nom,t):this.SelectedExtension.delete(e.Nom)},computeCost(){return this.SelectedType&&Array.from(this.SelectedEffects.values()).length?y.F.printAptitudeCost(y.F.computeStabilityScore(this.SelectedType,this.SelectedEffects,this.SelectedExtension),this.SelectedType):"Incomplet"},changeType(e){this.SelectedType=e.Nom,this.SelectedEffects.clear(),this.SelectedExtension.clear()}}});var ee=s(9885),te=s(2230),se=s(7661),ne=s(9800),ce=s(4106);const ae=(0,v.Z)(X,[["render",S]]),le=ae;N()(X,"components",{QPage:ee.Z,QCard:k.Z,QCardSection:T.Z,QTabs:te.Z,QTab:se.Z,QTabPanels:ne.Z,QTabPanel:ce.Z})}}]);