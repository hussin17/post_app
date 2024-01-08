import D from"./PsCard.c6f1c9d7.js";import H from"./PsIcon.ebbfcfb3.js";import V from"./PsLabel.6f218a30.js";import{u as B}from"./AppInfoStore.7a7c38d9.js";import{A as T}from"./AppInfoParameterHolder.e24d894d.js";import{u as j}from"./PsValueHolder.0b2db09a.js";import{P as C}from"./PsValueStore.4aa1bdc1.js";import{P as I}from"./ps_constants.1e4471b7.js";import{C as z}from"./ChatHistory.4704e4d0.js";import{r as P,Q as M,o as l,c as _,a as o,m as x,b,w as m,p as d,t as i,f as h,g as f,n as N,J as O,O as A}from"./app.94623934.js";import{f as F}from"./format.min.83c29ea7.js";import{h as v}from"./moment.9709ab41.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsApiService.16e28b45.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";const E={name:"ChatHorizontalItem",components:{PsIcon:H,PsLabel:V,PsCard:D},props:{chathistory:{type:z},dateFormat:{type:String}},setup(s){C.psValueStore=j();const t=C().getLoginUserId(),c=new T;c.userId=t;const g=B();function w(e){return e.toString()=="0"?O("item_price__free"):F(g.appInfo.data.mobileSetting.price_format,e)}function r(e){A.Inertia.get(route("fe_chat"),{buyer_user_id:e.buyerUserId,seller_user_id:e.sellerUserId,item_id:e.itemId,chat_flag:I.CHAT_FROM_BUYER.toString()})}function y(e){let n=e.split(" ")[0],a=e.split(" ")[1],k=new Date().toISOString().split("T")[0];a=a.split(":"),a.pop(),a=a.join(":");let S=new Date,p=new Date(S);p.setDate(p.getDate()-1);let U=p.toISOString().split("T")[0];switch(!0){case n==k:return a;case n==U:return"Yesterday";default:return v(n).format(s.dateFormat)}}return{formatPrice:w,PsConst:I,appInfoStore:g,gotoDetail:r,chatTimeHistory:y,moment:v}}},L={class:"flex h-full"},R={class:"h-full w-[64px] sm:w-[100px] relative flex items-center"},J={alt:"Placeholder",class:"rounded-full bg-transparent h-16 w-16 sm:h-full sm:w-full border-2 border-gray-300"},Q={class:"absolute left-9 top-12 w-6 h-6 block sm:hidden"},q={alt:"Placeholder",class:"rounded-full w-full h-full border-2 border-gray-100"},G={class:"grow px-4 py-1"},K={class:"flex justify-between items-center w-full"},W={class:"flex justify-between w-full items-center"},X={key:2,class:"flex justify-center items-center font-normal text-sm rounded-full w-5 h-5 bg-fePrimary-600 text-gray-200"},Z={key:3,class:"w-10 h-10 flex justify-center items-center"},$={class:"h-full hidden sm:block w-32"},tt={alt:"Placeholder",class:"rounded w-full h-full"};function et(s,u,t,c,g,w){var n;const r=P("ps-label"),y=P("ps-icon"),e=M("lazy");return l(),_("div",{class:"cursor-pointer",onClick:u[0]||(u[0]=a=>c.gotoDetail(t.chathistory))},[o("div",{class:N(`h-[80px] sm:h-[100px] rounded-lg shadow-sm overflow-hidden mb-3 ${((n=t.chathistory)==null?void 0:n.sellerUnreadCount)>0?"bg-gray-200":""} dark:bg-feSecondary-800`)},[o("div",L,[o("div",R,[x(o("img",J,null,512),[[e,{src:s.$page.props.thumb1xUrl+"/"+t.chathistory.buyer.userCoverPhoto,loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]]),o("div",Q,[x(o("img",q,null,512),[[e,{src:s.$page.props.thumb1xUrl+"/"+t.chathistory.item.defaultPhoto.imgPath,loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]])])]),o("div",G,[b(r,{textColor:"font-semibold text-fePrimary-500 text-xs sm:text-xl"},{default:m(()=>[d(i(t.chathistory?t.chathistory.buyer.userName:""),1)]),_:1}),o("div",K,[t.chathistory?(l(),h(r,{key:0,class:"font-medium text-xs sm:text-lg lg:hidden block"},{default:m(()=>[d(i(t.chathistory.item.title.length>30?t.chathistory.item.title.slice(0,20)+".......":t.chathistory.item.title),1)]),_:1})):f("",!0),t.chathistory?(l(),h(r,{key:1,class:"font-medium text-xs sm:text-lg lg:block hidden"},{default:m(()=>[d(i(t.chathistory.item.title),1)]),_:1})):f("",!0),b(r,{class:"text-xs"},{default:m(()=>[d(i(c.chatTimeHistory(t.chathistory.addedDate)),1)]),_:1})]),o("div",W,[t.chathistory?(l(),h(r,{key:0,class:"font-normal text-sm text-gray-400 lg:hidden block",textColor:"text-gray-600"},{default:m(()=>[d(i(t.chathistory.latestChatMessage.length>20?t.chathistory.latestChatMessage.slice(0,15)+"......":t.chathistory.latestChatMessage),1)]),_:1})):f("",!0),t.chathistory?(l(),h(r,{key:1,class:"font-normal text-sm text-gray-400 lg:block hidden",textColor:"text-gray-600"},{default:m(()=>[d(i(t.chathistory.latestChatMessage),1)]),_:1})):f("",!0),t.chathistory.sellerUnreadCount>0?(l(),_("span",X,i(t.chathistory?t.chathistory.sellerUnreadCount:"0"),1)):(l(),_("div",Z,[b(y,{name:"done_all",class:"text-gray-400",w:"24",h:"24"})]))])]),o("div",$,[x(o("img",tt,null,512),[[e,{src:s.$page.props.thumb1xUrl+"/"+t.chathistory.item.defaultPhoto.imgPath,loading:s.$page.props.sysImageUrl+"/loading_gif.gif",error:s.$page.props.sysImageUrl+"/default_photo.png"}]])])])],2)])}var kt=Y(E,[["render",et]]);export{kt as default};
