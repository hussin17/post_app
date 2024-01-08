import{d as O,L as H,H as I,i as r,J as p,O as $,r as s,o as i,c as v,b as n,w as o,f as _,p as w,t as S,g as u,F as j}from"./app.94623934.js";import{e as A,d as B}from"./PsLayout.38886a49.js";import{P as R}from"./PsLabel.dab9a58c.js";import{P as N}from"./PsButton.de8e2c9c.js";import{P as V}from"./PsTable2.a4eb98d2.js";import{P as D}from"./PsAlert.ad63b55f.js";import{P as L}from"./PsBreadcrumb2.ab3eeba4.js";import{b as z}from"./PsModal.c6e9c2b2.js";import{P as E}from"./PsIcon.ff30b54a.js";import{P as T}from"./PsBannerIcon.bf2e6de8.js";import{P as U}from"./PsIconButton.f3fd3f6e.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsTableSearch.1d3198df.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";const q=O({name:"Index",components:{Link:H,Head:I,PsLabel:R,PsButton:N,PsTable2:V,PsAlert:D,PsBreadcrumb2:L,PsDangerDialog:A,PsToggle:z,PsIcon:E,PsBannerIcon:T,PsIconButton:U},layout:B,props:{can:Object,status:Object,payments:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let a=r(!1);const k=r(),C=r(),F=r(!1),P=r(!1);let h=e.search?r(e.search):r(""),b=e.sort_field?r(e.sort_field):r(""),f=e.sort_order?r(e.sort_order):r("desc");function c(t){b.value=t.field,f.value=t.sort_order,l()}function m(){selected_cat.value="all",selected_sub_cat.value="all",selected_city.value="all",selected_township.value="all",l()}function g(t){h.value=t,l(1)}function y(t){l(1,t)}function l(t=null,d=null){$.Inertia.get(route("payment.index"),{sort_field:b.value,sort_order:f.value,page:t!=null?t:e.payments.meta.current_page,row:d!=null?d:e.payments.meta.per_page,search:h.value},{preserveScroll:!0,preserveState:!0})}return{visible:a,columns:C,colFilterOptions:k,showFilter:F,clearFilter:P,visible:a,handleSorting:c,handleSearchingSorting:l,handleClearFilter:m,handleRow:y,handleSearching:g}},computed:{breadcrumb(){return[{label:p("core__be_dashboard_label"),url:route("admin.index")},{label:p("payment_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("payment.create"))},handleEdit(e){this.$inertia.get(route("payment.edit",e))},handlePublish(e,a){a&&this.$inertia.put(route("payment.statusChange",e))},FilterOptionshandle(e){$.Inertia.put(route("payment.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.payments.per_page,search:this.search.value,current_page:this.payments.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:p(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:p(e.key),key_id:e.key_id,label:p(e.label),module_name:e.module_name}))}}),G={key:0,class:"flex flex-row"},K={key:0};function M(e,a,k,C,F,P){const h=s("Head"),b=s("ps-breadcrumb-2"),f=s("ps-banner-icon"),c=s("ps-icon"),m=s("ps-button"),g=s("ps-toggle"),y=s("ps-table2"),l=s("ps-layout");return i(),v(j,null,[n(h,{title:e.$t("payment_module")},null,8,["title"]),n(l,null,{default:o(()=>[n(b,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(i(),_(f,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[w(S(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):u("",!0),n(y,{row:e.row,search:e.search,object:this.payments,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,globalSearchPlaceholder:e.$t("core__be_search_payment"),onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:o(()=>[e.can.createItem?(i(),_(m,{key:0,onClick:a[0]||(a[0]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[n(c,{name:"plus",class:"me-1 font-semibold"}),w(" "+S(e.$t("core__be_add_payment")),1)]),_:1})):u("",!0)]),responsive_button:o(()=>[e.can.createItem?(i(),_(m,{key:0,onClick:a[1]||(a[1]=t=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:o(()=>[n(c,{name:"plus",class:"me-1 font-semibold"}),w(" "+S(e.$t("core__be_add_payment")),1)]),_:1})):u("",!0)]),tableActionRow:o(t=>[t.field=="action"?(i(),v("div",G,[n(m,{disabled:!t.row.authorizations.update,onClick:d=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[n(c,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])):u("",!0)]),tableRow:o(t=>[t.field=="status"?(i(),v("div",K,[t.field=="status"?(i(),_(g,{key:0,disabled:!t.row.authorizations.update,selectedValue:t.row.status==1,onClick:d=>e.handlePublish(t.row.id,t.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])):u("",!0)])):u("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","globalSearchPlaceholder","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var _e=J(q,[["render",M]]);export{_e as default};
