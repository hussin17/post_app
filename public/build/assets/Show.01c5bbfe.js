import{A as c}from"./AppLayout.5265fce5.js";import _ from"./DeleteTeamForm.e208ad3d.js";import{J as d}from"./SectionBorder.2f466465.js";import f from"./TeamMemberManager.17396115.js";import u from"./UpdateTeamNameForm.74f6b307.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{d as g,r as t,o as a,f as h,w as r,a as m,b as o,c as v,F as y,g as T}from"./app.94623934.js";import"./ActionSection.2b4f487c.js";import"./SectionTitle.eec45afc.js";import"./ConfirmationModal.6ff6eb6d.js";import"./Modal.7cd33220.js";import"./DangerButton.68d8684b.js";import"./SecondaryButton.428cf6b1.js";import"./ActionMessage.0ee95468.js";import"./Button.86e68064.js";import"./DialogModal.4c9ba101.js";import"./FormSection.65e84fac.js";import"./Input.ca136a85.js";import"./InputError.7ccb21d9.js";import"./Label.163b6234.js";import"https://checkout.razorpay.com/v1/checkout.js";const B=g({props:["team","availableRoles","permissions"],components:{AppLayout:c,DeleteTeamForm:_,JetSectionBorder:d,TeamMemberManager:f,UpdateTeamNameForm:u}}),k=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"};function x(e,C,F,N,S,$){const s=t("update-team-name-form"),n=t("team-member-manager"),i=t("jet-section-border"),p=t("delete-team-form"),l=t("app-layout");return a(),h(l,{title:"Team Settings"},{header:r(()=>[k]),default:r(()=>[m("div",null,[m("div",w,[o(s,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),o(n,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),v(y,{key:0},[o(i),o(p,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):T("",!0)])])]),_:1})}var Y=b(B,[["render",x]]);export{Y as default};