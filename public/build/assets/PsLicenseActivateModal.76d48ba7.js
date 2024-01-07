import{P as se}from"./PsModal.a7f1bbd4.js";import{P as te}from"./PsLoading.80cb33e9.js";import{P as ae}from"./PsLabel.3118c88c.js";import{P as le}from"./PsButton.61467ff7.js";import{d as oe,i as n,J as F,aJ as T,O as ie,r as h,o as i,c as b,b as l,w as a,a as d,f as p,g as r,p as u,t as o,F as O,q as ne}from"./app.03d0793a.js";import{P as de}from"./PsIcon.b0f3f247.js";import{P as re}from"./PsInput.caae4dd2.js";import{P as ue}from"./PsInputWithRightIcon.3b0aa6af.js";import{P as ce}from"./PsLabelCaption.70c0312b.js";import{P as me}from"./PsBannerIcon.f763b022.js";import{P as pe}from"./PsConfirmDialog.feaec310.js";import{P as fe}from"./PsLoadingCircleDialog.b19f13ca.js";import{_ as he}from"./plugin-vue_export-helper.21dcd24c.js";const be=oe({name:"PsLicenseActivateModal",components:{PsModal:se,PsLabel:ae,PsButton:le,PsIcon:de,PsInput:re,PsLabelCaption:ce,PsBannerIcon:me,PsConfirmDialog:pe,PsLoadingCircleDialog:fe,PsInputWithRightIcon:ue,PsLoading:te},props:["hasError","selectedZipFileName","systemCode2","errors","status","project","purchased_code","logMessages","isCountDownShow"],setup(e){const s=n(),I=n(F("ps_success_dialog__success")),M=n(F("ps_success_dialog__success_message")),N=n(F("ps_confirm_dialog__yes")),Z=n(),c=n();let m;const D=n(!0);let _=n(!0),v=n(!1);const g=n(!1);let k=n(!0),C=n(!1),P=n(!1);const w=n(!1);let t=n(!0),$=n(!1),B=n(!1);const A=n();let S=n(e.selectedZipFileName),L=n("");function V(){m(),s.value.toggle(!1)}let j=T({backend_url:e.project.project_url,purchased_code:e.project.project_code}),W=new Date(e.systemCode2).getTime(),J=setInterval(function(){let y=new Date().getTime(),f=W-y,U=Math.floor(f/(1e3*60*60*24)),E=Math.floor(f%(1e3*60*60*24)/(1e3*60*60)),z=Math.floor(f%(1e3*60*60)/(1e3*60));L.value=U+"d : "+E+"hr : "+z+"min",f<0&&(clearInterval(J),_.value=!1,L.value="EXPIRED")},1e3);function q(){s.value.toggle(!1)}function R(y,f,U,E,z=!0){I.value=y,M.value=f.toString(),N.value=U,s.value.toggle(!0),m=E,D.value=z}function H(){this.$inertia.post(route("admin.dashboard.updateLicense"),j,{onBefore:()=>{k.value=!0,C.value=!0,g.value=!1},onSuccess:()=>{C.value=!1,P.value=!0,setTimeout(()=>{P.value=!1,v.value=!1},3e3)},onError:()=>{P.value=!1,C.value=!1}})}function X(){this.$inertia.post(route("admin.dashboard.updateLicense"),j,{onBefore:()=>{t.value=!0,$.value=!0,w.value=!1},onSuccess:()=>{$.value=!1,B.value=!0,setTimeout(()=>{B.value=!1,v.value=!1},3e3)},onError:()=>{B.value=!1,$.value=!1}})}function G(){g.value=!0,k.value=!1}function K(){w.value=!0,t.value=!1}function Q(){!w.value&&!$.value&&!B.value&&!g.value&&!C.value&&!P.value&&A.value.click()}function Y(y){_.value=!1;const f=y.target.files;S.value=f[0]}function x(){S.value="",_.value=!0}function ee(y,f=0){let U=T({zipFile:y,tableSetting:f});ie.Inertia.post(route("admin.dashboard.activateLicense"),U,{onBefore:()=>{c.value.openModal(F("license_activating"),F("wait_msg"))},onSuccess:E=>{c.value.closeModal(),_.value=!0,e.hasError===0&&q()},onError:()=>{c.value.closeModal()}})}return{isClickOut:_,psmodal:s,title:I,message:M,openModal:R,actionClicked:V,okButton:N,close:q,showIcon:D,form:j,handleUpdatePurchaseCode:H,visible:v,ps_confirm_dialog:Z,importClicked:Q,handleImport:Y,importFile:A,ps_loading_circle_dialog:c,loadingPurchasedCode:C,isEditPurchasedCode:g,isDisablePurchasedCode:k,successPurchasedCode:P,handlePurchasedCodeEdit:G,loadingBackendUrl:$,isEditBackendUrl:w,isDisableBackendUrl:t,successBackendUrl:B,handleBackendUrlEdit:K,handleUpdateBackendUrl:X,selectedFile:S,doImport:ee,clearSelectedFile:x,showcountDownDate:L}},computed:{isCanMakeAction(){return!(!this.isEditBackendUrl&&!this.loadingBackendUrl&&!this.successBackendUrl&&!this.isEditPurchasedCode&&!this.loadingPurchasedCode&&!this.successPurchasedCode)}}}),ve={class:"flex justify-end mb-3"},ge={key:0,class:"flex flex-col"},_e={class:"bg-primary-50 text-xl p-3 text-dark rounded w-full text-center mb-8"},ke={class:"text-green-500 animate-pulse",id:"systemCode2"},Ce={class:"w-full mt-6 px-4"},Pe={class:"mb-6"},ye={class:"mb-4"},we={class:""},$e={class:"mb-6"},Be={key:0,class:""},Ue={key:1,class:""},Fe={key:2,class:""},De={key:1,class:"mb-6 border rounded border-red-500 w-80 p-3"},Ee={class:""},Ie={key:0,class:"flex mb-2"},Me={class:"h-100"},Ne={class:"text-red-500 text-base"},Se={key:1,class:"flex mb-2"},Le={class:"h-100"},je={class:"text-green-500 text-base"},ze={class:"mb-6"},Ze={class:"mb-2"},Ae={target:"_blank",href:"https://share-docs.clickup.com/24312566/p/h/q5yqp-49543/a8f0164851b3c63/q5yqp-50183",class:"underline text-indigo-500"},qe={class:""},Te={target:"_blank",href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",class:"underline text-indigo-500"};function Oe(e,s,I,M,N,Z){const c=h("ps-icon"),m=h("ps-label"),D=h("ps-banner-icon"),_=h("ps-loading"),v=h("ps-button"),g=h("ps-input-with-right-icon"),k=h("ps-label-caption"),C=h("ps-modal"),P=h("ps-confirm-dialog"),w=h("ps-loading-circle-dialog");return i(),b(O,null,[l(C,{ref:"psmodal",maxWidth:"552px",bodyHeight:"100%",line:"hidden",isClickOut:!1,theme:" px-4 py-4 rounded-lg shadow-xl",class:"z-20"},{title:a(()=>[d("div",ve,[e.isClickOut?(i(),p(c,{key:0,onClick:s[0]||(s[0]=t=>e.close()),name:"cross",theme:"text-secondary-400"})):r("",!0)]),e.isCountDownShow?(i(),b("div",ge,[d("div",_e,[u(o(e.$t("your_free_trial_duration_left"))+" ",1),d("span",ke,o(e.showcountDownDate),1)])])):r("",!0),l(m,{class:"font-medium text-xl lg:text-2xl px-4"},{default:a(()=>[u(o(e.title),1)]),_:1})]),body:a(()=>[d("div",Ce,[e.visible?(i(),p(D,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-8",iconColor:"white"},{default:a(()=>[u(o(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):r("",!0),d("div",Pe,[d("div",ye,[l(m,{class:"text-base mb-1"},{default:a(()=>[u(o(e.$t("installer_messages.environment.wizard.form.base_domain_label")),1)]),_:1}),l(g,{disabled:e.isDisableBackendUrl,value:e.form.backend_url,"onUpdate:value":s[3]||(s[3]=t=>e.form.backend_url=t),placeholder:e.$t("enter_backend_url")},{icon:a(()=>[e.loadingBackendUrl?(i(),p(_,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):r("",!0),e.successBackendUrl?(i(),p(m,{key:1,class:"transition-all duration-300",textColor:"text-dark dark:text-secondaryDark-black"},{default:a(()=>[u(o(e.$t("core__be_btn_saved")),1)]),_:1})):r("",!0),e.isEditBackendUrl&&!e.loadingBackendUrl&&!e.successBackendUrl?(i(),p(v,{key:2,onClick:s[1]||(s[1]=t=>e.handleUpdateBackendUrl()),class:"",padding:"p-0",colors:"text-primary-500",hover:""},{default:a(()=>[u(o(e.$t("core__be_btn_save")),1)]),_:1})):r("",!0),!e.isEditBackendUrl&&!e.loadingBackendUrl&&!e.successBackendUrl?(i(),p(c,{key:3,onClick:s[2]||(s[2]=t=>e.handleBackendUrlEdit()),name:"editPencil"})):r("",!0)]),_:1},8,["disabled","value","placeholder"]),l(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(o(e.errors.backend_url),1)]),_:1})]),d("div",we,[l(m,{class:"text-base mb-1"},{default:a(()=>[u(o(e.$t("purchase_code")),1)]),_:1}),l(g,{disabled:e.isDisablePurchasedCode,value:e.form.purchased_code,"onUpdate:value":s[6]||(s[6]=t=>e.form.purchased_code=t),placeholder:e.$t("enter_purchase_code")},{icon:a(()=>[e.loadingPurchasedCode?(i(),p(_,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):r("",!0),e.successPurchasedCode?(i(),p(m,{key:1,class:"transition-all duration-300",textColor:"text-dark dark:text-secondaryDark-black"},{default:a(()=>[u(o(e.$t("core__be_btn_saved")),1)]),_:1})):r("",!0),e.isEditPurchasedCode&&!e.loadingPurchasedCode&&!e.successPurchasedCode?(i(),p(v,{key:2,onClick:s[4]||(s[4]=t=>e.handleUpdatePurchaseCode()),class:"",padding:"p-0",colors:"text-primary-500",hover:""},{default:a(()=>[u(o(e.$t("core__be_btn_save")),1)]),_:1})):r("",!0),!e.isEditPurchasedCode&&!e.loadingPurchasedCode&&!e.successPurchasedCode?(i(),p(c,{key:3,onClick:s[5]||(s[5]=t=>e.handlePurchasedCodeEdit()),name:"editPencil"})):r("",!0)]),_:1},8,["disabled","value","placeholder"]),l(k,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(o(e.errors.purchased_code),1)]),_:1}),e.purchased_code?(i(),p(k,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[u(o(e.purchased_code),1)]),_:1})):r("",!0)])]),d("div",$e,[l(m,{class:"text-base mb-1"},{default:a(()=>[u(o(e.$t("import_zip_file")),1)]),_:1}),e.selectedFile?(i(),b("div",Be,[l(g,{class:"w-60 mb-3",disabled:!0,value:e.selectedFile.name,"onUpdate:value":s[8]||(s[8]=t=>e.selectedFile.name=t)},{icon:a(()=>[l(c,{onClick:s[7]||(s[7]=t=>e.clearSelectedFile()),name:"cross"})]),_:1},8,["value"]),l(v,{disabled:e.isCanMakeAction,onClick:s[9]||(s[9]=t=>e.doImport(e.selectedFile)),class:"mb-0.5",colors:"bg-green-500 text-white"},{default:a(()=>[l(m,{textColor:"text-white"},{default:a(()=>[u(o(e.$t("activate")),1)]),_:1})]),_:1},8,["disabled"])])):r("",!0),e.selectedZipFileName?(i(),b("div",Ue,[l(g,{class:"w-60 mb-3",disabled:!0,value:e.selectedZipFileName,"onUpdate:value":s[11]||(s[11]=t=>e.selectedZipFileName=t)},{icon:a(()=>[l(c,{onClick:s[10]||(s[10]=t=>e.clearSelectedFile()),name:"cross"})]),_:1},8,["value"]),l(v,{disabled:e.isCanMakeAction,onClick:s[12]||(s[12]=t=>e.doImport(e.selectedZipFileName,1)),class:"mb-0.5",colors:"bg-green-500 text-white"},{default:a(()=>[l(m,{textColor:"text-white"},{default:a(()=>[u(o(e.$t("activate")),1)]),_:1})]),_:1},8,["disabled"])])):r("",!0),d("input",{type:"file",accept:".zip",ref:"importFile",style:{display:"none"},onChange:s[13]||(s[13]=t=>e.handleImport(t))},null,544),!e.selectedFile&&!e.selectedZipFileName?(i(),b("div",Fe,[l(v,{disabled:e.isCanMakeAction,onClick:e.importClicked,class:"mb-0.5",padding:"px-3 py-2"},{default:a(()=>[l(c,{name:"plus",class:"mx-0.5 font-semibold"}),l(m,{textColor:"text-white"},{default:a(()=>[u(o(e.$t("import_file")),1)]),_:1})]),_:1},8,["disabled","onClick"])])):r("",!0)]),e.logMessages?(i(),b("div",De,[(i(!0),b(O,null,ne(e.logMessages,t=>(i(),b("div",Ee,[t.status==="danger"?(i(),b("div",Ie,[d("div",Me,[l(c,{name:"cross",w:"20",h:"20",class:"me-4 p-0.5 inline-block align-middle font-semibold bg-red-500 border rounded-full text-white"})]),d("p",Ne,o(t.message),1)])):r("",!0),t.status==="success"?(i(),b("div",Se,[d("div",Le,[l(c,{name:"check",w:"20",h:"20",class:"me-4 p-0.5 inline-block align-middle font-semibold bg-green-500 border rounded-full text-white"})]),d("p",je,o(t.message),1)])):r("",!0)]))),256))])):r("",!0),d("div",ze,[l(m,{class:"text-base mb-3"},{default:a(()=>[u(o(e.$t("guide_link")),1)]),_:1}),d("div",Ze,[d("a",Ae,o(e.$t("how_to_make_project_setup")),1)]),d("div",qe,[d("a",Te,o(e.$t("how_to_purchase_code")),1)])])])]),footer:a(()=>[]),_:1},512),l(P,{ref:"ps_confirm_dialog"},null,512),l(w,{ref:"ps_loading_circle_dialog"},null,512)],64)}var ts=he(be,[["render",Oe]]);export{ts as P};
