import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as r,l as n,n as o}from"./app.03d0793a.js";import"https://checkout.razorpay.com/v1/checkout.js";const i={name:"PsCustomButton",props:{type:{type:String,default:"submit"},rounded:{type:String,default:"rounded"},colors:{type:String,default:"bg-feBackground dark:bg-feBackgroundDark text-feSecondary-800 dark:text-white"},padding:{type:String,default:"py-2 px-4"},border:{type:String,default:"border-none "},shadow:{type:String,default:"shadow-none"},textSize:{type:String,default:"text-sm "},justify:{type:String,default:"flex justify-center items-center "},hover:{type:String,default:"hover:outline-none dark:hover:text-feSecondary-800 dark:active:text-feSecondary-800  hover:bg-fePrimary-50 active:bg-fePrimary-200 dark:hover:bg-feSecondary-500 dark:active:bg-feSecondary-400"},focus:{type:String,default:" dark:focus:text-white focus:outline-none focus:bg-feBackground dark:focus:bg-feBackgroundDark focus:ring focus:ring-fePrimary-200"},cursor:{type:String,default:"cursor-pointer"},opacity:{type:String,default:"opacity-100"},disabled:{type:Boolean,default:!1}}},f=["type","disabled"];function u(t,c,e,l,s,y){return d(),r("button",{type:e.type,disabled:e.disabled,class:o([e.disabled?[e.rounded,e.padding,e.border,e.shadow,e.textSize,e.justify,"bg-feSecondary-100 text-feSecondary-300 dark:text-feSecondary-600 dark:bg-feSecondary-700 cursor-not-allowed opacity-90"]:[e.rounded,e.colors,e.padding,e.border,e.shadow,e.textSize,e.hover,e.focus,e.cursor,e.opacity,e.justify],"font-medium transition duration-150 ease-in-out"])},[n(t.$slots,"default")],10,f)}var k=a(i,[["render",u]]);export{k as default};
