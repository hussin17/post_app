import{f as c}from"./index.esm.074946f0.js";import"./auth.esm.ec72dae1.js";import{P as y}from"./PsLabel.dab9a58c.js";import{P as k}from"./PsLabelTitle.c62e8441.js";import{P as w}from"./PsLabelCaption.f7ef295a.js";import{P as x}from"./PsButton.de8e2c9c.js";import{P as V}from"./PsInput.fc15fc8e.js";import C from"./PsErrorDialog.951313ff.js";import{i as v,j as U,J as d,r as l,o as M,c as N,b as i,w as p,O as B,a as g,p as r,t as I}from"./app.94623934.js";import{P as h}from"./PsUtils.aa012712.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.3bf2e071.js";import"./vue-neat-modal.b0ab9d44.js";import"./PsLine.9a56d1e4.js";import"https://checkout.razorpay.com/v1/checkout.js";import"./PsLabelTitle.251aaca7.js";import"./PsLabel.6f218a30.js";import"./PsButton.3558548a.js";const W={name:"VerifyPhone",components:{PsLabel:y,PsLabelTitle:k,PsButton:x,PsInput:V,PsLabelCaption:w,PsErrorDialog:C},props:["authUser","firebaseConfig"],setup(a){let s,n;const t=v(),u=v(""),b=JSON.parse(a.firebaseConfig);c.apps.length<1&&c.initializeApp(b),U(async()=>{window.recaptchaVerifier=new c.auth.RecaptchaVerifier("recaptcha-container",{size:"invisible",callback:o=>{h.log("Callback"),h.log(o)},"expired-callback":()=>{h.log("expiry callback")}}),s=window.recaptchaVerifier;const e=s;n=await c.auth().signInWithPhoneNumber(a.authUser.user_phone,e).catch(o=>{t.value.openModal(d("phone_login__error_in_sign_in"),o==null?void 0:o.message)})});async function f(){const e=s;n=await c.auth().signInWithPhoneNumber(a.authUser.user_phone,e).catch(o=>{t.value.openModal(d("phone_login__error_in_sign_in"),o==null?void 0:o.message)})}async function m(){n!=null&&n.confirm(u.value).then(async e=>{e!=null&&e.user!=null&&e.user.uid!=null&&e.user.uid!=""&&(e.user,B.Inertia.post(route("updateVerify"),{verify_type:"4",user_id:a.authUser.id}))}).catch(e=>{t.value.openModal(d("phone_login__error_in_sign_in"),e==null?void 0:e.message)})}return{clicked:m,ps_error_dialog:t,code:u,resendMessage:f}}},j={class:"text-center items-center justify-center flex flex-col w-full h-screen"},z=r(" Please verify your phone "),D=r("We have sent verification code to this phone : "),E={class:"text-fePrimary-500"},J=r(" submit"),O=r(" resend"),R=g("div",{id:"recaptcha-container"},null,-1),S=r(),T=g("br",null,null,-1);function A(a,s,n,t,u,b){const f=l("ps-label-title"),m=l("ps-label"),e=l("ps-input"),o=l("ps-button"),P=l("ps-error-dialog");return M(),N("div",j,[i(f,{class:"mb-4"},{default:p(()=>[z]),_:1}),i(m,null,{default:p(()=>{var _;return[D,g("span",E,I((_=n.authUser)==null?void 0:_.user_phone),1)]}),_:1}),i(e,{class:"my-1 w-60",value:t.code,"onUpdate:value":s[0]||(s[0]=_=>t.code=_)},null,8,["value"]),i(o,{class:"my-1",onClick:t.clicked},{default:p(()=>[J]),_:1},8,["onClick"]),i(o,{class:"my-1",onClick:t.resendMessage},{default:p(()=>[O]),_:1},8,["onClick"]),i(P,{ref:"ps_error_dialog"},null,512),R,S,T])}var le=L(W,[["render",A]]);export{le as default};
