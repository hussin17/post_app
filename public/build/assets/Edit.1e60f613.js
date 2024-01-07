import{b as y,e as v,c as w,d as x}from"./PsLayout.c4204ebc.js";import{d as $,H as k,aJ as C,J as c,r as s,Q as I,o as D,c as L,b as e,w as a,a as o,p as n,t as r,m as B,F as H}from"./app.03d0793a.js";import{P as E}from"./PsBreadcrumb2.b219915c.js";import{P as F}from"./PsInput.caae4dd2.js";import{P as V}from"./PsLabel.3118c88c.js";import{P as j}from"./PsButton.61467ff7.js";import{P as N}from"./PsCard.60a06aa2.js";import{P as T}from"./PsIcon.b0f3f247.js";import{P as U}from"./PsLoading.80cb33e9.js";import{P as z}from"./PsCheckboxValue.e7cc8040.js";import{a as J,P as M}from"./PsActionModal.e3925170.js";import{P as A}from"./PsLabelTitle3.eaa1e17e.js";import{P as Q}from"./PsTextarea.007314ae.js";import{h as S}from"./moment.9709ab41.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.a7f1bbd4.js";import"./toggle.27dc63bc.js";import"./vue-neat-modal.796ccbfb.js";import"./PsTextButton.c9a84bdc.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.3b0aa6af.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsIcon1.716eb615.js";import"./Icons.e6c27a10.js";import"./PsLabelHeader4.3eb1d14f.js";import"./PsDraggable.21c3be09.js";const G=$({name:"Edit",components:{Head:k,PsBreadcrumb2:E,PsInput:F,PsLabel:V,PsButton:j,PsLabelHeader6:y,PsCard:N,PsIcon:T,PsLoading:U,PsCheckboxValue:z,PsActionModal:J,PsImageIconModal:M,PsDangerDialog:v,PsLabelCaption3:w,PsLabelTitle3:A,PsTextarea:Q},layout:x,props:["errors","contact","defaultProfileImg"],data(){return{moment:S}},setup(t){return{form:C({contact_name:t.contact.contact_name,contact_email:t.contact.contact_email,contact_phone:t.contact.contact_phone,contact_message:t.contact.contact_message,added_date:t.contact.added_date,owner:t.contact.owner})}},computed:{breadcrumb(){return[{label:c("core__be_dashboard_label"),url:route("admin.index")},{label:c("contact_us_message_module"),url:route("contact.index")},{label:c("core__contact_us_message_detail"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("contact.index"))}}}),K={class:"rounded-xl"},O={class:"bg-primary-50 dark:bg-primary-900 rounded-t-xl py-2.5 ps-4"},R={class:"px-4 pt-6 dark:bg-backgroundDark"},W={class:"bg-secondary-50 dark:bg-secondary-900 rounded py-3 px-4 mb-2 text-base w-full shadow-sm"},X={class:"flex w-full justify-between"},Y={class:"text-sm flex flex-row"},Z={class:"text-sm"},tt={class:"ms-12 mt-4"},et={class:"mb-2.5 flex flex-row justify-end"};function ot(t,l,at,st,rt,nt){const p=s("Head"),_=s("ps-breadcrumb-2"),u=s("ps-label-header6"),m=s("ps-label"),f=s("ps-label-caption-3"),b=s("ps-button"),g=s("ps-card"),P=s("ps-layout"),h=I("lazy");return D(),L(H,null,[e(p,{title:t.$t("core__contact_us_message_detail")},null,8,["title"]),e(P,null,{default:a(()=>[e(_,{items:t.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e(g,{class:"w-full h-auto"},{default:a(()=>{var d;return[o("div",K,[o("div",O,[e(u,null,{default:a(()=>[n(r(t.$t("core__contact_us_message_detail")),1)]),_:1})]),o("div",R,[o("div",W,[o("div",X,[o("span",Y,[B(o("img",{width:"20",height:"20",class:"mx-2 inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover",alt:"Profile photo",onError:l[0]||(l[0]=(...i)=>t.defaultProfileImg&&t.defaultProfileImg(...i))},null,544),[[h,{src:t.$page.props.uploadUrl+"/"+((d=t.form.owner)==null?void 0:d.user_cover_photo),loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_profile.png"}]]),e(m,{class:"font-semibold"},{default:a(()=>[n(r(t.form.contact_name),1)]),_:1})]),e(m,{class:"text-xxs sm:text-xs font-semibold"},{default:a(()=>[n(r(t.moment(t.contact.added_date).format(t.$page.props.dateFormat)),1)]),_:1})]),o("span",Z,[e(f,{class:"ms-12"},{default:a(()=>[n("by : "+r(t.form.contact_email),1)]),_:1}),e(m,{class:"ms-12 mt-0.5"},{default:a(()=>[n(r(t.$t("core__be_contact_number"))+" : "+r(t.form.contact_phone),1)]),_:1})]),o("div",tt,[e(m,{class:"text-xs sm:text-sm lg:text-lg"},{default:a(()=>[n(r(t.form.contact_message),1)]),_:1})]),o("div",et,[e(b,{type:"button",onClick:l[1]||(l[1]=i=>t.handleCancel())},{default:a(()=>[n(r(t.$t("core__be_btn_back")),1)]),_:1})])])])])]}),_:1})]),_:1})],64)}var Vt=q(G,[["render",ot]]);export{Vt as default};
