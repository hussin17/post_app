import N from"./PsModal.9e39943e.js";import w from"./PsLabel.f69ed5af.js";import L from"./PsLabelTitle.cac98e57.js";import M from"./PsButton.506f0d87.js";import U from"./PsInput.508a4652.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";import{d as R,i as t,r as u,o as m,f as y,w as n,b as v,p as c,t as p,c as S,g as T,a as j}from"./app.03d0793a.js";import"./vue-neat-modal.796ccbfb.js";import"./PsLine.baababc4.js";import"https://checkout.razorpay.com/v1/checkout.js";const z=R({name:"UserPhoneLoginVerificationModal",components:{PsModal:N,PsLabel:w,PsLabelTitle:L,PsButton:M,PsInput:U},setup(){const e=t(),o=t("Confirm"),s=t(!1),_=t("Are you confirm ?"),C=t("Yes"),k=t("No"),i=t(!1),r=t("");let d,l;function g(f){r.value!=""?f=="yes"?(d(r.value),e.value.toggle(!1)):f=="confirm"?i.value=!0:(l(),e.value.toggle(!1),s.value=!1):f=="no"&&(e.value.toggle(!1),s.value=!1)}function a(f,b,B,$,P,V){o.value=f,_.value=b.toString(),C.value=B,k.value=$,s.value=!0,e.value.toggle(!0),d=P,l=V,i.value=!1}return{psmodal:e,title:o,message:_,openModal:a,actionClicked:g,okButton:C,cancelButton:k,verificationCode:r,isConfirmed:i,dataReady:s}}}),A={key:0},D={class:"flex flex-row justify-end"};function E(e,o,s,_,C,k){const i=u("ps-label-title"),r=u("ps-label"),d=u("ps-input"),l=u("ps-button"),g=u("ps-modal");return m(),y(g,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-20"},{title:n(()=>[v(i,null,{default:n(()=>[c(p(e.title),1)]),_:1})]),body:n(()=>[e.dataReady?(m(),S("div",A,[v(r,{class:"ms-1"},{default:n(()=>[c(p(e.$t("user_phone_login_verification_modal__please_input_code")),1)]),_:1}),v(d,{class:"my-3 ms-1 w-5/6",value:e.verificationCode,"onUpdate:value":o[0]||(o[0]=a=>e.verificationCode=a)},null,8,["value"])])):T("",!0)]),footer:n(()=>[j("div",D,[e.isConfirmed?(m(),y(l,{key:0,onClick:o[1]||(o[1]=a=>e.actionClicked("yes"))},{default:n(()=>[c(p(e.okButton),1)]),_:1})):(m(),y(l,{key:1,onClick:o[2]||(o[2]=a=>e.actionClicked("confirm"))},{default:n(()=>[c(p(e.$t("user_phone_login_verification_modal__confirm")),1)]),_:1})),v(l,{onClick:o[3]||(o[3]=a=>e.actionClicked("no")),theme:"input-second",class:"ms-4"},{default:n(()=>[c(p(e.cancelButton),1)]),_:1})])]),_:1},512)}var Q=h(z,[["render",E]]);export{Q as default};