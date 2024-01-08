import H from"./PsLabel.6f218a30.js";import O from"./PsLabelCaption2.75e82012.js";import b from"./PaidAdItemPaidStatus.2c78987c.js";import R from"./PsCard.c6f1c9d7.js";import E from"./PsIcon.ebbfcfb3.js";import q from"./PsLine.9a56d1e4.js";import G from"./PsButton.3558548a.js";import J from"./PsRouteLink.1446a036.js";import K from"./PsLoadingDialog.c437a5f0.js";import{aB as Q,B as k,i as M,r as S,Q as W,o as w,c as C,a as d,b as o,w as f,f as F,m as A,n as X,p as g,t as u,g as z,F as Y,J as D,O as Z}from"./app.94623934.js";import{f as $}from"./format.min.83c29ea7.js";import{P as N}from"./ps_constants.1e4471b7.js";import{P as j}from"./PsObject.a17ef38f.js";import{P as L}from"./Product.21fd7f06.js";import{a as tt,P as U}from"./PsApiService.16e28b45.js";import{m as et}from"./PsSepetetedStore.9a31ac47.js";import{P as V}from"./PsValueStore.4aa1bdc1.js";import{u as at}from"./PsValueHolder.0b2db09a.js";import{u as it}from"./AppInfoStore.7a7c38d9.js";import{u as st}from"./FavouriteItemStore.37f1a4f3.js";import{A as dt}from"./AppInfoParameterHolder.e24d894d.js";import{h as ot}from"./moment.9709ab41.js";import{_ as rt}from"./plugin-vue_export-helper.21dcd24c.js";class P extends j{constructor(){super(...arguments),this.id="",this.itemId="",this.startDate="",this.startTimeStamp="",this.endDate="",this.endTimeStamp="",this.amount="",this.paymentMethod="",this.transCode="",this.status="",this.addedDate="",this.addedUserId="",this.updatedDate="",this.updatedUserId="",this.updatedFlag="",this.addedDateStr="",this.paidStatus="",this.item=new L}init(t,e,a,_,n,h,c,r,x,y,i,m,p,l,v,I,B,T){return this.id=t,this.itemId=e,this.startDate=a,this.startTimeStamp=_,this.endTimeStamp=h,this.endDate=n,this.amount=c,this.paymentMethod=r,this.transCode=x,this.status=y,this.addedDate=i,this.addedUserId=m,this.updatedDate=p,this.updatedUserId=l,this.updatedFlag=v,this.addedDateStr=I,this.paidStatus=B,this.item=T,this}getPrimaryKey(){return this.id}toMap(t){const e={};return e.id=t.id,e.item_id=t.itemId,e.start_date=t.startDate,e.start_timestamp=t.startTimeStamp,e.end_timestamp=t.endTimeStamp,e.end_date=t.endDate,e.amount=t.amount,e.payment_method=t.paymentMethod,e.trans_code=t.transCode,e.status=t.status,e.added_date=t.addedDate,e.added_user_id=t.addedUserId,e.updated_date=t.updatedDate,e.updated_user_id=t.updatedUserId,e.updated_flag=t.updatedFlag,e.added_date_str=t.addedDateStr,e.paid_status=t.paidStatus,e.item=new L().toMap(t.item),e}toMapList(t){const e=[];for(let a=0;a<t.length;a++)t[a]!=null&&e.push(this.toMap(t[a]));return e}fromMap(t){return new P().init(t.id,t.item_id,t.start_date,t.start_timestamp,t.end_date,t.end_timestamp,t.amount,t.payment_method,t.trans_code,t.status,t.added_date,t.added_user_id,t.updated_date,t.updated_user_id,t.updated_flag,t.added_date_str,t.paid_status,new L().fromMap(t.item))}fromMapList(t){const e=[];for(const a in t)a!=null&&e.push(this.fromMap(a));return e}}const mt=et(s=>Q(`aidAdItemStore/${s}`,()=>{const t=k(new tt),e=k({value:!1});let a=M(4),_=0;const n=k({value:!1});let h="";function c(i){var m,p;t!=null&&t.data!=null&&t.data.length>0&&_!=0?(i.data!=null&&i.data.length>0?(((m=i.data)==null?void 0:m.length)<a.value?n.value=!0:n.value=!1,t.data.push(...i.data)):n.value=!0,t.code=i.code,t.status=i.status,t.message=i.message):(((p=i.data)==null?void 0:p.length)<a.value?n.value=!0:n.value=!1,t.data=i.data,t.code=i.code,t.status=i.status,t.message=i.message),t!=null&&t.data!=null&&(_=t.data.length)}async function r(i){e.value=!0;const m=await U.getPaidAdItemList(new P,i,a.value,_);c(m),e.value=!1}async function x(i){_=0,e.value=!0;const m=await U.getPaidAdItemList(new P,i,a.value,_);c(m),e.value=!1}async function y(i){e.value=!0;const m=0,p=t.data.length,l=await U.getPaidAdItemList(new P,i,p,m);t.data=l.data,t.code=l.code,t.status=l.status,t.message=l.message,e.value=!1}return{isNoMoreRecord:n,paidAdItemList:t,loading:e,limit:a,offset:_,id:h,loadPaidAdItemList:r,resetPaidAdItemList:x,updatePaidAdItemList:c,refleshPaidAdItemList:y}})),nt={name:"PaidAdItemHorizontalItem",components:{PsLabel:H,PsLabelCaption2:O,PsButton:G,PsCard:R,PsRouteLink:J,PsIcon:E,PsLine:q,PaidAdItemPaidStatus:b,PsLoadingDialog:K},props:{paiditem:{type:P},onClick:Function},setup(){var i,m,p;V.psValueStore=at();const s=mt(),t=V(),e=st(),a=t.getLoginUserId(),_=new dt;_.userId=a;const n=it(),h=M(!1);((p=(m=(i=n==null?void 0:n.appInfo)==null?void 0:i.data)==null?void 0:m.mobileSetting)==null?void 0:p.is_show_owner_info)=="1"&&(h.value=!0);const c=M();function r(l){var v;return l.toString()=="0"?D("item_price__free"):$((v=n.appInfo.data.mobileSetting)==null?void 0:v.price_format,l)}async function x(l){a&&a!=N.NO_LOGIN_USER?(c.value.openModal(),l.isFavourited=="1"?c.value.message=D("item_detail__removing_item_from_favourite"):c.value.message=D("item_detail__adding_item_to_favourite"),await e.postFavourite(l.id,a),await y(),c.value.closeModal()):Z.Inertia.get(route("login"))}async function y(){await s.refleshPaidAdItemList(a)}return{itempaidProvider:s,formatPrice:r,psValueStore:t,PsConst:N,appInfoStore:n,favouriteClicked:x,ps_loading_dialog:c,showProfile:h,moment:ot}}},lt={class:"relative"},ut={alt:"Placeholder",class:"block lg:hidden object-cover w-screen lg:h-56 h-36",width:"640px",height:"360px"},ft={alt:"Placeholder",class:"lg:block hidden object-cover w-screen lg:h-56 h-36",width:"640px",height:"360px"},ct={class:""},pt={class:""},_t={class:"flex items-center gap-2"},ht={class:"flex items-center"},gt={class:"float-end"},xt={class:"flex items-center"},vt={class:"float-end"},yt={class:"flex items-center"},St={key:0,class:"pt-1 pb-2 flex items-center justify-between leading-none px-2 rounded-b-xl lg:rounded-b-2xl"},Pt={class:"flex flex-row items-center no-underline text-black"},wt={class:"relative"},It={alt:"Placeholder",class:"rounded-full bg-transparent lg:w-8 lg:h-8 w-6 h-6 flex items-center justify-center object-cover",width:"50px",height:"50px"},kt={key:0,class:"w-3 h-3 bg-blue-500 rounded-full flex justify-center items-center absolute bottom-0 right-0"},Ct={class:"ms-2 mt-1 text-sm flex-grow"},At={class:"flex"};function Dt(s,t,e,a,_,n){const h=S("ps-icon"),c=S("paid-ad-item-paid-status"),r=S("ps-label"),x=S("ps-route-link"),y=S("ps-card"),i=S("ps-loading-dialog"),m=W("lazy");return w(),C(Y,null,[d("div",{class:"cursor-pointer sm:w-full md:w-full",onClick:t[1]||(t[1]=p=>e.onClick!=null?e.onClick(e.paiditem):null)},[o(y,{class:"lg:rounded-lg rounded-lg shadow-sm relative z-0",enabledHover:!0},{default:f(()=>{var p,l;return[d("div",{class:"absolute z-10 bg-white dark:bg-feSecondary-800 rounded w-10 h-10 flex justify-center items-center right-2 top-2",onClick:t[0]||(t[0]=v=>a.favouriteClicked(e.paiditem.item))},[e.paiditem.item.isFavourited=="1"?(w(),F(h,{key:0,textColor:"text-fePrimary-500 dark:text-primaryDark-white",class:"",name:"heart",h:"24",w:"24"})):(w(),F(h,{key:1,textColor:"text-fePrimary-500 dark:text-primaryDark-white",class:"",name:"heart-outline",h:"24",w:"24"}))]),o(x,{to:{name:"fe_item_detail",query:{item_id:e.paiditem.item.id}}},{default:f(()=>[d("div",lt,[A(d("img",ut,null,512),[[m,{src:s.$page.props.thumb2xUrl+"/"+e.paiditem.item.defaultPhoto.imgPath,loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]]),A(d("img",ft,null,512),[[m,{src:s.$page.props.thumb2xUrl+"/"+e.paiditem.item.defaultPhoto.imgPath,loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]]),o(c,{status:e.paiditem?e.paiditem.paidStatus:""},null,8,["status"])]),d("div",{class:X([a.showProfile?"pb-0":"pb-2","pt-2 px-2 flex flex-col gap-2"])},[d("div",ct,[o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm"},{default:f(()=>[g(u(e.paiditem.item.title),1)]),_:1})]),d("div",pt,[o(r,{textColor:"font-semibold text-fePrimary-500 text-base"},{default:f(()=>[g(u(e.paiditem?e.paiditem.item.itemCurrency.currencySymbol:"")+" "+u(a.formatPrice(e.paiditem?e.paiditem.item.price:"")),1)]),_:1})]),d("div",_t,[o(h,{name:"location",w:"14",h:"14",viewBox:"0 0 14 14"}),o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm"},{default:f(()=>[g(u(e.paiditem.item.itemLocation.name),1)]),_:1})]),d("div",ht,[o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:f(()=>[g(u(s.$t("paid_item_horizontal_item__start")),1)]),_:1}),o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm grow ms-1"},{default:f(()=>[g(": "+u(e.paiditem?a.moment(e.paiditem.startDate.split(" ")[0]).format(s.$page.props.dateFormat):"")+" ",1),d("span",gt,u(e.paiditem?e.paiditem.startDate.split(" ")[1]:""),1)]),_:1})]),d("div",xt,[o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:f(()=>[g(u(s.$t("paid_item_horizontal_item__end")),1)]),_:1}),o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm grow ms-3"},{default:f(()=>[g(": "+u(e.paiditem?a.moment(e.paiditem.endDate.split(" ")[0]).format(s.$page.props.dateFormat):"")+" ",1),d("span",vt,u(e.paiditem?e.paiditem.endDate.split(" ")[1]:""),1)]),_:1})]),d("div",yt,[o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm"},{default:f(()=>[g(u(s.$t("paid_item_horizontal_item__total_spending"))+" : ",1)]),_:1}),o(r,{textColor:"text-feSecondary-600 dark:text-feSecondary-200 text-sm sm:text-xs md:text-sm grow ms-1"},{default:f(()=>[g(u(e.paiditem?e.paiditem.item.itemCurrency.currencySymbol:"")+" "+u(e.paiditem?e.paiditem.amount:""),1)]),_:1})])],2)]),_:1},8,["to"]),o(x,{to:{name:"fe_other_profile",params:{userId:(l=(p=e.paiditem.item)==null?void 0:p.user)==null?void 0:l.userId}}},{default:f(()=>{var v,I;return[a.showProfile?(w(),C("div",St,[d("div",Pt,[d("div",wt,[A(d("img",It,null,512),[[m,{src:s.$page.props.thumb1xUrl+"/"+((I=(v=e.paiditem.item)==null?void 0:v.user)==null?void 0:I.userCoverPhoto),loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]]),e.paiditem.item.user.isVerifybluemark=="1"?(w(),C("div",kt,[o(h,{name:"bluemark",textColor:"text-feSecondary-000",w:"8",h:"8"})])):z("",!0)]),d("p",Ct,[d("span",At,[o(r,{class:"truncate text-xs",textColor:"text-feSecondary-800 dark:text-feSecondary-300"},{default:f(()=>[g(u(e.paiditem.item.user.userName.length>12?e.paiditem.item.user.userName.slice(0,12)+" ...":e.paiditem.item.user.userName),1)]),_:1})]),o(r,{class:"font-light text-xs",textColor:"text-feSecondary-500 dark:text-feSecondary-500"},{default:f(()=>[g(u(e.paiditem.item?a.moment(e.paiditem.item.addedDate).format(s.$page.props.dateFormat):""),1)]),_:1})])])])):z("",!0)]}),_:1},8,["to"])]}),_:1})]),o(i,{ref:"ps_loading_dialog"},null,512)],64)}var Lt=rt(nt,[["render",Dt]]),jt=Object.freeze(Object.defineProperty({__proto__:null,default:Lt},Symbol.toStringTag,{value:"Module"}));export{Lt as P,jt as a,mt as u};
