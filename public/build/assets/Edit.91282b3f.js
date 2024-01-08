import{b as k,e as C,d as U}from"./PsLayout.38886a49.js";import{d as w,H as D,aJ as T,J as f,r as s,o as c,c as B,b as o,w as t,a as r,p as d,t as n,f as L,g as H,F as M}from"./app.94623934.js";import{P as S}from"./PsBreadcrumb2.ab3eeba4.js";import{P as V}from"./PsInput.fc15fc8e.js";import{P as I}from"./PsLabel.dab9a58c.js";import{P as N}from"./PsButton.de8e2c9c.js";import{P as E}from"./PsCard.c6647a37.js";import{P as F}from"./PsIcon.ff30b54a.js";import{P as R}from"./PsLoading.b049e7ec.js";import{P as A}from"./PsCheckboxValue.f8d73845.js";import{a as J,P as j}from"./PsActionModal.c02858ae.js";import{P as q}from"./PsLabelCaption.f7ef295a.js";import{P as z}from"./PsLabelTitle3.583c4066.js";import{P as G}from"./PsTextarea.23de1910.js";import K from"./RoleCheckbox.4659af93.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";import"./PsLabelHeader4.692248a2.js";import"./PsDraggable.81c5f8ff.js";const Q=w({name:"Edit",components:{Head:D,PsBreadcrumb2:S,PsInput:V,PsLabel:I,PsButton:N,PsLabelHeader6:k,PsCard:E,PsIcon:F,PsLoading:R,PsCheckboxValue:A,PsActionModal:J,PsImageIconModal:j,PsDangerDialog:C,PsLabelCaption:q,PsLabelTitle3:z,PsTextarea:G,RoleCheckbox:K},layout:U,props:["errors","user"],setup(e){let a=T({name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,user_address:e.user.user_address,user_about_me:e.user.user_about_me,permissions:""});function m({data:p}){a.permissions=p.toString()}return{handleUserMultiSelect:m,form:a}},computed:{breadcrumb(){return[{label:f("core__be_dashboard_label"),url:route("admin.index")},{label:f("daily_active_user_report_module"),url:route("daily_active_user_report.index")},{label:"Daily Active User Detail",color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("daily_active_user_report.index"))}}}),W={class:"rounded-xl"},X={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Y={class:"px-4 pt-6 dark:bg-backgroundDark"},Z={class:"grid w-full sm:w-1/2 gap-6"},x={class:"grid grid-cols-2 lg:grid-cols-3 gap-y-2"},ee={class:"mb-2.5 flex flex-row justify-end"};function oe(e,a,m,p,ae,re){const v=s("Head"),P=s("ps-breadcrumb-2"),h=s("ps-label-header-6"),u=s("ps-label"),i=s("ps-input"),_=s("ps-textarea"),b=s("RoleCheckbox"),y=s("ps-button"),g=s("ps-card"),$=s("ps-layout");return c(),B(M,null,[o(v,{title:e.$t("daily_active_user_report_detail")},null,8,["title"]),o($,null,{default:t(()=>[o(P,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(g,{class:"w-full h-auto"},{default:t(()=>[r("div",W,[r("div",X,[o(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:t(()=>[d(n(e.$t("core__be_user_info")),1)]),_:1})]),r("div",Y,[r("form",null,[r("div",Z,[r("div",null,[o(u,null,{default:t(()=>[d(n(e.$t("user_name_label")),1)]),_:1}),o(i,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":a[0]||(a[0]=l=>e.form.name=l),placeholder:e.$t("user_name_label")},null,8,["value","placeholder"])]),r("div",null,[o(u,null,{default:t(()=>[d(n(e.$t("email_label")),1)]),_:1}),o(i,{disabled:!0,type:"text",value:e.form.email,"onUpdate:value":a[1]||(a[1]=l=>e.form.email=l),placeholder:e.$t("email_label")},null,8,["value","placeholder"])]),r("div",null,[o(u,null,{default:t(()=>[d(n(e.$t("phone_label")),1)]),_:1}),o(i,{disabled:!0,type:"text",value:e.form.user_phone,"onUpdate:value":a[2]||(a[2]=l=>e.form.user_phone=l),placeholder:e.$t("phone_label")},null,8,["value","placeholder"])]),r("div",null,[o(u,null,{default:t(()=>[d(n(e.$t("address_label")),1)]),_:1}),o(_,{rows:"3",value:e.form.user_address,"onUpdate:value":a[3]||(a[3]=l=>e.form.user_address=l),placeholder:e.$t("address_label")},null,8,["value","placeholder"])]),r("div",null,[o(u,{class:"mb-1"},{default:t(()=>[d(n(e.$t("user_role_label"))+n(e.user.role_id),1)]),_:1}),r("div",x,[o(b,{oldData:e.user.role_id,onToParent:e.handleUserMultiSelect,permissions:e.roles},null,8,["oldData","onToParent","permissions"]),e.user.role_id?H("",!0):(c(),L(b,{key:0,onToParent:e.handleUserMultiSelect,permissions:e.permissions},null,8,["onToParent","permissions"]))])]),r("div",null,[o(u,null,{default:t(()=>[d(n(e.$t("about_me")),1)]),_:1}),o(_,{disabled:!0,rows:"3",value:e.form.user_about_me,"onUpdate:value":a[4]||(a[4]=l=>e.form.user_about_me=l),placeholder:e.$t("about_me")},null,8,["value","placeholder"])]),r("div",ee,[o(y,{type:"button",onClick:a[5]||(a[5]=l=>e.handleCancel())},{default:t(()=>[d(n(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var Me=O(Q,[["render",oe]]);export{Me as default};
