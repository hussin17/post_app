import{y as d,K as i,C as s,i as u,r as m,o as p,f,w as y,a as _,t as k}from"./app.94623934.js";import x from"./PsIcon.ebbfcfb3.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";const D={components:{Datepicker:d,PsIcon:x},props:{value:{type:Date,default:null},inline:{type:Boolean,default:!0},autoApply:{type:Boolean,default:!0},enableTimePicker:{type:Boolean,default:!1},range:{type:Boolean,default:!1},placeholder:{type:String,default:"Select Date"},cancelText:{type:String,default:"Close"},selectText:{type:String,default:"Apply"}},setup(o,{emit:t}){const e=i(),a=s(()=>e.getters.isDarkMode),l=u(o.value),c=n=>{l.value=n,t("update:value",l.value),t("datepick",l.value)};function r(){return o.range==!1?"dd/MM/yyyy":"MM/dd"}return{getFormat:r,date:l,isDarkMode:a,handleDate:c}}},v={class:"font-medium text-sm text-secondary-800 dark:text-white"};function T(o,t,e,a,l,c){const r=m("Datepicker");return p(),f(r,{format:a.getFormat(),modelValue:a.date,"onUpdate:modelValue":[t[0]||(t[0]=n=>a.date=n),a.handleDate],inline:e.inline,autoApply:e.autoApply,enableTimePicker:e.enableTimePicker,range:e.range,placeholder:e.placeholder,clearable:"",menuClassName:"dp-custom-menu",cancelText:e.cancelText,selectText:e.selectText,dark:a.isDarkMode},{"calendar-header":y(({day:n})=>[_("div",v,k(n),1)]),_:1},8,["format","modelValue","onUpdate:modelValue","inline","autoApply","enableTimePicker","range","placeholder","cancelText","selectText","dark"])}var S=g(D,[["render",T]]);export{S as default};