import{A as c}from"./AppLayout.920676de.js";import _ from"./DeleteTeamForm.6af71d34.js";import{J as d}from"./SectionBorder.02da9056.js";import f from"./TeamMemberManager.f8390203.js";import u from"./UpdateTeamNameForm.8e3198c1.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{d as g,r as t,o as a,f as h,w as r,a as m,b as o,c as v,F as y,g as T}from"./app.03d0793a.js";import"./ActionSection.771291e9.js";import"./SectionTitle.c9608a25.js";import"./ConfirmationModal.61f7adf2.js";import"./Modal.3d0559fb.js";import"./DangerButton.4a1befd9.js";import"./SecondaryButton.d4f0f3a5.js";import"./ActionMessage.bc2b6e46.js";import"./Button.f2106700.js";import"./DialogModal.aee66fd3.js";import"./FormSection.33f8ac55.js";import"./Input.ee8c0af1.js";import"./InputError.200fd10d.js";import"./Label.3df4c0c7.js";import"https://checkout.razorpay.com/v1/checkout.js";const B=g({props:["team","availableRoles","permissions"],components:{AppLayout:c,DeleteTeamForm:_,JetSectionBorder:d,TeamMemberManager:f,UpdateTeamNameForm:u}}),k=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};function x(e,C,F,N,S,$){const s=t("update-team-name-form"),n=t("team-member-manager"),i=t("jet-section-border"),p=t("delete-team-form"),l=t("app-layout");return a(),h(l,{title:"Team Settings"},{header:r(()=>[k]),default:r(()=>[m("div",null,[m("div",w,[o(s,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),o(n,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),v(y,{key:0},[o(i),o(p,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):T("",!0)])])]),_:1})}var Y=b(B,[["render",x]]);export{Y as default};
