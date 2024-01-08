import{x as B,i as H,j as ae,k as de,r as S,o as s,c as f,a as n,l as x,b as u,w as d,n as W,p as h,t as l,F as O,q as T,g as P,T as ce,L as fe,aM as ue,J as me,f as w,m as $,v as E}from"./app.94623934.js";import{P as Z}from"./PsLabel.dab9a58c.js";import{P as ee}from"./PsIcon.ff30b54a.js";import{P as te}from"./PsTextButton.b34be5b9.js";import{a as he,P as _e,D as be}from"./PsTableSearch.1d3198df.js";import{b as ye,P as pe,a as ge}from"./PsLayout.38886a49.js";import{P as ve}from"./PsInputWithRightIcon.2dba0be1.js";import{h as ke}from"./moment.9709ab41.js";import{P as re}from"./PsButton.de8e2c9c.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";function we(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var se=we,xe=typeof B=="object"&&B&&B.Object===Object&&B,je=xe,Oe=je,Se=typeof self=="object"&&self&&self.Object===Object&&self,Fe=Oe||Se||Function("return this")(),ne=Fe,Ce=ne,Te=function(){return Ce.Date.now()},Pe=Te,De=/\s/;function Ae(e){for(var r=e.length;r--&&De.test(e.charAt(r)););return r}var Le=Ae,Ie=Le,Re=/^\s+/;function Ne(e){return e&&e.slice(0,Ie(e)+1).replace(Re,"")}var Me=Ne,Be=ne,$e=Be.Symbol,le=$e,q=le,ie=Object.prototype,Ee=ie.hasOwnProperty,ze=ie.toString,M=q?q.toStringTag:void 0;function Ge(e){var r=Ee.call(e,M),t=e[M];try{e[M]=void 0;var b=!0}catch{}var i=ze.call(e);return b&&(r?e[M]=t:delete e[M]),i}var Ve=Ge,We=Object.prototype,Ue=We.toString;function He(e){return Ue.call(e)}var qe=He,J=le,Je=Ve,Xe=qe,Ke="[object Null]",Qe="[object Undefined]",X=J?J.toStringTag:void 0;function Ye(e){return e==null?e===void 0?Qe:Ke:X&&X in Object(e)?Je(e):Xe(e)}var Ze=Ye;function et(e){return e!=null&&typeof e=="object"}var tt=et,rt=Ze,ot=tt,st="[object Symbol]";function nt(e){return typeof e=="symbol"||ot(e)&&rt(e)==st}var lt=nt,it=Me,K=se,at=lt,Q=0/0,dt=/^[-+]0x[0-9a-f]+$/i,ct=/^0b[01]+$/i,ft=/^0o[0-7]+$/i,ut=parseInt;function mt(e){if(typeof e=="number")return e;if(at(e))return Q;if(K(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=K(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=it(e);var t=ct.test(e);return t||ft.test(e)?ut(e.slice(2),t?2:8):dt.test(e)?Q:+e}var ht=mt,_t=se,V=Pe,Y=ht,bt="Expected a function",yt=Math.max,pt=Math.min;function gt(e,r,t){var b,i,g,c,y,F,v=0,m=!1,C=!1,D=!0;if(typeof e!="function")throw new TypeError(bt);r=Y(r)||0,_t(t)&&(m=!!t.leading,C="maxWait"in t,g=C?yt(Y(t.maxWait)||0,r):g,D="trailing"in t?!!t.trailing:D);function I(p){var L=b,N=i;return b=i=void 0,v=p,c=e.apply(N,L),c}function o(p){return v=p,y=setTimeout(A,r),m?I(p):c}function k(p){var L=p-F,N=p-v,U=r-L;return C?pt(U,g-N):U}function a(p){var L=p-F,N=p-v;return F===void 0||L>=r||L<0||C&&N>=g}function A(){var p=V();if(a(p))return j(p);y=setTimeout(A,k(p))}function j(p){return y=void 0,D&&b?I(p):(b=i=void 0,c)}function z(){y!==void 0&&clearTimeout(y),v=0,b=F=i=y=void 0}function R(){return y===void 0?c:j(V())}function G(){var p=V(),L=a(p);if(b=arguments,i=this,F=p,L){if(y===void 0)return o(F);if(C)return clearTimeout(y),y=setTimeout(A,r),I(F)}return y===void 0&&(y=setTimeout(A,r)),c}return G.cancel=z,G.flush=R,G}var vt=gt;const kt={name:"NewDropdown",components:{PsButton:re,PsTextButton:te,PsLabelHeader6:ye,PsLabel:Z,PsIcon:ee},props:{horizontalAlign:{type:String,default:"right"},h:{type:String,default:" h-auto"},verticalAlign:{type:String,default:""},colFilterOptions:{type:Object}},emits:["on-click"],data(){return{colFilters:{}}},created(){this.colFilterOptions.map((e,r)=>{this.colFilters[e.key]=e.hidden})},methods:{showAll(){let e=this.colFilterOptions.filter(r=>r.hidden===!0);for(let r of e)this.colFilters[r.key]=!1},hideAll(){let e=this.colFilterOptions.filter(r=>r.hidden===!1);for(let r of e)this.colFilters[r.key]=!0},changeFilter(){for(let e of this.colFilterOptions)e.hidden=this.colFilters[e.key];this.$emit("update:modelValue",this.colFilterOptions),this.$emit("changeFilter")},clearFilter(){this.colFilterOptions.map((e,r)=>{this.colFilters[e.key]=e.hidden})}},setup(e,{emit:r}){const t=H(!1);function b(){t.value&&(t.value=!t.value)}const i=H();function g(y){i.value.contains(y.target)||b()}ae(()=>{document.addEventListener("click",g)}),de(()=>{document.removeEventListener("click",g)});function c(){t.value=!t.value,r("on-click")}return{isMenuOpen:t,dropdown:i,hide:b,clicked:c}}},wt={class:"relative inline-block",ref:"dropdown"},xt={class:"flex flex-col w-68 gap-8"},jt={class:"mt-2.5"},Ot={class:"py-8 px-2.5 z-30"},St={key:0},Ft={class:"flex justify-between"},Ct=["onClick"],Tt={key:1,class:"mt-8.5"},Pt={class:"flex justify-between"},Dt=["onClick"],At={class:"px-2.5"};function Lt(e,r,t,b,i,g){const c=S("ps-label"),y=S("ps-icon"),F=S("ps-button"),v=S("ps-text-button");return s(),f("div",wt,[n("div",{onClick:r[0]||(r[0]=(...m)=>b.clicked&&b.clicked(...m))},[x(e.$slots,"select")]),u(ce,{"enter-active-class":"transition ease-out duration-100","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:d(()=>[b.isMenuOpen?(s(),f("div",{key:0,class:W(["absolute mt-2 rounded-md shadow-lg text-sm overflow-auto border z-20 bg-background dark:bg-backgroundDark",[t.horizontalAlign=="right"?"origin-top-right right-0 rtl:origin-top-left rtl:left-0":"origin-top-left left-0 rtl:origin-top-right rtl:right-0",t.verticalAlign,t.h]])},[n("div",xt,[n("div",jt,[u(c,{class:"ms-2.5 font-semibold"},{default:d(()=>[h(l(e.$t("ps_dropdown_modal__filter_option")),1)]),_:1}),x(e.$slots,"list",{},()=>[n("div",Ot,[t.colFilterOptions.filter(m=>m.hidden===!1).length>0?(s(),f("div",St,[n("div",Ft,[u(c,{class:"font-semibold",textColor:"text-gray-300"},{default:d(()=>[h(l(e.$t("ps_dropdown_modal__shown")),1)]),_:1}),u(c,{class:"font-semibold cursor-pointer",textColor:"text-primary-500",onClick:g.hideAll},{default:d(()=>[h(l(e.$t("ps_dropdown_modal__hide_all")),1)]),_:1},8,["onClick"])]),(s(!0),f(O,null,T(t.colFilterOptions.filter(m=>m.hidden===!1),(m,C)=>(s(),f("div",{key:C,class:"flex justify-between font-semibold mt-5 dark:hover:bg-primary-900"},[u(c,null,{default:d(()=>[h(l(e.$t(m.label)),1)]),_:2},1024),n("div",{class:"cursor-pointer",onClick:D=>i.colFilters[m.key]=!i.colFilters[m.key]},[u(y,{theme:"font-semibold",name:i.colFilters[m.key]?"eyeOff":"eye-on"},null,8,["name"])],8,Ct)]))),128))])):P("",!0),t.colFilterOptions.filter(m=>m.hidden===!0).length>0?(s(),f("div",Tt,[n("div",Pt,[u(c,{class:"font-semibold",textColor:"text-gray-300"},{default:d(()=>[h(l(e.$t("ps_dropdown_modal__hidden")),1)]),_:1}),u(c,{class:"font-semibold cursor-pointer",textColor:"text-primary-500",onClick:g.showAll},{default:d(()=>[h(l(e.$t("ps_dropdown_modal__show_all")),1)]),_:1},8,["onClick"])]),(s(!0),f(O,null,T(t.colFilterOptions.filter(m=>m.hidden===!0),(m,C)=>(s(),f("div",{key:C,class:"flex justify-between font-semibold mt-5 dark:hover:bg-primary-900"},[u(c,{class:"ms-2"},{default:d(()=>[h(l(e.$t(m.label)),1)]),_:2},1024),n("div",{class:"cursor-pointer",onClick:D=>i.colFilters[m.key]=!i.colFilters[m.key]},[u(y,{theme:"font-semibold",name:i.colFilters[m.key]?"eyeOff":"eye-on"},null,8,["name"])],8,Dt)]))),128))])):P("",!0)])]),n("div",At,[u(F,{onClick:r[1]||(r[1]=m=>[g.changeFilter(),b.isMenuOpen=!b.isMenuOpen]),rounded:"rounded",class:"w-full"},{default:d(()=>[h(l(e.$t("core__be_btn_confirm")),1)]),_:1}),u(v,{onClick:r[2]||(r[2]=m=>[g.clearFilter(),b.isMenuOpen=!b.isMenuOpen]),class:"w-full mt-5",border:"",focus:"",hover:"",colors:"text-gray-900"},{default:d(()=>[h(l(e.$t("core__be_btn_cancel")),1)]),_:1})])])])],2)):P("",!0)]),_:3})],512)}var It=oe(kt,[["render",Lt]]);const Rt={name:"PsDataTable",components:{PsLabel:Z,PsIcon:ee,PsTextButton:te,PsTableSearch:he,PsPagination:_e,PsDropdown:pe,PsDropdownSelect:ge,PsInputWithRightIcon:ve,Link:fe,PsButton:re,Dropdown:be,debounce:vt,NewDropdown:It,InertiaLink:ue},props:{columns:{type:Array,default:[]},object:{type:Array,default:[]},colFilterOptions:{type:Object,default:[]},sort_field:{type:String,default:""},sort_order:{type:String,default:""},perPageOptions:{type:Array,default:[10,20,50,100]},row:{type:String},search:{type:String,default:""},globalSearchPlaceholder:{type:String,default:me("core__be_search")},eye_filter:{type:Boolean,default:!0},searchRightable:{type:Boolean,default:!1},searchable:{type:Boolean,default:!1},searchOptions:{type:Array,default:[]},defaultSearch:{type:Boolean,default:!0},defaultRowFilter:{type:Boolean,default:!0},defaultMt:{type:String,default:"mt-4"},sm:{type:String,default:"sm:mt-4"},lg:{type:String,default:"lg:mt-10"},actionColName:{type:String,default:"ps_table_2__action"},customizeDetails:{type:Array,default:[]}},data(e){return{moment:ke,perpage:e.object.meta.per_page,psSearch:e.search?e.search:"",psColFilterOptions:e.colFilterOptions?e.colFilterOptions:""}},methods:{handleSort(e,r){r=r=="desc"?"asc":"desc",this.$emit("handleSort",{field:e,sort_order:r})},rowPage(e){this.perpage=e,this.$emit("handleRow",e)},changeFilter(){this.$emit("FilterOptionshandle",this.psColFilterOptions)},filterSelect(e){},checkSearchStr:_.debounce(function(e,r){this.$emit("handleSearch",r)},1e3)},watch:{psSearch(e){this.checkSearchStr(this,e)}}},Nt={class:"md:flex flex-wrap justify-end hidden"},Mt={class:"flex flex-col md:justify-between mt-4 lg:mt-10 md:flex-row"},Bt={class:"flex flex-row items-end justify-end"},$t={class:"flex items-center md:me-2"},Et={class:"flex flex-row"},zt={class:"rounded-md shadow-xs w-24"},Gt={class:"z-30"},Vt=["onClick"],Wt={class:"md:flex flex-row hidden"},Ut={class:"flex justify-between"},Ht={class:"flex flex-row md:hidden my-4"},qt={class:"flex flex-wrap justify-end visible md:hidden my-4"},Jt={class:"flex flex-col md:flex-row gap-2"},Xt={class:"hidden md:flex"},Kt={class:"flex flex-row gap-2 justify-end"},Qt={class:"relative flex justify-center items-center rounded w-10 h-10 bg-primary-500"},Yt={class:"flex justify-between mt-4 md:hidden"},Zt={class:"grid grid-cols-2 sm:grid-cols-4 gap-2 mt-[22px] mb-6"},er={class:"overflow-x-auto"},tr={class:"bg-primary-500 text-white dark:text-black text-2xl justify-content"},rr={class:"bg-secondary-50 divide-y divide-secondary-200 dark:bg-secondaryDark-black dark:divide-secondary-100 border-b border-t"},or={class:"h-11 ps-4 items-center justify-center"},sr=["src"],nr={key:0,class:"flex"},lr={key:0,class:"px-1 py-0.25 me-1 rounded bg-primary-500 text-white dark:text-textDark"},ir={key:0},ar={class:"pb-2 pt-4 px-4 text-sm font-medium whitespace-nowrap dark:text-slate-500 text-slate-400 text-center border-b border-t",colspan:"20"},dr={class:"flex flex-col sm:flex-row justify-between items-center mt-5 sm:mt-6 lg:mt-8"},cr={class:"font-medium"},fr={class:"font-medium"},ur={class:"font-medium"},mr={key:0,class:"sm:mt-4 flex justify-center align-middle rtl:space-x-reverse space-x-1"},hr={class:"flex"};function _r(e,r,t,b,i,g){const c=S("ps-label"),y=S("ps-dropdown-select"),F=S("ps-dropdown"),v=S("ps-icon"),m=S("ps-input-with-right-icon"),C=S("new-dropdown"),D=S("ps-button"),I=S("Link");return s(),f(O,null,[n("div",Nt,[x(e.$slots,"button")]),n("div",Mt,[n("div",Bt,[n("div",$t,[t.defaultRowFilter==!0?(s(),w(F,{key:0,align:"right",class:"w-full"},{select:d(()=>[n("div",Et,[u(c,{class:"my-auto me-2"},{default:d(()=>[h(l(e.$t("ps_table_2__show"))+":\xA0",1)]),_:1}),u(y,{placeholder:e.$t("core__be_select_row"),selectedValue:i.perpage==""?"":t.perPageOptions.filter(o=>o==i.perpage)[0]+" rows",class:"light:font-bold w-full md:w-29 h-10"},null,8,["placeholder","selectedValue"])])]),list:d(()=>[n("div",zt,[n("div",Gt,[(s(!0),f(O,null,T(t.perPageOptions,(o,k)=>(s(),f("div",{key:k,class:"w-32 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:a=>g.rowPage(o)},[u(c,{class:W(["ms-2",i.perpage==o?" font-bold":""])},{default:d(()=>[h(l(o)+" "+l(e.$t("core__be_table_rows")),1)]),_:2},1032,["class"])],8,Vt))),128))])])]),_:1})):P("",!0)]),n("div",Wt,[x(e.$slots,"searchLeft")])]),n("div",Ut,[n("div",Ht,[x(e.$slots,"searchLeft")]),n("div",qt,[x(e.$slots,"responsive_button")])]),n("div",Jt,[n("div",Xt,[x(e.$slots,"searchRight")]),n("div",Kt,[t.defaultSearch==!0?(s(),w(m,{key:0,class:"w-full rounded-lg h-10",value:i.psSearch,"onUpdate:value":r[0]||(r[0]=o=>i.psSearch=o),placeholder:e.$t("core__be_search")},{icon:d(()=>[u(v,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])):P("",!0),t.eye_filter==!0?(s(),w(C,{key:1,align:"left",colFilterOptions:i.psColFilterOptions,"onUpdate:colFilterOptions":r[1]||(r[1]=o=>i.psColFilterOptions=o),onChangeFilter:g.changeFilter},{select:d(()=>[n("div",Qt,[u(v,{name:"eye-on",class:"cursor-pointer text-white dark:text-secondaryDark-black"})])]),_:1},8,["colFilterOptions","onChangeFilter"])):P("",!0)]),n("div",Yt,[x(e.$slots,"searchRight")])])]),$(n("div",Zt,[x(e.$slots,"Filter")],512),[[E,t.searchable]]),n("div",er,[n("table",{class:W(["table-auto w-full",t.defaultMt,t.sm,t.lg])},[n("thead",tr,[n("tr",null,[(s(!0),f(O,null,T(t.columns.filter(o=>o.field=="action"),o=>(s(),f("th",{key:o.field},[u(c,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-6"},{default:d(()=>[h(l(e.$t(t.actionColName)),1)]),_:1})]))),128)),n("th",null,[u(c,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3"},{default:d(()=>[h(l(e.$t("ps_table_2__no")),1)]),_:1})]),(s(!0),f(O,null,T(t.columns.filter(o=>o.field!="action"),o=>$((s(),f("th",{key:o.field,class:"truncate"},[u(c,{textColor:"flex text-secondary-50 dark:text-secondary-900 font-semibold my-2 ms-3 items-center  "},{default:d(()=>[h(l(e.$t(o.label))+" ",1),x(e.$slots,"sorting",{field:o.field,row:t.row},()=>[n("div",null,[o.sort!=!1?(s(),w(v,{key:0,onClick:k=>g.handleSort(o.field,t.sort_order),name:t.sort_field==o.field?t.sort_order=="desc"?"downChervon":"upChervon":"downChervon",class:"ms-2 cursor-pointer",w:"16",h:"16"},null,8,["onClick","name"])):P("",!0)])])]),_:2},1024)])),[[E,i.psColFilterOptions.filter(k=>k.key==o.field).length==0?!0:!i.psColFilterOptions.filter(k=>k.key==o.field)[0].hidden]])),128))])]),n("tbody",rr,[(s(!0),f(O,null,T(t.object.data,(o,k)=>(s(),f("tr",{class:"hover:bg-secondary-100 dark:hover:bg-gray-700",key:k},[(s(!0),f(O,null,T(t.columns.filter(a=>a.field=="action"),(a,A)=>$((s(),f("td",{key:A,class:"h-11 ps-4 items-center justify-center"},[x(e.$slots,"tableActionRow",{field:a.field,row:o},()=>[u(c,{class:"font-normal"},{default:d(()=>[h(l(e.$t(o[a.field])),1)]),_:2},1024)])])),[[E,i.psColFilterOptions.filter(j=>j.key==a.field).length==0?!0:!i.psColFilterOptions.filter(j=>j.key==a.field)[0].hidden]])),128)),n("td",or,[u(c,null,{default:d(()=>[h(l(t.object.meta.current_page*t.object.meta.per_page-t.object.meta.per_page+k+1),1)]),_:2},1024)]),(s(!0),f(O,null,T(t.columns.filter(a=>a.field!="action"),(a,A)=>$((s(),f("td",{key:A,class:"h-11 ps-4 max-w-xs truncate items-center justify-center"},[x(e.$slots,"tableRow",{field:a.field,type:a.type,row:o},()=>["relation"in a?(s(),w(c,{key:0},{default:d(()=>[h(l(o[a.relation]?o[a.relation][a.relationField]:""),1)]),_:2},1024)):a.type=="Timestamp"?(s(),w(c,{key:1},{default:d(()=>[h(l(o[a.field]?i.moment(o[a.field]).format(e.$page.props.dateFormat):""),1)]),_:2},1024)):a.type=="Image"?(s(),w(c,{key:2},{default:d(()=>[n("img",{class:"w-28 h-16 rounded",width:"50",height:"50",src:e.$page.props.uploadUrl+"/"+o[a.field],alt:"Image"},null,8,sr)]),_:2},1024)):a.type=="MultiSelect"?(s(),w(c,{key:3},{default:d(()=>[o[a.field]?(s(),f("div",nr,[(s(!0),f(O,null,T(o[a.field].split(","),(j,z)=>(s(),f("div",{key:z},[(s(!0),f(O,null,T(t.customizeDetails[a.field],R=>(s(),f("div",{key:R.id},[j==R.id?(s(),f("p",lr,l(R.name),1)):P("",!0)]))),128))]))),128))])):P("",!0)]),_:2},1024)):(s(),w(c,{key:4,class:"font-normal text-ellipsis overflow-hidden"},{default:d(()=>[h(l(o[a.field]),1)]),_:2},1024))])])),[[E,i.psColFilterOptions.filter(j=>j.key==a.field).length==0?!0:!i.psColFilterOptions.filter(j=>j.key==a.field)[0].hidden]])),128))]))),128)),t.object.data.length==0?(s(),f("tr",ir,[n("td",ar,[x(e.$slots,"emptyRow",{},()=>[h(l(e.$t("core__be_table_no_data")),1)])])])):P("",!0)])],2)]),n("div",dr,[u(c,{class:"text-secondary-600 text-base font-normal"},{default:d(()=>[h(l(e.$t("core__be_table_showing"))+" "+l(" ")+" ",1),n("span",cr,l(t.object.meta.total>0?(t.object.meta.current_page-1)*t.object.meta.per_page+1:0),1),h(" "+l(" ")+" "+l(e.$t("core__be_table_to"))+" "+l(" ")+" ",1),n("span",fr,l(t.object.meta.current_page*t.object.meta.per_page>t.object.meta.total?t.object.meta.total:t.object.meta.current_page*t.object.meta.per_page),1),h(" "+l(" ")+" "+l(e.$t("core__be_table_of"))+" "+l(" ")+" ",1),n("span",ur,l(t.object.meta.total),1),h(" "+l(" ")+" "+l(e.$t("core__be_table_entries")),1)]),_:1}),t.object.meta.total>t.object.meta.per_page?(s(),f("div",mr,[(s(!0),f(O,null,T(t.object.meta.links,(o,k)=>(s(),w(I,{key:k,href:o.url?o.url:"",class:"h-8 rounded bg-white dark:bg-secondaryDark-black"},{default:d(()=>[n("div",hr,[k==0?(s(),w(D,{key:0,hover:"",focus:"",colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",border:"border border-secodnary-200 dark:border-secodnary-100 "},{default:d(()=>[u(v,{class:"block rtl:hidden",name:"doubleArrowLeft",w:"16",h:"16"}),u(v,{class:"hidden rtl:block",name:"doubleArrowRight",w:"16",h:"16"})]),_:1})):k==Object.keys(t.object.meta.links).length-1?(s(),w(D,{key:1,colors:"bg-background dark:bg-backgroundDark hover:bg-secondary-100",class:"mt-0.5",padding:"py-2 px-2",hover:"",focus:"",border:"border border-secodnary-200  dark:border-secodnary-100"},{default:d(()=>[u(v,{class:"block rtl:hidden",name:"doubleArrowRight",w:"16",h:"16"}),u(v,{class:"hidden rtl:block",name:"doubleArrowLeft",w:"16",h:"16"})]),_:1})):(s(),w(D,{key:2,rounded:"rounded",border:o.active?"border border-primary-500 rounded":"border border-secondary-200  dark:border-secodnary-100 rounded",colors:o.active?"bg-primary-500 dark:bg-primary-500 text-white dark:text-textDark":"bg-background dark:bg-backgroundDark hover:bg-secondary-100 dark:hover-bg-primary-600",hover:"",padding:"py-2 px-4"},{default:d(()=>[h(l(o.label),1)]),_:2},1032,["border","colors"]))])]),_:2},1032,["href"]))),128))])):P("",!0)])],64)}var Sr=oe(Rt,[["render",_r]]);export{It as N,Sr as P,vt as d};