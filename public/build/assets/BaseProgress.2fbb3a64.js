import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,a,l,n as r,u as d}from"./app.03d0793a.js";import"https://checkout.razorpay.com/v1/checkout.js";const i={name:"BaseProgress",inheritAttrs:!1,props:{color:{type:String,default:"bg-fePrimary-500 dark:bg-fePrimaryDark-accent"},percentage:{type:Number,default:0},rounded:{type:Boolean,default:!0},indeterminate:Boolean}},u=["aria-valuenow"],c={class:"flex items-center h-full"};function f(t,_,e,m,g,v){return n(),s("div",{class:r(["w-full bg-fePrimary-000 dark:bg-fePrimary-200 h-2 relative overflow-hidden",[{"rounded-full":e.rounded},{indeterminate:e.indeterminate}]])},[a("div",{class:r(["h-full progressbar",[`${e.color}`,{"absolute top-0":e.indeterminate},{"rounded-full":e.rounded}]]),role:"progressbar",style:d({width:`${e.percentage}%`}),"aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[a("span",c,[l(t.$slots,"default",{},void 0,!0)])],14,u)],2)}var b=o(i,[["render",f],["__scopeId","data-v-cce9ffa2"]]);export{b as default};
