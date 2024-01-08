import{d as B,H as z,i as _,aJ as S,J as d,r as o,o as m,c as k,b as a,w as s,a as r,p as b,t as n,h as L,f as C,g as f,F}from"./app.94623934.js";import{b as V,d as D}from"./PsLayout.38886a49.js";import{P as J}from"./PsBreadcrumb2.ab3eeba4.js";import{u as N}from"./Validators.52e283a4.js";import{P as T}from"./PsInput.fc15fc8e.js";import{P as j}from"./PsLabel.dab9a58c.js";import{P as K}from"./PsButton.de8e2c9c.js";import{P as M}from"./PsCard.c6647a37.js";import{P as U}from"./PsLoading.b049e7ec.js";import{P as q}from"./PsIcon.ff30b54a.js";import{P as A}from"./PsLabelCaption.f7ef295a.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";const O=B({name:"Create",components:{Head:z,PsInput:T,PsLabel:j,PsButton:K,PsLabelHeader6:V,PsCard:M,PsLoading:U,PsIcon:q,PsBreadcrumb2:J,PsLabelCaption:A},layout:D,props:["errors","customizeHeader","tableId"],setup(e){const t=_(!1),u=_(!1),g=_(),v=_(),{isEmpty:P}=N(),y=(l,c)=>{e.errors[l]=c?"":P(l,c),l=="name"&&(v.value.isError=e.errors.name!="")};let p=S({tableId:e.tableId,core_keys_id:e.customizeHeader.core_keys_id,name:""});function h(){this.$inertia.post(route("attribute.store",[this.tableId,this.customizeHeader.core_keys_id]),p,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,u.value=!0,setTimeout(()=>{u.value=!1},2e3)},onError:()=>{g.value.isError=e.errors.key!="",value.value.isError=e.errors.value!="",t.value=!1}})}return{validateEmptyInput:y,handleSubmit:h,loading:t,success:u,name:v,form:p}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("table_setting_group"),url:route("table.index")},{label:d("core__be_fields_label"),url:route("tables.fields.index",this.tableId)},{label:d("core__be_attribute_label"),url:route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id])},{label:d("core__be_add_attribute"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("attribute.index",[this.tableId,this.customizeHeader.core_keys_id]))}}}),Q={class:"rounded-xl"},R={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},W={class:"px-4 pt-6 dark:bg-backgroundDark"},X={class:"grid w-full sm:w-1/2 gap-6"},Y=r("span",{class:"text-red-800 font-medium ms-1"},"*",-1),Z={class:"flex flex-row justify-end mb-2.5"},ee={key:2,class:"transition-all duration-300"},te={key:3,class:""};function oe(e,t,u,g,v,P){const y=o("Head"),p=o("ps-breadcrumb-2"),h=o("ps-label-header-6"),l=o("ps-label"),c=o("ps-input"),I=o("ps-label-caption"),$=o("ps-button"),w=o("ps-loading"),H=o("ps-icon"),E=o("ps-card"),x=o("ps-layout");return m(),k(F,null,[a(y,{title:e.$t("core__be_add_attribute")},null,8,["title"]),a(x,null,{default:s(()=>[a(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(E,{class:"w-full h-auto"},{default:s(()=>[r("div",Q,[r("div",R,[a(h,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[b(n(e.$t("core__be_add_attribute")),1)]),_:1})]),r("div",W,[r("form",{onSubmit:t[4]||(t[4]=L(i=>e.handleSubmit(),["prevent"]))},[r("div",X,[r("div",null,[a(l,{class:"text-base mb-2"},{default:s(()=>[b(n(e.$t("core__api_token_label")),1),Y]),_:1}),a(c,{type:"text",value:e.form.name,"onUpdate:value":t[0]||(t[0]=i=>e.form.name=i),placeholder:e.$t("core__api_token_placeholder"),onKeyup:t[1]||(t[1]=i=>e.validateEmptyInput("name",e.form.name)),onBlur:t[2]||(t[2]=i=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),a(I,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[b(n(e.errors.name),1)]),_:1})]),r("div",Z,[a($,{onClick:t[3]||(t[3]=i=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[b(n(e.$t("core__be_btn_cancel")),1)]),_:1}),a($,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(m(),C(w,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(m(),C(H,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(m(),k("span",ee,n(e.$t("core__be_btn_saved")),1)):f("",!0),!e.loading&&!e.success?(m(),k("span",te,n(e.$t("core__be_btn_save")),1)):f("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ie=G(O,[["render",oe]]);export{Ie as default};
