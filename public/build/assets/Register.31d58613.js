import{S as R,b6 as T,b7 as B,b8 as V,H as D,i as u,r as d,o as y,c as j,b as t,a as g,f as b,w as o,p as s,t as r,g as z,ax as w,F as I,J as c}from"./app.af382b17.js";import A from"./PsLabel.7cc3bda1.js";import F from"./PsButton.50ea9ded.js";import H from"./PsInput.13da87dd.js";import{u as N}from"./UserProvider.940163f9.js";import{P as W}from"./PsValueStore.b4213564.js";import Z from"./PsCheckboxValue.5b45f472.js";import G from"./PsErrorDialog.f672708f.js";import q from"./PsSuccessDialog2.33bca2de.js";import J from"./PsRouteLink.b1ca5aa0.js";import $ from"./PrivacyModal.3c312910.js";import O from"./PsLine.a8261381.js";import{b as M}from"./PsApiService.e3897525.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./User.fb568515.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.1e4471b7.js";import"./ApiStatus.5720ba0b.js";import"./PsModal.521f4d13.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsLabelTitle.1afa9191.js";import"./AboutUsStore.94300703.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsIcon.0e44b0ec.js";R.add(T,B,V);const X={name:"RegisterView",components:{PsButton:F,PsLine:O,PsInput:H,PsLabel:A,PsCheckboxValue:Z,PsErrorDialog:G,PsRouteLink:J,PrivacyModal:$,PsSuccessDialog2:q,Head:D},setup(){W.psValueStore.isUserLoggedIn();const l=u(""),n=u(""),h=u(""),e=u(""),v=u(!1),p=u(!1),_=u(),i=u(),f=u(),a=N();a.userResource.message="";function C(E){/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(E.target.value)?v.value=!1:v.value=!0}async function S(){n.value==h.value?p.value==!0?await a.signUpWithEmailId(e.value,l.value,n.value,()=>{},()=>{}):_.value.openModal("",c("register__select_privacy_policy")):_.value.openModal("",c("register__passwords_not_match_error"))}function k(){}function x(E){p.value=E}function P(){p.value==!0||_.value.openModal(c("login__privacy_policy"),c("login__need_to_agree_privacy"))}function L(){f.value.openModal(x)}async function U(){p.value==!0?(await a.loginWithFacebookId(),a.userResource.status==M.SUCCESS&&i.value.openModal(c("register__success"),c("register__login_success"),c("register_ok"),()=>{})):_.value.openModal("",c("register__select_privacy_policy"))}async function m(){p.value==!0?(await a.loginWithAppleSignIn(),a.userResource.status==M.SUCCESS):_.value.openModal(c("register__privacy_policy"),c("register__need_to_agree_privacy"))}async function K(){p.value==!0?(await a.loginWithGoogleId(),a.userResource.status==M.SUCCESS&&i.value.openModal(c("register__success"),c("register__login_success"),c("register_ok"),()=>{})):_.value.openModal("",c("register__select_privacy_policy"))}return{clicked:S,email:l,password:n,confirmPassword:h,name:e,userProvider:a,checkedterms:p,ps_error_dialog:_,ps_success_dialog:i,loginClicked:k,agreePrivacyPolicyClicked:L,privacy_modal:f,facebookloginclicked:U,googleloginclicked:K,phoneloginclicked:P,validateEmail:C,validationEmail:v,appleloginclicked:m}}},Y={class:"sm:mt-32 lg:mt-36 mt-28 flex flex-col"},ee={class:"content-center mx-auto w-96"},te={class:"w-55 lg:w-80 flex flex-col mx-auto rounded-lg"},le={class:"w-full"},oe={class:"flex flex-row items-start mt-2 lg:mt-3"},se={class:"flex flex-auto justify-center mt-3"},re={class:"flex flex-row justify-center mt-4"},ae=g("div",{class:"my-4"},null,-1);function ie(l,n,h,e,v,p){const _=d("Head"),i=d("ps-label"),f=d("ps-input"),a=d("ps-button"),C=d("ps-checkbox-value"),S=d("ps-route-link"),k=d("ps-line"),x=d("font-awesome-icon"),P=d("ps-error-dialog"),L=d("ps-success-dialog-2"),U=d("privacy-modal");return y(),j(I,null,[t(_,{title:l.$t("register__register_title")},null,8,["title"]),g("div",null,[g("div",Y,[g("div",ee,[e.userProvider.userResource.message!=""?(y(),b(i,{key:0,class:"content-center bg-white text-general-200 px-4 py-4 rounded-md"},{default:o(()=>[s(r(e.userProvider.userResource.message),1)]),_:1})):z("",!0)]),g("div",te,[t(i,{class:"font-medium text-2xl mt-8 mx-auto lg:text-3xl mb-4"},{default:o(()=>[s(r(l.$t("register__register_title")),1)]),_:1}),g("form",le,[t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[s(r(l.$t("register__user_name")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:l.$t("register__user_name"),onKeyup:w(e.clicked,["enter"]),value:e.name,"onUpdate:value":n[0]||(n[0]=m=>e.name=m)},null,8,["placeholder","onKeyup","value"]),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[s(r(l.$t("register__email")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"email",placeholder:l.$t("register__email"),onKeyup:w(e.clicked,["enter"]),value:e.email,"onUpdate:value":n[1]||(n[1]=m=>e.email=m),onBlur:e.validateEmail},null,8,["placeholder","onKeyup","value","onBlur"]),e.validationEmail?(y(),b(i,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-fePrimary-500"},{default:o(()=>[s(r(l.$t("login__email_required_error")),1)]),_:1})):z("",!0),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[s(r(l.$t("register__password")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:l.$t("register__password"),onKeyup:w(e.clicked,["enter"]),value:e.password,"onUpdate:value":n[2]||(n[2]=m=>e.password=m),autocomplete:"off"},null,8,["placeholder","onKeyup","value"]),t(i,{class:"mt-4 lg:mt-5 font-medium text-base lg:text-xl w-full"},{default:o(()=>[s(r(l.$t("register__confirm_password")),1)]),_:1}),t(f,{class:"lg:mt-2 mt-1 w-full",type:"password",placeholder:l.$t("register__confirm_password"),onKeyup:w(e.clicked,["enter"]),value:e.confirmPassword,"onUpdate:value":n[3]||(n[3]=m=>e.confirmPassword=m),autocomplete:"off"},null,8,["placeholder","onKeyup","value"])]),e.userProvider.loading.value?(y(),b(a,{key:0,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 w-full py-3",disabled:!0},{default:o(()=>[s(r(l.$t("register__loading")),1)]),_:1})):(y(),b(a,{key:1,textSize:"text-xs lg:text-base",class:"mt-4 lg:mt-5 py-3",onClick:e.clicked,disabled:!1},{default:o(()=>[s(r(l.$t("register__register")),1)]),_:1},8,["onClick"])),g("div",oe,[t(C,{title:"",onClick:e.agreePrivacyPolicyClicked,class:"lg:mt-1 mt-0.5",value:e.checkedterms,"onUpdate:value":n[4]||(n[4]=m=>e.checkedterms=m)},null,8,["onClick","value"]),t(i,{class:"me-2 font-medium text-sm lg:text-base"},{default:o(()=>[s(r(l.$t("register__check_privacy_policy")),1)]),_:1}),t(S,{to:{name:"privacy"},class:"underline cursor-pointer text-sm",url:"https://www.panacea-soft.com/privacy"},{default:o(()=>[t(i,{class:"font-medium text-sm lg:text-base"},{default:o(()=>[s(r(l.$t("register__privacy_policy")),1)]),_:1})]),_:1})]),g("div",se,[t(i,{textColor:"text-feSecondary-400 dark:text-feSecondaryDark-grey",class:"cursor-pointer font-light text-xs lg:text-sm",onClick:e.loginClicked},{default:o(()=>[s(r(l.$t("register__already_member_login")),1)]),_:1},8,["onClick"])]),g("div",re,[t(k,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feSecondaryDark-grey"}),t(i,{class:"px-1 font-medium text-sm lg:text-base"},{default:o(()=>[s(r(l.$t("login__or")),1)]),_:1}),t(k,{class:"w-full lg:h-3 h-2 border border-s-0 border-e-0 border-feSecondary-400 dark:border-feSecondaryDark-grey"})]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",onClick:e.phoneloginclicked},{default:o(()=>[t(x,{icon:["fas","phone"],class:"text-feTextLight dark:text-feTextDark text-xl me-2"}),s(" "+r(l.$t("register__register_with_phone")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center",theme:"bg-blue-600 hover:bg-blue-700 text-feTextLight px-4 py-2",onClick:e.facebookloginclicked},{default:o(()=>[t(x,{icon:["fab","facebook-f"],class:"text-feTextLight text-xl me-2"}),s(" "+r(l.$t("register__register_with_facebook")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-2",theme:"bg-yellow-600 hover:bg-yellow-700 text-feTextLight px-4 py-2",id:"signinBtn",onClick:e.googleloginclicked},{default:o(()=>[t(x,{icon:["fab","google"],class:"text-feTextLight text-xl me-2"}),s(" "+r(l.$t("register__register_with_google")),1)]),_:1},8,["onClick"]),t(a,{textSize:"text-xs lg:text-base",class:"mt-3 lg:mt-4 py-3 flex justify-center mb-5",theme:"bg-gray-900 hover:bg-gray-700 text-feTextLight px-4 py-2",onClick:e.appleloginclicked},{default:o(()=>[t(x,{icon:["fab","apple"],class:"text-feTextLight text-xl me-2"}),s(" "+r(l.$t("register__register_with_apple")),1)]),_:1},8,["onClick"]),ae]),t(P,{ref:"ps_error_dialog"},null,512),t(L,{ref:"ps_success_dialog"},null,512)]),t(U,{ref:"privacy_modal"},null,512)])],64)}var je=Q(X,[["render",ie]]);export{je as default};