import{e as T,P as L,a as z,d as A}from"./PsLayout.c4204ebc.js";import{d as E,H as U,i as s,J as n,O as M,r as a,o as u,c as k,b as l,w as o,f as y,p as _,t as f,g as b,a as V,F as R,q as x,n as N}from"./app.03d0793a.js";import{P as q}from"./PsButton.61467ff7.js";import{P as J}from"./PsTextButton.c9a84bdc.js";import{P as G}from"./PsBannerIcon.f763b022.js";import{P as K}from"./PsBreadcrumb2.b219915c.js";import{P as Q}from"./PsIcon.b0f3f247.js";import{D as W}from"./PsTableSearch.d5754983.js";import{P as X}from"./PsIconButton.15014988.js";import{P as Y}from"./PsLabel.3118c88c.js";import{P as Z}from"./PsLink1.cee9205d.js";import{b as ee}from"./PsModal.a7f1bbd4.js";import{P as te}from"./PsTable2.0765a74d.js";import{P as re}from"./PsRating.5cd3fb00.js";import{D as le}from"./DatePicker.c5532106.js";import{_ as oe}from"./plugin-vue_export-helper.21dcd24c.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.3b0aa6af.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsIcon1.716eb615.js";import"./Icons.e6c27a10.js";import"./toggle.27dc63bc.js";import"./vue-neat-modal.796ccbfb.js";import"./moment.9709ab41.js";const se=E({name:"Index",components:{Head:U,PsButton:q,PsTextButton:J,PsBannerIcon:G,PsBreadcrumb2:K,PsDangerDialog:T,PsIcon:Q,PsDropdown:L,PsDropdownSelect:z,Dropdown:W,PsIconButton:X,PsLabel:Y,PsLink1:Z,PsToggle:ee,PsTable2:te,PsRating:re,DatePicker:le},layout:A,props:{verifyBlueMarkList:Object,status:Object,users:Object,roles:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedStatus:{type:String,default:""},selectedDate:Object,authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,usrBlueMarkNote:String,usrIsVerifyBlueMark:String},setup(e){const i=s(!1),H=s(!1);let h=s(!1),C=e.search?s(e.search):s(""),F=e.sort_field?s(e.sort_field):s(""),w=e.sort_order?s(e.sort_order):s("desc"),g=e.selectedStatus?s(e.selectedStatus):s(""),v=e.seleDateRole?s(e.selectedDate):s("");const p=s(!0),P=s(),D=[{label:n("user_name_label"),field:"name",type:"String"},{label:n("core__be_user_email"),field:"email",type:"String",sort:!1},{label:n("core__be_user_phone"),field:"user_phone",type:"String",sort:!1},{label:n("core__be_blue_mark_status"),field:e.usrIsVerifyBlueMark,type:"String"},{label:n("core__be_blue_mark_note"),field:e.usrBlueMarkNote,type:"String",sort:!1},{label:n("core__be_applied_date"),field:"bluemark_updated_at",type:"Timestamp",sort:!1},{label:n("core__be_action_label"),field:"action",type:"Action"}];function B(r){F.value=r.field,w.value=r.sort_order,c()}function d(r){g.value=r;let m=e.users.meta.current_page;c(m)}function O(r){v.value=r;let m=e.users.meta.current_page;c(m)}function $(){v.value="",g.value="",c(1),p.value=!1,setTimeout(()=>{p.value=!0},500)}function S(r){C.value=r,c(1)}function I(r){c(1,r)}function c(r=null,m=null){M.Inertia.get(route("bluemarkuser.index"),{sort_field:F.value,sort_order:w.value,page:r!=null?r:e.users.meta.current_page,row:m!=null?m:e.users.meta.per_page,search:C.value,status_filter:g.value,date_filter:v.value},{preserveScroll:!0,preserveState:!0})}function j(r){t.value.openModal(n("core__be_delete_bluemarkuser"),n("core__be_delete_bluemarkuser_info"),n("core__be_btn_confirm"),n("core__be_btn_cancel"),()=>{M.Inertia.delete(route("bluemarkuser.destroy",r),{onSuccess:()=>{h.value=!0,setTimeout(()=>{h.value=!1},3e3)},onError:()=>{h.value=!0,setTimeout(()=>{h.value=!1},3e3)}})},()=>{})}const t=s();return{reRenderDate:p,handleClearFilter:$,showFilter:i,clearFilter:H,columns:D,colFilterOptions:P,visible:h,handleSorting:B,handleSearchingSorting:c,handleStatusfilter:d,handleDatefilter:O,handleRow:I,handleSearching:S,selected_status:g,selected_date:v,confirmDeleteClicked:j,ps_danger_dialog:t}},computed:{breadcrumb(){return[{label:n("core__be_dashboard_label"),url:route("admin.index")},{label:n("bluemark_module"),color:"text-primary-500"}]}},methods:{handleEdit(e){this.$inertia.get(route("bluemarkuser.edit",e))},FilterOptionshandle(e){M.Inertia.post(route("bluemarkuser.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.users.per_page,search:this.search.value,current_page:this.users.current_page},{preserveScroll:!0,preserveState:!0})}},created(){}}),ae={class:"rounded-md shadow-xs w-56"},ne={class:"pt-2 z-30"},ie=["onClick"],de={key:0,class:"flex flex-row"},ue={key:0,class:"flex flex-row"};function ce(e,i,H,h,C,F){const w=a("Head"),g=a("ps-breadcrumb-2"),v=a("ps-banner-icon"),p=a("ps-icon"),P=a("ps-text-button"),D=a("ps-icon-button"),B=a("ps-dropdown-select"),d=a("ps-label"),O=a("ps-dropdown"),$=a("date-picker"),S=a("ps-button"),I=a("ps-danger-dialog"),c=a("ps-table2"),j=a("ps-layout");return u(),k(R,null,[l(w,{title:e.$t("bluemark_module")},null,8,["title"]),l(j,null,{default:o(()=>[l(g,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(u(),y(v,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[_(f(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):b("",!0),l(c,{row:e.row,search:e.search,object:this.users,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,globalSearchPlaceholder:e.$t("core__be_search"),eye_filter:!1},{searchRight:o(()=>[e.showFilter?(u(),y(P,{key:0,onClick:i[0]||(i[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-2 px-4"},{default:o(()=>[l(p,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),_(" "+f(e.$t("core__be_clear_filter")),1)]),_:1})):b("",!0),l(D,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:i[1]||(i[1]=t=>e.showFilter=!e.showFilter)},{default:o(()=>[_(f(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:o(()=>[l(O,{align:"",class:"h-10"},{select:o(()=>[l(B,{placeholder:e.$t("core__be_status_label"),selectedValue:e.selected_status==""||e.selected_status=="all"?"":e.verifyBlueMarkList.filter(t=>t.id==e.selected_status)[0].name},null,8,["placeholder","selectedValue"])]),list:o(()=>[V("div",ae,[V("div",ne,[V("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[2]||(i[2]=t=>e.handleStatusfilter("all"))},[l(d,{class:"text-gray-200 ms-2"},{default:o(()=>[_(f(e.$t("core__be_select_all")),1)]),_:1})]),(u(!0),k(R,null,x(e.verifyBlueMarkList,t=>(u(),k("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:r=>e.handleStatusfilter(t.id)},[l(d,{class:N(["ms-2",t.id==e.selected_status?" font-bold":""])},{default:o(()=>[_(f(t.name),1)]),_:2},1032,["class"])],8,ie))),128))])])]),_:1}),l($,{onDatepick:e.handleDatefilter,class:N(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":i[3]||(i[3]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])]),tableActionRow:o(t=>[t.field=="action"?(u(),k("div",de,[l(S,{disabled:!t.row.authorizations.update,onClick:r=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[l(p,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),l(S,{disabled:!t.row.authorizations.delete,onClick:r=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[l(p,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),l(I,{ref:"ps_danger_dialog"},null,512)])):b("",!0)]),tableRow:o(t=>[t.field==e.usrIsVerifyBlueMark?(u(),k("div",ue,[t.row[e.usrIsVerifyBlueMark]==1?(u(),y(d,{key:0,textColor:"text-green-500",class:"flex flex-row"},{default:o(()=>[l(d,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-green-500"}),_(f(e.$t("bluemarkuser__be_applied_label")),1)]),_:1})):b("",!0),t.row[e.usrIsVerifyBlueMark]==2?(u(),y(d,{key:1,textColor:"text-yellow-500",class:"flex flex-row"},{default:o(()=>[l(d,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-yellow-500"}),_(f(e.$t("bluemarkuser__be_pending_label")),1)]),_:1})):b("",!0),t.row[e.usrIsVerifyBlueMark]==3?(u(),y(d,{key:2,textColor:"text-red-500",class:"flex flex-row"},{default:o(()=>[l(d,{class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-red-500"}),_(f(e.$t("bluemarkuser__be_rejected_label")),1)]),_:1})):b("",!0)])):b("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable","globalSearchPlaceholder"])]),_:1})],64)}var Ne=oe(se,[["render",ce]]);export{Ne as default};