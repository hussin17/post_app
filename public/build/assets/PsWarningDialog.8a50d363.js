import x from"./PsModal.3bf2e071.js";import w from"./PsLabelTitle.251aaca7.js";import v from"./PsLabel.6f218a30.js";import P from"./PsButton.3558548a.js";import{S as $,b3 as k,d as y,i as r,J as c,r as s,o as C,f as B,w as e,b as l,p,t as f,a as h}from"./app.94623934.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";$.add(k);const M=y({name:"PsWarningDialog",components:{PsModal:x,PsLabel:v,PsLabelTitle:w,PsButton:P},setup(){const o=r(),t=r(c("ps_warning_dialog__warning")),i=r(c("ps_warning_dialog__warning_message"));function m(n,a){n!=null&&n.trim()!=""&&(t.value=n),a!=null&&a.trim()!=""&&(i.value=a),o.value.toggle(!0)}function _(){o.value.toggle(!1)}return{psmodal:o,openModal:m,closeModal:_,title:t,message:i}}}),N={class:"flex justify-end"},T=p(" Ok ");function V(o,t,i,m,_,n){const a=s("font-awesome-icon"),d=s("ps-label-title"),u=s("ps-label"),g=s("ps-button"),b=s("ps-modal");return C(),B(b,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50"},{title:e(()=>[l(d,{class:"flex flex-auto"},{default:e(()=>[l(a,{icon:["fas","exclamation-triangle"],class:"text-yellow-300 mt-1 me-2",size:"sm"}),p(" "+f(o.title),1)]),_:1})]),body:e(()=>[l(u,null,{default:e(()=>[p(f(o.message),1)]),_:1})]),footer:e(()=>[h("div",N,[l(g,{onClick:t[0]||(t[0]=W=>o.psmodal.toggle(!1))},{default:e(()=>[T]),_:1})])]),_:1},512)}var G=D(M,[["render",V]]);export{G as default};
