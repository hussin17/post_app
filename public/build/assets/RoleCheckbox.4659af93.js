import{P as c}from"./PsLabel.dab9a58c.js";import{r as m,o as s,c as d,q as p,m as h,s as u,a as f,b as _,w as b,p as x,t as v,F as y}from"./app.94623934.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const k={name:"CheckBox",component:{PsLabel:c},props:["permissions","customizeHeader","module_id","oldData"],data(){return{arr:[],error:""}},mounted(){if(Array.isArray(this.oldData)&&this.oldData.map(e=>{if(e!==void 0){let a=e.permission_id.split(",");this.arr=a}}),this.oldData){let e=this.oldData.split(",");this.arr=e}},methods:{handleChange(e){this.$emit("toParent",{data:e})},handleError(){}}},D=["id","value"];function g(e,a,l,B,r,n){const i=m("ps-label");return s(!0),d(y,null,p(l.permissions,t=>(s(),d("div",{class:"me-2",key:t.id},[h(f("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>r.arr=o),onChange:a[1]||(a[1]=o=>n.handleChange(r.arr)),class:"me-2 border-1 border-secondary-200 rounded",type:"checkbox",id:t.id,value:t.id},null,40,D),[[u,r.arr]]),_(i,{class:"text-base font-light",for:t.id},{default:b(()=>[x(v(t.title?t.title:t.name),1)]),_:2},1032,["for"])]))),128)}var A=C(k,[["render",g]]);export{A as default};
