import d from"./PsLabel.6f218a30.js";import m from"./PsNavMenu.fc7e72cc.js";import u from"./PsLabelCaption.106a532d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{i as f,r as l,o as h,c as k,b as e,w as s,p as a}from"./app.94623934.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsRouteLink.1446a036.js";import"./vue-router.esm-bundler.5f0bc2a6.js";const b={components:{PsLabel:d,PsNavMenu:m,PsLabelCaption:u},setup(){function n(){return{userId:2222}}const o=f(!0);r();function r(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?($("html").addClass("dark"),o.value=!0):($("html").removeClass("dark"),o.value=!1)}function c(){localStorage.isDarkMode!=null&&localStorage.isDarkMode=="true"?(localStorage.isDarkMode="false",o.value=!1):(localStorage.isDarkMode="true",o.value=!0),r()}return{aboutUsParmas:n,isDarkMode:o,toggleDarkMode:c}}},v={class:"flex items-center px-5 border-b py-3"},M=a(" Profile "),g=a(" Messages "),D=a(" Blog "),x=a(" Notification "),S=a(" Contact Us "),C=a(" Setting ");function P(n,o,r,c,N,B){const i=l("ps-nav-menu"),t=l("ps-label-caption"),_=l("ps-label");return h(),k("div",v,[e(i,{name:"dashboard",title:"Dashboard"}),e(t,{class:"ms-4"},{default:s(()=>[M]),_:1}),e(t,{class:"ms-4"},{default:s(()=>[g]),_:1}),e(t,{class:"ms-4"},{default:s(()=>[D]),_:1}),e(t,{class:"ms-4"},{default:s(()=>[x]),_:1}),e(t,{class:"ms-4"},{default:s(()=>[S]),_:1}),e(_,{class:"ms-4"},{default:s(()=>[C]),_:1})])}var j=p(b,[["render",P]]);export{j as default};
