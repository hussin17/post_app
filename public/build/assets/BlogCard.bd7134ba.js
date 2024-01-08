import b from"./PsLabel.6f218a30.js";import u from"./PsButton.3558548a.js";import x from"./PsRouteLink.1446a036.js";import{B as f,u as h}from"./BlogStore.33e44abe.js";import{h as y}from"./moment.9709ab41.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{r,Q as v,o as w,c as B,m as D,a as o,b as a,w as l,p as n,t as s}from"./app.94623934.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsApiService.16e28b45.js";import"./PsObject.a17ef38f.js";import"./DefaultPhoto.cc755f93.js";import"./PsSepetetedStore.9a31ac47.js";const S={name:"BlogHorizontalItem",components:{PsLabel:b,PsButton:u,PsRouteLink:x},props:{blog:{type:f},onClick:Function,dateFormat:{type:String,default:"YYYY/MM/DD"}},setup(){return{blogStore:h(),moment:y}}},P={class:"w-full lg:h-[400px] flex flex-wrap shadow-sm"},C={class:"md:w-1/2 w-full sm:h-[400px] md:h-auto h-[202px] rounded",style:{cursor:"auto"}},I={class:"md:w-1/2 w-full md:[h-285px] md:ps-10",style:{cursor:"auto"}},N={class:"flex mb-4 mt-4"},Y=o("span",{class:"flex text-xs sm:text-sm pe-3 rtl:space-x-reverse space-x-2s text-gray-500 dark:text-gray-400"}," Admin ",-1),z={class:"flex text-xs sm:text-sm ms-3 ps-5 border-s-2 rtl:space-x-reverse space-x-2s text-gray-500 border-gray-400 dark:border-gray-400 dark:text-gray-400"},F={class:"leading-relaxed mb-4 text-base sm:text-lg dark:text-gray-300"};function U(t,V,e,i,L,M){var m,d;const g=r("ps-label"),c=r("ps-button"),p=r("ps-route-link"),_=v("lazy");return w(),B("div",P,[D(o("img",C,null,512),[[_,{src:t.$page.props.thumb3xUrl+"/"+((d=(m=e.blog)==null?void 0:m.defaultPhoto)==null?void 0:d.imgPath),loading:t.$page.props.sysImageUrl+"/loading_gif.gif",error:t.$page.props.sysImageUrl+"/default_photo.png"}]]),o("div",I,[a(g,{class:"text-gray-800 font-semibold mt-2 text-lg sm:mt-2 sm:text-2xl dark:text-gray-200",style:{cursor:"auto"}},{default:l(()=>[n(s(e.blog.name.length>30?e.blog.name.slice(0,20)+" ....":e.blog.name),1)]),_:1}),o("div",N,[Y,o("span",z,s(i.moment(e.blog.addedDate).format(t.$page.props.dateFormat)),1)]),o("p",F,s(e.blog.description.length>200?e.blog.description.slice(0,200)+".....":e.blog.description),1),a(p,{to:{name:"fe_blog_detail",params:{blogId:e.blog.id,blogName:e.blog.name}}},{default:l(()=>[a(c,{class:"mb-3",rounded:"rounded",colors:"bg-white dark:bg-gray-800 dark:text-gray-200 hover:text-white",border:"border border-gray-300 dark:border-gray-500"},{default:l(()=>[n(s(t.$t("blog__read_more")),1)]),_:1})]),_:1},8,["to"])])])}var W=k(S,[["render",U]]);export{W as default};
