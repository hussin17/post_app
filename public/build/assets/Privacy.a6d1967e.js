import{H as f,r,o as p,c as s,b as e,w as m,a as n,p as b,t as v,f as S,g as l,F as k,aY as c}from"./app.94623934.js";import g from"./PsContentContainer.bffb25a3.js";import P from"./PsLabelTitle.251aaca7.js";import x from"./PsLabel.6f218a30.js";import U from"./PrivacySkeletor.9bf4c0e2.js";import{u as V}from"./AboutUsStore.1861374b.js";import H from"./PsFrontendLayout.3e88b6f0.js";import{P as L}from"./PsValueStore.4aa1bdc1.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-router.esm-bundler.5f0bc2a6.js";import"./vue-skeletor.esm.c3b1ca76.js";/* empty css                     */import"./PsApiService.16e28b45.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.f25bf7bb.js";import"./FooterLinkSection.3239eec3.js";import"./PsLink.1e089402.js";import"./PsRouteLink.1446a036.js";import"./PsLabelCaption.106a532d.js";import"./PsIcon.ebbfcfb3.js";import"./ProductParameterHolder.fd27bf91.js";import"./ps_constants.1e4471b7.js";import"./AppInfoStore.7a7c38d9.js";import"./PsNavTabBar.ac32e95a.js";import"./PsDropdown.915108dc.js";import"./PsDropdownSelect.1a7ab020.js";import"./PsIconToggle.c4f04119.js";import"./LocationModal.585bfc4e.js";import"./PsModal.3bf2e071.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"./PsButton.3558548a.js";import"./PsInputWithLeftIcon.d60c2647.js";import"./LocationParameterHolder.d72a801e.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.b891343d.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.f3df1765.js";import"./UserProvider.f22e16f7.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.d3222792.js";import"./PsConfirmDialog.88160560.js";import"./PsUtils.aa012712.js";import"./PsNotificationBox.45466179.js";import"./ProductStore.4da76557.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./NotificationStore.902df771.js";import"./NotiUnRegisterHolder.eefb692e.js";const C={name:"PrivacyView",components:{PsContentContainer:g,PsLabelTitle:P,PsLabel:x,PrivacySkeletor:U,Head:f},layout:H,setup(i){const t=V(),o=L().getLoginUserId();return t.loadAboutUs(o),{aboutUsStore:t}}},T={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},N={key:1};function w(i,t,u,o,F,$){const _=r("Head"),a=r("ps-label"),d=r("privacy-skeletor"),y=r("ps-content-container");return p(),s(k,null,[e(_,{title:i.$t("privacy_policy__privacy_policy")},null,8,["title"]),e(y,null,{content:m(()=>[n("div",T,[e(a,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:m(()=>[b(v(i.$t("privacy_policy__privacy_policy")),1)]),_:1}),o.aboutUsStore.aboutus.data!=null?(p(),S(a,{key:0,class:"mt-4"},{default:m(()=>[t[0]||(c(-1),t[0]=n("span",{innerHTML:o.aboutUsStore.aboutus.data.privacypolicy},null,8,["innerHTML"]),c(1),t[0])]),_:1})):l("",!0),o.aboutUsStore.loading.value==!0?(p(),s("div",N,[e(d)])):l("",!0)])]),_:1})],64)}var Et=B(C,[["render",w]]);export{Et as default};
