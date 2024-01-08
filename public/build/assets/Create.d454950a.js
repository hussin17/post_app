import{d as D,H as z,i as v,aJ as J,J as k,r,o,c as l,b as s,w as u,a as i,p as _,t as n,h as T,F as C,q as I,g as d,f as h}from"./app.94623934.js";import{b as U,d as j}from"./PsLayout.38886a49.js";import{P as q}from"./PsBreadcrumb2.ab3eeba4.js";import{u as M}from"./Validators.52e283a4.js";import{P as N}from"./PsInput.fc15fc8e.js";import{P as x}from"./PsLabel.dab9a58c.js";import{P as A}from"./PsButton.de8e2c9c.js";import{P as G}from"./PsCard.c6647a37.js";import{P as O}from"./PsLoading.b049e7ec.js";import{P as Q}from"./PsIcon.ff30b54a.js";import{P as R}from"./PsLabelCaption.f7ef295a.js";import{_ as W}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";const X=D({name:"Create",components:{Head:z,PsInput:N,PsLabel:x,PsButton:A,PsLabelHeader6:U,PsCard:G,PsLoading:O,PsIcon:Q,PsBreadcrumb2:q,PsLabelCaption:R},layout:j,props:["errors","language","coreFieldFilterSettings"],setup(e){const t=v(!1),c=v(!1),g=v(),b=v(),{isEmpty:E}=M(),$=(m,f)=>{e.errors[m]=f?"":E(m,f),m=="key"&&(g.value.isError=!!Boolean(e.errors.key)),m=="value"&&(b.value.isError=!!Boolean(e.errors.value))};let y=J({symbol:"",name:"",language_id:e.language.id});function P(){this.$inertia.post(route("fe_language_string.store",e.language),y,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,c.value=!0,setTimeout(()=>{c.value=!1,window.location.reload()},2e3)},onError:()=>{t.value=!1,g.value.isError=!!Boolean(e.errors.key),b.value.isError=!!Boolean(e.errors.value)}})}return{validateEmptyInput:$,handleSubmit:P,loading:t,success:c,value:b,key:g,form:y}},computed:{breadcrumb(){return[{label:k("core__be_dashboard_label"),url:route("admin.index")},{label:k("fe_language_module"),url:route("fe_language.index")},{label:k("fe_language_string_module"),url:route("fe_language_string.index",this.language.id)},{label:k("create_fe_language_string"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("fe_language_string.index",this.language.id))}}}),Y={class:"rounded-xl"},Z={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},F={class:"px-4 pt-6 dark:bg-backgroundDark"},ee={class:"grid w-1/2 gap-6"},ae={class:"text-primary-500"},te={key:0,class:"text-red-800 font-medium ms-1"},oe={key:0,class:"text-red-800 font-medium ms-1"},re={class:"flex flex-row justify-end mb-2.5"},se={key:2,class:"transition-all duration-300"},ne={key:3,class:""};function le(e,t,c,g,b,E){const $=r("Head"),y=r("ps-breadcrumb-2"),P=r("ps-label-header-6"),m=r("ps-label"),f=r("ps-input"),w=r("ps-label-caption"),S=r("ps-button"),L=r("ps-loading"),H=r("ps-icon"),K=r("ps-card"),V=r("ps-layout");return o(),l(C,null,[s($,{title:e.$t("create_fe_language_string")},null,8,["title"]),s(V,null,{default:u(()=>[s(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),s(K,{class:"w-full h-auto"},{default:u(()=>[i("div",Y,[i("div",Z,[s(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:u(()=>[_(n(e.$t("create_language_string")),1)]),_:1})]),i("div",F,[i("form",{onSubmit:t[3]||(t[3]=T(a=>e.handleSubmit(),["prevent"]))},[i("div",ee,[i("div",null,[_(n(e.$t("core__be_selected_language"))+" : ",1),i("span",ae,n(e.language.name),1)]),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="key"&&a.enable===1&&a.is_delete===0),(a,B)=>(o(),l("div",{key:B},[s(m,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),l("span",te,"*")):d("",!0)]),_:2},1024),s(f,{ref_for:!0,ref:"key",type:"text",value:e.form.key,"onUpdate:value":t[0]||(t[0]=p=>e.form.key=p),placeholder:e.$t(a.placeholder),onKeyup:p=>a.mandatory==1?e.validateEmptyInput("key",e.form.key):"",onBlur:p=>a.mandatory==1?e.validateEmptyInput("key",e.form.key):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.key),1)]),_:1})):d("",!0)]))),128)),(o(!0),l(C,null,I(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="value"&&a.enable===1&&a.is_delete===0),(a,B)=>(o(),l("div",{key:B},[s(m,{class:"text-base mb-1"},{default:u(()=>[_(n(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(o(),l("span",oe,"*")):d("",!0)]),_:2},1024),s(f,{ref_for:!0,ref:"value",type:"text",value:e.form.value,"onUpdate:value":t[1]||(t[1]=p=>e.form.value=p),placeholder:e.$t(a.placeholder),onKeyup:p=>a.mandatory==1?e.validateEmptyInput("value",e.form.value):"",onBlur:p=>a.mandatory==1?e.validateEmptyInput("value",e.form.value):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(o(),h(w,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:u(()=>[_(n(e.errors.value),1)]),_:1})):d("",!0)]))),128)),i("div",re,[s(S,{onClick:t[2]||(t[2]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:u(()=>[_(n(e.$t("core__be_btn_cancel")),1)]),_:1}),s(S,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:u(()=>[e.loading?(o(),h(L,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):d("",!0),e.success?(o(),h(H,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):d("",!0),e.success?(o(),l("span",se,n(e.$t("core__be_btn_saved")),1)):d("",!0),!e.loading&&!e.success?(o(),l("span",ne,n(e.$t("core__be_btn_save")),1)):d("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Le=W(X,[["render",le]]);export{Le as default};