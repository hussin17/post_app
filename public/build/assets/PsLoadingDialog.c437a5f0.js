import u from"./PsModal.3bf2e071.js";import g from"./PsLabelTitle.251aaca7.js";import b from"./PsLabel.6f218a30.js";import{d as v,i as r,J as x,r as a,o as $,f as C,w as e,b as i,p as _,t as m}from"./app.94623934.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";const P=v({components:{PsModal:u,PsLabel:b,PsLabelTitle:g},setup(){const o=r(),t=r(x("ps_loading_dialog__loading"));function s(){o.value.toggle(!0)}function l(){o.value.toggle(!1)}function n(p){t.value=p}return{psmodal:o,openModal:s,closeModal:l,message:t,setMessage:n}}});function h(o,t,s,l,n,p){const c=a("ps-label-title"),d=a("ps-label"),f=a("ps-modal");return $(),C(f,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:e(()=>[i(c,null,{default:e(()=>[_(m(o.$t("ps_loading_dialog__please_wait")),1)]),_:1})]),body:e(()=>[i(d,null,{default:e(()=>[_(m(o.message),1)]),_:1})]),footer:e(()=>[]),_:1},512)}var V=M(P,[["render",h]]);export{V as default};