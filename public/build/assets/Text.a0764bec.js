import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as o,a as s}from"./app.94623934.js";import"https://checkout.razorpay.com/v1/checkout.js";const p={name:"Text",props:{language_string:{type:String,default:""},placeholder:{type:String,default:"Please enter "}},emits:["update:language_string"]},u={class:"me-2"},d=["value","placeholder"];function i(a,e,t,c,g,_){return l(),o("div",u,[s("input",{type:"text",value:t.language_string,onInput:e[0]||(e[0]=n=>a.$emit("update:language_string",n.target.value)),class:"w-60 rounded",placeholder:t.placeholder},null,40,d)])}var v=r(p,[["render",i]]);export{v as default};
