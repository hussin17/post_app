import v from"./PsModal.9e39943e.js";import b from"./PsLabel.f69ed5af.js";import y from"./PsButton.506f0d87.js";import{d as S,i as a,J as p,r as _,o as C,f as h,w as t,a as n,b as f,p as m,t as u}from"./app.03d0793a.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.796ccbfb.js";import"./PsLine.baababc4.js";import"https://checkout.razorpay.com/v1/checkout.js";const w=S({components:{PsModal:v,PsLabel:b,PsButton:y},setup(){const e=a(),s=a(p("ps_success_dialog__success")),l=a(p("ps_success_dialog__success_message")),c=a(p("ps_confirm_dialog__yes"));let r;function g(){r(),e.value.toggle(!1)}function o(i,d,x,k){s.value=i,l.value=d.toString(),c.value=x,e.value.toggle(!0),r=k}return{psmodal:e,title:s,message:l,openModal:o,actionClicked:g,okButton:c}}}),$={class:"w-full"},P={class:"w-full mt-4"},N={class:"flex justify-end mt-8"},V={class:"flex-grow-0"};function z(e,s,l,c,r,g){const o=_("ps-label"),i=_("ps-button"),d=_("ps-modal");return C(),h(d,{ref:"psmodal",line:"hidden",maxWidth:"472px",isClickOut:!1,theme:"p-6 rounded-lg dark:bg-feSecondary-800",class:"z-20"},{title:t(()=>[n("div",$,[f(o,{class:"font-semibold text-xl text-feSecondary-800 dark:text-feSecondary-200"},{default:t(()=>[m(u(e.title),1)]),_:1})])]),body:t(()=>[n("div",P,[f(o,{class:"text-base font-normal text-feSecondary-700 dark:text-feSecondary-300"},{default:t(()=>[m(u(e.message),1)]),_:1})])]),footer:t(()=>[n("div",N,[n("div",V,[f(i,{onClick:s[0]||(s[0]=x=>e.actionClicked()),textSize:"text-xxs lg:text-sm",class:"py-3"},{default:t(()=>[m(u(e.okButton),1)]),_:1})])])]),_:1},512)}var q=B(w,[["render",z]]);export{q as default};
