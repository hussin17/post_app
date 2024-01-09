import{d as T,L as D,H,i as n,J as s,O,r as i,o as d,c as P,b as a,w as l,f,p as $,t as F,g as h,F as A}from"./app.89c3e968.js";import{e as j,d as B}from"./PsLayout.c538b065.js";import{P as I}from"./PsLabel.b6468e3b.js";import{P as V}from"./PsButton.93f0884f.js";import{P as z}from"./PsTable2.2a62f965.js";import{P as E}from"./PsAlert.d6a6c85b.js";import{P as R}from"./PsBreadcrumb2.66f51afc.js";import{b as N}from"./PsModal.cae41119.js";import{P as L}from"./PsIcon.edc6e12c.js";import{P as J}from"./PsBannerIcon.21fdbf15.js";import{D as M}from"./PsTableSearch.ecb14277.js";import{P as U}from"./PsIconButton.7873437b.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsTextButton.5d03d3b2.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.e4096f1e.js";import"./moment.9709ab41.js";import"./PsIcon1.ff878692.js";import"./Icons.e6c27a10.js";import"./toggle.9dc4c49c.js";import"./vue-neat-modal.bfa3eb2d.js";const G=T({name:"Index",components:{Link:D,Head:H,PsLabel:I,PsButton:V,PsTable2:z,PsAlert:E,PsBreadcrumb2:R,PsDangerDialog:j,PsToggle:N,PsIcon:L,PsBannerIcon:J,Dropdown:M,PsIconButton:U},layout:B,props:{can:Object,status:Object,currencies:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let r=n(!1),b=e.search?n(e.search):n(""),g=e.sort_field?n(e.sort_field):n(""),_=e.sort_order?n(e.sort_order):n("desc");const v=n(),y=n(),w=n();function k(t){v.value.openModal(s("core__delete"),s("core__comfirm_to_delete_row_currency"),s("core__be_btn_confirm"),s("core__be_btn_cancel"),()=>{this.$inertia.delete(route("currency.destroy",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}})},()=>{})}function u(t,o){o&&this.$inertia.put(route("currency.statusChange",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}})}function c(t,o){o&&this.$inertia.put(route("currency.defaultChange",t),{onSuccess:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)},onError:()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)}})}function C(t){g.value=t.field,_.value=t.sort_order,m()}function p(t){b.value=t,m(1)}function S(t){m(1,t)}function m(t=null,o=null){O.Inertia.get(route("currency.index"),{sort_field:g.value,sort_order:_.value,page:t!=null?t:e.currencies.meta.current_page,row:o!=null?o:e.currencies.meta.per_page,search:b.value},{preserveScroll:!0,preserveState:!0})}return{handleRow:S,handleSearchingSorting:m,handleSearching:p,handleSorting:C,handlePublish:u,handleDefault:c,visible:r,columns:w,ps_danger_dialog:v,confirmDeleteClicked:k,colFilterOptions:y}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("currency_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("currency.create"))},handleEdit(e){this.$inertia.get(route("currency.edit",e))},FilterOptionshandle(e){O.Inertia.put(route("currency.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.currencies.per_page,search:this.search.value,current_page:this.currencies.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:s(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:s(e.key),key_id:e.key_id,label:s(e.label),module_name:e.module_name}))}}),K={key:0,class:"flex flex-row"};function Q(e,r,b,g,_,v){const y=i("Head"),w=i("ps-breadcrumb-2"),k=i("ps-banner-icon"),u=i("ps-icon"),c=i("ps-button"),C=i("ps-danger-dialog"),p=i("ps-toggle"),S=i("ps-table2"),m=i("ps-layout");return d(),P(A,null,[a(y,{title:e.$t("currency_module")},null,8,["title"]),a(m,null,{default:l(()=>[a(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),f(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:l(()=>[$(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),a(S,{row:e.row,search:e.search,object:this.currencies,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,globalSearchPlaceholder:e.$t("core__be_searches"),searchable:e.showFilter},{button:l(()=>[e.can.createCurrency?(d(),f(c,{key:0,onClick:r[0]||(r[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[a(u,{name:"plus",class:"me-2 font-semibold"}),$(F(e.$t("core__add_currency")),1)]),_:1})):h("",!0)]),responsive_button:l(()=>[e.can.createCurrency?(d(),f(c,{key:0,onClick:r[1]||(r[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:l(()=>[a(u,{name:"plus",class:"me-2 font-semibold"}),$(F(e.$t("core__add_currency")),1)]),_:1})):h("",!0)]),tableActionRow:l(t=>[t.field=="action"?(d(),P("div",K,[a(c,{disabled:!t.row.authorization.update,onClick:o=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:l(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(c,{disabled:!t.row.authorization.delete,onClick:o=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:l(()=>[a(u,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),a(C,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:l(t=>[t.field=="status"?(d(),f(p,{key:0,disabled:!t.row.authorization.update,selectedValue:t.row.status==1,onClick:o=>e.handlePublish(t.row.id,t.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0),t.field=="is_default"?(d(),f(p,{key:1,disabled:!t.row.authorization.update,selectedValue:t.row.is_default==1,onClick:o=>e.handleDefault(t.row.id,t.row.authorization.update),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","globalSearchPlaceholder","searchable"])]),_:1})],64)}var _e=q(G,[["render",Q]]);export{_e as default};