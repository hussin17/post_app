import{d as m,r as a,o as i,c as n,b as c,w as d,l as t,a as e,h as l,n as p,g as u}from"./app.94623934.js";import{J as h}from"./SectionTitle.eec45afc.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const _=m({emits:["submitted"],components:{JetSectionTitle:h},computed:{hasActions(){return!!this.$slots.actions}}}),g={class:"md:grid md:grid-cols-3 md:gap-6"},$={class:"mt-5 md:mt-0 md:col-span-2"},v={class:"grid grid-cols-6 gap-6"},b={key:0,class:"flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md"};function w(s,o,y,C,J,S){const r=a("jet-section-title");return i(),n("div",g,[c(r,null,{title:d(()=>[t(s.$slots,"title")]),description:d(()=>[t(s.$slots,"description")]),_:3}),e("div",$,[e("form",{onSubmit:o[0]||(o[0]=l(j=>s.$emit("submitted"),["prevent"]))},[e("div",{class:p(["px-4 py-5 bg-white sm:p-6 shadow",s.hasActions?"sm:rounded-tl-md sm:rounded-tr-md":"sm:rounded-md"])},[e("div",v,[t(s.$slots,"form")])],2),s.hasActions?(i(),n("div",b,[t(s.$slots,"actions")])):u("",!0)],32)])])}var N=f(_,[["render",w]]);export{N as J};
