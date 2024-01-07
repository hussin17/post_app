import{o as S,f as j,m as L,v as w,b as k,l as P,g as B,ax as C,ay as y,C as m}from"./app.03d0793a.js";function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,c)}return a}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t,a){var c=y(e),s=c.disabled,f=a.checked,l=m(function(){return function(d){for(var u=1;u<arguments.length;u++){var n=arguments[u]!=null?arguments[u]:{};u%2?V(Object(n),!0).forEach(function(r){N(d,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach(function(r){Object.defineProperty(d,r,Object.getOwnPropertyDescriptor(n,r))})}return d}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},c.classes.value)});return{classList:m(function(){return{container:l.value.container,toggle:[l.value.toggle,s.value?f.value?l.value.toggleOnDisabled:l.value.toggleOffDisabled:f.value?l.value.toggleOn:l.value.toggleOff],handle:[l.value.handle,s.value?f.value?l.value.handleOnDisabled:l.value.handleOffDisabled:f.value?l.value.handleOn:l.value.handleOff],label:l.value.label}})}}var D={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t==null},required:!1},modelValue:{validator:function(e){return t=>["number","string","boolean"].indexOf(typeof t)!==-1||t==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,t){const a=function(l,d,u){var n=y(l),r=n.value,g=n.modelValue,o=n.falseValue,b=n.trueValue,p=n.disabled,i=d.expose!==void 0?g:r,v=m(function(){return i.value===b.value}),O=function(h){d.emit("input",h),d.emit("update:modelValue",h),d.emit("change",h)},q=function(){O(b.value)},x=function(){O(o.value)};return[null,void 0,!1,0,"0","off"].indexOf(i.value)!==-1&&[o.value,b.value].indexOf(i.value)===-1&&x(),[!0,1,"1","on"].indexOf(i.value)!==-1&&[o.value,b.value].indexOf(i.value)===-1&&q(),{externalValue:i,checked:v,update:O,check:q,uncheck:x,handleInput:function(h){O(h.target.checked?b.value:o.value)},handleClick:function(){p.value||(v.value?x():q())}}}(e,t),c=function(l,d,u){var n=y(l),r=n.trueValue,g=n.falseValue,o=n.onLabel,b=n.offLabel,p=u.checked,i=u.update;return{label:m(function(){var v=p.value?o.value:b.value;return v||(v="&nbsp;"),v}),toggle:function(){i(p.value?g.value:r.value)},on:function(){i(r.value)},off:function(){i(g.value)}}}(e,0,{checked:a.checked,update:a.update}),s=T(e,0,{checked:a.checked}),f=function(l,d,u){var n=y(l).disabled,r=u.check,g=u.uncheck,o=u.checked;return{handleSpace:function(){n.value||(o.value?g():r())}}}(e,0,{check:a.check,uncheck:a.uncheck,checked:a.checked});return{...a,...s,...c,...f}}};D.render=function(e,t,a,c,s,f){return S(),j("div",{class:e.classList.container,tabindex:a.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":a.describedby,"aria-labelledby":a.labelledby,role:"switch",onKeyup:t[2]||(t[2]=C((...l)=>e.handleSpace&&e.handleSpace(...l),["space"]))},[L(k("input",{type:"checkbox",id:a.id,name:a.name,value:a.trueValue,checked:e.checked,disabled:a.disabled},null,8,["id","name","value","checked","disabled"]),[[w,!1]]),k("div",{class:e.classList.toggle,onClick:t[1]||(t[1]=(...l)=>e.handleClick&&e.handleClick(...l))},[k("span",{class:e.classList.handle},null,2),P(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[k("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),a.required?(S(),j("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):B("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},D.__file="src/Toggle.vue";export{D as b};
