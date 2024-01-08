import I from"./PsCard.c6f1c9d7.js";import L from"./PsLabel.6f218a30.js";import N from"./PsButton.3558548a.js";import D from"./Rating.baed5ca3.js";import F from"./PsRouteLink.1446a036.js";import{P as V}from"./PsValueStore.4aa1bdc1.js";import{U as z}from"./User.fb568515.js";import{i as B,r as i,Q as H,o as n,c as g,a as t,b as s,w as r,m as M,p as u,t as d,f as y,g as w,F as E,J as P,O}from"./app.94623934.js";import{u as R}from"./UserStore.947b5966.js";import A from"./PsLoadingDialog.c437a5f0.js";import{U as j}from"./UserFollowHolder.8b598f9e.js";import{P as q}from"./ps_constants.1e4471b7.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsObject.a17ef38f.js";import"./RatingDetail.291ad5d1.js";import"./PsApiService.16e28b45.js";import"./DefaultPhoto.cc755f93.js";import"./UserParameterHolder.e816da85.js";import"./PsSepetetedStore.9a31ac47.js";import"./UserListParameterHolder.d110b747.js";import"./ApiStatus.5720ba0b.js";import"./PsModal.3bf2e071.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"./PsLabelTitle.251aaca7.js";const J={name:"UserListHorizontal",components:{PsCard:I,PsLabel:L,Rating:D,PsRouteLink:F,PsButton:N,PsLoadingDialog:A},props:{user:{type:z},onClick:Function,storeName:{type:String,default:"storeName"}},setup(l){const e=V().getLoginUserId(),o=B(),f=new j,c=R(l.storeName);async function a(_){e&&e!=q.NO_LOGIN_USER?(o.value.openModal(),_.isFollowed=="1"?o.value.message=P("other_profile__removing_user_from_follower_list"):o.value.message=P("other_profile__adding_user_to_follower_list"),f.userId=e,f.followedUserId=_.userId,await c.postUserFollow(f),x(),o.value.closeModal()):O.Inertia.get(route("login"))}async function x(){await c.refleshUserSearchList(e,c.userparamHolder)}return{userStore:c,LoginUserId:e,followClick:a,psloading:o}}},Q={class:"p-4 bg-fePrimary-000 dark:bg-fePrimaryDark-black rounded-xl lg:rounded-2xl"},T={class:"flex items-start justify-between leading-none"},K={class:"flex items-start no-underline text-black cursor-pointer"},W={class:"flex mt-2 w-10"},X={alt:"admin",class:"rounded-full bg-transparent mx-1 w-10 h-10 object-cover",width:"15",height:"10"},Y={class:"flex flex-col ms-4 w-28 sm:w-32"},Z={class:"flex"},$={class:"flex items-center mt-1.5"},ee={key:0,class:"flex ms-2 mt-2"},te={key:1,class:"flex ms-2 mt-2"};function oe(l,m,e,o,f,c){const a=i("ps-label"),x=i("rating"),_=i("ps-route-link"),k=i("ps-button"),U=i("ps-card"),S=i("ps-loading-dialog"),C=H("lazy");return n(),g(E,null,[t("div",{class:"cursor-pointer h-full w-full",onClick:m[1]||(m[1]=h=>e.onClick!=null?e.onClick(e.user):null)},[s(U,{class:"flex-col h-full bg-fePrimary-000 dark:bg-fePrimaryDark-black"},{default:r(()=>{var h,v,b;return[t("div",Q,[t("div",T,[t("div",K,[t("div",W,[M(t("img",X,null,512),[[C,{src:l.$page.props.thumb1xUrl+"/"+e.user.userProfilePhoto,loading:l.$page.props.sysImageUrl+"/loading_gif.gif",error:l.$page.props.sysImageUrl+"/default_photo.png"}]])]),t("div",Y,[s(_,{to:{name:"fe_other_profile",query:{userId:(h=e.user)==null?void 0:h.userId}}},{default:r(()=>[t("div",Z,[s(a,{class:"font-medium lg:text-base text-sm"},{default:r(()=>[u(d(e.user?e.user.userName:""),1)]),_:1})]),t("div",$,[s(x,{grade:e.user?e.user.overallRating:0,maxStars:5,hasCounter:!0},null,8,["grade"])]),e.user&&e.user.isShowEmail=="1"?(n(),y(a,{key:0,class:"font-light text-xxs lg:text-xs mt-0.5"},{default:r(()=>[u(d(e.user?e.user.userEmail:""),1)]),_:1})):w("",!0),e.user&&e.user.isShowPhone=="1"?(n(),y(a,{key:1,class:"font-light text-xxs lg:text-xs mt-0.5"},{default:r(()=>[u(d(e.user?e.user.userPhone:""),1)]),_:1})):w("",!0),s(a,{class:"font-light text-xxs lg:text-xs mt-1.5"},{default:r(()=>{var p;return[u(d(e.user?e.user.userAboutMe.length>20?e.user.userAboutMe.slice(0,20)+" ....":(p=e.user)==null?void 0:p.userAboutMe:""),1)]}),_:1})]),_:1},8,["to"])]),((v=e.user)==null?void 0:v.userId)!=o.LoginUserId?(n(),g("div",{key:0,onClick:m[0]||(m[0]=p=>o.followClick(e.user))},[((b=e.user)==null?void 0:b.isFollowed)=="0"?(n(),g("div",ee,[s(k,{rounded:"rounded-2xl",textSize:"text-xxs lg:text-xs"},{default:r(()=>[u(d(l.$t("other_profile__follow")),1)]),_:1})])):(n(),g("div",te,[s(k,{rounded:"rounded-2xl",textSize:"text-xxs lg:text-xs"},{default:r(()=>[u(d(l.$t("other_profile__unfollow")),1)]),_:1})]))])):w("",!0)])])])]}),_:1})]),s(S,{ref:"psloading",isClickOut:!1},null,512)],64)}var Le=G(J,[["render",oe]]);export{Le as default};
