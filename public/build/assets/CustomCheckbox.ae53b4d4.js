import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as s,a as i}from"./app.94623934.js";import"https://checkout.razorpay.com/v1/checkout.js";const f={name:"CustomCheckbox",props:{value:{type:String,default:"N.A"},isScribe:{type:String,default:"N.A"},selectedValue:{type:Array,default:()=>[]}},emit:["updateSelectedValue"],setup(t,r){function n(){let a=!1;return t.isScribe=="1"&&(a=!0),a}function c(a){const e=t.selectedValue;let l=!1;for(let o=0;o<e.length;o++)if(e[o]==t.value){l=!0,a||e.splice(o,1);break}l||e.push(t.value),r.emit("updateSelectedValue",e)}return{handleInput:c,getValue:n}}},p={class:"checkbox-label"},_=["checked"];function m(t,r,n,c,a,e){return d(),s("label",p,[i("input",{type:"checkbox",class:"w-6 h-6 text-fePrimary-500 bg-feBackground border-feSecondary-300 rounded focus:ring-fePrimary-500 focus:ring-2 dark:bg-feSecondary-800 dark:checked:bg-fePrimary-500 dark:border-feSecondary-300",checked:c.getValue(),onInput:r[0]||(r[0]=l=>c.handleInput(l.target.checked))},null,40,_)])}var y=u(f,[["render",m]]);export{y as default};
