import{o as n,c as d,q as c,m,s as h,a as i,t as u,F as _}from"./app.03d0793a.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const p={name:"CheckBox",props:["customizeDetails","customizeHeader","oldData","index"],data(){return{arr:[],error:""}},mounted(){if(this.oldData!==null){let a=this.oldData.split(",");this.arr=a}},methods:{handleChange(a,r){this.$emit("toParent",{data:a,id:r})},handleError(){}}},k=["id","value"],x=["for"];function v(a,r,t,y,o,l){return n(!0),d(_,null,c(t.customizeDetails.filter(e=>e.core_keys_id===t.customizeHeader.core_keys_id),e=>(n(),d("div",{class:"me-2",key:e.id},[m(i("input",{"onUpdate:modelValue":r[0]||(r[0]=s=>o.arr=s),onChange:r[1]||(r[1]=s=>l.handleChange(o.arr,t.index)),class:"me-2",type:"checkbox",id:e.id,value:e.id},null,40,k),[[h,o.arr]]),i("label",{for:e.id},u(e.name),9,x)]))),128)}var b=f(p,[["render",v]]);export{b as default};
