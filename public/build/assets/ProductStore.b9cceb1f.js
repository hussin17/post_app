import{P as F}from"./ProductParameterHolder.fd27bf91.js";import{a as P,P as d}from"./PsApiService.ebe2eb3a.js";import{P as y}from"./Product.21fd7f06.js";import{P as G}from"./PsObject.a17ef38f.js";import{aB as J,B as _,i as W}from"./app.03d0793a.js";import{D as v}from"./DefaultPhoto.cc755f93.js";import{A as I}from"./ApiStatus.5720ba0b.js";import{m as X}from"./PsSepetetedStore.9a31ac47.js";class Y{constructor(){this.urlParamsAndQuery={params:{},query:{}},this.keyword="",this.country_name="",this.country_code="",this.status="",this.is_default="",this.keyword="",this.country_name="",this.country_code="",this.status="",this.is_default=""}getUrlParamsAndQuery(){const a={},u={};return this.keyword!=""&&(a.keyword=this.keyword),this.country_name!=""&&(a.country_name=this.country_name),this.country_code!=""&&(a.country_code=this.country_code),this.status!=""&&(a.status=this.status),this.is_default!=""&&(a.is_default=this.is_default),this.urlParamsAndQuery.params=u,this.urlParamsAndQuery.query=a,this.urlParamsAndQuery}parseParamsAndQuery(a){var u,n,r,l,m,c,p,e,g,h;this.keyword=(n=(u=a.keyword)==null?void 0:u.toString())!=null?n:"",this.country_name=(l=(r=a.country_name)==null?void 0:r.toString())!=null?l:"",this.country_code=(c=(m=a.country_code)==null?void 0:m.toString())!=null?c:"",this.status=(e=(p=a.status)==null?void 0:p.toString())!=null?e:"",this.is_default=(h=(g=a.is_default)==null?void 0:g.toString())!=null?h:""}getRecentParameterHolder(){return this.keyword="",this.country_name="",this.country_code="",this.status="",this.is_default="",this}resetParameterHolder(){return this.keyword="",this.country_name="",this.country_code="",this.status="",this.is_default="",this}toMap(){const a={};return a.keyword=this.keyword,a.country_name=this.country_name,a.country_code=this.country_code,a.status=this.status,a.is_default=this.is_default,a}}class L extends G{constructor(){super(...arguments),this.id="",this.country_name="",this.country_code="",this.status="",this.is_default=""}init(a,u="",n="",r="",l=""){return this.id=a,this.country_name=u,this.country_code=n,this.status=r,this.is_default=l,this}getPrimaryKey(){return this.id}toMap(a){const u={};return u.id=a.id,u.country_name=a.country_name,u.country_code=a.country_code,u.status=a.status,u.is_default=a.is_default,u}toMapList(a){const u=[];for(let n=0;n<a.length;n++)a[n]!=null&&u.push(this.toMap(a[n]));return u}fromMap(a){return new L().init(a.id,a.country_name,a.country_code,a.status,a.is_default)}fromMapList(a){const u=[];for(const n in a)n!=null&&u.push(this.fromMap(n));return u}}class Z{constructor(){this.itemId="",this.userId=""}UserDeleteItemParameterHolder(){this.itemId="",this.userId=""}toMap(){const a={};return a.id=this.itemId,a.user_id=this.userId,a}}const rt=X(w=>J(`productStore/${w}`,()=>{const a=_(new P),u=_(new P),n=_(new P),r=_({value:!1});let l=W(10),m=0;const c=_({value:!1});let p="",e=_(new F().getRecentParameterHolder()),g=_(new Y().getRecentParameterHolder());function h(t){var i,s;a!=null&&a.data!=null&&a.data.length>0&&m!=0?(t.data!=null&&t.data.length>0?(((i=t.data)==null?void 0:i.length)<l.value?c.value=!0:c.value=!1,a.data.push(...t.data)):c.value=!0,a.code=t.code,a.status=t.status,a.message=t.message):(((s=t.data)==null?void 0:s.length)<l.value||t.data==null?c.value=!0:c.value=!1,a.data=t.data,a.code=t.code,a.status=t.status,a.message=t.message),a!=null&&a.data!=null&&(m=a.data.length)}function C(t){var i,s;u!=null&&u.data!=null&&u.data.length>0&&m!=0?(t.data!=null&&t.data.length>0?(((i=t.data)==null?void 0:i.length)<l?c.value=!0:c.value=!1,u.data.push(...t.data)):c.value=!0,u.code=t.code,u.status=t.status,u.message=t.message):(((s=t.data)==null?void 0:s.length)<l||t.data==null?c.value=!0:c.value=!1,u.data=t.data,u.code=t.code,u.status=t.status,u.message=t.message),u!=null&&u.data!=null&&(m=u.data.length)}async function S(t,i){r.value=!0;const s=await d.getPhoneList(new L,t,l,m,i.toMap());C(s),r.value=!1}async function k(t,i){r.value=!0;const s=await d.getItemListByUserId(new y,l.value,m,t,i.toMap());h(s),r.value=!1}async function U(t,i){m=0,r.value=!0;const s=await d.getItemListByUserId(new y,l.value,m,t,i.toMap());console.log(s),h(s),r.value=!1}async function M(t,i){r.value=!0;const s=await d.getItemDetail(new y,t,i);return n.data=s.data,n.code=s.code,n.status=s.status,n.message=s.message,r.value=!1,n}async function T(t,i,s){r.value=!0;const o=await d.getRelatedProductList(new y,t,i,s,l.value,m);return a.data=o.data,a.code=o.code,a.status=o.status,a.message=o.message,r.value=!1,a}async function R(t,i){r.value=!0;const s=await d.postItemEntry(new y,t.toMap(),i);return n.data=s.data,n.code=s.code,n.status=s.status,n.message=s.message,r.value=!1,s}async function H(t,i,s,o,f,z,K){r.value=!0;const $=await d.postItemImageUpload(new v,i,s,o,f,z,K,t);return r.value=!1,$}async function b(t,i){r.value=!0;const s=await d.ps_image_dropzone_upload_url(new v,t,i);return r.value=!1,s}async function A(t,i){r.value=!0;const s=await d.postReorderItemImage(new I,t,i);return r.value=!1,s}async function B(t,i,s,o){r.value=!0;const f=await d.postItemVideoUpload(new v,t,i,s,o);return r.value=!1,f}async function N(t,i,s){r.value=!0;const o=await d.postItemVideoThumbUpload(new v,t,i,s);return r.value=!1,o}function x(){let t="";if(t==""&&e.searchTerm!=""?t="?searchterm="+e.searchTerm:e.searchTerm!=""&&(t=t+"&searchterm="+e.searchTerm),t==""&&e.catId!=""?t="?cat_id="+e.catId:e.catId!=""&&(t=t+"&cat_id="+e.catId),t==""&&e.catName!=""?t="?cat_name="+e.catName:e.catName!=""&&(t=t+"&cat_name="+e.catName),t==""&&e.subCatId!=""?t="?sub_cat_id="+e.subCatId:e.subCatId!=""&&(t=t+"&sub_cat_id="+e.subCatId),t==""&&e.subCatName!=""?t="?sub_cat_name="+e.subCatName:e.subCatName!=""&&(t=t+"&sub_cat_name="+e.subCatName),t==""&&e.itemCurrencyId!=""?t="?item_currency_id="+e.itemCurrencyId:e.itemCurrencyId!=""&&(t=t+"&item_currency_id="+e.itemCurrencyId),t==""&&e.itemLocationId!=""?t="?item_location_id="+e.itemLocationId:e.itemLocationId!=""&&(t=t+"&item_location_id="+e.itemLocationId),t==""&&e.itemLocationTownship!=""?t="?item_location_township_id="+e.itemLocationTownship:e.itemLocationTownship!=""&&(t=t+"&item_location_township_id="+e.itemLocationTownship),t==""&&e.maxPrice!=""?t="?max_price="+e.maxPrice:e.maxPrice!=""&&(t=t+"&max_price="+e.maxPrice),t==""&&e.minPrice!=""?t="?min_price="+e.minPrice:e.minPrice!=""&&(t=t+"&min_price="+e.minPrice),t==""&&e.lat!=""?t="?lat="+e.lat:e.lat!=""&&(t=t+"&lat="+e.lat),t==""&&e.lng!=""?t="?lng="+e.lng:e.lng!=""&&(t=t+"&lng="+e.lng),t==""&&e.mile!=""?t="?mile="+e.mile:e.mile!=""&&(t=t+"&mile="+e.mile),t==""&&e.addedUserId!=""?t="?added_user_id="+e.addedUserId:e.addedUserId!=""&&(t=t+"&added_user_id="+e.addedUserId),t==""&&e.isPaid!=""?t="?ad_post_type="+e.isPaid:e.isPaid!=""&&(t=t+"&ad_post_type="+e.isPaid),t==""&&e.orderBy!=""?t="?order_by="+e.orderBy:e.orderBy!=""&&(t=t+"&order_by="+e.orderBy),t==""&&e.orderType!=""?t="?order_type="+e.orderType:e.orderType!=""&&(t=t+"&order_type="+e.orderType),t==""&&e.status!=""?t="?status="+e.status:e.status!=""&&(t=t+"&status="+e.status),t==""&&e.isSoldOut!=""?t="?is_sold_out="+e.isSoldOut:e.isSoldOut!=""&&(t=t+"&is_sold_out="+e.isSoldOut),t==""&&e.isDiscount!=""?t="?is_discount="+e.isDiscount:e.isDiscount!=""&&(t=t+"&is_discount="+e.isDiscount),t==""&&e.paidStatus!=""?t="?ad_post_type="+e.paidStatus:e.paidStatus!=""&&(t=t+"&ad_post_type="+e.paidStatus),t==""&&e.isPaid!=""?t="?is_paid="+e.isPaid:e.isPaid!=""&&(t=t+"&is_paid="+e.isPaid),t==""&&e.productRelation.length>0){t="?product_relation=";let i="",s="";e.productRelation.forEach((o,f)=>{o.core_keys_id!=""&&o.value!=""&&(f==0?(i=o.core_keys_id,s=o.value):(i=i+"___"+o.core_keys_id,s=s+"___"+o.value))}),t=t+i+"-----"+s}else if(e.productRelation.length>0){t=t+"&product_relation=";let i="",s="";e.productRelation.forEach((o,f)=>{o.core_keys_id!=""&&o.value!=""&&(f==0?(i=o.core_keys_id,s=o.value):(i=i+"___"+o.core_keys_id,s=s+"___"+o.value))}),t=t+i+"-----"+s}return t}async function O(t,i){const s=new Z;s.itemId=i,r.value=!0;const o=await d.deleteItem(new I,t,s.toMap());return r.value=!1,o}async function Q(t,i){r.value=!0;const s=0,o=a.data.length,f=await d.getItemListByUserId(new y,o,s,t,i.toMap());a.data=f.data,a.code=f.code,a.status=f.status,a.message=f.message,r.value=!1}async function E(t){r.value=!0;const i=await d.postSellerCreditCard(new I,t);return r.value=!1,i}async function V(t){r.value=!0;const i=await d.postCreditCardUpdate(new I,t);return r.value=!1,i}return{updateCreditCard:V,postCreditCard:E,itemList:a,item:n,loading:r,limit:l,offset:m,isNoMoreRecord:c,id:p,paramHolder:e,phoneparamHolder:g,phoneList:u,updateProductList:h,loadItemList:k,resetProductList:U,loadItem:M,submitItemEntry:R,postItemImageUpload:H,postReorderItemImage:A,postItemVideoUpload:B,postItemVideoThumbUpload:N,getURLforList:x,userDeleteItem:O,refleshProductList:Q,loadPhoneCountryCode:S,relatedItem:T,postItemImageUploadDropzone:b}}));export{Y as P,Z as U,L as a,rt as u};
