import b from"./PsModal.3bf2e071.js";import v from"./PsLabelTitle.251aaca7.js";import P from"./PsLabel.6f218a30.js";import k from"./PsButton.3558548a.js";import{d as x,i as n,J as d,r as l,o as C,f as $,w as e,b as p,p as i,t as f,a as B}from"./app.94623934.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";const y=x({name:"PsErrorDialog",components:{PsModal:b,PsLabel:P,PsLabelTitle:v,PsButton:k},setup(){const o=n(),t=n(d("ps_error_dialog__error")),r=n(d("ps_error_dialog__error_message"));function _(a,s){a!=null&&a.trim()!=""&&(t.value=a),s!=null&&s.trim()!=""&&(r.value=s),o.value.toggle(!0)}function m(){o.value.toggle(!1)}return{psmodal:o,openModal:_,closeModal:m,title:t,message:r}}}),D={class:"flex justify-end"},M=i(" Ok ");function N(o,t,r,_,m,a){const s=l("ps-label-title"),c=l("ps-label"),u=l("ps-button"),g=l("ps-modal");return C(),$(g,{ref:"psmodal",maxWidth:"350px",isClickOut:!1},{title:e(()=>[p(s,null,{default:e(()=>[i(f(o.title),1)]),_:1})]),body:e(()=>[p(c,null,{default:e(()=>[i(f(o.message),1)]),_:1})]),footer:e(()=>[B("div",D,[p(u,{onClick:t[0]||(t[0]=V=>o.psmodal.toggle(!1))},{default:e(()=>[M]),_:1})])]),_:1},512)}var z=h(y,[["render",N]]);export{z as default};
