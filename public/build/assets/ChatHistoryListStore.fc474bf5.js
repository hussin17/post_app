import{a as H,P as n}from"./PsApiService.ebe2eb3a.js";import{C as d}from"./ChatHistory.4704e4d0.js";import{S as w}from"./SyncChatHistoryParameterHolder.24ffbfbb.js";import{aB as S,B as c,i as L}from"./app.03d0793a.js";import{m as M}from"./PsSepetetedStore.9a31ac47.js";const R=M(v=>S(`chatHistoryListStore/${v}`,()=>{const l=c({value:!1}),e=c(new H),i=c({value:!1});let u=L(6),o=0;async function y(t,a,s,C){const r=new w;r.itemId=t,r.buyerUserId=a,r.sellerUserId=s,r.type=C,await n.syncChatHistory(new d,r.toMap())}function f(t){var a,s;e!=null&&e.data!=null&&e.data.length>0&&o!=0?(t.data!=null&&t.data.length>0?(((a=t.data)==null?void 0:a.length)<u.value?l.value=!0:l.value=!1,e.data.push(...t.data)):l.value=!0,e.code=t.code,e.status=t.status,e.message=t.message):(((s=t.data)==null?void 0:s.length)<u.value||t.data==null?l.value=!0:l.value=!1,e.data=t.data,e.code=t.code,e.status=t.status,e.message=t.message),e!=null&&e.data!=null&&(o=e.data.length)}async function h(t,a){i.value=!0;const s=await n.getChatHistoryList(new d,u.value,o,t,a.toMap());f(s),i.value=!1}async function m(t,a){o=0,l.value=!1,i.value=!0;const s=await n.getChatHistoryList(new d,u.value,o,t,a.toMap());f(s),i.value=!1}async function g(t,a){i.value=!0,await n.resetUnreadMessageCount(new d,t,a.toMap()),i.value=!1}return{isNoMoreRecord:l,chatHistoryList:e,loading:i,limit:u,offset:o,postChatHistory:y,loadChatHistoryList:h,resetChatHistoryList:m,resetUnreadMessageCount:g}}));export{R as u};
