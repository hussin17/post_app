import{d as I,H as N,J as s,i as l,O as $,r as i,o as g,c as H,b as r,w as a,f as p,p as h,t as b,g as m,F as B,aJ as D,a as A}from"./app.94623934.js";import{e as L,d as T}from"./PsLayout.38886a49.js";import{P as z}from"./PsLabel.dab9a58c.js";import{P as R}from"./PsButton.de8e2c9c.js";import{N as E}from"./NewPsDataTable.5347402c.js";import{P as V}from"./PsAlert.ad63b55f.js";import{P as G}from"./PsBreadcrumb2.ab3eeba4.js";import{b as M}from"./PsModal.c6e9c2b2.js";import{P as U}from"./PsIcon.ff30b54a.js";import{P as J}from"./PsBannerIcon.bf2e6de8.js";import{P as q}from"./PsIconButton.f3fd3f6e.js";import{P as Y}from"./PsCsvModal.57642c99.js";import{P as x}from"./PsTable2.a4eb98d2.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsTableSearch.1d3198df.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLabelHeader4.692248a2.js";import"./PsLink1.b8f89f35.js";import"./PsDraggable.81c5f8ff.js";const Q=I({name:"Index",components:{Head:N,PsLabel:z,PsButton:R,NewPsDataTable:E,PsAlert:V,PsBreadcrumb2:G,PsDangerDialog:L,PsToggle:M,PsIcon:U,PsBannerIcon:J,PsIconButton:q,PsCsvModal:Y,PsTable2:x},layout:T,props:{status:Object,language:Object,fe_language_strings:Object,checkPermission:Object,showLanguageCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const u=["key","value"],O=s("lang_search"),v=l(),w=l(),j=l(),y=l();let _=e.search?l(e.search):l(""),f=e.sort_field?l(e.sort_field):l(""),d=e.sort_order?l(e.sort_order):l("desc"),o=l(!1);function k(t){v.value.openModal(s("core__be_delete_felanguagestring"),s("core__be_delete_felanguagestring_info"),s("core__be_btn_confirm"),s("btn_cancel"),()=>{this.$inertia.delete(route("fe_language_string.destroy",[e.language,t]),{onSuccess:()=>{o.value=!0,setTimeout(()=>{o.value=!1},3e3)},onError:()=>{o.value=!0,setTimeout(()=>{o.value=!1},3e3)}})},()=>{})}function C(){w.value.openModal(t=>{let c=D({csvFile:t,_method:"put"});$.Inertia.post(route("fe_language_string.import.csv",e.language),c,{onSuccess:()=>{window.location.reload()}})})}function S(t){f.value=t.field,d.value=t.sort_order,n()}function F(t){_.value=t,n(1)}function P(t){n(1,t)}function n(t=null,c=null){$.Inertia.get(route("fe_language_string.index",e.language.id),{sort_field:f.value,sort_order:d.value,page:t!=null?t:e.fe_language_strings.meta.current_page,row:c!=null?c:e.fe_language_strings.meta.per_page,search:_.value},{preserveScroll:!0,preserveState:!0})}return{globalSearchFields:u,globalSearchPlaceholder:O,csvUploadClicked:C,ps_csv_modal:w,columns:y,ps_danger_dialog:v,confirmDeleteClicked:k,colFilterOptions:j,handleSorting:S,handleSearching:F,handleRow:P,visible:o}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("fe_language_module"),url:route("fe_language.index")},{label:s("fe_language_string_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("fe_language_string.create",this.language.id))},handleEdit(e){this.$inertia.get(route("fe_language_string.edit",[this.language,e]))},FilterOptionshandle(e){$.Inertia.post(route("fe_language_string.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.fe_language_strings.per_page,search:this.search.value,current_page:this.fe_language_strings.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:s(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:s(e.key),key_id:e.key_id,label:s(e.label),module_name:e.module_name}))}}),W=A("div",{class:"hidden sm:flex justify-end"},[A("div",{class:"flex"})],-1),X={key:0,class:"flex flex-row"};function Z(e,u,O,v,w,j){const y=i("Head"),_=i("ps-breadcrumb-2"),f=i("ps-banner-icon"),d=i("ps-icon"),o=i("ps-button"),k=i("ps-label"),C=i("ps-csv-modal"),S=i("ps-danger-dialog"),F=i("ps-table2"),P=i("ps-layout");return g(),H(B,null,[r(y,{title:e.$t("fe_language_module")},null,8,["title"]),r(P,null,{default:a(()=>[r(_,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(g(),p(f,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:a(()=>[h(b(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):m("",!0),W,r(F,{row:e.row,search:e.search,object:e.fe_language_strings,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:a(()=>[e.can.createFeLanguageString?(g(),p(o,{key:0,onClick:u[0]||(u[0]=n=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(d,{name:"plus",class:"me-1 font-semibold"}),h(" "+b(e.$t("create_fe_language_string")),1)]),_:1})):m("",!0)]),responsive_button:a(()=>[e.can.createFeLanguageString?(g(),p(o,{key:0,onClick:u[1]||(u[1]=n=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:a(()=>[r(d,{name:"plus",class:"me-1 font-semibold"}),h(" "+b(e.$t("create_fe_language_string")),1)]),_:1})):m("",!0)]),searchLeft:a(()=>[e.can.createFeLanguageString?(g(),p(o,{key:0,rounded:"rounded",onClick:e.csvUploadClicked,class:"ms-3 flex flex-wrap items-center"},{default:a(()=>[r(d,{name:"plus",class:"me-2 font-semibold"}),r(k,{textColor:"text-white dark:text-secondary-800"},{default:a(()=>[h(b(e.$t("core__be_import_data")),1)]),_:1})]),_:1},8,["onClick"])):m("",!0),r(C,{ref:"ps_csv_modal",url:"https://drive.google.com/file/d/1zqO4n2zlroGITAblYyGGCdNfoepxiz62/view?usp=sharing"},null,512)]),tableActionRow:a(n=>[n.field=="action"?(g(),H("div",X,[r(o,{disabled:!n.row.authorizations.update,onClick:t=>e.handleEdit(n.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[r(d,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(o,{disabled:!n.row.authorizations.delete,onClick:t=>e.confirmDeleteClicked(n.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[r(d,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(S,{ref:"ps_danger_dialog"},null,512)])):m("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var Oe=K(Q,[["render",Z]]);export{Oe as default};
