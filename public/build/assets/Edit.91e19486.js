import{d as T,H as j,L as J,i as m,aJ as A,j as Q,J as _,r as n,Q as R,o as v,c as $,b as r,w as l,a as d,p,t as i,h as q,m as G,f as K,g as E,F as O}from"./app.94623934.js";import{e as V,d as W}from"./PsLayout.38886a49.js";import{u as X}from"./Validators.52e283a4.js";import Y from"./CheckBox.4ffe8945.js";import Z from"./RoleCheckbox.4659af93.js";import{P as N}from"./PsInput.fc15fc8e.js";import{P as x}from"./PsLabel.dab9a58c.js";import{P as ee}from"./PsButton.de8e2c9c.js";import{P as oe}from"./PsTextarea.23de1910.js";import{P as se}from"./PsLabelHeader4.692248a2.js";import{P as re}from"./PsIcon.ff30b54a.js";import{P as ae}from"./PsLoading.b049e7ec.js";import{P as te}from"./PsLabelCaption.f7ef295a.js";import{P as le}from"./PsBreadcrumb2.ab3eeba4.js";import{a as ne,P as ie}from"./PsActionModal.c02858ae.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./Icons.e6c27a10.js";import"./PsIcon1.01459ed6.js";import"./PsDraggable.81c5f8ff.js";const pe=T({name:"Edit",components:{Head:j,Link:J,CheckBox:Y,RoleCheckbox:Z,PsInput:N,PsLabel:x,PsButton:ee,PsTextarea:oe,PsLabelHeader4:se,PsIcon:re,PsLabelCaption:te,PsLoading:ae,PsBreadcrumb2:le,PsActionModal:ne,PsImageIconModal:ie,PsDangerDialog:V},layout:W,props:["errors","user","custom_field_headers"],setup(e){const o=m(!1),g=m(!1),C=m(!1),I=m(!1),B=m(!1),k=m(!1);let c=A({name:e.user.name,email:e.user.email,user_address:e.user.user_address,user_about_me:e.user.user_about_me,user_cover_photo:"",is_show_email:e.user.is_show_email==1,is_show_phone:e.user.is_show_phone==1,custom_fields:[],permissions:"",_method:"put"});const P=m(),f=m(),h=m(),{isEmpty:b,isNum:S,isEmail:M}=X(),D=(s,t,u="")=>{e.errors[s]=t?"":b(s,t,u),s=="name"&&(C.value.isError=!0),s=="password"&&(B.value.isError=!0),s=="conf_password"&&(k.value.isError=!0)},y=(s,t,u="",F="")=>{e.errors[s]=t?M(s,t,F):b(s,t,u),s=="email"&&(I.value.isError=!0)},w=(s,t,u="",F="")=>{e.errors[s]=t?S(s,t,F):b(s,t,u)},U=s=>{let t=s.keyCode?s.keyCode:s.which;(t<48||t>57)&&s.preventDefault()};function L(s){this.$inertia.post(route("registered_user.update",s),c,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{o.value=!1}})}function H({data:s,id:t}){c.custom_fields[t]=s.toString()}function z({data:s}){c.permissions=s.toString()}Q(()=>{e.user_custom_fields.map((s,t)=>{let u=s.data;c.custom_fields[s.custom_field_header_id]=u==="1"?!0:u==="0"?!1:u})});function a(s){P.value.openModal(_("conf_modal_label"),_("core__be_replace_img_label"),_("core__be_remove_img_label"),"image","trash","24","24",()=>{f.value.openModal()},()=>{h.value.openModal(_("core__be_remove_label"),_("core__be_are_u_sure_remove_photo"),_("core__be_btn_confirm"),_("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",s),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateEmptyInput:D,validateEmailInput:y,validateNumberInput:w,onlyNumber:U,form:c,handleSubmit:L,handleMultiSelect:H,handleUserMultiSelect:z,loading:o,success:g,replaceImageClicked:a,ps_danger_dialog:h,ps_image_icon_modal:f,ps_action_modal:P,input_name:C,input_email:I,input_password:B,input_confirm_password:k}},computed:{breadcrumb(){return[{label:_("core__be_dashboard_label"),url:route("admin.index")},{label:_("profile_label"),url:route("registered_user.index")},{label:"Edit Profile",color:"text-primary-500"}]}}}),ue={class:"rounded-xl"},me={class:"bg-primary-50 text-secondary-800 py-2.5 ps-4"},_e={class:"px-4 pt-6 dark:bg-backgroundDark"},fe={class:"grid w-full sm:w-1/2 gap-6"},ce={key:0,class:"flex items-end pt-4"},be={class:"flex flex-row justify-end mb-2.5"},ve={key:2,class:"transition-all duration-300"},ge={key:3,class:""};function ye(e,o,g,C,I,B){const k=n("Head"),c=n("ps-breadcrumb-2"),P=n("ps-label-header-6"),f=n("ps-label"),h=n("ps-icon"),b=n("ps-button"),S=n("ps-image-icon-modal"),M=n("ps-action-modal"),D=n("ps-danger-dialog"),y=n("ps-input"),w=n("ps-label-caption"),U=n("ps-loading"),L=n("ps-card"),H=n("ps-layout"),z=R("lazy");return v(),$(O,null,[r(k,{title:e.$t("edit_notification")},null,8,["title"]),r(H,null,{default:l(()=>[r(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),r(L,{class:"w-full h-auto"},{default:l(()=>[d("div",ue,[d("div",me,[r(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[p(i(e.$t("core__be_user_info")),1)]),_:1})]),d("div",_e,[d("form",{onSubmit:o[16]||(o[16]=q(a=>e.handleSubmit(e.user.id),["prevent"]))},[d("div",fe,[d("div",null,[r(f,{class:"text-base"},{default:l(()=>[p(i(e.$t("profile_photo")),1)]),_:1}),e.user.user_cover_photo?(v(),$("div",ce,[G(d("img",{width:"200",height:"200",class:"",alt:"Profile photo",onError:o[0]||(o[0]=a=>"/images/assets/default_profile.png")},null,544),[[z,{src:e.$page.props.uploadUrl+"/"+e.user.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),r(b,{type:"button",onClick:o[1]||(o[1]=a=>e.replaceImageClicked(e.user.user_cover_photo)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500",padding:"p-1.5",hover:"",focus:""},{default:l(()=>[r(h,{name:"editPencil",w:"19",h:"19"})]),_:1}),r(S,{ref:"ps_image_icon_modal"},null,512),r(M,{ref:"ps_action_modal"},null,512),r(D,{ref:"ps_danger_dialog"},null,512)])):(v(),$("input",{key:1,type:"file",accept:"image/*",onInput:o[2]||(o[2]=a=>e.form.user_cover_photo=a.target.files[0])},null,32))]),d("div",null,[r(f,{class:"text-base"},{default:l(()=>[p(i(e.$t("user_name_label")),1)]),_:1}),r(y,{type:"text",value:e.form.name,"onUpdate:value":o[3]||(o[3]=a=>e.form.name=a),placeholder:e.$t("user_name_label"),onKeyup:o[4]||(o[4]=a=>e.validateEmptyInput("name",e.form.name)),onBlur:o[5]||(o[5]=a=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),r(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(i(e.errors.name),1)]),_:1})]),d("div",null,[r(f,{class:"text-base"},{default:l(()=>[p(i(e.$t("email_label")),1)]),_:1}),r(y,{type:"text",value:e.form.email,"onUpdate:value":o[6]||(o[6]=a=>e.form.email=a),placeholder:e.$t("email_label"),onKeyup:o[7]||(o[7]=a=>e.validateEmailInput("email",e.form.email)),onBlur:o[8]||(o[8]=a=>e.validateEmailInput("email",e.form.email))},null,8,["value","placeholder"]),r(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(i(e.errors.email),1)]),_:1})]),d("div",null,[r(f,{class:"text-base"},{default:l(()=>[p(i(e.$t("password_label")),1)]),_:1}),r(y,{ref:"input_password",type:"password",value:e.form.password,"onUpdate:value":o[9]||(o[9]=a=>e.form.password=a),placeholder:e.$t("password_label"),onKeyup:o[10]||(o[10]=a=>e.validateEmptyInput("password",e.form.password)),onBlur:o[11]||(o[11]=a=>e.validateEmptyInput("password",e.form.password))},null,8,["value","placeholder"]),r(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(i(e.errors.password),1)]),_:1})]),d("div",null,[r(f,{class:"text-base"},{default:l(()=>[p(i(e.$t("conf_password_label")),1)]),_:1}),r(y,{ref:"input_confirm_password",type:"password",value:e.form.conf_password,"onUpdate:value":o[12]||(o[12]=a=>e.form.conf_password=a),placeholder:e.$t("conf_password_label"),onKeyup:o[13]||(o[13]=a=>e.validateEmptyInput("conf_password",e.form.conf_password)),onBlur:o[14]||(o[14]=a=>e.validateEmptyInput("conf_password",e.form.conf_password))},null,8,["value","placeholder"]),r(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[p(i(e.errors.conf_password),1)]),_:1})]),d("div",be,[r(b,{onClick:o[15]||(o[15]=a=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[p(i(e.$t("core__be_btn_cancel")),1)]),_:1}),r(b,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(v(),K(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):E("",!0),e.success?(v(),K(h,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):E("",!0),e.success?(v(),$("span",ve,i(e.$t("core__be_btn_saved")),1)):E("",!0),!e.loading&&!e.success?(v(),$("span",ge,i(e.$t("core__be_btn_save")),1)):E("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ve=de(pe,[["render",ye]]);export{Ve as default};
