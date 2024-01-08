import{e as Q,d as G}from"./PsLayout.38886a49.js";import{d as O,H as R,L as W,i as P,aJ as N,J as u,r as _,Q as X,o as l,c as r,b as n,w as s,a as h,f as g,p as i,t as d,g as m,F as v,q as $,m as j}from"./app.94623934.js";import Y from"./FlashMessage.7cb11dc1.js";import{u as Z}from"./Validators.52e283a4.js";import{P as x}from"./PsInput.fc15fc8e.js";import{P as F}from"./PsLabel.dab9a58c.js";import{P as ee}from"./PsButton.de8e2c9c.js";import{P as ae}from"./PsTextarea.23de1910.js";import{P as le}from"./PsCheckboxValue.f8d73845.js";import{P as te}from"./PsLabelHeader4.692248a2.js";import{P as oe}from"./PsLabelCaption.f7ef295a.js";import{P as ne}from"./PsLabelTitle3.583c4066.js";import{P as re}from"./PsIcon.ff30b54a.js";import{P as se}from"./PsLoading.b049e7ec.js";import{P as ie}from"./PsBreadcrumb2.ab3eeba4.js";import{a as de,P as me}from"./PsActionModal.c02858ae.js";import{P as pe}from"./PsImageUpload.272ec533.js";import{_ as ue}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./Icons.e6c27a10.js";import"./PsIcon1.01459ed6.js";import"./PsDraggable.81c5f8ff.js";const _e=O({name:"Edit",components:{FlashMessage:Y,Head:R,PsInput:x,PsLabel:F,PsButton:ee,PsTextarea:ae,PsCheckboxValue:le,PsLabelHeader4:te,PsLabelCaption:oe,PsIcon:re,PsLoading:se,PsBreadcrumb2:ie,Link:W,PsActionModal:de,PsImageIconModal:me,PsDangerDialog:Q,PsImageUpload:pe,PsLabelTitle3:ne},layout:G,props:["errors","status","coreFieldFilterSettings","landing_page","checkEditPermission","validation"],setup(e){const t=P(!1),w=P(!1),V=P(),S=P(),U=P(),E=P();let M=P(!1),K=N({title:e.landing_page.title,gps_link:e.landing_page.gps_link,ios_link:e.landing_page.ios_link,description:e.landing_page.description,yt_link:e.landing_page.yt_link,fb_link:e.landing_page.fb_link,tw_link:e.landing_page.tw_link,cover:"",logo:"",_method:"put"});const{isEmail:T,isEmpty:b}=Z(),C=(p,y,c="")=>{e.errors[p]=y?"":b(p,y,c)},k=(p,y,c="",H="")=>{e.errors[p]=y?T(p,y,H):b(p,y,c)},z=p=>{let y=p.keyCode?p.keyCode:p.which;(y<48||y>57)&&p.preventDefault()};function D(){this.$inertia.get(route("admin.index"))}function B(){this.$inertia.post(route("landing_page.update",e.landing_page.id),K,{forceFormData:!0,onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,w.value=!0,setTimeout(()=>{w.value=!1},2e3)},onError:()=>{t.value=!1}})}function I(p){S.value.openModal(u("conf_modal_label"),u("core__be_replace_img_label"),u("core__be_remove_img_label"),"imagePlus","cross","24","24",()=>{U.value.openModal(u("core__be_upload_photo"),"cloudUpload",y=>{let c=N({image:y,_method:"put"});this.$inertia.post(route("image.replace",p),c)})},()=>{E.value.openModal(u("core__be_remove_label"),u("core__be_are_u_sure_remove_photo"),u("core__be_btn_confirm"),u("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",p),{onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,w.value=!0,setTimeout(()=>{w.value=!1},2e3)},onError:()=>{t.value=!1}})},()=>{})},!e.validation.includes("cover"))}function L(p){S.value.openModal(u("conf_modal_label"),u("core__be_replace_logo_label"),u("core__be_remove_logo_label"),"image","trash","24","24",()=>{U.value.openModal(u("core__be_upload_icon"),"cloudUpload",y=>{let c=N({image:y,_method:"put"});this.$inertia.post(route("image.replace",p),c)})},()=>{E.value.openModal(u("core__be_remove_label"),u("core__be_are_u_sure_remove_logo"),u("core__be_btn_confirm"),u("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",p),{onBefore:()=>{t.value=!0},onSuccess:()=>{t.value=!1,w.value=!0,setTimeout(()=>{w.value=!1},2e3)},onError:()=>{t.value=!1}})},()=>{})},!e.validation.includes("logo"))}return{validateEmailInput:k,handleCancel:D,onlyNumber:z,form:K,handleSubmit:B,loading:t,success:w,ps_image_icon_modal:U,ps_action_modal:S,visible:M,validateEmptyInput:C,email:V,replaceImageClicked:I,replaceLogoClicked:L,ps_danger_dialog:E}},computed:{breadcrumb(){return[{label:u("core__be_dashboard_label"),url:route("admin.index")},{label:u("landing_page_module_entry"),color:"text-primary-500"}]}}}),fe={class:""},ge={class:"bg-background dark:bg-secondaryDark-black rounded-lg"},ye={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},be={class:"w-full sm:w-1/2"},ke={key:0,class:"text-red-800 font-medium ms-1"},ve={key:0,class:"text-red-800 font-medium ms-1"},ce={key:0,class:"text-red-800 font-medium ms-1"},he={key:0,class:"text-red-800 font-medium ms-1"},$e={key:0,class:"text-red-800 font-medium ms-1"},we={key:0,class:"text-red-800 font-medium ms-1"},Ce={key:0,class:"text-red-800 font-medium ms-1"},Pe={key:0,class:"text-red-800 font-medium ms-1"},Ie={key:1,class:"flex items-end pt-4"},Ee={class:"w-56 h-56",alt:"landing_page logo"},Be={key:0,class:"text-red-800 font-medium ms-1"},Se={key:1,class:"flex items-end pt-4"},Ue={class:"w-96 h-96",alt:"landing_page cover"},Ke={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function De(e,t,w,V,S,U){const E=_("Head"),M=_("ps-breadcrumb-2"),K=_("ps-banner-icon"),T=_("ps-label-header-6"),b=_("ps-label"),C=_("ps-input"),k=_("ps-label-caption"),z=_("ps-textarea"),D=_("ps-label-title-3"),B=_("ps-icon"),I=_("ps-button"),L=_("ps-image-upload"),p=_("ps-loading"),y=_("ps-card"),c=_("ps-image-icon-modal"),H=_("ps-action-modal"),q=_("ps-danger-dialog"),A=_("ps-layout"),J=X("lazy");return l(),r(v,null,[n(E,{title:e.$t("landing_page_module_entry")},null,8,["title"]),n(A,null,{default:s(()=>[h("div",fe,[n(M,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(l(),g(K,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:s(()=>[i(d(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):m("",!0),n(y,{class:"w-full h-auto"},{default:s(()=>[h("div",ge,[h("div",ye,[n(T,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[i(d(e.$t("core__be_landing_page_info")),1)]),_:1})]),h("div",null,[h("div",be,[h("div",null,[(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="title"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",ke,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"title",type:"text",value:e.form.title,"onUpdate:value":t[0]||(t[0]=o=>e.form.title=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("title",e.form.title):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("title",e.form.title):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.title),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="description"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",ve,"*")):m("",!0)]),_:2},1024),n(z,{rows:"4",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":t[1]||(t[1]=o=>e.form.description=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.description),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="gps_link"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",ce,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"gps_link",type:"text",value:e.form.gps_link,"onUpdate:value":t[2]||(t[2]=o=>e.form.gps_link=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("gps_link",e.form.gps_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.gps_link),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="ios_link"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",he,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"ios_link",type:"text",value:e.form.ios_link,"onUpdate:value":t[3]||(t[3]=o=>e.form.ios_link=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("ios_link",e.form.ios_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.ios_link),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="yt_link"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",$e,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"yt_link",type:"text",value:e.form.yt_link,"onUpdate:value":t[4]||(t[4]=o=>e.form.yt_link=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("yt_link",e.form.yt_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.yt_link),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="fb_link"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),(a.mandatory=1)?(l(),r("span",we,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"fb_link",type:"text",value:e.form.fb_link,"onUpdate:value":t[5]||(t[5]=o=>e.form.fb_link=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("fb_link",e.form.fb_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.fb_link),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="tw_link"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(l(),r("span",Ce,"*")):m("",!0)]),_:2},1024),n(C,{ref_for:!0,ref:"tw_link",type:"text",value:e.form.tw_link,"onUpdate:value":t[6]||(t[6]=o=>e.form.tw_link=o),placeholder:e.$t(a.placeholder),onKeyup:o=>a.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):"",onBlur:o=>a.mandatory==1?e.validateEmptyInput("tw_link",e.form.tw_link):""},null,8,["value","placeholder","onKeyup","onBlur"]),a.mandatory==1?(l(),g(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.tw_link),1)]),_:1})):m("",!0)]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="landing-icon"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(l(),r("span",Pe,"*")):m("",!0)]),_:2},1024),e.landing_page.landing_logo[0]?m("",!0):(l(),g(D,{key:0},{default:s(()=>[i(d(e.$t("core__be_recommended_size_200_200")),1)]),_:1})),e.landing_page.landing_logo[0]?(l(),r("div",Ie,[j(h("img",Ee,null,512),[[J,{src:e.$page.props.uploadUrl+"/"+e.landing_page.landing_logo[0].img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),n(I,{type:"button",onClick:t[7]||(t[7]=o=>e.replaceLogoClicked(e.landing_page.landing_logo[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:s(()=>[n(B,{name:"pencil-btn",w:"21",h:"21"})]),_:1})])):(l(),g(L,{key:2,class:"w-56",uploadType:"icon",imageFile:e.form.logo,"onUpdate:imageFile":t[8]||(t[8]=o=>e.form.logo=o)},null,8,["imageFile"])),n(k,{textColor:"text-red-500 ",class:"m-2"},{default:s(()=>[i(d(e.errors.logo),1)]),_:1})]))),128)),(l(!0),r(v,null,$(e.coreFieldFilterSettings.filter(a=>a.original_field_name==="landing-cover"&&a.enable===1&&a.is_delete===0),(a,f)=>(l(),r("div",{class:"px-4 py-3",key:f},[n(b,{class:"text-base flex flex-row"},{default:s(()=>[i(d(e.$t(a.label_name))+" ",1),a.mandatory==1?(l(),r("span",Be,"*")):m("",!0)]),_:2},1024),e.landing_page.landing_cover[0]?m("",!0):(l(),g(D,{key:0},{default:s(()=>[i(d(e.$t("core__be_recommended_size_630_660")),1)]),_:1})),e.landing_page.landing_cover[0]?(l(),r("div",Se,[j(h("img",Ue,null,512),[[J,{src:e.$page.props.uploadUrl+"/"+e.landing_page.landing_cover[0].img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),n(I,{type:"button",onClick:t[9]||(t[9]=o=>e.replaceImageClicked(e.landing_page.landing_cover[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:s(()=>[n(B,{name:"pencil-btn",w:"21",h:"21"})]),_:1})])):(l(),g(L,{key:2,uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":t[10]||(t[10]=o=>e.form.cover=o)},null,8,["imageFile"])),n(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[i(d(e.errors.cover),1)]),_:1})]))),128)),h("div",Ke,[n(I,{onClick:t[11]||(t[11]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:s(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),n(I,{disabled:!e.checkEditPermission,onClick:t[12]||(t[12]=a=>e.handleSubmit()),class:"transition-all duration-300 min-w-3xs me-4",padding:"px-8 py-0",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(l(),g(p,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):m("",!0),e.success?(l(),g(B,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):m("",!0),e.success?(l(),g(b,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(d(e.$t("core__be_btn_saved")),1)]),_:1})):m("",!0),!e.loading&&!e.success?(l(),g(b,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[i(d(e.$t("core__be_btn_save")),1)]),_:1})):m("",!0)]),_:1},8,["disabled"])])])])])])]),_:1})]),n(c,{ref:"ps_image_icon_modal"},null,512),n(H,{ref:"ps_action_modal"},null,512),n(q,{ref:"ps_danger_dialog"},null,512)]),_:1})],64)}var ia=ue(_e,[["render",De]]);export{ia as default};
