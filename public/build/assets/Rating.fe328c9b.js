import{S as m,U as d,V as f,r as u,o,c as r,F as _,q as p,n as c,b as i}from"./app.03d0793a.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";m.add(d,f);const g={name:"RatingView",components:{},props:{grade:{type:Number,default:0},maxStars:{type:Number,default:0},hasCounter:{type:Boolean,default:!0}},setup(s){let n;function a(e){e<=s.maxStars&&e>=0&&(n=s.grade===e?e-1:e)}return{rate:a,stars:n}}},y={class:"flex items-center"},h=["onClick"];function v(s,n,a,e,S,k){const l=u("font-awesome-icon");return o(),r("div",y,[(o(!0),r(_,null,p(a.maxStars,t=>(o(),r("div",{class:c([{active:t<=e.stars},"star me-0.5"]),key:t,onClick:w=>e.rate(t)},[i(l,{icon:["fas","star"],class:c(t<=a.grade?"text-yellow-500 ":"hidden "),size:"sm"},null,8,["class"]),i(l,{icon:["far","star"],class:c(t<=a.grade?"hidden ":"text-yellow-500 "),size:"sm"},null,8,["class"])],10,h))),128))])}var B=x(g,[["render",v]]);export{B as default};
