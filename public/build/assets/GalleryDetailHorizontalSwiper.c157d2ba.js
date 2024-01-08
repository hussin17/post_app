import y from"./PsImageModal.a8257760.js";import{D as w}from"./DefaultPhoto.cc755f93.js";import v from"./PsIcon.ebbfcfb3.js";import{P as x}from"./PsUtils.aa012712.js";import{S as _,aZ as b,d as C,i as p,r as n,Q as S,o as d,f as $,w as A,a as l,b as a,c as h,m as k}from"./app.94623934.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsObject.a17ef38f.js";_.add(b);const I=C({name:"GalleryDetailHorizontalSwiper",components:{PsImageModal:y,PsIcon:v},setup(){const e=p();let o=p(new w),t=new Array;function c(r,s){o.value=r,t=s,x.log(s),e.value.toggle(!0)}function g(){for(let r=0;r<t.length;r++)if(t[r].imgId==o.value.imgId)if(r==t.length-1){o.value=t[0];break}else{o.value=t[r+1];break}}function f(){for(let r=0;r<t.length;r++)if(t[r].imgId==o.value.imgId)if(r==0){o.value=t[t.length-1];break}else{o.value=t[r-1];break}}return{psmodal:e,openModal:c,gallery:o,galleryList:t,rightArrowClicked:g,leftArrowClicked:f}}}),P={class:"w-screem flex flex-col"},U={class:"flex flex-row justify-between"},j=l("div",{class:"flex-grow"},null,-1),z={class:"flex flex-row justify-between"},B={class:"flex flex-grow max-w-5/6"},G={key:0,class:"w-full h-auto"},H={width:"320",height:"240",class:"w-full h-112 mt-0 lg:mt-2 object-contain object-contains",controls:""},M=["src"],N=["src"],T={alt:"Placeholder",width:"300px",height:"400px",class:"w-full h-112 overflow:hidden object-contain"},V={key:1,alt:"Placeholder",width:"300px",height:"400px",class:"w-full h-112 overflow:hidden object-contain"};function E(e,o,t,c,g,f){const r=n("font-awesome-icon"),s=n("ps-icon"),u=n("ps-image-modal"),m=S("lazy");return d(),$(u,{ref:"psmodal",isClickOut:!1,class:"z-50 content-center mx-auto"},{body:A(()=>[l("div",P,[l("div",U,[j,a(r,{onClick:o[0]||(o[0]=i=>e.psmodal.toggle(!1)),icon:["fas","times"],class:"text-feSecondary-700 dark:text-feSecondaryDark-grey",size:"2x"})]),l("div",z,[l("div",{class:"my-auto",onClick:o[1]||(o[1]=(...i)=>e.leftArrowClicked&&e.leftArrowClicked(...i))},[a(s,{name:"leftArrow",class:"block sm:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"30",h:"30"}),a(s,{name:"leftArrow",class:"hidden sm:block lg:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"40",h:"40"}),a(s,{name:"leftArrow",class:"hidden lg:block stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"50",h:"50"})]),l("div",B,[e.gallery.imgType=="item-video"?(d(),h("div",G,[l("video",H,[l("source",{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,type:"video/mp4"},null,8,M),l("source",{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,type:"video/ogg"},null,8,N),k(l("img",T,null,512),[[m,{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])])):k((d(),h("img",V,null,512)),[[m,{src:e.$page.props.thumb1xUrl+"/"+e.gallery.imgPath,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])]),l("div",{class:"my-auto cursor-pointer",onClick:o[2]||(o[2]=(...i)=>e.rightArrowClicked&&e.rightArrowClicked(...i))},[a(s,{name:"rightArrow",class:"block sm:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"30",h:"30"}),a(s,{name:"rightArrow",class:"hidden sm:block lg:hidden stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"40",h:"40"}),a(s,{name:"rightArrow",class:"hidden lg:block stroke-current stroke-0",textColor:"text-feSecondary-700 dark:text-feSecondaryDark-grey",w:"50",h:"50"})])])])]),_:1},512)}var W=D(I,[["render",E]]);export{W as default};
