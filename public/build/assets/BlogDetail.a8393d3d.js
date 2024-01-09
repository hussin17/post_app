import w from"./PsContentContainer.6c825fed.js";import k from"./PsRouteLink.6b23b1d0.js";import B from"./PsLabelHeader3.ed8074ff.js";import D from"./PsAdSense.ed3a42cb.js";import{u as V}from"./BlogStore.d9541e55.js";import H from"./PsFrontendLayout.f3111a4b.js";import{P as C}from"./PsValueStore.f831f7aa.js";import{H as I,J as m,r as e,Q as L,o as f,c as h,b as r,w as S,a as t,p as i,t as y,m as F,g as U,F as $}from"./app.89c3e968.js";import N from"./PsBreadcrumb2.8198213e.js";import{h as z}from"./moment.9709ab41.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-router.esm-bundler.971ec82b.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsLabel.ecef337a.js";import"./AppInfoStore.bcf60205.js";import"./PsApiService.175a4dd2.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./ps_constants.1e4471b7.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsSepetetedStore.9a31ac47.js";import"./FooterView.8119f61d.js";import"./FooterLinkSection.fdf442b9.js";import"./PsLink.f33fc75f.js";import"./PsLabelCaption.01f53c86.js";import"./PsIcon.6adcaac0.js";import"./ProductParameterHolder.fd27bf91.js";import"./PsNavTabBar.459bf2cb.js";import"./PsDropdown.f7b71c5c.js";import"./PsDropdownSelect.602ebf50.js";import"./PsIconToggle.96017040.js";import"./LocationModal.67ee554a.js";import"./PsModal.82578ee4.js";import"./vue-neat-modal.bfa3eb2d.js";import"./PsLine.cb250f7e.js";import"./PsButton.b6c86d64.js";import"./PsInputWithLeftIcon.24340640.js";import"./LocationParameterHolder.a2e14593.js";import"./ItemLocationTownship.94979fe0.js";import"./ItemLocationTownshipStore.31905c47.js";import"./PsNavBar.30e41bb8.js";import"./UserProvider.3fa4380f.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.b81fb77e.js";import"./PsConfirmDialog.d0a13f88.js";import"./PsUtils.aa012712.js";import"./PsNotificationBox.4e283d71.js";import"./ProductStore.9d91f1fe.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./NotificationStore.611a0b91.js";import"./NotiUnRegisterHolder.eefb692e.js";const q={name:"BlogDetailView",components:{PsBreadcrumb2:N,PsContentContainer:w,PsRouteLink:k,PsLabelHeader3:B,PsAdSense:D,Head:I},props:["query"],layout:H,setup(o){const l=o.query.blogId,a=C().getLoginUserId(),s=V();return s.loadBlog(l,a),{blogStore:s,moment:z}},computed:{breadcrumb(){return[{label:m("item_list__home"),url:route("dashboard")},{label:m("blogblog_list__blog"),url:route("fe_blog")},{label:m("blogblog_list__blogDetail"),color:"text-fePrimary-500"}]}}},A={class:"lg:mt-36 sm:mt-36 mt-28"},M={class:"flex flex-col"},j={class:"lg:my-12 mt-7 mb-12"},E={class:"text-center sm:mb-10 mb-6"},J={class:"text-sm font-medium text-feSecondary-500 dark:text-feSecondary-400"},Q=i("Admin "),R=t("span",{class:"mx-6"},"|",-1),G={class:"w-auto cursor-pointer"},K={alt:"Placeholder",width:"300px",height:"200px",class:"block w-full rounded-lg lg:h-96 h-56 sm:h-72 object-cover"},O={class:"lg:mt-8 mt-6"},W={key:0},X=["innerHTML"],Y={class:"w-mobile sm:w-median lg:w-large h-auto mx-auto"};function Z(o,l){const n=e("Head"),a=e("ps-breadcrumb-2"),s=e("ps-label-header-3"),v=e("ps-content-container"),P=e("ps-ad-sense"),x=L("lazy");return f(),h($,null,[r(n,{title:o.$t("blogblog_list__blogDetail")},null,8,["title"]),r(v,null,{content:S(()=>{var p,d,c,_,g;return[t("div",A,[r(a,{items:o.breadcrumb,class:""},null,8,["items"]),t("div",M,[t("div",j,[t("div",E,[r(s,{textColor:"dark:text-feSecondary-200 text-feSecondary-800",class:"font-semibold sm:mb-8 mb-4"},{default:S(()=>{var b,u;return[i(y((u=(b=o.blogStore.blog)==null?void 0:b.data)==null?void 0:u.name),1)]}),_:1}),t("p",J,[Q,R,i(" "+y(o.moment((d=(p=o.blogStore.blog)==null?void 0:p.data)==null?void 0:d.addedDate).format(o.$page.props.dateFormat)),1)])]),t("div",G,[F(t("img",K,null,512),[[x,{src:o.$page.props.thumb3xUrl+"/"+((g=(_=(c=o.blogStore.blog)==null?void 0:c.data)==null?void 0:_.defaultPhoto)==null?void 0:g.imgPath),loading:o.$page.props.sysImageUrl+"/loading_gif.gif",error:o.$page.props.sysImageUrl+"/default_photo.png"}]]),t("div",O,[o.blogStore.blog.data!=null?(f(),h("p",W,[t("span",{class:"font-normal text-base text-feSecondary-600 dark:text-feSecondary-200",innerHTML:o.blogStore.blog.data.description},null,8,X)])):U("",!0)])])])])])]}),_:1}),t("div",Y,[r(P,{adFormat:"horizontal"})])],64)}var mt=T(q,[["render",Z]]);export{mt as default};