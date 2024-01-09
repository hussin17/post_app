import{a as S,P as f}from"./PsApiService.175a4dd2.js";import{P as l}from"./PsObject.a17ef38f.js";import{aB as K,B as y}from"./app.89c3e968.js";import"./PsStore.8733790b.js";import{m as F}from"./PsSepetetedStore.9a31ac47.js";class n extends l{constructor(){super(...arguments),this.id="",this.name="",this.coreKeysId="",this.addedDate="",this.addedDateStr="",this.isEmptyObject=""}init(t,e,s,d,r,a){return this.id=t,this.name=e,this.coreKeysId=s,this.addedDate=d,this.addedDateStr=r,this.isEmptyObject=a,this}getPrimaryKey(){return"custom"}toMap(t){const e={};return e.id=t.id,e.name=t.name,e.core_keys_id=t.coreKeysId,e.added_date=t.addedDate,e.added_date_str=t.addedDateStr,e.is_empty_object=t.isEmptyObject,e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new n().init(t.id,t.name,t.core_keys_id,t.added_date,t.added_date_str,t.is_empty_object)}fromMapList(t){const e=[];for(const s of t)s!=null&&e.push(this.fromMap(s));return e}}class m extends l{constructor(){super(...arguments),this.id="",this.name="",this.coreKeysId="",this.addedDate="",this.addedDateStr="",this.isEmptyObject=""}init(t,e,s,d,r,a){return this.id=t,this.name=e,this.coreKeysId=s,this.addedDate=d,this.addedDateStr=r,this.isEmptyObject=a,this}getPrimaryKey(){return"custom"}toMap(t){const e={};return e.id=t.id,e.name=t.name,e.core_keys_id=t.coreKeysId,e.added_date=t.addedDate,e.added_date_str=t.addedDateStr,e.is_empty_object=t.isEmptyObject,e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new m().init(t.id,t.name,t.core_keys_id,t.added_date,t.added_date_str,t.is_empty_object)}fromMapList(t){const e=[];for(const s of t)s!=null&&e.push(this.fromMap(s));return e}}class o extends l{constructor(){super(...arguments),this.id="",this.name="",this.placeholder="",this.coreKeysId="",this.uiType=new m,this.mandatory="",this.isVisible="",this.isDelete="",this.moduleName="",this.dataType="",this.isCoreField="",this.addedDate="",this.addedDateStr="",this.customizeUiList=[new n]}init(t,e,s,d,r,a,i,p,c,_,D,L,g,w){return this.id=t,this.name=e,this.placeholder=s,this.coreKeysId=d,this.uiType=r,this.mandatory=a,this.isVisible=i,this.isDelete=p,this.moduleName=c,this.dataType=_,this.isCoreField=D,this.addedDate=L,this.addedDateStr=g,this.customizeUiList=w,this}getPrimaryKey(){return"custom"}toMap(t){const e={};return e.id=t.id,e.name=t.name,e.placeholder=t.placeholder,e.core_keys_id=t.coreKeysId,e.uiType=new m().toMap(t.uiType),e.mandatory=t.mandatory,e.is_visible=t.isVisible,e.is_delete=t.isDelete,e.module_name=t.moduleName,e.data_type=t.dataType,e.is_core_field=t.isCoreField,e.added_date=t.addedDate,e.added_date_str=t.addedDateStr,e.customize_ui_details=new n().toMapList(t.customizeUiList),e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new o().init(t.id,t.name,t.placeholder,t.core_keys_id,new m().fromMap(t.ui_type),t.mandatory,t.is_visible,t.is_delete,t.module_name,t.data_type,t.is_core_field,t.added_date,t.added_date_str,new n().fromMapList(t.customize_ui_details))}fromMapList(t){const e=[];for(const s of t)s!=null&&e.push(this.fromMap(s));return e}}class u extends l{constructor(){super(...arguments),this.id="",this.fieldName="",this.labelName="",this.placeholder="",this.dataType="",this.isCoreField="",this.isVisible="",this.mandatory="",this.addedDate="",this.addedDateStr=""}init(t,e,s,d,r,a,i,p,c,_){return this.id=t,this.fieldName=e,this.labelName=s,this.placeholder=d,this.dataType=r,this.isCoreField=a,this.isVisible=i,this.mandatory=p,this.addedDate=c,this.addedDateStr=_,this}getPrimaryKey(){return"custom"}toMap(t){const e={};return e.id=t.id,e.field_name=t.fieldName,e.label_name=t.labelName,e.placeholder=t.placeholder,e.data_type=t.dataType,e.is_core_field=t.isCoreField,e.is_visible=t.isVisible,e.mandatory=t.mandatory,e.added_date=t.addedDate,e.added_date_str=t.addedDateStr,e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new u().init(t.id,t.field_name,t.label_name,t.placeholder,t.data_type,t.is_core_field,t.is_visible,t.mandatory,t.added_date,t.added_date_str)}fromMapList(t){const e=[];for(const s of t)s!=null&&e.push(this.fromMap(s));return e}}class h extends l{constructor(){super(...arguments),this.customList=[new o],this.coreList=[new u]}init(t,e){return this.customList=t,this.coreList=e,this}getPrimaryKey(){return"custom"}toMap(t){const e={};return e.custom=new o().toMapList(t.customList),e.core=new u().toMapList(t.coreList),e}toMapList(t){const e=[];for(let s=0;s<t.length;s++)t[s]!=null&&e.push(this.toMap(t[s]));return e}fromMap(t){return new h().init(new o().fromMapList(t.custom),new u().fromMapList(t.core))}fromMapList(t){const e=[];for(const s of t)s!=null&&e.push(this.fromMap(s));return e}}const N=F(M=>K(`customFieldStore/${M}`,()=>{const t=y({value:!1}),e=y(new S);let s="";async function d(a){t.value=!0;const i=await f.getCustomFieldList(new h,a);return e.code=i.code,e.status=i.status,e.message=i.message,e.data=i.data,t.value=!1,e}async function r(a){t.value=!0;const i=await f.getUserCustomFieldList(new h,a);return e.code=i.code,e.status=i.status,e.message=i.message,e.data=i.data,t.value=!1,e}return{loadUserCustomFieldList:r,customField:e,loading:t,id:s,loadCustomFieldList:d}}));export{n as C,N as u};