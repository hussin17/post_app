import{d as b,H as h,J as l,r as t,o as f,c as g,b as e,w as a,a as o,p as s,t as P,h as x,F as y}from"./app.89c3e968.js";import{d as v}from"./PsLayout.c538b065.js";import{P as k}from"./PsBreadcrumb2.66f51afc.js";import{P as $}from"./PsInput.4c85dced.js";import{P as w}from"./PsLabel.b6468e3b.js";import{P as B}from"./PsButton.93f0884f.js";import{P as H}from"./PsTextarea.f74f7ad2.js";import{P as T}from"./PsLabelHeader4.4c87fd6a.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsIcon.edc6e12c.js";import"./Icons.e6c27a10.js";import"./PsModal.cae41119.js";import"./toggle.9dc4c49c.js";import"./vue-neat-modal.bfa3eb2d.js";import"./PsTextButton.5d03d3b2.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.e4096f1e.js";import"./PsIcon1.ff878692.js";const I=b({name:"Edit",components:{Head:h,PsInput:$,PsLabel:w,PsButton:B,PsTextarea:H,PsLabelHeader4:T,PsBreadcrumb2:k},layout:v,props:["errors","status"],computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("thumbnail_generator_module"),color:"text-primary-500"}]}},methods:{handleThumbnail(){this.$inertia.put(route("thumbnail_generator.update"))}}}),L={class:"rounded-xl"},N={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},V={class:"px-4 pt-6 dark:bg-backgroundDark"},D={class:"grid gap-6"},E=s("It will generate the thumbnails images for each item. Please take note that this process will take some time based on your data."),F=s("Thumbnail(1x, 2x, 3x) Generate");function S(r,n,G,J,M,j){const m=t("Head"),i=t("ps-breadcrumb-2"),p=t("ps-label-header-6"),d=t("ps-label"),u=t("ps-button"),_=t("ps-card"),c=t("ps-layout");return f(),g(y,null,[e(m,{title:r.$t("thumbnail_generator_module")},null,8,["title"]),e(c,null,{default:a(()=>[e(i,{items:r.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e(_,{class:"w-full h-auto"},{default:a(()=>[o("div",L,[o("div",N,[e(p,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:a(()=>[s(P(r.$t("thumbnail_generator_module")),1)]),_:1})]),o("div",V,[o("form",{onSubmit:n[0]||(n[0]=x(q=>r.handleThumbnail(),["prevent"]))},[o("div",D,[o("div",null,[e(d,null,{default:a(()=>[E]),_:1})]),o("div",null,[e(u,null,{default:a(()=>[F]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var it=C(I,[["render",S]]);export{it as default};