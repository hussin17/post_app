import{M as _}from"./vue-neat-modal.796ccbfb.js";import p from"./PsLine.baababc4.js";import{K as b,C as k,i as y,r,o as u,f as c,w as v,a as n,n as l,l as i,g as M}from"./app.03d0793a.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const h={name:"PsModal",components:{Modal:_,PsLine:p},props:{maxWidth:{type:String,default:"500px"},bodyHeight:{type:String,default:"max-h-80"},isBackdropRemoved:{type:Boolean,default:!1},isMotionDisabled:{type:Boolean,default:!1},isClickOut:{type:Boolean,default:!0},modalTransition:{type:String,default:"scale"},isFullscreen:{type:Boolean,default:!1},theme:{type:String,default:" p-6 border lg:rounded-2xl rounded-xl  "},line:{type:String,default:"mt-4 "},visibleLine:{type:Boolean,default:!0},posX:{type:String,default:"center"},posY:{type:String,default:"center"},classModal:{type:String,default:""}},setup(){const a=b();a.dispatch("loadIsDarkMode");const o=k(()=>a.getters.isDarkMode),e=y(!1);function t(d){e.value=d}function s(){return localStorage.activeLanguage!=null&&localStorage.activeLanguage!=null&&localStorage.activeLanguage=="ar"?"rtl":"ltr"}return{isOpen:e,toggle:t,store:a,isDarkMode:o,getDir:s}}},x=["dir"];function B(a,o,e,t,s,d){const m=r("ps-line"),f=r("Modal");return u(),c(f,{modelValue:t.isOpen,"onUpdate:modelValue":o[0]||(o[0]=g=>t.isOpen=g),fullscreen:e.isFullscreen,"modal-transition":e.modalTransition,"click-out":e.isClickOut,"disable-motion":e.isMotionDisabled,teleportTarget:"#mainbody","max-width":e.isFullscreen?void 0:e.maxWidth,"remove-backdrop":e.isBackdropRemoved,alignX:e.posX,alignY:e.posY,modalClass:e.classModal},{default:v(()=>[n("div",{class:l(t.isDarkMode?"dark":""),dir:t.getDir()},[n("div",{class:l([e.theme,"max-h-auto bg-background dark:bg-backgroundDark"])},[i(a.$slots,"title",{},void 0,!0),e.visibleLine?(u(),c(m,{key:0,class:l(["mb-4",e.line])},null,8,["class"])):M("",!0),n("div",{class:l(["mb-4",e.bodyHeight])},[i(a.$slots,"body",{},void 0,!0)],2),i(a.$slots,"footer",{},void 0,!0)],2)],10,x)]),_:3},8,["modelValue","fullscreen","modal-transition","click-out","disable-motion","max-width","remove-backdrop","alignX","alignY","modalClass"])}var w=S(h,[["render",B],["__scopeId","data-v-1b13c386"]]);export{w as default};
