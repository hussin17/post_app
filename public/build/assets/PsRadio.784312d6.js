import{P as o}from"./PsLabel.3118c88c.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as r,f as d,w as u,a as f,n as m,p as g,t as _}from"./app.03d0793a.js";const p={name:"PsRadio",components:{PsLabel:o},props:{value:{type:Object},selectedValue:{type:Object},title:{type:String,default:"N.A"},onChange:Function,color:{type:String,default:"text-primary-500 border-gray-300 focus:ring-primary-500 hover:bg-primary-500"}},setup(e,{emit:a}){function n(){let t=!1;return e.selectedValue!=null&&e.value!=null&&e.selectedValue.id==e.value.id&&(t=!0),t}function l(){const t=e.selectedValue;Object.assign(t,e.value),a("update:selectedValue",t),e.onChange!=null&&e.onChange(t)}return{getValue:n,handleInput:l}}},h=["id","checked"];function y(e,a,n,l,t,V){const i=s("ps-label");return r(),d(i,{class:"select-none inline-flex items-center"},{default:u(()=>[f("input",{type:"radio",class:m(["form-check-input focus:ring-1 me-2",n.color]),id:n.title,checked:l.getValue(),onChange:a[0]||(a[0]=b=>l.handleInput())},null,42,h),g(" "+_(n.title),1)]),_:1})}var k=c(p,[["render",y]]);export{k as P};