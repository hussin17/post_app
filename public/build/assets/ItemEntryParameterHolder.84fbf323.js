import{a as h,P as c}from"./PsApiService.16e28b45.js";import{I as m}from"./Product.21fd7f06.js";import{aB as v,B as l,i as y}from"./app.94623934.js";import{m as C}from"./PsSepetetedStore.9a31ac47.js";const b=C(o=>v(`itemCurrency/${o}`,()=>{const t=l(new h),p=l(new h),d=l({value:!1});let r=y(10),e=0,I="";const s=l({value:!1});function n(i){var a,u;t!=null&&t.data!=null&&t.data.length>0&&e!=0?(i.data!=null&&i.data.length>0?(((a=i.data)==null?void 0:a.length)<r.value?s.value=!0:s.value=!1,t.data.push(...i.data)):s.value=!0,t.code=i.code,t.status=i.status,t.message=i.message):(((u=i.data)==null?void 0:u.length)<r.value||i.data==null?s.value=!0:s.value=!1,t.data=i.data,t.code=i.code,t.status=i.status,t.message=i.message),t!=null&&t.data!=null&&(e=t.data.length)}async function g(i){d.value=!0;const a=await c.getItemCurrencyList(new m,r.value,e,i);n(a),d.value=!1}async function f(i){e=0,d.value=!0;const a=await c.getItemCurrencyList(new m,r.value,e,i);n(a),d.value=!1}return{itemCurrencyList:t,item:p,loading:d,limit:r,offset:e,id:I,isNoMoreRecord:s,loadItemCurrencyList:g,resetItemCurrencyList:f}}));class O{constructor(){this.catId="",this.subCatId="",this.phone="",this.itemLocationId="",this.locationTownshipId="",this.description="",this.price="",this.percent="",this.isAvailable="",this.title="",this.latitude="",this.longitude="",this.itemCurrencyId="",this.addedUserId="",this.isSoldOut="",this.id="",this.status="1",this.isDiscount="",this.productRelation=[],this.imgCaption=[],this.imgOrder=[]}ItemEntryParameterHolder(){this.catId="",this.subCatId="",this.phone="",this.itemCurrencyId="",this.isAvailable="",this.itemLocationId="",this.locationTownshipId="",this.description="",this.price="",this.percent="",this.isSoldOut="",this.title="",this.latitude="",this.longitude="",this.id="",this.addedUserId="",this.status="1",this.isDiscount="",this.productRelation=[],this.imgCaption=[],this.imgOrder=[]}toMap(){const t={};return t.category_id=this.catId,t.subcategory_id=this.subCatId,t.phone=this.phone,t.is_available=this.isAvailable,t.currency_id=this.itemCurrencyId,t.location_city_id=this.itemLocationId,t.location_township_id=this.locationTownshipId,t.description=this.description,t.original_price=this.price,t.percent=this.percent,t.is_sold_out=this.isSoldOut,t.title=this.title,t.lat=this.latitude,t.lng=this.longitude,t.is_discount=this.isDiscount,t.id=this.id,t.added_user_id=this.addedUserId,t.status=this.status,t.product_relation=this.productRelation,t.img_caption=this.imgCaption,t.img_order=this.imgOrder,t}}export{O as I,b as u};