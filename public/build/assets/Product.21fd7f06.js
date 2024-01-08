import{P as m}from"./PsObject.a17ef38f.js";import{D as e}from"./DefaultPhoto.cc755f93.js";import{C as d}from"./Category.3f13b0a3.js";import{S as o}from"./SubCategory.1b4176e0.js";import{a as h,I as u}from"./ItemLocationTownship.94979fe0.js";import{U as p,P as c}from"./User.fb568515.js";class a extends m{constructor(){super(...arguments),this.id="",this.currencyShortForm="",this.status="",this.addedDate="",this.currencySymbol=""}getPrimaryKey(){return this.id}init(t,i,s,r,n){return this.id=t,this.currencyShortForm=i,this.status=s,this.addedDate=r,this.currencySymbol=n,this}fromMap(t){return new a().init(t.id,t.currency_short_form,t.status,t.added_date,t.currency_symbol)}fromMapList(t){const i=[];for(const s in t)s!=null&&i.push(this.fromMap(s));return i}toMap(t){const i={};return i.id=t.id,i.currency_short_form=t.currencyShortForm,i.status=t.status,i.added_date=t.addedDate,i.currency_symbol=t.currencySymbol,i}toMapList(t){const i=[];for(let s=0;s<t.length;s++)t[s]!=null&&i.push(this.toMap(t[s]));return i}}class _ extends m{constructor(){super(...arguments),this.id="",this.catId="",this.subCatId="",this.itemCurrencyId="",this.itemLocationId="",this.itemLocationTownshipId="",this.description="",this.price="",this.percent="",this.phone="",this.isSoldOut="",this.title="",this.lat="",this.lng="",this.status="",this.addedDate="",this.addedUserId="",this.isDiscount="",this.touchCount="",this.favouriteCount="",this.isPaid="",this.dynamicLink="",this.addedDateStr="",this.paidStatus="",this.photoCount="",this.defaultPhoto=new e,this.video=new e,this.videoThumbnail=new e,this.category=new d,this.subCategory=new o,this.itemCurrency=new a,this.itemLocation=new h,this.itemLocationTownship=new u,this.user=new p,this.isFavourited="",this.isOwner="",this.originalPrice="",this.adType="",this.productRelation=[new c]}init(t,i,s,r,n,l,y,f,w,g,M,C,I,L,v,P,S,D,T,O,F,R,k,U,x,K,q,z,A,B,E,G,H,J,N,Q,V,W,X){return this.id=t,this.catId=i,this.subCatId=s,this.itemCurrencyId=r,this.itemLocationId=n,this.itemLocationTownshipId=l,this.description=y,this.price=f,this.percent=w,this.phone=g,this.isSoldOut=M,this.title=C,this.lat=I,this.lng=L,this.status=v,this.addedDate=P,this.addedUserId=S,this.isDiscount=D,this.touchCount=T,this.favouriteCount=O,this.isPaid=F,this.dynamicLink=R,this.addedDateStr=k,this.paidStatus=U,this.photoCount=x,this.defaultPhoto=K,this.video=q,this.videoThumbnail=z,this.category=A,this.subCategory=B,this.itemCurrency=E,this.itemLocation=G,this.itemLocationTownship=H,this.user=J,this.isFavourited=N,this.isOwner=Q,this.originalPrice=V,this.adType=W,this.productRelation=X,this}getPrimaryKey(){return this.id}toMap(t){const i={};return i.id=t.id,i.category_id=t.catId,i.subcategory_id=t.subCatId,i.currency_id=t.itemCurrencyId,i.location_city_id=t.itemLocationId,i.location_township_id=t.itemLocationTownshipId,i.description=t.description,i.price=t.price,i.percent=t.percent,i.phone=t.phone,i.is_sold_out=t.isSoldOut,i.title=t.title,i.lat=t.lat,i.lng=t.lng,i.status=t.status,i.added_date=t.addedDate,i.added_user_id=t.addedUserId,i.is_discount=t.isDiscount,i.item_touch_count=t.touchCount,i.favourite_count=t.favouriteCount,i.is_paid=t.isPaid,i.dynamic_link=t.dynamicLink,i.added_date_str=t.addedDateStr,i.paid_status=t.paidStatus,i.photo_count=t.photoCount,i.default_photo=new e().toMap(t.defaultPhoto),i.default_video=new e().toMap(t.video),i.default_video_icon=new e().toMap(t.videoThumbnail),i.category=new d().toMap(t.category),i.sub_category=new o().toMap(t.subCategory),i.item_currency=new a().toMap(t.itemCurrency),i.item_location=new h().toMap(t.itemLocation),i.item_location_township=new u().toMap(t.itemLocationTownship),i.user=new p().toMap(t.user),i.is_favourited=t.isFavourited,i.is_owner=t.isOwner,i.original_price=t.originalPrice,i.ad_type=t.adType,i.productRelation=new c().toMapList(t.productRelation),i}toMapList(t){const i=[];for(let s=0;s<t.length;s++)t[s]!=null&&i.push(this.toMap(t[s]));return i}fromMap(t){return new _().init(t.id,t.category_id,t.subcategory_id,t.currency_id,t.location_city_id,t.location_township_id,t.description,t.price,t.percent,t.phone,t.is_sold_out,t.title,t.lat,t.lng,t.status,t.added_date,t.added_user_id,t.is_discount,t.item_touch_count,t.favourite_count,t.is_paid,t.dynamic_link,t.added_date_str,t.paid_status,t.photo_count,new e().fromMap(t.default_photo),new e().fromMap(t.default_video),new e().fromMap(t.default_video_icon),new d().fromMap(t.category),new o().fromMap(t.sub_category),new a().fromMap(t.item_currency),new h().fromMap(t.item_location),new u().fromMap(t.item_location_township),new p().fromMap(t.user),t.is_favourited,t.is_owner,t.original_price,t.ad_type,new c().fromMapList(t.productRelation))}fromMapList(t){const i=[];for(const s in t)s!=null&&i.push(this.fromMap(s));return i}}export{a as I,_ as P};
