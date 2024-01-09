import{H as oe,i as V,J as g,r as d,Q as te,o as i,c,b as o,w as r,a as s,m as re,g as x,p as n,t as a,f as O,F as E,q as $,h as se,O as q}from"./app.89c3e968.js";import ae from"./PsContentContainer.6c825fed.js";import le from"./PsLabelHeader4.8743673d.js";import ie from"./PsCard.ffd3128c.js";import ne from"./PsLabel.ecef337a.js";import de from"./PsLabelCaption.01f53c86.js";import me from"./PsButton.b6c86d64.js";import ce from"./RatingShow.9b1115bd.js";import ue from"./PsRouteLink.6b23b1d0.js";import _e from"./PsIcon.6adcaac0.js";import fe from"./PsAdSense.ed3a42cb.js";import pe from"./ItemHorizontalItem.1c8ad3f1.js";import ge from"./ItemHorizontalSkeletorItem.7f403745.js";import{u as Se}from"./ProductStore.9d91f1fe.js";import{P as he}from"./ProductParameterHolder.fd27bf91.js";import be from"./PsConfirmDialog.d0a13f88.js";import xe from"./PsLoadingDialog.916fde15.js";import{U as ke}from"./UserBlockParameterHolder.5aa06675.js";import{P as we}from"./PsValueStore.f831f7aa.js";import{U as ye}from"./UserParameterHolder.e816da85.js";import{U as ve}from"./UserFollowHolder.8b598f9e.js";import{b as ee}from"./PsApiService.175a4dd2.js";import{P as J}from"./ps_constants.1e4471b7.js";import{u as Pe}from"./UserStore.d31b8799.js";import{u as Ie}from"./AppInfoStore.bcf60205.js";import{A as Ce}from"./AppInfoParameterHolder.e24d894d.js";/* empty css                     */import{P as Ue}from"./PsUtils.aa012712.js";import Le from"./PsFrontendLayout.f3111a4b.js";import He from"./PsBreadcrumb2.8198213e.js";import{h as De}from"./moment.9709ab41.js";import{_ as Ne}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-router.esm-bundler.971ec82b.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsLabelTitle4.f42d4b7e.js";import"./format.min.96be0c47.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./PsValueHolder.c1b56d68.js";import"./FavouriteItemStore.3265fab5.js";import"./PsSepetetedStore.9a31ac47.js";import"./FollowItemParameterHolder.30546a1a.js";import"./PsModal.82578ee4.js";import"./vue-neat-modal.bfa3eb2d.js";import"./PsLine.cb250f7e.js";import"./PsLabelTitle.76602054.js";import"./ApiStatus.5720ba0b.js";import"./vue-skeletor.esm.6e8ecef9.js";import"./UserListParameterHolder.d110b747.js";import"./FooterView.8119f61d.js";import"./FooterLinkSection.fdf442b9.js";import"./PsLink.f33fc75f.js";import"./PsNavTabBar.459bf2cb.js";import"./PsDropdown.f7b71c5c.js";import"./PsDropdownSelect.602ebf50.js";import"./PsIconToggle.96017040.js";import"./LocationModal.67ee554a.js";import"./PsInputWithLeftIcon.24340640.js";import"./LocationParameterHolder.a2e14593.js";import"./ItemLocationTownshipStore.31905c47.js";import"./PsNavBar.30e41bb8.js";import"./UserProvider.3fa4380f.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./UserUnReadMessageParameterHolder.b81fb77e.js";import"./PsNotificationBox.4e283d71.js";import"./NotificationStore.611a0b91.js";import"./NotiUnRegisterHolder.eefb692e.js";const ze={name:"OtherProfileView",components:{PsIcon:_e,PsBreadcrumb2:He,PsContentContainer:ae,PsLabelHeader4:le,PsCard:ie,PsLabel:ne,PsLabelCaption:de,PsButton:me,Rating:ce,ItemHorizontalItem:pe,ItemHorizontalSkeletorItem:ge,PsConfirmDialog:be,PsLoadingDialog:xe,PsRouteLink:ue,PsAdSense:fe,Head:oe},layout:Le,props:["query","dateFormat"],setup(l){var z,v;const S=V(),j=V(),e=V(),H=new ke,h=(v=(z=l.query)==null?void 0:z.userId)==null?void 0:v.toString(),b=Se(),w=new he().getLatestParameterHolder();w.addedUserId=h,b.resetProductList(h,w);const t=we().getLoginUserId(),y=new ye().getOtherUserData(),f=new ve,F=Ie(),k=new Ce;k.userId=t,y.loginUserId=t,y.id=h;let _=Pe("other");D();async function D(){await _.loadOtherUser(t,y);const u=await _.user.data?De(_.user.data.addedDate).format(l.dateFormat):"";S.value=u}b.paramHolder.addedUserId=h;const B=b.paramHolder.getUrlParamsAndQuery();async function M(){var u,p,P,I;t&&t!=J.NO_LOGIN_USER?(e.value.openModal(),((u=_.user.data)==null?void 0:u.isFollowed)=="1"?e.value.message=g("other_profile__removing_user_from_follower_list"):e.value.message=g("other_profile__adding_user_to_follower_list"),f.userId=t,f.followedUserId=(I=(P=(p=_.user)==null?void 0:p.data)==null?void 0:P.userId)!=null?I:"",await _.postUserFollow(f),D(),e.value.closeModal()):q.Inertia.get(route("login"))}function A(u){t&&t!=J.NO_LOGIN_USER?j.value.openModal(g("other_profile__confirm"),g("other_profile__confirm_to_block_user"),g("other_profile__block"),g("other_profile__cancel"),()=>{N(u)},()=>{Ue.log("Cancel")}):q.Inertia.get(route("login"))}async function N(u){H.loginUserId=t,H.addedUserId=u,e.value.openModal(),e.value.message=g("other_profile__adding_user_to_block_list");const p=await _.blockUser(H,t);e.value.closeModal(),p.status!=ee.ERROR&&p.status==ee.SUCCESS&&q.Inertia.get(route("dashboard"))}function R(){b.loadItemList(h,w)}return{itemStore:b,userStore:_,userItemParams:B,blockClicked:A,ps_confirm_dialog:j,psloading:e,followClick:M,LoginUserId:t,doBlock:N,appInfoStore:F,PsConst:J,JoinedDate:S,loadMoreActivePost:R}},computed:{breadcrumb(){return[{label:g("fe__other_profile"),url:route("fe_profile")},{label:this.userStore.user.data?this.userStore.user.data.userName:"",color:"text-fePrimary-500"}]}}},Oe={class:"mt-32 mb-10"},je={class:"xl:mb-7 lg:mb-11 sm:mb-7 mb-9"},Fe={class:"grid lg:grid-cols-12 sm:grid-cols-8 grid-cols-4 gap-4 sm:gap-3.5 lg:gap-4"},Be={class:"w-full col-span-4 sm:col-span-2 lg:col-span-3 mt-2"},Me={class:""},Ae={class:"w-full"},Re={class:"w-32 h-32 rounded-full mx-auto relative"},Ve={alt:"Placeholder",class:"rounded-full w-full h-full object-cover"},Ee={key:0,class:"w-8 h-8 bg-blue-500 rounded-full p-1 absolute bottom-0 right-0"},qe={class:"flex flex-col justify-center mb-2 mt-2"},Je={class:"flex items-center content-center justify-center px-4 mb-3 cursor-pointer"},Te={class:""},Ge={class:"cursor-pointer mb-2 flex justify-between"},Qe={class:"cursor-pointer flex justify-between"},Ke={key:0},We={key:1},Xe={key:1,class:"mt-5 py-2 px-4 text-center w-full border bg-feBackground border-1 border-feSecondary-300 dark:border-feSecondary-500 dark:bg-feSecondary-800 rounded lg:w-full mx-auto"},Ye={key:0,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9"},Ze={class:"w-full sm:mt-2"},$e={class:"w-full h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},eo={key:0,class:"flex justify-center mt-6 mb-4"},oo={class:"mx-auto"},to={key:1,class:"w-full col-span-4 sm:col-span-6 lg:col-span-9 mt-4 mb-6"},ro={class:"w-full"},so={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"},ao={key:2,class:"col-span-4 sm:col-span-6 lg:col-span-9 mt-2 mb-6 w-full flex justify-center"};function lo(l,S,j,e,H,h){const b=d("Head"),w=d("ps-breadcrumb-2"),T=d("ps-icon"),t=d("ps-label"),y=d("rating"),f=d("ps-route-link"),F=d("ps-card"),k=d("ps-button"),_=d("ps-label-header-4"),D=d("item-horizontal-item"),B=d("ps-ad-sense"),M=d("item-horizontal-skeletor-item"),A=d("ps-confirm-dialog"),N=d("ps-loading-dialog"),R=d("ps-content-container"),z=te("lazy");return i(),c(E,null,[o(b,{title:l.$t("fe__other_profile")},null,8,["title"]),o(R,null,{content:r(()=>{var v,u,p,P,I,G,Q,K,W;return[s("div",Oe,[s("div",je,[o(w,{items:h.breadcrumb,class:""},null,8,["items"])]),s("div",null,[s("div",Fe,[s("div",Be,[o(F,{class:"lg:rounded-lg bg-feSecondary-000 dark:bg-feSecondary-800 p-4"},{default:r(()=>{var m,C,U,L,X;return[s("div",Me,[s("div",Ae,[s("div",Re,[re(s("img",Ve,null,512),[[z,{src:l.$page.props.thumb1xUrl+"/"+((m=e.userStore.user.data)==null?void 0:m.userCoverPhoto),loading:l.$page.props.sysImageUrl+"/loading_gif.gif",error:l.$page.props.sysImageUrl+"/default_profile.png"}]]),((C=e.userStore.user.data)==null?void 0:C.isVerifybluemark)=="1"?(i(),c("div",Ee,[o(T,{name:"bluemark",textColor:"text-feSecondary-000",w:"24",h:"24"})])):x("",!0)])]),s("div",qe,[o(t,{textColor:"dark:text-feSecondary-200",class:"text-center text-xl font-semibold"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.userName:""),1)]),_:1})]),o(f,{to:{name:"fe_review_list",query:{user_id:(U=e.userStore.user.data)==null?void 0:U.userId}}},{default:r(()=>{var Y,Z;return[s("div",Je,[o(y,{rating:e.userStore.user.data?(Z=(Y=e.userStore.user)==null?void 0:Y.data)==null?void 0:Z.overallRating:0,maxStars:5,size:"md",iconColor:"text-yellow-500"},null,8,["rating"])])]}),_:1},8,["to"]),o(t,{textColor:"text-feSecondary-600 dark:text-feSecondary-400",class:"text-sm mb-3 text-center"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.ratingCount:"")+" "+a(l.$t("profile__reviews")),1)]),_:1}),e.userStore.user.data&&e.userStore.user.data.isShowEmail=="1"?(i(),O(t,{key:0,textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.userEmail:""),1)]),_:1})):x("",!0),e.userStore.user.data&&e.userStore.user.data.isShowPhone=="1"?(i(),O(t,{key:1,textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.userPhone:""),1)]),_:1})):x("",!0),o(t,{textColor:"dark:text-feSecondary-200",class:"text-sm mb-3 text-center"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.userAboutMe:""),1)]),_:1})]),s("div",Te,[o(t,{textColor:"text-feSecondary-500 dark:text-feSecondary-400",class:"text-xs mb-3 text-center"},{default:r(()=>[n(a(l.$t("profile__joined_on"))+" "+a(e.JoinedDate),1)]),_:1}),o(f,{to:{name:"fe_follower_list",query:{userId:(L=e.userStore.user.data)==null?void 0:L.userId}}},{default:r(()=>[s("div",Ge,[o(t,{class:"text-sm"},{default:r(()=>[n(a(l.$t("other_profile__followers")),1)]),_:1}),o(t,{class:"font-semibold text-sm"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.followerCount:"0"),1)]),_:1})])]),_:1},8,["to"]),o(f,{to:{name:"fe_following_list",query:{userId:(X=e.userStore.user.data)==null?void 0:X.userId}}},{default:r(()=>[s("div",Qe,[o(t,{class:"text-sm"},{default:r(()=>[n(a(l.$t("other_profile__followings")),1)]),_:1}),o(t,{class:"font-semibold text-sm"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.followingCount:"0"),1)]),_:1})])]),_:1},8,["to"])])]}),_:1}),((v=e.userStore.user.data)==null?void 0:v.userId)!=e.LoginUserId?(i(),c("div",{key:0,class:"text-center mt-6",onClick:S[0]||(S[0]=(...m)=>e.followClick&&e.followClick(...m))},[((u=e.userStore.user.data)==null?void 0:u.isFollowed)=="0"?(i(),c("div",Ke,[o(k,{rounded:"rounded",textSize:"text-sm",class:"w-full mx-auto"},{default:r(()=>[n(a(l.$t("other_profile__follow")),1)]),_:1})])):((p=e.userStore.user.data)==null?void 0:p.isFollowed)=="1"?(i(),c("div",We,[o(k,{rounded:"rounded",textSize:"text-sm",class:"w-full mx-auto"},{default:r(()=>[n(a(l.$t("other_profile__unfollow")),1)]),_:1})])):x("",!0)])):x("",!0),((Q=(G=(I=(P=e.appInfoStore)==null?void 0:P.appInfo)==null?void 0:I.data)==null?void 0:G.psAppSetting)==null?void 0:Q.isBlockUser)==e.PsConst.ONE?(i(),c("div",Xe,[o(t,{class:"text-sm cursor-pointer",onClick:S[1]||(S[1]=m=>{var C,U,L;return e.blockClicked((L=(U=(C=e.userStore.user)==null?void 0:C.data)==null?void 0:U.userId)!=null?L:"")})},{default:r(()=>[n(a(l.$t("other_profile__block_user")),1)]),_:1})])):x("",!0)]),((K=e.itemStore.itemList)==null?void 0:K.data)!=null?(i(),c("div",Ye,[s("div",Ze,[o(_,{class:"mt-8 mb-6 sm:mt-0 font-medium"},{default:r(()=>[n(a(e.userStore.user.data?e.userStore.user.data.userName+"'s":"")+" "+a(l.$t("other_profile__active_post")),1)]),_:1}),s("div",$e,[(i(!0),c(E,null,$(e.itemStore.itemList.data,m=>(i(),c("div",{class:"w-full h-full",key:m.id},[o(f,{to:{name:"item",params:{itemName:m.title.split(" ").join("-").toLowerCase(),imgName:m.defaultPhoto.imgPath},query:{item_id:m.id,item_name:m.title.split(" ").join("-").toLowerCase()}}},{default:r(()=>[o(D,{item:m},null,8,["item"])]),_:2},1032,["to"])]))),128))])]),((W=e.itemStore.itemList)==null?void 0:W.data)!=null&&e.itemStore.isNoMoreRecord.value==!1?(i(),c("div",eo,[e.itemStore.loading.value==!1?(i(),O(k,{key:0,onClick:se(e.loadMoreActivePost,["prevent"]),class:"flex flex-row",theme:"bg-fePrimary-500 dark:bg-fePrimaryDark-accent text-feTextLight dark:text-feTextDark capitalize px-4 py-1"},{default:r(()=>[n(a(l.$t("blog_list__load_more")),1)]),_:1},8,["onClick"])):(i(),O(k,{key:1,class:"mx-auto mt-8",disabled:!0},{default:r(()=>[n(a(l.$t("list__loading")),1)]),_:1}))])):x("",!0),s("div",oo,[o(B,{adFormat:"horizontal"})])])):e.itemStore.itemList!=null&&e.itemStore.loading.value?(i(),c("div",to,[s("div",ro,[s("div",so,[(i(),c(E,null,$(6,m=>s("div",{class:"w-full",key:m},[o(M)])),64))])])])):(i(),c("div",ao,[o(t,{textColor:"text-feSecondary-500 dark:text-feSecondaryDark-white lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:r(()=>[n(a(l.$t("list__no_result")),1)]),_:1})]))])])]),o(A,{ref:"ps_confirm_dialog"},null,512),o(N,{ref:"psloading",isClickOut:!1},null,512)]}),_:1})],64)}var Lt=Ne(ze,[["render",lo]]);export{Lt as default};