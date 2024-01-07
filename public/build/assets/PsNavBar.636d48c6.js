import{az as R,d as J,aA as Q,i as b,j as q,r as g,Q as F,o as p,c as _,a as s,m as V,b as t,w as o,p as l,t as n,g as M,f as N,T as G,n as K,O as I,J as D}from"./app.03d0793a.js";import{u as W}from"./UserProvider.eb24c714.js";import{P as j}from"./PsValueStore.98989d86.js";import{f as X}from"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import{u as Y,U as Z}from"./UserUnReadMessageParameterHolder.935f8896.js";import ee from"./PsIcon.14101206.js";import te from"./PsDropdown.59129fcd.js";import oe from"./PsLine.baababc4.js";import H from"./PsRouteLink.057d2d3a.js";import re from"./PsLabel.f69ed5af.js";import se from"./PsButton.506f0d87.js";import"./ps_constants.1e4471b7.js";import ae from"./PsConfirmDialog.6411bbd4.js";import{P as ne}from"./PsUtils.aa012712.js";import{u as le}from"./AppInfoStore.df8c993a.js";import{_ as ie}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsApiService.ebe2eb3a.js";import"./User.fb568515.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsModal.9e39943e.js";import"./vue-neat-modal.796ccbfb.js";const de=R(()=>Q(()=>import("./UserSettingModal.5e5025a6.js"),["assets/UserSettingModal.5e5025a6.js","assets/PsModal.9e39943e.js","assets/PsModal.f4698bd4.css","assets/vue-neat-modal.796ccbfb.js","assets/vue-neat-modal.29af7d11.css","assets/app.03d0793a.js","assets/app.0d4b29a3.css","assets/PsLine.baababc4.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/PsLabel.f69ed5af.js","assets/PsRouteLink.057d2d3a.js","assets/CreditCardModal.8fbea0f4.js","assets/PsLabelHeader4.38efa5ca.js","assets/PsInput.508a4652.js","assets/PsButton.506f0d87.js","assets/ProfileUpdateViewHolder.3e643083.js","assets/PsLoadingDialog.cb54104b.js","assets/PsLabelTitle.cac98e57.js","assets/UserProvider.eb24c714.js","assets/PsApiService.ebe2eb3a.js","assets/User.fb568515.js","assets/PsObject.a17ef38f.js","assets/RatingDetail.291ad5d1.js","assets/UserListParameterHolder.d110b747.js","assets/PsValueStore.98989d86.js","assets/DefaultPhoto.cc755f93.js","assets/ps_constants.1e4471b7.js","assets/ApiStatus.5720ba0b.js","assets/PsErrorDialog.34579d4a.js","assets/ProductStore.b9cceb1f.js","assets/ProductParameterHolder.fd27bf91.js","assets/Product.21fd7f06.js","assets/Category.3f13b0a3.js","assets/DefaultIcon.e76b39a5.js","assets/SubCategory.1b4176e0.js","assets/ItemLocationTownship.94979fe0.js","assets/PsSepetetedStore.9a31ac47.js","assets/PasswordUpdateModal.399c853e.js","assets/PsLabelCaption.f1a3ea15.js","assets/PsSecondaryButton.6509c9ea.js","assets/PsErrorDialog.faeef6fb.js","assets/PsIcon.14101206.js","assets/PsSuccessDialog.42de7dca.js","assets/PsLoadingDialog.348fce6b.js","assets/UserStore.442e09b8.js","assets/UserParameterHolder.e816da85.js","assets/PsInputWithRightIcon.626caf7d.js","assets/PsConfirmDialog.6411bbd4.js","assets/AppInfoStore.df8c993a.js","assets/AppInfoParameterHolder.e24d894d.js","assets/PsUtils.aa012712.js","assets/NotificationStore.c50bfaec.js","assets/NotiUnRegisterHolder.eefb692e.js"])),ue=J({components:{PsIcon:ee,PsDropdown:te,PsLine:oe,PsRouteLink:H,PsLabel:re,PsButton:se,PsRouteLink:H,PsConfirmDialog:ae,UserSettingModal:de},props:{topOfPage:{type:Boolean,default:!1}},setup(e){const i=b(),f=b(!1),y=W(),z=b(),L=Y(),a=new Z,d=le(),m=b();let h=j();const x=h.getLoginUserId();a.userId=x;async function B(){await y.getUser(x),z.value=y.user.data.userProfilePhoto}async function k(){await L.postUserUnreadMessageCount(a)}k(),q(async()=>{await B,await k});function v(){j.psValueStore.loadData(),h=j.psValueStore}function S(){I.Inertia.get(route("dashboard"))}function P(T=!0){T&&(f.value=!f.value)}function w(T,E){}function r(T,E){}function u(){i.value.openModal(D("core__be_logout"),D("logout_dialog_msg"),D("chat__confirm"),D("chat__cancel"),()=>{X.auth().signOut(),I.Inertia.post(route("logout"))},()=>{ne.log("cancel")})}function C(){f.value&&(f.value=!1),I.Inertia.get(route("login"))}function U(){f.value&&(f.value=!1),I.Inertia.get(route("login"))}const c=b(!0);function $(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?(localStorage.isDarkMode="false",c.value=!1):(localStorage.isDarkMode="true",c.value=!0),A()}A();function A(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?(document.documentElement.classList.add("dark"),c.value=!0):(document.documentElement.classList.remove("dark"),c.value=!1)}function O(){m.value.openModal()}return{toggleDarkMode:$,userunreadmsgStore:L,userProfile:z,isDarkMode:c,activeMobileMenu:f,psValueStore:h,userProvider:y,gotToHome:S,enter:w,leave:r,toggleMobileMenu:P,clickLogout:u,loginClicked:U,userNameClicked:v,registerClicked:C,ps_confirm_dialog:i,appInfoStore:d,user_setting_modal:m,openUserSetting:O}}}),me={class:"lg:w-large xl:w-feLarge mx-4 md:mx-6 lg:mx-auto flex items-center justify-between mt-3"},pe={class:"md:flex gap-6 hidden"},fe={class:"h-10 cursor-pointer"},ce={class:"flex gap-6 items-center"},ge={key:0,class:"flex gap-6 justify-between items-center"},_e={class:"relative"},he={key:0,class:"me-6 p-0.5 text-xs font-semibold rounded-full bg-fePrimary-500 text-feTextLight absolute -top-2 -right-8"},ve={class:"relative"},be={key:0,class:"me-6 p-0.5 text-xs font-semibold rounded-full bg-fePrimary-500 text-feTextLight absolute -top-2 -right-8"},ye={class:"flex items-center"},xe={class:"h-8 w-8 rounded-full"},ke=["alt"],Se=["src","alt"],Pe={class:"rounded-md shadow-xs w-[280px]"},we={class:"z-30"},Ce=s("hr",{class:"mt-2 mb-2 mx-2"},null,-1),Ue=s("hr",{class:"mt-2 mb-2 mx-2"},null,-1),$e={class:"hidden lg:inline"},Me={key:0,class:"border border-b-2 text-fePrimary-500 dark:text-textdark-500 h-auto mt-3 bg-feBackground dark:bg-feBackgroundDark pb-1"},Ie={class:"flex flex-col p-5 gap-6"},De={class:"h-10"};function ze(e,i,f,y,z,L){var S,P,w;const a=g("ps-route-link"),d=g("ps-icon"),m=g("ps-label"),h=g("ps-dropdown"),x=g("ps-button"),B=g("ps-confirm-dialog"),k=g("user-setting-modal"),v=F("lazy");return p(),_("nav",{class:K(["flex flex-col fixed w-full h-16 z-40 bg-feBackground dark:bg-backgroundDark shadow",e.topOfPage?"mt-10":"mt-0"])},[s("div",me,[s("div",pe,[s("div",fe,[V(s("img",{onClick:i[0]||(i[0]=(...r)=>e.gotToHome&&e.gotToHome(...r)),alt:"Navbar logo",width:"40px",height:"40px",class:"rounded:xl w-auto h-10 object-cover"},null,512),[[v,{src:e.$page.props.thumb3xUrl+"/"+((w=(P=(S=e.appInfoStore.appInfo.data)==null?void 0:S.frontendConfigSetting)==null?void 0:P.frontendLogo)==null?void 0:w.imgPath),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),t(a,{to:{name:"dashboard"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__home")),1)]),_:1}),t(a,{to:{name:"fe_category.index"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("category_list__title")),1)]),_:1},8,["to"]),t(a,{to:{name:"fe_blog"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__blogs")),1)]),_:1}),t(a,{to:{name:"fe_contact_us"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__contact_us")),1)]),_:1})]),s("div",{class:"block md:hidden cursor-pointer",onClick:i[1]||(i[1]=(...r)=>e.toggleMobileMenu&&e.toggleMobileMenu(...r))},[t(d,{class:"cursor-pointer",textColor:"text-feSecondary-800 dark:text-white",name:"menu",h:"24",w:"24"})]),s("div",ce,[e.$page.props.authUser!=null?(p(),_("div",ge,[t(a,{to:{name:"fe_chat_list"}},{default:o(()=>{var r,u,C,U,c,$;return[s("div",_e,[t(d,{class:"cursor-pointer",textColor:"text-feSecondary-800 dark:text-white hover:text-fePrimary-500",name:"message",h:"24",w:"24",viewBox:"0 0 23 23"}),parseInt((r=e.userunreadmsgStore.unreadCount.data)==null?void 0:r.buyerUnreadCount)+parseInt((u=e.userunreadmsgStore.unreadCount.data)==null?void 0:u.sellerUnreadCount)?(p(),_("div",he,n(parseInt((C=e.userunreadmsgStore.unreadCount.data)==null?void 0:C.buyerUnreadCount)+parseInt((U=e.userunreadmsgStore.unreadCount.data)==null?void 0:U.sellerUnreadCount)?parseInt((c=e.userunreadmsgStore.unreadCount.data)==null?void 0:c.buyerUnreadCount)+parseInt(($=e.userunreadmsgStore.unreadCount.data)==null?void 0:$.sellerUnreadCount):""),1)):M("",!0)])]}),_:1}),t(a,{to:{name:"fe_notification_list"}},{default:o(()=>{var r,u;return[s("div",ve,[t(d,{class:"cursor-pointer",textColor:"text-feSecondary-800 dark:text-white hover:text-fePrimary-500",name:"bell-outline",h:"24",w:"24",viewBox:"0 -2 18 23"}),(r=e.userunreadmsgStore.unreadCount.data)!=null&&r.notiUnreadCount?(p(),_("div",be,n((u=e.userunreadmsgStore.unreadCount.data)==null?void 0:u.notiUnreadCount),1)):M("",!0)])]}),_:1}),t(h,{horizontalAlign:"center",class:"ms-3 sm:ms-4 lg:ms-6 xxl:ms-8 w-full",h:"h-auto",boxPositioning:"mt-[16px] translate-x-16 lg:translate-x-20 xl:translate-x-24"},{select:o(()=>{var r,u;return[s("div",ye,[s("div",xe,[(r=e.$page.props.authUser)!=null&&r.user_cover_photo?V((p(),_("img",{key:0,class:"object-cover h-8 w-8 rounded-full cursor-pointer",alt:e.$t("core__be_profile")},null,8,ke)),[[v,{src:e.$page.props.uploadUrl+"/"+((u=e.$page.props.authUser)==null?void 0:u.user_cover_photo),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]):(p(),_("img",{key:1,class:"object-cover h-8 w-8 rounded-full cursor-pointer",src:e.$page.props.uploadUrl+"/default_profile.png",alt:e.$t("core__be_profile")},null,8,Se))]),t(d,{name:"downArrow"})])]}),list:o(()=>[s("div",Pe,[s("div",we,[t(a,{to:{name:"fe_profile"},textSize:"text-sm",class:"m-2 mt-4 flex border p-2 rounded hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer justify-center"},{default:o(()=>[t(m,{textColor:"text-gray-500"},{default:o(()=>[l(n(e.$t("core__view_profile")),1)]),_:1})]),_:1}),Ce,t(a,{to:{name:"fe_favourite_items"},textSize:"text-sm",class:"w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center"},{default:o(()=>[t(d,{name:"heartOutline",class:"ms-2"}),t(m,{class:"ms-2"},{default:o(()=>[l(n(e.$t("core__fe_favourites")),1)]),_:1})]),_:1}),s("button",{class:"w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center",hover:"",focus:"",colors:"",onClick:i[2]||(i[2]=(...r)=>e.openUserSetting&&e.openUserSetting(...r))},[t(d,{class:"ms-2",name:"setting"}),t(m,{class:"ms-2",textColor:""},{default:o(()=>[l(n(e.$t("profile__user_setting")),1)]),_:1})]),Ue,e.$page.props.canAccessAdminPanel?(p(),N(a,{key:0,to:{name:"admin.index"},textSize:"text-sm",class:"w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center"},{default:o(()=>[t(d,{name:"refresh",class:"ms-2"}),t(m,{class:"ms-2"},{default:o(()=>[l(n(e.$t("core__fe_switch_to_admin")),1)]),_:1})]),_:1},8,["to"])):M("",!0),s("button",{onClick:i[3]||(i[3]=(...r)=>e.clickLogout&&e.clickLogout(...r)),class:"w-full flex p-4 hover:bg-fePrimary-000 dark:hover:bg-fePrimary-900 cursor-pointer items-center"},[t(d,{name:"signOut",class:"ms-2",textColor:"text-red-500"}),t(m,{class:"ms-2",textColor:"text-red-500"},{default:o(()=>[l(n(e.$t("core__be_logout")),1)]),_:1})])])])]),_:1})])):(p(),N(m,{key:1,onClick:e.loginClicked,class:"font-medium text-sm dark:border-fePrimaryDark-accent px-4 py-2 cursor-pointer",textColor:"text-fePrimary-500"},{default:o(()=>[l(n(e.$t("ps_nav_bar__login")),1)]),_:1},8,["onClick"])),t(a,{to:{name:e.$page.props.authUser!=null?"fe_item_entry":"login"}},{default:o(()=>[t(x,{padding:"lg:px-4 lg:py-2 p-2"},{default:o(()=>[t(d,{name:"plus-circle",class:"me-0 lg:me-2",h:"24",w:"24"}),s("span",$e,n(e.$t("ps_nav_bar__submit_ad")),1)]),_:1})]),_:1},8,["to"])])]),t(G,null,{default:o(()=>[e.activeMobileMenu?(p(),_("div",Me,[s("div",Ie,[s("div",De,[V(s("img",{onClick:i[4]||(i[4]=(...r)=>e.gotToHome&&e.gotToHome(...r)),alt:"Navbar logo",width:"40px",height:"40px",class:"rounded:xl w-auto h-10 object-cover"},null,512),[[v,{src:e.$page.props.thumb1xUrl+"/"+e.$page.props.backendLogo.img_path,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),t(a,{to:{name:"dashboard"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__home")),1)]),_:1}),t(a,{to:{name:"fe_category.index"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("category_list__title")),1)]),_:1},8,["to"]),t(a,{to:{name:"fe_blog"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__blogs")),1)]),_:1}),t(a,{to:{name:"fe_contact_us"},textSize:"text-sm text-feSecondary-800 hover:text-fePrimary-500 font-medium cursor-pointer",class:"px-4 py-2"},{default:o(()=>[l(n(e.$t("ps_nav_bar__contact_us")),1)]),_:1})])])):M("",!0)]),_:1}),t(B,{ref:"ps_confirm_dialog"},null,512),t(k,{ref:"user_setting_modal"},null,512)],2)}var lt=ie(ue,[["render",ze]]);export{lt as default};
