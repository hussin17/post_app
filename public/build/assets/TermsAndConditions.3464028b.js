import b from"./PsContentContainer.e9e63bfe.js";import S from"./PsLabelTitle.1afa9191.js";import k from"./PsLabel.7cc3bda1.js";import g from"./PrivacySkeletor.aa9ade6e.js";import{u as v}from"./AboutUsStore.94300703.js";import y from"./PsFrontendLayout.321e9621.js";import{P as x}from"./PsValueStore.b4213564.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as m,c as s,b as e,w as n,a,p as U,t as V,f as C,g as l,F as L,aY as c}from"./app.af382b17.js";import"./vue-router.esm-bundler.84ad0e4c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-skeletor.esm.32495c65.js";/* empty css                     */import"./PsApiService.e3897525.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.73599f57.js";import"./FooterLinkSection.b70443bc.js";import"./PsLink.741277c6.js";import"./PsRouteLink.b1ca5aa0.js";import"./PsLabelCaption.864135d9.js";import"./PsIcon.0e44b0ec.js";import"./ProductParameterHolder.fd27bf91.js";import"./ps_constants.1e4471b7.js";import"./AppInfoStore.3dab5ef4.js";import"./PsNavTabBar.ee10308d.js";import"./PsDropdown.50fc1dc4.js";import"./PsDropdownSelect.9c3df235.js";import"./PsIconToggle.ee74024b.js";import"./LocationModal.1dafed17.js";import"./PsModal.521f4d13.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsLine.a8261381.js";import"./PsButton.50ea9ded.js";import"./PsInputWithLeftIcon.5e585d7c.js";import"./LocationParameterHolder.0d5c0db7.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.6e59f444.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.61bfefbe.js";import"./UserProvider.940163f9.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.55700c85.js";import"./PsConfirmDialog.81a56362.js";import"./PsUtils.aa012712.js";import"./PsNotificationBox.6b0524ca.js";import"./ProductStore.4b0b2789.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./NotificationStore.fafd23ed.js";import"./NotiUnRegisterHolder.eefb692e.js";const T={name:"PrivacyView",components:{PsContentContainer:b,PsLabelTitle:S,PsLabel:k,PrivacySkeletor:g},layout:y,setup(i){const t=v(),o=x().getLoginUserId();return t.loadAboutUs(o),{aboutUsStore:t}}},B={class:"sm:mt-32 lg:mt-36 mt-28 mb-16"},A={key:1};function H(i,t,d,o,N,w){const _=r("Head"),p=r("ps-label"),u=r("privacy-skeletor"),f=r("ps-content-container");return m(),s(L,null,[e(_,{title:i.$t("term_and_condition__term_and_condition")},null,8,["title"]),e(f,null,{content:n(()=>[a("div",B,[e(p,{class:"text-center font-semibold text-2xl sm:text-3xl"},{default:n(()=>[U(V(i.$t("term_and_condition__term_and_condition")),1)]),_:1}),o.aboutUsStore.aboutus.data!=null?(m(),C(p,{key:0,class:"mt-4"},{default:n(()=>[t[0]||(c(-1),t[0]=a("span",{innerHTML:o.aboutUsStore.aboutus.data.termsAndConditions},null,8,["innerHTML"]),c(1),t[0])]),_:1})):l("",!0),o.aboutUsStore.loading.value==!0?(m(),s("div",A,[e(u)])):l("",!0)])]),_:1})],64)}var Dt=P(T,[["render",H]]);export{Dt as default};