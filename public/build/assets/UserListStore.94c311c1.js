import{a as P,P as n}from"./PsApiService.16e28b45.js";import{U as c}from"./User.fb568515.js";import{U as H}from"./UserParameterHolder.e816da85.js";import{U as B}from"./UserListParameterHolder.d110b747.js";import{aB as F,B as d,i as O}from"./app.94623934.js";import{m as R}from"./PsSepetetedStore.9a31ac47.js";const j=R(v=>F(`userListProvider/${v}`,()=>{const i=d({value:!1}),e=d(new P),l=d({value:!1});let o=O(4),r=0,g="",U=d(new H),p=d(new B);function f(a){var t,s;e!=null&&e.data!=null&&e.data.length>0&&r!=0?(a.data!=null&&a.data.length>0?(((t=a.data)==null?void 0:t.length)<o.value?i.value=!0:i.value=!1,e.data.push(...a.data)):i.value=!0,e.code=a.code,e.status=a.status,e.message=a.message):(((s=a.data)==null?void 0:s.length)<o.value||a.data==null?i.value=!0:i.value=!1,e.data=a.data,e.code=a.code,e.status=a.status,e.message=a.message),e!=null&&e.data!=null&&(r=e.data.length)}async function w(a,t){l.value=!0;const s=await n.getUserList(new c,a,o.value,r,t.toMap());f(s),l.value=!1}async function L(a,t){r=0,l.value=!0;const s=await n.getUserSearchList(new c,o.value,r,a,t.toMap());f(s),l.value=!1}async function h(a,t){l.value=!0;const s=0,m=e.data.length,u=await n.getUserSearchList(new c,m,s,a,t.toMap());e.data=u.data,e.code=u.code,e.status=u.status,e.message=u.message,l.value=!1}async function S(a,t){r=0,l.value=!0;const s=await n.getUserSearchList(new c,o.value,r,a,t.toMap());f(s),l.value=!1}async function M(a,t){r=0,l.value=!0;const s=await n.getUserList(new c,a,o.value,r,t.toMap());f(s),l.value=!1}async function y(a,t){l.value=!0;const s=0,m=e.data.length,u=await n.getUserList(new c,a,m,s,t.toMap());e.data=u.data,e.code=u.code,e.status=u.status,e.message=u.message,l.value=!1}return{isNoMoreRecord:i,userList:e,loading:l,limit:o,offset:r,id:g,paramHolder:U,userparamHolder:p,loadUserList:w,loadUserSearchList:L,refleshUserSearchList:h,resetUserSearchList:S,resetUserList:M,refleshUserFollowerFollowingList:y}}));export{j as u};
