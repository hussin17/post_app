import{i as C,r as n,Q as P,o as f,c as S,a as r,b as o,w as l,m as I,g as y,p as g,t as m,f as v,F as N,J as k,O as L}from"./app.89c3e968.js";import F from"./PsCard.ffd3128c.js";import B from"./PsLabel.ecef337a.js";import H from"./PsButton.b6c86d64.js";import V from"./PsIcon.6adcaac0.js";import z from"./RatingShow.9b1115bd.js";import D from"./PsLabelCaption.01f53c86.js";import E from"./PsRouteLink.6b23b1d0.js";import R from"./PsLoadingDialog.916fde15.js";import{U as O}from"./User.fb568515.js";import{u as j}from"./UserListStore.f7ef6fea.js";import{u as M}from"./UserStore.d31b8799.js";import{P as q}from"./PsValueStore.f831f7aa.js";import{U as G}from"./UserFollowHolder.8b598f9e.js";import{P as J}from"./ps_constants.1e4471b7.js";import{U}from"./UserParameterHolder.e816da85.js";import{u as Q}from"./ProductStore.9d91f1fe.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.82578ee4.js";import"./vue-neat-modal.bfa3eb2d.js";import"./PsLine.cb250f7e.js";import"./PsLabelTitle.76602054.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./PsApiService.175a4dd2.js";import"./UserListParameterHolder.d110b747.js";import"./PsSepetetedStore.9a31ac47.js";import"./DefaultPhoto.cc755f93.js";import"./ApiStatus.5720ba0b.js";import"./ProductParameterHolder.fd27bf91.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";const A={name:"UserListHorizontal",components:{PsCard:F,PsLabel:B,PsButton:H,PsIcon:V,Rating:z,PsLabelCaption:D,PsRouteLink:E,PsLoadingDialog:R},props:{user:{type:O},onClick:Function,storeName:{type:String,default:""}},setup(t){const p=Q("detail"),s=q().getLoginUserId(),u=C(),h=new G,a=new U().getFollowerUsers(),d=new U().getFollowingUsers();a.loginUserId=s,d.loginUserId=s;const i=j(t.storeName),c=M(t.storeName);async function _(x){s&&s!=J.NO_LOGIN_USER?(u.value.openModal(),x.isFollowed=="1"?u.value.message=k("other_profile__removing_user_from_follower_list"):u.value.message=k("other_profile__adding_user_to_follower_list"),h.userId=s,h.followedUserId=x.userId,await c.postUserFollow(h),w(),u.value.closeModal()):L.Inertia.get(route("login"))}async function w(){t.storeName=="profile-follower"?await i.refleshUserFollowerFollowingList(s,a):t.storeName=="profile-following"?await i.refleshUserFollowerFollowingList(s,d):t.storeName=="userSearch"?await c.refleshUserSearchList(s,c.userparamHolder):await p.loadItem(t.storeName,s)}return{userListStore:i,followClick:_,LoginUserId:s,psloading:u}}},K={class:"shadow-sm relative bg-feSecondary-50 dark:bg-feSecondary-800 rounded-lg flex flex-col gap-4 p-4"},W={class:"flex gap-4"},X={class:"w-20 h-20 relative cursor-pointer"},Y={alt:"Placeholder",width:"15px",height:"10px",class:"w-full h-full rounded-full object-cover"},Z={key:0,class:"w-8 h-8 bg-blue-500 rounded-full p-1 absolute bottom-0 right-0"},$={class:"grow flex flex-col gap-2 justify-center truncate"},ee={class:"flex gap-4 h-6"},oe=["href"],te=["href"],re={class:"self-center hidden"},se={class:"grid grid-cols-2"},le={class:"flex items-center gap-1"},ae={class:"flex items-center gap-1"};function ie(t,p,e,s,u,h){const a=n("ps-icon"),d=n("ps-route-link"),i=n("ps-label"),c=n("rating"),_=n("router-link"),w=n("ps-button"),x=n("ps-loading-dialog"),b=P("lazy");return f(),S(N,null,[r("div",K,[r("div",W,[o(d,{to:{name:"fe_other_profile",params:{userId:e.user.userId}}},{default:l(()=>[r("div",X,[I(r("img",Y,null,512),[[b,{src:t.$page.props.thumb1xUrl+"/"+e.user.userCoverPhoto,loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_profile.png"}]]),e.user.isVerifybluemark=="1"?(f(),S("div",Z,[o(a,{name:"bluemark",textColor:"text-feSecondary-000",w:"24",h:"24"})])):y("",!0)])]),_:1},8,["to"]),r("div",$,[o(d,{to:{name:"fe_other_profile",params:{userId:e.user.userId}},class:"cursor-pointer"},{default:l(()=>[o(i,{textColor:"text-lg font-semibold text-feSecondary-800 dark:text-feSecondary-000"},{default:l(()=>[g(m(e.user.userName.length>17?e.user.userName.slice(0,17)+"...":e.user.userName),1)]),_:1})]),_:1},8,["to"]),o(d,{to:{name:"fe_review_list",query:{user_id:e.user.userId}}},{default:l(()=>[o(c,{rating:e.user?e.user.overallRating:0,maxStars:5,iconColor:"text-yellow-500",size:"md"},null,8,["rating"])]),_:1},8,["to"]),r("div",ee,[e.user.isShowPhone=="1"&&e.user.userPhone?(f(),v(_,{key:0,class:"cursor-pointer"},{default:l(()=>[r("a",{href:"tel:"+e.user.userPhone},[o(a,{name:"phone",w:"24",h:"24"})],8,oe)]),_:1})):y("",!0),e.user.isShowEmail=="1"&&e.user.userEmail?(f(),v(_,{key:1,class:"cursor-pointer"},{default:l(()=>[r("a",{href:"mailto:"+e.user.userEmail},[o(a,{name:"email",w:"24",h:"24"})],8,te)]),_:1})):y("",!0)])]),r("div",re,[o(_,null,{default:l(()=>[o(a,{textColor:"text-feSecondary-800",name:"arrowNarrowRight",w:"24",h:"24",viewBox:"0 -3 9 20"})]),_:1})])]),r("div",se,[r("div",le,[o(a,{class:"text-feSecondary-800 dark:text-feSecondary-000",name:"user-group-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),o(i,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-000"},{default:l(()=>[g(m(e.user?e.user.followerCount:"0")+" "+m(t.$t("profile__followers")),1)]),_:1})]),r("div",ae,[o(a,{class:"text-feSecondary-800 dark:text-feSecondary-000",name:"shoppingCart-fill",w:"24",h:"24",viewBox:"0 0 24 24"}),o(i,{textColor:"text-sm font-medium text-feSecondary-800 dark:text-feSecondary-000"},{default:l(()=>[g(m(e.user?e.user.activeItemCount:"0")+" "+m(t.$t("user__item")),1)]),_:1})])]),r("div",{class:"h-9",onClick:p[0]||(p[0]=ne=>s.followClick(e.user))},[e.user.isFollowed=="0"?(f(),v(w,{key:0,class:"absolute bottom-4 right-4 left-4"},{default:l(()=>[g(m(t.$t("other_profile__follow")),1)]),_:1})):(f(),v(w,{key:1,class:"absolute bottom-4 right-4 left-4"},{default:l(()=>[g(m(t.$t("other_profile__following")),1)]),_:1}))])]),o(x,{ref:"psloading",isClickOut:!1},null,512)],64)}var Qe=T(A,[["render",ie]]);export{Qe as default};