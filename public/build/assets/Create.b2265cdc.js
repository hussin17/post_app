import{d as B,H as D,aJ as L,i as C,J as $,r as t,o as d,c as E,b as o,w as a,a as n,p as s,t as l,h as H,f as y,g as v,F}from"./app.03d0793a.js";import{b as V,d as I}from"./PsLayout.c4204ebc.js";import{u as N}from"./Validators.52e283a4.js";import{P as T}from"./PsInput.caae4dd2.js";import{P as z}from"./PsLabel.3118c88c.js";import{P as A}from"./PsButton.61467ff7.js";import{P as J}from"./PsTextarea.007314ae.js";import{P as U}from"./PsLabelHeader4.3eb1d14f.js";import{P as j}from"./PsLabelCaption.70c0312b.js";import{E as M}from"./Editor.c7b232e3.js";import{P as q}from"./PsBreadcrumb2.b219915c.js";import{P as G}from"./PsIcon.b0f3f247.js";import{P as K}from"./PsLoading.80cb33e9.js";import{P as O}from"./PsLink1.cee9205d.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.a7f1bbd4.js";import"./toggle.27dc63bc.js";import"./vue-neat-modal.796ccbfb.js";import"./PsTextButton.c9a84bdc.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.3b0aa6af.js";import"./PsIcon1.716eb615.js";import"./Icons.e6c27a10.js";const R=B({name:"Create",components:{Head:D,Editor:M,PsIcon:G,PsLoading:K,PsInput:T,PsLabel:z,PsButton:A,PsTextarea:J,PsLabelHeader4:U,PsLabelCaption:j,PsBreadcrumb2:q,PsLabelHeader6:V,PsLink1:O},layout:I,props:["errors"],setup(e){let r=L({content:"",url:""});const p=C(!1),u=C(!1),{isEmpty:g}=N();let k="https://post-app.net/",_="".replaceAll("/","").replaceAll("\\",""),c="";_?c=k+_+"/":c=k;const i=c+"app_content/privacy",h=(m,b)=>{e.errors[m]=b?"":g(m,b)};function P(){this.$inertia.post(route("privacy_policy.store"),r,{forceFormData:!0,onBefore:()=>{p.value=!0},onSuccess:()=>{p.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{p.value=!1}})}return{validateEmptyInput:h,form:r,handleSubmit:P,loading:p,success:u,privacyurl:i}},computed:{breadcrumb(){return[{label:$("core__be_dashboard_label"),url:route("admin.index")},{label:$("privacy_policy_module"),color:"text-primary-500"}]}}}),W={class:"w-full mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},X={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Y={class:"px-4 py-3"},Z={class:"px-4 py-3"},ee=n("br",null,null,-1),te={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function oe(e,r,p,u,g,k){const x=t("Head"),_=t("ps-breadcrumb-2"),c=t("ps-label-header-6"),i=t("ps-label"),h=t("editor"),P=t("ps-link-1"),m=t("ps-button"),b=t("ps-loading"),w=t("ps-icon"),S=t("ps-layout");return d(),E(F,null,[o(x,{title:e.$t("privacy_policy_module")},null,8,["title"]),o(S,null,{default:a(()=>[o(_,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),n("div",W,[n("div",X,[o(c,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(l(e.$t("core__be_privacy_policy")),1)]),_:1})]),n("form",{onSubmit:r[2]||(r[2]=H((...f)=>e.handleSubmit&&e.handleSubmit(...f),["prevent"]))},[n("div",Y,[o(i,{class:"text-base"},{default:a(()=>[s(l(e.$t("core__be_content")),1)]),_:1}),o(h,{class:"dark:bg-secondaryDark:black",value:e.form.content,"onUpdate:value":r[0]||(r[0]=f=>e.form.content=f)},null,8,["value"])]),n("div",Z,[o(i,{class:"text-base mb-1"},{default:a(()=>[s(l(e.$t("core__be_privacy_policy_url")),1)]),_:1}),o(P,{target:"_blank",url:e.privacyurl,textColor:"text-blue-500"},{default:a(()=>[s(l(e.privacyurl),1)]),_:1},8,["url"]),ee]),n("div",te,[o(m,{onClick:r[1]||(r[1]=f=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:a(()=>[s(l(e.$t("core__be_btn_cancel")),1)]),_:1}),o(m,{class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:a(()=>[e.loading?(d(),y(b,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):v("",!0),e.success?(d(),y(w,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):v("",!0),e.success?(d(),y(i,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(l(e.$t("core__be_btn_saved")),1)]),_:1})):v("",!0),!e.loading&&!e.success?(d(),y(i,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:a(()=>[s(l(e.$t("core__be_btn_save")),1)]),_:1})):v("",!0)]),_:1})])],32)])]),_:1})],64)}var Be=Q(R,[["render",oe]]);export{Be as default};