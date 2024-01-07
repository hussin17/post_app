import{d as A,H as D,i as s,J as r,O as H,r as a,Q as I,o as d,c as $,b as n,w as i,f,p as F,t as P,g as _,m as N,a as j,F as B}from"./app.03d0793a.js";import{e as R,d as V}from"./PsLayout.c4204ebc.js";import{P as T}from"./PsLabel.3118c88c.js";import{P as z}from"./PsButton.61467ff7.js";import{P as U}from"./PsTable2.0765a74d.js";import{P as M}from"./PsAlert.d59f0f5f.js";import{P as E}from"./PsBreadcrumb2.b219915c.js";import{b as L}from"./PsModal.a7f1bbd4.js";import{P as J}from"./PsIcon.b0f3f247.js";import{P as Q}from"./PsBannerIcon.f763b022.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsTextButton.c9a84bdc.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.3b0aa6af.js";import"./PsTableSearch.d5754983.js";import"./moment.9709ab41.js";import"./PsIcon1.716eb615.js";import"./Icons.e6c27a10.js";import"./toggle.27dc63bc.js";import"./vue-neat-modal.796ccbfb.js";const G=A({name:"Index",components:{Head:D,PsLabel:T,PsButton:z,PsTable2:U,PsAlert:M,PsBreadcrumb2:E,PsDangerDialog:R,PsToggle:L,PsIcon:J,PsBannerIcon:Q},layout:V,props:{can:Object,status:Object,push_notification_messages:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let l=e.search?s(e.search):s(""),g=e.sort_field?s(e.sort_field):s(""),b=e.sort_order?s(e.sort_order):s("desc");const v=s();let u=s(!1);const w=s(),y=s();function S(t){v.value.openModal(r("core__be_delete_push_not"),r("core__comfirm_to_delete_push_noti_row"),r("core__be_btn_confirm"),r("core__be_btn_cancel"),()=>{this.$inertia.delete(route("push_notification_message.destroy",t),{onSuccess:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)},onError:()=>{u.value=!0,setTimeout(()=>{u.value=!1},3e3)}})},()=>{})}function p(t){g.value=t.field,b.value=t.sort_order,c()}function h(t){l.value=t,c(1)}function k(t){c(1,t)}function c(t=null,m=null){H.Inertia.get(route("push_notification_message.index"),{sort_field:g.value,sort_order:b.value,page:t!=null?t:e.push_notification_messages.meta.current_page,row:m!=null?m:e.push_notification_messages.meta.per_page,search:l.value},{preserveScroll:!0,preserveState:!0})}return{handleRow:k,handleSearchingSorting:c,handleSearching:h,handleSorting:p,visible:u,columns:y,ps_danger_dialog:v,confirmDeleteClicked:S,colFilterOptions:w}},computed:{breadcrumb(){return[{label:r("core__be_dashboard_label"),url:route("admin.index")},{label:r("push_notification_module"),color:"text-primary-500"}]}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:r(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:r(e.key),key_id:e.key_id,label:r(e.label),module_name:e.module_name}))},methods:{handleCreate(){this.$inertia.get(route("push_notification_message.create"))},FilterOptionshandle(e){H.Inertia.put(route("push_notification_message.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.push_notification_messages.per_page,search:this.search.value,current_page:this.push_notification_messages.current_page},{preserveScroll:!0,preserveState:!0})}}}),K={key:0,class:"flex flex-row"},W={key:0,class:"flex flex-row"},X={class:"w-28 h-16 rounded",width:"50",height:"50",alt:"Sunset in the mountains"};function Y(e,l,g,b,v,u){const w=a("Head"),y=a("ps-breadcrumb-2"),S=a("ps-banner-icon"),p=a("ps-icon"),h=a("ps-button"),k=a("ps-danger-dialog"),c=a("ps-toggle"),t=a("ps-table2"),m=a("ps-layout"),O=I("lazy");return d(),$(B,null,[n(w,{title:e.$t("push_notification_module")},null,8,["title"]),n(m,null,{default:i(()=>[n(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(d(),f(S,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:i(()=>[F(P(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):_("",!0),n(t,{row:e.row,search:e.search,object:this.push_notification_messages,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow},{button:i(()=>[e.can.createPushNotificationMessage?(d(),f(h,{key:0,onClick:l[0]||(l[0]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:i(()=>[n(p,{name:"plus",class:"me-2 font-semibold"}),F(P(e.$t("core__be_new_push_notification")),1)]),_:1})):_("",!0)]),responsive_button:i(()=>[e.can.createPushNotificationMessage?(d(),f(h,{key:0,onClick:l[1]||(l[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:i(()=>[n(p,{name:"plus",class:"me-2 font-semibold"}),F(P(e.$t("core__be_new_push_notification")),1)]),_:1})):_("",!0)]),tableActionRow:i(o=>[o.field=="action"?(d(),$("div",K,[n(h,{disabled:!o.row.authorization.delete,onClick:C=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:i(()=>[n(p,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(k,{ref:"ps_danger_dialog"},null,512)])):_("",!0)]),tableRow:i(o=>{var C;return[o.field=="photo"?(d(),$("div",W,[N(j("img",X,null,512),[[O,{src:e.$page.props.thumb2xUrl+"/"+((C=o.row.cover)==null?void 0:C.img_path),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]])])):_("",!0),o.field=="status"?(d(),f(c,{key:1,disabled:!o.row.authorization.update,selectedValue:o.row.status==1,onClick:Z=>e.handlePublish(o.row.id)},null,8,["disabled","selectedValue","onClick"])):_("",!0)]}),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow"])]),_:1})],64)}var ye=q(G,[["render",Y]]);export{ye as default};