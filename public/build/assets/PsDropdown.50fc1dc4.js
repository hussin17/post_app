import{i as c,j as m,k as p,o as d,c as f,a as i,l as s,b as h,w as k,n as u,g as x,T as y}from"./app.af382b17.js";import{P as w}from"./PsValueStore.b4213564.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const b={name:"PsDropdown",props:{horizontalAlign:{type:String,default:"left"},h:{type:String,default:" h-36"},isPopup:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},boxPositioning:{type:String,default:""}},emits:["on-click"],setup(n,{emit:o}){const t=w(),e=c(!1);function a(){e.value&&(e.value=!e.value)}const r=c();function l(v){r.value.contains(v.target)||a()}m(()=>{document.addEventListener("click",l)}),p(()=>{document.removeEventListener("click",l)});function g(){e.value=!e.value,o("on-click")}return{isMenuOpen:e,dropdown:r,hide:a,clicked:g,psValueStore:t}}},P={class:"relative inline-block text-left text-feSecondary-500",ref:"dropdown"},B={class:"flex flex-col"},S={class:"overflow-hidden"},z={class:"relative"};function C(n,o,t,e,a,r){return d(),f("div",P,[i("div",{onClick:o[0]||(o[0]=(...l)=>e.clicked&&e.clicked(...l))},[s(n.$slots,"select")]),h(y,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:k(()=>[e.isMenuOpen?(d(),f("div",{key:0,class:u(["rounded shadow-lg text-sm overflow-hidden z-20 bg-feBackground dark:bg-feBackgroundDark",[t.horizontalAlign=="right"?"ltr:origin-top-right ltr:right-0 rtl:origin-top-left rtl:left-0":t.horizontalAlign=="left"?"ltr:origin-top-left ltr:left-0 rtl:origin-top-right rtl:right-0":"ltr:origin-top-right ltr:right-0 rtl:origin-top-right rtl:right-0",t.isPopup?"bottom-12":"mt-2",t.isFixed?`fixed ${t.boxPositioning}`:`absolute ${t.boxPositioning}`]])},[i("div",B,[i("div",S,[s(n.$slots,"filter")]),i("div",{class:u(["overflow-y-auto overflow-x-hidden",t.h])},[i("div",z,[i("div",{onClick:o[1]||(o[1]=l=>e.isMenuOpen=!e.isMenuOpen)},[s(n.$slots,"list")]),s(n.$slots,"loadmore")])],2)])],2)):x("",!0)]),_:3})],512)}var D=_(b,[["render",C]]);export{D as default};