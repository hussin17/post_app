import{d as g,i as v,r,o as x,f as k,w as a,a as f,b as p,p as d,t as m,ax as b,g as C}from"./app.03d0793a.js";import $ from"./PsModal.9e39943e.js";import w from"./PsLabel.f69ed5af.js";import E from"./PsButton.506f0d87.js";import z from"./PsInput.508a4652.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./vue-neat-modal.796ccbfb.js";import"./PsLine.baababc4.js";const B=g({name:"InputEmailModal",components:{PsModal:$,PsLabel:w,PsButton:E,PsInput:z},setup(){const e=v(),t=v(),l=v(!1);let u,c;function y(o){/^([a-zA-Z0-9.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(o.target.value)?l.value=!1:l.value=!0}function n(o){e.value.toggle(!1),o=="yes"?t.value==""?l.value=!1:u(t.value):c()}async function _(o,i){u=o,c=i,e.value.toggle(!0)}return{psmodal:e,openModal:_,userEmail:t,validateEmail:y,validationEmail:l,actionClicked:n}}}),h={class:"flex justify-between container w-full px-4"},S={class:"flex flex-col w-full"},M=f("span",{style:{"font-size":"17px",color:"red"}},"*",-1),N={class:"flex flex-row justify-between"};function V(e,t,l,u,c,y){const n=r("ps-label"),_=r("ps-input"),o=r("ps-button"),i=r("ps-modal");return x(),k(i,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-50",line:"hidden"},{body:a(()=>[f("div",h,[f("div",S,[p(n,{class:"mt-4 mx-5"},{default:a(()=>[d(m(e.$t("register__email"))+" ",1),M]),_:1}),p(_,{class:"mt-2 mx-5 mb-4",type:"email","v-bindplaceholder":e.$t("password_update_modal__password"),value:e.userEmail,"onUpdate:value":t[0]||(t[0]=s=>e.userEmail=s),onKeyup:t[1]||(t[1]=b(s=>e.actionClicked("yes"),["enter"])),onBlur:e.validateEmail},null,8,["v-bindplaceholder","value","onBlur"]),e.validationEmail?(x(),k(n,{key:0,class:"lg:mt-2 mt-1 w-full",textColor:"text-fePrimary-500"},{default:a(()=>[d(m(e.$t("login__email_required_error")),1)]),_:1})):C("",!0)])])]),footer:a(()=>[f("div",N,[p(o,{onClick:t[2]||(t[2]=s=>e.actionClicked("no")),textSize:"text-xxs lg:text-sm",class:"py-3",theme:"bg-feSecondary-000 dark:bg-feSecondaryDark-grey text-fePrimary-500 dark:text-fePrimaryDark-white"},{default:a(()=>[d(m(e.$t("profile__cancel")),1)]),_:1}),p(o,{onClick:t[3]||(t[3]=s=>e.actionClicked("yes")),textSize:"text-xxs lg:text-sm",class:"py-3"},{default:a(()=>[d(m(e.$t("profile__confirm")),1)]),_:1})])]),_:1},512)}var T=P(B,[["render",V]]);export{T as default};
