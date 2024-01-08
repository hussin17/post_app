import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{i as l,o as u,c,n as i}from"./app.94623934.js";const y={name:"PsInput",props:{value:{type:String,default:""},type:{type:String,default:"text"},theme:{type:String,default:"text-secondary-500"},rounded:{type:String,default:"rounded"},maxlength:{type:Number,default:99999999},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabledTheme:{type:String,default:"bg-none text-secondary-300 border-secondary-300 dark:border-secondary-800 dark:text-secondary-700 shadow-none placeholder-secondary-300 dark:placeholder-secondary-700"},defaultBorder:{type:String,default:"border border-secondary-200 dark:border-secondary-800 focus:outline-none focus:ring-1 focus:ring-primary-500"},errorBorder:{type:String,default:"border border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"},onInput:Function,opacity:{type:String,default:"opacity-100"}},setup(r,{emit:t}){const e=l(!1);function a(d){t("update:value",d),r.onInput!=null&&r.onInput(d)}return{handleInput:a,isError:e}}},s=["type","value","disabled","readonly","maxlength","placeholder"];function f(r,t,e,a,d,m){return u(),c("input",{class:i(["block dark:bg-secondaryDark-black w-full px-4 py-2.25 text-sm shadow-sm placeholder-secondary-500",e.disabled?[e.opacity,e.rounded,e.disabledTheme]:a.isError?[e.theme,e.rounded,,e.errorBorder,e.opacity]:[e.theme,e.rounded,e.defaultBorder,e.opacity]]),type:e.type,value:e.value,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,placeholder:e.placeholder,onInput:t[0]||(t[0]=n=>a.handleInput(n.target.value))},null,42,s)}var h=o(y,[["render",f]]);export{h as P};
