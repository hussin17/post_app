import{d as J,H as j,i as g,aJ as M,J as p,r,Q as A,o as m,c as D,b as a,w as t,a as s,p as i,t as d,h as K,f as c,g as k,m as z,F as Q}from"./app.94623934.js";import{b as q,e as G,d as O}from"./PsLayout.38886a49.js";import{P as R}from"./PsBreadcrumb2.ab3eeba4.js";import{u as W}from"./Validators.52e283a4.js";import{P as X}from"./PsInput.fc15fc8e.js";import{P as Y}from"./PsLabel.dab9a58c.js";import{P as Z}from"./PsButton.de8e2c9c.js";import{P as x}from"./PsCard.c6647a37.js";import{P as ee}from"./PsIcon.ff30b54a.js";import{P as oe}from"./PsLoading.b049e7ec.js";import{P as ae}from"./PsCheckboxValue.f8d73845.js";import{a as te,P as re}from"./PsActionModal.c02858ae.js";import{P as se}from"./PsImageUpload.272ec533.js";import{P as ne}from"./PsLabelCaption.f7ef295a.js";import{P as le}from"./PsLabelTitle3.583c4066.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";import"./PsLabelHeader4.692248a2.js";import"./PsDraggable.81c5f8ff.js";const de=J({name:"Edit",components:{Head:j,PsBreadcrumb2:R,PsImageUpload:se,PsInput:X,PsLabel:Y,PsButton:Z,PsLabelHeader6:q,PsCard:x,PsIcon:ee,PsLoading:oe,PsCheckboxValue:ae,PsActionModal:te,PsImageIconModal:re,PsDangerDialog:G,PsLabelCaption:ne,PsLabelTitle3:le},layout:O,props:["errors","api_token"],setup(e){const o=g(!1),f=g(!1),P=g(),w=g(),C=g(),h=g(),{isEmpty:I,minLength:U}=W(),u=(n,_)=>{e.errors[n]=_?U(n,_,3):I(n,_),n=="name"&&(h.value.isError=e.errors.name!="")};let b=M({name:e.api_token.name,status:e.api_token.status==1,_method:"put"});function v(n){b.status==!0?b.status=1:b.status=0,this.$inertia.post(route("api_token.update",n),b,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,f.value=!0,f.value=!1,this.$inertia.get(route("api_token.index"))},onError:()=>{h.value.isError=e.errors.name!="",o.value=!1}})}function y(n){P.value.openModal(p("conf_modal_label"),p("core__be_replace_img_label"),p("core__be_remove_img_label"),"image","trash","24","24",()=>{w.value.openModal(p("core__be_upload_photo"),"cloudUpload",_=>{let $=M({image:_,_method:"put"});this.$inertia.post(route("image.replace",n),$)})},()=>{C.value.openModal(p("core__be_remove_label"),p("core__be_are_u_sure_remove_photo"),p("core__be_btn_confirm"),p("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",n),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,f.value=!0,setTimeout(()=>{f.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateNameInput:u,handleSubmit:v,ps_action_modal:P,form:b,loading:o,success:f,replaceImageClicked:y,ps_danger_dialog:C,ps_image_icon_modal:w}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("api_tokens_module"),url:route("api_token.index")},{label:p("core__edit_api_token"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("api_token.index"))}}}),pe={class:"rounded-xl"},me={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},_e={class:"px-4 pt-6 dark:bg-backgroundDark"},ue={class:"grid w-full sm:w-1/2 gap-6"},ce=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),fe={key:1,class:"flex items-end pt-4"},ge={class:"w-96 h-48",alt:"api_token cover"},ke=s("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ve={key:1,class:"flex items-end pt-4"},he={class:"w-48 h-48",alt:"api_token icon"},ye={class:"mb-2.5 flex flex-row justify-end"};function $e(e,o,f,P,w,C){const h=r("Head"),I=r("ps-breadcrumb-2"),U=r("ps-label-header-6"),u=r("ps-label"),b=r("ps-input"),v=r("ps-label-caption"),y=r("ps-label-title-3"),n=r("ps-icon"),_=r("ps-button"),$=r("ps-image-icon-modal"),F=r("ps-action-modal"),B=r("ps-danger-dialog"),E=r("ps-image-upload"),H=r("ps-checkbox-value"),T=r("ps-loading"),N=r("ps-card"),V=r("ps-layout"),L=A("lazy");return m(),D(Q,null,[a(h,{title:e.$t("edit_api_token")},null,8,["title"]),a(V,null,{default:t(()=>[a(I,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(N,{class:"w-full h-auto"},{default:t(()=>{var S;return[s("div",pe,[s("div",me,[a(U,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:t(()=>[i(d(e.$t("core__edit_api_token")),1)]),_:1})]),s("div",_e,[s("form",{onSubmit:o[9]||(o[9]=K(l=>e.handleSubmit(this.api_token.id),["prevent"]))},[s("div",ue,[s("div",null,[a(u,{class:"text-base mb-2"},{default:t(()=>[i(d(e.$t("core__api_token_label")),1),ce]),_:1}),a(b,{type:"text",value:e.form.name,"onUpdate:value":o[0]||(o[0]=l=>e.form.name=l),placeholder:e.$t("core__api_token_placeholder"),onKeyup:o[1]||(o[1]=l=>e.validateNameInput("name",e.form.name)),onBlur:o[2]||(o[2]=l=>e.validateNameInput("name",e.form.name))},null,8,["value","placeholder"]),a(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:t(()=>[i(d(e.errors.name),1)]),_:1})]),s("div",null,[a(u,{class:"text-base mb-2"},{default:t(()=>[i(d(e.$t("core__api_token_photo_label")),1),be]),_:1}),e.api_token.cover?k("",!0):(m(),c(y,{key:0},{default:t(()=>[i(d(e.$t("core__be_recommended_size_400_200")),1)]),_:1})),e.api_token.cover?(m(),D("div",fe,[z(s("img",ge,null,512),[[L,{src:e.$page.props.uploadUrl+"/"+e.api_token.cover.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),a(_,{type:"button",onClick:o[3]||(o[3]=l=>e.replaceImageClicked(e.api_token.cover.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:t(()=>[a(n,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),a($,{ref:"ps_image_icon_modal"},null,512),a(F,{ref:"ps_action_modal"},null,512),a(B,{ref:"ps_danger_dialog"},null,512)])):(m(),c(E,{key:2,uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":o[4]||(o[4]=l=>e.form.cover=l)},null,8,["imageFile"])),a(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:t(()=>[i(d(e.errors.cover),1)]),_:1})]),s("div",null,[a(u,{class:"text-base mb-2"},{default:t(()=>[i(d(e.$t("core__api_token_icon_label")),1),ke]),_:1}),e.api_token.icon?k("",!0):(m(),c(y,{key:0},{default:t(()=>[i(d(e.$t("recommended_size_200_200")),1)]),_:1})),e.api_token.icon?(m(),D("div",ve,[z(s("img",he,null,512),[[L,{src:e.$page.props.uploadUrl+"/"+((S=e.api_token.icon)==null?void 0:S.img_path),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),a(_,{type:"button",onClick:o[5]||(o[5]=l=>e.replaceImageClicked(e.api_token.icon.id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:t(()=>[a(n,{name:"pencil-btn",w:"21",h:"21"})]),_:1}),a($,{ref:"ps_image_icon_modal"},null,512),a(F,{ref:"ps_action_modal"},null,512),a(B,{ref:"ps_danger_dialog"},null,512)])):(m(),c(E,{key:2,uploadType:"icon",imageFile:e.form.icon,"onUpdate:imageFile":o[6]||(o[6]=l=>e.form.icon=l)},null,8,["imageFile"])),a(v,{textColor:"text-red-500 block"},{default:t(()=>[i(d(e.errors.icon),1)]),_:1})]),s("div",null,[a(u,{class:"text-base mb-2"},{default:t(()=>[i(d(e.$t("core__status_label")),1)]),_:1}),a(H,{value:e.form.status,"onUpdate:value":o[7]||(o[7]=l=>e.form.status=l),class:"font-normal",title:e.$t("core__publish_label")},null,8,["value","title"])]),s("div",ye,[a(_,{onClick:o[8]||(o[8]=l=>e.handleCancel()),type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:t(()=>[i(d(e.$t("core__be_btn_cancel")),1)]),_:1}),a(_,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:t(()=>[e.loading?(m(),c(T,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):k("",!0),e.success?(m(),c(n,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):k("",!0),e.success?(m(),c(u,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:t(()=>[i(d(e.$t("core__be_btn_saved")),1)]),_:1})):k("",!0),!e.loading&&!e.success?(m(),c(u,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:t(()=>[i(d(e.$t("core__be_btn_save")),1)]),_:1})):k("",!0)]),_:1})])])],32)])])]}),_:1})]),_:1})],64)}var Ye=ie(de,[["render",$e]]);export{Ye as default};
