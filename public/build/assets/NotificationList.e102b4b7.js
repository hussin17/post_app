import{H as I,i as y,j as H,r as l,Q as R,o as e,c as u,b as m,w as r,a as c,p as d,t as p,m as M,f as N,F as L,q as T,n as U,g as b}from"./app.89c3e968.js";import V from"./PsButton.b6c86d64.js";import z from"./PsLabel.ecef337a.js";import B from"./PsAdSense.ed3a42cb.js";import{P as D}from"./PsValueStore.f831f7aa.js";import{u as F}from"./NotificationStore.611a0b91.js";import{N as A,a as j}from"./NotiHorizontalItem.638cdb5c.js";import O from"./PsFrontendLayout.f3111a4b.js";import{N as q,a as E}from"./NotiUnRegisterHolder.eefb692e.js";import{P}from"./ps_constants.1e4471b7.js";import Q from"./PsContentContainer.6c825fed.js";import G from"./PsLoadingDialog.916fde15.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./AppInfoStore.bcf60205.js";import"./PsApiService.175a4dd2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsIcon.6adcaac0.js";import"./PsDropdown.f7b71c5c.js";import"./UserUnReadMessageParameterHolder.b81fb77e.js";import"./PsConfirmDialog2.22351901.js";import"./PsModal.82578ee4.js";import"./vue-neat-modal.bfa3eb2d.js";import"./PsLine.cb250f7e.js";import"./PsUtils.aa012712.js";import"./moment.9709ab41.js";import"./FooterView.8119f61d.js";import"./FooterLinkSection.fdf442b9.js";import"./PsLink.f33fc75f.js";import"./PsRouteLink.6b23b1d0.js";import"./PsLabelCaption.01f53c86.js";import"./ProductParameterHolder.fd27bf91.js";import"./PsNavTabBar.459bf2cb.js";import"./PsDropdownSelect.602ebf50.js";import"./PsIconToggle.96017040.js";import"./LocationModal.67ee554a.js";import"./PsInputWithLeftIcon.24340640.js";import"./LocationParameterHolder.a2e14593.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.31905c47.js";import"./PsNavBar.30e41bb8.js";import"./UserProvider.3fa4380f.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsConfirmDialog.d0a13f88.js";import"./PsNotificationBox.4e283d71.js";import"./ProductStore.9d91f1fe.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./vue-router.esm-bundler.971ec82b.js";import"./PsLabelTitle.76602054.js";const K={name:"NotificationListView",components:{NotiHorizontalItem:A,PsButton:V,PsLabel:z,PsAdSense:B,PsContentContainer:Q,PsLoadingDialog:G,Head:I},props:["mobileSetting"],layout:O,setup(t){const g=D(),h=g.getLoginUserId(),o=F(),_=new j;_.userId=h,o.limit=6;const f=new q,a=new E,s=y(!0),n=y();setTimeout(async()=>{await k()},1e3);async function k(){await o.resetNotiList(_),n.value.closeModal(),s.value==!1}function x(){o.loadNotiList(_)}function w(){o.resetNotiList(_)}function C(i){}function v(i){i=="hide"?(a.platformName=P.PLATFORM,a.deviceId=localStorage.deviceToken,a.userId=h,o.unRegisterNotiToken(a)):(f.platformName=P.PLATFORM,f.deviceId=localStorage.deviceToken,f.loginUserId=h,o.registerNotiToken(f)),g.replaceNotiSetting(i)}return H(()=>{var i;s.value==!0&&((i=o.notiList)==null?void 0:i.data)==null&&n.value.openModal()}),{notiStore:o,notiClicked:C,loadMore:x,shownotiSetting:v,psValueStore:g,initial:s,ps_loading_dialog:n,handleRefresh:w,loadDataList:k}}},W={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},X={class:"mb-4"},Y={class:""},Z={class:"flex flex-row mb-16"},$={key:0,class:"w-3/4 mx-auto flex flex-col lg:p-4 p-2 sm:p-3 rounded"},oo={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"},to={key:1,class:"w-full flex flex-col"},io={class:"flex flex-col"};function eo(t,g,h,o,_,f){const a=l("Head"),s=l("ps-label"),n=l("ps-button"),k=l("noti-horizontal-item"),x=l("ps-content-container"),w=l("ps-loading-dialog"),C=R("lazy");return e(),u(L,null,[m(a,{title:t.$t("notification_list__notification_list")},null,8,["title"]),m(x,null,{content:r(()=>{var v,i;return[c("div",W,[c("div",X,[c("div",Y,[m(s,{class:"text-xl sm:text-2xl lg:text-3xl font-medium"},{default:r(()=>[d(p(t.$t("notification_list__notification_list")),1)]),_:1})]),c("div",Z,[((v=o.notiStore.notiList)==null?void 0:v.data)==null&&o.initial==!1?(e(),u("div",$,[M(c("img",oo,null,512),[[C,{src:t.$page.props.sysImageUrl+"/undraw_new_notifications_re_xpcv_1.png",loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),m(s,{class:"text-base text-center sm:text-2xl mb-3 mt-3"},{default:r(()=>[d(p(t.$t("noti_list__no_items")),1)]),_:1}),o.notiStore.loading.value==!1&&o.initial==!1?(e(),N(n,{key:0,class:"mx-auto mt-6",onClick:o.handleRefresh},{default:r(()=>[d(p(t.$t("refresh")),1)]),_:1},8,["onClick"])):(e(),N(n,{key:1,class:"mx-auto mt-6",onClick:o.handleRefresh,disabled:!0},{default:r(()=>[d(p(t.$t("list__loading")),1)]),_:1},8,["onClick"]))])):((i=o.notiStore.notiList)==null?void 0:i.data)!=null?(e(),u("div",to,[c("div",io,[(e(!0),u(L,null,T(o.notiStore.notiList.data,S=>(e(),u("div",{class:"w-full mt-2",key:S.id},[m(k,{noti:S,onClick:o.notiClicked},null,8,["noti","onClick"])]))),128))]),o.notiStore.loading.value==!1&&o.initial==!1?(e(),N(n,{key:0,class:U(["w-60 mx-auto mt-8",o.notiStore.isNoMoreRecord?"hidden":""]),onClick:o.loadMore},{default:r(()=>[d(p(t.$t("notification_list__load_more")),1)]),_:1},8,["onClick","class"])):o.initial==!1?(e(),N(n,{key:1,class:"w-60 mx-auto mt-8",onClick:o.loadMore,disabled:!0},{default:r(()=>[d(p(t.$t("notification_list__loading")),1)]),_:1},8,["onClick"])):b("",!0)])):b("",!0)])])])]}),_:1}),m(w,{ref:"ps_loading_dialog"},null,512)],64)}var dt=J(K,[["render",eo]]);export{dt as default};