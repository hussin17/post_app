import{d as y,L as P,H as v,J as t,r as o,o as m,c as d,b as a,w as r,a as S,p as c,t as p,g as x,F as $}from"./app.03d0793a.js";import{d as w}from"./PsLayout.c4204ebc.js";import{P as k}from"./PsLabel.3118c88c.js";import{P as B}from"./PsButton.61467ff7.js";import{P as C}from"./PsDataTable.3f77ea8e.js";import{P as F}from"./PsAlert.d59f0f5f.js";import{P as D}from"./PsBreadcrumb2.b219915c.js";import{P as L}from"./PsIcon.b0f3f247.js";import{P as H}from"./PsRating.5cd3fb00.js";import{P as N}from"./PsTextButton.c9a84bdc.js";import{_ as O}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsModal.a7f1bbd4.js";import"./toggle.27dc63bc.js";import"./vue-neat-modal.796ccbfb.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.3b0aa6af.js";import"./PsTableSearch.d5754983.js";import"./moment.9709ab41.js";import"./PsIcon1.716eb615.js";import"./Icons.e6c27a10.js";const T=y({name:"Index",components:{Link:P,Head:v,PsLabel:k,PsButton:B,PsDataTable:C,PsAlert:F,PsBreadcrumb2:D,PsIcon:L,PsRating:H,PsTextButton:N},layout:w,props:["users"],setup(){const e=["name"],l=t("search_user_name"),s=[{placeholder:t("select_date"),field:"added_date",filterType:"date_range"}],n=[{label:t("user_name_label"),field:"name",type:"String"},{label:t("email_label"),field:"email",type:"String"},{label:t("phone_label"),field:"user_phone",type:"String"},{label:t("registered_date_label"),field:"added_date",type:"Date"},{label:t("detail_label"),field:"detail",type:"Action",sort:!1}];return{globalSearchFields:e,globalSearchPlaceholder:l,columns:n,searchOptions:s}},methods:{handleDetail(e){this.$inertia.get(route("daily_active_user_report.show",e))}},computed:{breadcrumb(){return[{label:t("core__be_dashboard_label"),url:route("admin.index")},{label:t("daily_active_user_report_module"),color:"text-primary-500"}]}}}),V=["href"],I={key:0,class:"flex flex-row mb-2"};function A(e,l,s,n,R,E){const _=o("Head"),u=o("ps-breadcrumb-2"),b=o("ps-icon"),f=o("ps-text-button"),h=o("ps-data-table"),g=o("ps-layout");return m(),d($,null,[a(_,{title:e.$t("daily_active_user_report_module")},null,8,["title"]),a(g,null,{default:r(()=>[a(u,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(h,{rows:this.users,columns:e.columns,globalSearchFields:e.globalSearchFields,searchOptions:e.searchOptions,globalSearchPlaceholder:e.globalSearchPlaceholder},{searchLeft:r(()=>[S("a",{href:e.route("daily_active_user_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-2 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[a(b,{name:"fileUpload",class:"mx-0.5 font-semibold"}),c(p(e.$t("core__be_export_btn")),1)],8,V)]),tableRow:r(i=>[i.field=="detail"?(m(),d("div",I,[a(f,{onClick:J=>e.handleDetail(i.row.id)},{default:r(()=>[c(p(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):x("",!0)]),_:1},8,["rows","columns","globalSearchFields","searchOptions","globalSearchPlaceholder"])]),_:1})],64)}var de=O(T,[["render",A]]);export{de as default};