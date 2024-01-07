import{d as j,r,o as p,f,w as s,c as $,a,b as o,m as h,v as _,u as k,h as v,g as P,p as n,t as b,n as J}from"./app.03d0793a.js";import{J as S}from"./Button.f2106700.js";import{J as C}from"./FormSection.33f8ac55.js";import{J as I}from"./Input.ee8c0af1.js";import{J as V}from"./InputError.200fd10d.js";import{J as N}from"./Label.3df4c0c7.js";import{J as B}from"./ActionMessage.bc2b6e46.js";import{J as F}from"./SecondaryButton.d4f0f3a5.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./SectionTitle.c9608a25.js";const A=j({components:{JetActionMessage:B,JetButton:S,JetFormSection:C,JetInput:I,JetInputError:V,JetLabel:N,JetSecondaryButton:F},props:["user"],data(){return{form:this.$inertia.form({_method:"PUT",name:this.user.name,email:this.user.email,photo:null}),photoPreview:null}},methods:{updateProfileInformation(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>this.clearPhotoFileInput()})},selectNewPhoto(){this.$refs.photo.click()},updatePhotoPreview(){const e=this.$refs.photo.files[0];if(!e)return;const t=new FileReader;t.onload=u=>{this.photoPreview=u.target.result},t.readAsDataURL(e)},deletePhoto(){this.$inertia.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{this.photoPreview=null,this.clearPhotoFileInput()}})},clearPhotoFileInput(){var e;(e=this.$refs.photo)!=null&&e.value&&(this.$refs.photo.value=null)}}}),D=n(" Profile Information "),E=n(" Update your account's profile information and email address. "),R={key:0,class:"col-span-6 sm:col-span-4"},z={class:"mt-2"},L=["src","alt"],M={class:"mt-2"},T=n(" Select A New Photo "),q=n(" Remove Photo "),G={class:"col-span-6 sm:col-span-4"},H={class:"col-span-6 sm:col-span-4"};function K(e,t,u,O,Q,W){const i=r("jet-label"),c=r("jet-secondary-button"),m=r("jet-input-error"),d=r("jet-input"),g=r("jet-action-message"),w=r("jet-button"),y=r("jet-form-section");return p(),f(y,{onSubmitted:e.updateProfileInformation},{title:s(()=>[D]),description:s(()=>[E]),form:s(()=>[e.$page.props.jetstream.managesProfilePhotos?(p(),$("div",R,[a("input",{type:"file",class:"hidden",ref:"photo",onChange:t[0]||(t[0]=(...l)=>e.updatePhotoPreview&&e.updatePhotoPreview(...l))},null,544),o(i,{for:"photo",value:"Photo"}),h(a("div",z,[a("img",{src:e.user.profile_photo_url,alt:e.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,L)],512),[[_,!e.photoPreview]]),h(a("div",M,[a("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:k("background-image: url('"+e.photoPreview+"');")},null,4)],512),[[_,e.photoPreview]]),o(c,{class:"mt-2 me-2",type:"button",onClick:v(e.selectNewPhoto,["prevent"])},{default:s(()=>[T]),_:1},8,["onClick"]),e.user.profile_photo_path?(p(),f(c,{key:0,type:"button",class:"mt-2",onClick:v(e.deletePhoto,["prevent"])},{default:s(()=>[q]),_:1},8,["onClick"])):P("",!0),o(m,{message:e.form.errors.photo,class:"mt-2"},null,8,["message"])])):P("",!0),a("div",G,[o(i,{for:"name",value:"Name"}),o(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":t[1]||(t[1]=l=>e.form.name=l),autocomplete:"name"},null,8,["modelValue"]),o(m,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",H,[o(i,{for:"email",value:"Email"}),o(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":t[2]||(t[2]=l=>e.form.email=l)},null,8,["modelValue"]),o(m,{message:e.form.errors.email,class:"mt-2"},null,8,["message"])])]),actions:s(()=>[o(g,{on:e.form.recentlySuccessful,class:"me-3"},{default:s(()=>[n(b(e.$t("core__be_btn_saved")),1)]),_:1},8,["on"]),o(w,{class:J({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:s(()=>[n(b(e.$t("core__be_btn_save")),1)]),_:1},8,["class","disabled"])]),_:1},8,["onSubmitted"])}var le=U(A,[["render",K]]);export{le as default};
