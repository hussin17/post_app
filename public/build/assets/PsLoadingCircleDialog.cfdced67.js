import x from"./PsModal.3bf2e071.js";import b from"./PsLabel.6f218a30.js";import v from"./PsLoading.8fe07a31.js";import{d as h,i as n,J as m,r as l,o as y,f as P,w as a,a as _,b as i,p as f,t as u}from"./app.94623934.js";import w from"./PsButton.3558548a.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";const B=h({components:{PsModal:x,PsLabel:b,PsLoading:v,PsButton:w},setup(){const e=n(),r=n(m("ps_loading_dialog__please_wait")),t=n(m("ps_loading_dialog__loading"));function c(o,s){r.value=o,t.value=s,e.value.toggle(!0)}function d(){e.value.toggle(!1)}function p(o){t.value=o}return{psmodal:e,openModal:c,closeModal:d,message:t,setMessage:p,title:r}}}),M={class:"flex flex-row justify-center items-center text-center"},$={class:"flex flex-col justify-center items-center text-center"};function k(e,r,t,c,d,p){const o=l("ps-loading"),s=l("ps-label"),g=l("ps-modal");return y(),P(g,{ref:"psmodal",maxWidth:"480px",isClickOut:!1,class:"z-50"},{title:a(()=>[_("div",M,[i(o,{theme:"border-6 border-t-6 border-feSecondary-200 border-t-fePrimary-500",loadingSize:"h-20 w-20"})])]),body:a(()=>[_("div",$,[i(s,{class:"text-2xl mb-4"},{default:a(()=>[f(u(e.title),1)]),_:1}),i(s,{class:"text-base"},{default:a(()=>[f(u(e.message),1)]),_:1})])]),_:1},512)}var T=C(B,[["render",k]]);export{T as default};
