import g from"./PsModal.521f4d13.js";import v from"./PsLabel.7cc3bda1.js";import $ from"./PsLabelTitle.1afa9191.js";import w from"./PsButton.50ea9ded.js";import c from"./PsLoadingDialog.e0024eaf.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{d as P,i as m,r as n,o as C,c as k,b as l,w as o,p as s,t,a as M,F as V}from"./app.af382b17.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsLine.a8261381.js";import"https://checkout.razorpay.com/v1/checkout.js";const B=P({name:"PsModelView",components:{PsModal:g,PsLabel:v,PsLabelTitle:$,PsLoadingDialog:c,PsButton:w},setup(){const e=m(),_=m();function p(){e.value.toggle(!0)}return{psmodal:e,openModal:p,psloading:_}}}),y={class:"flex flex-row justify-end"};function L(e,_,p,N,D,F){const i=n("ps-loading-dialog"),r=n("ps-label-title"),a=n("ps-label"),d=n("ps-button"),u=n("ps-modal");return C(),k(V,null,[l(i,{ref:"psloading"},null,512),l(u,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-20"},{title:o(()=>[l(r,null,{default:o(()=>[s(t(e.$t("ps_model_view__title")),1)]),_:1})]),body:o(()=>[l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1}),l(a,null,{default:o(()=>[s(t(e.$t("ps_model_view__message")),1)]),_:1})]),footer:o(()=>[M("div",y,[l(d,{onClick:_[0]||(_[0]=f=>e.psloading.openModal())},{default:o(()=>[s(t(e.$t("ps_model_view__save")),1)]),_:1}),l(d,{onClick:_[1]||(_[1]=f=>e.psmodal.toggle(!1))},{default:o(()=>[s(t(e.$t("ps_model_view__end")),1)]),_:1})])]),_:1},512)],64)}var G=b(B,[["render",L]]);export{G as default};