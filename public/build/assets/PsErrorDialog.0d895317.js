import k from"./PsModal.3bf2e071.js";import y from"./PsLabel.6f218a30.js";import b from"./PsButton.3558548a.js";import{d as w,i as l,J as _,r as a,o as C,f as B,w as t,b as s,a as i,p as g,t as x}from"./app.94623934.js";import $ from"./PsIcon.ebbfcfb3.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";const S=w({components:{PsModal:k,PsLabel:y,PsButton:b,PsIcon:$},setup(){const e=l(),o=l(_("ps_error_dialog__error")),c=l(_("ps_error_dialog__error_message")),d=l(_("ps_confirm_dialog__yes"));let m;function v(){e.value.toggle(!1),m()}function n(p,f,u,h){o.value=p,c.value=f.toString(),d.value=u,e.value.toggle(!0),m=h}function r(){e.value.toggle(!1)}return{psmodal:e,title:o,message:c,openModal:n,actionClicked:v,okButton:d,close:r}}}),j={class:"flex flex-col text-center justify-center items-center text-gray-300"},N={class:"w-full text-center mt-4"},V={class:"flex justify-center mt-6"},z={class:"flex-grow-0"};function D(e,o,c,d,m,v){const n=a("ps-icon"),r=a("ps-label"),p=a("ps-button"),f=a("ps-modal");return C(),B(f,{ref:"psmodal",maxWidth:"450px",line:"hidden",isClickOut:!1,theme:" px-6 py-7 rounded-lg shadow-xl",class:"z-20"},{title:t(()=>[s(n,{onClick:o[0]||(o[0]=u=>e.close()),name:"close",class:"text-sm text-feSecondary-400 ms-auto my-auto focus:shadow-none hover:text-purple-500 flex justify-end"}),i("div",j,[s(n,{class:"flex-grow-0",name:"alert-triangle",w:"86",h:"86"}),s(r,{class:"font-medium text-xl lg:text-2xl mt-3"},{default:t(()=>[g(x(e.title),1)]),_:1})])]),body:t(()=>[i("div",N,[s(r,{class:"font-light text-sm lg:text-base"},{default:t(()=>[g(x(e.message),1)]),_:1})])]),footer:t(()=>[i("div",V,[i("div",z,[s(p,{rounded:"rounded",onClick:o[1]||(o[1]=u=>e.actionClicked()),textSize:"text-sm",class:"",colors:"bg-red-500 text-white",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-300"},{default:t(()=>[g(x(e.okButton),1)]),_:1})])])]),_:1},512)}var A=P(S,[["render",D]]);export{A as default};
