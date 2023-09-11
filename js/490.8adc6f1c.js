"use strict";(globalThis["webpackChunknamtar_rules_vue"]=globalThis["webpackChunknamtar_rules_vue"]||[]).push([[490],{8490:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var r=i(9835),a=i(6970);const o=(0,r._)("h3",{class:"text-center"},"Creation de creature",-1),l={class:"row q-gutter-md justify-center"},s={class:"text-caption text-grey text-center"},u={class:"col-md-6 col-xs-4 text-h6 text-center"},c={class:"row justify-center items-baseline q-my-md"},n={class:"col"},m={class:"row justify-center"},d={class:"col"},p={class:"row q-gutter-md q-my-md"},C={class:"row q-ma-md"},w={class:"row q-col-gutter-sm justify-center items-stretch"},f=(0,r._)("div",{class:"text-overline"},"Selectionnez une aptitude",-1);function A(e,t,i,A,h,I){const g=(0,r.up)("q-btn"),E=(0,r.up)("q-card-section"),_=(0,r.up)("q-card"),y=(0,r.up)("q-chip"),S=(0,r.up)("q-select"),W=(0,r.up)("q-item-label"),b=(0,r.up)("q-item-section"),k=(0,r.up)("q-item"),q=(0,r.up)("q-list"),v=(0,r.up)("q-space"),N=(0,r.up)("AptitudeCard"),R=(0,r.up)("q-input"),H=(0,r.up)("q-scroll-area"),x=(0,r.up)("q-dialog"),V=(0,r.up)("q-page"),Z=(0,r.Q2)("close-popup");return(0,r.wg)(),(0,r.j4)(V,{padding:""},{default:(0,r.w5)((()=>[(0,r.Wm)(V,{padding:""},{default:(0,r.w5)((()=>[o,(0,r._)("div",l,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.Creature.Caracteristiques.entries(),(([t,i])=>((0,r.wg)(),(0,r.iD)("div",{key:i,class:"col-md-2 col-sm-4"},[(0,r.Wm)(_,{style:{height:"100%"},flat:"",class:"bg-accent"},{default:(0,r.w5)((()=>[(0,r.Wm)(E,null,{default:(0,r.w5)((()=>[(0,r._)("p",s,(0,a.zw)(t),1),(0,r.Wm)(E,{horizontal:"",class:"row justify-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,{class:"col-md-3 col-xs-4",flat:"",color:"primary",icon:"remove",onClick:i=>e.updateCaracRank(t,-1)},null,8,["onClick"]),(0,r._)("p",u,(0,a.zw)(i),1),(0,r.Wm)(g,{class:"col-md-3 col-xs-4",flat:"",color:"primary",icon:"add",onClick:i=>e.updateCaracRank(t,1)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])))),128))]),(0,r._)("div",c,[(0,r._)("div",n,[(0,r._)("div",m,[(0,r.Wm)(y,{color:"primary","text-color":"white",icon:e.getAttributeIcon(e.AttributsName.PV),outline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.AttributsName.PV)+" : "+(0,a.zw)(e.Creature.computePoolPV()),1)])),_:1},8,["icon"]),(0,r.Wm)(y,{color:"primary","text-color":"white",icon:e.getAttributeIcon(e.AttributsName.RESILIENCE),outline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.AttributsName.RESILIENCE)+" : "+(0,a.zw)(e.Creature.computePoolResilience()),1)])),_:1},8,["icon"]),(0,r.Wm)(y,{color:"primary","text-color":"white",icon:e.getAttributeIcon(e.AttributsName.REFLEXES),outline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.AttributsName.REFLEXES)+" : "+(0,a.zw)(e.Creature.computePoolReflexes()),1)])),_:1},8,["icon"]),(0,r.Wm)(y,{color:"primary","text-color":"white",icon:e.getAttributeIcon(e.AttributsName.INITIATIVE),outline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.AttributsName.INITIATIVE)+" : "+(0,a.zw)(e.Creature.computePoolInitiative()),1)])),_:1},8,["icon"]),(0,r.Wm)(y,{color:"primary","text-color":"white",icon:e.getAttributeIcon(e.AttributsName.STRESS),outline:""},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(e.AttributsName.STRESS)+" : "+(0,a.zw)(e.Creature.computePoolStress()),1)])),_:1},8,["icon"])])]),(0,r._)("div",d,[(0,r._)("div",p,[(0,r.Wm)(S,{dense:"",outlined:"",class:"col-8",modelValue:e.CompetenceSelected,"onUpdate:modelValue":t[0]||(t[0]=t=>e.CompetenceSelected=t),label:"Ajouter une compétence",options:e.availableCompetence},null,8,["modelValue","options"]),(0,r.Wm)(g,{class:"col-md-3",flat:"",color:"primary",icon:"add",onClick:t[1]||(t[1]=t=>e.addCompetenceRank1())})]),(0,r.Wm)(q,{bordered:"",separator:""},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.Creature.Competences.entries(),(([t,i])=>((0,r.wg)(),(0,r.j4)(k,{key:t},{default:(0,r.w5)((()=>[(0,r.Wm)(b,null,{default:(0,r.w5)((()=>[(0,r.Wm)(W,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(t)+" : "+(0,a.zw)(i),1)])),_:2},1024)])),_:2},1024),(0,r.Wm)(b,{side:""},{default:(0,r.w5)((()=>[(0,r.Wm)(W,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,{flat:"",color:"primary",icon:"remove",onClick:i=>e.updateCompRank(t,-1)},null,8,["onClick"]),(0,r.Wm)(g,{flat:"",color:"primary",icon:"add",onClick:i=>e.updateCompRank(t,1)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])]),(0,r._)("div",C,[(0,r.Wm)(g,{outline:"",class:"col-4",onClick:t[2]||(t[2]=t=>e.OpenDialApt=!0),label:"Ajouter une aptitude",icon:"add"}),(0,r.Wm)(v,{class:"col-8"})]),(0,r._)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.creatureAptitudes,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.Nom,class:"col-12 col-md-4 col-xl-3"},[(0,r.Wm)(N,{style:{height:"100%"},Aptitude:e},null,8,["Aptitude"])])))),128))]),(0,r.Wm)(x,{modelValue:e.OpenDialApt,"onUpdate:modelValue":t[3]||(t[3]=t=>e.OpenDialApt=t)},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{style:{width:"600px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(E,{class:"row items-center q-pb-none"},{default:(0,r.w5)((()=>[f,(0,r.Wm)(v),(0,r.wy)((0,r.Wm)(g,{icon:"close",flat:"",round:"",dense:""},null,512),[[Z]])])),_:1}),(0,r.Wm)(E,null,{default:(0,r.w5)((()=>[(0,r.Wm)(R,{dense:"",outlined:"",modelValue:e.AptSearch,label:"rechercher..."},null,8,["modelValue"])])),_:1}),(0,r.Wm)(E,null,{default:(0,r.w5)((()=>[(0,r.Wm)(H,{style:{height:"500px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.aptFiltered,(e=>((0,r.wg)(),(0,r.j4)(N,{key:e.Nom,Aptitude:e,class:"q-my-md"},null,8,["Aptitude"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}var h=i(499),I=i(778),g=i(3916),E=i(930);class _{constructor(){this.Nom="Creature inconnue",this.NiveauEffectif=1,this.Caracteristiques=new Map([[E.H.VIGUEUR,0],[E.H.AGILITE,0],[E.H.ADRESSE,0],[E.H.INTELLIGENCE,0],[E.H.CHARISME,0]]),this.Competences=new Map([]),this.Genotraits=new Map([]),this.Aptitudes=new Set([])}computePoolPV(){return`${(this.Caracteristiques.get(E.H.VIGUEUR)||0)+4+Array.from(this.Genotraits.entries()).map((([e,t])=>(e.Modificateurs.get(g.I.PV)||0)*t)).reduce(((e,t)=>e+t),0)} + ${this.NiveauEffectif}d4`}computePoolResilience(){return(this.Caracteristiques.get(E.H.VIGUEUR)||0)+Array.from(this.Genotraits.entries()).map((([e,t])=>(e.Modificateurs.get(g.I.RESILIENCE)||0)*t)).reduce(((e,t)=>e+t),0)}computePoolReflexes(){return(this.Caracteristiques.get(E.H.AGILITE)||0)+Array.from(this.Genotraits.entries()).map((([e,t])=>(e.Modificateurs.get(g.I.REFLEXES)||0)*t)).reduce(((e,t)=>e+t),0)}computePoolInitiative(){return(this.Caracteristiques.get(E.H.AGILITE)||0)+Array.from(this.Genotraits.entries()).map((([e,t])=>(e.Modificateurs.get(g.I.INITIATIVE)||0)*t)).reduce(((e,t)=>e+t),0)}computePoolStress(){return(this.Caracteristiques.get(E.H.INTELLIGENCE)||0)+(this.Caracteristiques.get(E.H.CHARISME)||0)+Array.from(this.Genotraits.entries()).map((([e,t])=>(e.Modificateurs.get(g.I.STRESS)||0)*t)).reduce(((e,t)=>e+t),0)}}var y=i(303),S=i(6348);const W=(0,r.aZ)({components:{AptitudeCard:I.Z},data(){return{AttributsName:g.I,Creature:new _,CompetenceSelected:(0,h.iH)(),OpenDialApt:(0,h.iH)(!1),AptSearch:(0,h.iH)(""),Apt:S.FW.findAllAptitudes().filter(((e,t)=>t<4))}},computed:{availableCompetence(){return y._.getAllCompetences().filter((e=>!Array.from(this.Creature.Competences.keys()).includes(e.Nom))).map((e=>e.Nom))},creatureAptitudes(){return S.FW.findAptitudesByNames(Array.from(this.Creature.Aptitudes.values()))},aptFiltered(){return S.FW.findAllAptitudes().filter((e=>!this.Creature.Aptitudes.has(e.Nom)))}},methods:{updateCaracRank(e,t){const i=this.Creature.Caracteristiques.get(e);void 0!==i&&this.Creature.Caracteristiques.set(e,i+t)},addCompetenceRank1(){const e=y._.getAllCompetences().find((e=>e.Nom===this.CompetenceSelected));e&&(this.Creature.Competences.set(null===e||void 0===e?void 0:e.Nom,1),this.CompetenceSelected=(0,h.iH)())},updateCompRank(e,t){const i=this.Creature.Competences.get(e);void 0!==i&&(i+t!=0?this.Creature.Competences.set(e,i+t):this.Creature.Competences.delete(e))},getAttributeIcon(e){return g.i.findAttributeIcon(e)}}});var b=i(1639),k=i(9885),q=i(4458),v=i(3190),N=i(4455),R=i(7691),H=i(215),x=i(3246),V=i(490),Z=i(1233),P=i(3115),z=i(136),T=i(2074),L=i(6611),Q=i(6663),G=i(2146),U=i(9984),D=i.n(U);const j=(0,b.Z)(W,[["render",A]]),M=j;D()(W,"components",{QPage:k.Z,QCard:q.Z,QCardSection:v.Z,QBtn:N.Z,QChip:R.Z,QSelect:H.Z,QList:x.Z,QItem:V.Z,QItemSection:Z.Z,QItemLabel:P.Z,QSpace:z.Z,QDialog:T.Z,QInput:L.Z,QScrollArea:Q.Z}),D()(W,"directives",{ClosePopup:G.Z})}}]);