import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,a as t,n as a,l as i,g as r,$ as d,a0 as p}from"./app.94623934.js";const u={name:"PsTooltip",props:{theme:{type:String,default:"bg-black text-white"},border:{type:String,default:"border-none"},arrow:{type:String,default:"start"},tooltip:{type:String,default:"relative inline-block"},tooltiptext:{type:String,default:"absolute z-50 bottom-full -ms-2"}},setup(){return{}},methods:{}},n=o=>(d("data-v-35a2c1df"),o=o(),p(),o),_={class:"flex flex-wrap"},x={class:"w-full text-center"},f={class:"flex-grow-0"},h={class:"relative w-full"},v={key:0,class:"absolute text-black h-2 left-0 ms-3 top-full",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve"},m=n(()=>t("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"},null,-1)),b=[m],y={key:1,class:"absolute text-black h-2 w-full left-0 top-full",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve"},g=n(()=>t("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"},null,-1)),w=[g],k={key:2,class:"absolute text-black h-2 right-0 me-3 top-full",x:"0px",y:"0px",viewBox:"0 0 255 255","xml:space":"preserve"},S=n(()=>t("polygon",{class:"fill-current",points:"0,0 127.5,127.5 255,0"},null,-1)),B=[S];function I(o,P,e,T,z,C){return s(),l("div",_,[t("div",x,[t("button",{class:a(["tooltip transition-all duration-150",e.tooltip]),type:"button"},[i(o.$slots,"content",{},void 0,!0),t("div",{class:a([e.tooltiptext,"absolute tooltiptext cursor-text flex flex-wrap w-screen"])},[t("div",f,[t("div",h,[t("div",{class:a([[e.theme,e.border],"text-xs rounded px-4 py-2 right-0 bottom-full"])},[i(o.$slots,"tooltips",{},void 0,!0),e.arrow=="start"?(s(),l("svg",v,b)):r("",!0),e.arrow=="middle"?(s(),l("svg",y,w)):r("",!0),e.arrow=="end"?(s(),l("svg",k,B)):r("",!0)],2)])])],2)],2)])])}var E=c(u,[["render",I],["__scopeId","data-v-35a2c1df"]]);export{E as P};
