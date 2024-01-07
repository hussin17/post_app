import{a as O,P as n}from"./PsApiService.ebe2eb3a.js";import{P as A}from"./PsObject.a17ef38f.js";import{P as M}from"./Product.21fd7f06.js";import{U as f}from"./User.fb568515.js";import{A as c}from"./ApiStatus.5720ba0b.js";import{aB as P,B as S,i as I}from"./app.03d0793a.js";import{m as k}from"./PsSepetetedStore.9a31ac47.js";class d extends A{constructor(){super(...arguments),this.id="",this.itemId="",this.buyerUserId="",this.sellerUserId="",this.negoPrice="",this.buyerUnreadCount="",this.sellerUnreadCount="",this.isAccept="",this.addedDate="",this.isOffer="",this.offerStatus="",this.offerAmount="",this.addedDateStr="",this.item=new M,this.buyer=new f,this.seller=new f}init(e,t,u,l,i,m,h,p,_,v,w,o,y,g,a,r){return this.id=e,this.itemId=t,this.buyerUserId=u,this.sellerUserId=l,this.negoPrice=i,this.buyerUnreadCount=m,this.sellerUnreadCount=h,this.isAccept=p,this.addedDate=_,this.isOffer=v,this.offerStatus=w,this.offerAmount=o,this.addedDateStr=y,this.item=g,this.buyer=a,this.seller=r,this}getPrimaryKey(){return this.id}toMap(e){const t={};return t.id=e.id,t.item_id=e.itemId,t.buyer_user_id=e.buyerUserId,t.seller_user_id=e.sellerUserId,t.nego_price=e.negoPrice,t.buyer_unread_count=e.buyerUnreadCount,t.seller_unread_count=e.sellerUnreadCount,t.is_accept=e.isAccept,t.added_date=e.addedDate,t.is_offer=e.isOffer,t.offer_status=e.offerStatus,t.offer_amount=e.offerAmount,t.added_date_str=e.addedDateStr,t.item=new M().toMap(e.item),t.buyer=new f().toMap(e.buyer),t.seller=new f().toMap(e.seller),t}toMapList(e){const t=[];for(let u=0;u<e.length;u++)e[u]!=null&&t.push(this.toMap(e[u]));return t}fromMap(e){return new d().init(e.id,e.item_id,e.buyer_user_id,e.seller_user_id,e.nego_price,e.buyer_unread_count,e.seller_unread_count,e.is_accept,e.added_date,e.is_offer,e.offer_status,e.offer_amount,e.added_date_str,new M().fromMap(e.item),new f().fromMap(e.buyer),new f().fromMap(e.seller))}fromMapList(e){const t=[];for(const u in e)u!=null&&t.push(this.fromMap(u));return t}}const K=k(U=>P(`offerStore/${U}`,()=>{const e=S(new O),t=S({value:!1});let u=I(30),l=0;const i=S({value:!1});async function m(a,r){t.value=!0;const s=await n.makeOffer(new d,a,r.toMap());return t.value=!1,s}async function h(a,r){t.value=!0;const s=await n.acceptedOffer(new d,r.toMap(),a);return t.value=!1,s}async function p(a,r){t.value=!0;const s=await n.isUsetBought(new c,a,r.toMap());return t.value=!1,s}async function _(a,r){t.value=!0;const s=await n.makeMarkAsSold(new c,a,r.toMap());return t.value=!1,s}async function v(a,r){t.value=!0;const s=await n.markSoldOutItem(new c,a,r.toMap());return t.value=!1,s}async function w(a,r){t.value=!0;const s=await n.productStatusChange(new c,a,r.toMap());return t.value=!1,s}function o(a){var r,s;e!=null&&e.data!=null&&e.data.length>0&&l!=0?(a.data!=null&&a.data.length>0?(((r=a.data)==null?void 0:r.length)<u.value?i.value=!0:i.value=!1,e.data.push(...a.data)):i.value=!0,e.code=a.code,e.status=a.status,e.message=a.message):(((s=a.data)==null?void 0:s.length)<u.value||a.data==null?i.value=!0:i.value=!1,e.data=a.data,e.code=a.code,e.status=a.status,e.message=a.message),e!=null&&e.data!=null&&(l=e.data.length)}async function y(a){t.value=!0;const r=await n.getOfferList(new d,a.toMap());o(r),t.value=!1}async function g(a){l=0,t.value=!0;const r=await n.getOfferList(new d,a.toMap());o(r),t.value=!1}return{isNoMoreRecord:i,loading:t,limit:u,offset:l,offerList:e,markAsSoldFromDetail:v,markAsSold:_,isUserBought:p,acceptOffer:h,makeOffer:m,resetOfferList:g,loadOfferList:y,productStatusChange:w}}));export{K as u};
