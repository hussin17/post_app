import{P}from"./PsModal.95640547.js";import{P as b}from"./PsLabel.43555620.js";import{P as B}from"./PsButton.a8f09858.js";import{d as $,i as s,J as g,r as l,o as h,f as k,w as t,g as N,a as c,b as r,p as x,t as v}from"./app.af382b17.js";import{P as S}from"./PsIcon.25e3c482.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const j=$({components:{PsModal:P,PsLabel:b,PsButton:B,PsIcon:S},setup(){const e=s(),o=s(g("ps_success_dialog__success")),i=s(g("ps_success_dialog__success_message")),u=s(g("ps_confirm_dialog__yes"));let d;const m=s(!0);function n(){d(),e.value.toggle(!1)}function a(){e.value.toggle(!1)}function p(f,_,y,w,C=!0){o.value=f,i.value=_.toString(),u.value=y,e.value.toggle(!0),d=w,m.value=C}return{psmodal:e,title:o,message:i,openModal:p,actionClicked:n,okButton:u,close:a,showIcon:m}}}),I={class:"flex flex-col text-center justify-center items-center text-gray-300"},z={class:"w-full text-center mt-4"},D={class:"flex justify-center mt-6"},M={class:"flex-grow-0"};function J(e,o,i,u,d,m){const n=l("ps-icon"),a=l("ps-label"),p=l("ps-button"),f=l("ps-modal");return h(),k(f,{ref:"psmodal",maxWidth:"450px",line:"hidden",isClickOut:!1,theme:" px-6 py-7 rounded-lg shadow-xl",class:"z-20"},{title:t(()=>[e.showIcon?(h(),k(n,{key:0,onClick:o[0]||(o[0]=_=>e.close()),name:"close",class:"text-sm text-secondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"})):N("",!0),c("div",I,[r(n,{class:"flex-grow-0",name:"checkCircle",w:"86",h:"86"}),r(a,{class:"font-medium text-xl lg:text-2xl mt-3"},{default:t(()=>[x(v(e.title),1)]),_:1})])]),body:t(()=>[c("div",z,[r(a,{class:"font-light text-sm text-secondary-700 lg:text-base"},{default:t(()=>[x(v(e.message),1)]),_:1})])]),footer:t(()=>[c("div",D,[c("div",M,[r(p,{rounded:"rounded",onClick:o[1]||(o[1]=_=>e.actionClicked()),textSize:"text-sm",class:"",colors:"bg-primary-500 text-white",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-300"},{default:t(()=>[x(v(e.okButton),1)]),_:1})])])]),_:1},512)}var E=V(j,[["render",J]]);export{E as P};