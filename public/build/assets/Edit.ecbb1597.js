import{b as y,e as g,d as k}from"./PsLayout.0abf605b.js";import{d as C,H as w,aJ as U,J as p,r as t,o as L,c as B,b as o,w as s,a as l,p as n,t as d,F as H}from"./app.af382b17.js";import{P as D}from"./PsBreadcrumb2.d6a63364.js";import{P as I}from"./PsInput.7ab135ce.js";import{P as V}from"./PsLabel.43555620.js";import{P as x}from"./PsButton.a8f09858.js";import{P as E}from"./PsCard.4d6784c5.js";import{P as F}from"./PsIcon.25e3c482.js";import{P as M}from"./PsLoading.205642de.js";import{P as N}from"./PsCheckboxValue.13420b31.js";import{a as S,P as T}from"./PsActionModal.42c1ecf3.js";import{P as J}from"./PsLabelCaption.a246ecb7.js";import{P as j}from"./PsLabelTitle3.8eaa0a1a.js";import{P as A}from"./PsTextarea.1fc7e6b5.js";import R from"./RoleCheckbox.2b050a7e.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.95640547.js";import"./toggle.12d56bd4.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsTextButton.c46800ee.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.f43b3aab.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsIcon1.84df9d01.js";import"./Icons.e6c27a10.js";import"./PsLabelHeader4.2d9bcd44.js";import"./PsDraggable.bc4f766f.js";const z=C({name:"Edit",components:{Head:w,PsBreadcrumb2:D,PsInput:I,PsLabel:V,PsButton:x,PsLabelHeader6:y,PsCard:E,PsIcon:F,PsLoading:M,PsCheckboxValue:N,PsActionModal:S,PsImageIconModal:T,PsDangerDialog:g,PsLabelCaption:J,PsLabelTitle3:j,PsTextarea:A,RoleCheckbox:R},layout:k,props:["errors","user"],setup(e){let r=U({name:e.user.name,email:e.user.email,user_phone:e.user.user_phone,user_address:e.user.user_address,user_about_me:e.user.user_about_me,role_id:e.user.role.name,permissions:""});function i({data:_}){r.permissions=_.toString()}return{handleUserMultiSelect:i,form:r}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("seller_report_module"),url:route("seller_report.index")},{label:p("core__be_seller_report_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("seller_report.index"))}}}),G={class:"rounded-xl"},K={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},O={class:"px-4 pt-6 dark:bg-backgroundDark"},Q={class:"grid w-full sm:w-1/2 gap-6"},W={class:"mb-2.5 flex flex-row justify-end"};function X(e,r,i,_,Y,Z){const f=t("Head"),c=t("ps-breadcrumb-2"),v=t("ps-label-header-6"),u=t("ps-label"),m=t("ps-input"),b=t("ps-textarea"),P=t("ps-button"),h=t("ps-card"),$=t("ps-layout");return L(),B(H,null,[o(f,{title:e.$t("core__be_seller_report_detail")},null,8,["title"]),o($,null,{default:s(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(h,{class:"w-full h-auto"},{default:s(()=>[l("div",G,[l("div",K,[o(v,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[n(d(e.$t("core__be_user_info")),1)]),_:1})]),l("div",O,[l("form",null,[l("div",Q,[l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("user_name_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.name,"onUpdate:value":r[0]||(r[0]=a=>e.form.name=a),placeholder:e.$t("user_name_label")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("email_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.email,"onUpdate:value":r[1]||(r[1]=a=>e.form.email=a),placeholder:e.$t("email_label")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("phone_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.user_phone,"onUpdate:value":r[2]||(r[2]=a=>e.form.user_phone=a),placeholder:e.$t("phone_label")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("core__be_address_label")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_address,"onUpdate:value":r[3]||(r[3]=a=>e.form.user_address=a),placeholder:e.$t("core__be_address_label")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("core__be_user_role_label")),1)]),_:1}),o(m,{disabled:!0,type:"text",value:e.form.role_id,"onUpdate:value":r[4]||(r[4]=a=>e.form.role_id=a),placeholder:e.$t("role_lable")},null,8,["value","placeholder"])]),l("div",null,[o(u,{class:"text-base"},{default:s(()=>[n(d(e.$t("core__be_about_me")),1)]),_:1}),o(b,{disabled:!0,rows:"3",value:e.form.user_about_me,"onUpdate:value":r[5]||(r[5]=a=>e.form.user_about_me=a),placeholder:e.$t("about_me")},null,8,["value","placeholder"])]),l("div",W,[o(P,{type:"button",onClick:r[6]||(r[6]=a=>e.handleCancel())},{default:s(()=>[n(d(e.$t("core__be_btn_back")),1)]),_:1})])])])])])]),_:1})]),_:1})],64)}var Be=q(z,[["render",X]]);export{Be as default};