import{d as R,i as l,J as r,aJ as z,r as s,o as c,f as x,w as a,a as T,l as P,b as o,p as C,t as $,L as ee,H as te,O as j,c as w,g as h,F as oe}from"./app.94623934.js";import ie from"./TableFieldHideShowModal.39ae026a.js";import ne from"./LanguageModal.1030fc4c.js";import le from"./LanguageEditModal.c64144fd.js";import{e as ae,d as re}from"./PsLayout.38886a49.js";import{P as K}from"./PsLabel.dab9a58c.js";import{P as W}from"./PsButton.de8e2c9c.js";import{P as se}from"./PsTable2.a4eb98d2.js";import{P as de}from"./PsAlert.ad63b55f.js";import{P as ue}from"./PsBreadcrumb2.ab3eeba4.js";import{P as ce,b as _e}from"./PsModal.c6e9c2b2.js";import{P as J}from"./PsIcon.ff30b54a.js";import{P as q}from"./PsInput.fc15fc8e.js";import{_ as G}from"./plugin-vue_export-helper.21dcd24c.js";import{P as me}from"./PsBannerIcon.bf2e6de8.js";import{D as fe}from"./PsTableSearch.1d3198df.js";import{P as ge}from"./PsIconButton.f3fd3f6e.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./toggle.40ae2807.js";import"./vue-neat-modal.b0ab9d44.js";import"./Icons.e6c27a10.js";import"./PsLoading.b049e7ec.js";import"./PsTextButton.b34be5b9.js";import"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import"./PsInputWithRightIcon.2dba0be1.js";import"./moment.9709ab41.js";import"./PsIcon1.01459ed6.js";const he=R({name:"PsDialogWithInput2",components:{PsModal:ce,PsLabel:K,PsButton:W,PsIcon:J,PsInput:q},setup(){const e=l(),n=l(r("ps_danger_dialog__danger")),d=l(r("ps_danger_dialog__danger_message")),u=l(!0),g=l(),F=l(r("ps_confirm_dialog__yes")),b=l(r("ps_confirm_dialog__no"));let y,k=z({name:""});function p(){g.value==k.name?u.value=!1:u.value=!0}function v(m){m=="yes"?y():_(),e.value.toggle(!1)}function M(m,I,O,A,D,N){m!=null&&m.trim()!=""&&(n.value=m),I!=null&&I.trim()!=""&&(d.value=I),name!=null&&name.trim()!=""&&(g.value=name),A!=null&&A.trim()!=""&&(b.value=A),O!=null&&O.trim()!=""&&(F.value=O),e.value.toggle(!0),y=D}function _(){e.value.toggle(!1)}return{psmodal:e,openModal:M,closeModal:_,title:n,actionClicked:v,okButton:F,cancelButton:b,message:d,okBtnIsDisable:u,checkNameEqualOrNot:p,form:k,projectName:g}}}),be={class:"flex flex-row justify-end"};function pe(e,n,d,u,g,F){const b=s("ps-button"),y=s("ps-modal");return c(),x(y,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!0,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{body:a(()=>[T("div",null,[P(e.$slots,"body")])]),footer:a(()=>[T("div",be,[o(b,{rounded:"rounded",onClick:n[0]||(n[0]=k=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none text-secondary-800 dark:text-white",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:a(()=>[C($(e.cancelButton),1)]),_:1}),o(b,{rounded:"rounded",onClick:n[1]||(n[1]=k=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-primary-500 text-white",hover:"hover:outline-none hover:ring hover:ring-primary-100",focus:"focus:outline-none focus:ring focus:ring-primary-300"},{default:a(()=>[C($(e.okButton),1)]),_:1})])]),_:3},512)}var ve=G(he,[["render",pe]]);const ye=R({name:"Index",components:{Link:ee,Head:te,PsLabel:K,PsButton:W,PsTable2:se,PsAlert:de,PsBreadcrumb2:ue,PsDangerDialog:ae,PsInput:q,PsToggle:_e,PsIcon:J,PsBannerIcon:me,Dropdown:fe,PsIconButton:ge,TableFieldHideShowModal:ie,LanguageModal:ne,LanguageEditModal:le,PsDialogWithInput2:ve},layout:re,props:{tableId:String,status:Object,can:Object,fields:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let n=e.search?l(e.search):l(""),d=e.sort_field?l(e.sort_field):l(""),u=e.sort_order?l(e.sort_order):l("desc"),g=l(!1);const F=l(),b=l(),y=l(),k=l(),p=l(),v=l(),M=l(),_=["uit00001","uit00003","uit00008"],m=z({ordering:"",_method:"put"});function I(i){F.value.openModal(r("core__delete"),r("core__comfirm_to_delete_field"),r("core__be_btn_confirm"),r("core__be_btn_cancel"),()=>{j.Inertia.put(route("tables.fields.deleteField",{id:i}),{onSuccess:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)},onError:()=>{g.value=!0,setTimeout(()=>{g.value=!1},3e3)}})},()=>{})}function O(i){k.value.openModal(i,f=>{p.value.openModal(f)})}function A(i){d.value=i.field,u.value=i.sort_order,B()}function D(i){n.value=i,B(1)}function N(i){B(1,i)}function B(i=null,f=null){j.Inertia.get(route("tables.fields.index",e.tableId),{table:e.tableId,sort_field:d.value,sort_order:u.value,page:i!=null?i:e.fields.meta.current_page,row:f!=null?f:e.fields.meta.per_page,search:n.value,symbol:localStorage.activeLanguage?localStorage.activeLanguage:"en"},{preserveScroll:!0,preserveState:!0})}function L(i){return!_.includes(i)}function t(i){var f;return i.authorizations.update&&i.is_core_field!="1"?!!_.includes((f=i.ui_type_id)==null?void 0:f.core_keys_id):!1}function H(i,f,V,E){m.ordering=E,y.value.openModal(r("column_order_label"),r("edit_column_order"),r("core__be_btn_confirm"),r("core__be_btn_cancel"),()=>{let U=z({id:i,isCoreField:V,ordering:m.ordering,_method:"put"});this.$inertia.post(route("tables.fields.handleOrdering"),U)},()=>{})}function S(i,f,V,E,U){b.value.openModal(V,E,U,(Q,X,Y)=>{let Z=z({id:i,isCoreField:f,isIncluded:Q,isShow:X,isShowInFilter:Y});j.Inertia.post(route("tables.fields.eyeStatusChange",Z))},()=>{})}return{eyeIconClicked:S,haveAttrUiTypes:_,isIncludehaveAttrUiTypes:L,language_edit_modal:p,language_modal:k,languageClicked:O,hide_show_modal:b,columns:M,ps_danger_dialog:F,confirmDeleteClicked:I,colFilterOptions:v,handleRow:N,handleSearchingSorting:B,handleSearching:D,handleSorting:A,visible:g,ps_dialog_with_input2:y,handleOrdering:H,columnOrderingForm:m,isEnableAttribute:t}},computed:{breadcrumb(){return[{label:r("core__be_dashboard_label"),url:route("admin.index")},{label:r("table_setting_group"),url:route("table.index")},{label:r("core__be_fields"),color:"text-primary-500"}]}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:r(e.label),type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:r(e.key),key_id:e.key_id,label:r(e.label),module_name:e.module_name}))},methods:{handleCreate(){this.$inertia.get(route("mobile_language.create"))},handleCustomDetail(e,n,d){n=="1"||this.haveAttrUiTypes.includes(d)&&this.$inertia.get(route("attribute.index",[this.tableId,e]))},handlePublish(e,n,d){if(n){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.enableChange",u))}},handleIsShowSorting(e,n,d){if(n){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.isShowSorting",u))}},handleMandatory(e,n,d){if(n){let u=z({id:e,isCoreField:d});this.$inertia.post(route("tables.fields.mandatoryChange",u))}},handleLanguageString(e){this.$inertia.get(route("mobile_language_string.index",e))},FilterOptionshandle(e){j.Inertia.put(route("tables.fields.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.fields.per_page,search:this.search.value,current_page:this.fields.current_page},{preserveScroll:!0,preserveState:!0})}}}),ke={key:0,class:"flex flex-row mb-2"},we={key:0,class:"flex"},Ce={class:""},$e={key:1,class:"flex"},Se={class:""},Fe={key:2},Ie={key:3},Oe={key:4},Ae={key:5},ze={key:6,class:"flex"},Me={class:"w-full mt-2 text-start"};function Be(e,n,d,u,g,F){const b=s("Head"),y=s("ps-breadcrumb-2"),k=s("ps-banner-icon"),p=s("ps-icon"),v=s("ps-button"),M=s("ps-danger-dialog"),_=s("ps-label"),m=s("ps-toggle"),I=s("ps-table2"),O=s("table-field-hide-show-modal"),A=s("language-modal"),D=s("language-edit-modal"),N=s("ps-input"),B=s("ps-dialog-with-input2"),L=s("ps-layout");return c(),w(oe,null,[o(b,{title:e.$t("fields_label")},null,8,["title"]),o(L,null,{default:a(()=>[o(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(c(),x(k,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"mb-5 text-white sm:mb-6 lg:mb-8",iconColor:"white"},{default:a(()=>[C($(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),o(I,{row:e.row,search:e.search,object:this.fields,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{tableActionRow:a(t=>[t.field=="action"?(c(),w("div",ke,[o(v,{disabled:t.row.authorizations.delete?e.permission_for_delete=="0":!0,onClick:H=>e.confirmDeleteClicked(t.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:a(()=>[o(p,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),o(M,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:a(t=>{var H;return[t.field=="name"?(c(),w("div",we,[T("div",Ce,[o(v,{disabled:!t.row.authorizations.update,onClick:S=>e.languageClicked(t.row.nameKey),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[o(p,{name:"language",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),o(M,{ref:"ps_danger_dialog"},null,512)]),o(_,{class:"font-normal"},{default:a(()=>[C($(e.$t(t.row.nameKey)),1)]),_:2},1024)])):h("",!0),t.field=="placeholder"?(c(),w("div",$e,[T("div",Se,[o(v,{disabled:!t.row.authorizations.update,onClick:S=>e.languageClicked(t.row.placeholderKey),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[o(p,{name:"language",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])]),o(_,{class:"font-normal"},{default:a(()=>[C($(e.$t(t.row.placeholderKey)),1)]),_:2},1024)])):h("",!0),t.field=="ui_type_id"?(c(),w("div",Fe,[o(_,{class:"font-normal"},{default:a(()=>[C($(t.row.ui_type_id?e.$t(t.row.ui_type_id.name):e.$t("N.A")),1)]),_:2},1024)])):h("",!0),t.field=="show_in_table"?(c(),w("div",Ie,[o(v,{disabled:!t.row.authorizations.update,onClick:S=>e.eyeIconClicked(t.row.id,t.row.is_core_field,t.row.is_include_in_hideshow,t.row.is_show,t.row.is_show_in_filter),class:"me-4",colors:"bg-primary-500 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[o(p,{name:"eye-on",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"])])):h("",!0),t.field=="enable"?(c(),w("div",Oe,[o(m,{disabled:t.row.authorizations.update?t.row.permission_for_enable_disable!=1:!0,selectedValue:t.row.enable==1,onClick:S=>e.handlePublish(t.row.id,t.row.authorizations.update&&t.row.permission_for_enable_disable=="1",t.row.is_core_field),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])])):h("",!0),t.field=="is_show_sorting"?(c(),w("div",Ae,[o(m,{disabled:!t.row.authorizations.update,selectedValue:t.row.is_show_sorting=="1",onClick:S=>e.handleIsShowSorting(t.row.id,t.row.authorizations.update,t.row.is_core_field),toggleOnTheme:"bg-primary-500 border-primary-500 "},null,8,["disabled","selectedValue","onClick"])])):h("",!0),t.field=="ordering"?(c(),w("div",ze,[o(_,{class:"font-normal"},{default:a(()=>[C($(e.$t(t.row.ordering)),1)]),_:2},1024)])):h("",!0),t.field=="mandatory"?(c(),x(v,{key:7,disabled:t.row.authorizations.update?t.row.permission_for_mandatory!="1":!0,onClick:S=>e.handleMandatory(t.row.id,t.row.permission_for_mandatory,t.row.is_core_field),padding:[t.row.mandatory=="1"?"py-2 px-2":"py-2 px-4"],colors:[t.row.mandatory=="1"?"bg-red-400  dark:bg-red-200 text-white dark:text-red-800":"bg-green-400"," dark:bg-green-200 text-white dark:text-green-800"]},{default:a(()=>[C($(t.row.mandatory=="1"?e.$t("core__be_btn_mandatory"):e.$t("core__be_btn_optional")),1)]),_:2},1032,["disabled","onClick","padding","colors"])):h("",!0),t.field=="attribute"?(c(),x(v,{key:8,disabled:t.row.authorizations.update?t.row.is_core_field=="1"?!0:e.isIncludehaveAttrUiTypes((H=t.row.ui_type_id)==null?void 0:H.core_keys_id):!0,onClick:S=>e.handleCustomDetail(t.row.core_keys_id,t.row.is_core_field,t.row.ui_type_id.core_keys_id),class:"me-4",colors:e.isEnableAttribute(t.row)?"bg-green-400 text-white":"bg-primary-100 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:a(()=>[o(p,{theme:e.isEnableAttribute(t.row)?"text-white dark:text-primary-900":"text-primary-300 dark:text-primary-900",name:"editPencil",w:"16",h:"16"},null,8,["theme"])]),_:2},1032,["disabled","onClick","colors"])):h("",!0)]}),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"]),o(O,{ref:"hide_show_modal"},null,512),o(A,{ref:"language_modal"},null,512),o(D,{ref:"language_edit_modal"},null,512),o(B,{ref:"ps_dialog_with_input2"},{body:a(()=>[T("div",Me,[o(_,{class:"mb-2 text-base font-weight-bolder"},{default:a(()=>[C($(e.$t("column_order_label")),1)]),_:1}),o(N,{type:"number",value:e.columnOrderingForm.ordering,"onUpdate:value":n[0]||(n[0]=t=>e.columnOrderingForm.ordering=t),valueModifiers:{number:!0},placeholder:e.$t("column_order_placeholder")},null,8,["value","placeholder"])])]),_:1},512)]),_:1})],64)}var rt=G(ye,[["render",Be]]);export{rt as default};
