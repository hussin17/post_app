import{d as O,L as F,H,i as a,J as s,r as n,o as y,c as v,b as l,w as c,a as S,p as k,t as w,n as $,g as D,F as C,O as B}from"./app.94623934.js";import{d as R}from"./PsLayout.38886a49.js";import{P as I}from"./PsLabel.dab9a58c.js";import{P as j}from"./PsButton.de8e2c9c.js";import{P as L}from"./PsTable2.a4eb98d2.js";import{P as N}from"./PsAlert.ad63b55f.js";import{P as T}from"./PsBreadcrumb2.ab3eeba4.js";import{P as V}from"./PsIcon.ff30b54a.js";import{P as A}from"./PsRating.3696cd97.js";import{P as U}from"./PsTextButton.b34be5b9.js";import{P as x}from"./PsIconButton.f3fd3f6e.js";import{D as z}from"./DatePicker.d73c3324.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./PsTableSearch.1d3198df.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";import"./Icons.e6c27a10.js";const J=O({name:"Index",components:{Link:F,Head:H,PsLabel:I,PsButton:j,PsTable2:L,PsAlert:N,PsBreadcrumb2:T,PsIcon:V,PsRating:A,PsTextButton:U,DatePicker:z,PsIconButton:x},layout:R,props:{can:Object,status:Object,categories:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let i=e.search?a(e.search):a(""),m=e.sort_field?a(e.sort_field):a(""),u=e.sort_order?a(e.sort_order):a("desc"),d=e.selectedDate?a(e.selectedDate):a("");const P=[{placeholder:s("select_date"),field:"added_date",filterType:"date_range"}],_=[{label:s("core__be_categories_label"),field:"name",type:"String"},{label:s("core__be_engagement_label"),field:"category_touch_count",type:"Integer"},{label:s("core__be_date_label"),field:"added_date",type:"Date"},{label:s("core__be_detail_label"),field:"detail",type:"Action",sort:!1}];function p(t){m.value=t.field,u.value=t.sort_order,r()}function f(t){i.value=t,r(1)}function b(t){r(1,t)}function g(t){d.value=t;let o=e.users.meta.current_page;r(o)}function r(t=null,o=null){B.Inertia.get(route("category_report.index"),{sort_field:m.value,sort_order:u.value,page:t!=null?t:e.categories.meta.current_page,row:o!=null?o:e.categories.meta.per_page,date_filter:d.value,search:i.value},{preserveScroll:!0,preserveState:!0})}function h(t){d.value=t,r(1)}return{dateFilter:h,handleRow:b,handleSearchingSorting:r,handleSearching:f,handleSorting:p,columns:_,searchOptions:P,selected_date:d,handleDatefilter:g}},methods:{handleDetail(e){this.$inertia.get(route("category_report.show",e))}},computed:{breadcrumb(){return[{label:s("core__be_dashboard_label"),url:route("admin.index")},{label:s("category_report_module"),color:"text-primary-500"}]}}}),q=["href"],G={key:0,class:"flex flex-row mb-2"},K={key:1,class:"flex flex-row mb-2"};function M(e,i,m,u,d,P){const _=n("Head"),p=n("ps-breadcrumb-2"),f=n("ps-icon"),b=n("date-picker"),g=n("ps-rating"),r=n("ps-text-button"),h=n("ps-table2"),t=n("ps-layout");return y(),v(C,null,[l(_,{title:e.$t("category_report_module")},null,8,["title"]),l(t,null,{default:c(()=>[l(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),l(h,{row:e.row,search:e.search,object:this.categories,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,eye_filter:!1,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow},{searchLeft:c(()=>[S("div",null,[S("a",{href:e.route("category_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-4 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[l(f,{name:"fileUpload",class:"me-2 font-semibold"}),k(w(e.$t("core__be_export_btn")),1)],8,q)])]),searchRight:c(()=>[l(b,{class:$(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",e.selected_date==null||e.selected_date==""?"w-48":"w-64"]),value:e.selected_date,"onUpdate:value":i[0]||(i[0]=o=>e.selected_date=o),onDatepick:e.dateFilter,range:!0,inline:!1,autoApply:!1},null,8,["class","value","onDatepick"])]),tableRow:c(o=>[o.field=="overall_rating"?(y(),v("div",G,[l(g,{grade:o.row.overall_rating,hasCounter:!0},null,8,["grade"])])):D("",!0),o.field=="detail"?(y(),v("div",K,[l(r,{onClick:Q=>e.handleDetail(o.row.id)},{default:c(()=>[k(w(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):D("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow"])]),_:1})],64)}var ve=E(J,[["render",M]]);export{ve as default};
