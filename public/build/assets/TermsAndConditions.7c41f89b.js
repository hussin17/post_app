import b from"./PsContentContainer.bffb25a3.js";import S from"./PsLabelTitle.251aaca7.js";import k from"./PsLabel.6f218a30.js";import g from"./PrivacySkeletor.9bf4c0e2.js";import{u as v}from"./AboutUsStore.1861374b.js";import y from"./PsFrontendLayout.3e88b6f0.js";import{P as x}from"./PsValueStore.4aa1bdc1.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as m,c as s,b as e,w as n,a,p as U,t as V,f as C,g as l,F as L,aY as c}from"./app.94623934.js";import"./vue-router.esm-bundler.5f0bc2a6.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-skeletor.esm.c3b1ca76.js";/* empty css                     */import"./PsApiService.16e28b45.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.f25bf7bb.js";import"./FooterLinkSection.3239eec3.js";import"./PsLink.1e089402.js";import"./PsRouteLink.1446a036.js";import"./PsLabelCaption.106a532d.js";import"./PsIcon.ebbfcfb3.js";import"./ProductParameterHolder.fd27bf91.js";import"./ps_constants.1e4471b7.js";import"./AppInfoStore.7a7c38d9.js";import"./PsNavTabBar.ac32e95a.js";import"./PsDropdown.915108dc.js";import"./PsDropdownSelect.1a7ab020.js";import"./PsIconToggle.c4f04119.js";import"./LocationModal.585bfc4e.js";import"./PsModal.3bf2e071.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"./PsButton.3558548a.js";import"./PsInputWithLeftIcon.d60c2647.js";import"./LocationParameterHolder.d72a801e.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.b891343d.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.f3df1765.js";import"./UserProvider.f22e16f7.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.d3222792.js";import"./PsConfirmDialog.88160560.js";import"./PsUtils.aa012712.js";import"./PsNotificationBox.45466179.js";import"./ProductStore.4da76557.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./NotificationStore.902df771.js";import"./NotiUnRegisterHolder.eefb692e.js";const T={name:"PrivacyView",components:{PsContentContainer:b,PsLabelTitle:S,PsLabel:k,PrivacySkeletor:g},layout:y,setup(i){const t=v(),o=x().getLoginUserId();return t.loadAboutUs(o),{aboutUsStore:t}}},B={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},A={key:1};function H(i,t,d,o,N,w){const _=r("Head"),p=r("ps-label"),u=r("privacy-skeletor"),f=r("ps-content-container");return m(),s(L,null,[e(_,{title:i.$t("term_and_condition__term_and_condition")},null,8,["title"]),e(f,null,{content:n(()=>[a("div",B,[e(p,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:n(()=>[U(V(i.$t("term_and_condition__term_and_condition")),1)]),_:1}),o.aboutUsStore.aboutus.data!=null?(m(),C(p,{key:0,class:"mt-4"},{default:n(()=>[t[0]||(c(-1),t[0]=a("span",{innerHTML:o.aboutUsStore.aboutus.data.termsAndConditions},null,8,["innerHTML"]),c(1),t[0])]),_:1})):l("",!0),o.aboutUsStore.loading.value==!0?(m(),s("div",A,[e(u)])):l("",!0)])]),_:1})],64)}var Dt=P(T,[["render",H]]);export{Dt as default};