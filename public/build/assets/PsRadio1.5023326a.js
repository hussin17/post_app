import c from"./PsLabel.6f218a30.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as r,c as u,b as f,w as m,a as _,l as o}from"./app.94623934.js";import"https://checkout.razorpay.com/v1/checkout.js";const h={name:"PsRadio1",components:{PsLabel:c},props:{value:{type:Object},selectedValue:{type:Object},id:{type:String,default:"N.A"},onChange:Function},setup(e,{emit:a}){function l(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue.id==e.value.id&&(t=!0),t}function n(){const t=e.selectedValue;Object.assign(t,e.value),a("update:selectedValue",t),e.onChange!=null&&e.onChange(t)}return{getValue:l,handleInput:n}}},p={class:"flex flex-row justify-between"},v=["id","checked"];function b(e,a,l,n,t,g){const s=d("ps-label");return r(),u("div",p,[f(s,{class:"select-none inline-flex flex-row items-center"},{default:m(()=>[_("input",{type:"radio",class:"form-radio me-2 checked:bg-fePrimary-500 dark:bg-fePrimaryDark-accent",id:l.id,checked:n.getValue(),onChange:a[0]||(a[0]=V=>n.handleInput())},null,40,v),o(e.$slots,"title")]),_:3}),o(e.$slots,"price")])}var w=i(h,[["render",b]]);export{w as default};
