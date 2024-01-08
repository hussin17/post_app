import{e as C,d as S}from"./PsLayout.38886a49.js";import{d as A,H as $,L as B,i as D,B as F,J as t,r as o,o as i,c as f,b as l,w as n,f as m,p as c,t as r,g as d,a as y,u as h,F as I}from"./app.94623934.js";import{P as N}from"./PsInput.fc15fc8e.js";import{P as T}from"./PsLabel.dab9a58c.js";import{P as H}from"./PsButton.de8e2c9c.js";import{P as L}from"./PsTextButton.b34be5b9.js";import{P as O}from"./PsTextarea.23de1910.js";import{P as V}from"./PsLabelHeader4.692248a2.js";import{P as E}from"./PsIcon.ff30b54a.js";import{P as R}from"./PsAlert.ad63b55f.js";import{P as z}from"./PsDataTable.cb820288.js";import{P as J}from"./PsBannerIcon.bf2e6de8.js";import{P as M}from"./PsBreadcrumb2.ab3eeba4.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.c6e9c2b2.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./Icons.e6c27a10.js";import"./PsTableSearch.1d3198df.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";const q=A({name:"Index",components:{Head:$,Link:B,PsInput:N,PsLabel:T,PsTextButton:L,PsButton:H,PsTextarea:O,PsLabelHeader4:V,PsIcon:E,PsAlert:R,PsBreadcrumb2:M,PsDangerDialog:C,PsDataTable:z,PsBannerIcon:J},layout:S,props:["transactions","status"],setup(){const e=D(),u=F([{label:t("user_name_label"),key:"contact_name",hidden:!1},{label:"Amount",key:"balance_amount",hidden:!1},{label:t("phone_label"),key:"contact_phone",hidden:!0},{label:"Item Count",key:"total_item_count",hidden:!1},{label:"Payment",key:"payment_method",hidden:!1},{label:"Transaction Status",key:"transaction_status",hidden:!1},{label:t("owner_label"),key:"added_user_id",hidden:!0},{label:t("added_date_label"),key:"added_date",hidden:!0},{label:t("updated_user_label"),key:"updated_user_id",hidden:!0},{label:t("updated_date_label"),key:"updated_date",hidden:!0}]),_=[{label:t("action_label"),field:"action",type:"action"},{label:t("user_name_label"),field:"contact_name",type:"String",action:"Action"},{label:"Amount",field:"balance_amount",type:"String",action:"Action"},{label:t("phone_label"),field:"contact_phone",type:"String",action:"Action"},{label:"Item Count",field:"total_item_count",type:"String",action:"Action"},{label:"Payment",field:"payment_method",type:"String",action:"Action"},{label:"Transaction Status",field:"transaction_status",type:"String",action:"Action"},{label:t("owner_label"),field:"added_user_id",relation:"owner",type:"String",relationField:"name"},{label:t("added_date_label"),field:"added_date",type:"Date"},{label:t("updated_date_label"),field:"updated_date",type:"Date"},{label:t("updated_user_label"),field:"updated_user_id",relation:"editor",type:"String",relationField:"name"}];function p(b){e.value.openModal(t("core__be_transaction_history"),t("delete_transaction_history"),t("core__be_btn_confirm"),t("core__be_btn_cancel"),()=>{this.$inertia.delete(route("transaction.destroy",b))},()=>{})}return{columns:_,ps_danger_dialog:e,confirmDeleteClicked:p,colFilterOptions:u}},computed:{breadcrumb(){return[{label:t("core__be_dashboard_label"),url:route("admin.index")},{label:t("transaction_history_module"),color:"text-primary-500"}]}},methods:{handleEdit(e){this.$inertia.get(route("transaction.edit",e))},handlePublish(e){this.$inertia.put(route("transaction.statusChange",e))},handleDefault(e){this.$inertia.put(route("transaction.defaultChange",e))}}}),G={key:0,class:"flex flex-row mb-2"},K=c(" Detail ");function Q(e,u,_,p,b,U){const g=o("Head"),k=o("ps-breadcrumb-2"),w=o("ps-banner-icon"),P=o("ps-text-button"),s=o("ps-label"),x=o("ps-data-table"),v=o("ps-layout");return i(),f(I,null,[l(g,{title:e.$t("transaction_module")},null,8,["title"]),l(v,null,{default:n(()=>[l(k,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(i(),m(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:n(()=>[c(r(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):d("",!0),l(x,{rows:e.transactions,columns:e.columns,colFilterOptions:e.colFilterOptions},{tableActionRow:n(a=>[a.field=="action"?(i(),f("div",G,[l(P,{onClick:W=>e.handleEdit(a.row.id)},{default:n(()=>[K]),_:2},1032,["onClick"])])):d("",!0)]),tableRow:n(a=>[a.field=="balance_amount"?(i(),m(s,{key:0,class:"flex"},{default:n(()=>[l(s,{class:"mb-2 text-sm whitespace-nowrap"},{default:n(()=>[c(r(a.row.currency_symbol)+" "+r(a.row.balance_amount),1)]),_:2},1024)]),_:2},1024)):d("",!0),a.field=="payment_method"?(i(),m(s,{key:1,class:"flex"},{default:n(()=>[l(s,{class:"mb-2 px-1 py-0.5 text-xs font-semibold bg-yellow-50 rounded whitespace-nowrap",textColor:"text-yellow-500"},{default:n(()=>[c(r(a.row.payment_method),1)]),_:2},1024)]),_:2},1024)):d("",!0),a.field=="transaction_status"?(i(),m(s,{key:2},{default:n(()=>[l(s,{class:"mb-2 whitespace-nowrap dark:text-white"},{default:n(()=>[y("span",{class:"flex flex-row",style:h({color:a.row.transaction_status.color_value})},[y("div",{class:"w-2 h-2 my-auto rounded-full me-2",style:h({background:a.row.transaction_status.color_value})},null,4),c(" "+r(a.row.transaction_status.title),1)],4)]),_:2},1024)]),_:2},1024)):d("",!0)]),_:1},8,["rows","columns","colFilterOptions"])]),_:1})],64)}var Pe=j(q,[["render",Q]]);export{Pe as default};
