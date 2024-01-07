import{d as _,i as k,r as n,o as v,f as x,w as t,a as p,b as a,p as l,t as d,h as C}from"./app.03d0793a.js";import h from"./PsModal.9e39943e.js";import S from"./PsLabel.f69ed5af.js";import w from"./PsButton.506f0d87.js";import $ from"./PsIcon.14101206.js";import{u as P}from"./AboutUsStore.7201bbaf.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-neat-modal.796ccbfb.js";import"./PsLine.baababc4.js";import"./PsApiService.ebe2eb3a.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";const T=_({name:"PsSafetyTipDialog",components:{PsModal:h,PsLabel:S,PsButton:w,PsIcon:$},setup(){const o=P();o.loadAboutUs("1");const e=k();let f,c;function m(i){i=="yes"?f():c(),e.value.toggle(!1)}function u(){e.value.toggle(!0)}function r(){e.value.toggle(!1)}return{aboutUsProvider:o,psmodal:e,openModal:u,actionClicked:m,close:r}}}),U={class:"flex justify-between shadow p-6 dark:bg-feSecondary-800"},D={class:"h-52 overflow-y-auto my-6 ps-6 pe-10"},M={class:"flex justify-end p-4 bg-feSecondary-100 dark:bg-feSecondary-800"};function N(o,e,f,c,m,u){const r=n("ps-label"),i=n("ps-icon"),b=n("ps-button"),g=n("ps-modal");return v(),x(g,{ref:"psmodal",maxWidth:"868px",line:"hidden",isClickOut:!1,theme:"rounded-lg shadow-xl overflow-hidden dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[p("div",U,[a(r,{textColor:"text-2xl font-semibold text-feSecondary-800 dark:text-feSecondary-000"},{default:t(()=>[l(d(o.$t("item_detail__safety_tips")),1)]),_:1}),a(i,{name:"close",class:"text-gray-400 hover:cursor-pointer",onClick:e[0]||(e[0]=C(s=>o.psmodal.toggle(!1),["prevent"]))})])]),body:t(()=>[p("div",D,[a(r,{class:"text-base font-normal text-secondary-700 dark:text-feSecondary-400"},{default:t(()=>{var s,y;return[l(d((y=(s=o.aboutUsProvider.aboutus)==null?void 0:s.data)==null?void 0:y.safetyTips),1)]}),_:1})])]),footer:t(()=>[p("div",M,[a(b,{onClick:e[1]||(e[1]=s=>o.close())},{default:t(()=>[l(d(o.$t("Close")),1)]),_:1}),a(b,{onClick:e[2]||(e[2]=s=>o.close()),class:"ms-4",colors:"bg-white dark:bg-gray-800 dark:text-gray-200 hover:text-white",border:"border border-gray-300 dark:border-gray-500"},{default:t(()=>[l(d(o.$t("Cancel")),1)]),_:1})])]),_:1},512)}var K=B(T,[["render",N]]);export{K as default};