import{b0 as h,b1 as y,b2 as S,r as a,o as e,c as u,b as t,w as r,f as i,g as l,F as b,q as v,a as d}from"./app.03d0793a.js";import N from"./ItemHorizontalItem.c7aba6ef.js";import P from"./PsRouteLink.057d2d3a.js";import x from"./PsIcon.14101206.js";import z from"./ItemHorizontalSkeletorItem.ddbeb433.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsLabel.f69ed5af.js";import"./PsLabelTitle4.84123cc1.js";import"./PsCard.ad8bf07c.js";import"./ps_constants.1e4471b7.js";import"./PsAdSense.797329a1.js";import"./PsValueStore.98989d86.js";import"./AppInfoStore.df8c993a.js";import"./PsApiService.ebe2eb3a.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./AppInfoParameterHolder.e24d894d.js";import"./PsLoadingDialog.cb54104b.js";import"./PsModal.9e39943e.js";import"./vue-neat-modal.796ccbfb.js";import"./PsLine.baababc4.js";import"./PsLabelTitle.cac98e57.js";import"./format.min.9753f80e.js";import"./Product.21fd7f06.js";import"./Category.3f13b0a3.js";import"./DefaultIcon.e76b39a5.js";import"./SubCategory.1b4176e0.js";import"./ItemLocationTownship.94979fe0.js";import"./User.fb568515.js";import"./RatingDetail.291ad5d1.js";import"./PsValueHolder.a26fbd94.js";import"./ProductStore.b9cceb1f.js";import"./ProductParameterHolder.fd27bf91.js";import"./ApiStatus.5720ba0b.js";import"./PsSepetetedStore.9a31ac47.js";import"./FavouriteItemStore.f4a24527.js";import"./FollowItemParameterHolder.e4ffd22f.js";import"./PsUtils.aa012712.js";import"./moment.9709ab41.js";import"./vue-skeletor.esm.4b4183a8.js";/* empty css                     */const L={name:"ItemHorizontalSwiper",components:{Splide:h,SplideSlide:y,SplideTrack:S,ItemHorizontalItem:N,ItemHorizontalSkeletorItem:z,PsRouteLink:P,PsIcon:x},props:{itemList:Object,notShowTitle:{type:Boolean,default:!1},storeName:{type:String,default:""},isLoading:{type:Boolean,default:!1}},setup(n){return{options:{rewind:!0,gap:"1.5rem",perPage:4,focus:0,omitEnd:!0,pagination:!1,breakpoints:{1536:{perPage:4},1280:{perPage:3},1024:{perPage:3},768:{perPage:2},640:{perPage:1},200:{perPage:1}}}}}},B={class:"splide__arrows splide__arrows--ltr"},C={class:"bg-feSecondary-000 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--prev",type:"button","aria-label":"Previous slide","aria-controls":"splide01-track"},H={class:"bg-feSecondary-000 dark:bg-feSecondary-800 w-10 h-10 rounded shadow-sm p-2 arrow splide__arrow--next",type:"button","aria-label":"Next slide","aria-controls":"splide01-track"};function T(n,f,o,w,R,V){const m=a("item-horizontal-skeletor-item"),s=a("splide-slide"),_=a("item-horizontal-item"),k=a("splide-track"),c=a("ps-icon"),g=a("splide");return e(),u("div",null,[t(g,{options:w.options,"has-track":!1},{default:r(()=>[t(k,null,{default:r(()=>[n.item==null&&o.isLoading?(e(),i(s,{key:0},{default:r(()=>[t(m)]),_:1})):l("",!0),n.item==null&&o.isLoading?(e(),i(s,{key:1},{default:r(()=>[t(m)]),_:1})):l("",!0),n.item==null&&o.isLoading?(e(),i(s,{key:2},{default:r(()=>[t(m)]),_:1})):l("",!0),n.item==null&&o.isLoading?(e(),i(s,{key:3},{default:r(()=>[t(m)]),_:1})):l("",!0),(e(!0),u(b,null,v(o.itemList,p=>(e(),i(s,{key:p.id},{default:r(()=>[p.title==""?(e(),i(_,{key:0,item:p},null,8,["item"])):(e(),i(_,{key:1,item:p,notShowTitle:o.notShowTitle,storeName:o.storeName},null,8,["item","notShowTitle","storeName"]))]),_:2},1024))),128))]),_:1}),d("div",B,[d("button",C,[t(c,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})]),d("button",H,[t(c,{textColor:"dark:text-feSecondary-200",name:"arrowNarrowRight",h:"23",w:"23",viewBox:"0 -3 9 20"})])])]),_:1},8,["options"])])}var Ne=I(L,[["render",T],["__scopeId","data-v-0568a058"]]);export{Ne as default};
