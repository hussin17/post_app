import{d as A,L as B,H as D,aJ as T,i as a,J as i,O as R,r as n,o as d,c as H,b as o,w as r,f,p as h,t as _,g as p,F as I}from"./app.94623934.js";import{e as j,d as z}from"./PsLayout.38886a49.js";import{P as U}from"./PsLabel.dab9a58c.js";import{P as L}from"./PsButton.de8e2c9c.js";import{P as M}from"./PsTable2.a4eb98d2.js";import{P as N}from"./PsAlert.ad63b55f.js";import{P as V}from"./PsBreadcrumb2.ab3eeba4.js";import{b as E}from"./PsModal.c6e9c2b2.js";import{P as J}from"./PsIcon.ff30b54a.js";import{P as q}from"./PsCsvModal.57642c99.js";import{P as Q}from"./PsBannerIcon.bf2e6de8.js";import{D as W}from"./PsTableSearch.1d3198df.js";import{P as X}from"./PsIconButton.f3fd3f6e.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLabelHeader4.692248a2.js";import"./PsLink1.b8f89f35.js";import"./PsDraggable.81c5f8ff.js";const G=A({name:"Index",components:{Link:B,Head:D,PsLabel:U,PsButton:L,PsTable2:M,PsAlert:N,PsBreadcrumb2:V,PsDangerDialog:j,PsToggle:E,PsIcon:J,PsCsvModal:q,PsBannerIcon:Q,Dropdown:W,PsIconButton:X},layout:z,props:{can:Object,status:Object,categories:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},data(){return{form:T({csvFile:""})}},setup(e){let c=e.search?a(e.search):a(""),b=e.sort_field?a(e.sort_field):a(""),v=e.sort_order?a(e.sort_order):a("desc");const y=a(),k=a();let u=a(!1);const C=a(),w=a(),l=a(!0);function S(t){y.value.openModal(i("core__delete"),i("delete_category_msg"),i("core__be_btn_confirm"),i("core__be_btn_cancel"),()=>{this.$inertia.delete(route("category.destroy",t),{onSuccess:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)},onError:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)}})},()=>{})}function m(){k.value.openModal(t=>{let s=T({csvFile:t,_method:"put"});R.Inertia.post(route("category.import.csv"),s)})}function F(t){b.value=t.field,v.value=t.sort_order,g()}function $(t){c.value=t,g(1)}function P(t){g(1,t)}function g(t=null,s=null){R.Inertia.get(route("category.index"),{sort_field:b.value,sort_order:v.value,page:t!=null?t:e.categories.meta.current_page,row:s!=null?s:e.categories.meta.per_page,search:c.value},{preserveScroll:!0,preserveState:!0})}function O(t,s){s&&(this.$inertia.put(route("category.statusChange",t)),setTimeout(()=>{l.value=!1,setTimeout(()=>{l.value=!0},200)},2e3))}return{handleRow:P,handleSearchingSorting:g,handleSearching:$,handleSorting:F,visible:u,ps_csv_modal:k,columns:w,ps_danger_dialog:y,confirmDeleteClicked:S,colFilterOptions:C,csvUploadClicked:m,reRenderToogle:l,handlePublish:O}},computed:{breadcrumb(){return[{label:i("core__be_dashboard_label"),url:route("admin.index")},{label:i("category_module"),color:"text-primary-500"}]}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:i(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:i(e.key),key_id:e.key_id,label:i(e.label),module_name:e.module_name}))},methods:{handleCreate(){this.$inertia.get(route("category.create"))},handleEdit(e){this.$inertia.get(route("category.edit",e))},FilterOptionshandle(e){R.Inertia.put(route("category.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.categories.per_page,search:this.search.value,current_page:this.categories.current_page},{preserveScroll:!0,preserveState:!0})}}}),K={key:0,class:"flex flex-row"},Z={key:0};function x(e,c,b,v,y,k){const u=n("Head"),C=n("ps-breadcrumb-2"),w=n("ps-banner-icon"),l=n("ps-icon"),S=n("ps-label"),m=n("ps-button"),F=n("ps-csv-modal"),$=n("ps-danger-dialog"),P=n("ps-toggle"),g=n("ps-table2"),O=n("ps-layout");return d(),H(I,null,[o(u,{title:e.$t("category_module")},null,8,["title"]),o(O,null,{default:r(()=>[o(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),f(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:r(()=>[h(_(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):p("",!0),h(_(e.sort_field),1),o(g,{row:e.row,search:e.search,object:this.categories,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,globalSearchPlaceholder:e.$t("core__be_search_category")},{searchLeft:r(()=>[e.can.createCategory?(d(),f(m,{key:0,onClick:e.csvUploadClicked,rounded:"rounded",class:"flex flex-wrap items-center ms-3"},{default:r(()=>[o(l,{name:"plus",class:"me-2 font-semibold"}),o(S,{textColor:"text-white dark:text-secondary-800"},{default:r(()=>[h(_(e.$t("core__be_import_file")),1)]),_:1})]),_:1},8,["onClick"])):p("",!0),o(F,{ref:"ps_csv_modal",url:"https://drive.google.com/file/d/1XRhURzcCkMb1UzUQMkFCBvTcOOrYFWRq/view?usp=sharing"},null,512)]),button:r(()=>[e.can.createCategory?(d(),f(m,{key:0,onClick:c[0]||(c[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[o(l,{name:"plus",class:"me-2 font-semibold"}),h(_(e.$t("core__add_category")),1)]),_:1})):p("",!0)]),responsive_button:r(()=>[e.can.createCategory?(d(),f(m,{key:0,onClick:c[1]||(c[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:r(()=>[o(l,{name:"plus",class:"me-2 font-semibold"}),h(_(e.$t("core__add_category")),1)]),_:1})):p("",!0)]),tableActionRow:r(t=>[t.field=="action"?(d(),H("div",K,[o(m,{disabled:!t.row.authorization.update,onClick:s=>e.handleEdit(t.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:r(()=>[o(l,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),o(m,{disabled:!t.row.authorization.delete,onClick:s=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:r(()=>[o(l,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),o($,{ref:"ps_danger_dialog"},null,512)])):p("",!0)]),tableRow:r(t=>[t.field=="status"&&e.reRenderToogle?(d(),H("div",Z,[t.field=="status"?(d(),f(P,{key:0,disabled:!t.row.authorization.update,selectedValue:t.row.status==1,onClick:s=>e.handlePublish(t.row.id,t.row.authorization.update)},null,8,["disabled","selectedValue","onClick"])):p("",!0)])):p("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","globalSearchPlaceholder"])]),_:1})],64)}var Pe=Y(G,[["render",x]]);export{Pe as default};
