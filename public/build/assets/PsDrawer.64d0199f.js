import{d as v,i as u,r as m,o as r,c as d,a,l as f,f as w,g as p,b as M,w as _,T as A}from"./app.89c3e968.js";import b from"./PsIcon.6adcaac0.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const h=v({components:{PsIcon:b},props:{isActive:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0}},setup(e){const o=u(e.isActive),n=u("downArrow");e.isActive&&(n.value="upArrow");function l(){o.value=!o.value}function i(t,s){n.value="upArrow"}function c(t,s){n.value="downArrow"}return{arrowIcon:n,activeMobileMenu:o,enter:i,leave:c,toggleMobileMenu:l}}}),k={class:"flex flex-col"},B={class:""},$={class:"mt-2"},y={key:0,class:"flex flex-col w-full"};function C(e,o,n,l,i,c){const t=m("ps-icon");return r(),d("div",k,[a("div",{class:"flex justify-between cursor-pointer",onClick:o[0]||(o[0]=(...s)=>e.toggleMobileMenu&&e.toggleMobileMenu(...s))},[a("div",B,[f(e.$slots,"title")]),e.showArrow?(r(),w(t,{key:0,name:e.arrowIcon,class:"me-4"},null,8,["name"])):p("",!0)]),a("div",$,[M(A,{onEnter:e.enter,onLeave:e.leave},{default:_(()=>[e.activeMobileMenu?(r(),d("div",y,[f(e.$slots,"content")])):p("",!0)]),_:3},8,["onEnter","onLeave"])])])}var L=g(h,[["render",C]]);export{L as default};