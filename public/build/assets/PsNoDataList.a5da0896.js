import f from"./PsButton.506f0d87.js";import d from"./PsLabel.f69ed5af.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,Q as _,o as g,c as h,m as x,a as v,b as s,w as r,p as n,t as l,F as y}from"./app.03d0793a.js";import"https://checkout.razorpay.com/v1/checkout.js";const b={name:"PsNavMenu",components:{PsButton:f,PsLabel:d},props:{name:{type:String,default:"no_data"}},setup(e,{emit:a}){function t(){a("handleRefresh")}return{refresh:t}}},w={alt:"Placeholder",height:"auto",class:"w-screen object-cover rtl:space-x-reverse space-x-48"};function $(e,a,t,p,k,C){const c=o("ps-label"),i=o("ps-button"),m=_("lazy");return g(),h(y,null,[x(v("img",w,null,512),[[m,{src:e.$page.props.sysImageUrl+"/undraw.png",loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),s(c,{textColor:"text-feSecondary-500 dark:text-feSecondaryDark-white lg:text-xl sm:text-lg text-base font-medium",class:"mt-10 flex-grow-0 mx-auto"},{default:r(()=>[n(l(e.$t(t.name)),1)]),_:1}),s(i,{class:"w-60 mx-auto mt-8",onClick:p.refresh},{default:r(()=>[n(l(e.$t("list__refresh")),1)]),_:1},8,["onClick"])],64)}var I=u(b,[["render",$]]);export{I as default};
