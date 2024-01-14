import y from"./PsContentContainer.e9e63bfe.js";import C from"./PsLabelHeader4.039eb42c.js";import U from"./PsLabel.7cc3bda1.js";import h from"./PsButton.50ea9ded.js";import x from"./PsIcon.0e44b0ec.js";import I from"./PsRouteLink.b1ca5aa0.js";import N from"./PsBreadcrumb2.e6f778f1.js";import V from"./PsNoResult.70174d4e.js";import{J as b,r as m,o as r,f as a,w as d,a as l,b as S,c as u,F as B,q as F,n as M,p as k,t as w,g as L}from"./app.af382b17.js";import{u as q}from"./UserListStore.bfbc4c5f.js";import z from"./UserListHorizontal.539834fa.js";import{P as H}from"./PsValueStore.b4213564.js";import{u as R}from"./UserStore.3c17d256.js";import{U as O}from"./UserParameterHolder.e816da85.js";import D from"./PsFrontendLayout.321e9621.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-router.esm-bundler.84ad0e4c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsApiService.e3897525.js";import"./User.fb568515.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./PsCard.245e57f6.js";import"./RatingShow.66d10ccb.js";import"./PsLabelCaption.864135d9.js";import"./PsLoadingDialog.e0024eaf.js";import"./PsModal.521f4d13.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsLine.a8261381.js";import"./PsLabelTitle.1afa9191.js";import"./UserFollowHolder.8b598f9e.js";import"./ps_constants.1e4471b7.js";import"./ProductStore.4b0b2789.js";import"./ProductParameterHolder.fd27bf91.js";import"./Product.21fd7f06.js";import"./DefaultPhoto.cc755f93.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./ApiStatus.5720ba0b.js";import"./FooterView.73599f57.js";import"./FooterLinkSection.b70443bc.js";import"./PsLink.741277c6.js";import"./AppInfoStore.3dab5ef4.js";import"./PsNavTabBar.ee10308d.js";import"./PsDropdown.50fc1dc4.js";import"./PsDropdownSelect.9c3df235.js";import"./PsIconToggle.ee74024b.js";import"./LocationModal.1dafed17.js";import"./PsInputWithLeftIcon.5e585d7c.js";import"./LocationParameterHolder.0d5c0db7.js";import"./ItemLocationTownshipStore.6e59f444.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsNavBar.61bfefbe.js";import"./UserProvider.940163f9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.55700c85.js";import"./PsConfirmDialog.81a56362.js";import"./PsUtils.aa012712.js";import"./PsNotificationBox.6b0524ca.js";import"./NotificationStore.fafd23ed.js";import"./NotiUnRegisterHolder.eefb692e.js";const J={name:"FollowingListView",components:{PsContentContainer:y,PsLabelHeader4:C,UserListHorizontal:z,PsLabel:U,PsButton:h,PsIcon:x,PsRouteLink:I,PsBreadcrumb2:N,PsNoResult:V},layout:D,props:["query","mobileSetting"],setup(t){var n,s;const _=H(),e=q("profile-following"),o=R(),p=_.getLoginUserId(),i=new O().getFollowingUsers();e.limit=(s=(n=t.mobileSetting)==null?void 0:n.default_loading_limit)!=null?s:12,i.loginUserId=t.query.userId,e.loadUserList(p,i),o.loadUser(t.query.userId);function c(){e.loadUserList(p,i)}return{userStore:e,loadMore:c,breadcrumbuserStore:o}},computed:{breadcrumb(){return[{label:b("ps_nav_bar__profile"),url:route("fe_profile")},{label:b("following_list__following_list"),color:"text-fePrimary-500"}]}}},T={class:"mt-32 mb-10"},j={class:"mb-6"},A={class:"mt-4"},G={key:0,class:"w-full"},K={class:"grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"},Q={class:"flex flex-col items-center"};function W(t,_,e,o,p,i){const c=m("ps-breadcrumb-2"),n=m("user-list-horizontal"),s=m("ps-button"),v=m("ps-no-result"),P=m("ps-content-container");return r(),a(P,null,{content:d(()=>{var f;return[l("div",T,[l("div",j,[S(c,{items:i.breadcrumb,class:""},null,8,["items"])]),l("div",A,[o.userStore.userList.data!=null?(r(),u("div",G,[l("div",K,[(r(!0),u(B,null,F(o.userStore.userList.data,g=>(r(),u("div",{class:"w-full",key:g.userId},[S(n,{user:g,storeName:"profile-following"},null,8,["user"])]))),128))]),l("div",Q,[o.userStore.loading.value==!1?(r(),a(s,{key:0,class:M(["font-medium mx-auto mt-6",o.userStore.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:d(()=>[k(w(t.$t("follower_list__load_more")),1)]),_:1},8,["onClick","class"])):(r(),a(s,{key:1,class:"font-medium mx-auto mt-6",onClick:o.loadMore,disabled:!0},{default:d(()=>[k(w(t.$t("follower_list__loading")),1)]),_:1},8,["onClick"]))])])):L("",!0),o.userStore.loading.value==!1&&((f=o.userStore.userList)==null?void 0:f.data)==null?(r(),a(v,{key:1,onOnClick:o.loadMore},null,8,["onOnClick"])):L("",!0)])])]}),_:1})}var ar=E(J,[["render",W]]);export{ar as default};