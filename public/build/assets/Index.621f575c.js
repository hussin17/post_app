import{e as V,P as B,a as I,d as R}from"./PsLayout.38886a49.js";import{d as z,H as E,i as s,J as a,O as N,r as l,o as u,c as k,b as r,w as n,a as C,f as S,p as h,t as f,g,F as T,q as L,n as q}from"./app.94623934.js";import{P as G}from"./PsInput.fc15fc8e.js";import{P as J}from"./PsLabel.dab9a58c.js";import{P as U}from"./PsButton.de8e2c9c.js";import{P as K}from"./PsTextarea.23de1910.js";import{P as Q}from"./PsLabelHeader4.692248a2.js";import{P as W}from"./PsIcon.ff30b54a.js";import{P as X}from"./PsAlert.ad63b55f.js";import{N as Y}from"./NewPsDataTable.5347402c.js";import{b as Z}from"./PsModal.c6e9c2b2.js";import{P as x}from"./PsBreadcrumb2.ab3eeba4.js";import{P as ee}from"./PsTable2.a4eb98d2.js";import{P as oe}from"./PsBannerIcon.bf2e6de8.js";import{_ as te}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./Icons.e6c27a10.js";import"./PsTableSearch.1d3198df.js";import"./moment.9709ab41.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsIcon1.01459ed6.js";const re=z({name:"Index",components:{Head:E,PsInput:G,PsLabel:J,PsButton:U,PsTextarea:K,PsLabelHeader4:Q,PsIcon:W,PsAlert:X,NewPsDataTable:Y,PsDangerDialog:V,PsToggle:Z,PsBreadcrumb2:x,PsTable2:ee,PsBannerIcon:oe,PsDropdown:B,PsDropdownSelect:I},layout:R,props:{status:Object,modules:Object,sub_menu_groups:Object,checkPermission:Object,showSubMenuGroupCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,selectedSubMenu:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const i=["module_name","module_desc"],M="Search Module",P=s(),D=s(),A=s();let v=e.search?s(e.search):s(""),w=e.sort_field?s(e.sort_field):s(""),y=e.sort_order?s(e.sort_order):s("desc"),c=s(!1),p=e.selectedSubMenu?s(e.selectedSubMenu):s("");function $(t){P.value.openModal(a("core_delete_module"),a("core_delete_module_info"),a("core__be_btn_confirm"),a("core__be_btn_cancel"),()=>{this.$inertia.delete(route("menu.destroy",t),{onSuccess:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)},onError:()=>{c.value=!0,setTimeout(()=>{c.value=!1},3e3)}})},()=>{})}function _(t){this.$inertia.get(route("menu.edit",t))}function b(){this.$inertia.get(route("menu.create"))}function F(t,m){m&&this.$inertia.put(route("menu.statusChange",t))}function O(t){w.value=t.field,y.value=t.sort_order,d()}function j(t){v.value=t,d(1)}function H(t){d(1,t)}function o(t){p.value=t,d(1)}function d(t=null,m=null){N.Inertia.get(route("menu.index"),{sort_field:w.value,sort_order:y.value,page:t!=null?t:e.modules.meta.current_page,row:m!=null?m:e.modules.meta.per_page,search:v.value,sub_menu_filter:p.value},{preserveScroll:!0,preserveState:!0})}return{handleEdit:_,handleCreate:b,globalSearchFields:i,globalSearchPlaceholder:M,ps_danger_dialog:P,columns:A,confirmDeleteClicked:$,route,colFilterOptions:D,handlePublish:F,handleSorting:O,handleSearching:j,handleRow:H,visible:c,selected_menu:p,handleMenuFilter:o}},computed:{breadcrumb(){return[{label:a("core__be_dashboard_label"),url:route("admin.index")},{label:a("menu_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){N.Inertia.post(route("menu.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.modules.per_page,search:this.search.value,current_page:this.modules.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:a(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:a(e.key),key_id:e.key_id,label:a(e.label),module_name:e.module_name}))}}),ne={class:""},se={class:"rounded-md shadow-xs w-56"},le={class:"pt-2 z-30"},ae=["onClick"],ie={key:0,class:"flex flex-row mb-2"};function de(e,i,M,P,D,A){const v=l("Head"),w=l("ps-breadcrumb-2"),y=l("ps-banner-icon"),c=l("ps-dropdown-select"),p=l("ps-label"),$=l("ps-dropdown"),_=l("ps-icon"),b=l("ps-button"),F=l("ps-danger-dialog"),O=l("ps-toggle"),j=l("ps-table2"),H=l("ps-layout");return u(),k(T,null,[r(v,{title:e.$t("menu_module")},null,8,["title"]),r(H,null,{default:n(()=>[C("div",ne,[r(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(u(),S(y,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:n(()=>[h(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):g("",!0),r(j,{row:e.row,search:e.search,object:e.modules,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{searchRight:n(()=>[r($,{onOnClick:e.dropdownClick,align:"",class:"me-2 w-56 h-10"},{select:n(()=>[r(c,{placeholder:e.$t("core__be_select_sub_menu"),border:e.selected_menu!==""&&e.selected_menu!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_menu==""||e.selected_menu=="all"?"":e.sub_menu_groups.filter(o=>o.id==e.selected_menu)[0].sub_menu_name},null,8,["placeholder","border","selectedValue"])]),list:n(()=>[C("div",se,[C("div",le,[C("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[0]||(i[0]=o=>e.handleMenuFilter("all"))},[r(p,{class:"text-gray-200 ms-2"},{default:n(()=>[h(f(e.$t("core__be_select_all")),1)]),_:1})]),(u(!0),k(T,null,L(e.sub_menu_groups,o=>(u(),k("div",{key:o.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d=>e.handleMenuFilter(o.id)},[r(p,{class:q(["ms-2",o.id==e.selected_menu?" font-bold":""])},{default:n(()=>[h(f(o.sub_menu_name),1)]),_:2},1032,["class"])],8,ae))),128))])])]),_:1},8,["onOnClick"])]),button:n(()=>[e.can.createCoreModule?(u(),S(b,{key:0,onClick:i[1]||(i[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(_,{name:"plus",class:"me-1 font-semibold"}),h(" "+f(e.$t("core_add_menu")),1)]),_:1})):g("",!0)]),responsive_button:n(()=>[e.can.createCoreModule?(u(),S(b,{key:0,onClick:i[2]||(i[2]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(_,{name:"plus",class:"me-1 font-semibold"}),h(" "+f(e.$t("core_add_menu")),1)]),_:1})):g("",!0)]),tableActionRow:n(o=>[o.field=="action"?(u(),k("div",ie,[r(b,{disabled:!o.row.authorizations.update,onClick:d=>e.handleEdit(o.row.id),class:"me-4",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:n(()=>[r(_,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(b,{disabled:!o.row.authorizations.delete,onClick:d=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:n(()=>[r(_,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(F,{ref:"ps_danger_dialog"},null,512)])):g("",!0)]),tableRow:n(o=>[o.field=="is_show_on_menu"?(u(),S(O,{key:0,disabled:!o.row.authorizations.update,selectedValue:o.row.is_show_on_menu==1,onClick:d=>e.handlePublish(o.row.id,o.row.authorizations.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):g("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])])]),_:1})],64)}var Ve=te(re,[["render",de]]);export{Ve as default};
