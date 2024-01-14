import{H,J as x,r,o as t,c as i,b as s,w as _,a as e,p as g,t as b,F as v,q as L,f as w,g as S,n as z}from"./app.af382b17.js";import V from"./PsContentContainer.e9e63bfe.js";import B from"./PsLabelHeader4.039eb42c.js";import N from"./PsLabel.7cc3bda1.js";import M from"./PsButton.50ea9ded.js";import R from"./PsIcon.0e44b0ec.js";import j from"./PsRouteLink.b1ca5aa0.js";import O from"./PsNoResult.70174d4e.js";import T from"./ItemHorizontalItem.98b2e542.js";import U from"./ItemHorizontalSkeletorItem.1efc3e0a.js";import{u as q,F as D}from"./FollowItemParameterHolder.e161240b.js";import{P as E}from"./PsValueStore.b4213564.js";import J from"./PsFrontendLayout.321e9621.js";import A from"./PsBreadcrumb2.e6f778f1.js";/* empty css                     */import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-router.esm-bundler.84ad0e4c.js";import"./PsLabelTitle4.02e2d257.js";import"./PsCard.245e57f6.js";import"./ps_constants.1e4471b7.js";import"./PsAdSense.ea320f9b.js";import"./AppInfoStore.3dab5ef4.js";import"./PsApiService.e3897525.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.e0024eaf.js";import"./PsModal.521f4d13.js";import"./vue-neat-modal.9cc57e3a.js";import"./PsLine.a8261381.js";import"./PsLabelTitle.1afa9191.js";import"./format.min.a954d99f.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./PsValueHolder.d6409b12.js";import"./ProductStore.4b0b2789.js";import"./ProductParameterHolder.fd27bf91.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.601a304c.js";import"./moment.9709ab41.js";import"./PsUtils.aa012712.js";import"./vue-skeletor.esm.32495c65.js";import"./FooterView.73599f57.js";import"./FooterLinkSection.b70443bc.js";import"./PsLink.741277c6.js";import"./PsLabelCaption.864135d9.js";import"./PsNavTabBar.ee10308d.js";import"./PsDropdown.50fc1dc4.js";import"./PsDropdownSelect.9c3df235.js";import"./PsIconToggle.ee74024b.js";import"./LocationModal.1dafed17.js";import"./PsInputWithLeftIcon.5e585d7c.js";import"./LocationParameterHolder.0d5c0db7.js";import"./ItemLocationTownshipStore.6e59f444.js";import"./PsNavBar.61bfefbe.js";import"./UserProvider.940163f9.js";import"./UserListParameterHolder.d110b747.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.55700c85.js";import"./PsConfirmDialog.81a56362.js";import"./PsNotificationBox.6b0524ca.js";import"./NotificationStore.fafd23ed.js";import"./NotiUnRegisterHolder.eefb692e.js";const K={name:"FollowerItemListView",components:{PsContentContainer:V,PsLabelHeader4:B,PsLabel:N,PsNoResult:O,ItemHorizontalItem:T,PsButton:M,PsIcon:R,PsBreadcrumb2:A,ItemHorizontalSkeletorItem:U,PsRouteLink:j,Head:H},props:["mobileSetting"],layout:J,setup(l){var c,p;const n=E(),a=n.getLoginUserId(),o=new D,m=q();o.itemLocationId=n.locationId,o.itemLocationTownship=n.subLocationId,m.limit=(p=(c=l.mobileSetting)==null?void 0:c.default_loading_limit)!=null?p:12,m.loadItemList(a,o);function f(){m.loadItemList(a,o)}function u(){m.resetProductList(a,o)}return{itemFollowerProvider:m,loadMore:f,handleRefresh:u}},computed:{breadcrumb(){return[{label:x("ps_nav_bar__profile"),url:route("fe_profile")},{label:x("follower_item_list__follower_item_list"),color:"text-fePrimary-500"}]}}},Q={class:"sm:mt-32 lg:mt-36 mt-28"},W={class:"flex items-center mt-24"},X={class:"pt-1 lg:flex md:flex lg:justify-between md:justify-between mb-2"},Y={class:"flex flex-col"},Z={class:"flex flex-col mb-8"},$={class:"w-full flex flex-col"},oo={key:0},to={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},eo={key:1},ro={class:"grid grid-cols-4 sm:grid-cols-4 md:grid-cols-9 lg:grid-cols-12 md:gap-6 gap-4"},io={key:2,class:"flex text-center content-center flex-col"};function lo(l,n,a,o,m,f){const u=r("Head"),c=r("ps-breadcrumb-2"),p=r("ps-label-header-4"),F=r("item-horizontal-item"),I=r("item-horizontal-skeletor-item"),y=r("ps-no-result"),h=r("ps-button"),C=r("ps-content-container");return t(),i(v,null,[s(u,{title:l.$t("follower_item_list__follower_item_list")},null,8,["title"]),s(C,null,{content:_(()=>{var P,k;return[e("div",Q,[e("div",W,[s(c,{items:f.breadcrumb,class:"mb-4 sm:mb-6"},null,8,["items"])]),e("div",X,[s(p,{class:"mb-4 font-medium"},{default:_(()=>[g(b(l.$t("follower_item_list__follower_item_list")),1)]),_:1})]),e("div",Y,[e("div",Z,[e("div",$,[((P=o.itemFollowerProvider.itemList)==null?void 0:P.data)!=null?(t(),i("div",oo,[e("div",to,[(t(!0),i(v,null,L(o.itemFollowerProvider.itemList.data,d=>(t(),i("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:d.id},[s(F,{item:d},null,8,["item"])]))),128))])])):o.itemFollowerProvider.loading.value==!0?(t(),i("div",eo,[e("div",ro,[(t(),i(v,null,L(3,d=>e("div",{class:"w-full col-span-4 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3",key:d},[s(I)])),64))])])):(t(),i("div",io,[o.itemFollowerProvider.loading.value==!1&&((k=o.itemFollowerProvider.itemList)==null?void 0:k.data)==null?(t(),w(y,{key:0,onOnClick:o.loadMore},null,8,["onOnClick"])):S("",!0)]))]),o.itemFollowerProvider.loading.value==!1?(t(),w(h,{key:0,class:z(["mx-auto mt-8",o.itemFollowerProvider.isNoMoreRecord.value?"hidden":""]),onClick:o.loadMore},{default:_(()=>[g(b(l.$t("list__load_more")),1)]),_:1},8,["onClick","class"])):(t(),w(h,{key:1,class:"mx-auto mt-8",onClick:o.loadMore,disabled:!0},{default:_(()=>[g(b(l.$t("list__loading")),1)]),_:1},8,["onClick"]))])])])]}),_:1})],64)}var Lt=G(K,[["render",lo]]);export{Lt as default};