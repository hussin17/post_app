import{i as b,r as _,o as g,f as x,w as s,a as d,b as n,p as a,t as l,c as $,g as N,h as M}from"./app.af382b17.js";import{P as B}from"./PsModal.95640547.js";import{P as D}from"./PsLabel.43555620.js";import{P as F}from"./PsLabelHeader4.2d9bcd44.js";import{P as S}from"./PsButton.a8f09858.js";import{P as V}from"./PsIcon.25e3c482.js";import{P as H}from"./PsLink1.f32fb499.js";import{P as L}from"./PsDraggable.bc4f766f.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";const T={name:"PsCsvModal",components:{PsLabelHeader4:F,PsLabel:D,PsLink1:H,PsButton:S,PsModal:B,PsIcon:V,PsDraggable:L},props:{url:{type:String,default:"https://bit.ly/3G4MvHj"}},setup(o){const e=b(),m=b();let t,k,f;function u(){e.value.toggle(!1)}function C(r,P){e.value.toggle(!0),t=r,k=P}function c(){m.value.click()}let p=b("");const h=r=>{p.value=r.dataTransfer.files[0]};let v=b();function y(r){f=r.target.files[0],v.value=f.name}function i(r){t(f),e.value.toggle(!1)}async function w(){e.value.toggle(!1)}return{psmodal:e,openModal:C,clicked:w,cancel:u,okClicked:t,cancelClicked:k,defaultClick:c,image:m,dropzoneFile:p,drop:h,onCsvSelected:y,actionClicked:i,fileName:v}}},z={class:"hidden sm:flex justify-end"},E={class:"mx-2.5"},G={key:2,class:"file-info"},I=d("br",null,null,-1),O=d("br",null,null,-1),W=d("br",null,null,-1);function q(o,e,m,t,k,f){const u=_("ps-icon"),C=_("ps-label-header-4"),c=_("ps-label"),p=_("ps-button"),h=_("ps-link-1"),v=_("ps-draggable"),y=_("ps-modal");return g(),x(y,{ref:"psmodal",line:"hidden",maxWidth:"480px",bodyHeight:"574px",isClickOut:!1,theme:"px-4 pt-4 pb-8 shadow-xl rounded-lg bg-white dark:bg-secondaryDark-black"},{title:s(()=>[d("div",z,[n(u,{onClick:e[0]||(e[0]=i=>t.cancel()),name:"cross",theme:"text-secondary-400"})]),n(u,{class:"mx-auto",name:"cloud",w:"79",h:"75",theme:"text-secondary-300 dark:text-secondary-600"}),n(C,{class:"text-center font-normal text-2xl mt-6 mb-4"},{default:s(()=>[a(l(o.$t("ps_csv_modal__title")),1)]),_:1})]),body:s(()=>[d("div",E,[n(v,{class:"mt-4 px-2.5",onDrop:M(t.drop,["prevent"])},{default:s(()=>[t.fileName?(g(),x(c,{key:0,textColor:"mb-2"},{default:s(()=>[a("1 "+l(o.$t("ps_image_upload__file_is_choosen")),1)]),_:1})):(g(),x(c,{key:1,textColor:"mb-2"},{default:s(()=>[a(l(o.$t("ps_image_upload__no_file_is_choosen")),1)]),_:1})),d("input",{type:"file",accept:".csv",ref:"image",style:{display:"none"},onChange:e[1]||(e[1]=i=>t.onCsvSelected(i))},null,544),n(p,{onClick:e[2]||(e[2]=i=>t.defaultClick()),class:"w-26 h-7 py-1 px-2 mt-2"},{default:s(()=>[a(l(o.$t("ps_csv_modal__choose_files")),1)]),_:1}),t.fileName?(g(),$("span",G,l(o.$t("ps_csv_modal__file_name"))+": "+l(t.fileName),1)):N("",!0),n(c,{textColor:"text-secondary-600 mt-3"},{default:s(()=>[a(l(o.$t("ps_csv_modal__follow_setps"))+" : ",1),I,a(" "+l(o.$t("ps_csv_modal__follow_setp_1")),1),O,a(" "+l(o.$t("ps_csv_modal__follow_setp_2"))+" : ",1),n(h,{url:m.url,textColor:"text-blue-500"},{default:s(()=>[a(l(o.$t("sample_download_here")),1)]),_:1},8,["url"]),W,a(" "+l(o.$t("ps_csv_modal__follow_setp_3")),1)]),_:1})]),_:1},8,["onDrop"])])]),footer:s(()=>[n(p,{class:"mx-auto mt-2",onClick:e[3]||(e[3]=i=>t.actionClicked())},{default:s(()=>[a(l(o.$t("ps_csv_modal__confirm_button")),1)]),_:1})]),_:1},512)}var ee=j(T,[["render",q]]);export{ee as P};