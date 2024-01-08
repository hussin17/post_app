import{M as l}from"./Modal.7cd33220.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{d,r as n,o as t,f as c,w as i,a as e,l as s,c as m,g as p}from"./app.94623934.js";const f=d({emits:["close"],components:{Modal:l},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0},showFooter:{default:!0}},methods:{close(){this.$emit("close")}}}),h={class:"px-4 pt-6 dark:bg-backgroundDark"},u={class:"text-lg"},_={class:"mt-4"},w={key:0,class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"};function g(o,$,b,k,x,v){const a=n("modal");return t(),c(a,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:o.close},{default:i(()=>[e("div",h,[e("div",u,[s(o.$slots,"title")]),e("div",_,[s(o.$slots,"content")])]),o.showFooter?(t(),m("div",w,[s(o.$slots,"footer")])):p("",!0)]),_:3},8,["show","max-width","closeable","onClose"])}var M=r(f,[["render",g]]);export{M as J};
